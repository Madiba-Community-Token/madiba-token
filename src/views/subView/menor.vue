<template>
  <div>
    <div class="row">
      <div class="col-md-4 textArea">
        <p class="title">Goya Menor NFT Collection</p>
        <app-button
          :styles="{
            'margin-top': '10%',
            'margin-bottom': '10%',
            width: '250px',
          }"
          :text="'COMING SOON'"
          :readonly="true"
        />
      </div>
      <div class="col-md-8 imageArea">
        <img src="/img/menor/11.png" class="madibaImage" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/1.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/2.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/3.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/4.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/5.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/6.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/7.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/8.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/9.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/10.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/11.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/12.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/13.png" class="image" />
      </div>
      <div class="col-md-6 imageContainer">
        <img src="/img/menor/14.png" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/button.vue";
export default {
  components: {
    AppButton,
  },
};
</script>

<style scoped>
.textArea {
  margin-top: 4%;
}
.textArea p {
  font-family: "Chennai Slab", sans-serif;
}
.title {
  font-size: 50px;
  font-weight: bold;
  color: var(--primary);
}
.textArea > p:nth-of-type(2) {
  font-size: 27px;
  color: var(--lightText);
  text-transform: capitalize;
}
.textContainer {
  margin-top: 10px;
}
.text {
  margin-top: 15px;
  font-size: 15px;
  color: var(--lightText);
}
.imageArea {
  /* background: blue; */
  padding-left: 0px;
}
.madibaImage {
  height: 600px;
  width: 650px;
}
@media screen and (max-width: 768px) {
  .imageArea {
    margin-top: 13px;
  }
  .madibaImage {
    height: 400px;
    width: 430px;
    margin-left: -40px;
  }
}

.imageContainer {
  /* margin-bottom: 20px; */
  padding: 20px;
}
.image {
  height: 420px;
  width: 450px;
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