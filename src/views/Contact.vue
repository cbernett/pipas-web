<template>
  <div class="contact">
    <div class="fale_hero"></div>
    <div class="content">
      <div class="text_lg">Fale com a gente.</div>
      <div class="text_sm_contact">
        Fica a vontade entrar em contato conosco no seu jeit preferido:
        <p>
          Email:
          <a href="mailto: info@pipaslabs.com" target="_blank">info@pipaslabs.com</a>
        </p>Facebook:
        <a href="http://www.facebook.com/pipaslabs" target="_blank">@pipaslabs</a>
        <p>
          Instagram:
          <a href="http://instagram.com/playpipaslabs" target="_blank">@pipaslabs</a>
        </p>
        <p>
          Twitter:
          <a href="http://twitter.com/playpipaslabs" target="_blank">@playipaslabs</a>
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fale_hero {
  background-image: url("../assets/pipas_fale.jpg");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  //position: relative;
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   width: 100%;
  //   height: 100%;
  //   overflow: hidden;
}

.content {
  padding: 10px;
  max-width: 600px;
  text-align: center;
  margin: auto;
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