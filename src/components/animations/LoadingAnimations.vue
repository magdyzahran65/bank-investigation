<template>
  <div class="loading-animation-container">
    <h1 class="loading-header-text">loading...</h1>

    <div class="loading-icon-container">
      <i class="fa-solid fa-spinner fa-spin-pulse animation-icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingAnimation",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.loading-animation-container {
  background-color: rgba(255, 255, 255, 0.402);
  cursor: not-allowed;

  width: 100%;
  // min-height: var(--min-pages-height);
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
}
.loading-header-text {
  color: brown;
  letter-spacing: 5px;
  font-weight: 300;
  animation: loading-width 2s ease-in-out infinite;
}
.loading-icon-container {
  margin: 20px;
  animation: loading-icon 2s ease-in-out infinite;
}
.animation-icon {
  display: block;
  font-size: 70px;
  color: brown;
}
@keyframes loading-width {
  0% {
    max-width: 0%;
    overflow: hidden;
    opacity: 0.3;
  }
  25% {
    max-width: 25%;
    overflow: hidden;
  }
  50% {
    max-width: 100%;
    overflow: hidden;
  }
  100% {
    max-width: 0%;
    overflow: hidden;
  }
}
@keyframes loading-icon {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 0;
  }
}
</style>
