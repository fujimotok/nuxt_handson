<template>
   <div class="app">
    <v-btn v-if="showDeleteFlag" depressed small color="red" @click="remove">
        <v-icon>clear</v-icon>
    </v-btn>
    <v-textarea
        hide-details
        @focus="setShowDeleteState(true)"
        @blur="setShowDeleteState(false)"
        @change="update"
        slot
        auto-grow
        row-height=10
        v-model="item.content"
        /> <!-- v-model 双方向データバインド -->
   </div>
</template>

<script>

export default {
   components: {

   },
   props: {
      hoge: {
         type: Array,
         default: () => []
      },
      item: {
          type: Object,
          default: () => {}
      },
      index: {
          type: Number
      }
   },
   data() {
      return {
         showDeleteFlag: false,
         text: this.item
      };
   },
   computed: {
      
   },
   methods: {
       setShowDeleteState(state){
           if (state) {
               this.showDeleteFlag = true;
           } else {
               setTimeout( () => {
                   this.showDeleteFlag = false;
               }, 500);
           }
       },
       remove(){
           this.$emit('remove', this.index);
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
   padding: 2%;
}
</style>