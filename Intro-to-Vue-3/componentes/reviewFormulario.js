app.component('review-formulario', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Deja tu reseña</h3>
    <label for="nombre">Nombre:</label>
    <input id="nombre" v-model="nombre">

    <label for="review">Reseña:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="clasificacion">Clasificación:</label>
    <select id="clasificacion" v-model.number="clasificacion">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <!-- solution -->
    <label for="recomendar">¿Recomendarías este producto?</label>
    <select id="recomendar" v-model="recomendar">
      <option>Sí</option>
      <option>No</option>
    </select>
    <!-- solution -->   

    <input class="button" type="submit" value="Enviar">  

  </form>`,
  data() {
      return {
          nombre: '',
          review: '',
          clasificacion: null,
          recomendar: null
      }
  },
  methods: {
      onSubmit(){

        if(this.nombre === '' || this.review === '' || this.clasificacion === null || this.recomendar === null){
          alert('Debes rellenar todos los campos.')
          return
        }
          let productoReview = {
              nombre: this.nombre,
              review: this.review,
              clasificacion: this.clasificacion,
              recomendar: this.recomendar
          }
          this.$emit('review-enviada', productoReview)

          this.nombre = ''
          this.review = ''
          this.clasificacion = null
          this.recommendar = null
      }
  },
})