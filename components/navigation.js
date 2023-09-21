Vue.component("navigation", {
  props: ["pageTO"],
  methods: {
    async buttonSelection(event) {
      setTimeout(async () => {
        await this.$refs["Movies"].classList.remove("actionSelected")
        await this.$refs["Series"].classList.remove("actionSelected")
        let button = this.$refs[String(event)]
        button.classList.add("actionSelected")
      }, 500)

    },
    async handleSelectButton(event) {

      let page = (typeof (event) === "string" ? event : event.target.value)
      if (page !== "Home") {
        await this.buttonSelection(page)
      }
      let navPage = {
        page: "",
        url: ""
      }
      switch (page) {
        case "Movies":
          navPage.page = "Movies"
          navPage.url = "movie"
          break;
        case "Series":
          navPage.page = "Series"
          navPage.url = "tv"
          break;
        default:
          navPage.page = "Home"
          navPage.url = ""
          break;
      }
      this.$emit('actualizarPage', navPage);
    }

  },
  template:
    `
        <div v-if="pageTO!=='Home'"class="NavBar">
            <button  @click="handleSelectButton" value="Home">Home</button>
            <button ref="Movies" @click="handleSelectButton" value="Movies">Movies</button>
            <button ref="Series" @click="handleSelectButton" value="Series">Series</button>
        </div>
        <div v-else class="home">
            <button ref="MoviesHome" @click="handleSelectButton" value="Movies">Movies</button>
            <button ref="SeriesHome" @click="handleSelectButton" value="Series">Series</button>
        </div>

        `

})