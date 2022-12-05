import DictMeta from './DictMeta'
import Vue from 'vue'
const DEFAULT_DICT_OPTIONS = {
  types: []
}
export default class Dict {
  constructor () {
    this.type = {}
  }

  init (options) {
    if (options instanceof Array) {
      options = { types: options }
    } else {
      options = DEFAULT_DICT_OPTIONS
    }
    const opts = options
    const ps = []
    this._dictMetas = opts.types.map(t => DictMeta.parse(t))
    this._dictMetas.forEach(dicMeta => {
      const type = dicMeta.type
      Vue.set(this.type, type, [])
      ps.push(loadDict(this, dicMeta))
    })
    return Promise.all(ps)
  }
}

function loadDict (dict, dicMeta) {
  return dicMeta.request(dicMeta).then(response => {
    const type = dicMeta.type
    const dicts = dicMeta.responseConverter(response, dicMeta)
    dict.type[type].splice(0, Number.MAX_SAFE_INTEGER, ...dicts)
  })
}
