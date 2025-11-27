<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="dropdown"
      ref="dropdownRef"
      @click.stop
    >
      <ul class="dropdown-list">
        <li
          v-for="item in items"
          :key="item"
          class="dropdown-item"
          @click="select(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";


const props = defineProps({
  items: Array,
  modelValue: Boolean
});

const emit = defineEmits(["update:modelValue", "select"]);

const dropdownRef = ref(null);

function select(item) {
  emit("select", item);
  emit("update:modelValue", false);
}

/* --- КЛИК ВНЕ ДРОПДАУНА --- */
function onClickOutside(event) {
  if (!dropdownRef.value) return;
  if (!dropdownRef.value.contains(event.target)) {
    emit("update:modelValue", false);
  }
}

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<style scoped>


.dropdown {
  margin-top: 10px;
  position: fixed;
  top: 20px;
  right: 0;
  z-index: 2;
}

.dropdown-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #fff;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  list-style-type: none;
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: 0.2s;
}

.dropdown-item:hover {
  background: #f3e6db;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
