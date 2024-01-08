<template>
  <div class="details-content">
    <div class="details-content__header">
      <ClientOnly>
        <template v-if="currentExpert">
          <h1>Hazle una pregunta a {{ currentExpert.full_name }}</h1>
          <FunctionalFeaturedItemSpanish
            :item="currentExpert"
            :key="currentExpert.objectID"
          />
        </template>
      </ClientOnly>
    </div>
    <form @submit.prevent="submitRequest">
      <div class="details-content__details">
        <h3>Introdúce tu pregunta a continuación:</h3>
        <div class="details-content__details__form">
          <BaseTextarea
            @input="setForm($event, 'question')"
            v-bind="{ placeholder: 'Pregunta...', type: 'text' }"
          />
        </div>
      </div>
      <div class="details-content__details">
        <h3>
          Introdúce tu información para poder enviarte la video respuesta:
        </h3>
        <div class="details-content__details__form">
          <BaseInput
            @input="setForm($event, 'name')"
            v-bind="{ placeholder: 'Nombre Completo', type: 'text' }"
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
        <div class="details-content__bid__form">
          <h3>¿Cuánto quisieras pagar?</h3>
          <div class="details-content__bid__form__input">
            💲&nbsp;&nbsp;<BaseInput
              @input="setForm($event, 'amount')"
              v-bind="{
                placeholder: 'Cantidad...',
                type: 'number',
              }"
            />
          </div>
          <h5>Nosotros recomendamos un minimo de $5 (US) seria apropiado.</h5>
        </div>
      </div>
      <div class="details-content__actions">
        <BaseButton
          type="submit"
          :disabled="isFormMissingData || isSubmiting"
          :loading="isSubmiting"
          button-text="Obtener Video Respuesta! 💪"
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
  name: "DetailsSpanish",
  data() {
    return {
      searchResults: null as any,
      isSubmiting: false,
      currentExpert: null as any | null,
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
      if (process.server) {
        return "";
      }
      return localStorage.getItem("CurrentQuestion");
    },
    isFormMissingData(): boolean {
      return (
        !!Object.values(this.formData).filter((item) => item === null).length ||
        (this.formData.amount as number) < 5
      );
    },
    hasQuery(): boolean {
      return !!(this.$route.query.q as string);
    },
    hasQuestion(): boolean {
      return !!this.currentQuestion;
    },
  },
  async mounted() {
    if (process.client) await this.getCurrentExpert();
  },
  methods: {
    async getCurrentExpert() {
      const accountId = this.$route.query.account as string;
      const hits = await $fetch(`/api/account`, {
        method: "post",
        body: { accountId },
      });
      this.currentExpert = hits.object;
      this.formData.expert = this.currentExpert?.full_name;
    },
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
          query: { account: this.currentExpert.full_name },
        });
      } catch (error) {
        console.log("Registration Error", error);
      } finally {
        this.isSubmiting = false;
        localStorage.removeItem("CurrentQuestion");
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
      margin-top: 20px;
      text-align: center;

      &__input {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
      &__error {
        color: $error !important;
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
    max-width: 280px;
    height: 45px;
    margin: 20px auto;
  }
}
</style>
