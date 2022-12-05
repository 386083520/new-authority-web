import DictMeta from './DictMeta'
const DEFAULT_DICT_OPTIONS = {
  types: []
}
export default class Dict {
  constructor () {
    this.type = {
      sys_normal_disable: [
        {
          value: 0,
          label: '禁用'
        },
        {
          value: 1,
          label: '正常'
        }
      ]
    }
  }

  init (options) {
    console.log('gsdinit', options)
    if (options instanceof Array) {
      options = { types: options }
    } else {
      options = DEFAULT_DICT_OPTIONS
    }
    const opts = options
    const ps = []
    this._dictMetas = opts.types.map(t => DictMeta.parse(t))
    this._dictMetas.forEach(dicMeta => {
      ps.push(loadDict(this, dicMeta))
    })
    return Promise.all(ps)
  }
}

function loadDict (dict, dicMeta) {
  return dicMeta.request(dicMeta).then(response => {
    console.log('gsdresponse', response)
  })
}
