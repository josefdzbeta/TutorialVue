//Datos que recibe la aplicación de Vue

const app = Vue.createApp({
    data() {
        return {
            unidades: [],
            premium: true
        }
           
    },
    methods: {
        actualizarCarrito(id){
            this.unidades.push(id)
        },
        removerCarrito(id){
            const index = this.unidades.indexOf(id)
                if (index > -1){
                    this.unidades.splice(index,1)
                }
        }
    }
    
})


//app hace referencia a <div id=app...
window.onload = () => { const appMontada = app.mount('#app') }