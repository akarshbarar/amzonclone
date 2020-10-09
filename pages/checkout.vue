<template>
<div>
         <Header/>
         <HeaderTwo/>
          <div class="checkout">
             

            <div class="checkout_price">

           
                <div v-if="cart.length > 0" >
                    Buy Items<button class="checkout_PageButton" @click.prevent="pay">Pay Rs {{payprice}} </button>
                </div>
                <div v-else>
                    <h6>Please Buy something</h6>
                </div>
            
            </div>
            <div class="checkout__page">
               
                        <div class="checkout_PageData" v-if="cart.length > 0">

                          
                                    <div class="checkout__data" v-for="product in cart" :key="product">
                                        <h1>Title::{{product.title}}</h1>
                                        <h2>Rate::{{product.rate}}</h2>
                                        <h3>Price::{{product.price}}</h3>
                                        <img :src="product.image" :alt="abc"/>
                                        <button @click.prevent="remove(`${product.title}`)" >Remove From Cart</button>                             
                                     </div>
                        </div>
                        <div v-else>
                            <h1>Your cart is empty</h1>
                        </div>
                
            </div>
          


     </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

import Header from '../layouts/partials/Navbar'
import HeaderTwo from '../layouts/partials/HeaderTwo'
export default {
 components:{
    Header,
    HeaderTwo

  },
  data(){
      return {
          payprice:0
      }
  },
   computed:{
        ...mapState({
            user:state=>state.user,
            cart:state=>state.cart
        })
    },
    created(){

        this.cart.forEach(element => {
            this.payprice+=parseInt(element.price)
        });
    },
    methods:{
       
        remove:function(product){
            this.payprice=0;
            console.log(product)
            let newcart=[];
                for(let i in this.cart){
                    if(this.cart[i].title!=product){
                       newcart.push(this.cart[i])
                      this.payprice+=parseInt(this.cart[i].price)

                    }
                }
                console.log(newcart)
            
            
            this.$store.commit('removeFromCart',newcart)

        },
        pay:function(){

        }
    }

}
</script>

<style>
.checkout   { 
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    height: 100%;
}

.checkout__page{
    align-items: center;
    background-color: white;
    height: 100%;
    margin-left: 100px;
    padding-top: 20px;
    font-style: normal;
    font-weight: 800;
    font-size: x-large;
}

.checkout__data{
    position: inherit;
    width: 70%;
    height: 250px;
    border: 1px solid lightgrey;
    padding: 20px;
    display: flex;
    flex-direction: column;

}

.checkout__data >img{
    width: 100px;
    height: 100px;
    object-fit: contain;
}
.checkout_PageButton{
    background: #f0c14b;
    border-radius: 2px;
    width: fit-content;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
}
.checkout_price{
    font-size: x-large;
    width: 50%;
    padding: 20px;
    align-items: center;
    margin-left: 70%;
}
</style>