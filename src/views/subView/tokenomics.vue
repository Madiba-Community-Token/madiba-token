<template>
  <div class="parent" id="tokenomics">
    <p class="title">Tokenomics</p>
    <p class="text">Total Supply: 1 Billion &dollar;DIBA</p>
    <div class="imageContainer">
      <img src="../../assets/chart.png" class="image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  text-align: center;
  margin-bottom: 10%;
}
.title {
  font-family: "EngraversGothic", sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 10px;
  text-transform: uppercase;
}
.text {
  font-size: 13px;
  font-family: "Chennai Slab", sans-serif;
  color: var(--lightText);
}
.image {
  height: 200px;
  width: 320px;
}
.imageContainer{
    margin-top: 5%;
}
@media screen and (min-width: 768px) {
  .parent{
      margin-top:10%
  }
  .parent > p{
      margin-right:100px
  }
  .imageContainer{

      padding-right: 140px;
  }
  .image {
  height: 450px;
  width: 700px;
}
}
</style>