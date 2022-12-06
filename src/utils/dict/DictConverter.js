import DictData from './DictData'
import DictOptions from './DictOptions'
export default function (dict, dictMeta) {
  console.log('gsddict', dict)
  const label = determineDictField(dict, DictOptions.DEFAULT_LABEL_FIELDS)
  const value = determineDictField(dict, DictOptions.DEFAULT_VALUE_FIELDS)
  return new DictData(dict[label], dict[value])
}

function determineDictField (dict, fields) {
  return fields.find(f => Object.prototype.hasOwnProperty.call(dict, f))
}
