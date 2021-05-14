const app = Vue.createApp({
  data: () => ({
    cart: [],
    premium: false,
  }),
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeFromFromCart(id) {
      this.cart = this.cart.filter((item) => item.id === id);
    },
  },
});
