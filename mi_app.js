Vue.component('app', {
  data() {
    return {
      page: "Home",
      url: "movie",
    }
  },
  methods: {
    actualizarPage(nuevoPage) {
      if (nuevoPage.page !== this.page) {
        this.page = nuevoPage.page
        this.url = nuevoPage.url
      } 
    }
  },
  template: `
      <div>     
        <navigation @actualizarPage="actualizarPage" :pageTO="this.page"></navigation>
        <contentContainer v-if="page !== 'Home'"  :url="this.url" ></contentContainer>
      </div>
    `
});






