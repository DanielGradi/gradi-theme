import { $Q } from "graditify-utils";
import { variantOnChange } from "./graditify_sticky-variants-product"

class StickyVariants extends  HTMLElement {
  constructor() {
    super()
    this.props = {
      intersectionElement: this.validateAttribute(this.getAttribute('intersection-element')), // Required
      buttonSubmit: this.validateAttribute(this.getAttribute('button-submit')), // Required
      sectionRendering: this.validateAttribute(this.getAttribute('section-rendering')), // Required
      variantsWrapper: this.validateAttribute(this.getAttribute('variants-wrapper')), // required
      mediaQuery: this.validateAttribute(this.getAttribute('media-query')), // Optional
      priceSelector: this.validateAttribute(this.getAttribute('price-selector')), // Optional
      imagesChange: this.validateAttribute(this.getAttribute('images-change')), // Optional
    }
    this.variants = $Q('.variants', this)
  }

  connectedCallback() {
    this.hiddenElement($Q('.price-product-js', this))
    this.hiddenElement($Q('.graditify-variants-images-js', this))
    variantOnChange(".graditify-variants-js", this);
  }

  /**
   * Validate if there are something in attribute
   * @param {string} attr - Attribute
   * @returns {string || null}
   */
  validateAttribute = (attr) => !attr || !attr.length ? null : attr

  activeStickyFeature() {
    console.log('Enable product sticky')
    this.activePrice()
    this.activeMedia()
  }

  activePrice() {
    this.showElement($Q('.price-product-js', this))
  }

  activeMedia() {
    this.showElement($Q('.graditify_variants--images', this))
  }

  hiddenElement(el) {
    if (el && !el.classList.contains('hidden')) {
      el.classList.add('hidden')
    }
  }

  showElement(el) {
    if (el && el.classList.contains('hidden')) {
      el.classList.remove('hidden')
    }
  }
}

window.customElements.define('sticky-variants', StickyVariants)
