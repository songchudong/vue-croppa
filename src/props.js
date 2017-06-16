Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
}

export default {
  value: Object,
  width: {
    type: Number,
    default: 200,
    validator: function (val) {
      return val > 0
    }
  },
  height: {
    type: Number,
    default: 200,
    validator: function (val) {
      return val > 0
    }
  },
  placeholder: {
    type: String,
    default: 'Choose File'
  },
  placeholderColor: {
    default: '#606060'
  },
  placeholderFontSize: {
    type: Number,
    default: 0,
    validator: function (val) {
      return val >= 0
    }
  },
  canvasColor: {
    default: '#e6e6e6'
  },
  quality: {
    type: Number,
    default: 2,
    validator: function (val) {
      return Number.isInteger(val) && val > 0 && val <= 5
    }
  },
  zoomSpeed: {
    default: 3,
    type: Number,
    validator: function (val) {
      return val > 0
    }
  },
  inputAccept: {
    type: String,
    default: 'image/*'
  },
  fileSizeLimit: {
    type: Number,
    default: 0,
    validator: function (val) {
      return val >= 0
    }
  },
  disabled: Boolean,
  reverseZoomingGesture: Boolean,
  preventWhiteSpace: Boolean,
  showRemoveButton: {
    type: Boolean,
    default: true
  },
  removeButtonColor: {
    type: String,
    default: 'red'
  },
  removeButtonSize: {
    type: Number
  }
}