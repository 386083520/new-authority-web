import Dict from './Dict'
export default function (Vue, options) {
  Vue.mixin({
    data () {
      const dict = new Dict()

      return {
        dict
      }
    },
    created () {
      this.dict.init(this.$options.dicts).then(() => {

      })
    }
  })
}
