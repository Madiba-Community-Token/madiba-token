<template>
  <div class="row">
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/first.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/second.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/third.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/fourth.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/fifth.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/sixth.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/seventh.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/eight.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/ninth.png" class="image" />
    </div>
    <div class="col-md-6 imageContainer">
      <img src="../../assets/nfts/tenth.png" class="image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.imageContainer {
  /* margin-bottom: 20px; */
  padding: 20px;
}
.image {
  height: 420px;
  width: 450px;
}
p {
  color: white !important;
  font-size: 30px;
}
@media screen and (max-width: 768px) {
  .imageContainer {
    padding: 10px;
  }
  .image {
    height: 370px;
    width: 390px;
    margin-left: -50px;
  }
}
@media screen and (min-width: 768px) {
  .row {
    padding: 0px 50px;
  }
}

@media screen and (max-width: 1200px) {
  .row {
    padding: 0px 20px;
  }
}
</style>