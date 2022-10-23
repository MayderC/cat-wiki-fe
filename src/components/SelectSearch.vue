<template>
  <form ref="form" @submit.prevent="searchBreed" class="form">
    <div class="input-container">
      <input
        ref="myInput"
        type="text"
        class="input"
        @click="onFoucus"
        @input="filter"
        v-model="inputText"
        @blur=""
        placeholder="Enter your breed"
      />
     <button @click.prevent="searchBreed"> <img src="../assets/img/search.svg" alt="" /></button>
    </div>
    <div class="wrapper-container" v-if="showSuggestions">
      <div ref="container" class="breeds-container">
        <div
          class="input-values-item"
          v-for="breed in filtered"
          @click="setValue(breed.name)"
        >
          <p>{{ breed.name }}</p>
        </div>
        <p v-if="!filtered.length">No hay resultados</p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { BreedSeggestions } from "@/interfaces/breedSearchItem";
import router from "@/router";
import { ref, watch, type PropType } from "vue";

const props = defineProps({
  items: {
    type: Object as PropType<BreedSeggestions[]>,
    required: true,
  },
  showSuggestions: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["can:show"]);

const form = ref();
const myInput = ref();
const inputText = ref("");

const filtered = ref<BreedSeggestions[]>([]);
const container = ref(null);

watch(
  () => props.items,
  (items) => (filtered.value = items)
);

const setValue = (value: string) => {
  inputText.value = value;
};

const filter = (e: Event) => {
  const text = (e.target as HTMLInputElement).value.toLowerCase();
  filtered.value = props.items.filter((x: BreedSeggestions) =>
    x.name.toLowerCase().includes(text)
  );
};

const hideOnClick = (e: Event) => {
  if ((e.target as HTMLElement).classList.contains("input")) return;
  form.value.classList.remove("form-movile");
  emits("can:show", false);
  myInput.value.focus();
  document.removeEventListener("click", hideOnClick);
};

const onFoucus = () => {
  emits("can:show", true);
  document.addEventListener("click", hideOnClick);
  form.value.classList.add("form-movile");
};

const searchBreed = (e: Event) => {

  if(!inputText.value) return
  router.push("/breed/" + inputText.value);
};
</script>

<style scoped>
.form {
  position: relative;
}

.breeds-container {
  color: #595959;
  height: auto;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 300px;
}

.breeds-container::-webkit-scrollbar {
  width: 5px;
  display: none;
}

.wrapper-container {
  background-color: #fff;
  padding: 25px 0;
  position: absolute;
  margin-top: 20px;
  z-index: 1;
  border-radius: 30px;
  width: 394.62px;
  max-width: 395px;
}

.input {
  outline: none;
  padding: 0 35px;
  border-radius: 59px;
  width: 394.62px;
  max-width: 395px;
  color: #595959;
  height: 60px;
  font-size: 1.6rem;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

.input-container {
  position: relative;
}

.input-container > button {
  position: absolute;
  right: 30px;
  top: 18px;
  border: none;
  background: none;
}


.input-container > button:hover{
  transform: scale(1.2);
  transition: .2s;
}

.breeds-container p {
  padding: 5px 25px;
}

.input-values-item:hover {
  background-color: #f6e2be;
}

@media (max-width: 640px) {
  .form-movile {
    position: absolute;
    display: block;
    width: 100%;
    height: 100vh;
    padding: 50px 20px;
    top: 0;
    left: 0;
    margin: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: rgb(243, 243, 243);
  }

  .input-container button{
    display: none;
  }
  .input {
    position: relative;
    width: 100%;
    min-width: 100%;
    display: block;
    border: 0.5px#c3c3c3 solid;
  }

  .wrapper-container {
    display: block;
    min-width: 100%;
    width: 100%;
    position: relative;
  }
}
</style>
