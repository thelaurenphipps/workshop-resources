<template>
  <AppDropdown>
    <slot name="selected">{{value}}</slot> <!-- let Task1.vue uses this exposed slot-->
    <template v-slot:content> <!-- use the AppDropdown slot -->
      <ul>
        <li v-for="option in options" :key="option.name" @click="update(option)"> <!-- set selected value -->
            <slot name="option" v-bind="{option}"> <!-- let Task1.vue uses this exposed slot; bind to option so variable is "passed in" -->
                {{option.name}}
            </slot>
        </li>
      </ul>
    </template>
  </AppDropdown>
</template>

<script>
import AppDropdown from './AppDropdown'

export default {
  components: {
    AppDropdown
  },
  props: {
    options: {
      type: Array
    },
    value: {
      type: [String, Object]
    }
  },
  methods: {
    update (option, cb) {
      this.$emit('input', option)
      if (cb) cb()
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
  padding: 0
  margin: -10px

  li
    border-bottom: 1px solid #f0f0f0
    padding: 8px 14px
    cursor: pointer

    &:hover
      background: #f0f0f0
</style>
