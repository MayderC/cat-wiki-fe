<template>
  <header class="flex-center-b">
    <div class="search-section">
      <div class="img">
        <img src="../assets/img/CatwikiLogo.svg" alt="" />
      </div>
      <p>Get to know more aout your cat breed</p>
      <select-search
        class="select-search"
        @can:show="(value) => setCanShow(value)"
        :show-suggestions="canShow"
        :items="breeds"
      ></select-search>
    </div>
  </header>
  <section class="section-top">
    <div class="text-top">
      <p>Most Searched Breeds</p>
      <div class="text-bar"></div>
    </div>
    <div class="section-top--body">
      <div class="subtitle-section-top">
        <p>66+ Breeds For you to discover</p>
      </div>
      <div class="see-more">
        <router-link class="see-more" to="/top">
          <p>See more</p>
          <img src="../assets/img/right-arrow.svg" alt="" />
        </router-link>
      </div>
    </div>
    <div class="section-top--body-list">
      <div class="list-top">
        <breed-item-top
          v-for="breed in topBreeds"
          :key="breed._id"
          :_id="breed._id"
          :name="breed.name"
          :image_url="breed.image_url"
        ></breed-item-top>
      </div>
    </div>
  </section>
  <section class="section-md">
    <div class="middle-item section-md-left">
      <div class="bar-middle-title"></div>
      <h2>Why should you have a cat?</h2>
      <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
    </div>
    <div class="middle-item section-md-rigth">
      <div class="middle-left-img">
        <div class="left-img-1">
          <img src="../assets/img/image2.png" alt="">
        </div>
        <div class="left-img-2">
          <img src="../assets/img/image1.png" alt="">
        </div>
      </div>
      <div class="middle-rigth-img">
        <img src="../assets/img/image3.png" alt="">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { IBreedTop } from "@/interfaces/breedTop";
import {
  getTopSearchedBreeds,
  getBreedSuggestions,
} from "@/services/catwiki.services";
import { onMounted, ref } from "vue";
import SelectSearch from "../components/SelectSearch.vue";
import BreedItemTop from "../components/BreedItemTop.vue";

const topBreeds = ref<IBreedTop[]>([]);
const breeds = ref([]);
const canShow = ref(false);

const setCanShow = (value: boolean) => {
  console.log(value);
  canShow.value = value;
};

onMounted(() => {
  getTopSearchedBreeds(4).then((res) => (topBreeds.value = res));
  getBreedSuggestions().then((res) => (breeds.value = res));
});
</script>
<style>
.img-logo {
  height: 43px;
}
header {
  background-image: url(../assets/img/HeroImagelg.png);
  height: 538px;
  background-size: cover;
  border-radius: 42px 42px 0 0;
  background-position: right bottom;
  background-repeat: no-repeat;
  width: 100%;
  padding: 0 96px;
}

.search-section {
  color: #fff;
  width: 400px;
}

.search-section > .img {
  width: 300px;
}

.search-section > div > img {
  filter: invert(100%) grayscale();
  display: block;
  max-width: 100%;
  width: 100%;
}

.search-section p {
  font-size: 1.5rem;
}

.select-search {
  margin-top: 50px;
}

.section-top {
  background-color: #e3e1dc;
  height: auto;
  border-radius: 0 0 42px 42px;
  padding: 40px 96px;
}

.text-top {
  font-size: 1.5rem;
  line-height: 22px;
  /* identical to box height */
  font-style: normal;
  font-weight: bold;

  color: #291507;
}

.text-bar {
  width: 59.18px;
  height: 4.5px;
  background: #4d270c;
  border-radius: 77px;
  margin-top: 10px;
}

.section-top--body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.subtitle-section-top {
  width: 536.93px;
  min-width: 399px;
  margin-top: 36px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  color: #291507;
}

.see-more {
  display: flex;
  align-items: center;
  align-self: flex-end;
  height: 40px;
  color: #291507;
  text-decoration: none;
}

.see-more p {
  white-space: nowrap;
  margin-right: 10px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
}

.see-more img {
  width: 30px;
}

.section-md{
  display: flex;
  margin: 60px 0;
  flex-wrap: wrap;
  justify-content: center;
}



.section-md-rigth{
  display: flex;
  gap: 20px;
}

.section-md-left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  width: 600px;

}

.middle-item h2{
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;

  color: #291507;
}

.middle-item p{
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #291507;
}

.middle-left-img{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}

.left-img-1 img{
  height: 167px;
}
.left-img-2 img{
  height: 294px;
}
.middle-rigth-img img{
  height: 385px;
}


.section-top--body-list {
  padding: 46px 0;
}

.list-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

@media  (max-width: 724px){
  
  .subtitle-section-top{
    width: 100%;
    min-width: 100%;
  }

  .list-top{
    gap: 20px;
  }
  .section-top{
    padding: 40px 20px;
  }

  header{
    padding: 20px;
  }
}

@media (max-width: 573px) {

  .section-md-rigth .left-img-1 img{
    height: 107px;
  }
  .section-md-rigth .left-img-2 img{
    height: 204px;
  }
  .middle-rigth-img img{
    height: 305px;
  }
  .section-md-left{
    padding: 30px;
  }
}


@media (max-width: 498px) {

  .search-section .img{
    width: 200px;
  }
  .search-section, .form{
    width: 100%;
  }
  .section-md-rigth .left-img-1 img{
    height: 67px;
  }
  .section-md-rigth .left-img-2 img{
    height: 164px;
  }
  .middle-rigth-img img{
    height: 265px;
  }

}

</style>
