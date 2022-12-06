import { Message, MessageBox } from 'element-ui'

export default {
  msgSuccess (content) {
    Message.success(content)
  },
  confirm (content) {
    return MessageBox.confirm(content, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
  }
}
