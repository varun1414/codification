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
   <div class="cent" >
    <div class="col-8">
     <q-circular-progress
      show-value
      font-size="40px"
      
      :value="value"
      size="400px"
      :thickness="0.25"
      color="blue-6"
      track-color="grey-10"
      class="q-ma-md"
    >

<div class="column" style="height: 150px; text-align:center; display:block; width:100%;">
      <div class="col">
         <h5>COURSE PROGRESS</h5>
      </div>
      <div class="col">
           {{ value }}% 
      </div>
    </div>

    </q-circular-progress>
  </div>
  </div>

  
   
  <div class="q-pa-md  q-gutter-md  center">
    <div class="row">
    <div class="col-6">

    <q-card dark bordered class="bg-grey-9 my-card" style="position:relative; ">

      <q-btn color="black" style="position:absolute; right:16px; bottom:16px;" label="Improve Your Rank" />
      <q-card-section>
        <div class="col">
      <div class="row">
        <div class="text-h6" style="text-align:right; font-family: 'Mansalva', cursive; padding:10px 0 0 0">#RANK</div>
        <div style="font-size:20px;  padding:0 0 0 20px">
        <q-icon name="img:statics/medal.png "  size="56px"/>{{rank}}
      </div>
      </div>  
    </div>
    </q-card-section>

      <q-separator dark inset />

      <q-card-section>

        
    <!-- <div class="col">

      <div class="row">
        <div class="text-h6" style="position:relative; height:20px; font-family: 'Mansalva', cursive; font-size:20px;">
        
        
      </div>
      </div>  
    </div>
         -->
        
      
        
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

      <q-card-section >
        <div class="row">
      <div class="col">
        <q-icon name="img:statics/plat.png " size="56px"/>
        Platinum Coins:{{platinum}}
      </div>
      <div class="col">
         <div style="text-align:left">
        <q-icon name="img:statics/gold.png " size="56px"/>
        Gold Coins:{{gold}}
        </div>
      </div>
      </div>
      <div class="row">
         <div class="cent" style="text-align:center; padding:30px 0 0 0;">
         <q-btn color="accent" label="Redeem" />
        </div>
      </div>
      </q-card-section>
    </q-card>
    </div>
    </div>
    </div>

<div style="margin:auto; width:50%; padding:0 100px 0 100px; text-align:center;">
    <q-card style="background-color:#c0bfc9 " >

      <q-card-section>
        <div style="font-size:20px; font-family: 'Lobster', cursive;">Your Status</div>
      </q-card-section>

      <q-card-section class="textstyle">
        <q-icon name="img:statics/icon.png " size="40px"/>
        <div style="font-size:20px">Streak Count:{{counter}} Days</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div style="font-size:15px">I have not failed. I've just found 10,000 ways that won't work.</div>
        <div style="font-style:italic; text-align:right"> ~Thomas A. Edison</div>
      </q-card-section>
    </q-card>
</div>
    <div style="height:100px"></div>

  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      slide:1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      value:0,
      rank:0,
      gold:0,
      platinum:0,

      counter: 22


    }
  },
  methods:{
    mounted(){
      this.gold=this.$state.userArray['gold'];
      this.platinum=this.$state.userArray['platinum'];
      this.points=this.$state.userArray['points'];
    }
  }
}
</script>

<style>
.cent{
  text-align:center;
  display: block;
  margin:auto;
}

.my-card{
  height:200px;
  max-width: 500px;
  display: block;
  margin:auto;
}

.textstyle{
  font-family: 'Josefin Sans', sans-serif; 
  font-weight: bold;
}
  
</style>
