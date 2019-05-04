import Vuex from 'vuex'
import firebase from '~/utils/firebase';

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
          counter: 0,
          auth: {},
          todoList: {
            todo: [{content: 'とまと'},{content: 'りんご'}],
            wip: [{content: 'ごりら'},{content: 'らっぱ'}],
            done: [{content: 'ぱすた'},{content: 'たぬき'}]
          }
      }),
      mutations: {
          // データ書き換えのみの責務
          increment(state,payload){
            state.counter = state.counter + payload.amount;
          },
          setAuth(state,payload){
              state.auth = {
                uid: payload.uid,
                userName: payload.userName
              }
          },
          setTodoList(state,payload){
              state.todoList = payload;
          }
      },
      actions: {
          // イベント処理の責務
          increment(store, payload){
              store.commit('increment', payload);
          },
          setAuth(store,payload){
              store.commit('setAuth', payload);
          },
          setTodoList(store,payload){
            store.commit('setTodoList', payload);
          }
      }
   })
}

export default createStore;