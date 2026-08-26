import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        // A label beside a disabled control takes that control's disabled text
        // colour rather than fading. Same move as 82f36c7, and the same reason:
        // opacity dims whatever is behind it too, and a label is often sitting
        // over a card or a fill it should not be thinning.
        // It also lands on the colour FieldLabel already uses for this, so a
        // label reads the same whether it learned about the disabled state from
        // a sibling control or from a Field around it.
        //
        // Both peer-disabled: and peer-data-disabled:, because the two kinds of
        // sibling say it differently. A native input carries :disabled; a Base UI
        // control does not — Checkbox, for one, renders a span, which no
        // form-control pseudo-class can ever match — and states it as
        // data-disabled instead. Naming only the first is why a disabled
        // checkbox's label stayed at full strength.
        //
        // A label beside an *unchecked* control softens, three fifths of the way
        // from the body text toward --muted-foreground: oklch 0.145 to about
        // 0.392. Arrived at by walking up from a tenth — a quarter read as
        // almost nothing beside a checked row, two fifths as not quite enough.
        // Still clear of disabled's 0.735, which is the ceiling on this number
        // rather than taste: an unpicked row has to read as available rather
        // than as switched off.
        //
        // --foreground and not currentColor, and that distinction was a silent
        // no-op rather than a nicety. color-mix() cannot resolve currentColor at
        // build time, so Lightning CSS folded the whole function down to
        // `color: currentColor` — a rule that compiled, shipped, matched, and
        // changed nothing. Two named colours resolve statically.
        //
        // Still needs no .dark counterpart: both ends are theme tokens, so under
        // .dark the mix runs from 0.985 toward 0.708 and softens by going darker.
        //
        // Scoped by peer-data-unchecked, which only a checkbox, radio or switch
        // ever sets, so a label beside anything else is untouched.
        //
        // Each state is named twice, peer-* and has-*, because a label relates to
        // its control in one of two ways and the selectors do not overlap. Beside
        // it — <Checkbox /> then <Label> — the control is a preceding sibling and
        // peer-* reaches it. Around it — <Label><Checkbox />text</Label>, which
        // is what makes a whole row one target — the control is a descendant and
        // only has-* reaches it. Naming one form leaves the other silently
        // unstyled, which is how a wrapped row ends up at full strength while a
        // sibling row recedes.
        "flex items-center gap-2 text-xs leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-input-disabled-foreground peer-data-unchecked:text-[color-mix(in_oklch,var(--foreground),var(--muted-foreground)_60%)] has-data-unchecked:text-[color-mix(in_oklch,var(--foreground),var(--muted-foreground)_60%)] peer-disabled:cursor-not-allowed peer-disabled:text-input-disabled-foreground peer-data-disabled:cursor-not-allowed peer-data-disabled:text-input-disabled-foreground has-data-disabled:cursor-not-allowed has-data-disabled:text-input-disabled-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Label }
