
<template>
<div class="-mt-12">
  <div class="text-center">
    <h2 class="my-4 md:text-2xl text-xl">
      خدمات قرض الحسنه
    </h2>
  </div>
<swiper  :slidesPerView="2" :spaceBetween="30" :pagination='{
  "clickable": true
}' class="mySwiper my-8">
  <swiper-slide>
    <div class="w-full lg:w-10/12 m-auto grid grid-cols-1 sm:grid-cols-2">
      <div class="flex">
        <div class="border-c_blue-70 border-2 rounded-md m-2 lg:h-52 max-h-28 lg:max-h-56 md:max-h-40 w-3/12 sm:w-4/12 relative">
          <div class="shadow-md h-full w-full absolute top-1 right-1 rounded-md bg-c_blue-50 p-1">
            <img src="../../assets/img/mb.png" alt="" class="h-full w-full ">
          </div>
        </div>
        <div class="pt-5 w-7/12 sm:w-6/12 mr-4">
          <h2 class="text-lg md:text-xl">همراه بانک</h2>
          <p class="text-sm text-gry-700 pr-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <div class="mt-4">
            <button class="rounded-md bg-c_blue-100 text-white px-3 py-1 text-xs" @click="alert">مشاهده</button>
          </div>
        </div>
      </div>
      
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="flex">
        <div class="border-blue-400 border-2 rounded-md m-2 max-h-28 md:max-h-40 w-3/12 sm:w-4/12 relative">
          <div class="shadow-md h-full w-full absolute top-1 right-1 rounded-md bg-white"><img src="../../assets/img/mb.png" alt="" class="h-full w-full "></div>
        </div>
        <div class="pt-5 w-7/12 sm:w-6/12 mr-4">
          <h2 class="text-lg md:text-xl">همراه بانک</h2>
          <p class="text-sm text-gry-700 pr-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <div class="mt-4">
            <button class="rounded-md bg-cyan-500 text-white px-3 py-1 text-xs">مشاهده</button>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="border-blue-400 border-2 rounded-md m-2 max-h-28 md:max-h-40 w-3/12 sm:w-4/12 relative">
          <div class="shadow-md h-full w-full absolute top-1 right-1 rounded-md bg-white"><img src="../../assets/img/hb.png" alt="" class="h-full w-full "></div>
        </div>
        <div class="pt-5 w-7/12 sm:w-6/12 mr-4">
          <h2 class="text-lg md:text-xl">طرف های قرارداد صندوق</h2>
          <p class="text-sm text-gry-700 pr-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <div class="mt-4">
            <button class="rounded-md bg-cyan-500 text-white px-3 py-1 text-xs">مشاهده</button>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
  <!-- <swiper-slide>

  </swiper-slide> -->
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

    function alert(){
      Swal.fire({
        html:
          '<div class="text-right ">'+
          '<p class="w-full text-gray-700 text-xl mt-5 mb-3">لورم ایپسوم</p> ' +
          '<p class="w-full text-gray-500 text-base mr-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p> ' +
          '</div>',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          'بستن پنجره',
        confirmButtonColor:'#d33'
        
      })
    }
    function get(){
      axios.get("http://localhost/baran/panel/service" )
        .then(response => {
            services.value= response.data;
        })
       .catch(function (error) {
             console.log(error);
        });
    }
    get()
    return {alert , services}
  }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
