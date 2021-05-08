class ValidatableElement {
  constructor(event) {
    this.elem = event.srcElement;
    this.input = event.target.value;
    this.quantityRegex = new RegExp(/^[1-9]\d*$/);
    this.rateRegex = new RegExp(/^\d+(\.\d{1,2})?$/);
    this.descriptionMaxLength = 10;
    this.warningClasses = ['text-danger', 'is-invalid'];
  }

  quantityValid() {
    return this.quantityRegex.test(this.input);
  }

  rateValid() {
    return this.rateRegex.test(this.input);
  }

  inputEmpty() {
    return this.input.length < 1;
  }

  inputNotEmpty() {
    return this.input.length >= 1;
  }

  inputWithinBounds() {
    return this.input.length <= this.descriptionMaxLength;
  }

  inputTooLong() {
    return this.input.length > this.descriptionMaxLength;
  }

  applyWarning() {
    this.warningClasses.map((c) => {
      this.elem.classList.add(c);
    });
  }

  removeWarning() {
    this.warningClasses.map((c) => {
      this.elem.classList.remove(c);
    });
  }

  validateDescription() {
    if (this.inputEmpty()) {
      this.removeWarning();
      return false;
    } else if (this.inputNotEmpty() && this.inputWithinBounds()) {
      this.removeWarning();
      return true;
    } else if (this.inputTooLong()) {
      this.applyWarning();
      return false;
    }
  }

  validateQuantity() {
    if (this.inputEmpty()) {
      this.removeWarning();
      return false;
    } else if (this.inputNotEmpty() && this.quantityValid()) {
      this.removeWarning();
      return true;
    } else {
      this.applyWarning();
      return false;
    }
  }

  validateRate() {
    if (this.inputEmpty()) {
      this.removeWarning();
      return false;
    } else if (this.inputNotEmpty() && this.rateValid()) {
      this.removeWarning();
      return true;
    } else {
      this.applyWarning();
      return false;
    }
  }
}

export { ValidatableElement }
