import Api from '@/services/Api'

export default {
  index (unit) {
    return Api().post('class-lessons', unit)
  },
  create (lesson) {
    return Api().post('create-lesson', lesson)
  },
  dislike (shop) {
    return Api().post('dislike-shops', shop)
  },

}
