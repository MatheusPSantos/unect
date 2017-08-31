<template>
  <div class="title-wrapper title-wrapper-img-v">
    <div class="contact-t">
      <h1>Contato</h1>
      <h2>mande um email ou venha tomar um café</h2>
    </div>
    <div class="contact-wrapper">
      <div class="contact-box">
        <div class="icon-r">
          <i class="fa fa-map-marker fa-4x" aria-hidden="true"></i>
        </div>
        <div>
          <h3>UTFPR Campus Cornélio Procópio</h3>
          <h3>AV: Alberto Carazzai, 1640 - Centro. Cornélio Procópio</h3>
          <h3>Sala Q107 - Incubadora Tecnológica </h3>
        </div>
      </div>
      <div class="contact-box">
        <div>
          <div class="input-field ">
            <input v-model="name" id="name" type="text" class="validate">
            <label for="name">Nome</label>
          </div>
          <div class="input-field">
            <input v-model="email" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
          <div class="input-field ">
            <textarea v-model="msg" id="msg" class="materialize-textarea"></textarea>
            <label for="msg">Mensagem</label>
            <a class="waves-effect waves-light btn"  @click.prevent="send_mail" >Enviar <i class="fa fa-paper-plane-o" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="icon-l">
          <i class="fa fa-envelope-o fa-4x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      provider: 'http://localhost:5000',
      error: false,
      sent: false
    }
  },
  methods: {
    send_mail: function () {
      var request = {
        name: this.name,
        from: this.email,
        msg: this.msg
      }
      this.$http.post(this.provider + '/mail/', request).then((response) => {
        this.sent = !this.sent

        if (response.status === 201) {
          this.sent = !this.sent
        } else {
          this.error = !this.error
        }
      }, (response) => {
        this.error = !this.error
      })
    }
  }
}
</script>

<style>
.title-wrapper-img-v {
  height: 100vh;
  background: url('../assets/img/contact.jpg') no-repeat center center scroll;
}

div.contact-wrapper, div.contact-wrapper, div.contact-box {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

div.contact-t {
  margin-top: 8rem;
  text-align: center;
}

div.contact-t h1, div.contact-t h2, div.contact-wrapper h3  {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 5rem;
  color: #fff;
  text-shadow: 1px 1px 8px rgba(85,85,85, .4);
  padding: 0;
  margin: 0;
}
div.contact-t h2 {
  font-size: 2rem;
  font-weight: lighter;
}
div.contact-wrapper {
  width: 100%;
  margin-top: 5rem;
}
div.contact-box {
  width: 50%;
}
div.contact-wrapper h3 {
  font-size: 1rem;
  font-weight: lighter;
}

div.contact-box {
  justify-content: space-around;
}

div.contact-box i {
  color: #fff;
}
div.icon-r {
  padding: 2rem;
  margin-right: 2rem;
  border-right: 5px solid #010815;
}
div.icon-l {
  padding: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-left: 5px solid #010815;
}
/* label color */
   .input-field label {
     color: #fff;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #fff;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   .input-field input[type=email]:focus + label {
     color: #fff;
   }
   .input-field input[type=email]:focus {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #fff;
     box-shadow: 0 1px 0 0 #fff;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #fff;
   }

   .btn {
     background-color: #041028;
   }
   .btn:hover {
     background-color: #21355B;

   }

</style>
