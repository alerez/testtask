<script setup>
</script>

<template>
  <v-app>
   
    <v-main class="main">
      <div class="header_background" />
      <router-view />
    </v-main>
    
    <v-footer class="footer d-flex flex-column pa-0 mt-auto">
      <div class="footer__me d-flex w-100 justify-center align-center">
        <v-btn
          class="mt-1"
          variant="text"
          size="small"
          color="blue-accent-2"
          href="https://github.com/alerez"
          target="_blank"
        >
          GitHub
        </v-btn>
      </div>


      <div class="footer__rights px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Frozeneon</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
  * {
    font-family: Roboto, sans-serif;
  }

  .main {
    height: calc(100% - 90px);
  }

  .footer {
    background-color: #2a3ab4;
    color: #fff;

    &__me {
      height: 30px;
    }

    &__rights {
      opacity: .5;
    }
  }
</style>
