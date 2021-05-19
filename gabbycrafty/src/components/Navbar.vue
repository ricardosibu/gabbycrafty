<template>
<div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <img src="../assets/logo.png" width="120" alt="">
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" v-for="category in categories" :key="category.id">
      <router-link :to="category.slug">{{ category.title }}</router-link>
      <!-- <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">Shops</a>
      <a class="mr-5 hover:text-gray-900">About us</a>
      <a class="mr-5 hover:text-gray-900">Contact</a> -->
    </nav>
    <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <router-link to="/login">
      <box-icon name='user' ></box-icon>
      </router-link>
    
      <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> -->
    </button>
    <button v-if="!token" class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <router-link to="/login">
      <box-icon name='user-minus'></box-icon>
      </router-link>
    
      <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> -->
    </button>
    <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <box-icon name='shopping-bag'></box-icon>
      <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> -->
    </button>
  </div>
  
</template>

<script>
import { ref, onMounted } from 'vue'
import { getCategoriesApi } from '../api/category'
import "boxicons"
export default {
  setup() {
    const token = ref('')
    let categories = ref(null)

    onMounted(async () => {
      const response = await getCategoriesApi()
      categories.value = response
      console.log(response)
    })
    return {
      isMenuOpen: false,
      token,
      categories
    };
  },
};
</script>
