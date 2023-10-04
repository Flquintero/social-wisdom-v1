<template>
  <div class="footer-layout">
    <!-- <div class="footer-layout__social">
      <img src="/img/IGlogo.png" />
    </div> -->
    <div class="footer-layout__wrapper">
      <div class="footer-layout__content__first-row">
        <div class="footer-layout__project">
          <h3>SW Project</h3>
        </div>
        <!-- <div class="footer-layout__separator">
          <h3>&nbsp;<span></span>&nbsp;</h3>
        </div> -->
        <div class="footer-layout__about">
          <h3>About us</h3>
        </div>
      </div>
    </div>
    <div class="footer-layout__wrapper">
      <div class="footer-layout__content__second-row">
        <div class="footer-layout__copyright">
          <h3>©️ Social Wisdom 2023</h3>
        </div>
        <!-- <div class="footer-layout__terms"><h3>&nbsp;|&nbsp;</h3></div> -->
        <div class="footer-layout__terms">
          <h3>Terms and Conditions</h3>
        </div>
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
    &__first-row {
      display: flex;
      justify-content: center;
      text-decoration: underline;
    }
    &__second-row {
      display: flex;
      justify-content: center;
      @include mobile {
        font-size: 10px;
      }
      > div {
        margin: 0 5px;
      }
    }
  }
  &__project {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    font-size: 14px !important;
    margin: 0 10px;
  }
  &__about {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    font-size: 14px !important;
    margin: 0 10px;
  }
}
</style>
