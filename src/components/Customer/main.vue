<template>
  <nav>
      <div class="flex bg-c_blue-200 text-white sm:text-base text-xs justify-between">
        <div class="sm:mx-6 mx-1 my-2">
          <p>شماره تماس : 03145461504 - 03145464954</p>
        </div>
        <div class="sm:mx-6 mx-1 my-2">
          <p>کد شعبه : 1282</p>
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
    </nav>
    <div class="w-full text-center relative">
      <h2 class="m-auto w-full text-xl sm:text-3xl bg-white shadow-md py-3 absolute top-9 sm:top-12">راهنمای مشتریان</h2>
      <img src="../../assets/img/bg_guide.png" class="w-11/12 md:w-6/12 lg:w-4/12 m-auto" alt="راهنمای مشتریان">
      
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 m-8">
      <div class="text-center m-2" v-for="(g , index) in guide" :key="index">
        <img src="../../assets/img/baran-logo1.png" class="w-36 h-36 rounded-full shadow-lg m-auto" alt="">
        <h2 class="text-gray-700 text-lg sm:text-xl m-3" v-text="g.title"></h2>
        <button class="py-1 px-3 rounded-md bg-c_blue-200 m-2 text-white text-sm sm:text-base" @click="alert(g.title , g.text)" >مشاهده</button>
      </div>
    </div>
<br>
<Footer />
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import { ref } from '@vue/reactivity'
import Footer from '../Home/footer.vue'
export default{
  components:{
    Footer

  },
  setup(){
    const guide=ref()

    function alert(title , text){
      Swal.fire({
        html:
          '<div class="text-right ">'+
          '<p class="w-full text-gray-700 text-xl mt-5 mb-3">'+title+'</p> ' +
          '<p class="w-full text-gray-500 text-base mr-3">'+text+'</p>',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          'بستن پنجره',
        confirmButtonColor:'#d33'
        
      })
    }
     function get(){
      axios.get("http://baran98.ir/panel/guide" )
        .then(response => {
            guide.value= response.data;
        })
       .catch(function (error) {
             console.log(error);
        });
    }
    get()

    return {alert , guide}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
