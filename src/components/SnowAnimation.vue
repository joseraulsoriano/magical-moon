<template>
    <div id="snowfall">
      <div
        v-for="flake in snowflakes"
        :key="flake.id"
        class="snowflake"
        :style="{ left: flake.left, animationDuration: flake.duration }"
      ></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const snowflakes = ref([]);
  
  // Este código solo se ejecutará en el navegador después de que el componente se haya montado.
  onMounted(() => {
    const createSnowflake = () => {
      const id = Date.now();
      snowflakes.value.push({
        id,
        left: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 2}s`,
      });
  
      setTimeout(() => {
        snowflakes.value = snowflakes.value.filter((flake) => flake.id !== id);
      }, 5000);
    };
  
    setInterval(createSnowflake, 200);
  });
  </script>
  
  <style scoped>
  #snowfall {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }
  
  .snowflake {
    position: absolute;
    top: -10px;
    width: 15px;
    height: 15px;
    background: url("/src/assets/2.png") no-repeat center;
    background-size: contain;
    animation: fall linear infinite;
  }
  
  @keyframes fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  </style>