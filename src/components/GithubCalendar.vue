<template>
    <div ref="calendarEl" class="calendar">
        
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

const calendarEl = ref(null);

onMounted(() => {
    if (calendarEl.value) {
        GitHubCalendar(calendarEl.value, "NesoDev");
    }
});
</script>

<style scoped>
.calendar {
    width: 100%;
}
/* Ocultar etiquetas de los meses */
.calendar .ContributionCalendar-label {
  display: none;
}

/* Ocultar la leyenda de colores */
.calendar .float-left.text-gray {
  display: none;
}

/* Ocultar el resumen de contribuciones debajo del gráfico */
.calendar .contrib-footer {
  display: none;
}

/* Ajustar márgenes para centrar mejor el gráfico */
.calendar .width-full {
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>