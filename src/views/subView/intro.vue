<template>
  <div class="row" id="home">
    <div class="col-md-4 textArea">
      <p class="title">Decentralizing</p>
      <p>Wealth equality and freedom</p>
      <div class="optionsContainer">
        <div class="d-flex optionsGroup">
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>DIBA Swap</p>
            <div class="commingSoon">
              <p>Coming Soon</p>
            </div>
          </div>
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>Madiba NFT</p>
          </div>
        </div>
        <div class="d-flex optionsGroup">
          <div class="d-flex options">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>P2E GAMES</p>
            <div class="commingSoon">
              <p>Coming Soon</p>
            </div>
          </div>
          <div class="d-flex options mr-2">
            <p>
              <span class="material-icons">api</span>
            </p>
            <p>DIBA DAO</p>
          </div>
        </div>
      </div>
      <div class="footer c-timer" v-if="!canStartSale">
        <h3>Private sale starts in:</h3>
        <span>{{ countDown }}</span>
        </div>
      <div class="footer" v-else>
        <app-button
          :styles="{}"
          :text="'Buy $diba'"
          @action="$emit('viewBuy')"
        />
      </div>
    </div>
    <div class="col-md-8 imageArea">
      <template v-for="(img, i) in images" :key="i">
        <Transition>
          <img v-if="currentImage == img" :src="img" class="madibaImage" />
        </Transition>
      </template>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/button.vue";
import { DateTime } from "luxon";
export default {
  components: {
    AppButton,
  },
  methods: {
    arrayShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    },
    initializeClock() {
      this.updateClock();
      this.timeinterval = setInterval(this.updateClock, 1000);
    },
    updateClock() {
      var t = this.getTimeRemaining(this.start_time);
      this.daysSpan = t.days;
      this.hoursSpan = ("0" + t.hours).slice(-2);
      this.minutesSpan = ("0" + t.minutes).slice(-2);
      this.secondsSpan = ("0" + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(this.timeinterval);
      }
    },
  },
  data() {
    return {
      start_time: DateTime.fromMillis(
        new Date("2022-02-25 13:00").getTime()
      ).setZone("America/New_York"),
      timeinterval: null,
      daysSpan: null,
      hoursSpan: null,
      minutesSpan: null,
      secondsSpan: null,
      currentImage: 0,
      images: [
        "/img/diba/1.png",
        "/img/diba/2.png",
        "/img/diba/3.png",
        "/img/diba/4.png",
        "/img/diba/5.png",
        "/img/diba/6.png",
        "/img/diba/7.png",
        "/img/diba/8.png",
        "/img/diba/9.png",
        "/img/diba/10.png",
        "/img/diba/11.png",
        "/img/menor/1.png",
        "/img/menor/2.png",
        "/img/menor/3.png",
        "/img/menor/4.png",
        "/img/menor/5.png",
        "/img/menor/6.png",
        "/img/menor/7.png",
        "/img/menor/8.png",
        "/img/menor/9.png",
        "/img/menor/10.png",
        "/img/menor/11.png",
        "/img/menor/12.png",
        "/img/menor/13.png",
        "/img/menor/14.png",
      ],
    };
  },
  mounted() {
    this.initializeClock();
    setInterval(() => {
      this.arrayShuffle(this.images);
      this.currentImage = this.images[0];
    }, 2000);
  },
  computed: {
    canStartSale() {
      return new Date(this.start_time) < new Date();
    },
    countDown() {
      if (new Date(this.start_time) >= new Date()) {
        return `${this.daysSpan} days : ${this.hoursSpan}: ${this.minutesSpan}:${this.secondsSpan}`;
      }
      return "00:00:00:00";
    },
  },
};
</script>

<style scoped>
.c-timer h3 {
  font-size: 20px;
  font-weight: bold;
  color: var(--primary);
  font-family: "Chennai Slab", sans-serif;
}
.c-timer span {
  font-size: 35px;
  font-weight: bold;
  color: var(--lightText);
  font-family: "Chennai Slab", sans-serif;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.textArea {
  margin-top: 4%;
  /* background: red; */
}
.textArea > p {
  font-family: "Chennai Slab", sans-serif;
}
.title {
  font-size: 50px;
  font-weight: bold;
  color: var(--primary);
}
.textArea > p:nth-of-type(2) {
  font-size: 27px;
  color: var(--lightText);
  text-transform: capitalize;
}
.optionsContainer {
  margin-top: 25px;
}
.optionsGroup {
  justify-content: space-between;
  align-items: center;
}
.options > p {
  font-family: "EngraversGothic", sans-serif;
  color: var(--darkText);
  font-size: 15px;
  text-transform: uppercase;
}
.options > p:nth-of-type(2) {
  margin-left: 10px;
  margin-top: 3px;
}
.footer {
  margin-top: 5%;
}
.imageArea {
  /* background: blue; */
  padding-left: 0px;
}
.madibaImage {
  height: 600px;
  width: 650px;
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

@media screen and (max-width: 768px) {
  .optionsGroup {
    max-width: 100%;
    min-width: 50%;
  }
  .imageArea {
    margin-top: 13px;
  }
  .madibaImage {
    height: 400px;
    width: 430px;
    margin-left: -40px;
  }
  .commingSoon {
    margin-left: 2px;
    margin-bottom: 12px;
    font-size: 7px !important;
    height: 13px;
    width: 50px;
  }
}
</style>