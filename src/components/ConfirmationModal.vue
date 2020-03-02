<template functional>
  <div>
    <AppModal>
      <h3 class="confirmation-message">{{props.message}}</h3>
      <div class="buttons">
        <AppButton @click="listeners.confirm">Confirm</AppButton>
        <AppButton type="secondary" @click="listeners.close">Cancel</AppButton>
      </div>
    </AppModal>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      default: 'default question?',
      type: String
    }
  }
}
</script>

<style lang="css" scoped>
</style>
