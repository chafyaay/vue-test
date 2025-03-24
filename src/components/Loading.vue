
<template>
    <div class="loading">
      <img class="img" :src="loadingImg" alt="Loading..." />
    </div>
  </template>
  
  <script setup>
  import loadingImg from "../assets/loading.svg";
  </script>
  
  <style scoped>
  .loading {
    display: flex;
    justify-content: center; /* Centers the image horizontally */
    align-items: center;    /* Centers the image vertically */
    width: 100%;
    height: 3.5rem;
  }
  
  .img {
    height: 100%;
    animation: rotate 500ms linear infinite;
    opacity: 0.3;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
