<template>
  <div class="parent position-relative" id="tokenomics">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  background-image: url(/img/pager/1.jpeg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 0;
  min-height: 400px;
  margin-left: -20px;
  margin-right: -20px;
}

@media screen and (min-width: 768px) {
  .parent {
    margin-top: 10%
  }
}

@media screen and (min-width: 768px) {
  .parent {
    margin-left: -8%;
    margin-right: -3.8%;
    min-height: 500px;
  }
}

@media screen and (min-width: 898px) {
  .parent {
    min-height: 700px;
  }
}

@media screen and (max-width: 530px) {
  .parent {
    min-height: 250px;
  }
}
</style>