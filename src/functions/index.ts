// Exports:
export const getHeader = (referrer: string, cookie: string) => ({
  'Host': 'docs.google.com',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://docs.google.com',
  'Referer': referrer,
  'Cookie': cookie,
  'Upgrade-Insecure-Requests': '1'
})

export const clearLastLines = (count: number) => {
  process.stdout.moveCursor(0, -count)
  process.stdout.clearScreenDown()
}
