const app = Vue.createApp({
  data: () => ({
    cart: 0,
    product: "Socks",
    description: "Very comfortable Vue socks",
    image: "./assets/images/socks_green.jpg",
    inventory: 10,
    onSale: true,
    details: ["50% cotton", "30% wool", "20% polyester"],
    variants: [
      { id: 2234, color: "green" },
      { id: 2235, color: "blue" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  }),
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
