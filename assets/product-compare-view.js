class ProductCompareView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Select elements within the component
    this.productSelect = this.querySelector("#product-select");
    this.comparisonContainer = this.querySelector("#compare-product-container");
    this.addProductBtn = this.querySelector("#add-product-button");

    // Bind event listeners
    this.addProductBtn.addEventListener(
      "click",
      this.handleAddProduct.bind(this)
    );

    this.comparisonContainer.addEventListener(
      "click",
      this.handleRemoveProduct.bind(this)
    );
  }

  async handleAddProduct() {
    /* 1) get the selected product handle from the dropdown */

    const productHandle = "?";
    console.log(`attempting to add product ${productHandle}`);
    if (!productHandle) return;

    /* 4) Later add a check to see if the product is already in the comparison container; if yes, return */
    //add check here

    /* 2) fetch the product card for the selected product */

    /*
    const productCard = await this.fetchProductCardSection(productHandle);

    if (!productCard || !(productCard instanceof Node)) {
      console.error(
        "Something went wrong while fetching the product card.",
        productCard
      );
      return;
    }

    console.log("Now adding product card to comparison container");

    this.comparisonContainer.appendChild(productCard);
    */

    /* 3) disable the added product in our dropdown */
    //this.toggleSelectOption(productHandle);
  }

  // Fetch product details and add to comparison container
  async fetchProductCardSection(productHandle) {
    try {
      /* 2.1) build the url to fetch our section, based on the productHandle */
      const sectionApiUrl = `?`;

      console.log(sectionApiUrl, "Url to fetch Section");
      const response = await fetch(sectionApiUrl);

      /* 2.2) Extract the html-text from the response and parse it into a DOM object using DOMParser */

      /* 2.3) Extract the product card from the DOM object and return it*/
      /*const productCard = ???

      console.log(productCard, "The new product card element");

      if (!productCard) {
        console.error(
          "Product not found, or problem with fetching, or problem with extracting?."
        );
        return null;
      }
      return productCard;
      */
    } catch (error) {
      console.error("Error fetching product card:", error);
      return null;
    }
  }

  handleRemoveProduct(event) {
    const removehandle = event.target.dataset.removeproducthandle;
    console.log(`attempt to remove #${removehandle}`);
    if (!removehandle) return;

    /* 5) remove product from our container and toggle the select option */

    //add code here

    //this.toggleSelectOption(removehandle);
  }

  toggleSelectOption(productHandle) {
    console.log(`toggle Select Option for ${productHandle}`);
    const option = this.productSelect.querySelector(
      `option[value="${productHandle}"]`
    );
    /*if option is disabled, enable it, else disable it
    also add:
    option.style.color = ""; for enabled
    option.style.color = "gray"; for disabled
    */

    //add code here
  }
}

// Define the custom element
customElements.define("product-compare-view", ProductCompareView);
