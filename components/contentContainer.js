Vue.component('contentContainer', {
  props: ["url"],
  data() {
    return {
      apiData: [],
      datosCargados: false,
      urlPage: "",
      inputSearch:""
    }
  },
  mounted() {
    this.cargarDatos()
  },
  watch: {
    url: "handleSearch"
  },
  methods: {
    async cargarDatos() {
      this.urlPage = 'https://api.themoviedb.org/3/discover/' + this.url + '?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&include_null_first_air_dates=false&sort_by=popularity.desc&with_origin_country=US&include_adult=false&include_video=true&page=1'
      await fetch(this.urlPage)
        .then(response => response.json())
        .then(data => {
          this.apiData = data.results;
          this.datosCargados = true;
        })
        .catch(error => {
          console.error('Error al cargar los datos:', error);
        });
    },

    async handleSearch(searchValue) {
      if(searchValue!==this.url){
      this.inputSearch = searchValue      
      }    
      if (this.inputSearch!=="") {
        this.urlPage = 'https://api.themoviedb.org/3/search/' + this.url + '?query=' + this.inputSearch + '&api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&include_null_first_air_dates=false&sort_by=popularity.desc&with_origin_country=US&include_adult=false&include_video=true&page=1'
        await fetch(this.urlPage)
          .then(response => response.json())
          .then(data => {
            this.apiData = data.results;
            this.datosCargados = true;
          })
          .catch(error => {
            console.error('Error al cargar los datos:', error);
          });
      } else { this.cargarDatos() }
    }
  },
  template:
    `
    
    <div v-if="datosCargados" class="container" >
        <inputSearch @handleSearch="handleSearch"></inputSearch>
        <div v-if="apiData.length===0" class="noResult" >
          <h1 >No existenresultados para tu busqueda</h1>
        </div>   
        <contentCard  v-else v-for="movie in apiData" :key="movie.id" :movie="movie" ></contentCard>
       
    </div>
    `
});