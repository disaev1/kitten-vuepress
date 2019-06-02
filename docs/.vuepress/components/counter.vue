<template lang="pug">
  div.counter
    h1.counter-title {{ number }}
    button.counter-button(type="button" @click="increment") Увеличить
    button.counter-button(type="button" @click="decrement") Уменьшить
</template>

<script>
  export default {
    name: 'counter',

    data() {
      return {
        number: 0
      };
    },

    methods: {
      increment() {
        if (this.number >= 0) {
          this.number += 1;
        }
      },
      decrement() {
        if (this.number > 0) {
          this.number -= 1;
        }
      }
    },
  }
</script>

<style scoped lang="stylus">
.counter
  display: inline-block
  margin-left: 30%

  &__title
    text-align: center

  &__button
    display: inline-block
    padding: 20px
    margin: 10px
    font-weight: 700
    border-radius: 5px
    box-shadow: 0 0 5px 0 rgb(11, 11, 114)
    text-transform: capitalize
</style>
