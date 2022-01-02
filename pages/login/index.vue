<template>
  <div>
    <login-form class="mt-12"></login-form>
  </div>
</template>
<script>
import LoginForm from '~/components/login/LoginForm.vue'
export default {
  components: {
    LoginForm,
  },
  layout: 'navbar/Navbar',
}
</script>
