<template>
     <div>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
       <ul>
  <li><a class="active" @click="login()">Login!</a></li>
  
  </ul>
   <q-carousel
      style="padding-top:0.2px"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
      <q-carousel-slide :name="2" img-src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"/>
      <q-carousel-slide :name="3" img-src="https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=871&q=80" />
      <q-carousel-slide :name="4" img-src="https://images.unsplash.com/flagged/photo-1556655678-9d4812e3fbe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" />
    </q-carousel>
    
    <div style="background-color:	#DCDCDC; padding-top: 23px; padding-bottom:1px">
       <q-card class="my-card">
      <img src="https://code-it-studio.de/wp-content/uploads/2018/05/logo_blau_mit_rand_font3_svg.png" style="width:100%;">

      <q-card-section>
        <div class="text-h6">Practice and learn the fun way</div>
        <div class="text-subtitle2">Order Now!!</div>
      </q-card-section>
      
      </q-card>
      
      <p  class="move" ><strong>Codification</strong></p>
      <p class="move1"><strong>Learn to Code the fun Way!</strong></p>
      <div class="mov">
          <q-card class="my-card">
      <img src="https://res.cloudinary.com/gopaisacom/image/upload/promotions/eat.png" style="width:100%;">

      <q-card-section>
        <div class="text-h6"> Interesting Offers for you!</div>
        <div class="text-subtitle2">Avail it!</div>
      </q-card-section>
       <q-card-section>
       
      </q-card-section>
      </q-card>
      </div>
       <div style="background-color:	black; padding-top: 40px; padding-bottom:10px"></div>
    </div>
    </div>
  </template>
  <script>
   export default {
     data(){
       return{
          slide: 1
       }
     },
     methods:
     {
       login(){
         this.$router.push('/login')
       },
       about(){
         this.$router.push('/about')
       }
       
     }
   }
   </script>
     <style>
     .mov{
        position:absolute;
        top: 485px;
        bottom: 40px;
         left: 1060px;
     }
     .move{
        font-family: 'Clicker Script';
        font-size: 85px;
        position: fixed;
        top: 490px;
        bottom: 40px;
         left: 520px;
       
     }
     .move1{
        font-family: 'Clicker Script';
        font-size: 30px;
        position: fixed;
        top: 590px;
        bottom: 40px;
         left: 520px;
     }
        ul {
  list-style-type: none;
  margin: 0;
  padding: 3px;
  overflow: hidden;
  background-color: black;
}

li {
  float: right;
}

li a {
  font-family: 'Clicker Script';
  font-size: 30px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: green;
}
     
     h1{
       position: relative;
       left: 450px;
       
       font-family: 'Sofia';
       font-size: 50px;
     }
     </style>
     <style lang="stylus" scoped>
.my-card
  width 100%
  max-width 450px
  
</style>
       
      
    
  
    