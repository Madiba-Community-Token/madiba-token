<template>
  <div class="body">
    <nav-bar @toggleView="toggleView($event)" :view="view" />
    <side-bar @toggleView="toggleView($event)" :current="''" :view="view" />
    <div v-if="view !== 'buy'" class="content" @click="closeNav">
      <intro-view v-if="view !== 'nft'" @viewBuy="toggleView('buy')"/>
      <NFTView v-else />
      <div v-if="view !== 'nft'">
        <overview />
        <card-view />
        <tokenomics/>
        <road-map />
        <social />
      </div>
      <div v-else>
        <NFTOverview />
        <Nfts />
      </div>
      <Footer />
    </div>
    <buy-card v-else />
  </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import SideBar from "../components/sidebar.vue";
import IntroView from "./subView/intro.vue";
import NFTView from "./subView/nftIntroView.vue";
import Overview from "./subView/overview.vue";
import CardView from "./subView/cardView.vue";
import RoadMap from "./subView/roadMap.vue";
import Social from "./subView/social.vue";
import NFTOverview from "./subView/nftOverview.vue";
import Nfts from "./subView/nfts.vue";
import Footer from "./subView/footer.vue";
import BuyCard from "./subView/buy.vue";
import Tokenomics from './subView/tokenomics.vue'
export default {
  components: {
    NavBar,
    SideBar,
    IntroView,
    NFTView,
    Overview,
    CardView,
    RoadMap,
    Social,
    NFTOverview,
    Nfts,
    Footer,
    BuyCard,
    Tokenomics
  },
  data: () => ({
    view: "",
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
  },
  created() {
    this.view = sessionStorage.getItem("view") || "home";
  },
  unmounted() {
    sessionStorage.removeItem("view");
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .content {
    padding: 0px 20px;
  }
}
</style>