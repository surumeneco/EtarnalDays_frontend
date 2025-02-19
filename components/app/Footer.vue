<template>
  <footer>
    <CommonContentsBlock class="d-flex justify-content-center">
      <CommonContentsContainer class="col-6 p-0 m-0 d-flex justify-content-end">
        <CommonInnerLinks class="ms-auto" />
      </CommonContentsContainer>

      <CommonContentsContainer class="col-6 p-0 m-0 d-flex justify-content-start">
        <CommonOuterLinks />
      </CommonContentsContainer>
    </CommonContentsBlock>

    <CommonContentsBlock class="d-flex justify-content-center">
      <div class="copyright" style="font-size: large">&copy;{{ copyRightYear }} {{ appName }}</div>
    </CommonContentsBlock>
  </footer>
</template>

<script setup lang="ts">
const copyRightYear = ref<number>(0);
const appName = ref<string>("");

onMounted(() => {
  appName.value = "surumeneco";
  const beginningYear = 2025;
  const thisYear = new Date().getFullYear();
  copyRightYear.value = beginningYear < thisYear ? `${beginningYear}-${thisYear}` : beginningYear;
});
</script>

<style scoped></style>
