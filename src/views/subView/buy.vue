<template>
  <div class="parent">
    <div class="buyCard">
      <div class="header">
        <p>Buy DIBA</p>
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
        <a :href="`${BASE_BSC_SCAN_URL}/tx/${transactionHash}`" target="_blank"
          >Check your transaction on BSCScan</a
        >
      </div>
      <div class="content">
        <div class="d-flex flex-column align-items-center justify-content-center textContainer">
          <div class="d-flex justify-content-between w-100">
            <div class="d-flex align-items-center selectedCoinContainer">
              <img src="../../assets/bnb.png" class="coinLogo" />
              <p class="coinSymbol">BNB</p>
              <p class="coinText">(Binance)</p>
            </div>
            <input
              type="text"
              placeholder="0.00"
              v-model.trim="amount"
              class="appInput"
            />
          </div>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center textContainer">
          <div class="d-flex justify-content-between w-100">
          <div class="d-flex align-items-center selectedCoinContainer">
            <div class="dibaLogoContainer">
              <img src="../../assets/triangles.png" class="dibaCoinLogo" />
            </div>
            <p class="coinSymbol">DIBA</p>
            <p class="coinText">(Madiba Token)</p>
          </div>
          <p class="dibaValue">{{ dibaEquivalent }}</p>
          </div>
        </div>
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
    <div class="textContent">
      <p>
        Madiba is Multi Utility project dedicated to a True African Hero; Nelson
        Mandela (Madiba) Built upon the Binance Smart Chain, the project is
        strategically designed upon the foundation of Nelson Mandela's beliefs,
        and the Blockchain's core ideology; Decentralizing Wealth, Equality and
        Freedom.
      </p>
      <p>
        The combination of vast Team experience, well constructed Tokenomics,
        Absolute transparency, Strategic Marketing plan, ensures that Security
        and Maximum profit is kept in place for the investors.
      </p>
      <p>300% Staking APY (60 days duration)</p>
      <p>MadibaStake and MadibaSwap platforms Ready on Launch!</p>
      <p>
        Revenue generating from Listing Service offered to other project tokens
        on the MadibaStaking and MadibaSwap platforms.
      </p>
      <p>Unlimited Rewards to be earned from Madiba P2E Gameplay.</p>
      <p>Unanimous decision making by the community via the MadibaDao.</p>
      <p>Liquidity generation from Tax fees.</p>
      <p>
        Manual Buy-back and Burn at certain milestones, using funds from the Dev
        &amp; Marketing wallet.
      </p>
      <p>Strategic Whale and Dump control.</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/button.vue";
import { ethers, BigNumber } from "ethers";
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
    dibaEquivalent() {
      return this.dibaPerBNB * this.amount;
    },
  },
  data: () => ({
    amount: "",
    dibaPerBNB: 187500,
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

      if (isNaN(amount) || amount.trim() == "") {
        this.errorMsg = "Enter a valid amount in BNB";
        return;
      }

      if (parseFloat(amount) < 3) {
        this.errorMsg = "Minimum allowed amount for sale is 3 BNB";
        return;
      }
      if (parseFloat(amount) > 10) {
        this.errorMsg = "Maximum allowed amount for sale is 10 BNB";
        return;
      }
      if (this.active) {
        this.isLoading = true;
        try {
          const provider = new ethers.providers.Web3Provider(
            this.$store.state.web3.provider
          );

          const contract = getDibaTokenContract(provider);
          const signer = contract.connect(provider.getSigner());

          const options = {
            value: ethers.utils.parseEther(amount.toString()),
            gasLimit: 363022,
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
              case "CALL_EXCEPTION":
                this.errorMsg = "Transaction failed! check reason on BSCScan";
                this.transactionHash = err.transactionHash;
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
  padding: 10% 10%;
  text-align: center;
  overflow: scroll;
  height: 100%;
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
  /* background: red; */
}
.appInput {
  text-align: end;
  color: var(--primary);
  border-radius: 10px;
  border: 0px solid var(--lineGreen);
  background: var(--black);
  font-size: 14px;
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
.textContent {
  margin-top: 5%;
  font-size: 15px;
  font-family: "Chennai Slab", sans-serif;
  color: var(--lightText);
  text-align: left;
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
}
</style>