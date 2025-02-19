<template>
  <div>
    <h3>HELLO WORLD!</h3>
    <p v-for="i in 10" :key="i">
      and this is the main contents {{ i }}.
      <span v-for="j in 5" :key="j">
        <br />
        this is the test line {{ i }}-{{ j }}.
      </span>
    </p>
  </div>
</template>

<script lang="ts"></script>

<style scoped></style>
