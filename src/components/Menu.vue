<template>
  <div>
    <div class="nav-wrapper">
      <div class='nav-logo'>
        <img  src="../../static/img/home/logo-s.png">
      </div>
      <div class="nav-links">
        <a class='link' href="#/">Home</a>
        <a class='link' href="#/about">Sobre Nós</a>
        <a class='link' href="#/team">Nosso Time</a>
        <a class='link talk' href="#/contact">Fale Conosco</a>
      </div>
    </div>
    <div class="hamburguer" >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<style scoped>

  div.nav-wrapper {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 100%;
    transition: all .3s linear;
    background-color: rgba(34,52,88, .5);
  }
  div.nav-wrapper:hover{
    background-color: rgba(34,52,88, .9);
  }

  .link, .talk {
    font-family: 'Raleway', sans-serif;
    color: #fff;
    font-size: 1rem;
    transition: all .1s ease-in;
    padding: 1.2rem;
  }

  .talk {
    font-size: 1.1rem;
    border: 2px solid #fff;
    margin-left: 1rem;
  }

  .link:hover{
    color: #041028;
  }

  .talk:hover {
    color: #041028;
    border: 2px solid  #041028;
  }
  .dot {
    font-size: 3rem;
  }

  div.nav-logo {
    margin:0.5rem 2rem 0 2rem;
    padding:1rem;
    text-align: center;
  }

  div.hamburguer {
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px;
    width: 20px;
    height: 15px;
    z-index: 9999;
    display: none;
    cursor: pointer;
  }

  div.hamburguer span{
    height: 2px;
    background-color: #fff;
    margin-bottom: 5px;
    display: block;
  }

  div.hamburguer span:nth-child(2){
    width: 75%;
  }

  div.hamburguer span:nth-child(3){
    width: 50%;
  }


@media screen and (max-width: 800px) {

    div.hamburguer{
      display: block;
    }

    div.nav-wrapper{
      height: 100vh;
      background-color: #223458;
      margin: 0;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0%;
      transition: all .3s linear;
    }

    div.nav-wrapper.open{
        left: 0;
    }

    div.nav-links{
      display: flex;
      flex-direction: column;
      width: 70%;
      text-align: center;
      margin-bottom: 20%;
    }

    div.nav-logo {
        margin-top: 20%;
    }
}
</style>
