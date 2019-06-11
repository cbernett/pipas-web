<template>
  <div class="mission">
    <div class="hero">
      <!-- <video
        playsinline
        autoplay
        muted
        loop
        poster="pipas_site_vid_photo.jpg"
        id="bgvideo"
        width="x"
        height="y"
      >
        <source src="@/assets/kites_montage_02_seja_bem_vindo_gaiola_sm.mp4" type="video/mp4">
      </video>-->
    </div>
    <div class="content">
      <h3 class="text_lg">O Que é Pipas Labs</h3>
      <h4
        class="text_sm"
      >Pipas Labs é uma plataforma de tecnologia e um programa educacional que combina pipas, eletrônica e celulares para estimular a expressão criativa e construir capacidades em comunidades marginalizadas. A plataforma captura os movimentos de pipas com um dispositivo bluetooth e visualiza esses movimentos em um aplicativo jogável. As oficinas usam a plataforma como base para aumentar habilidades e conhecimentos de arte, design e tecnologia. O projeto procura ampliar a inovação local, participação na economia e diversidade na expressão pessoal dos jovens no Brasil.</h4>
      <p></p>
      <iframe
        src="https://player.vimeo.com/video/190585860"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <p>
        <a href="https://vimeo.com/190585860">Pipas (Portugu&ecirc;s)</a> from
        <a href="https://vimeo.com/user6100206">Claudia Bernett</a> on
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
video#bgvideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  //background: url(../assets/pipas_site_vid_photo.jpg) no-repeat;
  //background-size: cover;
  z-index: -1000;
}

.hero {
  background-image: url("../assets/doisirmaos_32.jpg");
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
  max-width: 800px;
  text-align: center;
  margin: auto;
}
</style>