<template>
  <div class="parent" id="roadMap">
    <div class="title">
      <p class="titleText">Roadmap</p>
      <p class="titleSubText">
        This roadmap outlines our goals and plans to achieve the vision of the
        Madiba token and build a great community
      </p>
    </div>
    <div class="mapContainer">
      <div v-for="(map, index) in mapArr" :key="index" class="mapCard">
        <p class="mapTitle">{{ map.title }}</p>
        <p class="mapDate">{{ map.date }}</p>
        <p
          v-for="(item, itemIndex) in map.content"
          :key="itemIndex"
          class="mapContent"
        >
          - {{ map.content[itemIndex] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mapArr: [],
  }),
  created() {
    const mapArr = [
      {
        title: "Phase 1",
        date: "jan 2022",
        content: [
          "Madiba Platform Analysis and planning",
          "Whitepaper creation and Roadmap development",
        ],
      },
      {
        title: "Phase 2",
        date: "feb 2022",
        content: [
          "Smart contract deployment",
          "Social Platforms creation",
          "Website development",
          "Private Sales",
          "Testnet Pre-sale Listing on Pinksale",
          "CoinScope audit",
          "KYC with Pinksale",
          "Pre-sale on Pinksale",
          "DeFi Listing: Pancakeswap",
        ],
      },
      {
        title: "phase 3",
        date: "march 2022",
        content: [
          "Madiba Staking and Madiba Swap Dapp",
          "Strategic Partnership",
          "Massive Marketing (Stage one)",
          "Coinmarketcap and Coingecko Listing",
          "Madiba NFT collection Release",
          "Massive Marketing (Stage two)",
          "Nomics Listing",
        ],
      },
      {
        title: "phase 4",
        date: "may",
        content: [
          "Madiba DAO",
          "CEX Listing: Hotbit",
          "Madiba P2E Gamezone",
          "Continuous Progress",
        ],
      },
    ];
    this.mapArr = mapArr;
  },
};
</script>

<style scoped>
.parent {
  margin-top: 5%;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.titleText {
  font-family: "EngraversGothic", sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 15px;
  text-transform: uppercase;
}
.titleSubText {
  font-size: 15px;
  font-family: "Chennai Slab", sans-serif;
  color: var(--lightText);
}
.mapCard {
  padding: 20px;
  text-align: center;
  box-shadow: 4px 7px 10px -10px var(--primary);
  margin: 0px auto;
  margin-bottom: 15px;
  border: 1px solid var(--lineGreen);
}
.mapTitle {
  font-size: 27px;
  color: var(--primary);
  margin-bottom: 10px;
  text-transform: uppercase;
}
.mapDate {
  color: var(--darkText);
  font-size: 15px;
  text-transform: uppercase;
}
.mapCard,
.mapDate {
  font-family: "EngraversGothic", sans-serif;
}
.mapContent {
  color: var(--lightText);
  font-family: "Chennai Slab", sans-serif;
  font-size: 15px;
  text-transform: capitalize;
  text-align: left;
}
@media screen and (min-width: 768px) {
  .parent {
    padding: 10px 10% 10px 10%;
    width: 90%;
  }
  .mapCard {
    width: 60%;
  }
}
</style>