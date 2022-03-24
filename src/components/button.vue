<template>
  <div>
    <button :disabled="disabled" :readonly="readonly"
      @click.prevent="action"
      :style="{
        background: 'var(--primary)',
        width: '190px',

        ...styles,
      }"
      type="submit"
      class="btn btn-primary"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    styles: {
      type: Object,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false
    },
    readonly: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      btnColor: "",
    };
  },
  methods: {
    action() {
      this.$emit("action");
    },
  },
};
</script>

<style scoped>
button {
  border-width: 0px;
  font-size: 14px;
  color: var(--black);
  padding: 8px 15px;
  font-family: "EngraversGothic", sans-serif;
  font-size: 20px;
  border-radius: 17px;
  box-shadow: 12px 0px 40px -5px var(--primary);
}
</style>