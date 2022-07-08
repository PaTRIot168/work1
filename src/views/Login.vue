<template>



  <div id="app">
    <div id="menu"> </div>
    <div id="count">
      <div id="login">
        <h1>Log in</h1>
        <div id="form">
          <v-form>
            <v-container fluid>
              <v-col
                  cols="12"
                  sm="4"
              >
                <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="4"
              >
                <v-text-field
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    name="input-10-2"
                    label="Password"
                    hint="At least 8 characters"
                    class="input-group--focused"
                    @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>
              <v-checkbox
                  v-model="checkbox"
                  :label="'Remember me'"
              ></v-checkbox>
              <!--                <input  type="checkbox" id="checkbox" v-model="checked">-->
              <!--                <label for="checkbox">Remember me</label>-->

              <v-btn
                  id="log"
                  color="grey"
              >log in</v-btn>
              <!--                <button id="log" type="submit">log in</button>-->
            </v-container>
          </v-form>
        </div>
      </div>
    </div>
  </div>



</template>

<script>

export default {
  data() {
    return {
      show2: true,
      checkbox:['black'],
      email: '',
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      }
    }
  }

}

</script>
<style>
* {
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
}

html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
  display: inline-block;
}

div#app {
  width: 100%;
  height: 100%;
  display: inline-block;
}
div#menu{
  width: 50%;
  height: 100%;
  display: inline-block;
  background-color: #d0cfcf;
}

div#login {
  width: 50%;
  margin-left: 50px;
  display: inline-block;
  position: absolute;
}
input, textarea {
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  display: block;

}
#checkbox {
  display: inline-block;
  margin-top: 20px;
}
button#log {
  display: block;
  border: none;
  background-color: #7e7e7e;
  color: white;
  width: 360px;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
}

div#count {
  display: flex;
  align-items: center;
  float: right;
  width: 50%;
  height: 100%;

}

::placeholder {
  color: black;
  font-family: Verdana, sans-serif;
  font-size: 20px;
}

#email, #password{
  width: 300px;
  height: 50px;
}

label {
  font-size: 10px;
  margin-left: 10px;

}
container,#col-sm-8{
  padding: 0;

}

h1{
  margin-bottom: 15px;
  margin-left: 15px;
}
#v-input__control{
  margin-left: 25px;
}
col-sm-8 col-12{
  padding: 0;
}

</style>