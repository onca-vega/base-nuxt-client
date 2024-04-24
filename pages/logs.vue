<template>
  <div>
    <h2 v-if="!state.logs.length" class="text-center my-20">
      {{ state.loading ? "Loading logs..." : "Logs are unexistent..." }}
    </h2>
    <UTable v-else :rows="state.logs" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const { $neysla } = useNuxtApp();

const state = reactive({
  loading: true,
  logs: [],
});
async function loadLogs() {
  try {
    const { data } = await $neysla.notification.get();

    state.logs = [];
    state.logs.push(...data);
  } catch (error) {
    console.error("Error submitting! ", error);
  } finally {
    state.loading = false;
  }
}

onMounted(loadLogs);
</script>

<style lang="scss" scoped></style>
