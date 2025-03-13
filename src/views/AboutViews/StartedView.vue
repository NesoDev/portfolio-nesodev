<template>
    <div class="started">
        <div id="content">
            <h3># How is started</h3>
            <p>My first contact with programming was in a computer class where they asked us to transcribe the HTML code
                of a textbook. Unfortunately, this method did not arouse my interest in programming. <br>
                It wasn't until 2020 that a friend who was interested in software engineering, told me about the
                subject, although at that time I understood almost nothing xD. <br>
                With the arrival of the pandemic and more free time, I remembered that conversation and decided to
                investigate on my own. That's when I discovered Alejandro Taboada's ATS Programming YouTube channel.
                When I finished one of his videos, I knew that my path must be related to programming.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=M+PLUS+2:wght@100..900&display=swap');

.started {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
}

#content {
    position: absolute;
    height: auto;
    min-height: 100%;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    color: #636380
}

h3 {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
}

p {
    font-size: 11px;
    font-weight: lighter;
    line-height: 1.8
}

</style>