/* const app = {
  data() {
    return {
      showBooks: true,
      title: 'petit joe',
      author: 'un pere la',
      age: 50,
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    eventHandler(e, data){
      console.log(e, e.type);

      if(data){
        console.log(data)
      }
    },
    handleMousemove(e){
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
}

Vue.createApp(app).mount('#app')
*/

const app1 = {
  data() {
    return {
      url: "https://web.facebook.com",
      showBooks: true,
      books: [
        { title: 'the name of the wind', author: 'patrick rot', image: './assets/img1.jpeg', isFav: true},
        { title: 'sous la cendre le feu', author: 'une mere la', image: './assets/img2.jpeg', isFav: true},
        { title: 'trois pretendants un mari', author: 'un pere la', image: './assets/img3.jpeg', isFav: true},

      ]
    }
  }, 
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    loadLinks(){
      window.open(this.url, "facebook")
    },
    toggleFav(book){
    book.isFav = !book.isFav
    },
  },
  computed:{
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  }
  
}

Vue.createApp(app1).mount('#app1')