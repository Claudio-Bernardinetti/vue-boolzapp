/* Descrizione:
Iniziamo a lavorare alla nostra replica della nota app di messaggistica. L'esercitazione sará divisa in piú giornate, oggi iniziamo a lavorare alla prima milestone che vi
riporto di seguito:

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi CSS diverse

Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 */

// Importa il metodo createApp da Vue.js
const { createApp } = Vue

// Crea una nuova app Vue
createApp({
    // Definisce le proprietà dei dati per l'app
    data() {

        return {

            searchQuery: '',
            activeContact: null,
        

            me : [
                {
                name : 'Sofia',
                avatar: './assets/img/avatar_io.jpg',
                visible: true,
                }
            ],

            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '01/10/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            
                        },
                        {
                            date: '01/10/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            
                        },
                        {
                            date: '01/10/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '03/20/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            
                        },
                        {
                            date: '03/20/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '03/20/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '03/28/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '03/28/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '03/28/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '01/10/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '01/10/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '01/10/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '01/10/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '01/10/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '01/10/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '01/10/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '01/10/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '01/10/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '01/10/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '01/10/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '01/10/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                } 
                
            ],
        }
    },
    methods: {
        sendText(event) {
            // Ottieni il testo inserito dall'utente
            const userText = event.target.value;
    
            // Aggiungi il messaggio dell'utente all'array dei messaggi del contatto attivo
            this.addMessage({ date: new Date().toISOString(), message: userText, status: 'sent' });
    
            // Pulisci il campo di input
            event.target.value = '';
    
            // Simula una risposta dall'interlocutore dopo 1 secondo
            setTimeout(() => {
                this.addMessage({ date: new Date().toISOString(), message: 'Ok', status: 'received' });
            }, 1000);
        },
        changeActiveContact(index) {
            // Cambia il contatto attivo
            this.activeContact = this.contacts[index];
        },
        addMessage(newMessage) {
            // Aggiungi il nuovo messaggio all'array dei messaggi
            this.activeContact.messages.push(newMessage);
        },
        formatTime(dateString) {
            const date = new Date(dateString);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
    },
    computed: {
        filteredContacts() {
            // Filtra i contatti in base alla query di ricerca
            if (this.searchQuery) {
                return this.contacts.filter(contact =>
                    contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                return this.contacts;
            }
        }
    },
    created() {
        // Imposta il primo contatto come contatto attivo quando l'istanza Vue viene creata
        if (this.contacts.length > 0) {
            this.activeContact = this.contacts[0];
        }
    }
    }).mount('#app');




    

    