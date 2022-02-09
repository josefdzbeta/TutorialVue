//Datos que recibe la aplicación de Vue

const app = Vue.createApp({
    data() {
        return {
            producto: 'Calcetines',
            marca: 'Yupi',
            descripcion: 'Puro algodón Egipcio',
            varianteSeleccionada: 0,
            tooltip: 'Sin agujeros',
            url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: 5,
            unidades: 0,
            oferta: true,
            detalles: ['50% algodón', '30% lana', '20% polyester'],
            variantes: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', stock: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', stock: 0 },
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
        actualizarVariante(index){
            this.varianteSeleccionada = index
        }
    },
    computed:{
        title(){
            return this.marca + ' ' + this.producto
        },
        image(){
            return this.variantes[this.varianteSeleccionada].image
        },
        enStock(){
            return this.variantes[this.varianteSeleccionada].stock
        },
        enOferta(){
            if(this.oferta){

                return this.marca + ' ' + this.producto + ' en oferta: compra un calcetín y llévate un zapato' 
            }
        }

        
    }
})


//app hace referencia a <div id=app...
window.onload = () => { const appMontada = app.mount('#app') }