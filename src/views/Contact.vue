<template>
  <div class="contact">
    <div class="fale_hero"></div>
    <div class="content">
      <h3 class="text_lg">Fale com a gente.</h3>
      <div
        class="text_sm left"
      >Fica a vontade entrar em contato conosco no seu jeito preferido. Estamos abertos para novos colaborações, pareceirias e oportunidades e qualquer forma de apoio.</div>
      <div class="social">
        <div class="socialcol">
          <div class="socialcol__icon">
            <img src="../assets/email_icon.svg" width="28px" alt="Email">
          </div>
          <div class="socialcol__link">
            <a href="mailto: info@pipaslabs.com" target="_blank">info@pipaslabs.com</a>
          </div>
        </div>
        <div class="socialcol">
          <div class="socialcol__icon">
            <img src="../assets/fb_icon.svg" width="18px" alt="Email">
          </div>
          <div class="socialcol__link">
            <a href="http://www.facebook.com/pipaslabs" target="_blank">@pipaslabs</a>
          </div>
        </div>
        <div class="socialcol">
          <div class="socialcol__icon">
            <img src="../assets/insta_icon.svg" width="20px" alt="Email">
          </div>
          <div class="socialcol__link">
            <a href="http://instagram.com/playpipaslabs" target="_blank">@playpipaslabs</a>
          </div>
        </div>
        <div class="socialcol">
          <div class="socialcol__icon">
            <img src="../assets/twitter_icon.svg" width="20px" alt="Email">
          </div>
          <div class="socialcol__link">
            <a href="http://twitter.com/playpipaslabs" target="_blank">@playipaslabs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fale_hero {
  background-image: url("../assets/hero_pipas_fale_02.jpg");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.center {
  text-align: center;
}

.content {
  padding: 10px;
  max-width: 800px;
  text-align: center;
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .fale_hero {
    height: 200px;
  }

  .content {
    padding: 10px;
    max-width: 85%;
    text-align: center;
    margin: auto;
  }
}

.social {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 120px;
  align-content: center;
  position: relative;
}
.socialcol {
  flex: 0 1;
  justify-content: flex-end;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin: 5px;
  display: flex;

  &__icon {
    //flex: 0;
    text-align: right;
    padding-right: 10px;
  }
  &__link {
    text-align: left;
    //flex: 1;
  }
}

.text_sm_contact {
  padding: 10px;
  text-align: left;
}
a {
  font-weight: 900;
  color: #000000;
  //font-size: 12px;
  //text-transform: uppercase;
  text-decoration: none;
  color: #02eee7;
}
</style>