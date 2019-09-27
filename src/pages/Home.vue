<!--<template>
     <div>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
      <link href="https://fonts.googleapis.com/css?family=Notable&display=swap" rel="stylesheet">
       <img src="https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="1500" height="656">
<div style="position:fixed;height:60px;width:100%;top:0px;left:0;background-color: black; z-index:1">
     <h4 style="display: inline-block; margin-top:15px; margin-left:20px; color:white;font-family: 'Clicker Script'; font-size=30px">Codification</h4>
        </div>
        <div>
         <q-btn color="amber" glossy label="Amber" />
          </div> 
     
          
    </div>
    
  </template>-->
 <template>
<div>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
   <div style="position:fixed;height:60px;width:100%;top:0px;left:0;background-color: black; z-index:1">
     <h4 style="display: inline-block; margin-top:15px; margin-left:550px; color:white;font-family: 'Clicker Script'; font-size=30px">Codification</h4>
      </div> 
    <q-page class="flex flex-center">
    <img src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" width="1500" height="656">
  
  </q-page>
   
<div class="fixed-center" style=" display:block; margin:auto; padding:500px 0 0 0;" >
    <!-- <div style="bottom:10px"> -->
        <q-btn label="Get Started"  color="amber"/>
    
   
     
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
       
      
    
  
    