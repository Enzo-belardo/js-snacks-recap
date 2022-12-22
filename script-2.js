/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const  {createApp} = Vue
createApp({
    data(){
        return{
            listInvitati: [],
            userInput:''    
        }
    },
    
    methods:{
        getListaInvitati(){
            for(let i = 0; i < 10 ; i++)
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((response) => {
                console.log(this.listInvitati)  
                const invitati = response.data.response
                this.listInvitati.push(invitati)
            })
            
        },
        checkIn(){
            if (this.listInvitati.includes(this.userInput)){
              return true
            } else {
              return false
            }
          }
    },
    
    created(){
        this.getListaInvitati()     
    },

}).mount('#app');

