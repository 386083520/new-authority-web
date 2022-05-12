export function isExternal (path) {
  return /^(https?:|tel:|mailto:)/.test(path)
}
