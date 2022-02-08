<template>
  <div class="parent">
    <div class="buyCard">
      <div class="header">
        <p>Buy Madiba</p>
      </div>
      <div class="content">
        <input
          type="text"
          placeholder="0.00"
          v-model.trim="amount"
          class="appInput"
        />
        <p>Enter amount</p>
        <app-button
          :styles="{ 'margin-bottom': '40px' }"
          :text="'Connect Wallet'"
          @action="connectWallet"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/button.vue";
const thousand_seperator = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};
export default {
  components: {
    AppButton,
  },
  data: () => ({
    amount: "",
  }),
  watch: {
    amount(newValue, oldValue) {
      let result = thousand_seperator(newValue.replace(/,/g, ""));
      this.$nextTick(() => (this.amount = result));
    },
  },
  methods: {
    connectWallet() {
      let amount = this.amount.replace(/,/g, "");
      alert(amount);
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 20% 10%;
}
.buyCard {
  /* width:400px; */
  margin: 5px auto;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  /* background: blue; */
  border: 1px solid var(--lineGreen);
  text-align: center;
  box-shadow: 4px 7px 10px -10px var(--primary);
}
.header {
  border-bottom: 1px solid var(--lineGreen);
}
.header > p {
  font-family: "EngraversGothic", sans-serif;
  font-size: 25px;
  color: var(--primary);
  margin-top: 10px;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.content {
  margin-top: 10%;
  padding-top: 10px;
}
.appInput {
  text-align: center;
  padding: 10px 30px;
  color: var(--darkText);
  border-radius: 10px;
  border: 1px solid var(--lineGreen);
  background: var(--black);
}
.content > p {
  font-size: 12px;
  color: var(--darkText);
  font-family: "Chennai Slab", sans-serif;
  margin-bottom: 10%;
  text-transform: capitalize;
  margin-top: 3px;
}
@media screen and (min-width: 768px) {
  .parent {
    padding: 10% 30%;
    margin-right: 30px;
    /* background: red; */
  }
  .content {
    padding: 10px 20px;
  }
}
@media screen and (max-width: 768px) {
  .appInput {
    width: 200px;
  }
}
</style>