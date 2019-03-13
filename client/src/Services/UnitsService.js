import Api from '@/services/Api'

export default {
  index (classe) {
    return Api().post('class-units', classe)
  },
  create (unit) {
    return Api().post('create-unit', unit)
  },
  dislike (shop) {
    return Api().post('dislike-shops', shop)
  },

}
