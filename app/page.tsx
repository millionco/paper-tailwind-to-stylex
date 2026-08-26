"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { convertPaperToStyleX } from "@/lib/convert"

type CopyState = "idle" | "copied" | "failed"

const copyToClipboard = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    const textarea = document.createElement("textarea")
    textarea.value = value
    textarea.setAttribute("readonly", "")
    textarea.style.position = "fixed"
    textarea.style.opacity = "0"
    document.body.appendChild(textarea)
    textarea.select()
    const copied = document.execCommand("copy")
    document.body.removeChild(textarea)
    return copied
  }
}

const conversionSummary = (classes: number, inlineStyles: number) => {
  const parts: string[] = []
  if (classes > 0) parts.push(`${classes} class${classes === 1 ? "" : "es"}`)
  if (inlineStyles > 0) {
    parts.push(`${inlineStyles} inline style${inlineStyles === 1 ? "" : "s"}`)
  }
  return parts.length > 0 ? `Converted ${parts.join(" and ")}.` : "No static styles found."
}

export default function Home() {
  const [source, setSource] = useState("")
  const [copyState, setCopyState] = useState<CopyState>("idle")
  const result = useMemo(() => convertPaperToStyleX(source), [source])

  const updateSource = useCallback(async (value: string) => {
    setSource(value)
    if (!value.trim()) {
      setCopyState("idle")
      return
    }
    const converted = convertPaperToStyleX(value)
    setCopyState((await copyToClipboard(converted.code)) ? "copied" : "failed")
  }, [])

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const value = event.clipboardData?.getData("text/plain") ?? ""
      if (!value) return
      event.preventDefault()
      void updateSource(value)
    }

    document.addEventListener("paste", handlePaste)
    return () => document.removeEventListener("paste", handlePaste)
  }, [updateSource])

  return (
    <main className="min-h-screen bg-canvas px-4 pb-12 pt-24 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="max-w-2xl space-y-3">
          <h1 className="text-lg font-normal tracking-tight text-content-foreground">
            Convert Paper output
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Paste static JSX from Paper anywhere on this page. Standard values
            use tailwind-stylex tokens, <em>arbitrary values stay exact</em>,
            and the generated StyleX code is copied to your clipboard.
          </p>
        </header>

        <Field>
          <FieldLabel htmlFor="paper-jsx">Paper JSX</FieldLabel>
          <Textarea
            id="paper-jsx"
            value={source}
            onChange={(event) => void updateSource(event.target.value)}
            placeholder="Paste Paper’s Tailwind JSX"
            spellCheck={false}
            className="min-h-80 resize-y bg-background font-mono text-xs leading-relaxed"
          />
          <FieldDescription>
            Static className strings and inline style objects convert
            automatically. Dynamic style expressions stay in place.
          </FieldDescription>
        </Field>

        <section aria-labelledby="stylex-output" className="space-y-2">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="stylex-output"
              className="text-lg font-normal tracking-tight text-content-foreground"
            >
              StyleX output
            </h2>
            {source ? (
              <p
                aria-live="polite"
                className="shrink-0 text-xs text-muted-foreground"
              >
                {copyState === "copied"
                  ? "Copied automatically"
                  : copyState === "failed"
                    ? "Clipboard access failed"
                    : "Copying"}
              </p>
            ) : null}
          </div>

          <div className="min-h-80 overflow-auto rounded-lg border border-border bg-background p-4 shadow-sm">
            {source ? (
              <pre className="min-w-max whitespace-pre font-mono text-xs leading-relaxed text-foreground">
                <code>{result.code}</code>
              </pre>
            ) : (
              <p className="text-sm text-muted-foreground">
                Paste Paper JSX to generate StyleX.
              </p>
            )}
          </div>

          {source ? (
            <p className="text-xs text-muted-foreground">
              {conversionSummary(
                result.convertedClasses,
                result.convertedInlineStyles,
              )}
              {result.unsupported.length > 0
                ? ` ${result.unsupported.length} unsupported class${
                    result.unsupported.length === 1 ? "" : "es"
                  } remain in className.`
                : ""}
            </p>
          ) : null}
        </section>
      </div>
    </main>
  )
}
