import DictOptions from './DictOptions'
export default class DictMeta {
  constructor (options) {
    this.type = options.type
    this.request = options.request
    this.responseConverter = options.responseConverter
  }
}

DictMeta.parse = function (options) {
  let opts = null
  if (typeof options === 'string') {
    opts = DictOptions.metas['*']
    opts.type = options
  }
  return new DictMeta(opts)
}
