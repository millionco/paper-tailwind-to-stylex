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
  assert.equal(result.convertedClasses, 7)
  assert.equal(result.convertedInlineStyles, 0)
  assert.equal(result.unsupported.length, 0)
})

test("converts static inline styles from Paper", () => {
  const result = convertPaperToStyleX(`export default function Example() {
  return (
    <div style={{ boxSizing: 'border-box', color: '#A9A9A9', fontFamily: '"TestSohne-Buch", "Test Söhne", system-ui, sans-serif', fontSize: '16px', lineHeight: '24px', whiteSpace: 'pre-wrap', width: '658px' }}>
      Two years ago, coding agents were barely capable.
    </div>
  )
}`)
  assert.match(result.code, /import \* as stylex/)
  assert.match(result.code, /"boxSizing": "border-box"/)
  assert.match(result.code, /"color": "#A9A9A9"/)
  assert.match(result.code, /"fontFamily": "\\\"TestSohne-Buch\\\", \\\"Test Söhne\\\", system-ui, sans-serif"/)
  assert.match(result.code, /"whiteSpace": "pre-wrap"/)
  assert.match(result.code, /"width": "658px"/)
  assert.match(result.code, /stylex\.props\(styles\.node0\)/)
  assert.doesNotMatch(result.code, /style=\{\{/)
  assert.equal(result.converted, 7)
  assert.equal(result.convertedClasses, 0)
  assert.equal(result.convertedInlineStyles, 7)
})

test("merges static class names and inline styles into one StyleX rule", () => {
  const result = convertPaperToStyleX(
    `<div className="flex" style={{ transform: 'rotate(90deg)' }} />`,
  )
  assert.match(result.code, /"display": "flex"/)
  assert.match(result.code, /"transform": "rotate\(90deg\)"/)
  assert.match(result.code, /stylex\.props\(styles\.node0\)/)
  assert.doesNotMatch(result.code, /styles\.node1/)
  assert.doesNotMatch(result.code, /style=\{\{/)
  assert.equal(result.convertedClasses, 1)
  assert.equal(result.convertedInlineStyles, 1)
})

test("preserves dynamic inline style expressions", () => {
  const result = convertPaperToStyleX(
    `<div className="flex" style={{ color: foreground }} />`,
  )
  assert.match(result.code, /"display": "flex"/)
  assert.match(result.code, /style=\{\{ color: foreground \}\}/)
  assert.equal(result.convertedClasses, 1)
  assert.equal(result.convertedInlineStyles, 0)
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

test("returns untouched source when there are no static styles", () => {
  const source = `export default function Example() { return null }`
  assert.equal(convertPaperToStyleX(source).code, source)
})
