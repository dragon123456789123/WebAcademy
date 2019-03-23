import Api from '@/services/Api'

export default {
  index (classe) {
    return Api().post('class-lessons', classe)
  },
  create (part) {
    return Api().post('create-l-part', part)
  },
  dislike (shop) {
    return Api().post('dislike-shops', shop)
  },

}
