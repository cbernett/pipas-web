<template>
  <div class="pipaslabscasavoz">
    <div class="plcv_hero"></div>
    <div class="content">
      <h3 class="text_lg">Pipas Labs Casa Voz</h3>
      <div
        class="mission"
      >Pipas Labs Casa Voz é um laboratório de pesquisa e desenvolvimento de inovação tecnológica com e para as comunidades do Complexo do Alemão no Rio de Janeiro.</div>
      <div class="img_bar">
        <div class="img_col">
          <img src="../assets/plcv_01.jpg" width="250px" alt="Pipas Labs Casa Voz">
        </div>
        <div class="img_col">
          <img src="../assets/plcv_02.jpg" width="250px" alt="Pipas Labs Casa Voz">
        </div>
        <div class="img_col">
          <img src="../assets/plcv_03.jpg" width="250px" alt="Pipas Labs Casa Voz">
        </div>
      </div>
      <div
        class="text_sm"
      >O laboratório fornece as ferramentas e o espaço para cursos, colaborações e intervenções com base na comunidade para o desenvolvimento de produtos, serviços e experiências transformativos tecnológicos. Combina programação educacional e orientação com recursos chaves em uma missão para cultivar o pensamento crítico, a criatividade e a colaboração intercultural enquanto desenvolve capacidades e habilidades tecnológicas. Procura aumentar as vozes periféricas e capacitar as comunidades locais a participarem ativamente na nova economia com um foco específico no envolvimento cívico, jornalismo e artes e cultural.</div>
      <div class="title">Recursos</div>
      <div
        class="text_sm"
      >Equipado com uma ampla gama de ferramentas, componentes e materiais de tecnologia open-source, o Pipas Labs Casa Voz tem horários abertos para uso comunitário enquanto oferece cursos, oficinas, colaborações, ações sociais e eventos especiais. Os materiais disponíveis para uso no laboratório e para pedir emprestadas incluem ferramentas, plataformas de tecnologia e materiais de arte.</div>
      <div class="mission block">
        <hr class="pagebreak">Pipas Labs Casa Voz busca desenvolver capacidades e habilidades tecnológicas para ampliar a participação de vozes periféricas no envolvimento cidadão e na nova economia.
        <hr class="pagebreak">
        <div class="title">Educação &amp; Intervenção</div>
        <div class="textblock">
          <div class="text_sm one-third">
            <h4 class="secondary">Cursos</h4>Os cursos variam desde o estilo de visão global até o de tópico específico e variam em duração (de semestre a ano e em andamento). O currículo de visão geral é projetado para desenvolver uma fundação sólida em pensamento criativo e habilidades técnicas como base para estudos continuados. Os cursos de tópicos específicos aprofundam em temas como design e desenvolvimento de jogos, soluções de tecnologia para impacto local ou codificação visualizações de dados.</p>
          </div>
          <div class="text_sm one-third">
            <h4 class="secondary">Oficinas</h4>As oficinas variam de 1 a 4 dias de duração e estão focadas na experimentação colaborativa que combina cultura, pensamento criativo e tecnologia para gerar interesse no estudo contínuo, bem como novas idéias para inovação tecnológica relacionada à comunidade. As atividades incluem desenho condutivo, criação com LEDs, robôs que desenham e personalização e empinam pipas com o dispositivo do Pipas.
          </div>
          <div
            class="text_sm one-third"
          ><h4 class="secondary">Ações &amp; Eventos</h4>Os cursos variam desde o estilo de visão global até o de tópico específico e variam em duração (de semestre a ano e em andamento). O currículo de visão geral é projetado para desenvolver uma fundação sólida em pensamento criativo e habilidades técnicas como base para estudos continuados. Os cursos de tópicos específicos aprofundam em temas como design e desenvolvimento de jogos, soluções de tecnologia para impacto local ou codificação visualizações de dados.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h4.secondary {
  padding: 0px;
  font-weight: 400;
  margin-bottom: 5px;
}

hr.pagebreak {
  text-align: center;
  border-top: 0.5px solid #56c2e8;
}

.plcv_hero {
  background-image: url("../assets/plcv_hero.jpg");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.mission {
  font-size: 24px;
  text-align: left;
  font-weight: 200;
  padding-top: 20px;
  padding-bottom: 0px;
}

.content {
  padding: 10px;
  max-width: 800px;
  text-align: center;
  margin: auto;
}

.block {
  padding: 40px 0px 40px 0px;
}

.img_bar {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 250px;
  align-content: center;
  position: relative;
}

.textblock {
  display: table;
  position: relative;
  //   /padding-top: 20px;
}

.one-third {
  float: left;
  width: 30%;
  padding-right: 20px;
  font-size: 14px;
  line-height: 20px;
}

.title {
  font-size: 24px;
  font-weight: normal;
  padding: 30px 0px 10px 0;
  text-align: left;
}

.img_col {
  flex: 0 1;
  justify-content: flex-end;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin: 2px;
  display: flex;
}

@media only screen and (max-width: 600px) {
  .plcv_hero {
    height: 200px;
  }

  .content {
    padding: 10px;
    max-width: 85%;
    text-align: center;
    margin: auto;
  }
}
</style>