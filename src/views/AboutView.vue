<template>
    <div class="about">
        <div id="presentation">
            <div id="greeting">
                <span>I'm &nbsp;</span>
                <h1>Ever Avendaño</h1>
            </div>
            <div id="profile">
                <p>A Peruvian 🇵🇪 software engineering student with two years of experience working on freelance projects.</p>
                <div id="avatar">
                    <img src="../assets/profile.gif" alt="">
                </div>
            </div>
        </div>
        <hr>
        <div id="more"></div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=M+PLUS+2:wght@100..900&display=swap');
.about {
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
}

#presentation {
    position: relative;
    width: 100%;
    height: 260px;
    box-shadow: inset 0 0 0 1px yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#greeting {
    height: auto;
    width: 55%;
    box-shadow: inset 0 0 0 1px rgb(0, 187, 255);
    display: flex;
    flex-wrap: wrap;
}
#profile {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(0, 255, 119);
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 10px;
}
#profile p {
    height: auto;
    width: 100%;
    min-width: 230px;
    box-shadow: inset 0 0 0 1px rgb(247, 0, 255);
}
#profile #avatar {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
#avatar img {
    position: absolute;
    top: -20px;
    height: 100%;
    scale: 1.5;
}

hr {
    width: 100%;
    border: solid 1px #0C0C11;
}

#more {
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px yellow;
}
</style>