<template>
  <div
    @click.prevent="isClickable ? $emit('item-chosen', item) : null"
    :style="{ cursor: isClickable ? 'pointer' : 'default' }"
    class="result-item"
  >
    <div class="result-item__image">
      <img :src="item.image" />
    </div>
    <div class="result-item__content">
      <div class="result-item__social">
        <div class="result-item__social__icon">
          <img src="/img/IGlogo.png" />
        </div>
        <div class="result-item__social__info">
          <p class="result-item__social__info__handle">
            @{{ item.instagram_handle }}
          </p>
          <p class="result-item__social__info__category">
            {{ item.tertiary_category }}
          </p>
          <p class="result-item__social__info__followers">
            {{ item.instagram_followers }} followers
          </p>
        </div>
        <div class="result-item__social__link">
          <a
            @click="handleInstagramExpertLink(item.instagram_handle)"
            :href="`https://www.instagram.com/${item.instagram_handle}/?hl='en'`"
            target="none"
            >🔗</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturedItem",
  props: {
    item: Object as any,
    isClickable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInstagramExpertLink(instagramHandle: string) {
      mixpanel.track("Clicked Expert IG Account", {
        expert: instagramHandle,
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.result-item {
  margin: 10px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include mobile {
    min-width: 10px;
  }

  &__content {
    padding: 10px;
    height: calc(100% - 170px);
    @include mobile {
      padding: 0;
      height: auto;
    }
  }
  &__image {
    @include flex-config($justify-content: center, $align-items: center);
    padding: 10px 20px;
    height: 120px;
    max-width: 150px;
    max-height: 150px;
    @include mobile {
      max-width: 130px;
      max-height: 130px;
    }
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
    min-width: 200px;
    @include flex-config();
    background: #f9f9f9;
    border-radius: $border-radius;
    padding: 10px 0;
    @include box-shadow;
    @include mobile() {
      min-width: 120px;
      padding: 10px 10px 10px 0;
    }
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
      @include mobile {
        align-items: center;
      }
      &__handle {
        font-size: 14px;
        font-weight: 600;
        @include mobile {
          font-size: 11px;
        }
      }
      &__category {
        font-size: 13px;
        font-weight: 200;
        text-transform: capitalize;
        @include mobile {
          font-size: 11px;
        }
      }
      &__followers {
        font-size: 12px;
        font-weight: 200;
        @include mobile {
          font-size: 10px;
        }
      }
    }
    &__link {
      width: 45px;
      @include flex-config($justify-content: center, $align-items: center);
      a {
        text-decoration: none;
      }
      @include mobile() {
        display: none;
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
