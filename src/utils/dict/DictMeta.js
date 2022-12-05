import { getDicts } from '@/api/system/dict/data'

export default class DictMeta {
  constructor (options) {
    this.type = options.type
    this.request = options.request
  }
}

DictMeta.parse = function (options) {
  let opts = null
  const metas = {
    request (dictMeta) {
      return getDicts(dictMeta.type).then(res => res.data)
    }
  }
  if (typeof options === 'string') {
    opts = metas
    opts.type = options
  }
  return new DictMeta(opts)
}
