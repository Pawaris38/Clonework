<template>
  <div>
    <!-- desktop -->
    <nav
      class="lg:flex items-center justify-between flex-wrap bg-fade py-6 px-20 block hidden"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6 flex-grow">
        <img
          class="fill-current h-8 w-auto"
          src="@/assets/images/gameson-logo.png"
          alt=""
        />
      </div>

      <div class="w-full flex items-center w-auto">
        <div class="font-bold text-lg flex-grow">
          <navbar-base-button class="block mt-4 inline-block mt-0 mr-4">
            <a href="#"> News </a>
          </navbar-base-button>
          <navbar-base-button class="block mt-4 inline-block mt-0 mr-4">
            <a href="#"> Reviews</a>
          </navbar-base-button>
          <navbar-base-button class="block mt-4 inline-block mt-0 mr-4">
            <a href="#"> Features </a>
          </navbar-base-button>
          <navbar-base-button class="block mt-4 inline-block mt-0 mr-4">
            <a href="#"> Guides </a>
          </navbar-base-button>
          <navbar-base-button class="block mt-4 inline-block mt-0 mr-4">
            <a href="#"> Video </a>
          </navbar-base-button>
        </div>
        <div class="inline-block px-4 py-2">
          <navbar-base-button>
            <font-awesome-icon icon="search" class="text-3xl" />
          </navbar-base-button>
        </div>
        <div>
          <navbar-base-button
            class="inline-block px-4 py-2 leading-none border-4 border-white rounded-3xl text-white hover:text-teal-500 mt-4 mt-0 font-bold text-lg"
          >
            <a href="login"> Login</a>
          </navbar-base-button>
        </div>
      </div>
    </nav>

    <!-- mobile -->
    <nav
      class="lg:hidden flex items-center justify-between flex-wrap bg-fade py-6 px-4 z-10"
    >
      <div class="flex items-center flex-shrink-0 text-white flex-grow">
        <img
          class="fill-current h-8 w-auto"
          src="@/assets/images/gameson-logo.png"
          alt=""
        />
      </div>

      <div class="flex">
        <navbar-base-button class="outline-none mobile-menu-button">
          <svg
            class="w-10 h-10 text-white font-bold"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="switchShowStatus"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </navbar-base-button>
      </div>
      <div class="hidden mobile-menu">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >About</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="switchShowStatus"
          >
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

        <ul class="divide-y text-black">
          <li>
            <a href="#a" @click="switchShowStatus" class="my-4 inline-block"
              >Home</a
            >
          </li>
          <li>
            <a href="#b" @click="switchShowStatus" class="my-4 inline-block"
              >Services</a
            >
          </li>
          <li>
            <a href="#c" @click="switchShowStatus" class="my-4 inline-block"
              >Features</a
            >
          </li>
          <li>
            <a href="#d" @click="switchShowStatus" class="my-4 inline-block"
              >FAQ</a
            >
          </li>
          <li>
            <a href="#e" @click="switchShowStatus" class="my-4 inline-block"
              >Contact</a
            >
          </li>
          <li>
            <a
              href="#f"
              @click="switchShowStatus"
              class="my-8 w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
              >Sign Up</a
            >
          </li>
        </ul>
      </aside>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import { ref, watch } from '@nuxtjs/composition-api'
export default {
  setup() {
    const isOpen = ref(false)
    const isLogin = ref(false)
    const switchShowStatus = () => {
      isOpen.value = !isOpen.value
      console.log(isOpen.value)
    }
    const showLogin = () => {
      isLogin.value = !isLogin.value
      console.log(isLogin.value)
    }

    watch(isOpen, (currentValue, oldValue) => {
      if (process.client) {
        if (currentValue) {
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          document.body.style.removeProperty('overflow')
        }
      }
    })
    return { isOpen, switchShowStatus, showLogin, isLogin }
  },
}
</script>

<style lang="postcss" scoped>
.navbar-container-desktop {
  @apply w-full  h-16 z-10 fixed lg:flex;
}
.bg-fade {
  background-image: linear-gradient(to right, #2c2ea9, #2ed1f4);
}
.hide {
  visibility: hidden;
}
.is-active {
  display: block;
}
.border {
  border: 2px solid #3454ff;
}
.colorinput {
  border: 2px solid #3454ff61;
}
.bgcolor {
  background-color: #3454ff;
}
.mar {
  margin: 10% auto 15% auto;
}
</style>
