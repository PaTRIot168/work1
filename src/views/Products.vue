<template>
  <div id="main">
    <div id="menu"></div>
    <div id="table">
     <div id="but"> <v-btn>Add product</v-btn></div>
      <div id="forme">
      <v-form>
        <v-container fluid>
          <v-row>
          <v-col
              cols="12"
              sm="3"
          >
            <v-text-field
                v-model="barcode"
                label="Barcode"
            ></v-text-field>
          </v-col>
            <v-col sm="1"></v-col>
            <v-col
                cols="12"
                sm="3"
            >
              <v-text-field
                  v-model="Price"
                  label="Price"
              ></v-text-field>
            </v-col>
            <v-col sm="1"></v-col>
              <v-col
                  cols="12"
                  sm="3"
              >
                <v-text-field
                    v-model="Quanity"
                    label="quanity"
                ></v-text-field>
          </v-col>
          </v-row>
        </v-container>
      </v-form>
      </div>
    <div id="name">
      <div id="darcode">BARCODE</div>
      <div id="price">PRICE</div>
      <div id="quanity">QUANITY</div>
    </div>
    <div class="item" id="itemss" v-for="item in items">
      <div style="white-space: pre-wrap;">{{  item.barcode}}  {{item.price}}  {{item.quanity}}</div>
<!--      <div>{{  item.barcode}}</div>-->
<!--      <div>{{item.price}}</div>-->
<!--      <div>{{item.quanity}}</div>-->
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: [
        {barcode: '1232', price: '1000', quanity: 'asdasd'},
        {barcode: '1232', price: '10040', quanity: 'asdasd'},
        {barcode: '12322', price: '10020', quanity: 'asdasd'},
      ]
    }
  }
}
</script>

<style >
div#name{
  display: flex;
  padding-left: 300px;
}
div#darcode, div#price,div#quanity{
  width: 22%;
  font-size: 12px;
}
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
  display: inline-block;
}
div#main {
  width: 100%;
  height: 100%;
  display: inline-block;
}
div#menu{
  width: 20%;
  height: 100%;
  display: inline-block;
  background-color: #d0cfcf;
}
div#table {
  width: 80%;
  display: inline-block;
  position: absolute;
  margin-top: 100px;
}
v-text-field{
  padding-right: 10px;
}
div#but{
  float: right;
  display: flex;
}
div#itemss{
  display: inline;
}
</style>