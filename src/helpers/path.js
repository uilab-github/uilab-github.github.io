export function sanitizeUrls(text) {
  // const isProd = process.env.NODE_ENV === 'production'
  const staticUrl = `${process.env.BASE_URL}assets/`
  return (text || '').replace(/@\//g, staticUrl);
}
