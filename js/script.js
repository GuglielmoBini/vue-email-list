// creo app
const app = Vue.createApp({
  name: "Email List",
  data() {
    return {
      // array di email vuoto
      emails: [],
    };
  },
  methods: {
    // funzione per reperire 1 email
    getRandomEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.emails.push(response.data.response);
        });
    },
  },
  mounted() {
    // ciclo per avere 10 email random
    for (let i = 0; i < 10; i++) {
      this.getRandomEmail();
    }
  },
});

// monto app
app.mount("#root");
