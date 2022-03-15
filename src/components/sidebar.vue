<template>
  <div class="sideNav" id="sideNav">
    <p
      @click="$emit('toggleView', 'home')"
      :class="{ navItem: true, active: view == 'home' }"
    >
      <i class="fa fa-home"></i>
      <span>Home</span>
    </p>
    <a href="https://www.pivksale.finance/launchpad/0xc75Fa4ea913f96dc1cD7E9190E48288Eba5Eb88D?chain=BSC" :class="{ navItem: true, active: view == 'buy' }">
      <i class="fa fa-handshake"></i>
      <span>Buy</span>
    </a>
    <p :class="{ navItem: true, active: view == 'swap' }">
      <i class="fa fa-exchange-alt"></i>
      <span>Madiba Swap</span>
    </p>
    <p
      @click="$emit('toggleView', 'nft')"
      :class="{ navItem: true, active: view == 'nft' }"
    >
      <i class="fa fa-dollar-sign"></i>
      <span>NFT</span>
    </p>
    <p
    @click="$emit('toggleView', 'menornft')"
      :class="{ navItem: true, active: view == 'menornft' }"
    >
      <i class="fa fa-dollar-sign"></i>
      <span>Goya Menor NFTs</span>
    </p>
    <a target="_blank" rel="noopener noreferrer" href="/MadibaWhitePaper.pdf" :class="{ navItem: true, active: view == 'paper' }">
      <i class="fa fa-file-word"></i>
      <span>White paper</span>
    </a>
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
  computed: {
  },
  data() {
    return {
    }
  }
};
</script>

<style scoped>
.sideNav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  /* top: 60; */
  font-family: "EngraversGothic", sans-serif;
  left: 0;
  /* background-color: var(--black); */
  background-color: var(--black);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 0px;
  margin-top: 0px;
  box-shadow: 2px 28px 30px -12px var(--primary);
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.navItem {
  display: flex;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30%;
  align-items: center;
  justify-content: flex-start;
  transition: 0.3s;
  margin-bottom: 15px;
  cursor: pointer;
  max-width: 250px;
}
.navItem:hover {
  opacity: 0.5;
  /* transform: scaleY(1.2); */
  /* transform:rotate(5deg) */
  border-left-style: solid;
  border-left-width: 4px;
  border-left-color: var(--primary);
  transform: translate(10px, 5px);
}
.navItem span {
  /* font-weight: bold; */
  transition: 0.3s;
  font-size: 15px;
  text-transform: uppercase;
  color: var(--lightText);
}

.navItem .fa {
  margin-right: 13px;
  color: var(--lightText);
}
. .active {
  /* background-color: #ededed; */
}
.active span,
.active .fa {
  color: var(--primary) !important;
  font-weight: bold;
}
@media screen and (min-width: 768px) {
  .sideNav {
    display: none;
  }
}
</style>