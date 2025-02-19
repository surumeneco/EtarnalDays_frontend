<template>
  <div class="d-flex flex-column vh-100">
    <AppHeader class="sticky-top" />

    <CommonContentsContainer class="row m-0 p-0">
      <div class="col-auto m-0 p-0">
        <AppSideMenu />
      </div>

      <div class="col m-0 p-0">
        <CommonContentsBox>
          <slot />
        </CommonContentsBox>
      </div>
    </CommonContentsContainer>

    <AppFooter class="mt-auto" />
  </div>
</template>

<script lang="ts"></script>

<style scoped></style>
