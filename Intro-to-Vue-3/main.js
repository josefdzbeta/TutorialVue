//Datos que recibe la aplicación de Vue

const app = Vue.createApp({
    data() {
        return {
            unidades: 0,
            premium: true
        }
           
    },
    methods: {}
    
})


//app hace referencia a <div id=app...
window.onload = () => { const appMontada = app.mount('#app') }