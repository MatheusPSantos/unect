<template>
  <div>
    <div class="title-wrapper title-wrapper-img-ii z-depth-1">

      <div class="content">
        <h1>Unect Jr, Prazer!</h1>
        <h2>Conheça um pouco +</h2>
        <h2>Sobre nós</h2>
      </div>

      <hr>

      <div class="us-wrapper container">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>

      <div class="know-wrapper">
        <a class="know-button">Conheça o nosso Time</a>
      </div>

    </div>
    <div class="title container">
      <div class="title-inside">
        <h1>O QUÊ FAZEMOS?</h1>
        <h2>Nossas soluções em </h2>
        <hr>
      </div>
    </div>

    <div class="what-wrapper z-depth-1">
      <div class="what-content">
        <div class="img img-i">
          <i class="fa fa-database fa-4x" aria-hidden="true"></i>
        </div>
        <div class="what">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>

      <div class="what-content">
        <div class="what">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div class="img img-ii">
          <i class="fa fa-hdd-o fa-4x" aria-hidden="true"></i>
        </div>
      </div>

      <div class="what-content">
        <div class="img img-iii">
          <i class="fa fa-coffee fa-4x" aria-hidden="true"></i>
        </div>
        <div class="what">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
    </div>

    <div class="title container">
      <div class="title-inside">
        <h1>Empresa Junior?</h1>
        <h2>Você já ouviu falar?</h2>
        <hr>
      </div>
    </div>

    <div class="title-wrapper title-wrapper-img-iii">
      <div class="us-wrapper">

        <div class="container">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
      </div>
      <div class="know-wrapper">
        <a class="know-button">Conheça o MEJ</a>
      </div>
    </div>
  </div>
</template>
<style>

  div.what-wrapper,div.what-content {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
  }

  div.what-content {
    flex-flow: row wrap;
    cursor: pointer;
    transition: all .3s ease-in;
    background: #21355B;
  }


  div.what, div.img  {
    width: 50%;
    display: flex;
    height: 300px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  div.img i {
    font-size: 5rem;
    color: #010815;
    text-shadow: 2px 2px 8px rgba(85,85,85, 1);
    padding: 0;
    margin: 0;
  }

  div.what p {
    font-family: 'Raleway', sans-serif;
    font-weight: lighter;
    text-transform: none;
    font-size: 1rem;
    color: #fff;
    padding: 2.5rem;
    margin: 2.5rem;
  }

  .img-i {
    background: url('../assets/img/soft.jpg') no-repeat top left scroll;
  }
  .img-ii {
    background: url('../assets/img/circuits.jpg') no-repeat center center scroll;
  }
  .img-iii {
    background: url('../assets/img/business.jpg') no-repeat top left scroll;
  }
  div.img {
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(34,52,88, 0.6);
  }


  .title-wrapper-img-ii {
    background: url('../assets/img/w1.jpg') no-repeat center center scroll;
  }
  .title-wrapper-img-iii {
    background: url('../assets/img/services.jpg') no-repeat center center scroll;
  }

  div.title-wrapper hr, div.people-wrapper hr {
    border: 0;
    height: 1px;
    width: 50%;
    background-color: #fff;
  }

  div.us-wrapper p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    font-weight: lighter;
    text-align: justify;
    color: #fff;
    text-shadow: 1px 1px 8px rgba(85,85,85, .4);
  }


  div.title-wrapper hr {
    margin: 5rem;
  }
  div.title-inside {
    margin: 3rem 0 3rem 0;
  }

  div.title h1, div.title h2, div.up-content h1,div.up-content h2 {
    text-align: center;
    color: #041028;
  }

  div.title h2,div.up-content h2 {
    font-size: 2rem;
  }

  div.title  hr {
    border: 0;
    height: 1px;
    width: 25%;
    background-image: -webkit-linear-gradient(left, #f0f0f0, #041028, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0,#041028, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #041028, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #041028, #f0f0f0);
  }

  @media screen and (max-width: 768px) {
    div.title h1 {
      font-size: 3rem;
    }
    div.title h2 {
      font-size: 1.5rem;
    }
    div.title-wrapper hr {
      margin: 3rem;
    }
  }

  @media screen and (max-width: 425px) {
    div.title h1, div.up-content h1 {
      font-size: 2.8rem;
    }
    div.title h2, div.up-content h2 {
      font-size: 1.3rem;
    }
    div.title-wrapper hr {
      margin: 1rem;
    }

    div.img, div.what-content {
      width: 100%;
    }
    div.what {
      display: none;
    }

  }

</style>
