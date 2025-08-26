class AvailabilityStatus extends HTMLElement {
  constructor() {
    super();

    //Initial values
    this.selectedLocation = "New York";
    this.selectedVariantColor =  "Navy Blue"
    this.selectedVariantStockData = null;

    //UI Elements
    this.activeLocationTexts = this.querySelectorAll(".active-location-text");

    this.deliveryStatus = this.querySelector("#availability-delivery-status");
    this.deliveryText = this.querySelector("#availability-delivery-text");

    this.storeStatus = this.querySelector("#availability-store-status");
    this.storeText = this.querySelector("#availability-store-text");

    //Events
    this.change_location_btn = this.querySelector("#change-location-btn");
    this.change_location_btn.addEventListener("click",
      this.handleChangeLocation.bind(this)
    );

    document.addEventListener("afterVariantChange", 
      this.handleVariantChange.bind(this)
    );

    //initialize! 
    
  }

  handleVariantChange(event) {
    /* update  this.selectedVariantColor based on the Shopify variant change-event */
   
    this.updateAvailability();
  }

  handleChangeLocation() {
    this.selectedLocation = this.selectedLocation === "New York" ? "Los Angeles" : "New York";
    this.updateAvailability();
  }


  async updateAvailability() {
    console.log("Attempt to Update Availability", {variant: this.selectedVariantColor , location: this.selectedLocation});
    
    if(!this.selectedVariantStockData || this.selectedVariantStockData.color != this.selectedVariantColor)
    {
       await this.getStockDataForVariant();
    }
   
    this.updateUI();
  }

  async getStockDataForVariant() {
   const apiUrl = `https://gist.githubusercontent.com/CodingwithJan/7961f327bc68d2502835199fc92b86a1/raw/3f3b7f6ac133bcb55a931eae3b3a5c7e7a8cf249/bike_water_bottle-${this.selectedVariantColor}.json`;
    
    try {
        const response = await fetch(apiUrl);
        const jsonResponse = await response.json();
        this.selectedVariantStockData = jsonResponse;
        console.log("Fetched stock data:", this.selectedVariantStockData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

  }


  updateUI() { 
    if (!this.selectedVariantStockData) return;
    
    this.activeLocationTexts.forEach((textElement) => {
      textElement.innerText = this.selectedLocation;
    });
    
    const storeStock = this.selectedVariantStockData.locations[this.selectedLocation];
    const totalStock =
      this.selectedVariantStockData.locations["New York"] + this.selectedVariantStockData.locations["Los Angeles"];

    if (storeStock > 0) {
      this.storeStatus.classList.remove("unavailable");
      this.storeStatus.classList.add("available");
      this.storeText.innerText = "Available";
    } else {
      this.storeStatus.classList.add("unavailable");
      this.storeStatus.classList.remove("available");
      this.storeText.innerText = "Unvailable";
    }

    if (totalStock > 0) {
      this.deliveryStatus.classList.remove("unavailable");
      this.deliveryStatus.classList.add("available");
      this.deliveryText.innerText = "Available";
    } else {
      this.deliveryStatus.classList.add("unavailable");
      this.deliveryStatus.classList.remove("available");
      this.deliveryText.innerText = "Unavailable";
    }
  }


}
customElements.define("availability-status", AvailabilityStatus);
