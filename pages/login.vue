<template>
   <div class="login" >
            <nuxt-link to="/">
                <img 
                    class="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </nuxt-link >

            <div class="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input 
                        type="email" 
                        placeholder="Enter Email"
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
                        class="login__signInButton">
                            SignIn
                    </button>
                </form>
                <p>By Signing-in, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice. </p>

                <nuxt-link  to="/register">
                    <button class="login__registerButton"> Create Your New Account</button>
                </nuxt-link >
            </div>
        </div>
</template>

<script>
export default {

  head: {
    title: 'Amazon Login | Akarsh',
    meta: [
      { name: 'description', content: 'Amazon clone Nuxt Login Page' }
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
.login{
    background-color: black;
    color: white;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login__logo{
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
}
.login__container{
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
}
.login__container > h1{
    font-weight: 500;
    margin-bottom: 20px;
}
.login__container > form >h5{
    margin-bottom: 5px;
}

.login__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 90%;
}
.login__container > p{
    margin-top:  15px;
    font-size: 12px;
}
.login__signInButton{
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
}

.login__registerButton{
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border-top: 100px;
    border: 1px solid;
    border-color:  darkgrey;
}


</style>