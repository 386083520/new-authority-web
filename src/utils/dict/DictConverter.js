import DictData from './DictData'
export default function (dict, dictMeta) {
  return new DictData(dict.dictLabel, dict.dictValue)
}
