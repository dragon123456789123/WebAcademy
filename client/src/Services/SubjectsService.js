import Api from '@/services/Api'

export default {
  index () {
    return Api().post('subjects',)
  },
  create (subject) {
    return Api().post('create-subject', subject)
  },
  dislike (shop) {
    return Api().post('dislike-shops', shop)
  },

}
