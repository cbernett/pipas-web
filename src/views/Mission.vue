<template>
  <div class="mission">
    <div class="mission_hero">&nbsp;</div>
    <div class="content">
      <h3 class="text_lg">O Que é Pipas Labs</h3>
      <h4
        class="text_sm"
      >Pipas Labs é uma plataforma de tecnologia e um programa educacional que combina pipas, eletrônica e celulares para estimular a expressão criativa e construir capacidades em comunidades marginalizadas. A plataforma captura os movimentos de pipas com um dispositivo bluetooth e visualiza esses movimentos em um aplicativo jogável. As oficinas usam a plataforma como base para aumentar habilidades e conhecimentos de arte, design e tecnologia. O projeto procura ampliar a inovação local, participação na economia e diversidade na expressão pessoal dos jovens no Brasil.</h4>
      <p></p>
      <div class="embed-container">
        <iframe
          src="https://player.vimeo.com/video/190585860"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mission_hero {
  background-image: url("../assets/hero_mission.jpg");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.content {
  padding: 10px;
  max-width: 800px;
  text-align: center;
  margin: auto;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 600px) {
  .mission_hero {
    background-image: url("../assets/hero_mission.jpg");
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .content {
    padding: 10px;
    max-width: 85%;
    text-align: center;
    margin: auto;
  }
}
</style>