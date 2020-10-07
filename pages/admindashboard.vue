<template>
         
        <div class="admindashboard" >
            <nuxt-link to="/">
                <img 
                    class="admindashboard__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </nuxt-link>

            <div class="admindashboard__container">
                <h1>Add Elements</h1>
                <form @submit.prevent="add">
                    <h5>Title</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Title"
                       v-model="title"
                        />

                    <h5>Description</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Description"
                       v-model="description"
                        />
                    <h5>Image nuxt-link</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Image nuxt-link"
                          v-model="imagelink"

                        />
                    <h5>Rating</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Rating"
                                              v-model="rate"

                        />

                <h5>Price</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Price"
                                              v-model="price"

                        />

                    <button 
                        type="submit"
                        class="admindashboard__signInButton">
                            Add
                    </button>
                </form>
               
            </div>
        </div> 
</template>

<script>
export default {

 head: {
    title: 'Amazon Login | Akarsh',
    meta: [
      { hid: 'description', name: 'description', content: 'Amazon clone Nuxt Login Page' }
    ],
  
  },
  data(){
      return {
          title:'',
          description:'',
          rate:'',
          price:''
      }
  },
  methods:{
      add:function(){

      }
  }
}
</script>

<style>
.admindashboard{
    background-color: white;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.admindashboard__logo{
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
}
.admindashboard__container{
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
}
.admindashboard__container > h1{
    font-weight: 500;
    margin-bottom: 20px;
}
.admindashboard__container > form >h5{
    margin-bottom: 5px;
}

.admindashboard__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 90%;
}
.admindashboard__container > p{
    margin-top:  15px;
    font-size: 12px;
}
.admindashboard__signInButton{
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
}

.admindashboard__registerButton{
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border-top: 100px;
    border: 1px solid;
    border-color:  darkgrey;
}
</style>