<template>
  <div>
    <input
      :readonly="readonly"
      :value="filterValue(value)"
      :class="
        warning
          ? 'border-red-500 focus:border-red-600'
          : 'border-gray-300 focus:border-blue-800'
      "
      class="w-full rounded-md border-2 focus:outline-none text-sm px-3 py-2"
      :placeholder="placeholder"
      type="text"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    readonly: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      let number = e.target.value;

      let number_filter = number.replace(/[^0-9]+/g, "");
      // this.shipment_fee = this.formatPrice(this.shipment_fee.replace(/[^\d]/,''));

      this.$emit("input", Number(number_filter));
    },
    formatPrice(number) {
      var rupiah = "";
      var angkarev = number
        .toString()
        .split("")
        .reverse()
        .join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
      return rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("");
    },
    filterValue(value) {
      if (value) {
        let number = value.toString().replace(/[^0-9]+/g, "");
        return this.formatPrice(number.replace(/[^\d]/, ""));
      } else {
        return this.formatPrice(0);
      }
    },
  },
};
</script>
