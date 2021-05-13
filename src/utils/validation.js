class InvoiceElement {
  constructor(event) {
    this.elem = event.srcElement;
    this.input = event.target.value;
    this.styleClasses = ['text-danger', 'is-invalid'];
  }

  asFloat() {
    return parseFloat(this.input);
  }

  asInteger() {
    return parseInt(this.input);
  }

  addClasses() {
    this.styleClasses.map((c) => {
      this.elem.classList.add(c);
    });
  }

  removeClasses() {
    this.styleClasses.map((c) => {
      this.elem.classList.remove(c);
    });
  }
}

class ValidatableElement extends InvoiceElement {
  constructor(event) {
    super(event);
    this.quantityRegex = new RegExp(/^[1-9]\d*$/);
    this.rateRegex = new RegExp(/^\d+(\.\d{1,2})?$/);
    this.descriptionMaxLength = 10;
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

  validateDescription() {
    if (this.inputEmpty()) {
      this.removeClasses();
      return false;
    } else if (this.inputNotEmpty() && this.inputWithinBounds()) {
      this.removeClasses();
      return true;
    } else if (this.inputTooLong()) {
      this.addClasses();
      return false;
    }
  }

  validateQuantity() {
    if (this.inputEmpty()) {
      this.removeClasses();
      return false;
    } else if (this.inputNotEmpty() && this.quantityValid()) {
      this.removeClasses();
      return true;
    } else {
      this.addClasses();
      return false;
    }
  }

  validateRate() {
    if (this.inputEmpty()) {
      this.removeClasses();
      return false;
    } else if (this.inputNotEmpty() && this.rateValid()) {
      this.removeClasses();
      return true;
    } else {
      this.addClasses();
      return false;
    }
  }
}

export { ValidatableElement }
