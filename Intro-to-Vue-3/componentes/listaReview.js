app.component('lista-review', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reseñas:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.nombre }} ha dado {{ review.clasificacion }} estrellas
          <br/>
          "{{ review.review }}"
          <br/>
          Recomendado: {{ review.recomendar }}
        </li>
      </ul>
    </div>
  `
  })