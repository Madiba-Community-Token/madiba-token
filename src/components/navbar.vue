<template>
  <div class="d-flex navBar" id="navBar">
    <div class="d-flex logoAndBtn">
      <div class="ml-2 sideBarToggle">
        <span v-if="closed" class="hamburgerBtn" @click="openNav()">
          <i class="fa fa-ellipsis-v menuBtn"></i>
        </span>
        <span v-else class="closebtn" @click="closeNav()"
          ><i class="fa fa-times menuBtn"></i
        ></span>
      </div>
      <div
        class="d-flex nameLogoContainer pointer"
        @click="$emit('toggleView', 'home')"
      >
        <img src="../assets/triangles.png" class="triangleImage" />
        <p class="logoText">Madiba</p>
      </div>
    </div>
    <div class="d-flex navLinkContainer">
      <p
        :class="{ navLink: true, activelink: view === 'home' }"
        @click="$emit('toggleView', 'home')"
      >
        Home
      </p>
      <p @click="$emit('toggleView', 'buy')"
        :class="{ navLink: true, activelink: view === 'buy' }" style="margin-bottom: 1rem"
      >
        Buy
      </p>
      <router-link :class="{ navLink: true, activelink: view === 'buy' }" to="claim-airdrop" style="margin-bottom: 1rem"
        >Claim Airdrop</router-link
      >
      <p title="Coming Soon" :class="{ navLink: true, activelink: view === 'swap' }">Madiba Swap</p>
      <p
        :class="{ navLink: true, activelink: view === 'nft' }"
        @click="$emit('toggleView', 'nft')"
      >
        NFT
      </p>
      <p
      @click="$emit('toggleView', 'menornft')"
        :class="{ navLink: true, activelink: view === 'menornft' }"
      >
        Goya Menor NFTs
      </p>
      <a target="_blank" rel="noopener noreferrer" href="/MadibaWhitePaper.pdf" title="Coming Soon" :class="{ navLink: true, activelink: view === 'paper' }" style="margin-bottom: 1rem">
        White paper
      </a>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    closed: true,
  }),
  computed: {
    
  },
  methods: {
    openNav() {
      document.getElementById("sideNav").style.width = "250px";
      document.getElementById("navBar").style["margin-left"] = "250px";
      this.closed = false;
    },
    closeNav() {
      document.getElementById("sideNav").style.width = "0";
      document.getElementById("navBar").style["margin-left"] = "0px";
      this.closed = true;
    },
  },
};
</script>

<style scoped>
.navBar {
  /* position: sticky!important; */
  width: 100%;
  /* position: fixed!important; */
  position: sticky;
  position: -webkit-sticky;
  transition: 0.5s;
  top: 0;
  z-index: 1000;
  background: var(--black);
  /* background: red; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "EngraversGothic", sans-serif;
}
.logoAndBtn {
}

.hamburgerBtn {
  float: left;
  font-size: 30px;
  cursor: pointer;
  color: var(--primary);
  margin-right: 10px;
  padding-right: 20px;
  display: none;
}
.closebtn {
  color: #fff;
  cursor: pointer;
  float: left;
  font-size: 30px;
}
.triangleImage {
  height: 30px;
  width: 40px;
}
.logoText {
  color: var(--primary);
  font-size: 27px;
  margin-left: 10px;
}
.navLinkContainer {
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  margin-right: 10%;
}
.navLink {
  color: var(--darkText);
  font-size: 15px;
  text-transform: uppercase;
  transition: 0.5s;
  padding-bottom: 5px;
}
.navLink:hover {
  color: var(--lightText);
  cursor: pointer;
}
.menuBtn {
  color: Var(--darkText);
}
.activelink {
  color: var(--lightText);
}
.nameLogoContainer {
  cursor: pointer;
}
.commingSoon {
  background: var(--primary);
  color: #000 !important;
  /* font-weight: bold; */
  font-size: 10px !important;
  border-radius: 12px;
  text-align: center;
  height: 20px;
  width: 80px;
  padding-top: 2px;
  margin-bottom: 10px;
  margin-left: 5px;
}
@media screen and (min-width: 768px) {
  .closebtn {
    display: none !important;
  }
  .sideBarToggle {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  /* .navBar {
    background: red;
  } */
  .navLinkContainer {
    display: none !important;
  }
  .logoAndBtn {
    width: 100%;
  }
  .nameLogoContainer {
    margin-left: 27%;
  }
  .hamburgerBtn {
    display: inline;
  }
  .menuBtn {
    font-size: 23px;
  }
}
</style>