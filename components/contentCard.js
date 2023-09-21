Vue.component('contentCard', {
    props: ['movie'],
    data() {
        return{
        image:this.movie.backdrop_path===null?"../image/apology-sorry.jpg":'https://image.tmdb.org/t/p/w500'+this.movie.backdrop_path,    
        }
      },
     
    template: 
    `
        <div v-if="image!==null" class="CardContainer">
            <div  class="cardImage" :style="{ 'background-image': 'url(' + image + ')' }"></div>
            <h2 class="CardTittle">{{movie.title || movie.name}}</h2>
        </div>
    `
});


