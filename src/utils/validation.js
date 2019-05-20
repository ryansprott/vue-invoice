let descriptionMaxLength = 10
let quantityRegex = new RegExp(/^[1-9]\d*$/)
let rateRegex = new RegExp(/^\d+(\.\d{1,2})?$/)
let warningClasses = ['text-danger', 'is-invalid']

export {
  descriptionMaxLength,
  quantityRegex,
  rateRegex,
  warningClasses
}
