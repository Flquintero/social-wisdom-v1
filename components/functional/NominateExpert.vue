<template>
  <div class="nominate-expert">
    <div class="nominate-expert__form" v-if="isOpen">
      <h3 v-if="isSuccess">Nomination Submitted! Thank you so much! ❤️</h3>
      <template v-else>
        <h3 class="nominate-expert__form__title">
          Just write the account(s) below like if you were texting them to a
          friend:
        </h3>
        <BaseTextarea
          @input="setForm($event)"
          placeholder="Enter account(s)..."
        />
        <div class="nominate-expert__form__actions">
          <BaseButton
            type="submit"
            @click="submitNomination"
            :button-text="`Submit`"
            :loading="isSubmiting"
            variant="primary"
            :disabled="!formData.nomination"
          />
          <BaseButton
            :button-text="`Cancel`"
            :disabled="isSubmiting"
            @click.prevent="isOpen = false"
            variant="danger"
          />
        </div>
      </template>
    </div>
    <div class="nominate-expert__nominate" v-else>
      <BaseButton
        @click.prevent="openForm"
        :button-text="`Nominate Social Media Account`"
        variant="primary"
      />
    </div>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NominateExpert",
  data: () => {
    return {
      isOpen: false,
      isSubmiting: false,
      isSuccess: false,
      formData: {
        nomination: null as null | string,
      },
    };
  },
  methods: {
    openForm() {
      this.isOpen = true;
    },
    async submitNomination() {
      try {
        this.isSubmiting = true;
        mixpanel.track("Submit Nomination", {
          nomination_data: this.formData.nomination,
        });
        let emailPayload = {
          personalizations: [
            {
              to: [{ email: "hello@socialwisdom.co" }],
            },
          ],
          from: {
            email: "hello@socialwisdom.co",
            name: "Social Wisdom Support",
          },
          subject: "SW Nomination",
          template_id: "d-c73b15e0d0e64d8b9aa4bd3511d74d73",
          dynamic_template_data: this.formData,
        };
        await $fetch("/api/email", { method: "post", body: emailPayload });
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
          this.isOpen = false;
        }, 2000);
      } catch (error) {
        console.log("Nomination Error", error);
      } finally {
        this.isSubmiting = false;
      }
    },
    setForm(domEvent: any) {
      this.formData.nomination = domEvent.target.value;
    },
  },
});
</script>
<style lang="scss" scoped>
.nominate-expert {
  &__nominate {
    height: 40px;
    @include flex-config();
  }
  &__form {
    &__title {
      margin-bottom: 20px;
    }
    &__actions {
      display: flex;
      height: 40px;
      margin: 20px 0;
      button {
        margin: 0 5px;
      }
    }
  }
}
</style>
