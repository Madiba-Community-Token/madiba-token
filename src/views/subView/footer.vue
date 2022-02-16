<template>
  <div class="parent">
    <div class="row">
      <div class="col-6 socialContainer">
        <p class="title">Socials</p>
        <p
          @click="openSocialLink(social.link)"
          v-for="(social, index) in socialLinks"
          :key="index"
          class="text"
        >
          {{ social.name }}
        </p>
      </div>
      <div class="col-6 socialContainer">
        <p class="title">Sitemap</p>
        <a
          :href="site.link"
          v-for="(site, index) in siteMap"
          :key="index"
          class="text"
        >
          {{ site.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    socialLinks: [
      // {
      //   name: "facebook",
      //   link: "#",
      // },
      {
        name: "twitter",
        link: "https://twitter.com/officialDiba1",
      },
      // {
      //   name: "instagram",
      //   link: "#",
      // },
      {
        name: "LinkedIn",
        link: "#",
      },
      {
        name: "Telegram",
        link: "https://t.me/madibatoken",
      },
      {
        name: "Discord",
        link: "https://discord.gg/ZhBhu7cRaN",
      },
    ],
    siteMap: [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "ecosystem",
        link: "#ecosystem",
      },
      {
        name: "roamap",
        link: "#roadMap",
      },
      {
        name: "Tokenomics",
        link: "#tokenomics",
      },
      {
        name: "white paper",
        link: "#",
      },
      {
        name: "community",
        link: "#community",
      },
    ],
  }),
  methods: {
    openSocialLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.parent {
  margin-top: 20%;
}
.row {
  /* background: red; */
  width: 90%;
  margin: 5px auto;
}
.socialContainer:last-of-type {
  /* background: blue; */
  padding-left: 10%;
}
.title {
  color: var(--lightText);
  font-size: 25px;
  text-transform: uppercase;
  font-family: "EngraversGothic", sans-serif;
  margin-bottom: 20px;
}
.text {
  font-family: "Chennai Slab", sans-serif;
  font-size: 15px;
  color: var(--darkText);
  margin-bottom: 5px;
  text-transform: capitalize;
  cursor: pointer;
}
.text {
  display: block;
}
@media screen and (min-width: 768px) {
  .parent {
    margin-top: 10%;
  }
  .row {
    width: 50%;
    margin: 5px auto;
  }
}
</style>