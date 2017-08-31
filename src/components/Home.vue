<template>
  <div class="title-wrapper title-wrapper-img-i">
    <div class="content">
      <h1>Conectando</h1>
      <h2>Pessoas e Soluções</h2>
    </div>
    <div class="know-wrapper">
      <a class="know-button">Saiba Mais</a>
    </div>
  </div>
</template>
<style>
  div.title-wrapper{
    box-shadow: inset 0 0 0 1000px rgba(34,52,88, 0.6);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    width: 100%;
    z-index: -9999;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .title-wrapper-img-i {
    height: 100vh;
    background: url('../assets/img/bg.jpg') no-repeat center center scroll;
  }
  div.content{
    background-color: rgba(255,255,255, 0.3);
    width: 55%;
    border-radius: 5px;
    text-align: center;
    padding:  2rem 1rem 2rem 1rem;
    margin-top: 10rem;
  }

  div.content h1, div.content h2, div.content h2, div.title h1,div.title h2, div.people-wrapper h1, div.people-wrapper h2, div.info-boss h1, div.info-boss h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 5rem;
    color: #fff;
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
    padding: 0;
    margin: 0;
  }
  div.content h2, div.title h2, div.people-wrapper h2, div.skill-box h2,div.team-index h2, div.info-boss h2 {
    font-size: 3.5rem;
    font-weight: lighter;
    text-transform: none;
  }

  div.know-wrapper{
    margin: 4rem;
  }
  .know-button{
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem;
    border-bottom: 1px solid rgba(255,255,255, 0.5);
    color: #fff;
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
    border-radius:
  }
  .know-button:hover{
    background-color: rgba(255,255,255, 0.3);
  }

@media screen and (max-width: 900px) {

  div.content {
    width: 100%;
    border-radius: 0;
    margin-top: 5rem;
  }
  div.content h1 {
    font-size: 4rem;
    color: #fff;
  }
  div.content h2{
    font-size: 3rem;
  }
  .know-button {
    font-size: 1rem;
  }
}

@media screen and (max-width: 425px) {
  div.content h1 {
    font-size: 2rem;
    color: #fff;
  }
  div.content h2{
    font-size: 1rem;
  }
}
</style>
