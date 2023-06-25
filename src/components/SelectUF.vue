<template>
<label for="">Estado</label>
    <select v-model="selected">
      <option disabled value=""></option>
      <option>AC</option>
      <option>AL</option>
      <option>AP</option>
      <option>AM</option>
      <option>BA</option>
      <option>CE</option>
      <option>DF</option>
      <option>ES</option>
      <option>GO</option>
      <option>MA</option>
      <option>MT</option>
      <option>MS</option>
      <option>MG</option>
      <option>PA</option>
      <option>PB</option>
      <option>PR</option>
      <option>PE</option>
      <option>PI</option>
      <option>RR</option>
      <option>RO</option>
      <option>RJ</option>
      <option>RN</option>
      <option>RS</option>
      <option>SC</option>
      <option>SP</option>
      <option>SE</option>
      <option>TO</option>
    </select> 

    <label for="">Cidade</label> 
    <input type="text" placeholder="Cidade" v-model="cidade">

</template>

<script>

</script>

<style scoped>
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
</style>
