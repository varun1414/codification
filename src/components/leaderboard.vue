<template>
     <div class="q-pa-md">
    <q-table
      title="LEADERBOARD"
      :data="data"
      :columns="columns"
      
      row-key="name"
      dark
      color="amber"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          UserName: 'desc',
          required: true,
          label: 'Competitors',
          align: 'left',
          field: row => row.UserName,
          format: val => `${val}`,
          sortable: true
        },
        { UserName: 'points', align: 'center', label: 'Points', field: 'points', sortable: true,sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { UserName: 'gold', label: 'Gold',icon:'img:statics/plat.png' ,size:'30px', field: 'gold', sortable: true,sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { UserName:'platinum', label: 'Platinum',icon:'img:statics/plat.png' ,size:'30px' ,field: 'platinum', sortable: true,sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
              /* { UserName:'total', label: 'Total',icon:'img:statics/plat.png' ,size:'30px' ,field: 'total', sortable: true,sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }, */
        { UserName:'rank', label: 'Rank',icon:'img:statics/plat.png' ,size:'30px' ,field: 'rank', sortable: true,sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
         ],
     
      
      
      data:[{UserName:"",points:0,gold:0,platinum:0}],
      temp:[]
}
},
mounted(){
    
    var count=0;
    for(var i=0;i<this.$store.state.userArray.length;i++)
    {
        this.temp[i]=this.$store.state.userArray[i];
        console.log(this.temp[i]);
       /*  this.temp[i].UserName=this.temp[i].UserName;
        
        this.temp[i].points=this.temp[i].points;
        this.temp[i].gold=this.temp[i].gold;
        this.temp[i].platinum=this.temp[i].platinum; */
        

    }
    this.data=this.temp;
    console.log(this.data);
    
    }
}
</script>