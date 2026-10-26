declare global {
  const NYSYCODE_VERSION: string
  const NYSYCODE_CHANNEL: string
}

// Version used when running from source. Keep this in sync with package.json.
export const InstallationVersion = typeof NYSYCODE_VERSION === "string" ? NYSYCODE_VERSION : "0.1.0"
export const InstallationChannel = typeof NYSYCODE_CHANNEL === "string" ? NYSYCODE_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
