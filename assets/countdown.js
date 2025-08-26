class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    //Grab required elements

    // Set Date
    this.endDateString = "May 25, 2026 16:37:52 EST";
    this.endDate = new Date(this.endDateString).getTime();

    // Start timer
  }

  handleTick() {
    //logic and update elements
  }
}

customElements.define("countdown-timer", CountDownTimer);
