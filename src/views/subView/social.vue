<template>
  <div class="parent" id="community">
    <p class="titleText">Madiba Community</p>
    <p class="titleSubText">
      Our community grows stronger daily. Join the Madiba family today
    </p>
    <div class="d-flex iconArea">
      <div class="iconContainer" @click="openSocialLink('#')">
        <ion-icon name="logo-facebook"></ion-icon>
      </div>
      <div class="iconContainer" @click="openSocialLink('https://twitter.com/officialDiba1')">
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
      <div class="iconContainer" @click="openSocialLink('#')">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <div class="iconContainer" @click="openSocialLink('#')">
        <ion-icon name="logo-linkedin"></ion-icon>
      </div>
      <div class="iconContainer" @click="openSocialLink('#')">
        <ion-icon name="logo-reddit"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSocialLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.parent {
  margin-top: 10%;
  text-align: center;
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
.iconArea {
  justify-content: space-between;
  margin: 15px auto;
}
.iconContainer {
  background: var(--socialIconbg);
  padding: 7px 10px 5px 10px;
  border-radius: 50px;
  border: 5px solid var(--black);
  cursor: pointer;
  outline: 1px solid var(--socialIconbg);
}
ion-icon {
  color: var(--black);
}
ion-icon {
  font-size: 28px;
}
@media screen and (min-width: 768px) {
  .parent {
    padding: 10px 10% 10px 10%;
    width: 90%;
  }
  .iconArea {
    width: 70%;
  }
  .iconContainer {
    padding: 14px 14px 10px 14px;
  }
  ion-icon {
    font-size: 34px;
  }
}
</style>