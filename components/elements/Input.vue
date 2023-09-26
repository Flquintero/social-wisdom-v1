<template>
  <div class="input">
    <input
      :type="type"
      :value="value"
      @input="$emit('input', { field: name, value: $event.target.value })"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      class="input__field"
      :class="{ 'input__field--error': error }"
    />
  </div>
</template>

//
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    placeholder: String,
    type: [String, Number],
    value: [String, Number] || null,
    name: String,
    label: String,
    validationObject: Object as PropType<any>,
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    isLoading: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isClearable: {
      type: Boolean,
    },
    resetInput: {
      type: Boolean,
    },
  },
  watch: {
    resetInput(status: boolean) {
      if (status) {
        this.$emit("clear", { field: this.name, value: null });
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.input {
  position: relative;
  &__field {
    cursor: pointer;
    border: 1px solid $border;
    border-radius: 4px;
    color: $dark-blue;
    caret-color: $dark-blue;
    width: 100%;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(46, 74, 117, 0.25);
    -moz-box-shadow: 0px 1px 2px 0px rgba(46, 74, 117, 0.25);
    box-shadow: 0px 1px 2px 0px rgba(46, 74, 117, 0.25);
    outline: none;
    padding: 15px;
    &:focus,
    &:hover {
      opacity: 1;
    }
    &::-webkit-input-placeholder {
      /* Edge */
      color: $dark-blue;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $dark-blue;
    }

    &::placeholder {
      color: $dark-blue;
    }
    &--error {
      color: $error;
      border-color: $error;
      &::placeholder {
        color: $error;
      }
    }
  }
  &__status {
    &-icon {
      position: absolute;
      top: 0;
      right: 0;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      &--error {
        color: $error;
      }
    }
    &-message {
      bottom: -15px;
      left: 0;
      position: absolute;
      font-size: rem(11);
      color: $error;
    }
  }
  &__required {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: rem(10);
    background-color: $white;
  }
  &__loader {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: rem(10);
    background-color: $white;
    color: $primary;
  }
  &__clear {
    position: absolute;
    top: 0;
    right: 45px;
    width: 40px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: rem(10);
    background-color: $white;
    cursor: pointer;
    &:hover {
      color: $primary;
    }
  }
}
</style>
