<template>
  <div>
    <div class="title-wrapper title-wrapper-img-iv">
      <div class="content">
        <h1>Nosso Time</h1>
        <h2>Navegue pelas diretorias</h2>
        <h2>e conheça os membros</h2>
      </div>

      <div class="skill-wrapper">
        <a class="skill-box" v-on:click="members('p')" >
          <h1 >Presidência</h1>
          <i class="fa fa-asterisk fa-2x" aria-hidden="true"></i>
        </a>

        <a class="skill-box" v-on:click="members('m')" >
          <h1 >Marketing</h1>
          <i class="fa fa-anchor fa-2x" aria-hidden="true"></i>
        </a>

        <a class="skill-box" v-on:click="members('pr')" >
          <h1 >Projetos</h1>
          <i class="fa fa-code fa-2x" aria-hidden="true"></i>
        </a>

        <a class="skill-box" v-on:click="members('r')" >
          <h1 >RH</h1>
          <i class="fa fa-users fa-2x" aria-hidden="true"></i>
        </a>

        <a class="skill-box" v-on:click="members('a')" >
          <h1 >Admistrativo</h1>
          <i class="fa fa-sitemap fa-2x" aria-hidden="true"></i>
        </a>
        <a class="skill-box" v-on:click="members('f')" >
          <h1 >Financeiro</h1>
          <i class="fa fa-money fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
    <Members v-on:members-close='members' v-if='show' :message="directory" ></Members>
  </transition>
  </div>
</template>
<script>
import Members from './team/Members.vue'
export default {
  data () {
    return {
      directory: '',
      show: false
    }
  },
  methods: {
    members: function (arg) {
      this.directory = arg
      this.show = !this.show
    }
  },
  components: {
    Members
  }
}
</script>
<style >

  .title-wrapper-img-iv {
    background: url('../assets/img/team-b.jpg') no-repeat center center scroll;
  }

  div.skill-wrapper{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 3rem;
  }

  .skill-box {
    width: 175px;
    height: 120px;
    cursor: pointer;
    transition: all .3s ease-in;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    background-color: rgba(34,52,88, .8);
    border-right: 1px solid #041028;
    border-bottom: 3px solid #041028;

  }
  .skill-box:hover{
    background-color: #041028;
  }
  .skill-box:last-child{
    border-right: none;
  }
  .skill-box h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
    margin: 1rem;
  }
  .skill-box i {
    cursor: pointer;
    color: #fff;
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
  }

  @media screen and (max-width: 425px) {
    div.skill-wrapper {
      margin: 1rem;
    }
    .skill-box {
      width: 100%;
      height: 120px;
    }
  }
</style>
