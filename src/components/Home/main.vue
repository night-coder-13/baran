<template>
  <Header />
  <Service />
  <Access />
  <News />
  <Address />
  <Gallery />
  <Footer />
</template>

<script>
import Access from './access.vue'
import Address from './address.vue'
import Footer from './footer.vue'
import Gallery from './gallery.vue'
import Header from './header.vue'
import News from './news.vue'
import Service from './service.vue'

export default {
components:{
  Header,
Service,
Access,
News,
Address,
Footer,
Gallery
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
