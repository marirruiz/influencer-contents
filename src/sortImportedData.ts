import { plansSeed, productsSeed } from './importedData'

const recent = (a:string, b:string) => {
  if (!a) return 1
  if (!b) return -1
  return b.localeCompare(a)
}

productsSeed.sort((a, b) => recent(a.received, b.received))
plansSeed.sort((a, b) => recent(a.publish, b.publish))
