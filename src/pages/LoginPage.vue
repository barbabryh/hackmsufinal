<template>
    <div id="profile1"></div>
    <p class="sign_in_text">Вход</p>
    <button class="sign_in_button">Войти</button>
    <input type="email" class="login" placeholder="Логин">
    <input type="password" class="code" placeholder="Пароль">

    <div class="back">
        <img class="back0" src="../iconsMain/gradient.svg"> 
    </div>
</template>
<script>

</script>
<style scoped>
*{
    overflow: hidden;
}

.h1{
    font-family: Helvetica;
}

.a{
    color: black;
    text-decoration: none;;
}


.back {
    width: 100%;
    position: absolute;
}

.back0{
    position: absolute;
    margin-top: -13%;
    width: 100%;
    z-index: 0;
    animation: gradient_anim 10s ease-in-out infinite;
}

.navbar {
    position: absolute;
    overflow: hidden;
    background-color: white;
    opacity: 0.5;
    width: 40%;
    height: 7%;
    z-index: 1;
    right: 0;
    margin-top: 0.6%;
    box-shadow: 1px 1px 8px 0.5px rgba(0, 0, 0, 0.09);
    margin-right: 3%;
}

.menu {
    position: absolute;
    z-index: 2;
    word-spacing:2vw;
    display: inline-block;
    font-style: color black;
    text-align: center;
    width: 40%;
    height: 7%;
    font-size: 1.1vw;
    font-family: "Helvetica";
    margin-top: 1.6%;
    margin-left: 56%;
}

.profile{
    margin-left: 25%;
}

.sectionnone{
    display: none;
}

.sectionblock{
    display: block;
}


.blur{
    position: absolute;
    overflow: hidden;
    background-color: white;
    opacity: 0.8;
    backdrop-filter: blur(700px);
    width: 100%;
    height: 100%;
    z-index: 3;
}

.login{
    position: absolute;
    text-align: center;
    border: none;
    position: absolute;
    overflow: hidden;
    background-color: white;
    opacity: 0.5;
    width: 20%;
    height: 7%;
    z-index: 4;
    right: 0;
    margin-top: 21%;
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.09);
    left: 39%;
}

.code{position: absolute;
    text-align: center;
    border: none;
    position: absolute;
    overflow: hidden;
    background-color: white;
    opacity: 0.5;
    width: 20%;
    height: 7%;
    z-index: 4;
    right: 0;
    margin-top: 25%;
    box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.09);
    left: 39%;
}

.sign_in_text{
    position: absolute;
    z-index: 4;
    font-size: 2vw;
    font-family: Helvetica;
    font-weight: bold;
margin-left: 46%;
margin-top: 18%;
}

.sign_in_button{
    position: absolute;
    z-index: 4;
    text-decoration: black;
    font-family:  Helvetica;
    font-weight: bold;
    border-radius: 0%;
    border: none;
    width: 10%;
    height: 3vw;
    margin-top: 30%;
    margin-left: 43%;
    background-color: #D5DF7C;
}
</style>