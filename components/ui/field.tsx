"use client"

import * as React from "react"
import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        // The label variant is a claim: it mirrors FieldLabel exactly —
        // label-foreground, normal weight — because a legend dressed as a
        // label must not out-shout the labels beside it (Ben, 2026-08-18).
        // Only a true legend keeps the medium weight.
        "mb-2.5 data-[variant=legend]:font-medium data-[variant=legend]:text-sm data-[variant=label]:text-xs data-[variant=label]:font-normal data-[variant=label]:text-label-foreground",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  )
}

// gap-1.5 is 6px, down from the 8px gap-2 this replaces: a label reads as
// attached to the control it names, and 8px let it float. Half-steps are on
// Tailwind's own scale, so this needs no arbitrary value.
// It is the gap between every pair of children in a Field, not just label and
// control, so a description under a control tightens by the same 2px.
const fieldVariants = cva(
  "group/field flex w-full gap-1.5 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
        horizontal:
          "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

/**
 * The id a Field's label points at, for its control to claim.
 *
 * A Field is a label and a control that belong to each other, and until this
 * existed nothing said so. FieldLabel rendered a real `<label>` with no `for`
 * and wrapped nothing, so clicking "Scope" or "Dataset" focused the body —
 * measured across all five call sites, all five dead. Screen readers had the
 * same nothing: an unassociated label is decoration.
 *
 * The ids were already there. Base UI mints one on every control it renders,
 * so the trigger and the input in that aside each had a generated id and no
 * one pointed at it. Reading it back out would mean a ref and an effect and a
 * guess about which descendant counts; minting one here and handing it down is
 * the same association stated forward.
 *
 * Not Base UI's own Field, which does all of this and more. The set's Field is
 * a layout box that happens to share the name, and swapping in a primitive
 * carrying validation, dirty and touched state under every existing field is a
 * much larger change than a missing `for` deserves. That collision of names is
 * worth knowing about: `<Field><FieldLabel>` reads like it associates, which is
 * probably why nobody checked.
 *
 * One id per Field, so a Field holding two controls would name them both. That
 * is not defended against — a Field is one label and one control by
 * construction, and the alternative is an API that asks which one is the
 * subject every time it is used.
 */
const FieldControlIdContext = React.createContext<string | undefined>(undefined)

function useFieldControlId() {
  return React.useContext(FieldControlIdContext)
}

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  const controlId = React.useId()
  return (
    <FieldControlIdContext.Provider value={controlId}>
      <div
        role="group"
        data-slot="field"
        data-orientation={orientation}
        className={cn(fieldVariants({ orientation }), className)}
        {...props}
      />
    </FieldControlIdContext.Provider>
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  htmlFor,
  onClick,
  ...props
}: React.ComponentProps<typeof Label>) {
  // An explicit htmlFor still wins: a Field whose control is not the one the
  // context reaches — a group of radios, say — has to be able to say so.
  const controlId = useFieldControlId()
  const targetId = htmlFor ?? controlId

  /**
   * Finish the gesture the platform starts.
   *
   * `<label for>` forwards a *bare click* and nothing before it. Measured, an
   * input reached this way receives `focus` then `click`, where the same input
   * clicked directly receives `pointerdown`, `mousedown`, then `click`. A
   * button does not care — its activation behaviour hangs off the click, which
   * is why a select opens from its label and always did. A control that opens
   * on pointerdown never hears the gesture at all, which is why the comboboxes
   * focused and sat there.
   *
   * So the missing half is dispatched here, and only to an input: a button
   * already responded to the click, and sending it a second press would toggle
   * back shut what the first one opened.
   */
  const completeGesture = (event: React.MouseEvent<HTMLLabelElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || !targetId) return
    const control = event.currentTarget.ownerDocument.getElementById(targetId)
    if (!(control instanceof HTMLInputElement)) return
    control.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }))
    control.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
  }

  return (
    <Label
      htmlFor={targetId}
      onClick={completeGesture}
      data-slot="field-label"
      className={cn(
        // text-label-foreground is a local addition: field labels read as
        // secondary to the value they label. Label itself is unchanged, so
        // labels beside a checkbox or switch keep --foreground.
        //
        // A label over a disabled input drops to the same colour as that input's
        // text, so the pair recedes together. The label is a *sibling* of the
        // control, so it cannot read :disabled off it — the rule hangs on
        // group/field and asks the Field whether it :has one. That also means it
        // works whether the control is a bare Input or an InputGroup, since both
        // put the disabled attribute on a real <input>.
        // Scoped to input:disabled deliberately: a Field wrapping a disabled
        // Button or Checkbox renders a <button>, and dimming its label is a
        // different decision from this one. A disabled Textarea is not covered
        // either, and would want the same treatment when it is asked for.
        //
        // A label over a focused input steps toward the body text instead of
        // receding, hanging on the same group/field for the same reason. A fifth
        // of the way, which is oklch 0.509 to about 0.436 — text needs more of a
        // move than a fill does before it registers at all, so this is smaller
        // than it reads as a number.
        //
        // Expressed as a mix toward --foreground rather than as a colour of its
        // own, which is the idiom the secondary Button's hover already uses. It
        // says "toward the text" rather than naming a step, so .dark inverts it
        // for free: there --label-foreground is 0.708 and --foreground is 0.985,
        // and the same expression lightens, which is the contrast-increasing
        // direction on a dark page.
        //
        // focus, not focus-visible: a click focuses the field and the label
        // should answer, the same call Input makes for its placeholder.
        "group/field-label peer/field-label flex w-fit gap-2 text-label-foreground leading-snug transition-colors group-has-[input:focus]/field:text-[color-mix(in_oklch,var(--label-foreground),var(--foreground)_20%)] group-has-[input:disabled]/field:text-input-disabled-foreground group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-none has-[>[data-slot=field]]:border *:data-[slot=field]:p-2 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-xs/relaxed group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-left text-xs/relaxed leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-xs group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-xs font-normal text-destructive", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  useFieldControlId,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
