const product = 'Calcetines'

//Datos que recibe la aplicación de Vue

const app = Vue.createApp({
    data() {
        return {
            producto: 'Calcetines',
            descripcion: 'De puro hilo de humo',
            imagen: 'assets/images/socks_blue.jpg',
            tooltip: 'Sin agujeros',
            url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: 3,
            unidades: 0,
            oferta: true,
            detalles: ['50% algodón', '30% lana', '20% polyester'],
            variantes: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
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
            if(this.unidades >= 1){
                this.unidades--
            }
        },
        actualizarImagen(varianteImage){
            this.imagen = varianteImage
        }
    }
})


//app hace referencia a <div id=app...
window.onload = () => { const appMontada = app.mount('#app') }