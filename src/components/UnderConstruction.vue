<template>
    <div class="under-construction">
        <div class="text">
            <h3>⚠️ Section is under<br>construction.</h3>
            <p>Available, coming soon.</p>
        </div>
        <img src="../assets/page-under-construction.png" alt="">
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

.under-construction {
    width: auto;
    height: 120px;
    background: #0C0C11;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px;
    box-sizing: border-box;
}

.text {
    height: 100%;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

h3 {
    color: #f5f5f5;
    font-size: 14px;
    text-align: start;
}

p {
    color: #959595;
    font-size: 10px;
}

img {
    height: 100%;
}
</style>