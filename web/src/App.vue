<template>
  <div id="app">
    <h1>人生亦如修行，如履破冰。</h1>
    <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item1 {
    position: absolute;
    width: 200px;
    height: 180px;
    left: 50%;
    margin-left: -398px;
    top: 352px;
    background-image: url(assets/sunwukong.png);
    background-repeat: no-repeat;
    /* -webkit-animation: move 1.4s steps(8) infinite;
    -moz-animation: move 1.4s steps(8) infinite;
    -ms-animation: move 1.4s steps(8) infinite; */
    animation: move1 1.4s steps(8) infinite;
}
.item2 {
    position: absolute;
    width: 200px;
    height: 180px;
    left: 50%;
    margin-left: -198px;
    top: 356px;
    background-image: url(assets/zhubajie.png);
    background-repeat: no-repeat;
    animation: move2 1.4s steps(8) infinite;
}
.item3 {
    position: absolute;
    width: 170px;
    height: 240px;
    left: 50%;
    margin-left: -11px;
    top: 326px;
    background-image: url(assets/tangsheng.png);
    background-repeat: no-repeat;
    animation: move3 1.4s steps(8) infinite;
}
.item4 {
    position: absolute;
    width: 210px;
    height: 200px;
    left: 50%;
    margin-left: 198px;
    top: 372px;
    background-image: url(assets/shawujing.png);
    background-repeat: no-repeat;
    animation: move4 1.4s steps(8) infinite;
}

@keyframes  move1{
  0%{
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1600px;
  }
}
@keyframes  move2{
  0%{
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1600px;
  }
}
@keyframes  move3{
  0%{
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1360px;
  }
}
@keyframes  move4{
  0%{
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1680px;
  }
}
body{
  background-image: url(assets/background.webp)
}
</style>
