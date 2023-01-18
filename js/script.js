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
    // funzione per reperire X email
    getRandomEmail(number) {
      for (let i = 0; i < number; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.emails.push(response.data.response);
          });
      }
    },
  },
  mounted() {
    // evoco funzione
    this.getRandomEmail(10);
  },
});

// monto app
app.mount("#root");
