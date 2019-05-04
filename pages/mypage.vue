<template>
   <div class="app">
      <h1>{{ auth.userName }}のTODOリスト</h1>
      <div class="main">
          <TodoList list-name="ToDo" :list="rsvTodoList.todo" @update="updateTodoList"/><!-- list-name;html listName;js 変換されて等価になる -->
          <TodoList list-name="進行中" :list="rsvTodoList.wip" @update="updateTodoList"/><!-- :list -> v-bind:list で""の中身がjsobjと認識される-->
          <TodoList list-name="完了" :list="rsvTodoList.done" @update="updateTodoList"/>
      </div>
   </div>
</template>

<script>
import {mapState} from 'vuex';
import cloneDeep from 'lodash.clonedeep';
import TodoList from '~/components/TodoList';


export default {
   components: {
     TodoList
   },
   props: {
      hoge: {
         type: Array,
         default: () => []
      }
   },
   data() {
      return {
         rsvTodoList: {}
      };
   },
   computed: {
      ...mapState(['auth','todoList'])
   },
   methods: {
       updateTodoList(){
           this.$store.dispatch('setTodoList', cloneDeep(this.rsvTodoList));
       }
   },
   beforeMount() {
       this.rsvTodoList = cloneDeep(this.todoList);
   }
}
</script>

<style scoped>
.app {
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: cornflowerblue;
   width: 100%;
   height: 100%;
}

.main{
    display: flex;
}
</style>