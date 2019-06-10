<template>
  <div class="mission">
    <div class="main">
      <div id="hero">
        <video
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
        </video>
      </div>
      <div class="main">More content goes here</div>
    </div>
  </div>
</template>

<style lang="scss">
video#bgvideo {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 400px;
  width: auto;
  height: 800px;
  z-index: -100;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: url(../assets/pipas_site_vid_photo.jpg) no-repeat;
  background-size: cover;
}

.main {
  font-weight: 400;
  padding: 100px;
  text-align: left;
  color: #000000;
  font-size: 12px;
}
</style>