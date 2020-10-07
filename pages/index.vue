<template>
  <div class="container">
      <Header/>
      <HeaderTwo/>
           <div class="home">
           <img class="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
          
           <div class="home__row">
              <!-- {/* JSX JavaScript with XML */}       -->
                <!-- {
                    data.map((product)=>{
                        return (
                            <div>
                                
                            <Product 
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rate}
                                    image={product.imageLink} />


                            </div>
                        )
                    })
                } -->

           </div>
         
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
.home{
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    color:white
}
.home__image{
    width: 100%;
    mask-image: linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
   z-index: -1;
   margin-bottom: -150px;
}
.home__row{
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: space-between;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
    max-width: 1500px;
}

@media screen and (min-width: 1000px) {
    .home__row {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(19rem,1fr));
      }
}
/* https://codesandbox.io/s/dynamic-component-rendering-using-vuejs-5z6ff?fontsize=14&file=/src/App.vue:850-856 */
</style>
