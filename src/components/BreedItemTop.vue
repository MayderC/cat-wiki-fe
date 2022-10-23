<template>
  <RouterLink :to="'/breed/'+name" class="card-link">
    <div class="container_top-breed">
    <img :src="prop.image_url" alt="" />
    <p>{{ prop.name }}</p>
  </div>
  </RouterLink>
</template>
<script lang="ts" setup>

const prop = defineProps({
  name: {
    type: String,
  },
  image_url: {
    type: String,
  },
});
</script>
<style scoped>

.card-link{
  text-decoration: none;
}

.container_top-breed {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 30px;
}

.container_top-breed p {
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  color: #291507;
  margin-top: 15px;
}

.container_top-breed img {
  display: block;
  width: 220px;
  height: 220px;
  object-fit: cover;
  object-position: right top;
  border-radius: 30px;
}

@media  (max-width: 724px){
  .container_top-breed img{
    width: 180px;
    height: 180px;
  }
  .container_top-breed {
    height: 180px;
    width: 180px;
  }

  .list-top{
    
  }
}

</style>
