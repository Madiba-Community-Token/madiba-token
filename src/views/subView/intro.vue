<template>
  <div class="row" id="home">
    <div class="col-md-4 textArea">
      <p class="title">Decentralizing</p>
      <p>Wealth equality and freedom</p>
      <div class="optionsContainer">
        <div class="d-flex optionsGroup">
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>Madiba Swap</p>
          </div>
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>Madiba NFT</p>
          </div>
        </div>
        <div class="d-flex optionsGroup">
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>Game Zone</p>
          </div>
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>Madiba DAO</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <app-button :styles="{}" :text="'Buy $diba'" @action="$emit('viewBuy')" />
      </div>
    </div>
    <div class="col-md-8 imageArea">
      <img src="../../assets/madibabuy.png" class="madibaImage" />
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
  /* background: red; */
}
.textArea > p {
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
.optionsContainer {
  margin-top: 25px;
}
.optionsGroup {
  justify-content: space-between;
  align-items: center;
}
.options > p {
  font-family: "EngraversGothic", sans-serif;
  color: var(--darkText);
  font-size: 15px;
  text-transform: uppercase;
}
.options > p:nth-of-type(2) {
  margin-left: 10px;
  margin-top: 3px;
}
.footer {
  margin-top: 5%;
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
  .optionsGroup {
    max-width: 70%;
    min-width: 50%;
  }
  .imageArea {
    margin-top: 13px;
  }
  .madibaImage {
    height: 400px;
    width: 430px;
    margin-left:-40px;
  }
}
</style>