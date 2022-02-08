<template>
  <div class="parent">
    <p class="title">Nft liquidity pool</p>
    <p class="text">
      Though NFTs are revolutionalizing art, they are still illiquid assets and
      so to solve that we are creating an NFT liquidity pool that allows members
      to sell their NFTs from several collections at floor price in an instant
      and also buy any NFT in the pool at floor price regardless of the rarity
      trait of said NFT.
    </p>
    <p class="text">
      The pool will also have a burn function for NFTs created by the Madiba
      project where members can burn their NFTs for $DIBA tokens.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  text-align: center;
  margin-top: 10%;
}
.title {
  font-size: 30px;
  color: var(--primary);
  font-family: "EngraversGothic", sans-serif;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.text {
  font-family: "Chennai Slab", sans-serif;
  color: var(--lightText);
  font-size: 15px;
  margin-bottom: 13px;
}
@media screen and (min-width: 768px) {
  .parent {
    padding-left: 40px;
    width: 80%;
  }
}
</style>