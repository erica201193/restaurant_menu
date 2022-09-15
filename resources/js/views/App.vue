<template>
    <div>
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-bs-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
          
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

        <TheNavbar></TheNavbar>
        <router-view></router-view>

        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';

    export default {
        components: {TheNavbar, TheFooter}
    }
</script>