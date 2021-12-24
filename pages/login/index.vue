<template>
  <div>
    <!-- <div
      class="z-10 fixed inset-0 bg-gray-500 bg-opacity-80 overflow-hidden h-full"
      :class="{ 'is-active': isLogin }"
    >
      <div class="h-full w-3/6 relative mar bg-red-500 p-10">
        <h1>Sign in</h1>
        <form action="" class="h-auto">
          <input type="text" />
          <input type="text" />
        </form>

        <button class="absolute top-0 right-0" @click="showLogin">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div> -->
    <button class="w-10 h-10 bg-red-500" @click="showLogin">login</button>
    <base-card
      class="w-2/6 h-auto hidden"
      :class="isLogin ? 'block' : 'bg-blue-500'"
    >
      <form>
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <!-- <p class="errors" v-if="!formIsValid">
          Please enter a valid email and password
        </p> -->
        <!-- <base-button>{{ submitButtonCap }}</base-button>
        <base-button type="button" mode="flat" @click="switchMode">{{
          switchButtonCap
        }}</base-button> -->
      </form>
    </base-card>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const isLogin = ref('false')
    const showLogin = () => {
      isLogin.value = !isLogin.value
      console.log(isLogin.value)
    }
    return { isLogin, showLogin }
  },
}
</script>
