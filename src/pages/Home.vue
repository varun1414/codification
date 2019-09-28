 <template>
<div>
	<div style="position:relative">
   <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
   <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'>
   <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s" width="1500" height="656">
   
   <div style="position:fixed;height:60px;width:100%;top:0px;left:0;background-color: black; z-index:1">
     <h4 style="display: inline-block; margin-top:15px; margin-left:550px; color:white;font-family: 'Clicker Script'; font-size=30px; padding:0 0 0 40px">Codification</h4>
  </div>     
   



<div class="q-pa-md row items-start q-gutter-md" style="text-align:center">

    <q-card class="my-card" style="position:absolute; display:block; margin:auto;top:200px; left:200px;">
      <q-card-section style="padding:0 2px 0 2px;font-weight:bold;font-size:18px;">
       <p style="padding:0 0 0 0">
       <p style="font-size:20px; color:blue;">Importance of Problem Solving.</p>
       Without Problem Solving, coding will just be typing commands in a given language.<br>
       Without it, a coder will be no more than a mere typist, writing commands to the computer.
   </p>
      </q-card-section>
    </q-card>

    <q-card class="my-card" style="position:absolute; display:block; margin:auto;top:200px; left:700px;">
     <q-card-section style="padding:0 3px 0 3px;font-weight:bold;font-size:18px">
       <p style="padding:0 0 0 0">
       <p style="font-size:20px; color:blue;">Don't be Syntax Dependant.</p>
       Syntax is merely the grammar of any language that you use.
       True grammar is important. But knowing just the grammar isn't useful.<br>
       What we communicate using the grammar is what counts!!
   </p>
      </q-card-section>
    </q-card>


	<div class="fixed-bottom" style=" position:absolute; display:block; margin:auto;bottom:100px;" >
   <q-btn elavated rounded label="Get Started" size="20px" color="primary" @click="login()"/>
    </div>


</div>

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
   <style>
	.my-card{
		font-family: 'Mansalva', cursive;

	background-color: white;
	opacity:0.7;
		height: 250px;
	  width: 100%;
	  max-width: 250px;
	}
</style>

     <style>
     
     .body{
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
       
      
    
  
    