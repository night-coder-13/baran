
<template>
<div class="-mt-12">
  <div class="text-center">
    <h2 class="my-4 md:text-2xl text-xl">
      خدمات قرض الحسنه
    </h2>
  </div>
<swiper  :slidesPerView="1" :spaceBetween="30" :pagination='{"clickable": true}' class="mySwiper my-8"
:breakpoints='{
  "650": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "1024": {
    "slidesPerView": 3,
    "spaceBetween": 30
  }
}'
>
  <swiper-slide v-for="(service , index) in services" :key="index">
      <div class="flex">
        <div class="border-c_blue-70 border-2 rounded-md m-2 lg:h-52 max-h-28 lg:max-h-56 md:max-h-40 w-3/12 sm:w-4/12 relative">
          <div class="shadow-md h-full w-full absolute top-1 right-1 rounded-md bg-c_blue-50 p-1">
            <img :src="'http://baran98.ir/panel/public/'+service.image" :alt="service.title" class="h-full w-full " @click="getService(service.title , service.text)">
          </div>
        </div>
        <div class="pt-5 w-7/12 sm:w-6/12 mr-4">
          <h2 class="text-lg md:text-xl" v-text="service.title" @click="getService(service.title , service.text)"></h2>
          <p class="text-sm text-gry-700 h-24 sm:h-28 pt-2 overflow-hidden pr-2" v-html="service.text">
          </p>
          <div class="mt-4">
            <button class="rounded-md bg-c_blue-100 text-white px-3 py-1 text-xs" @click="getService(service.title , service.text)">مشاهده</button>
          </div>
        </div>
      </div>
  </swiper-slide>
  <!-- <swiper-slide>Slide 3</swiper-slide> -->
  </swiper>
</div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import "swiper/components/pagination/pagination.min.css"

// import './style.css';


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

import Swal from 'sweetalert2';
import axios from 'axios';
import { ref } from '@vue/reactivity';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(){
    const services=ref();

    function getService(title , text){
      Swal.fire({
        html:
          '<div class="text-right ">'+
          '<p class="w-full text-gray-700 text-xl mt-5 mb-3">'+title+'</p> ' +
          '<p class="w-full text-gray-500 text-base mr-3">'+text+'</p> ' +
          '</div>',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          'بستن پنجره',
        confirmButtonColor:'#d33'
      });
    }
    function get(){
      axios.get("http://baran98.ir/panel/service" )
        .then(response => {
            services.value= response.data;
        })
       .catch(function (error) {
             console.log(error);
        });
    }
    get()
    return {getService , services}
  }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container-horizontal>.swiper-pagination-bullets{
  bottom: -10px !important;
}
</style>
