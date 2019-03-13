import Api from '@/services/Api'

export default {
  index(userId) {
    return Api().post('my-iclasses', userId)
  },
  remove (shop) {
    return Api().post('remove-shops', shop)
  }
}
