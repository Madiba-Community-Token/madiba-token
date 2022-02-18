<template>
  <div class="row">
    <div class="col-md-4 textArea">
      <p class="title">Madiba Nft</p>
      <p>A collection of 1000 unique Madiba NFTs</p>
      <app-button
        :styles="{
          'margin-top': '10%',
          'margin-bottom': '10%',
          width: '250px',
        }"
        :text="'COMING SOON'"
        :readonly="true"
      />

      <div class="textContainer">
        <p class="text">
          Art is a strong part of hour heritage as a people and we love them.
        </p>
        <p class="text">
          The Madiba project in partnership with Klynox Labs(creators of "Hall
          Of Royals") is creating an NFT collection that portrays Nelson Mandela
          - Madiba, in a very glorious form.
        </p>
        <p class="text">
          The collection will be created on the BSC and posses a burn function
          that can convert each NFT to &dollar;DIBA tokens depending on their
          rarity.
        </p>
      </div>
    </div>
    <div class="col-md-8 imageArea">
      <img src="../../assets/smokingMadiba.png" class="madibaImage" />
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/button.vue";
export default {
  components: {
    AppButton,
  },
  methods: {
    buyMadiba() {
      window.open("https://google.com", "_blank");
    },
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
</style>