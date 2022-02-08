<template>
  <div class="row">
    <div class="col-12" id="ecosystem">
      <p class="title">The Madiba Ecosystem</p>
      <p class="text">
        Nelson Mandela is a Legend who inspired many around the world. Inpsired
        by the same principles of freedom and equality which 'Madiba', as he is
        popularly called, stood for, we are building a community where the tools
        and systems to create wealth are freely available without discrimination
        or bias.
      </p>
      <p class="text">
        Our mission is to create a community that enables everyone to rise in
        wealth and value through a community-driven system that gives an equal
        chance for all to grow and achieve their goals With the Madiba Token
        this is how we plan to create a system of wealth, value and equality for
        all our members.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  text-align: center;
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
  font-size: 17px;
  margin-top: 10px;
}
@media screen and (min-width: 768px) {
  .row {
    padding-left: 40px;
    width: 80%;
  }
}
</style>