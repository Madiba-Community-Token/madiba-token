<template>
  <div class="parent">
    <div class="buyCard">
      <div class="header">
        <p>Buy Madiba</p>
      </div>
      <div class="alert alert-warning" v-if="errorMsg">
        {{ errorMsg }}
      </div>
      <div class="alert alert-success" v-if="isSuccess">
        Transaction completed!
        <a :href="`${BASE_BSC_SCAN_URL}/tx/${transactionHash}`" target="_blank"
          >Check your transaction on BSCScan</a
        >
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
          :disabled="isLoading"
          :styles="{ 'margin-bottom': '40px' }"
          :text="'Connect Wallet'"
          @action="connectWallet"
          v-if="!active"
        />
        <app-button
          :disabled="isLoading"
          :styles="{ 'margin-bottom': '40px' }"
          :text="'Buy'"
          @action="buy"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/button.vue";
import { ethers } from "ethers";
import { getDibaTokenContract } from "../../utils/contractHelpers";
import { BASE_BSC_SCAN_URL } from "../../config/index";
const thousand_seperator = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};
export default {
  components: {
    AppButton,
  },
  computed: {
    active() {
      return this.$store.state.web3.active;
    },
  },
  data: () => ({
    amount: "",
    errorMsg: null,
    isLoading: false,
    isSuccess: false,
    transactionHash: null,
    BASE_BSC_SCAN_URL: BASE_BSC_SCAN_URL,
  }),
  watch: {
    amount(newValue, oldValue) {
      let result = thousand_seperator(newValue.replace(/,/g, ""));
      this.$nextTick(() => (this.amount = result));
    },
  },
  methods: {
    connectWallet() {
      this.$store.dispatch("connect");
    },
    async buy() {
      this.transactionHash = null;
      this.errorMsg = null;
      this.isSuccess = false;
      let amount = this.amount.replace(/,/g, "");

      if (isNaN(amount)) {
        this.errorMsg = "Enter a valid amount in BNB";
        return;
      }
      if (this.active) {
        this.isLoading = true;
        if (parseFloat(amount) < 0.1) {
          this.isLoading = false;
          this.errorMsg = "Minimum allowed amount for sale is 0.1 BNB";
          return;
        }
        if (parseFloat(amount) > 5) {
          this.isLoading = false;
          this.errorMsg = "Maximum allowed amount for sale is 5 BNB";
          return;
        }
        try {
          const provider = new ethers.providers.Web3Provider(
            this.$store.state.web3.provider
          );

          const contract = getDibaTokenContract(provider);
          const signer = contract.connect(provider.getSigner());

          const options = {
            value: ethers.utils.parseEther(amount.toString()),
          };
          let tx = await signer.registerWhitelist(
            this.$store.state.web3.account,
            options
          );
          await tx.wait();
          this.amount = "";
          this.isLoading = false;
          this.isSuccess = true;
          this.transactionHash = tx.hash;
        } catch (err) {
          this.isLoading = false;
          this.isSuccess = false;
          if (err.code) {
            switch (err.code) {
              case "INSUFFICIENT_FUNDS":
                this.errorMsg = "Insufficient funds to carry out transaction";
                return;
              case "UNPREDICTABLE_GAS_LIMIT":
                this.errorMsg = err.error.message;
                return;
              default:
                break;
            }
          }
          this.errorMsg = "Request failed. try again.";
        }
      }
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 20% 10%;
  text-align: center;
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
    padding: 10% 30% 10% 20%;
    margin-right: 30px;

    /* background: red; */
  }
  .buyCard {
    margin-right: 10%;
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