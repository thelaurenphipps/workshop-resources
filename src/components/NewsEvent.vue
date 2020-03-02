<template>
  <BaseNews v-bind="$props"> <!-- use the same base as other news items-->
    <template #author>
      {{ news.author }}
    </template>
    <!-- copy the content/formatting from Task3.vue in the future -->
    <p><small><strong>Location:</strong></small><p>
    <p>{{news.location}}</p>
    <p><small><strong>Attendees:</strong></small><p>
    <p>{{news.attendees}}</p>
    <AppButton @click="handleRsvp">
      <span v-if="news.attending">You're going!</span>
      <span v-else> Join</span>
    </AppButton>
  </BaseNews>
</template>

<script>
import BaseNews from './BaseNews'
export default {
  components: {
    BaseNews
  },
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleRsvp() {
      this.news.attending = !this.news.attending
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
