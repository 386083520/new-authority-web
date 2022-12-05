export default function (Vue, options) {
  Vue.mixin({
    data () {
      const dict = {
        type: {
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
      return {
        dict
      }
    },
    created () {
      console.log('gsdcreated')
    }
  })
}
