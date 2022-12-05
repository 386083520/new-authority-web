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
  }
}
