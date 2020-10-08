<template>
     <div class="product">

            <div class="product__info">
                <p class="product__title">{{block.title}}</p>
                <p class="product__price">
                    <small>Rs</small><strong>{{block.price}}</strong>
                </p>
                <div class="product__rating">
                    <p>Rate: {{block.rate}}</p>
                </div>
            </div>  
            <img :src="block.imageLink" :alt="image"/>
            <button >Add to Cart</button>
        </div>
</template>

<script>
export default {

    props: {
        block: Object
    },
    data(){
        return{
            image:"ALT TEXT"
        }
    },
    name:'Product'

}
</script>

<style>

.product__title{
    text-align: center;
    font-weight: 800;
    font-size: xx-large;
}
.product__rating{
    display: flex;
}
.product{
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content:space-evenly;
    max-height: 400px;
    min-width: 100px;
    background-color: black;
    color: white;
    margin: 10px;
    z-index: 1;
    padding: 20px;
    width: 100%;
    transition: transform 100ms ease-in-out;
}

.product:hover{
    transform: scale(1.09);
    background-color: white;
    color: black;

}

.product > img{
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
}
.product__price{
    margin-top: 5px;
}
.product__info{
    height: 100px;
    margin-bottom: 15px;
}

.product > button{
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734  #9c7e31 #846a29;
}
</style>