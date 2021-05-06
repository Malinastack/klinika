<template>
  <form @submit="signin">
    <div class="okno">
      <h1>Logowanie</h1>
      Podaj adres e-mail
      <div>
        <input type="email" v-model="email" required />
      </div>
      Podaj hasło
      <div>
        <input
          type="password"
          style="margin-bottom:5px"
          v-model="password"
          required
        />
      </div>
      Nie posiadasz konta?
      <router-link to="/signup" style="color:black"
        >Zarejestruj się</router-link
      >
      <div>
        <input type="submit" value="zaloguj" id="zatwierdz" />
      </div>
      {{ user }}
    </div>
  </form>
</template>
<script>
export default {
  name: "Signin",
  data() {
    return {
      user: "",
      email: null,
      password: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      this.user = {
        email: this.email,
        password: this.password,
      };
    },
  },
};
</script>
<style>
.okno {
  background-color: bisque;
  margin: auto;
  width: 400px;
}
#zatwierdz {
  background-color: cornflowerblue;
  width: 80px;
  text-align: center;
  padding: 5px;
  margin-left: 320px;
  margin-top: 5px;
}
#anuluj {
  background-color: rgb(211, 11, 51);
  width: 80px;
  text-align: center;
  padding: 5px;
  margin-left: 320px;
}
</style>
