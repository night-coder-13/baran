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
  <div class="w-full flex ">
    <div class="w-9/12 ">
      <Body />
    </div>
    <div class="w-3/12 ">
      <Said />
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../Home/footer.vue';
import Body from './body.vue';
import Said from './said.vue';
export default{
  components:{
    Body,
    Said,
    Footer
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
