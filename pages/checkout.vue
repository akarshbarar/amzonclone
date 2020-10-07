<template>
          <div class="checkout">
               <Header/>
         <HeaderTwo/>

            <div class="checkout_price">

            <!-- {
                cartReducer.length>0
                ?<div >
                    Buy Items<button class="checkout_PageButton" onClick={handleClick}>Pay Rs {price}</button>
                </div>
                :<div>
                    <h6>Please Buy something</h6>
                </div>
            } -->
            </div>
            <div class="checkout__page">
                <!-- {
                    cartReducer.length>0
                        ?<div class="checkout_PageData">

                            {
                                cartReducer.map((product)=>(
                                    <div class="checkout__data">
                                        <h1>Title::{product.title}</h1>
                                        <h2>Rate::{product.rate}</h2>
                                        <h3>Price::{product.price}</h3>
                                        <img src={product.image} alt=""/>
                                        <button onClick={()=>remove(`${product.title}`)}>Remove From Cart</button>

                                    </div>
                                ))
                            }
                        </div>
                        :<div>
                            <h1>Your cart is empty</h1>
                        </div>
                } -->
            </div>
          


     </div>
</template>

<script>
import Header from '../layouts/partials/Navbar'
import HeaderTwo from '../layouts/partials/HeaderTwo'
export default {
 components:{
    Header,
    HeaderTwo

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