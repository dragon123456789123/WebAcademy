import Api from '@/services/Api'

export default {
  index (userId) {
    return Api().post('shops', userId)
  },
  create (classe) {
    return Api().post('create-class', classe)
  },
  dislike (shop) {
    return Api().post('dislike-shops', shop)
  },

}
