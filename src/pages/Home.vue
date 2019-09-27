 <template>
<div>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
   <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s" width="1500" height="656">
   <div style="position:fixed;height:60px;width:100%;top:0px;left:0;background-color: black; z-index:1">
     <h4 style="display: inline-block; margin-top:15px; margin-left:550px; color:white;font-family: 'Clicker Script'; font-size=30px">Codification</h4>
  </div>
   <div class="q-pa-md row items-start q-gutter-md">
     <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6"> STEP UP YOUR CODING GAME</div>
         </q-card-section> 
         <q-card-section>
     The new way to improve your programming skills while having fun and getting noticed
      </q-card-section>
    </q-card>
     </div>
    
     
   
<div class="fixed-center" style=" display:block; margin:auto; padding:500px 0 0 0;" >
   <q-btn label="Get Started"  color="amber" @click="login()"/>
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
       }
      
       
     }
   }
   </script>
   <style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
     <style>
     
     body{
       overflow: hidden;

     }
     .button{
       display: block;
       margin: auto;
       position:center;
     }
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
       color: black;
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
  font-size: 22px;
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
       
      
    
  
    