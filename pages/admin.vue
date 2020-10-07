<template>
   <div class="admin" >
            <nuxt-link to="/">
                <img 
                    class="admin__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </nuxt-link>

            <div class="admin__container">
                <h1>Admin Sign In</h1>
                <form @submit.prevent="signin">
                    <h5>Username</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Usernamr"
                        v-model="email"
                        />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        placeholder="Enter Password"
                        v-model="password"
                        />
                    <button 
                        type="submit"
                        class="admin__signInButton">
                            SignIn
                    </button>
                </form>
               
            </div>
        </div> 
</template>

<script>
export default {
head: {
    title: 'Amazon Admin | Akarsh',
    meta: [
      { hid: 'description', name: 'description', content: 'Amazon clone Nuxt Admin Page' }
    ],
  
  },
  data(){
      return {
          email:'',
          password:''
      }
  },
  methods:{
      signin:function(){

      }
  }
}
</script>

<style>
.admin{
    background-color: white;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.admin__logo{
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
}
.admin__container{
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
}
.admin__container > h1{
    font-weight: 500;
    margin-bottom: 20px;
}
.admin__container > form >h5{
    margin-bottom: 5px;
}

.admin__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 90%;
}
.admin__container > p{
    margin-top:  15px;
    font-size: 12px;
}
.admin__signInButton{
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
}

.admin__registerButton{
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border-top: 100px;
    border: 1px solid;
    border-color:  darkgrey;
}
</style>