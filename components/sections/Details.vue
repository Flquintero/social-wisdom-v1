<template>
  <div class="details-content">
    <div class="details-content__header">
      <!-- <h1>We will work on your request! ❤️</h1> -->
      <h3>{{ currentExpert }} is not on the platform yet!</h3>
      <h3>
        But with your help we can get them on, and that way help others! ❤️
      </h3>
    </div>
    <form @submit.prevent="submitRequest">
      <div class="details-content__bid">
        <h1 class="details-content__bid__title">
          We believe that if you offer to pay for the answer, we can get them to
          send you a video with it.
        </h1>
        <div class="details-content__bid__form">
          <h3>If so, how much would you be willing to pay?</h3>
          <div class="details-content__bid__form__input">
            💲&nbsp;&nbsp;<BaseInput
              @input="setForm($event, 'amount')"
              v-bind="{ placeholder: 'Enter Amount...', type: 'number' }"
            />
          </div>
          <!-- <h5>It could be anything from $1 up!</h5> -->
        </div>
      </div>
      <div class="details-content__details">
        <h3>
          Also, we would need your info, to send you the answer (nothing else):
        </h3>
        <div class="details-content__details__form">
          <BaseInput
            @input="setForm($event, 'name')"
            v-bind="{ placeholder: 'Name', type: 'text' }"
          />
          <BaseInput
            @input="setForm($event, 'email')"
            v-bind="{ placeholder: 'Email', type: 'text' }"
          />
          <!-- <BaseInput
            @input="setForm($event, 'instagram')"
            v-bind="{ placeholder: 'Instagram Handle', type: 'text' }"
          /> -->
        </div>
      </div>
      <div class="details-content__actions">
        <BaseButton
          type="submit"
          :disabled="isFormMissingData || isSubmiting"
          :loading="isSubmiting"
          button-text="Get Me The Answer! 💪"
          variant="primary"
          @click="submitRequest"
        />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import mixpanel from "mixpanel-browser";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Details",
  data() {
    return {
      searchResults: null as any,
      isSubmiting: false,
      formData: {
        amount: null as number | null,
        name: null as string | null,
        email: null as string | null,
        // instagram: null as string | null,
        question: null as string | null,
        expert: null as string | null,
      },
    };
  },
  computed: {
    currentQuestion() {
      return localStorage.getItem("CurrentQuestion");
    },
    currentExpert(): string {
      return this.$route.query.account as string;
    },
    isFormMissingData(): boolean {
      return !!Object.values(this.formData).filter((item) => item === null)
        .length;
    },
  },
  mounted() {
    this.formData.question = localStorage.getItem("CurrentQuestion");
    this.formData.expert = this.$route.query.account as string;
  },
  methods: {
    setForm(domEvent: any, field: string) {
      (this.formData as any)[field] = domEvent.target.value;
    },
    async submitRequest() {
      try {
        this.isSubmiting = true;
        mixpanel.track("Submit Question Request", {
          request_data: this.formData,
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
          subject: "SW Question Request!",
          template_id: "d-43fb730f04f8438a806c72efc9fc7307",
          dynamic_template_data: this.formData,
        };
        await $fetch("/api/email", { method: "post", body: emailPayload });
        this.$router.push({
          name: "success",
          query: { account: this.$route.query.account },
        });
      } catch (error) {
        console.log("Registration Error", error);
      } finally {
        this.isSubmiting = false;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.details-content {
  padding: 20px;
  &__header {
    text-align: center;
  }
  &__bid {
    text-align: center;
    margin: 30px 0;
    &__title {
      width: 100%;
      max-width: 800px;
      margin: auto;
    }
    &__form {
      margin-top: 30px;

      &__input {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
    }
  }
  &__details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    &__form {
      margin-top: 20px;
      width: 100%;
      max-width: 400px;
      div {
        margin-bottom: 15px;
      }
    }
  }
  &__actions {
    width: 100%;
    max-width: 250px;
    height: 45px;
    margin: 10px auto;
  }
}
</style>
