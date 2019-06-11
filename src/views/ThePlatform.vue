<template>
  <div class="plataforma">
    <div class="platform_hero"></div>
    <div class="content">
      <h3 class="text_lg">A Plataforma</h3>
      <h4
        class="text_sm"
      >A plataforma Pipas Labs é uma plataforma de software de hardware open-source que busca tornar a educação sobre tecnologia criativa mais acessível e envolvida em comunidades marginalizadas. Ele convida a expressão criativa através da tecnologia, capturando o movimento do jogo físico - especificamente a luta de pipas no Brasil - e traduzindo-o em um meio digital personalizável. O dispositivo Pipas utiliza um acelerômetro-giroscópio para registrar dados de movimento que são então transferidos sem fio para um aplicativo móvel, onde os dados são visualizados como um gráfico de movimento 3D personalizável. Desta forma, o kite lutador hipermóvel (ou skate, bola de futebol ou mesmo bailarino) torna-se um pincel virtual e o insecto de pipa um bom artista, criando obras de arte virtuais e convidando os jogadores a ver novas possibilidades nas formas antigas de jogo.</h4>
    </div>
  </div>
</template>

<style lang="scss">
.platform_hero {
  background-image: url("../assets/pipas_platform.jpg");
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