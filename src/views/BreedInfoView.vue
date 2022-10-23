<template>
  <section v-if="breed" class="breed-info">
    <div class="img">
      <div class="back"></div>
      <img v-if="breed" :src="breed?.url" alt="" />
    </div>
    <div class="info">
      <p class="name">{{ breed?.breeds[0].name }}</p>
      <p class="desc">
        {{ breed?.breeds[0].description }}
      </p>
      <p>
        <span class="property">Temperament: </span
        >{{ breed?.breeds[0].temperament }}
      </p>
      <p><span class="property">Origin: </span>{{ breed?.breeds[0].origin }}</p>
      <p>
        <span class="property">Life Span: </span
        >{{ breed?.breeds[0].life_span }}
      </p>
      <div class="property-container">
        <p class="property">Adaptability: </p>
        <RankProperties v-if="breed" :num="breed.breeds[0].adaptability"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Afection Level: </p
        ><RankProperties v-if="breed" :num="breed.breeds[0].affection_level"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Child Friendly: </p><RankProperties v-if="breed" :num="breed.breeds[0].child_friendly"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Grooming: </p><RankProperties v-if="breed" :num="breed.breeds[0].grooming"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Intelligence: </p
        ><RankProperties v-if="breed" :num="breed.breeds[0].intelligence"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Health issues: </p
        ><RankProperties v-if="breed" :num="breed.breeds[0].health_issues"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Social needs: </p
        ><RankProperties v-if="breed" :num="breed.breeds[0].social_needs"></RankProperties>
      </div>
      <div class="property-container">
        <p class="property">Stranger friendly: </p
        ><RankProperties v-if="breed" :num="breed.breeds[0].stranger_friendly"></RankProperties>
      </div>
    </div>
  </section>
  <section v-else class="breed-info load">
    <img src="../assets/img/Blocks-1s-200px.svg" alt="">
  </section>
  <section v-if="breed" class="breed-images">

    <div class="card-image" v-for="img in images" :key="img.id">
      <img :src="img.url" alt="">
    </div>

  </section>
</template>

<script lang="ts" setup>
import type { BreedByNameResponse } from "@/interfaces/breedTop";
import type { IMagesByBreed } from "@/interfaces/ImagesByBreed";
import { getBreedByName, getImagesByBreed } from "@/services/catwiki.services";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import RankProperties from "../components/RankProperties.vue";

const route = useRoute();
const breed = ref<BreedByNameResponse>();
const images = ref<IMagesByBreed[]>([])

onMounted(() => {
  getBreedByName(route.params["id"] as string).then((res) => {
    breed.value = res
    getImagesByBreed(res.breeds[0].id).then(res => {
      images.value = res
    })
  });
});
</script>

<style scoped>

.load{
  display: flex;
  align-items: center;
  justify-content: center;
}
.breed-info {
  min-height: calc(100vh - 248px);
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
}

.breed-info .img {
  width: 372px;
  height: 372px;
}

.breed-info .img img {
  width: 372px;
  height: 372px;
  border-radius: 24px;
  object-fit: cover;
}

.breed-info .img {
  position: relative;
}

.breed-info .info{
  width: 50%;;
}

.breed-info .img::before {
  position: absolute;
  display: block;
  content: "";
  height: 300px;
  width: 100px;
  background-color: #dec68b;
  z-index: -1;
  left: -25px;
  top: 30px;
  border-radius: 24px;
}

.info .name {
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #291507;
}
.info p {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 25px;
  color: #291507;
}
.info .property {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-top: 25px;
  color: #000000;
  width: 200px;
}
.property-container{
  display: flex;
  align-items: flex-end;
}


.breed-images{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 50px 0;
}
.card-image{
  overflow: hidden;
  border-radius: 20px;
}
.card-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top left;
  border-radius: 20px;
  transition: .3s;
}

.card-image:hover img {
  transform: scale(1.2);
  transition: .3s;
}

@media (max-width: 983px) {
  
  .breed-info{
    gap: 50px;
  }
  .breed-info .info{
    width: 100%;
  }

}

@media (max-width: 549px) {
  .property-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .breed-info .img img{
    width: 250px;
    height: 250px;
  }


}


</style>
