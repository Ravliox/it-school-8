<template>
  <div id = "form">
    <div class = "form-frame">
      <div v-for="(input, index) in inputs" :key="index" class = "input-container">
        <p> {{ input.label }} </p>
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
export default {
  data() {
    return {
      checkBoxValue: false,
      checkBoxError: false,
      inputs: [
        {
          label: 'Your fist name',
          value: ''
        },
        {
          label: 'Your latin name',
          value: ''
        },
        {
          label: 'Your last name',
          value: ''
        },
        {
          label: 'Your creed',
          value: ''
        },
        {
          label: 'Deus vult',
          value: '',
          textarea: true
        }
      ]
    }
  },
  methods: {
    submit() {
      this.checkBoxError = false;

      if (!this.checkBoxValue) {
        this.checkBoxError = true;
      } else { 
        console.log(this.inputs);
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
