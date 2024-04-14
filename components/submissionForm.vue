<template>
  <div class="m-20">
    <h2 class="text-center mb-10">Submission Form</h2>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Category" name="category">
        <USelectMenu v-model="state.category" :options="categories" size="xl" />
      </UFormGroup>

      <UFormGroup label="Message" name="message">
        <UInput v-model="state.message" size="xl" />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>

<script setup>
import { z } from "zod";
import { categories } from "@/utils/constants";

const { $neysla } = useNuxtApp();
const toast = useToast();
const schema = z
  .object({
    category: z.string({ required_error: "Category is required" }),
    message: z
      .string({ required_error: "Category is required" })
      .min(2, "Must be at least 2 characters")
      .max(200, "Must be at most 200 characters"),
  })
  .required();
const state = reactive({
  category: undefined,
  message: undefined,
});

async function onSubmit(event) {
  try {
    await $neysla.submission.post({
      body: {
        message: event.data.message,
        category: event.data.category,
      },
    });
    state.category = undefined;
    state.message = undefined;
    toast.add({ title: "Form submitted successfully", color: "green" });
  } catch (error) {
    console.error("Error submitting! ", error);
    toast.add({
      title: "Unkown error during submission, please try again later!",
      color: "red",
    });
  }
}
</script>

<style lang="scss" scoped></style>
