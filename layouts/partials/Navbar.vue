<template>
   <div class="header">
            <!-- {/* LOGO */} -->
            <nuxt-link to="/">
              <img class="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""/>
            </nuxt-link>

            <!-- {/* SEARCH BOX */} -->
            <div class="header__search">
                <input class="header__searchInput" type="text" placeholder="Search an item"/>
                <i class="material-icons md-18 header__searchIcon">search</i>
            </div>
            
            <!-- {/* LINKS  */} -->
            <div class="header__nav">
                <!-- {/* 1st Link */} -->
                <nuxt-link to="/login" class="header__link">
                    <div class="header__option">
                       
                      
                        <span class="header__optionLineOne">Hello,Guest </span>
                        
                                       <span class="header__optionLineTwo">Sign In</span>
                       
                    </div>
                </nuxt-link>
                <!-- {/* 2nd Link */} -->
                <nuxt-link to="/login" class="header__link">
                    <div class="header__option">
                        <span class="header__optionLineOne">Returns </span>
                        <span class="header__optionLineTwo">Orders</span>
                    </div>
                </nuxt-link>

                <!-- {/* 3rd Link */} -->
                <nuxt-link to="/login" class="header__link">
                    <div class="header__option">
                        <span class="header__optionLineOne">Your  </span>
                        <span class="header__optionLineTwo">Prime</span>
                    </div>
                </nuxt-link>

                <nuxt-link to="/checkout">
                    <div class="header__optionBasket">

                        <!-- {/* BASKET ICON */} -->
                        <!-- {/* NUMBER OF ITEM */} -->
                        <i class="material-icons md-18">add_shopping_cart</i>
                        <span class="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </nuxt-link>

            </div>

        </div>
</template>

<script>
export default {
   
}
</script>

<style>
.header{
    background-color: #131921;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
}
.header__logo{
    object-fit: contain;
    margin-top: 18px;
    width: 100px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
}

.header__search{
    display: flex;
    align-items: center;
    flex:1;
    height: 20px;
}

.header__searchInput{
    height: 15px;
    padding: 10px;
    width: 100%;
    border: none;
}
.header__searchIcon{

    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
}

.header__nav{
    display: flex;
    justify-content: space-evenly;

}
.header__link{
    color: white;
    text-decoration: none;
}
.header__option{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
}
.header__optionLineOne{
    font-size: 10px;
}
.header__optionLineTwo{
    font-size: 13px;
    font-weight: 800;
}

.header__optionBasket{
    color: white;
    display: flex;
    align-items: center;
}
.header__basketCount{
    margin-left: 10px;
    margin-right: 10px;
}
</style>