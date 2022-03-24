<template>
  <div class="">
    <div class="">
      <div class="mt-5 buyCard">
        <div class="header">
          <p>Claim Airdrop</p>
        </div>
        <div class="alert alert-warning" v-if="errorMsg">
          {{ errorMsg }}
          <div v-if="transactionHash">
            <a
              :href="`${BASE_BSC_SCAN_URL}/tx/${transactionHash}`"
              target="_blank"
              >view transaction</a
            >
          </div>
        </div>
        <div class="alert alert-success" v-if="isSuccess">
          Transaction completed!
          <a
            :href="`${BASE_BSC_SCAN_URL}/tx/${transactionHash}`"
            target="_blank"
            >Check your transaction on BSCScan</a
          >
        </div>
        <div class="content">
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
            :text="`You're connected to the wrong network`"
            v-else-if="chainId != 97"
          />
          <app-button
            :disabled="isLoading"
            :styles="{ 'margin-bottom': '40px' }"
            :text="'Claim Airdrop'"
            @action="claim"
            v-else
          />
        </div>
      </div>
      <div class="spacer textContent">
      <p>1000 Airdrop participants will be rewarded with 1000 $DIBAAIR Tokens.  The  DIBAAIR Token will be available to swap for BNB and $DIBA on our Swap Exchange after launch.</p>
    </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/button.vue";
import { ethers, BigNumber } from "ethers";
import { getDibaAirContract } from "../utils/contractHelpers";
import { BASE_BSC_SCAN_URL } from "../config/index";
export default {
  components: {
    AppButton,
  },
  computed: {
    active() {
      return this.$store.state.web3.active;
    },
    chainId() {
      return this.$store.state.web3.chainId;
    },
  },
  created() {
    this.view = sessionStorage.getItem("view") || "home";
  },
  unmounted() {
    sessionStorage.removeItem("view");
  },
  data: () => ({
    errorMsg: null,
    view: "",
    isLoading: false,
    isSuccess: false,
    transactionHash: null,
    BASE_BSC_SCAN_URL: BASE_BSC_SCAN_URL,
  }),
  methods: {
    toggleView(view) {
      this.view = view;
      sessionStorage.setItem("view", view);
    },
    closeNav() {
      document.getElementById("sideNav").style.width = "0";
      document.getElementById("navBar").style["margin-left"] = "0px";
      this.closed = true;
    },
    connectWallet() {
      this.$store.dispatch("connect");
    },
    async claim() {
      this.transactionHash = null;
      this.errorMsg = null;
      this.isSuccess = false;

      if (this.active) {
        this.isLoading = true;
        try {
          const provider = new ethers.providers.Web3Provider(
            this.$store.state.web3.provider
          );

          const contract = getDibaAirContract(provider);
          const signer = contract.connect(provider.getSigner());

          const options = {
            value: ethers.utils.parseEther("0.0034"),
          };
          let tx = await signer.airdrop(
            this.$store.state.web3.account,
            options
          );
          await tx.wait();
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
              case "CALL_EXCEPTION":
                this.errorMsg = "Transaction failed! check reason on BSCScan";
                this.transactionHash = err.transactionHash;
                return;
              default:
                break;
            }
          }
          if (err.data.code == 3) {
            this.errorMsg = err.data.message;
            return;
          }
          if (err.data.code == -32000) {
            this.errorMsg = err.data.message.split(": ")[1];
            return;
          }
          this.errorMsg = "Request failed. try again.";
        }
      }
    },
  },
};
</script>

<style scoped>

.buyCard {
  width: 94%;
  max-width: 400px;
  margin: 5px auto;
  border-radius: 20px;
  padding: 40px;
  background: transparent;
  background-image: linear-gradient(90deg, var(--lineGreen) 0, #4b857a);
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
  /* background: red; */
}
.appInput {
  text-align: end;
  color: var(--primary);
  border-radius: 10px;
  border: 0px solid var(--lineGreen);
  background: var(--black);
  font-size: 14px;
  max-width: 100px;
}
.appInput:focus {
  box-shadow: none;
  border: none;
  -webkit-appearance: none;
  outline: none !important;
}
.content > p {
  font-size: 12px;
  color: var(--darkText);
  font-family: "Chennai Slab", sans-serif;
  margin-bottom: 10%;
  text-transform: capitalize;
  margin-top: 3px;
}
.coinLogo {
  height: 20px;
  width: 20px;
}
.textContainer {
  border: 1px solid var(--lineGreen);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  margin-bottom: 30px;
}
.selectedCoinContainer {
  font-size: 14px;
}
.coinSymbol {
  margin: 0px 5px;
  color: #fff;
}
.coinText {
  color: gray;
  margin: 0;
}
.dibaLogoContainer {
  background: #fff;
  border-radius: 50px;
  height: 21px;
  width: 20px;
  text-align: center;
}
.dibaCoinLogo {
  height: 10px;
  width: 10px;
}
.dibaValue {
  color: var(--primary);
  font-size: 14px;
  padding-right: 2px;
  margin-bottom: 0;
}
#selectModal {
  text-align: left;
}
.modal {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.modal-body {
  background: var(--black);
}
.closeContainer {
  /* background: red; */
  text-align: right;
}
.fa-times-circle {
  color: #fff;
  margin-bottom: 20px;
  font-size: 25px;
}
.selectCoinContainer {
  margin-left: 20px;
  margin-bottom: 20px;
}
.selectedCoin {
  color: gray;
}
.selectCoinLogo {
  height: 20px;
  width: 20px;
}
.selectCoinText {
  color: #fff;
  margin-left: 10px;
  font-size: 14px;
}
h1 {
  font-family: "Chennai Slab", sans-serif;
  color: var(--lightText);
  margin-bottom: 25px;
}
.spacer {
  width: 94%;
  max-width: 600px;
  margin: 0px auto;
}
.textContent {
  margin-top: 5%;
  font-size: 15px;
  font-family: "Chennai Slab", sans-serif;
  color: var(--lightText);
  text-align: left;
}
@media screen and (min-width: 768px) {
  .content {
    padding: 10px 20px;
  }
}
@media screen and (max-width: 768px) {
}
</style>