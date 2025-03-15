<template>
    <div class="resume">
        <div id="content">
            <h3># How its started</h3>
            <p>My first contact with programming was in a computer science class in high school. We were asked to
                transcribe HTML code from a textbook into a notebook (ò_ô). Unfortunately, this method didn't spark my
                interest at all.
                It wasn't until 2020 that I was able to ask a friend about the career she was pursuing. She told me
                about programming, and I couldn't understand anything at that time.
                With the arrival of the pandemic and more free time, I remembered that conversation and decided to
                investigate on my own. That's how I found the ATS programming channel and was able to write my first
                line of code in C++.
                That night, I was sure that the career I would pursue would be related to programming.</p>
            <br><br>
            <h3># Motivation</h3>
            <p>I like to be competitive in every environment I find myself in. This has led me to always compare myself
                with others and try to improve myself.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=M+PLUS+2:wght@100..900&display=swap');

.resume {
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
    color: #8d90a5
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