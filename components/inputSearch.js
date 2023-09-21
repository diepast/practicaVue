Vue.component('inputSearch', {
   
    data() {
        return{
        search: '',    
        }
      },
      methods: {
        handleSearch(event) {  
            this.$emit('handleSearch', event.target.value);
        }       
      },
    template: 
    `
        <div class="inputContainer">
        <input class="inputSearch" value="" placeholder="Busca tu favorito!!!" v-model="this.search" @keyup="handleSearch"></input>
        </div>
    `
});