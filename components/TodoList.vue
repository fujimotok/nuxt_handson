<template>
   <div>
      <v-sheet class="sheet" color="green lighten-5">
          <h2>{{ listName }}</h2>
          <Dragggable group="all">
            <TodoCard v-for="(el, index) in list" :key="index" :item="el" :index="index" @remove="remove" @update="update"/><!-- 差分レンダのためのid -->
          </Dragggable>
          <v-btn fab dark small color="indigo" @click="add">
              <v-icon dark>add</v-icon>
          </v-btn>
      </v-sheet>
   </div>
</template>

<script>
import Dragggable from 'vuedraggable';
import TodoCard from '~/components/TodoCard';

export default {
   components: {
       Dragggable,
       TodoCard
   },
   props: {
      hoge: {
         type: Array,
         default: () => []
      },
      listName: {
        type: String,
        defalut: '未定義'
      },
      list: {
          type: Array,
          defalut: () => []
      }
   },
   data() {
      return {
         
      };
   },
   computed: {
      
   },
   methods: {
     add(){
        this.list.push({content:''});
        this.update();
     },
     remove(index){
        this.list.splice(index, 1);
        this.update();
     },
     update(){
         this.$emit('update');
     }
   }
}
</script>

<style scoped>
.app {
   width: 100%;
   height: 100%;
}
.sheet {
    margin: 2%;
}
</style>