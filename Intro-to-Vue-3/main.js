const product = 'Calcetines'

//Datos que recibe la aplicación de Vue

const app = Vue.createApp({
    data(){
        return {
            producto: 'Calcetines',
            descripcion: 'de puro hilo de humo',
            imagen: 'assets/images/socks_blue.jpg',
            tooltip: 'Sin agujeros',
            url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: 3,
            oferta: true,
            detalles: ['50% algodón', '30% lana', '20% plástico'],
            variantes: [
                {ref: 'A020', color:'green' },
                {ref: '09AA', color:'blue' }
            ],
            unidades: 0
        }
    }
})

//app hace referencia a <div id=app...
window.onload = () => {const appMontada = app.mount('#app')}