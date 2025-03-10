<template>
    <div class="background">
    </div>
</template>

<style>
.background {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #620743 0%, #000000 8%);
}

/* Media query para tablet (por ejemplo, pantallas de 768px en adelante) */
@media (min-width: 768px) {
  .background {
    background: black;
  }
}


</style>
  