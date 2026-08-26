import assert from "node:assert/strict"
import test from "node:test"

import { convertPaperToStyleX } from "./convert"

test("converts Paper spacing, color, type, and layout utilities", () => {
  const result = convertPaperToStyleX(`export default function Example() {
  return <div className="flex left-42.5 top-98.25 rounded-full absolute bg-[#2020205E] text-base/6.25" />
}`)
  assert.match(result.code, /import \{ fontSizes, radii \}/)
  assert.match(result.code, /"display": "flex"/)
  assert.match(result.code, /"left": "calc\(\.25rem \* 42\.5\)"/)
  assert.match(result.code, /"backgroundColor": "#2020205E"/)
  assert.match(result.code, /stylex\.props\(styles\.node0\)/)
  assert.equal(result.unsupported.length, 0)
})

test("preserves unsupported utilities and reports them", () => {
  const result = convertPaperToStyleX(`<div className="flex mystery-utility" />`)
  assert.match(result.code, /className="mystery-utility"/)
  assert.deepEqual(result.unsupported, ["mystery-utility"])
})

test("keeps colons inside arbitrary values", () => {
  const result = convertPaperToStyleX(`<div className="[font-synthesis:none]" />`)
  assert.match(result.code, /"fontSynthesis": "none"/)
  assert.equal(result.unsupported.length, 0)
})

test("returns untouched source when there are no static class names", () => {
  const source = `export default function Example() { return null }`
  assert.equal(convertPaperToStyleX(source).code, source)
})
