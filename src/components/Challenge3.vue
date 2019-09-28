<template>
	<div class="fixed-center">
   <q-btn elavated rounded label="Go Back" size="20px" color="primary" @click="redirect()"/>
</div>
</template>

<script>
export default {
	data() {
		return{

		}
	},
	methods:{
				redirect(){
					this.$router.push('/resources')
				}
			}
		
	
}
</script>