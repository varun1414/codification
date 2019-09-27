<template>
<div>
   <div class="q-pa-s">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" style="height:350px"/>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
   </div>
  
  <div class="q-pa-md  q-gutter-md  center">
    <div class="row">
    <div class="col">
    <q-card class="my-card">
     
      <q-card-section>
        <q-circular-progress
      show-value
      font-size="12px"
      :value="value"
      size="100px"
      :thickness="0.22"
      color="grey-10"
      track-color="blue-4"
      class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress>
    
    <q-item fixed-right> PROGRESS</q-item>
    
      </q-card-section>
    </q-card>
    </div>
    <div class="col">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
    
      <q-card-section>
        <div class="text-h6">Rewards</div>
        
      </q-card-section>

      <q-card-section>
         <q-icon name="img:statics/plat.png " size="56px"/>
        Platinum Coins:{{platinum}}
       
        <q-icon name="img:statics/gold.png " size="56px"/>
        Gold Coins:{{gold}}
        
        
       
        
        
      </q-card-section>
    </q-card>
</div>
    </div>
<div class="row">
  <div class="col">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
    </div>
<div class="col">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
</div>
</div>
  </div>
</div>

</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      slide:1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      value:20,
      rank:1,
      gold:2,
      platinum:7
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 300%
  max-width: 450px
</style>