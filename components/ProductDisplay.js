app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: /*html*/ `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
        <img
            :src="image"
            :alt="description"
            :class="{ 'out-of-stock-img': !inStock }"
        />
        </div>
        <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="onSale">On Sale!</p>
        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        
        <product-details :details="details"></product-details>
        
        <p>Variants:</p>
        <div
            :key="variant.id"
            v-for="(variant, index) in variants"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
        ></div>

        <br />
        
        <p>Sizes Available:</p>
        <div v-for="size in sizes">{{ size }}</div>
          <button
              class="button"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              @click="addToCart"
          >
              Add to Cart
          </button>
          <button
              class="button"
              @click="removeFromCart"
          >
              Remove from Cart
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data: () => ({
    brand: "Vue Mastery",
    product: "Socks",
    description: "Very comfortable Vue socks",
    selectedVariant: 0,
    details: ["50% cotton", "30% wool", "20% polyester"],
    variants: [
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 50,
        onSale: true,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 0,
        onSale: false,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [],
  }),
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      console.log("gello");
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "$2.99";
    },
  },
});
