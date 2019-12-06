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
            <img src="../assets/images/annadean.jpg" />
            <div class="editor__profile--detail">
              <p>{{d.editor}}</p>
              <p>{{d.role}}</p>
            </div>
          </div>
          <div class="editor__product">
            <img :src="d.product.image" />
            <p>{{d.product.rating}}</p>
            <p>{{d.product.name}}</p>
            <p>{{d.product.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/images/pink-banner.png" />
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
    </div>
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
    </div>
    <div class="content__container">
      <div class="content__container--title">
        Trending This Week
      </div>
      <div class="content__container--description">
        See our weekly most reviewed products
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
    </div>
    <div class="content__container">
      <div class="content__container--title">
        <span>
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </span>
      </div>
      <div class="content__container--description">
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
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const url = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";
        const response = await fetch(url, {
          method: "GET"
        });
        const json = await response.json();
        this.$store.dispatch("setData", json);
        // eslint-disable-next-line no-console
        console.log(json["editor's choice"])
        this.isFetching = false;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("asd")
      }
    }
  },
  computed: {
    ...mapGetters(["DATA"]),
    ...mapGetters(["EDITORS_CHOICE"]),
    ...mapGetters(["LATEST_ARTICLES"]),
    ...mapGetters(["LATEST_REVIEWS"])
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/Content.scss';
</style>
