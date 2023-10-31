import './graditify_product-variants-styles.scss'
import { $Q } from "graditify-utils";
import { variantOnChange } from "./graditify_product-variants-product"

class ProductVariants extends  HTMLElement {
  constructor() {
    super()
    this.props = {
      sectionRendering: this.validateAttribute(this.getAttribute('section-rendering')), // Required
      priceSelector: this.validateAttribute(this.getAttribute('price-selector')), // Optional
      imagesChange: this.validateAttribute(this.getAttribute('images-change')), // Optional
      buttonSubmit: this.validateAttribute(this.getAttribute('button-submit')), // Optional
    }
    this.variants = $Q('.variants', this)
  }

  connectedCallback() {
    variantOnChange(".graditify-variants-js", this);
  }

  /**
   * Validate if there are something in attribute
   * @param {string} attr - Attribute
   * @returns {string || null}
   */
  validateAttribute = (attr) => !attr || !attr.length ? null : attr
}

window.customElements.define('product-variants', ProductVariants)
