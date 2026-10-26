import { Flag } from "@/flag/flag"
import { Hono } from "hono"
import { getMimeType } from "hono/utils/mime"
import fs from "node:fs/promises"

const embeddedUIPromise = Flag.NYSYCODE_DISABLE_EMBEDDED_WEB_UI
  ? Promise.resolve(null)
  : // @ts-expect-error - generated file at build time
    import("nysycode-web-ui.gen.ts").then((module) => module.default as Record<string, string>).catch(() => null)

const DEFAULT_CSP =
  "default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; media-src 'self' data:; connect-src 'self' data:"

const FALLBACK = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>nysycode server</title>
  </head>
  <body style="font-family: ui-sans-serif, system-ui, sans-serif; margin: 3rem auto; max-width: 40rem;">
    <h1>nysycode server</h1>
    <p>This build does not include the embedded web interface. Use the terminal UI instead.</p>
  </body>
</html>`

export const UIRoutes = (): Hono =>
  new Hono().all("/*", async (c) => {
    const embeddedWebUI = await embeddedUIPromise
    if (!embeddedWebUI) {
      c.header("Content-Type", "text/html; charset=utf-8")
      c.header("Content-Security-Policy", DEFAULT_CSP)
      return c.body(FALLBACK)
    }

    const path = c.req.path
    const match = embeddedWebUI[path.replace(/^\//, "")] ?? embeddedWebUI["index.html"] ?? null
    if (!match) return c.json({ error: "Not Found" }, 404)

    if (!(await fs.exists(match))) return c.json({ error: "Not Found" }, 404)

    const mime = getMimeType(match) ?? "text/plain"
    c.header("Content-Type", mime)
    if (mime.startsWith("text/html")) c.header("Content-Security-Policy", DEFAULT_CSP)
    return c.body(new Uint8Array(await fs.readFile(match)))
  })
