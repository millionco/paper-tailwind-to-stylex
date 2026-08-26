type RawValue = { code: string; tokenGroup?: string }
type StyleValue = string | number | RawValue
type ConditionalValue = Record<string, StyleValue>
type StyleRule = Record<string, StyleValue | ConditionalValue>

export type ConversionResult = {
  code: string
  converted: number
  unsupported: string[]
}

const spacingKeys = new Set([
  "0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6",
  "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28",
  "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80",
  "96", "px",
])
const containerKeys = new Set([
  "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl",
  "5xl", "6xl", "7xl",
])
const fontSizeKeys = new Set([
  "xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl",
  "7xl", "8xl", "9xl",
])
const fontWeightKeys = new Set([
  "thin", "extralight", "light", "normal", "medium", "semibold", "bold",
  "extrabold", "black",
])
const radiusKeys = new Set([
  "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "full",
])
const colorFamilies = new Set([
  "slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber",
  "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue",
  "indigo", "violet", "purple", "fuchsia", "pink", "rose",
])

const raw = (code: string, tokenGroup?: string): RawValue => ({ code, tokenGroup })
const token = (group: string, key: string) =>
  raw(`${group}[${JSON.stringify(key)}]`, group)

const decodeArbitrary = (value: string) =>
  value.replace(/\\_/g, "\0").replace(/_/g, " ").replace(/\0/g, "_")

const arbitrary = (value: string) =>
  value.startsWith("[") && value.endsWith("]")
    ? decodeArbitrary(value.slice(1, -1))
    : null

const spacing = (value: string): StyleValue | null => {
  const custom = arbitrary(value)
  if (custom !== null) return custom
  if (spacingKeys.has(value)) return token("spacing", value)
  const numeric = Number(value)
  return Number.isFinite(numeric)
    ? numeric === 0
      ? 0
      : `calc(.25rem * ${numeric})`
    : null
}

const negativeSpacing = (value: string): StyleValue | null => {
  const resolved = spacing(value)
  if (resolved === null || resolved === 0) return resolved
  if (typeof resolved === "number") return -resolved
  if (typeof resolved === "string") return `calc(${resolved} * -1)`
  return `calc(${resolved.code} * -1)`
}

const dimension = (value: string, axis: "width" | "height") => {
  const custom = arbitrary(value)
  if (custom !== null) return custom
  const fixed: Record<string, string> = {
    auto: "auto",
    full: "100%",
    screen: axis === "width" ? "100vw" : "100vh",
    svh: "100svh",
    lvh: "100lvh",
    dvh: "100dvh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  }
  if (fixed[value]) return fixed[value]
  if (axis === "width" && containerKeys.has(value)) return token("containers", value)
  return spacing(value)
}

const color = (value: string): StyleValue | null => {
  const custom = arbitrary(value)
  if (custom !== null) return custom
  if (["inherit", "current", "transparent", "black", "white"].includes(value)) {
    return token("colors", value)
  }
  const match = value.match(/^([a-z]+)-(\d{2,3})$/)
  return match && colorFamilies.has(match[1])
    ? token("colors", `${match[1]}${match[2]}`)
    : null
}

const toCamelCase = (property: string) =>
  property
    .replace(/^-(webkit|moz|ms|o)-/, (_, vendor: string) =>
      vendor[0].toUpperCase() + vendor.slice(1) + "-",
    )
    .replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase())

