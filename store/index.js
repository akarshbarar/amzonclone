
import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => ({
    user: null,
    cart:[],
    admin:null
  });
  
  
  export const mutations = {
    setAdmin(state,data){
        state.admin=data
    },
      setUser(state,data){
        state.user=data
      },
      addToCart(state,data){
        state.cart.push(data)
      },
      removeFromCart(state,data){
        state.cart=data
      }
  }