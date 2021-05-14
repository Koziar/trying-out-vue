const app = Vue.createApp({
  data: () => ({
    product: "Socks",
    description: "Very comfortable Vue socks",
    image: "./assets/images/socks_green.jpg",
    inventory: 10,
    onSale: true,
  }),
});
