<template>
  <div id = "form">
    <h1> Edi </h1>
    <h2> Muie Dragnea </h2>
  </div>  
</template>

<script>
export default {
  
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
