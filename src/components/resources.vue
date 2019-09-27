<template>
<div>
    <div style="width:20%;height:10%;margin-right:10%;" >
 <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"

    >
      <q-card-section>
        <div class="text-h6">WELCOME BACK <br>Varun</div>
        
      </q-card-section>

      <q-card-section>
        Hello {{ lorem }}
      </q-card-section>
    </q-card>
    </div>
    
   <q-splitter
      v-model="splitterModel"
      style="height: 400px"
    >
      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree
            :nodes="simple"
            node-key="label"
            selected-color="primary"
            :selected.sync="selected"
            default-expand-all
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="selected"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="CONDITIONS">
            <div class="text-h4 q-mb-md">CONDITIONS</div>
            <p>Control conditions are the basic building blocks of C programming language. In this tutorial, we will cover the control conditions through some easy to understand examples.

There are two types of conditions :

Decision making condition statement
Selection condition statement
Let’s understand these two types with the help of examples.

Decision making condition statement
Conditions like ‘if’, “if-else”, “if-else-if”, “nested if”, ternary conditions etc fall under this category.</p>
          </q-tab-panel>

          <q-tab-panel name="LOOPS">
            <div class="text-h4 q-mb-md">LOOPS</div>
            <p>In programming, loops are used to repeat a block of code until a specified condition is met.

C programming has three types of loops:
<br>
1.for loop
<br>
2.while loop
<br>
3.do...while loop
<br>
We will learn about for loop in this tutorial. In the next tutorial, we will learn about while and do...while loop.</p>
          </q-tab-panel>

          <q-tab-panel name="FUNCTIONS">
            <div class="text-h4 q-mb-md">FUNCTIONS</div>
            <p>A function is a group of statements that together perform a task.<br> Every C program has at least one function, which is main(), and all the most trivial programs can define additional functions.

You can divide up your code into separate functions.<br> How you divide up your code among different functions is up to you, but logically the division is such that each function performs a specific task.

A function declaration tells the compiler about a function's name, return type, and parameters. A function definition provides the actual body of the function.

The C standard library provides numerous built-in functions that your program can call. <br>For example, strcat() to concatenate two strings, memcpy() to copy one memory location to another location, and many more functions.

A function can also be referred as a method or a sub-routine or a procedure, etc.</p>
          </q-tab-panel>

          <q-tab-panel name="Room view">
            <div class="text-h4 q-mb-md">Room view</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
</div>
</template>
<script>
export default {
  data () {
    return {
         
      splitterModel: 50,
      selected: 'topics',
      slide: 'style',
      lorem: 'varun',
      simple: [
        {
          label: 'Topics',
          children: [
            {
              label: 'CONDITIONS',
              icon: 'img:statics/hammer.png'
            },
            {
              label: 'LOOPS',
              icon: 'img:statics/america.png'
            },
            {
              label: 'FUNCTIONS',
              icon: 'img:statics/icons8-iron-man-48.png'
            }
          ]
        }
      ]
    }
  }
}
</script>