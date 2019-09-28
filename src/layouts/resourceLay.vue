<template>
     <q-layout view="lHr lpR fFf">
      <q-header elevated class="bg-grey-10 text-white" height-hint="98">
<div class="row">
    
      <div class="col-11">
       
       <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <q-toolbar-title >
                    Codification
           </q-toolbar-title>
      </q-toolbar>
      </div>
</div>
      </q-header>
      <div class="fixed-left">
       <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
        content-class="bg-grey-10"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; ">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar >
                <q-icon name="inbox"  style="color:white" />
              </q-item-section>

              <q-item-section  style="color:white">
                Python
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section style="color:white">
               C
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  style="color:white">
              <q-item-section avatar  style="color:white">
                <q-icon name="send" />
              </q-item-section>

              <q-item-section  style="color:white">
                C++
              </q-item-section>
            </q-item>

            <!-- <q-item clickable v-ripple  style="color:white">
              <q-item-section avatar  style="color:white">
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section  style="color:white">
                Drafts
              </q-item-section>
            </q-item> -->
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>
      </div>
      <q-page-container>
      <router-view />
    </q-page-container>
     </q-layout>
</template>
<script>


export default {
  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>