<template>
  <div id="nav">
    <web3-modal-vue
      ref="web3modal"
      :providerOptions="providerOptions"
      :cacheProvider="true"
      network="binance"
    />
  </div>
  <router-view />
</template>

<script lang="ts">
import Web3ModalVue from "@/components/Web3ModalVue.vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
import injection from "@/providers/connectors/injected";
import { Options, Vue } from "vue-class-component";

declare global {
  interface Window {
    BinanceChain: any;
  }
}

@Options({
  components: { Web3ModalVue },
})
export default class App extends Vue {
  providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
        },
        network: "binance",
        chainId: 56,
      },
    },
    "custom-trustwallet": {
      display: {
        logo: "/img/logos/trust.svg",
        name: "TrustWallet",
        description: "Connect to your TrustWallet",
      },
      package: true,
      connector: async () => injection(),
    },
    "custom-binancechainwallet": {
      display: {
        logo: "/img/logos/binance.png",
        name: "Binance Chain Wallet",
        description: "Connect to your Binance Chain Wallet",
      },
      package: true,
      connector: async () => {
        let provider = null;
        if (typeof window.BinanceChain !== "undefined") {
          provider = window.BinanceChain;
          try {
            await provider.request({ method: "eth_requestAccounts" });
          } catch (error) {
            throw new Error("User Rejected");
          }
        } else {
          throw new Error("No Binance Chain Wallet found");
        }
        return provider;
      },
    },
  };

  $refs: {
    web3modal: any;
  };

  setupModal() {
    const web3modal = this.$refs.web3modal;
    this.$store.commit("setWeb3Modal", web3modal);
  }

  connect() {
    if (
      this.$store.state.web3.web3Modal == undefined ||
      this.$store.state.web3.web3Modal == null
    ) {
      this.setupModal();
    }
    this.$store.dispatch("connect");
  }

  mounted() {
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      this.$store.commit("setWeb3Modal", web3modal);
      if (web3modal.cachedProvider) {
        this.connect();
      }
    });
  }
}
</script>

<style>
@font-face {
  font-family: "EngraversGothic";
  src: url("./assets/fonts/ufonts.com_engraversgothic-bt.ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Chennai Slab";
  src: url("./assets/fonts/Chennai Slab W00 Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>
