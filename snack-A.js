/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */

 const  {createApp} = Vue
createApp({
    data(){
        return{
            message:'',
            comMessage:[],
            userMessage:[],
        }
    },

    methods:{
        newMessage(content){
            if(this.message !== ''){
                this.message='';
                this.userMessage.push(content)
            }
            setTimeout(() => {
                this.getRandomMessage()
              },1000)
        },
        
        getRandomMessage(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
            console.log(response.data.response)
            this.comMessage.push(response.data.response)         
            })
        }

    },
    

}).mount('#app');