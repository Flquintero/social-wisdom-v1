<template>
  <div class="result-item">
    <div class="result-item__image">
      <img :src="item.image" />
    </div>
    <div class="result-item__content">
      <div class="result-item__title">
        <p>{{ item.full_name }}</p>
      </div>
      <div class="result-item__social">
        <div class="result-item__social__icon">
          <img src="/img/IGlogo.png" />
        </div>
        <div class="result-item__social__info">
          <p class="result-item__social__info__handle">
            {{ item.instagram_handle }}
          </p>
          <p class="result-item__social__info__followers">
            {{ item.instagram_followers }} followers
          </p>
        </div>
        <div class="result-item__social__link">
          <a
            :href="`https://www.instagram.com/${item.instagram_handle}/?hl='en'`"
            target="none"
            >🔗</a
          >
        </div>
      </div>
      <div class="result-item__description">
        <div v-html="item.description"></div>
        <div class="result-item__badges"></div>
      </div>
      <div class="result-item__button">
        <BaseButton
          @click.prevent="$emit('item-chosen', item)"
          :button-text="`👋 Ask Question`"
          variant="primary"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultItem",
  props: {
    item: Object as any,
  },
});
</script>
<style lang="scss" scoped>
.result-item {
  margin: 20px;
  border: 1px solid $border;
  border-radius: 8px;
  @include box-shadow;
  min-width: 275px;
  max-width: 275px;
  height: 500px;
  max-height: 500px;
  &__content {
    padding: 10px;
    height: calc(100% - 170px);
  }
  &__image {
    @include flex-config($justify-content: center, $align-items: center);
    padding: 10px 20px;
    height: 170px;
    max-height: 170px;
    img {
      border: 1px solid $border;
      border-radius: 100%;
    }
  }
  &__title {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    height: 60px;
    max-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 100%;
    }
  }
  &__social {
    margin: 10px 0;
    @include flex-config();
    background: #f9f9f9;
    border-radius: 8px;
    padding: 10px 0;
    &__icon {
      width: 40px;
      @include flex-config($justify-content: center, $align-items: center);
      img {
        height: 25px;
        width: 25px;
      }
    }
    &__info {
      flex-grow: 1;
      @include flex-config($flex-direction: column);
      &__handle {
        font-size: 14px;
        font-weight: 500;
      }
      &__followers {
        font-size: 12px;
        font-weight: 200;
      }
    }
    &__link {
      width: 45px;
      @include flex-config($justify-content: center, $align-items: center);
      a {
        text-decoration: none;
      }
    }
  }
  &__description {
    height: 120px;
    max-height: 120px;
    overflow-y: hidden;
    margin-bottom: 15px;
    word-break: break-word;
    div {
      // margin: 20px 0;
      font-size: 12px;
    }
  }
  &__button {
    height: 40px;
    cursor: pointer;
  }
}
</style>