const declarationsFor = (utility: string): StyleRule | null => {
  const arbitraryProperty = utility.match(/^\[([^:]+):(.+)\]$/)
  if (arbitraryProperty) {
    return {
      [toCamelCase(arbitraryProperty[1])]: decodeArbitrary(arbitraryProperty[2]),
    }
  }

  const exact: Record<string, StyleRule> = {
    absolute: { position: "absolute" },
    relative: { position: "relative" },
    fixed: { position: "fixed" },
    sticky: { position: "sticky" },
    static: { position: "static" },
    block: { display: "block" },
    "inline-block": { display: "inline-block" },
    inline: { display: "inline" },
    flex: { display: "flex" },
    "inline-flex": { display: "inline-flex" },
    grid: { display: "grid" },
    hidden: { display: "none" },
    "flex-row": { flexDirection: "row" },
    "flex-row-reverse": { flexDirection: "row-reverse" },
    "flex-col": { flexDirection: "column" },
    "flex-col-reverse": { flexDirection: "column-reverse" },
    "flex-wrap": { flexWrap: "wrap" },
    "flex-nowrap": { flexWrap: "nowrap" },
    "items-start": { alignItems: "flex-start" },
    "items-center": { alignItems: "center" },
    "items-end": { alignItems: "flex-end" },
    "items-stretch": { alignItems: "stretch" },
    "justify-start": { justifyContent: "flex-start" },
    "justify-center": { justifyContent: "center" },
    "justify-end": { justifyContent: "flex-end" },
    "justify-between": { justifyContent: "space-between" },
    "justify-around": { justifyContent: "space-around" },
    "justify-evenly": { justifyContent: "space-evenly" },
    "shrink-0": { flexShrink: 0 },
    shrink: { flexShrink: 1 },
    "grow-0": { flexGrow: 0 },
    grow: { flexGrow: 1 },
    "overflow-auto": { overflow: "auto" },
    "overflow-hidden": { overflow: "hidden" },
    "overflow-clip": { overflow: "clip" },
    "overflow-visible": { overflow: "visible" },
    "overflow-scroll": { overflow: "scroll" },
    "whitespace-normal": { whiteSpace: "normal" },
    "whitespace-nowrap": { whiteSpace: "nowrap" },
    "whitespace-pre": { whiteSpace: "pre" },
    "whitespace-pre-wrap": { whiteSpace: "pre-wrap" },
    "whitespace-pre-line": { whiteSpace: "pre-line" },
    "text-left": { textAlign: "left" },
    "text-center": { textAlign: "center" },
    "text-right": { textAlign: "right" },
    "text-justify": { textAlign: "justify" },
    italic: { fontStyle: "italic" },
    "not-italic": { fontStyle: "normal" },
    uppercase: { textTransform: "uppercase" },
    lowercase: { textTransform: "lowercase" },
    capitalize: { textTransform: "capitalize" },
    "normal-case": { textTransform: "none" },
    "rounded-none": { borderRadius: 0 },
    rounded: { borderRadius: token("radii", "default") },
    border: { borderWidth: token("spacing", "px") },
    "border-0": { borderWidth: 0 },
    "border-solid": { borderStyle: "solid" },
    "border-dashed": { borderStyle: "dashed" },
    "border-dotted": { borderStyle: "dotted" },
    "border-double": { borderStyle: "double" },
    "border-none": { borderStyle: "none" },
    "origin-center": { transformOrigin: "center" },
    "origin-top": { transformOrigin: "top" },
    "origin-top-left": { transformOrigin: "top left" },
    "origin-top-right": { transformOrigin: "top right" },
    "origin-bottom": { transformOrigin: "bottom" },
    "origin-bottom-left": { transformOrigin: "bottom left" },
    "origin-bottom-right": { transformOrigin: "bottom right" },
    "object-cover": { objectFit: "cover" },
    "object-contain": { objectFit: "contain" },
    "pointer-events-none": { pointerEvents: "none" },
    "pointer-events-auto": { pointerEvents: "auto" },
    "select-none": { userSelect: "none" },
    "select-text": { userSelect: "text" },
    antialiased: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  }
  if (exact[utility]) return exact[utility]

  const spacingMatch = utility.match(
    /^(-)?(m[trblxy]?|p[trblxy]?|gap|gap-x|gap-y)-(.+)$/,
  )
  if (spacingMatch) {
    const value = spacingMatch[1]
      ? negativeSpacing(spacingMatch[3])
      : spacing(spacingMatch[3])
    if (value === null) return null
    const properties: Record<string, string[]> = {
      m: ["margin"], mx: ["marginLeft", "marginRight"],
      my: ["marginTop", "marginBottom"], mt: ["marginTop"],
      mr: ["marginRight"], mb: ["marginBottom"], ml: ["marginLeft"],
      p: ["padding"], px: ["paddingLeft", "paddingRight"],
      py: ["paddingTop", "paddingBottom"], pt: ["paddingTop"],
      pr: ["paddingRight"], pb: ["paddingBottom"], pl: ["paddingLeft"],
      gap: ["gap"], "gap-x": ["columnGap"], "gap-y": ["rowGap"],
    }
    return Object.fromEntries(
      properties[spacingMatch[2]].map((property) => [property, value]),
    )
  }

  const insetMatch = utility.match(
    /^(-)?(inset|inset-x|inset-y|top|right|bottom|left)-(.+)$/,
  )
  if (insetMatch) {
    const value = insetMatch[1]
      ? negativeSpacing(insetMatch[3])
      : spacing(insetMatch[3])
    if (value === null) return null
    const properties: Record<string, string[]> = {
      inset: ["top", "right", "bottom", "left"],
      "inset-x": ["right", "left"], "inset-y": ["top", "bottom"],
      top: ["top"], right: ["right"], bottom: ["bottom"], left: ["left"],
    }
    return Object.fromEntries(
      properties[insetMatch[2]].map((property) => [property, value]),
    )
  }

  const dimensionMatch = utility.match(/^(w|h|min-w|min-h|max-w|max-h|size)-(.+)$/)
  if (dimensionMatch) {
    const name = dimensionMatch[1]
    const value = dimension(
      dimensionMatch[2],
      name.includes("h") ? "height" : "width",
    )
    if (value === null) return null
    const properties: Record<string, string[]> = {
      w: ["width"], h: ["height"], "min-w": ["minWidth"],
      "min-h": ["minHeight"], "max-w": ["maxWidth"],
      "max-h": ["maxHeight"], size: ["width", "height"],
    }
    return Object.fromEntries(properties[name].map((property) => [property, value]))
  }

  const roundedMatch = utility.match(/^rounded(?:-([trbl]|tl|tr|br|bl))?-(.+)$/)
  if (roundedMatch) {
    const value = radiusKeys.has(roundedMatch[2])
      ? token("radii", roundedMatch[2])
      : arbitrary(roundedMatch[2])
    if (value === null) return null
    const properties: Record<string, string[]> = {
      "": ["borderRadius"], t: ["borderTopLeftRadius", "borderTopRightRadius"],
      r: ["borderTopRightRadius", "borderBottomRightRadius"],
      b: ["borderBottomRightRadius", "borderBottomLeftRadius"],
      l: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      tl: ["borderTopLeftRadius"], tr: ["borderTopRightRadius"],
      br: ["borderBottomRightRadius"], bl: ["borderBottomLeftRadius"],
    }
    return Object.fromEntries(
      properties[roundedMatch[1] ?? ""].map((property) => [property, value]),
    )
  }

  const borderSide = utility.match(/^border-([trblxy])(?:-(.+))?$/)
  if (borderSide) {
    const sides: Record<string, string[]> = {
      t: ["borderTop"], r: ["borderRight"], b: ["borderBottom"],
      l: ["borderLeft"], x: ["borderLeft", "borderRight"],
      y: ["borderTop", "borderBottom"],
    }
    const properties = sides[borderSide[1]]
    const suffix = borderSide[2]
    if (!suffix) {
      return Object.fromEntries(
        properties.map((property) => [`${property}Width`, token("spacing", "px")]),
      )
    }
    if (["solid", "dashed", "dotted", "double", "none"].includes(suffix)) {
      return Object.fromEntries(
        properties.map((property) => [`${property}Style`, suffix]),
      )
    }
    const value = color(suffix)
    return value === null
      ? null
      : Object.fromEntries(
          properties.map((property) => [`${property}Color`, value]),
        )
  }

  if (utility.startsWith("border-")) {
    const value = color(utility.slice(7))
    if (value !== null) return { borderColor: value }
  }
  if (utility.startsWith("bg-")) {
    const value = color(utility.slice(3))
    if (value !== null) return { backgroundColor: value }
  }
  if (utility.startsWith("text-")) {
    const rest = utility.slice(5)
    const value = color(rest)
    if (value !== null) return { color: value }
    const [size, lineHeight] = rest.split("/")
    const customSize = arbitrary(size)
    if (fontSizeKeys.has(size) || customSize !== null) {
      const result: StyleRule = {
        fontSize: customSize ?? token("fontSizes", size),
      }
      result.lineHeight = lineHeight
        ? (spacing(lineHeight) ?? lineHeight)
        : token("fontSizeLineHeights", size)
      return result
    }
  }
  if (utility.startsWith("font-")) {
    const value = utility.slice(5)
    if (["sans", "serif", "mono"].includes(value)) {
      return { fontFamily: token("fonts", value) }
    }
    if (fontWeightKeys.has(value)) return { fontWeight: token("fontWeights", value) }
    const custom = arbitrary(value)
    if (custom !== null) {
      return /^\d+$/.test(custom)
        ? { fontWeight: Number(custom) }
        : { fontFamily: custom.replace(/['"]/g, "") }
    }
  }
  if (utility.startsWith("leading-")) {
    const value = utility.slice(8)
    if (["tight", "snug", "normal", "relaxed", "loose"].includes(value)) {
      return { lineHeight: token("lineHeights", value) }
    }
    const resolved = spacing(value) ?? arbitrary(value)
    if (resolved !== null) return { lineHeight: resolved }
  }
  if (utility.startsWith("tracking-")) {
    const value = utility.slice(9)
    if (["tighter", "tight", "normal", "wide", "wider", "widest"].includes(value)) {
      return { letterSpacing: token("letterSpacing", value) }
    }
  }
  if (utility.startsWith("opacity-")) {
    const value = Number(utility.slice(8))
    if (Number.isFinite(value)) return { opacity: value / 100 }
  }
  if (utility === "shadow") return { boxShadow: token("shadows", "default") }
  if (utility.startsWith("shadow-")) {
    const value = utility.slice(7)
    if (["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "inner"].includes(value)) {
      return { boxShadow: token("shadows", value) }
    }
  }
  return null
}

const splitVariants = (value: string) => {
  const parts: string[] = []
  let start = 0
  let depth = 0
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === "[") depth += 1
    if (value[index] === "]") depth -= 1
    if (value[index] === ":" && depth === 0) {
      parts.push(value.slice(start, index))
      start = index + 1
    }
  }
  parts.push(value.slice(start))
  return parts
}

const conditionFor = (variants: string[]) => {
  if (variants.length === 0) return null
  if (variants.length > 1) return null
  const variant = variants[0]
  if (["hover", "focus", "active", "disabled", "checked", "visited"].includes(variant)) {
    return `:${variant}`
  }
  if (["sm", "md", "lg", "xl", "2xl"].includes(variant)) {
    return `$raw:mediaQueries[${JSON.stringify(variant)}]`
  }
  if (variant === "dark") return "@media (prefers-color-scheme: dark)"
  return null
}

const mergeDeclarations = (
  target: StyleRule,
  declarations: StyleRule,
  condition: string | null,
) => {
  for (const [property, value] of Object.entries(declarations)) {
    if (condition === null) {
      target[property] = value
      continue
    }
    const current = target[property]
    const conditional: ConditionalValue =
      current && typeof current === "object" && !("code" in current)
        ? (current as ConditionalValue)
        : current === undefined
          ? {}
          : { default: current as StyleValue }
    conditional[condition] = value as StyleValue
    target[property] = conditional
  }
}

const isRawValue = (value: object): value is RawValue =>
  "code" in value && typeof value.code === "string"

const serializeValue = (
  value: unknown,
  indent: number,
  groups: Set<string>,
): string => {
  if (typeof value === "string" || typeof value === "number") return JSON.stringify(value)
  if (typeof value !== "object" || value === null) return JSON.stringify(value)
  if (isRawValue(value)) {
    if (value.tokenGroup) groups.add(value.tokenGroup)
    return value.code
  }
  return serializeObject(value as Record<string, unknown>, indent, groups)
}

const serializeObject = (
  value: Record<string, unknown>,
  indent: number,
  groups: Set<string>,
) => {
  const ownIndent = "  ".repeat(indent)
  const childIndent = "  ".repeat(indent + 1)
  const entries = Object.entries(value).map(([key, child]) => {
    const renderedKey = key.startsWith("$raw:")
      ? `[${key.slice(5)}]`
      : JSON.stringify(key)
    return `${childIndent}${renderedKey}: ${serializeValue(child, indent + 1, groups)}`
  })
  return entries.length
    ? `{\n${entries.join(",\n")}\n${ownIndent}}`
    : "{}"
}

const staticClassNamePattern = /className=(['"])([\s\S]*?)\1/g

export const convertPaperToStyleX = (source: string): ConversionResult => {
  const rules: Record<string, StyleRule> = {}
  const unsupported = new Set<string>()
  let converted = 0
  let index = 0

  const transformed = source.replace(
    staticClassNamePattern,
    (_match, quote: string, classNames: string) => {
      const ruleName = `node${index}`
      index += 1
      const rule: StyleRule = {}
      const remaining: string[] = []

      for (const className of classNames.trim().split(/\s+/).filter(Boolean)) {
        const parts = splitVariants(className)
        const utility = parts.pop() ?? ""
        const condition = conditionFor(parts)
        const declarations = declarationsFor(utility)
        if ((parts.length > 0 && condition === null) || declarations === null) {
          unsupported.add(className)
          remaining.push(className)
          continue
        }
        mergeDeclarations(rule, declarations, condition)
        converted += 1
      }

      rules[ruleName] = rule
      const preserved = remaining.length
        ? `className=${quote}${remaining.join(" ")}${quote} `
        : ""
      return `${preserved}{...stylex.props(styles.${ruleName})}`
    },
  )

  if (index === 0) return { code: source, converted: 0, unsupported: [] }

  const groups = new Set<string>()
  const stylesSource = serializeObject(rules, 0, groups)
  const tokenImport = groups.size
    ? `import { ${[...groups].sort().join(", ")} } from "tailwind-stylex/tokens.stylex";\n`
    : ""
  const unsupportedList = [...unsupported].sort()
  const unsupportedComment = unsupportedList.length
    ? `// Unsupported Tailwind classes are preserved in className: ${unsupportedList.join(", ")}\n`
    : ""
  const styleDeclaration = `${unsupportedComment}const styles = stylex.create(${stylesSource});\n\n`
  const exportIndex = transformed.search(/\bexport\s+default\b/)
  const body = exportIndex === -1
    ? `${styleDeclaration}${transformed}`
    : `${transformed.slice(0, exportIndex)}${styleDeclaration}${transformed.slice(exportIndex)}`

  return {
    code: `import * as stylex from "@stylexjs/stylex";\n${tokenImport}\n${body}`,
    converted,
    unsupported: unsupportedList,
  }
}
