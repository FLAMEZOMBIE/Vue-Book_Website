<template>
  <div class="home">
    <p>Welcome Readers!</p>
    <table>
  <tr>
    <th>No</th>
    <th>Judul</th>
    <th>ISIIN</th>
    <th>Penerbit</th>
    <th>Deskripsi</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Loading Resource. . .</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Loading Resource. . .</td>
  </tr>
</table>
  </div>
  
  
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
};
</script>

<style>
table, td, th {
  border: 1px solid;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin: 10%;
}
</style>