<template>
  <div class="register" >
        <nuxt-link to="/">
            <img 
                class="register__logo"
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
        </nuxt-link>

        <div class="register__container">
            <h1>Sign Up</h1>
            <form @submit.prevent="signup">

                 <h5>Name</h5>
                <input 
                    type="text" 
                    placeholder="Enter Name"
                    v-model="name"
                    />
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
                <h5>Confirm Password</h5>
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                    />
                <button 
                    type="submit"
                    class="register__signInButton">
                        SignUp
                </button>
            </form>
           
            <nuxt-link to="/login">

            <button class="register__registerButton"> Already have a account</button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
head: {
    title: 'Amazon Register | Akarsh',
    meta: [
      { hid: 'description', name: 'description', content: 'Amazon clone Nuxt Register Page' }
    ],
  
  },
  data(){
      return {
          email:'',
          password:'',
          name:'',
          confirmPassword:''
      }
  },
  methods:{
      signup:function(){

      }
  }
}
</script>

<style>

.register{
    background-color: white;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.register__logo{
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
}
.register__container{
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
}
.register__container > h1{
    font-weight: 500;
    margin-bottom: 20px;
}
.register__container > form >h5{
    margin-bottom: 5px;
}

.register__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 90%;
}
.register__container > p{
    margin-top:  15px;
    font-size: 12px;
}
.register__signInButton{
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
}

.register__registerButton{
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border-top: 100px;
    border: 1px solid;
    border-color:  darkgrey;
    margin-top: 10px;
}


</style>