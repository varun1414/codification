<template>
     <q-layout view="lHr lpR fFf">
      <q-header elevated class="bg-grey-10 text-white" height-hint="98">
<div class="row">
    
      <div class="col-11">
       
       <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <q-toolbar-title b>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
           </q-toolbar-title>
      </q-toolbar>
      </div>
</div>
      </q-header>
      <q-page-container>
      <router-view />
    </q-page-container>
     </q-layout>
</template>