<script setup>
import { ref } from 'vue';

const snowflakes = ref([]);

const createSnowflake = () => {
  const id = Date.now();
  snowflakes.value.push({
    id,
    left: `${Math.random() * 100}%`,
    duration: `${3 + Math.random() * 2}s`,
  });

  // Eliminar el copo después de la animación
  setTimeout(() => {
    snowflakes.value = snowflakes.value.filter((flake) => flake.id !== id);
  }, 5000);
};

// Generar copos de nieve de forma continua
setInterval(createSnowflake, 200);
</script>

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

<style scoped>
/* Posición básica del contenedor */
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
  background: url("../assets/2.png") no-repeat center;
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