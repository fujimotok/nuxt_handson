<template>
   <div class="main">
      <h1>ログインページ</h1>
      <p>下記ボタンよりログインしてください</p>
      <v-btn color="orange" @click="eventHandler">Googleでログイン</v-btn>
   </div>
</template>

<script>
import firebase from "../utils/firebase"

export default {
   components: {

   },
   props: {
      hoge: {
         type: Array,
         default: () => []
      }
   },
   data() {
      return {
         
      };
   },
   computed: {
      
   },
   methods: {
     eventHandler(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result)=> {
        // ...
        this.$store.dispatch('setAuth', { uid: result.user.uid, userName: result.user.displayName })
        sessionStorage.auth = JSON.stringify({ uid: result.user.uid, userName: result.user.displayName });
        console.log(result);
        this.$router.push('/mypage');
        this.$toasted.success('🎉ログインしました🎉')
      });

     }
   }
}
</script>

<style scoped>
.app {
   width: 100%;
   height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>