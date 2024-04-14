<template>
  <div>
    <UNotifications />
    <UHorizontalNavigation :links="links" />
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();

const links = [
  {
    label: "Submit",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Logs",
    icon: "i-heroicons-home",
    to: "/logs",
  },
];
</script>

<style lang="scss" scoped></style>
