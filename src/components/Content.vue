<template>
  <div class="content">
    <div class="content__top-banner">
      <div class="content__close">
        <span class="content__close--x">x</span>
        <span class="content__close--text">close</span>
      </div>
    </div>
    <div class="content__billboard" />
    <div class="content__container">
      <div class="content__container--title">
        Editor's Choice
      </div>
      <div class="content__container--description">
        Curated with love
      </div>
      <div class="content__container--card" v-if="!isFetching">
        <div v-for="(d, index) in EDITORS_CHOICE" v-bind:key="index">
          <div class="editor__profile">
            <img
              src="../assets/images/annadean.jpg"
              class="editor__profile--image"
            />
            <div class="editor__profile--detail">
              <span class="editor__profile--detail--editor">{{
                d.editor
              }}</span>
              <span class="editor__profile--detail--role">{{ d.role }}</span>
            </div>
          </div>
          <div class="editor__product">
            <div class="editor__product--image">
              <img :src="d.product.image" />
            </div>
            <div :class="'editor-rating-' + index">
              <span class="editor__product--rating">{{
                d.product.rating
              }}</span>
              <div class="stars-outer">
                <div class="stars-inner"></div>
              </div>
            </div>
            <p class="editor__product--name">{{ d.product.name }}</p>
            <p class="editor__product--description">
              {{ d.product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/images/banner-pink.png" />
    <div class="content__billboard" />
    <div class="content__card-more">
      <div class="content__card-more--title">
        Latest Articles
      </div>
      <div class="content__card-more--description">
        Unravel more beauty
        <div class="content__see-more">
          See more
          <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="content__container--card wrap" v-if="!isFetching">
        <div v-for="(d, index) in LATEST_ARTICLES" v-bind:key="index" class="article__item">
          <img :src="d.image" />
          <p class="article__item--title">{{ d.title }}</p>
          <p class="article__item--description">
            {{ d.author }}<span> | {{ d.published_at }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="content__card-more flex-between">
      <div class="content__card-more--review">
        <div class="content__card-more--title">
          Latest Reviews
        </div>
        <div class="content__card-more--description">
          So you can make better purchase decision
          <div class="content__see-more">
            See more
            <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
        </div>
        <div class="content__container--card scrollable" v-if="!isFetching">
          <div class="review__container">
            <div v-for="(d, index) in LATEST_REVIEWS" v-bind:key="index" class="review__item">
            <div class="review__item--top">
              <div class="review__item--product">
                <img :src="d.product.image" />
                <div class="review__item--product--title">
                  <p><b>{{ d.product.name }}</b></p>
                  <p>{{ d.product.desc }}</p>
                </div>
              </div>
              <div class="review__item--description">
                <div class="review__item--description--rating">
                  <div :class="'review-rating-' + index">
                    <div class="stars-outer">
                      <div class="stars-inner"></div>
                    </div>
                  </div>
                  2 hours ago
                </div>
                <p>{{ d.comment }}<span v-if="d.comment.length > 100">...</span><span class="read-more">Read More</span> </p>
              </div>
            </div>
            <div class="review__item--profile">
                <img
                  src="../assets/images/annadean.jpg"
                  class="editor__profile--image"
                />
                <p>{{d.user}}</p>
                <span v-for="(p, index) in d.profile" v-bind:key="p">
                  {{p}}<span v-if="index != Object.keys(d.profile).length-1">, </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-2-banner"></div>
    </div>
    <div class="content__card-more">
      <div class="content__card-more--title">
        Popular Group
      </div>
      <div class="content__card-more--description">
        Where the beauty TALK are
        <div class="content__see-more">
          See more
          <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="content__container--card" v-if="!isFetching">
        <!-- <div v-for="(d, index) in TOP_BRANDS" v-bind:key="index">
          <img v-bind:src="require(d)" />
        </div> -->
        <img src="../assets/images/popular1.png" />
        <img src="../assets/images/popular2.png" />
        <img src="../assets/images/popular3.png" />
        <img src="../assets/images/popular4.png" />
      </div>
    </div>
    <div class="content__card-more">
      <div class="content__card-more--title">
        Latest Video
      </div>
      <div class="content__card-more--description">
        Watch and learn, ladies
        <div class="content__see-more">
          See more
          <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="content__container--card content__container--card--video" v-if="!isFetching">
        <img src="../assets/images/video3.png" />
        <div>
          <img src="../assets/images/video2.png" />
          <img src="../assets/images/video1.png" />
        </div>
      </div>
    </div>
    <div class="content__container">
      <div class="content__container--title">
        Trending This Week
      </div>
      <div class="content__container--description">
        See our weekly most reviewed products
      </div>
      <div class="content__container--card scrollable" v-if="!isFetching">
        <!-- <div v-for="(d, index) in TOP_BRANDS" v-bind:key="index">
          <img v-bind:src="require(d)" />
        </div> -->
        <div class="trending">
          <img src="../assets/images/trends1.png" />
          <img src="../assets/images/trends2.png" />
          <img src="../assets/images/trends3.png" />
          <img src="../assets/images/trends4.png" />
          <img src="../assets/images/trends5.png" />
          <img src="../assets/images/trends6.png" />
          <img src="../assets/images/trends1.png" />
          <img src="../assets/images/trends2.png" />
        </div>
      </div>
    </div>
    <div class="content__card-more">
      <div class="content__card-more--title">
        Top Brands
      </div>
      <div class="content__card-more--description">
        We all know and love
        <div class="content__see-more">
          See more
          <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="content__container--card object-fit" v-if="!isFetching">
        <!-- <div v-for="(d, index) in TOP_BRANDS" v-bind:key="index">
          <img v-bind:src="require(d)" />
        </div> -->
        <img src="../assets/images/nivea.png" />
        <img src="../assets/images/to.png" />
        <img src="../assets/images/tbs.png" />
        <img src="../assets/images/skii.png" />
        <img src="../assets/images/maybelline.png" />
        <img src="../assets/images/innisfree.png" />
      </div>
    </div>
    <p></p>
    <div class="content__container content__container--left">
      <div class="content__container--title-about">
        Female Daily - Find everything you want to know about beauty on Female Daily
      </div>
      <div class="content__container--description-about">
        Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
        Tutorials, Discussions, Beauty Workshops, anything! We are here to be
        your friendly solution to all things beauty, inside and out!
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Content",
  data() {
    return {
      isFetching: true
    };
  },
  // created() {
  //   this.fetchData();
  // },
  async mounted() {
    await this.fetchData();
    this.setRating();
  },
  methods: {
    setRating() {
      this.$store.getters["EDITORS_CHOICE"].forEach((element, index) => {
        const starPercentage = (element.product.rating / 5) * 100;

        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        
        let indexStars = document.querySelector(`.editor-rating-${index} .stars-outer .stars-inner`)
        indexStars.style.width = starPercentageRounded
      });

      this.$store.getters["LATEST_REVIEWS"].forEach((element, index) => {
        const starPercentage = (element.star / 5) * 100;

        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        
        let indexStars = document.querySelector(`.review-rating-${index} .stars-outer .stars-inner`)
        indexStars.style.width = starPercentageRounded
      });
    },
    async fetchData() {
      try {
        const url = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";
        const response = await fetch(url, {
          method: "GET"
        });
        const json = await response.json();
        this.$store.dispatch("setData", json);
        this.isFetching = false;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("asd");
      }
    }
  },
  computed: {
    ...mapGetters(["DATA"]),
    ...mapGetters(["EDITORS_CHOICE"]),
    ...mapGetters(["LATEST_ARTICLES"]),
    ...mapGetters(["LATEST_REVIEWS"]),
    ...mapGetters(["TOP_BRANDS"])
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/Content.scss';
</style>