<template>
  <div class="parent">
    <div class="row">
      <div class="col-sm-4 socialContainer">
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
      <div class="col-sm-4 socialContainer">
        <p class="title">Sitemap</p>
        <a
          :href="site.link"
          v-for="(site, index) in siteMap"
          :key="index"
          class="text"
        >
          {{ site.name }}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/MadibaWhitePaper.pdf"
          class="text"
        >
          White paper
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Madiba-Community-Token"
          class="text"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`${BASE_BSC_SCAN_URL}/token/${tokenAddress}`"
          class="text"
        >
          View on BSCScan
        </a>
      </div>
      <div class="col-sm-4 socialContainer">
        <p class="title">Audits</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://coinmarketcap.com/currencies/madiba/"
          class="text"
        >
          Coin market cap
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/coinscope-co/audits/blob/main/diba/audit.pdf"
          class="text"
        >
          Coinscope
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://coinmarketcap.com/currencies/madiba/"
          class="text"
        >
          Coin market cap
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import tokens from '../../config/constants/tokens';
import { BASE_BSC_SCAN_URL } from "../../config/index";
export default {
  data: () => ({
    BASE_BSC_SCAN_URL: BASE_BSC_SCAN_URL,
    tokenAddress: tokens.diba.address,
    socialLinks: [
      // {
      //   name: "facebook",
      //   link: "#",
      // },
      {
        name: "twitter",
        link: "https://twitter.com/officialDiba1",
      },
      {
        name: "Telegram",
        link: "https://t.me/madibatoken",
      },
      {
        name: "Discord",
        link: "https://discord.gg/GmepDnUkDZ",
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