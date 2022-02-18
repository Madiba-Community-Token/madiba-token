<template>
  <div class="parent">
    <h1>Private Sale
    </h1>
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
      <h4>STEPS TO BUY DIBA TOKEN PRIVATE SALE</h4>
      <ol>
        <li>
          Connect your BSC wallet to this buy page by tapping the "Connect Button".
        </li>
        <li>
          Select Metamask or Trustwallet from the pop-up list, whichever you use.
        </li>
        <li>
          Authorise the wallet connection if prompted.
        </li>
        <li>
          Make sure you have at least 3.1 BNB balance in the connected BSC wallet.
        </li>
        <li>
          Once wallet is connected, Enter the BNB amount (3 BNB - 10 BNB) you wish to buy $Diba with.
        </li>
        <li>
          Tap or click the "Buy" button.
        </li>
        <li>
          Authorise wallet transaction.
        </li>
        <li>
          Congratulations! You have bought Madiba Private Sale.
        </li>
        <li>
          Ensure that you join the Madiba community (Telegram, Twitter and Discord) using the social links located at the base of this website.
        </li>
      </ol>
      <h4>PRIVATE SALE INFORMATION</h4>
      <ol>
        <li>
          Private Sale Allocated Token:  50,000,000 DIBA
        </li>
        <li>
          Amount of $DIBA / 1 BNB: To be determined after Public Sale Fair Launch on <a href="https://www.pinksale.finance/" target="_blank">Pinksale.finance</a> ends.
        </li>
        <li>
          Private Sale Benefit: 100% discount from Public Sale Price once determined after Fair Launch sale on <a href="https://www.pinksale.finance/" target="_blank">Pinksale.finance</a>
        </li>
        <li>
          Private Sale Buyers will be up 100% in profit already, upon completion of the public sale, before listing on Pancakeswap.
        </li>
        <li>
          Private Sale Minimum Buy: 3 BNB
        </li>
        <li>
          Private sale Maximum Buy: 10 BNB
        </li>
        <li>
          Private sale purchased Diba Token will be made claimable to buyers at the end of the Public Sale Fair Launch, before Pancakeswap Listing.
        </li>
      </ol>
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
            gasLimit: 300000,
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