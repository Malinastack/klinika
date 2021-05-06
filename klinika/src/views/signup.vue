<template>
  <form @submit="signup">
    <div class="okno">
      <h1>Rejestracja</h1>
      Podaj adres e-mail
      <div>
        <input type="email" v-model="email" required />
      </div>
      Podaj hasło
      <div>
        <input type="password" v-model="password" required />
      </div>
      Potwierdź hasło
      <div>
        <input type="password" v-model="passwordConfirm" required />
      </div>
      Podaj imię
      <div>
        <input type="name" v-model="firstName" required>
      </div>
      Podaj nazwisko
      <div>
        <input type="name" v-model="lastName" required>
      </div>
      <button type="submit" id="zatwierdz">Signup</button>
    </div>
    <div>
      {{ user }}
    </div>
  </form>
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      user: "",
      email: null,
      password: null,
      passwordConfirm: null,
      firstName: null,
      lastName: null,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        this.user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        };
      } else {
        alert("hasła nie są takie same!");
      }
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
  background-color: rgb(44, 148, 99);
  width: 80px;
  text-align: center;
  padding: 5px;
  margin-left: 320px;
}
#anuluj {
  background-color: rgb(211, 11, 51);
  width: 80px;
  text-align: center;
  padding: 5px;
  margin-left: 320px;
}
</style>
