import Api from '@/services/Api'

export default {
  index (classe) {
    return Api().post('class-lessons', classe)
  },
  create (lesson) {
    return Api().post('create-lesson', lesson)
  },
  dislike (shop) {
    return Api().post('dislike-shops', shop)
  },

}
