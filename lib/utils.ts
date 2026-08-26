import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * The set's own radius names, told to tailwind-merge.
 *
 * These are `@theme` keys — `--radius-control` and friends — so Tailwind emits
 * `.rounded-control` and the class works. tailwind-merge is a separate program
 * that has never read the stylesheet: it ships a list of the radius names
 * Tailwind ships with, and `control` is not on it. So it does not recognise
 * `rounded-control` as a border-radius class at all, and a class it cannot
 * classify is a class it will not replace.
 *
 * The failure that follows is the quiet kind. `cn("rounded-control", "rounded-button")`
 * returns *both*, they land on the element together, and which one you get is
 * decided by which rule Tailwind happened to emit later — with the class you
 * passed sitting right there in the DOM, looking applied. Nothing errors and
 * nothing warns; the override just does not happen, and the next person reads
 * the JSX, sees the corner they asked for, and believes it.
 *
 * Corner-specific classes are a different group and are unaffected:
 * `cn("rounded-control", "rounded-t-none")` still keeps both, which is what
 * that pairing means.
 *
 * Add a name here whenever you add a `--radius-*` key to the theme.
 */
const RADIUS_NAMES = ["control", "button", "checkbox"]

/**
 * Same failure, for the set's named shadows. `shadow-badge` is not on
 * tailwind-merge's list, so `cn("shadow-badge", "shadow-none")` used to
 * return both, and a chip that asked for a solid fill kept the two white
 * insets that make the glass.
 *
 * Add a name here whenever you add a `--shadow-*` key to the theme.
 */
const SHADOW_NAMES = [
  "hairline",
  "control",
  "control-small",
  "tab-indicator",
  "tab-indicator-pill",
  "menu",
  "badge",
  "keycap",
  "keycap-pressed",
  "tooltip-keycap",
  "pagination-active",
  "primary",
]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: RADIUS_NAMES }],
      shadow: [{ shadow: SHADOW_NAMES }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
