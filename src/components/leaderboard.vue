<template>
     <div class="q-pa-md">
    <q-table
      title="Treats"
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
         ],
      data: [
       {
            UserName:"vedita",
            points:123,
            gold:150,
            platinum:3
          },
    
          {
            UserName:"bhushan",
           
           points:133,
            gold:250,
            platinum:5
          },
          {
            UserName:"purva",
           
            points:153,
            gold:350,
            platinum:7

          }]
}}}
</script>