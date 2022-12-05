import { getDicts } from '@/api/system/dict/data'
import dictConverter from './DictConverter'
export const options = {
  metas: {
    '*': {
      request (dictMeta) {
        return getDicts(dictMeta.type).then(res => res.data)
      },
      responseConverter
    }
  }
}

function responseConverter (response, dictMeta) {
  const dicts = response
  if (dicts === undefined) {
    console.warn(`no dict data of "${dictMeta.type}" found in the response`)
    return []
  }
  return dicts.map(d => dictConverter(d, dictMeta))
}

export default options
