export * from "./client.js"
export * from "./server.js"

import { createNysycodeClient } from "./client.js"
import { createNysycodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export * as data from "./data.js"

export async function createNysycode(options?: ServerOptions) {
  const server = await createNysycodeServer({
    ...options,
  })

  const client = createNysycodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
