<template>
  <div class="w-2/6 mx-auto justify-center items-center">
    <base-card>
      <h1>Sign in</h1>
      <form>
        <div class="form-control">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" v-model="userName" />
        </div>
        <div class="form-control">
          <label for="password">password</label>
          <input type="text" name="password" id="password" v-model="password" />
        </div>
        <div class="form-control">
          <label for="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            v-model="firstName"
          />
        </div>
        <div class="form-control">
          <label for="lastname">Lastname</label>
          <input
            type="text"
            name=" lastname"
            id="lastname"
            v-model="lastName"
          />
        </div>
        <div class="form-control">
          <label for="mobilenumber">Mobilenumber</label>
          <input
            type="text"
            name="mobilenumber"
            id="mobilenumber"
            v-model="mobileNumber"
          />
        </div>
        <div class="form-control">
          <div>
            <label for="gender">Male</label>
            <input type="radio" name="gender" value="male" v-model="gender" />
          </div>
          <div>
            <label for="gender">Female</label>
            <input type="radio" name="gender" value="female" v-model="gender" />
          </div>
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="email" />
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
import BaseCard from '../ui/BaseCard.vue'
export default {
  components: { BaseCard },
  setup() {
    const userName = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const mobileNumber = ref('')
    const gender = ref([])
    const email = ref('')
    return {
      userName,
      password,
      firstName,
      lastName,
      mobileNumber,
      gender,
      email,
    }
  },
}
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
