<script>
export default {
  created: function () {
    this.loadData()
  },
  methods: {
    close () {
      this.$emit('members-close', this.Members)
    },
    loadData () {
      console.log(this.message)
    }
  },
  props: ['message']
}
</script>
<template>
  <div class="team-content">
    <div class="close" >
      <h1>Bem Vindo a {{message}}</h1>
      <i @click="close" class="fa fa-times-circle-o fa-4x" aria-hidden="true"></i>
    </div>
    <div class="up-content">
      <img src="../../assets/img/team/vi.jpg">
      <div class="info-boss">
        <h1>Vinicius Romano</h1>
        <h2>O cara que manda</h2>
        <hr >
      </div>
      <div class="info-dir">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      </div>
    </div>

    <div class='team-wrapper'>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="people-wrapper">
        <div class="people-image">
          <img src="../../assets/img/team/1.jpg"></img>
        </div>
        <h1>Wellington</h1>
        <h2>Presidente</h2>
        <div class="in-people">
          <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  div.close {
    display: flex;
    justify-content: space-between;;
    color: #041028;
    text-align: center;
    padding: 2rem;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: 1px solid #041028;
  }

  div.close i {
    margin-top: 2.3rem;
    margin-right: 2rem;
  }

  div.close h1, div.close i {

    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 4rem;
    color: #041028;
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
    padding: 0;

  }
  div.team-content{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: #fff;

  }
  div.up-content {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  div.up-content img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  div.info-boss{
    margin: 3rem;
  }

  div.info-boss h1{
    font-size: 2rem;
    text-transform: uppercase;
  }
  div.info-boss h2{
    font-size: 1.5rem;
  }

  div.info-boss  hr {
    border: 0;
    height: 1px;
    width: 50%;
    background-image: -webkit-linear-gradient(left, #f0f0f0, #041028, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0,#041028, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #041028, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #041028, #f0f0f0);
  }

  div.info-dir {
    width: 100%;
    padding: 3rem 0 3rem 0;
    margin-top: 3rem;
    background: #21355B;
  }

  div.info-dir p {
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
    margin: 3rem;
    font-size: .9rem;
  }

  div.team-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;

  }

  div.people-wrapper {
    width: 300px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in;
    padding: 1rem;
    cursor: pointer;
    border: 2px solid #fff;
  }

  div.people-wrapper:hover {
    border-bottom: 2px solid #010815;
  }


  div.people-wrapper p {
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
    text-align: justify;
    color: #A7B0C2;
  }

  div.people-wrapper h1,div.people-wrapper h2{
    color: #21355B;
    text-shadow: 1px 1px 8px rgba(85,85,85, .2);

  }

  div.people-wrapper h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 1rem;
  }

  div.people-wrapper h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  div.people-image {
    width: 150px;
    height: 150px;
  }

  div.people-image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  div.in-people {
    margin: 2rem 0 0 0;
    text-align: center;
    width: 100%;
    padding-top: 2rem;
  }

  div.in-people hr {
    margin-bottom: 1rem;
  }

  div.in-people a {
    color: #21355B;
    transition: all .1s ease-in;
    margin: .6rem;
  }
  div.in-people a:hover {
    color: #A7B0C2;
  }

  @media screen and (max-width: 1100px) {

    div.info-boss {
      margin-bottom: 0rem;
    }
  }

</style>
