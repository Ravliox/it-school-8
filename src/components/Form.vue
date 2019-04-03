<template>
  <div id = "form">
    <div class = "form-frame">
      <!-- iterate through the model array -->
      <div v-for="(input, index) in inputs" :key="index" class = "input-container">
        <p> {{ input.label }} </p>
        <!-- if the object we are at in the iteration has the invalid field set to true,
        add the invalid-input class on the input -->
        <!-- check if the object has a textarea field. if it does render a textarea instead of an input -->
        <input v-bind:class="{'invalid-input' : input.invalid}" v-if="!input.textarea" v-model="input.value" />
        <textarea v-if="input.textarea"></textarea>
      </div>
      <input v-model="checkBoxValue" type = "checkbox" class = "checkbox" >
      <button @click="submit()"> Submit </button>
      <p v-if ="checkBoxError"> Verify you're not a robot! </p>
    </div>
  </div>  
</template>

<script>
// import the model array from the assets folder
import inputs from '@/assets/inputs.js'

export default {
  data() {
    return {
      checkBoxValue: false,
      checkBoxError: false,
      inputs
    }
  },
  methods: {
    submit() {
      // reset the checkBoxError variable to hide the error message at the start of every validation
      this.checkBoxError = false;

      if (!this.checkBoxValue) {
        this.checkBoxError = true;
      } else { 
        // loop through the input model array
        this.inputs.forEach(input => {
          /* reset invalid field. if this is set to false, the invalid-input class is automatically
           removed */
          input.invalid = false;
          /* if the input is both mandatory and has no value (it wasn't filled in) */
          if (input.mandatory && !input.value) {
            /* set its invalid field to true, which automatically adds the invalid-input class on it */
            input.invalid = true;
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-frame {
  margin: auto;
  margin-top: 30px;
  width: 500px;
  height: 600px;
  background-color: rgb(200, 199, 199);
}

input, textarea {
  width: 80% !important;
}

.checkbox {
  display: block;
  margin: auto;
  width: 100%;
  width: 40px;
  height: 40px;
  margin-top: 30px;
}

button {
  display: block;
  margin: auto;
  width: 100px;
  height: 30px;
  margin-top: 40px;
}

.invalid-input {
  outline: 1px red solid;
}

.error-label {
  color: red;
}
</style>
