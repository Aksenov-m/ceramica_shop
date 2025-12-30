<!-- <template>
  <main class="main-subsection-wrapper">
    <div v-if="loading && products.length === 0" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">Ошибка: {{ error }}</div>
    <div v-else class="main-subsection">
      <Card
        v-for="product in products"
        :key="product.id"
        :img="product.image_url || product.image"
        :text="product.name || product.text"
        :description="product.description"
        :price="product.price"
      />
    </div>
    <CeramicLoader v-if="loading && products.length > 0" />
  </main>
</template>

<script setup>
import Card from "../Card/Card.vue";
import CeramicLoader from "../CeramicLoader/CeramicLoader.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { supabase } from "../../../supabase";

const products = ref([]);
const photos = ref([]);
const loading = ref(false);
const error = ref(null);
const page = ref(0);
const limit = 10; // количество товаров за один запрос
let allLoaded = false;

const loadProducts = async () => {
  if (loading.value || allLoaded) return;
  loading.value = true;
  error.value = null;

  try {
    const from = page.value * limit;
    const to = from + limit - 1;

    const { data, error: err } = await supabase
      .from("Ceramic")
      .select("*")
      .order("id", { ascending: true })
      .range(from, to);

    if (err) throw err;

    if (data.length === 0) {
      allLoaded = true;
    } else {
      products.value.push(...data);
      page.value++;
    }
  } catch (e) {
    error.value = e.message || "Ошибка загрузки данных";
  } finally {
    loading.value = false;
  }
};

const loadPhotos = async () => {
  if (loading.value || allLoaded) return;
  loading.value = true;
  error.value = null;

  try {
   const { data, error: err } = await supabase
      .from("Images")
      .select("*")
      .order("ceramic_id", { ascending: true })
      .range(from, to);

    if (err) throw err;

    if (data.length === 0) {
      allLoaded = true;
    } else {
      photos.value.push(...data);
      page.value++;
    }
  } catch (e) {
    error.value = e.message || "Ошибка загрузки данных";
  } finally {
    loading.value = false;
  }
};


const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const bottomThreshold = document.body.offsetHeight - 200; // запас 200px до конца страницы
  if (scrollPosition >= bottomThreshold) {
    loadProducts();
  }
};

onMounted(() => {
  loadProducts();
  loadPhotos();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.main-subsection-wrapper {
  width: 100%;
  max-width: 380px;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.main-subsection {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.loading,
.error {
  padding: 20px;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #4B5563;
}

.error {
  color: #dc2626;
}
</style> -->

<!-- <script setup>
import Card from "../Card/Card.vue";
import CeramicLoader from "../CeramicLoader/CeramicLoader.vue";
// import CeramicBallsLoader from "../CeramicBallsLoader/CeramicBallsLoader.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../../../supabase";

const products = ref([]);
const photos = ref([]);
const loadingProducts = ref(false);
const loadingPhotos = ref(false);
const error = ref(null);

// общий лоадер
const loadingAll = ref(true);

const page = ref(0);
const limit = 10;
let allLoadedProducts = false;
let allLoadedPhotos = false;

// функции загрузки (как у нас было)
const loadProducts = async () => {
  if (loadingProducts.value || allLoadedProducts) return;
  loadingProducts.value = true;
  try {
    const from = page.value * limit;
    const to = from + limit - 1;

    const { data, error: err } = await supabase
      .from("Ceramic")
      .select("*")
      .order("id", { ascending: true })
      .range(from, to);

    if (err) throw err;

    if (!data.length) allLoadedProducts = true;
    else products.value.push(...data);
    page.value++;
  } catch (e) {
    error.value = e.message || "Ошибка загрузки товаров";
  } finally {
    loadingProducts.value = false;
    checkLoadingAll();
  }
};

const loadPhotos = async () => {
  if (loadingPhotos.value || allLoadedPhotos) return;
  loadingPhotos.value = true;
  try {
    const { data, error: err } = await supabase
      .from("Images")
      .select("*")
      .order("id", { ascending: true })
      .limit(20);

    if (err) throw err;

    if (!data.length) allLoadedPhotos = true;
    else photos.value.push(...data);
  } catch (e) {
    error.value = e.message || "Ошибка загрузки фотографий";
  } finally {
    loadingPhotos.value = false;
    checkLoadingAll();
  }
};

const checkLoadingAll = () => {
  loadingAll.value = loadingProducts.value || loadingPhotos.value;
};

onMounted(() => {
  loadProducts();
  loadPhotos();
});
</script>

<template>
  <main class="main-subsection-wrapper">
    <CeramicLoader v-if="loadingAll" />
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="main-subsection">
      <Card
        v-for="product in products"
        :key="product.id"
        :img="product.image_url || product.image"
        :text="product.name || product.text"
        :description="product.description"
        :price="product.price"
      />
      <div class="photo-gallery">
        <img
          v-for="photo in photos"
          :key="photo.id"
          :src="photo.url || photo.image_url"
          :alt="photo.description || 'Фотография'"
          class="photo-item"
        />
      </div>
    </div>
  </main>
</template> -->

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useProductStore } from "../stores/productStore";

import Card from "../components/Card/Card.vue";
import CeramicLoader from "../components/CeramicLoader/CeramicLoader.vue";

const store = useProductStore();

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const bottomThreshold = document.body.offsetHeight - 200;

  if (scrollPosition >= bottomThreshold) {
    store.loadProducts();
  }
};

onMounted(() => {
  store.loadProducts();
  store.loadPhotos();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <main class="main-subsection-wrapper">
    <CeramicLoader v-if="store.loadingAll && store.products.length === 0" />

    <div v-else-if="store.error" class="error">
      {{ store.error }}
    </div>

    <div v-else class="main-subsection">
      <Card
        v-for="product in store.filteredProducts"
        :key="product.id"
        :id="product.id"
        :photos="store.photosByProduct(product.id)"
        :text="product.name"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :quantity="product.quantity"
      />
      <CeramicLoader v-if="store.loadingProducts && store.products.length > 0" />
    </div>
  </main>
</template>

<style scoped>
.main-subsection-wrapper {
  width: 100%;
  max-width: 380px;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.main-subsection {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Галерея фотографий */
.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.photo-item {
  width: calc(50% - 5px);
  border-radius: 6px;
  object-fit: cover;
}

/* Сообщения загрузки / ошибки */
.loading,
.error {
  padding: 20px;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #4b5563;
}

.error {
  color: #dc2626;
}
</style>
