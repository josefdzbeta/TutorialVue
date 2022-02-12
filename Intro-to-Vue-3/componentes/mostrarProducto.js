app.component('mostrar-producto', {

  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
      <!-- <div v-show="enStock" class="product-image"> -->
        <div class="product-image">
          <a :href="url">
            <img v-bind:src="image" :title="tooltip"  />
          </a>
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p>{{descripcion}}</p>
          <p v-if="oferta">
            {{enOferta}}
          </p>
          <p v-if="enStock">Disponible</p>
          <p v-else="">Fuera de Stock</p>
          <p>Envío: {{envios}}</p>
          <producto-detalles :detalles="detalles"></producto-detalles>
          <ul>
          <li v-for="talla in tallas" :key="talla.id" class="inline">&nbsp;{{talla.tamanyo}}&nbsp;</li> 
          </ul>
          <div 
            v-for="(variante,index) in variantes" 
            :key="variante.id" 
            @mouseover="actualizarVariante(index)"
            class="color-circle" 
            :style="{ backgroundColor: variante.color}">
          </div>
        </div>
        <button class="button" :class="{disabledButton: !enStock }" :disabled="!enStock" @click="anyadirAlCarrito">Comprar</button>
        <button class="button" @click="borrarCarrito">Quitar </button>
      </div>
    </div>`,
  data() {
    return {
      producto: 'Calcetines',
      marca: 'Yupi',
      descripcion: 'Puro algodón Egipcio',
      varianteSeleccionada: 0,
      tooltip: 'Sin agujeros',
      url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
      //stock: false,
      oferta: true,
      detalles: ['50% algodón', '30% lana', '20% polyester'],
      variantes: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', cantidad: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', cantidad: 0 },
      ],
      tallas: [
        { id: 1, tamanyo: 'S' },
        { id: 2, tamanyo: 'M' },
        { id: 3, tamanyo: 'L' }
      ]
    }
  },
  methods: {
    anyadirAlCarrito() {
      this.unidades++
    },
    borrarCarrito() {
      if (this.unidades >= 1) {
        this.unidades--
      }
    },
    actualizarVariante(index) {
      this.varianteSeleccionada = index
    }
  },
  computed: {
    title() {
      return this.marca + ' ' + this.producto
    },
    image() {
      return this.variantes[this.varianteSeleccionada].image
    },
    enOferta(){
      if(this.oferta){
        return this.marca + ' ' + this.producto + ' en oferta: compra un calcetín y llévate un zapato.'
      }
    },
    enStock() {
      return this.variantes[this.varianteSeleccionada].cantidad
    },
    envios() {
      if (this.premium) {
        return 'Gratis'
      }
      return 2.99
    }
  }
})