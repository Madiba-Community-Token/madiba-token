<template>
  <div class="parent init" id="roadMap">
  </div>
  <div class="parent sec">
  </div>
  <div class="parent sec2">
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  created() {
  },
};
</script>

<style scoped>
.parent {
  /* margin-top: 5%; */
  background-image: url(/img/pager/3.jpeg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  margin-bottom: 10%;
  min-height: 400px;
  margin-left: -20px;
  margin-right: -20px;
}
.init {
  margin-bottom: 0;
}
.sec {
  margin-top: 0;
  margin-bottom: 0;
  background-image: url(/img/pager/2.jpeg);
}
.sec2 {
  margin-top: 0;
  background-image: url(/img/pager/4.jpeg);
}

@media screen and (min-width: 768px) {
  .parent.init {
    /* margin-top: 10% */
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