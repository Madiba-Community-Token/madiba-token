<template>
  <div class="parent">
    <div class="row">
      <div class="col-md-6 toHide">
        <div class="card">
          <div class="cardHeader">
            <div class="iconContainer">
              <i class="fa fa-exchange-alt"></i>
            </div>
            <p>Madiba Swap</p>
          </div>
          <div class="cardTextContainer">
            <p class="cardText">
              The Madiba Swap will serve as our flagship product for value
              creation for our members and others who wish to use its services.
            </p>
            <p class="cardText">
              It will be a DEX platform built on the Binance smart chain with
              features like staking and farming with very juicy APR rates for
              holders of the &dollar;DIBA token.
            </p>
            <p class="cardText">
              This platform will also serve as a launchpad for any project of
              the members of our community, as it will help their projects get
              liquidity and distribution faster.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6" id="hiddenElement">
        <div class="card">
          <div class="cardHeader">
            <div class="iconContainer">
              <i class="fa fa-users"></i>
            </div>
            <p>NFT Liquidty Pool</p>
          </div>
          <div class="cardTextContainer">
            <p class="cardText">
              Though NFTs are revolutionalizing art, they are still illiquid
              assets and so to solve that we are creating an NFT liquidity pool
              that allows members to sell their NFTs from several collections at
              floor price in an instant and also buy any NFT in the pool at
              floor price regardless of the rarity trait of said NFT.
            </p>
            <p class="cardText">
              The pool will also have a burn function for NFTs created by the
              Madiba project where members can burn their NFTs for $DIBA tokens.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 left">
        <div class="card">
          <div class="cardHeader">
            <div class="iconContainer">
              <span class="material-icons">palette</span>
            </div>
            <p>Madiba NFT</p>
          </div>
          <div class="cardTextContainer">
            <p class="cardText">
              Art is a strong part of our heritage as a people and we love them.
            </p>
            <p class="cardText">
              The Madiba project in partnership with Klynox Labs (creators of
              'Hall Of Royals') is creating an NFT collection that portrays
              Nelson Mandela - Madiba, in a very glorious form.
            </p>
            <p class="cardText">
              The collection will be created on the BSC and posses a burn
              function that can convert each NFT to &dollar;DIBA tokens
              depending on their rarity
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 toHide">
        <div class="card">
          <div class="cardHeader">
            <div class="iconContainer">
              <i class="fa fa-gamepad"></i>
            </div>
            <p>P2E GAMES</p>
          </div>
          <div class="cardTextContainer">
            <p class="cardText">
              GameFi and the metaverse are rapidly creating an evolution in the
              world of gaming today, with Play to Earn games changing the
              narrative around games.
            </p>
            <p class="cardText">
              We will be creating a Game zone driven by Peer to Peer and online
              multiplayer style games that players can participate and win
              substantial amounts of $DIBA in Prizes.
            </p>
            <p class="cardText">
              This will also serve as a launchpad for game creators in the
              community. We will also be funding game developers
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 left">
        <div class="card">
          <div class="cardHeader">
            <div class="iconContainer">
              <i class="fa fa-flag-checkered"></i>
            </div>
            <p>Madiba Dao</p>
          </div>
          <div class="cardTextContainer">
            <p class="cardText">
              Our Community is the backbone of this project and so creating an
              authentic way for each member to participate and propose new idea
              , projects and to vote and arrive ata consensus on several
              decisions is very key to this project.
            </p>
            <p class="cardText">
              Therefore we will be building a DAO system that allows holders of
              $DIBA and members to vote and propose new projects and ideas to
              drive our community further and create more value.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="navBtnContainer">
      <div class="navBtn" @click="animate(!lastCard)">
        <i v-if="lastCard" class="fa fa-chevron-left"></i>
        <i v-else class="fa fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    lastCard: false,
  }),
  methods: {
    animate(state) {
      let collection = document.getElementsByClassName("toHide");
      let secondElement = document.getElementById("hiddenElement");
      this.lastCard = state ? true : false;
      for (let i = 0; i < collection.length; i++) {
        let obj = collection[i];
        if (state) {
          obj.style.opacity = "0";
          obj.style.transform = "translate(-70%, 0px)";
          window.setTimeout(() => {
            obj.style.display = "none";
            secondElement.style.display = "block";
          }, 1000);
        } else {
          obj.style.opacity = "1";
          obj.style.transform = "translate(0%, 0px)";
          window.setTimeout(() => {
            obj.style.display = "block";
            secondElement.style.display = "none";
          }, 1000);
        }
      }
    },
  },
};
</script>

<style scoped>
.row {
  background-image: url("../../assets/greenBg.png");
  background-position: center;
  background-size: 87% 80%;
  background-repeat: no-repeat;
}
.col-md-6 {
  transition: 2s;
  padding: 10px;
}
.card {
  background: var(--black);
  padding: 25px;
}
.card:hover {
  box-shadow: 12px 0px 25px -10px var(--primary);
}
#hiddenElement {
  display: none;
}
.cardHeader {
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--lineGreen);
}
.iconContainer {
  background: var(--lineGreen);
  border-radius: 7px;
  margin-right: 10%;
  height: 10%;
  padding: 5px 10px;
}
.iconContainer > * {
  color: var(--primary);
  font-size: 25px;
  /* margin-top:10px */
}
.cardHeader > p {
  color: var(--primary);
  font-size: 25px;
  font-family: "EngraversGothic", sans-serif;
  text-transform: uppercase;
}
.cardText {
  font-family: "Chennai Slab", sans-serif;
  color: var(--darkText);
  font-size: 15px;
  margin-bottom: 15px;
}
.cardTextContainer:hover p {
  color: var(--lightText) !important;
}
.gg {
  background: white !important;
}

.hide {
  display: none;
}
.navBtnContainer {
  text-align: center;
}
.navBtn {
  background: var(--lineGreen);
  border-radius: 50px;
  margin-right: 10%;
  margin: 10px auto;
  width: 50px;
  cursor: pointer;
  padding: 10px 15px;
}
.navBtn i {
  font-size: 20px;
  color: var(--primary);
}
@media screen and (max-width: 768px) {
  #hiddenElement {
    display: block;
  }
  .navBtnContainer {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .row {
    width: 80%;
    margin-left: 40px;
  }
  .card {
    width: 80%;
  }
}
</style>