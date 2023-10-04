<template>
  <div class="footer-layout">
    <!-- <div class="footer-layout__social">
      <img src="/img/IGlogo.png" />
    </div> -->
    <div class="footer-layout__wrapper">
      <div class="footer-layout__content">
        <div class="footer-layout__content__project">
          <h3>The SW Project</h3>
        </div>
        <!-- <div class="footer-layout__separator">
          <h3>&nbsp;<span></span>&nbsp;</h3>
        </div> -->
        <div class="footer-layout__content__about">
          <h3>About us</h3>
        </div>
      </div>
    </div>
    <div class="footer-layout__wrapper">
      <div class="footer-layout__content">
        <div class="footer-layout__copyright">
          <h3>©️ Social Wisdom 2023</h3>
        </div>
        <!-- <div class="footer-layout__terms"><h3>&nbsp;|&nbsp;</h3></div> -->
        <div class="footer-layout__terms"><h3>Terms and Conditions</h3></div>
        <!-- <div class="footer-layout__terms"><h3>&nbsp;|&nbsp;</h3></div> -->
        <div class="footer-layout__privacy">
          <h3>Privacy Policy</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-layout {
  position: fixed;
  bottom: 20px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  line-height: 2;
  &__social {
    width: 50px;
    @include flex-config($justify-content: center, $align-items: center);
    img {
      height: 30px;
      width: 30px;
    }
  }
  &__wrapper {
    width: 100%;
    @include center-with-margin($max-width: 500px);
  }
  &__content {
    display: flex;
    justify-content: center;
    > div {
      display: flex;
      margin: 0 10px;
      font-size: 12px;
      width: 33%;
    }
    &__project {
      width: 50%;
      justify-content: flex-end;
      font-size: 14px !important;
    }
    &__about {
      width: 50%;
      justify-content: flex-start;
      font-size: 14px !important;
    }
  }
}
</style>
