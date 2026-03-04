import { LitElement as b, unsafeCSS as g, html as d } from "lit";
import { property as a, query as Go, state as x } from "lit/decorators.js";
import { ifDefined as p } from "lit/directives/if-defined.js";
/*!
   * New York State Design System (v1.14.0)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */
const wo = ':host{--_nys-accordion-border-radius: var(--nys-radius-md, 4px);--_nys-accordion-border-width: var(--nys-border-width-md, 2px);--_nys-accordion-border-color: var(--nys-color-neutral-50, #ededed);--_nys-accordion-padding--x: var(--nys-space-250, 20px);--_nys-accordion-padding--y: var(--nys-space-200, 16px);--_nys-accordion-outline-width: var(--nys-border-width-md, 2px);--_nys-accordion-outline-offset: var(--nys-space-2px, 2px);--_nys-accordion-outline-color: var(--nys-color-focus, #004dd1);--_nys-accordion-gap: var(--nys-space-100, 8px);--_nys-accordion-background-color--header: var( --nys-accordion-background-color--header, var(--nys-color-neutral-50, #ededed) );--_nys-accordion-background-color--header--hover: var( --nys-accordion-background-color--header--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-accordionitem-gap: var(--nys-space-200, 16px);--_nys-accordionitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-accordionitem-padding: var(--nys-space-200, 16px) var(--local-xx-spacing-205, 20px);--_nys-accordion-content-max-width: var( --nys-accordion-content-max-width, 80ch );--_nys-accordion-font-size: var(--nys-type-size-ui-xl, 20px);--_nys-accordion-font-weight: var(--nys-font-weight-bold, 700);--_nys-accordion-line-height: var(--nys-font-lineheight-ui-xl, 28px);--_nys-accordion-letter-spacing: var(--nys-font-letterspacing-ui-xl, .017px);--_nys-accordion-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}::slotted(p),p{margin:0!important}.nys-accordionitem{font-family:var(--_nys-accordion-font-family);font-size:var(--_nys-accordion-font-size);font-weight:var(--_nys-accordion-font-weight);line-height:var(--_nys-accordion-line-height);letter-spacing:var(--_nys-accordion-letter-spacing);display:flex}.nys-accordionitem__heading{all:unset;flex:1;gap:var(--_nys-accordionitem-gap);display:flex;padding:var(--_nys-accordion-padding--y) var(--_nys-accordion-padding--x);align-items:center;align-self:stretch;border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header);cursor:pointer;transition:.05s all ease-in-out}.nys-accordionitem__heading:hover{border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header--hover)}.nys-accordionitem__heading:focus-visible{outline-offset:var(--_nys-accordion-outline-offset);outline:solid var(--_nys-accordion-outline-width) var(--_nys-accordion-outline-color)}.nys-accordionitem__heading .nys-accordionitem__heading-title{flex:1}.nys-accordionitem__content{height:0;overflow:hidden;transition:all .3s cubic-bezier(.4,0,.2,1) 0ms;visibility:hidden}.nys-accordionitem__content.expanded{visibility:visible}.nys-accordionitem__content-slot-container{display:flex;flex-direction:column;align-items:flex-start;gap:var(--_nys-accordion-gap);align-self:stretch;padding:var(--_nys-accordionitem-padding);background-color:var(--_nys-accordionitem-background-color)}.nys-accordionitem__content-slot-container-text{max-width:var(--_nys-accordion-content-max-width)}.expand-icon{transition:all .3s cubic-bezier(.4,0,.2,1) 0ms}:host([expanded]) .expand-icon{transform:rotate(180deg)}:host([bordered][expanded]) .nys-accordionitem__heading{border-radius:var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius) 0 0}:host([bordered]) .nys-accordionitem__content-slot-container{border:var(--_nys-accordion-border-width) solid var(--_nys-accordion-border-color);border-radius:0 0 var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius)}.nys-accordion{display:flex;flex-direction:column;gap:var(--_nys-accordion-gap)}';
var Qo = Object.defineProperty, He = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Qo(e, t, o), o;
};
let Xo = 0;
const Pt = class Pt extends b {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.heading = "", this.expanded = !1, this.bordered = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    this.expanded && e && e.addEventListener("slotchange", () => {
      this._updateHeight();
    });
  }
  updated(e) {
    e.has("expanded") && this._updateHeight();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-accordionitem-${Date.now()}-${Xo++}`;
  }
  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-accordionitem-toggle", {
        detail: { id: this.id, heading: this.heading, expanded: this.expanded },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleExpand() {
    this.expanded = !this.expanded, this._updateHeight(), this._dispatchEvent();
  }
  _handleKeydown(e) {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._handleExpand());
  }
  _updateHeight() {
    if (this._contentContainer)
      if (this.expanded) {
        const e = this._contentContainer.scrollHeight;
        this._contentContainer.style.height = `${e}px`;
      } else
        this._contentContainer.style.height = "0", this._contentContainer.style.overflow = "hidden";
  }
  render() {
    const e = `${this.id}-content`;
    return d`
    <div class="nys-accordionitem">
      <button
        class="nys-accordionitem__heading"
        type="button"
        @click=${this._handleExpand}
        @keydown=${this._handleKeydown}
        aria-expanded=${this.expanded ? "true" : "false"}
        aria-controls=${e}
      >
        <p class="nys-accordionitem__heading-title">${this.heading}</p>
        <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
      </button>
      </div>
      <div id=${e} class="nys-accordionitem__content ${this.expanded ? "expanded" : "collapsed"}" role="region">
        <div class="nys-accordionitem__content-slot-container">
          <div class="nys-accordionitem__content-slot-container-text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`;
  }
};
Pt.styles = g(wo);
let ue = Pt;
He([
  a({ type: String, reflect: !0 })
], ue.prototype, "id");
He([
  a({ type: String })
], ue.prototype, "heading");
He([
  a({ type: Boolean, reflect: !0 })
], ue.prototype, "expanded");
He([
  a({ type: Boolean, reflect: !0 })
], ue.prototype, "bordered");
He([
  Go(".nys-accordionitem__content")
], ue.prototype, "_contentContainer");
customElements.get("nys-accordionitem") || customElements.define("nys-accordionitem", ue);
var Jo = Object.defineProperty, Dt = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Jo(e, t, o), o;
};
let er = 0;
const Tt = class Tt extends b {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.singleSelect = !1, this.bordered = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  updated(e) {
    e.has("bordered") && this._applyBordered();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-accordion-${Date.now()}-${er++}`;
  }
  _getAccordionItems() {
    return (this.shadowRoot?.querySelector("slot")?.assignedElements() || []).filter(
      (r) => r.tagName.toLowerCase() === "nys-accordionitem"
    );
  }
  _onAccordionToggle(e) {
    if (!this.singleSelect) return;
    const t = e.detail.id;
    e.detail.expanded && this._getAccordionItems().forEach((o) => {
      o.id !== t && o.expanded && (o.expanded = !1);
    });
  }
  _applyBordered() {
    this._getAccordionItems().forEach((e) => {
      e.bordered = this.bordered;
    });
  }
  render() {
    return d`<div
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`;
  }
};
Tt.styles = g(wo);
let Ie = Tt;
Dt([
  a({ type: String, reflect: !0 })
], Ie.prototype, "id");
Dt([
  a({ type: Boolean, reflect: !0 })
], Ie.prototype, "singleSelect");
Dt([
  a({ type: Boolean, reflect: !0 })
], Ie.prototype, "bordered");
customElements.get("nys-accordion") || customElements.define("nys-accordion", Ie);
const tr = ':host{--_nys-alert-border-width: var(--nys-border-width-lg, 4px);--_nys-alert-border-radius: var(--nys-radius-md, 4px);--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text, var(--nys-color-neutral-900, #1b1b1b)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-strong, var(--nys-color-blue-700, #003ba1)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-strongest, var(--nys-color-blue-800, #002971)) );--_nys-alert-padding: var(--nys-space-250, 20px);--_nys-alert-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-alert-font-size: var(--nys-font-size-ui-md, 16px);--_nys-alert-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-alert-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-alert-font-weight--regular: var(--nys-font-weight-regular, 400);--_nys-alert-font-weight--semibold: var(--nys-font-weight-semibold, 600);--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-base, var(--nys-color-neutral-600, #62666a)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-base-weak, var(--nys-color-neutral-10, #f6f6f6)) );--_nys-alert-gap--icon: var(--nys-space-150, 12px);--_nys-alert-gap--text: var(--nys-space-50, 4px);--_nys-alert-gap--actions: var(--nys-space-150, 12px)}.nys-alert__container{display:flex;background-color:var(--_nys-alert-background-color);border-inline-start:var(--_nys-alert-border-width) solid var(--_nys-alert-border-color);border-radius:var(--_nys-alert-border-radius);color:var(--_nys-alert-color);padding:var(--_nys-alert-padding);font-style:normal;font-family:var(--_nys-alert-font-family);font-size:var(--_nys-alert-font-size);line-height:var(--_nys-alert-line-height);letter-spacing:var(--_nys-alert-letter-spacing);gap:var(--_nys-alert-gap--icon)}p{margin:0}::slotted(p){margin-bottom:0!important}.nys-alert__icon{margin-top:.5px}a,a:visited{font-weight:var(--_nys-alert-font-weight--semibold);font-size:var(--_nys-alert-font-size);color:var(--_nys-alert-color--link)}a:hover{color:var(--_nys-alert-color--link--hover)}a:active{color:var(--_nys-alert-color--link--active)}::slotted(a){color:var(--_nys-alert-color--link)}.nys-alert__texts{position:relative;display:flex;flex-direction:column;flex:1;gap:var(--_nys-alert-gap--text)}.nys-alert__header{margin:0;font-weight:var(--_nys-alert-font-weight--semibold)}.nys-alert__text{font-weight:var(--_nys-alert-font-weight--regular);margin:0}::slotted(*){font-weight:var(--_nys-alert-font-weight--regular);margin:0}.nys-alert--centered{display:flex;align-items:center}.nys-alert--centered .nys-alert__header{margin-bottom:-3px}.nys-alert--centered div[part=nys-alert__icon]{margin-top:0;display:flex;align-items:center;justify-content:center}.nys-alert__actions{display:flex;gap:var(--_nys-alert-gap--actions);flex-wrap:wrap}#dismiss-btn{margin-top:-8px}:host([type=info]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-info, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-info-weak, var(--nys-color-blue-50, #e5effa)) )}:host([type=success]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-success, var(--nys-color-green-600, #1e752e)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-success-weak, var(--nys-color-green-50, #e8f1ea)) )}:host([type=warning]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-warning, var(--nys-color-yellow-400, #face00)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-warning-weak, var(--nys-color-yellow-50, #fefae5)) )}:host([type=danger]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-danger, var(--nys-color-red-600, #b52c2c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-danger-weak, var(--nys-color-red-50, #f7eaea)) )}:host([type=emergency]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text-reverse, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) )}:host([type=emergency]) a:hover{text-decoration-thickness:2px}:host([type=emergency]) a:active{text-decoration-thickness:3px}';
var or = Object.defineProperty, Y = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && or(e, t, o), o;
};
let rr = 0;
const Ot = class Ot extends b {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.icon = "", this.dismissible = !1, this.duration = 0, this.text = "", this.primaryAction = "", this.secondaryAction = "", this.primaryLabel = "Learn more", this.secondaryLabel = "Dismiss", this.type = "base", this._alertClosed = !1, this._slotHasContent = !0, this._timeoutId = null;
  }
  /**
   * Returns ARIA role and label based on alert type.
   * - 'alert' => assertive live region (implied)
   * - 'status' => polite live region
   * - 'region' => generic, requires aria-label
   */
  get ariaAttributes() {
    const e = this.type === "danger" || this.type === "emergency" ? "alert" : this.type === "success" ? "status" : "region", t = e === "region" ? `${this.type} alert` : "";
    return { role: e, ariaLabel: t };
  }
  /**
   * Returns live-region type for screen readers if applicable.
   * - 'polite' for status role
   * - undefined for alert (since it's implicitly assertive) or region
   */
  get liveRegion() {
    if (this.ariaAttributes.role === "status") return "polite";
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId()), this.duration > 0 && (this._timeoutId = setTimeout(() => {
      this._closeAlert();
    }, this.duration));
  }
  disconnectedCallback() {
    this._timeoutId && clearTimeout(this._timeoutId), super.disconnectedCallback();
  }
  firstUpdated() {
    this._checkSlotContent();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-alert-${Date.now()}-${rr++}`;
  }
  _resolveIconName() {
    return this.icon || this._checkAltNaming();
  }
  _checkAltNaming() {
    return this.type === "success" ? "check_circle" : this.type === "base" ? "info" : this.type === "danger" ? "error" : this.type === "emergency" ? "emergency_home" : this.type;
  }
  _closeAlert() {
    this._alertClosed = !0, this.dispatchEvent(
      new CustomEvent("nys-close", {
        detail: { id: this.id, type: this.type, label: this.heading },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Checks whether the default slot has content.
   * Updates `_slotHasContent` accordingly.
   */
  async _checkSlotContent() {
    const e = this.shadowRoot?.querySelector("slot");
    if (e) {
      const t = e.assignedNodes({ flatten: !0 }).filter(
        (r) => r.nodeType === Node.ELEMENT_NODE || r.nodeType === Node.TEXT_NODE && r.textContent?.trim()
      );
      await Promise.resolve(), this._slotHasContent = t.length > 0;
    } else
      await Promise.resolve(), this._slotHasContent = !1;
  }
  render() {
    const { role: e, ariaLabel: t } = this.ariaAttributes;
    return d`
      ${this._alertClosed ? "" : d` <div
            class="nys-alert__container ${this._slotHasContent || this.text?.trim().length > 0 ? "" : "nys-alert--centered"}"
            aria-label=${p(
      t.trim() !== "" ? t : void 0
    )}
          >
            <div part="nys-alert__icon" class="nys-alert__icon">
              <nys-icon
                name="${this._resolveIconName()}"
                size="3xl"
                label="${this.type} icon"
              ></nys-icon>
            </div>
            <div
              class="nys-alert__texts"
              role=${e}
              aria-live=${p(this.liveRegion)}
            >
              <p class="nys-alert__header">${this.heading}</p>
              ${this._slotHasContent ? d`<slot></slot>` : this.text?.trim().length > 0 ? d`<p class="nys-alert__text">${this.text}</p>` : ""}
              ${this.primaryAction || this.secondaryAction ? d`<div class="nys-alert__actions">
                    ${this.primaryAction ? d`<a
                          href=${p(this.primaryAction || void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>` : ""}
                    ${this.secondaryAction ? d`<a
                          href=${p(this.secondaryAction || void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>` : ""}
                  </div> ` : ""}
            </div>
            ${this.dismissible ? d` <nys-button
                  id="dismiss-btn"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ?inverted=${this.type === "emergency"}
                  ariaLabel="${this.heading}, alert, Close"
                  @nys-click=${this._closeAlert}
                  style=${p(
      this.type === "emergency" ? "--_nys-button-outline-color: var(--nys-color-ink-reverse, var(--nys-color-white, #fff));" : void 0
    )}
                ></nys-button>` : ""}
          </div>`}
    `;
  }
};
Ot.styles = g(tr);
let R = Ot;
Y([
  a({ type: String, reflect: !0 })
], R.prototype, "id");
Y([
  a({ type: String })
], R.prototype, "heading");
Y([
  a({ type: String })
], R.prototype, "icon");
Y([
  a({ type: Boolean, reflect: !0 })
], R.prototype, "dismissible");
Y([
  a({ type: Number, reflect: !0 })
], R.prototype, "duration");
Y([
  a({ type: String })
], R.prototype, "text");
Y([
  a({ type: String })
], R.prototype, "primaryAction");
Y([
  a({ type: String })
], R.prototype, "secondaryAction");
Y([
  a({ type: String })
], R.prototype, "primaryLabel");
Y([
  a({ type: String })
], R.prototype, "secondaryLabel");
Y([
  a({ type: String, reflect: !0 })
], R.prototype, "type");
Y([
  x()
], R.prototype, "_alertClosed");
Y([
  x()
], R.prototype, "_slotHasContent");
customElements.get("nys-alert") || customElements.define("nys-alert", R);
const sr = ":host{--_nys-avatar-border-radius: var(--nys-radius-round, 1776px);--_nys-avatar-size: var(--nys-avatar-size, var(--nys-font-size-6xl, 36px));--_nys-avatar-shape: var(--nys-radius-round, 1776px);--_nys-avatar-border-color: var(--nys-color-ink-reverse, #ffffff);--_nys-avatar-border-size: var(--nys-border-width-sm, 1px);--_nys-avatar-width: var(--nys-font-size-6xl, 36px);--_nys-avatar-color: var(--nys-color-theme, #154973);--_nys-avatar-background-color: var(--nys-color-theme-weaker, #eff6fb);--_nys-avatar-outline-color: var(--nys-color-focus, #004dd1);--_nys-avatar-outline-width: var(--nys-border-width-md, 2px);--_nys-avatar-outline-offset: var(--nys-space-2px, 2px)}.nys-avatar{display:inline-block}.nys-avatar__component{display:flex;justify-content:center;align-items:center;border-radius:var(--_nys-avatar-border-radius);width:var(--_nys-avatar-size);height:var(--_nys-avatar-size);font-size:var(--_nys-avatar-size);overflow:hidden;box-sizing:border-box;color:var(--_nys-avatar-color);background-color:var(--_nys-avatar-background-color);border:var(--_nys-avatar-border-size) solid var(--_nys-avatar-border-color);outline-offset:var(--_nys-avatar-outline-offset);transition:all .15s ease-in-out;-webkit-user-select:none;user-select:none}:host([interactive]) .nys-avatar__component:hover,:host([interactive]) .nys-avatar__component:active{--_nys-avatar-color: var( --nys-color-text-reverse, --nys-color-ink-reverse, #ffffff );cursor:pointer}:host([interactive]) .nys-avatar__component:hover{--_nys-avatar-background-color: var(--nys-color-theme-mid, #457aa5)}:host([interactive]) .nys-avatar__component:active{--_nys-avatar-background-color: var(--nys-color-theme-strong, #0e324f)}:host([disabled]) .nys-avatar__component{--_nys-avatar-color: var(--nys-color-text-disabled, #bec0c1);--_nys-avatar-background-color: var(--nys-color-neutral-10, #f6f6f6);cursor:not-allowed}:host([disabled]) .nys-avatar__component:focus-within{outline:solid var(--_nys-avatar-outline-width) var(--_nys-avatar-outline-color)}div[part=nys-avatar__icon]{display:flex;align-items:center;justify-content:center}.nys-avatar__initials{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:calc(var(--_nys-avatar-width) * .5);font-weight:700;text-transform:uppercase}.nys-avatar__image{width:100%;height:100%;object-fit:cover}.nys-avatar__icon{width:100%;height:100%;fill:currentcolor}";
var nr = Object.defineProperty, re = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && nr(e, t, o), o;
};
let ir = 0;
const Ft = class Ft extends b {
  constructor() {
    super(...arguments), this.id = "", this.ariaLabel = "", this.image = "", this.initials = "", this.icon = "", this.color = "", this.interactive = !1, this.disabled = !1, this.lazy = !1, this._slotHasContent = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-avatar-${Date.now()}-${ir++}`);
  }
  async _handleSlotChange() {
    const e = this.shadowRoot?.querySelector("slot");
    if (!e) {
      this._slotHasContent = !1;
      return;
    }
    await Promise.resolve();
    const t = e.assignedNodes({ flatten: !0 }).filter(
      (r) => r.nodeType === Node.ELEMENT_NODE || r.nodeType === Node.TEXT_NODE && r.textContent?.trim()
    );
    this._slotHasContent = t.length > 0;
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  /**
   * Computes the appropriate foreground color (icon or initials)
   * based on the avatar's background color for sufficient contrast.
   *
   * @returns CSS color string for foreground
   */
  getContrastForeground() {
    const e = "var(--nys-color-ink, #000)", t = "var(--nys-color-ink-reverse, #fff)", r = "var(--nys-color-text, #000)", o = "var(--nys-color-text-reverse, #fff)";
    if (!this.color) return;
    const n = document.createElement("div");
    n.style.color = this.color, document.body.appendChild(n);
    const i = getComputedStyle(n).color;
    document.body.removeChild(n);
    const l = i.match(/\d+/g);
    if (!l) return;
    const c = Number(l[0]), h = Number(l[1]), u = Number(l[2]), f = (0.299 * c + 0.587 * h + 0.114 * u) / 255 < 0.5;
    return this.initials?.length > 0 ? f ? o : r : f ? t : e;
  }
  render() {
    return d`
      <div class="nys-avatar">
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-avatar__component"
            style=${this.color ? `--_nys-avatar-background-color: ${this.color}; color: ${this.getContrastForeground()}` : ""}
            role=${p(
      this.interactive ? "button" : this.image ? void 0 : "img"
    )}
            aria-label=${p(
      this.image ? void 0 : this.ariaLabel ? this.ariaLabel : "avatar"
    )}
            tabindex=${p(
      this.interactive && !this.disabled ? 0 : void 0
    )}
          >
            ${this.image?.length > 0 ? d`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.ariaLabel || "avatar"}
                  loading=${this.lazy ? "lazy" : "eager"}
                />` : this.initials?.length > 0 ? d`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >` : d`<div part="nys-avatar__icon">
                    <slot @slotchange=${this._handleSlotChange}></slot>
                    ${this._slotHasContent ? null : d`<nys-icon
                          label="nys-avatar__icon"
                          name=${this.icon?.length > 0 ? this.icon : "account_circle"}
                        ></nys-icon>`}
                  </div>`}
          </div>
        </div>
      </div>
    `;
  }
};
Ft.styles = g(sr);
let W = Ft;
re([
  a({ type: String, reflect: !0 })
], W.prototype, "id");
re([
  a({ type: String })
], W.prototype, "ariaLabel");
re([
  a({ type: String })
], W.prototype, "image");
re([
  a({ type: String })
], W.prototype, "initials");
re([
  a({ type: String })
], W.prototype, "icon");
re([
  a({ type: String })
], W.prototype, "color");
re([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "interactive");
re([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "disabled");
re([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "lazy");
re([
  x()
], W.prototype, "_slotHasContent");
customElements.get("nys-avatar") || customElements.define("nys-avatar", W);
const ar = ".nys-backtotop{--_nys-button-border-radius--start: var(--nys-radius-round, 1776px);--_nys-button-border-radius--end: var(--nys-radius-round, 1776px);--_nys-button-padding--y: var(--nys-space-100, 8px);--_nys-button-padding--x: var(--nys-space-200, 16px);position:fixed;bottom:1rem;right:1rem;z-index:9999;display:none}.left{left:1rem;right:auto}.visible{display:inline-flex}";
var lr = Object.defineProperty, gt = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && lr(e, t, o), o;
};
const Vt = class Vt extends b {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.position = "right", this.visible = !1, this.isMobile = !1, this.forceVisible = !1, this._handleScroll = this._handleScroll.bind(this), this._handleResize = this._handleResize.bind(this), this.mediaQuery = window.matchMedia("(max-width: 480px)");
  }
  connectedCallback() {
    super.connectedCallback(), this.forceVisible = this.hasAttribute("visible"), window.addEventListener("scroll", this._handleScroll), this.mediaQuery.addEventListener("change", this._handleResize), this._handleResize();
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", this._handleScroll), this.mediaQuery.removeEventListener("change", this._handleResize), super.disconnectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _handleScroll() {
    if (this.forceVisible) return;
    const e = window.innerHeight, t = document.documentElement.scrollHeight;
    this.visible = t >= e * 4 && window.scrollY > e * 1.5;
  }
  _scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  _handleResize() {
    this.isMobile = this.mediaQuery.matches;
  }
  render() {
    const e = [
      "nys-backtotop",
      this.position,
      this.visible ? "visible" : ""
    ].filter(Boolean).join(" ");
    return d`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back to top"
      size="sm"
      class="${e}"
      ?circle=${this.isMobile}
      @nys-click=${this._scrollToTop}
    ></nys-button>`;
  }
};
Vt.styles = g(ar);
let ke = Vt;
gt([
  a({ type: String })
], ke.prototype, "position");
gt([
  a({ type: Boolean, reflect: !0 })
], ke.prototype, "visible");
gt([
  x()
], ke.prototype, "isMobile");
gt([
  x()
], ke.prototype, "forceVisible");
customElements.get("nys-backtotop") || customElements.define("nys-backtotop", ke);
const cr = ':host{--_nys-button-width: fit-content;--_nys-button-height: var(--nys-size-600, 48px);--_nys-button-border-radius--start: var(--nys-radius-xl, 12px);--_nys-button-border-radius--end: var(--nys-radius-xl, 12px);--_nys-button-padding--y: calc(var(--nys-space-150, 12px) - var(--nys-border-width-md, 2px));--_nys-button-padding--x: calc(var(--nys-space-250, 20px) - var(--nys-border-width-md, 2px));--_nys-button-gap: var(--nys-space-100, 8px);--_nys-button-justify-content: center;--_nys-button-border-width: var(--nys-border-width-md, 2px);--_nys-button-outline-width: var(--nys-border-width-md, 2px);--_nys-button-outline-offset: var(--nys-space-2px, 2px);--_nys-button-outline-color: var(--nys-color-focus, #004dd1);--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-theme, #154973));--_nys-button-color: var(--nys-button-color, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-theme, #154973));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-theme-strong, #0e324f));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-theme-stronger, #081b2b));--_nys-button-background-color--disabled: var(--nys-color-neutral-10, #f6f6f6);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-neutral-10, #f6f6f6);--_nys-button-font-size: var(--nys-font-size-ui-md, 16px);--_nys-button-font-weight: var(--nys-font-weight-semibold, 600);--_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-button-font-family: var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif));display:inline-flex;width:fit-content}:host([size=sm]){--_nys-button-height: var(--nys-size-500, 40px);--_nys-button-padding--y: calc(var(--nys-space-100, 8px) - var(--nys-border-width-md, 2px));--_nys-button-padding--x: calc(var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px))}:host([size=md]){--_nys-button-height: var(--nys-size-600, 48px);--_nys-button-padding--y: calc(var(--nys-space-150, 12px) - var(--nys-border-width-md, 2px));--_nys-button-padding--x: calc(var(--nys-space-250, 20px) - var(--nys-border-width-md, 2px))}:host([size=lg]){--_nys-button-height: var(--nys-size-700, 56px);--_nys-button-padding--y: calc(var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px));--_nys-button-padding--x: calc(var(--nys-space-300, 24px) - var(--nys-border-width-md, 2px))}:host([fullWidth]){width:100%}:host([fullWidth]) .nys-button{width:100%}:host([variant=filled]){--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-theme, #154973));--_nys-button-color: var(--nys-button-color, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-text-reverse, #ffffff));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-text-reverse, #ffffff));--_nys-button-background-color--disabled: var(--nys-color-neutral-10, #f6f6f6);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1)}:host([variant=outline]){--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-surface, #ffffff));--_nys-button-color: var(--nys-button-color, var(--nys-color-theme, #154973));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-theme, #154973));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-theme-weaker, #eff6fb));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-theme, #154973));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-theme, #154973));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-theme-weak, #cddde9));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-theme, #154973));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-theme, #154973));--_nys-button-background-color--disabled: var(--nys-color-surface, #ffffff);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-neutral-100, #d0d0ce)}:host([variant=text]){--_nys-button-height: fit-content;--_nys-button-border-radius--start: var(--nys-radius-md, 4px);--_nys-button-border-radius--end: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-transparent, #ffffff00));--_nys-button-color: var(--nys-button-color, var(--nys-color-link, #004dd1));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-link-strong, #003ba1));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-transparent, #ffffff00));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-link-strongest, #002971));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost]){--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-transparent, #ffffff00));--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-black-transparent-100, #0000001a));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-text, #1b1b1b));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-black-transparent-200, #00000033));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-text, #1b1b1b));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=filled][inverted]){--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-surface, #ffffff));--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-neutral-100, #d0d0ce));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-text, #1b1b1b));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-neutral-300, #a7a9ab));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-text, #1b1b1b));--_nys-button-background-color--disabled: var(--nys-color-text, #1b1b1b);--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a)}:host([variant=outline][inverted]){--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-surface-reverse, #1b1b1b));--_nys-button-color: var(--nys-button-color, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-ink-reverse, #ffffff));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-surface-reverse, #1b1b1b));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-text-reverse-weak, #d0d0ce));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-neutral-100, #d0d0ce));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-surface-reverse, #1b1b1b));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-text-reverse-weaker, #bec0c1));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-neutral-300, #a7a9ab));--_nys-button-background-color--disabled: var(--nys-color-surface-reverse, #1b1b1b);--_nys-button-color--disabled: var(--nys-color-text-reverse-disabled, #62666a);--_nys-button-border-color--disabled: var(--nys-color-neutral-600, #62666a)}:host([variant=text][inverted]){--_nys-button-height: fit-content;--_nys-button-border-radius--start: var(--nys-radius-md, 4px);--_nys-button-border-radius--end: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-transparent, #ffffff00));--_nys-button-color: var(--nys-button-color, var(--nys-color-link-reverse, #a7a9ab));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-link-reverse-strong, #ededed));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-transparent, #ffffff00));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-reverse-strongest, #ffffff));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-color--disabled: var(--nys-color-text-reverse-disabled, #62666a);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost][inverted]){--_nys-button-background-color: var(--nys-button-background-color, var(--nys-color-transparent, #ffffff00));--_nys-button-color: var(--nys-button-color, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color: var(--nys-button-border-color, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--hover: var(--nys-button-background-color--hover, var(--nys-color-white-transparent-200, #ffffff33));--_nys-button-color--hover: var(--nys-button-color--hover, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color--hover: var(--nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--active: var(--nys-button-background-color--active, var(--nys-color-white-transparent-300, #ffffff4d));--_nys-button-color--active: var(--nys-button-color--active, var(--nys-color-text-reverse, #ffffff));--_nys-button-border-color--active: var(--nys-button-border-color--active, var(--nys-color-transparent, #ffffff00));--_nys-button-background-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([circle]){--_nys-button-width: var(--_nys-button-height);--_nys-button-border-radius--start: var(--nys-radius-round, 1776px);--_nys-button-border-radius--end: var(--nys-radius-round, 1776px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}.nys-button{width:var(--_nys-button-width);min-height:var(--_nys-button-height);border-start-start-radius:var(--_nys-button-border-radius--start);border-end-start-radius:var(--_nys-button-border-radius--start);border-start-end-radius:var(--_nys-button-border-radius--end);border-end-end-radius:var(--_nys-button-border-radius--end);padding:var(--_nys-button-padding--y) var(--_nys-button-padding--x);display:flex;align-items:center;justify-content:var(--_nys-button-justify-content);gap:var(--_nys-button-gap);font-family:var(--_nys-button-font-family);font-size:var(--_nys-button-font-size);font-weight:var(--_nys-button-font-weight);line-height:var(--_nys-button-line-height);text-decoration:var(--_nys-button-text-decoration);box-sizing:border-box;background-color:var(--_nys-button-background-color);color:var(--_nys-button-color);border:solid var(--_nys-button-border-width) var(--_nys-button-border-color);cursor:var(--_nys-button-cursor, pointer)}:host([circle]) .nys-button{max-width:var(--_nys-button-height);max-height:var(--_nys-button-height)}.nys-button:hover{background-color:var(--_nys-button-background-color--hover);color:var(--_nys-button-color--hover);border-color:var(--_nys-button-border-color--hover)}.nys-button:active{background-color:var(--_nys-button-background-color--active);color:var(--_nys-button-color--active);border-color:var(--_nys-button-border-color--active)}.nys-button:disabled,a[disabled]{background-color:var(--_nys-button-background-color--disabled);color:var(--_nys-button-color--disabled);border-color:var(--_nys-button-border-color--disabled);cursor:not-allowed}.nys-button__linkwrapper:has([disabled]){cursor:not-allowed;width:fit-content}a[disabled]{pointer-events:none}a[disabled]:hover{background-color:var(--_nys-button-background-color--disabled);color:var(--_nys-button-color--disabled);border-color:var(--_nys-button-border-color--disabled)}.nys-button *{cursor:var(--_nys-button-cursor, pointer)}.nys-button:disabled *{cursor:not-allowed}.nys-button:focus-visible{outline-offset:var(--_nys-button-outline-offset);outline:solid var(--_nys-button-outline-width) var(--_nys-button-outline-color)}.nys-button__text{display:flex;align-items:center;-webkit-user-select:none;user-select:none}';
var dr = Object.defineProperty, S = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && dr(e, t, o), o;
};
let hr = 0;
const it = class it extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.size = "md", this.fullWidth = !1, this.variant = "filled", this.inverted = !1, this.label = "", this.ariaLabel = "", this.ariaControls = "", this.prefixIcon = "", this.suffixIcon = "", this.circle = !1, this.icon = "", this.disabled = !1, this.form = null, this.value = "", this.ariaDescription = "", this.type = "button", this.onClick = null, this.href = "", this.target = "_self", this._internals = this.attachInternals();
  }
  async getButtonElement() {
    await this.updateComplete;
    const e = this.shadowRoot?.querySelector("a.nys-button") || null;
    if (e) return e;
    const t = this.shadowRoot?.querySelector("button.nys-button") || null;
    return t || null;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-button-${Date.now()}-${hr++}`;
  }
  _manageFormAction() {
    typeof this.onClick == "function" && this.onClick !== null && this.onClick(new Event("click"));
    const e = this._internals.form;
    if (e)
      switch (this.type) {
        case "submit":
          e.requestSubmit();
          break;
        case "reset":
          e.reset();
          break;
      }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  _handleBlur() {
    this.shadowRoot?.querySelector(".nys-button")?.classList.remove("active-focus"), this.dispatchEvent(new Event("nys-blur"));
  }
  _handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this._manageFormAction(), this.dispatchEvent(new Event("nys-click"));
  }
  _handleKeydown(e) {
    if (e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Enter") {
      if (this.disabled) return;
      if (e.preventDefault(), this.href) {
        const t = this.renderRoot.querySelector(
          "a.nys-button"
        );
        t && t.click();
      } else
        this._handleAnyAttributeFunction(), this._handleClick(e);
    }
  }
  /**
   * Vanilla JS & Native HTML keydown solution:
   * The <nys-button onClick="doFunction();"></nys-button> onClick is an attribute here.
   * Thus, we call it here. Otherwise, at this point, this.onClick is null as it isn't props, but a string attribute
   * In vanilla HTML/JS, clicking with execute the attribute function, BUT now with keydown, hence this solution.
   */
  _handleAnyAttributeFunction() {
    const e = this.getAttribute("onClick");
    e && new Function("return " + e)();
  }
  // Public Methods
  focus(e) {
    const t = this.renderRoot.querySelector(
      this.href ? "a.nys-button" : "button.nys-button"
    );
    t ? t.focus(e) : super.focus(e);
  }
  render() {
    return d`
      ${this.href ? d`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                name=${p(this.name ? this.name : void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled ? "true" : "false"}"
                value=${p(this.value ? this.value : void 0)}
                href=${this.href}
                target=${this.target}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                tabindex="${this.disabled ? -1 : 0}"
                aria-label=${p(
      this.ariaLabel || this.label || (this.circle ? this.icon : null) || "button"
    )}
                aria-description=${p(this.ariaDescription || void 0)}
              >
                ${this.prefixIcon && this.variant !== "text" ? d`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>` : ""}
                ${this.label && !this.circle ? d`<div class="nys-button__text">${this.label}</div>` : ""}
                ${this.suffixIcon && this.variant !== "text" ? d`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>` : ""}
                ${this.circle && this.icon ? d`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>` : ""}
              </a>
            </div>
          ` : d`
            <button
              class="nys-button"
              name=${p(this.name ? this.name : void 0)}
              ?disabled=${this.disabled}
              form=${p(this.form || void 0)}
              value=${p(this.value ? this.value : void 0)}
              type=${this.type}
              aria-controls=${p(this.ariaControls || void 0)}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
              tabindex="${this.disabled ? -1 : 0}"
              aria-label=${p(
      this.ariaLabel || this.label || (this.circle ? this.icon : null) || this.prefixIcon || this.suffixIcon || "button"
    )}
              aria-description=${p(this.ariaDescription || void 0)}
              role="button"
            >
              ${this.prefixIcon && this.variant !== "text" ? d`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>` : ""}
              ${this.label && !this.circle ? d`<div class="nys-button__text">${this.label}</div>` : ""}
              ${this.suffixIcon && this.variant !== "text" ? d`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>` : ""}
              ${this.circle && this.icon ? d`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>` : ""}
            </button>
          `}
    `;
  }
};
it.styles = g(cr), it.formAssociated = !0;
let m = it;
S([
  a({ type: String, reflect: !0 })
], m.prototype, "id");
S([
  a({ type: String, reflect: !0 })
], m.prototype, "name");
S([
  a({ type: String, reflect: !0 })
], m.prototype, "size");
S([
  a({ type: Boolean, reflect: !0 })
], m.prototype, "fullWidth");
S([
  a({ type: String, reflect: !0 })
], m.prototype, "variant");
S([
  a({ type: Boolean, reflect: !0 })
], m.prototype, "inverted");
S([
  a({ type: String })
], m.prototype, "label");
S([
  a({ type: String })
], m.prototype, "ariaLabel");
S([
  a({ type: String })
], m.prototype, "ariaControls");
S([
  a({ type: String })
], m.prototype, "prefixIcon");
S([
  a({ type: String })
], m.prototype, "suffixIcon");
S([
  a({ type: Boolean, reflect: !0 })
], m.prototype, "circle");
S([
  a({ type: String })
], m.prototype, "icon");
S([
  a({ type: Boolean, reflect: !0 })
], m.prototype, "disabled");
S([
  a({ type: String, reflect: !0 })
], m.prototype, "form");
S([
  a({ type: String })
], m.prototype, "value");
S([
  a({ type: String })
], m.prototype, "ariaDescription");
S([
  a({ type: String, reflect: !0 })
], m.prototype, "type");
S([
  a({ attribute: !1 })
], m.prototype, "onClick");
S([
  a({ type: String })
], m.prototype, "href");
S([
  a({ type: String, reflect: !0 })
], m.prototype, "target");
customElements.get("nys-button") || customElements.define("nys-button", m);
const ur = ':host{--_nys-badge-width: fit-content;--_nys-badge-height: var(--nys-size-600, 48px);--_nys-badge-radius: var(--nys-radius-round, 1776px);--_nys-badge-padding: var(--nys-space-2-px, 2px) var(--nys-space-100, 8px);--_nys-badge-gap: var(--nys-space-50, 4px);--_nys-badge-color: var(--nys-color-ink, #000000);--_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);--_nys-badge-border-color: var(--nys-color-base, #62666a);--_nys-badge-border-width: var(--nys-border-width-sm, 1px);--_nys-badge-font-size: var(--nys-font-size-ui-sm, 14px);--_nys-badge-font-weight: var(--nys-font-weight-semibold, 600);--_nys-badge-line-height: var(--nys-font-lineheight-ui-sm, 24px);--_nys-badge-font-family: var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif));--_nys-badge-prefix-font-weight: var(--nys-font-weight-regular, 400)}:host([size=sm]){--_nys-badge-font-size: var(--nys-font-size-ui-xs, 12px);--_nys-badge-line-height: var(--nys-font-lineheight-ui-xs, 20px)}:host([intent=neutral]){--_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);--_nys-badge-border-color: var(--nys-color-base, #62666a)}:host([intent=error]){--_nys-badge-background-color: var(--nys-color-error-weak, #f7eaea);--_nys-badge-border-color: var(--nys-color-error-strong, #721c1c)}:host([intent=success]){--_nys-badge-background-color: var(--nys-color-success-weak, #e8f1ea);--_nys-badge-border-color: var(--nys-color-success-strong, #0f3d18)}:host([intent=warning]){--_nys-badge-background-color: var(--nys-color-warning-weak, #fefae5);--_nys-badge-border-color: var(--nys-color-warning-strong, #6a5700)}:host([variant=strong]){--_nys-badge-background-color: var(--_nys-badge-border-color);--_nys-badge-color: var(--nys-color-white, #ffffff)}:host([variant=strong]) .nys-badge{--nys-icon-color: var(--nys-color-white, #ffffff)}:host([variant=strong][intent=success]){--_nys-badge-border-color: var(--nys-color-success, #1E752E)}:host([variant=strong][intent=warning]){--_nys-badge-border-color: var(--nys-color-warning, #FACE00);--_nys-badge-color: var(--nys-color-ink, #000000)}:host([variant=strong][intent=warning]) .nys-badge{--nys-icon-color: var(--nys-color-ink, #000000)}.nys-badge{display:flex;width:fit-content;align-items:center;justify-content:center;gap:var(--_nys-badge-gap);padding:var(--_nys-badge-padding);border:var(--_nys-badge-border-width) solid var(--_nys-badge-border-color);background-color:var(--_nys-badge-background-color);color:var(--_nys-badge-color);border-radius:var(--_nys-badge-radius);font-family:var(--_nys-badge-font-family);font-size:var(--_nys-badge-font-size);font-weight:var(--_nys-badge-font-weight);line-height:var(--_nys-badge-line-height);cursor:default;--nys-icon-color: var(--_nys-badge-border-color)}.nys-badge__prefix{font-weight:var(--_nys-badge-prefix-font-weight)}';
var yr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, le = (s, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? pr(e, t) : e, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = (r ? i(e, t, o) : i(o)) || o);
  return r && o && yr(e, t, o), o;
};
let fr = 0;
var he;
const se = (he = class extends b {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.size = "md", this.intent = "neutral", this.prefixLabel = "", this.label = "", this.variant = "", this._prefixIcon = "", this._suffixIcon = "";
  }
  get prefixIcon() {
    return this._prefixIcon;
  }
  set prefixIcon(e) {
    e === "" || e === null ? this._prefixIcon = !0 : e === "false" || e === !1 ? this._prefixIcon = "" : this._prefixIcon = e;
  }
  get suffixIcon() {
    return this._suffixIcon;
  }
  set suffixIcon(e) {
    e === "" || e === null ? this._suffixIcon = !0 : e === "false" || e === !1 ? this._suffixIcon = "" : this._suffixIcon = e;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-badge-${Date.now()}-${fr++}`);
    const e = this.getAttribute("prefixicon");
    e !== null && this.prefixIcon === "" && (this.prefixIcon = e);
    const t = this.getAttribute("suffixicon");
    t !== null && this.suffixIcon === "" && (this.suffixIcon = t);
  }
  /**
   * Resolves which icon should be rendered.
   * @param icon The icon property value (string or boolean)
   * @returns Icon name or null if no icon should be rendered
   */
  resolveIcon(e) {
    return e === !0 ? he.DEFAULT_ICONS[this.intent] ?? "info" : typeof e == "string" && e.trim() !== "" ? e : null;
  }
  render() {
    const e = this.resolveIcon(this.prefixIcon), t = this.resolveIcon(this.suffixIcon);
    return d`
      <div class="nys-badge">
        ${e ? d`<nys-icon size="16" name=${e}></nys-icon>` : ""}
        ${this.prefixLabel ? d`<div class="nys-badge__prefix">${this.prefixLabel}</div>` : ""}
        <div class="nys-badge__label">${this.label}</div>
        ${t ? d`<nys-icon size="16" name=${t}></nys-icon>` : ""}
      </div>
    `;
  }
}, he.styles = g(ur), he.DEFAULT_ICONS = {
  neutral: "info",
  error: "emergency_home",
  success: "check_circle",
  warning: "warning"
}, he);
le([
  a({ type: String, reflect: !0 })
], se.prototype, "id", 2);
le([
  a({ type: String, reflect: !0 })
], se.prototype, "name", 2);
le([
  a({ type: String, reflect: !0 })
], se.prototype, "size", 2);
le([
  a({ type: String, reflect: !0 })
], se.prototype, "intent", 2);
le([
  a({ type: String })
], se.prototype, "prefixLabel", 2);
le([
  a({ type: String })
], se.prototype, "label", 2);
le([
  a({ type: String, reflect: !0 })
], se.prototype, "variant", 2);
le([
  a({ type: String, attribute: "prefixicon" })
], se.prototype, "prefixIcon", 1);
le([
  a({ type: String, attribute: "suffixicon" })
], se.prototype, "suffixIcon", 1);
let vr = se;
customElements.get("nys-badge") || customElements.define("nys-badge", vr);
const ko = ':host{--_nys-checkbox-size: var(--nys-size-400, 32px);--_nys-checkbox-border-radius: var(--nys-radius-md, 4px);--_nys-checkbox-border-width: var(--nys-border-width-md, 2px);--_nys-checkbox-outline-color: var(--nys-color-focus, #004dd1);--_nys-checkbox-outline-width: var(--nys-border-width-md, 2px);--_nys-checkbox-outline-offset: var(--nys-space-2px, 2px);--_nys-checkbox-gap: var(--nys-space-150, 12px);--_nys-checkboxgroup-gap: var(--nys-space-200, 16px);--_nys-checkbox-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-checkbox-font-size: var(--nys-font-size-ui-md, 16px);--_nys-checkbox-font-weight: var(--nys-font-weight-regular, 400);--_nys-checkbox-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-checkbox-color: var( --nys-color-ink, var(--nys-color-neutral-900, #1b1b1b) );--_nys-checkbox-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-checkbox-border-color: var(--nys-color-neutral-600, #62666a);--_nys-checkbox-background-color--hover: var(--nys-color-neutral-50, #ededed);--_nys-checkbox-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-checkbox-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-checkbox-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-checkbox-background-color--checked: var(--nys-color-theme, #154973);--_nys-checkbox-border-color--checked: var(--nys-color-theme, #154973);--_nys-checkbox-background-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-checkbox-border-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-checkbox-background-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-checkbox-border-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-checkbox-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-checkbox-border-color--disabled: var(--nys-color-neutral-400, #757575);--_nys-checkbox-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-checkbox-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-checkbox-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([size=sm]){--_nys-checkbox-size: var(--nys-size-300, 24px);--_nys-checkbox-border-radius: var(--nys-radius-sm, 2px);--_nys-checkboxgroup-gap: var(--nys-space-100, 8px);--_nys-checkbox-gap: var(--nys-space-100, 8px)}:host([size=md]){--_nys-checkbox-size: var(--nys-size-400, 32px);--_nys-checkbox-border-radius: var(--nys-radius-md, 4px)}:host([tile]){--_nys-checkbox-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-checkbox-border-radius--tile: var(--nys-radius-md, 4px);--_nys-checkbox-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-checkbox-background-color--tile: var(--nys-color-ink-reverse, #ffffff);--_nys-checkbox-padding--x--tile: var(--nys-space-250, 20px);--_nys-checkbox-padding--y--tile: var(--nys-space-200, 16px);--_nys-checkbox-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-checkbox-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-checkbox-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-checkbox-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-checkbox-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-checkbox-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-checkbox-background-color--tile--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-checkbox-border-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([tile][size=sm]){--_nys-checkbox-padding--x--tile: var(--nys-space-200, 16px);--_nys-checkbox-padding--y--tile: var(--nys-space-150, 12px)}:host([tile][showError]){--_nys-checkbox-border-color--tile: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--hover: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--active: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--checked: var(--nys-color-danger, #b52c2c)}#single-error-message{--_nys-errormessage-margin-top: var(--nys-space-50, 4px)}.nys-checkboxgroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-checkbox-font-family);font-size:var(--_nys-checkbox-font-size);line-height:var(--_nys-checkbox-line-height)}.nys-checkboxgroup__content{display:flex;flex-direction:column;gap:var(--_nys-checkboxgroup-gap)}.nys-checkbox{display:flex;flex-direction:column;border-radius:var(--_nys-checkbox-border-radius--tile);border:var(--_nys-checkbox-border-width--tile) solid var(--_nys-checkbox-border-color--tile);background:var(--_nys-checkbox-background-color--tile);padding:var(--_nys-checkbox-padding--y--tile) var(--_nys-checkbox-padding--x--tile)}.nys-checkbox .nys-checkbox__main-container{display:flex;font-family:var(--_nys-checkbox-font-family);font-size:var(--_nys-checkbox-font-size);line-height:var(--_nys-checkbox-line-height);align-items:center;gap:var(--_nys-checkbox-gap)}.nys-checkbox .nys-checkbox__main-container.has-description{align-items:flex-start}.nys-checkbox__checkbox-wrapper{position:relative;display:flex;justify-content:center;align-items:center;max-height:var(--_nys-checkbox-size)}.nys-checkbox__icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;color:var(--nys-color-ink-reverse, #ffffff)}.nys-checkbox__checkbox{appearance:none;background-repeat:no-repeat;background-position:center;width:var(--_nys-checkbox-size);min-width:var(--_nys-checkbox-size);min-height:var(--_nys-checkbox-size);height:var(--_nys-checkbox-size);max-width:var(--_nys-checkbox-size);max-height:var(--_nys-checkbox-size);border:solid var(--_nys-checkbox-border-width) var(--_nys-checkbox-border-color);background-color:var(--_nys-checkbox-background-color);border-radius:var(--_nys-checkbox-border-radius);outline-offset:var(--_nys-checkbox-outline-offset);outline:none;margin:0}.nys-checkbox:hover,.nys-checkbox:hover *{cursor:pointer}.nys-checkbox__checkbox:not(:disabled):checked{background-color:var(--_nys-checkbox-background-color--checked);border-color:var(--_nys-checkbox-border-color--checked)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:not(:disabled):checked){border-color:var(--_nys-checkbox-border-color--tile--checked);background-color:var(--_nys-checkbox-background-color--tile--checked)}.nys-checkbox__checkbox:disabled:checked{background-color:var(--_nys-checkbox-background-color--checked--disabled);border-color:var(--_nys-checkbox-border-color--checked--disabled)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled:checked){border-color:var(--_nys-checkbox-border-color--tile--disabled);background-color:var(--_nys-checkbox-background-color--tile--disabled)}.nys-checkbox__checkbox:disabled{background-color:var(--_nys-checkbox-background-color--disabled);border-color:var(--_nys-checkbox-border-color--disabled);cursor:not-allowed}.nys-checkbox:has(.nys-checkbox__checkbox:disabled) *{color:var(--_nys-checkbox-color--disabled);cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-checkbox-color--disabled)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled){background-color:var(--_nys-checkbox-background-color--disabled);border-color:var(--_nys-checkbox-border-color--disabled);cursor:not-allowed}.nys-checkbox:hover .nys-checkbox__checkbox:not(:disabled):not(:checked),.nys-checkbox__checkbox:hover:not(:disabled):not(:checked){background-color:var(--_nys-checkbox-background-color--hover);border-color:var(--_nys-checkbox-border-color--hover)}:host([tile]) .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):not(:checked)){border-color:var(--_nys-checkbox-border-color--tile--hover);background-color:var(--_nys-checkbox-background-color--tile--hover);outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--hover)}.nys-checkbox:hover .nys-checkbox__checkbox:not(:disabled):checked,.nys-checkbox__checkbox:hover:not(:disabled):checked{border-color:var(--_nys-checkbox-border-color--checked--hover);background-color:var(--_nys-checkbox-background-color--checked--hover)}:host([tile]) .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):checked){outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--checked)}.nys-checkbox:active .nys-checkbox__checkbox:not(:disabled):not(:checked),.nys-checkbox__checkbox:active:not(:disabled):not(:checked){background-color:var(--_nys-checkbox-background-color--active);border-color:var(--_nys-checkbox-border-color--active)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:active:not(:disabled):not(:checked)){border-color:var(--_nys-checkbox-border-color--tile--active);background-color:var(--_nys-checkbox-background-color--tile--active);outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--active)}.nys-checkbox:active .nys-checkbox__checkbox:not(:disabled):checked,.nys-checkbox__checkbox:active:not(:disabled):checked{border-color:var(--_nys-checkbox-border-color--checked--active);background-color:var(--_nys-checkbox-background-color--checked--active)}:host(:not([tile])) .nys-checkbox__checkbox:focus-visible{outline:solid var(--_nys-checkbox-outline-width) var(--_nys-checkbox-outline-color)}:host([tile]) .nys-checkbox:has(*:focus-visible){outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-outline-color)!important;border-color:var(--_nys-checkbox-outline-color)!important}:host(:not([tile])) .nys-checkbox__main-container>nys-label{--_nys-label-font-weight: var(--_nys-checkbox-font-weight)}:host([tile]) .nys-checkbox__main-container>nys-label{--_nys-description-font-style: normal}.nys-checkbox__required{color:var(--nys-color-danger, #b52c2c)}.nys-checkbox__requiredwrapper{display:flex;gap:3px}fieldset{all:unset;display:contents}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}.nys-checkbox__other-container{display:flex;padding-inline-start:calc(var(--_nys-checkbox-size) + var(--_nys-checkbox-gap))}';
var br = Object.defineProperty, T = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && br(e, t, o), o;
};
let gr = 0;
const at = class at extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.tile = !1, this.tooltip = "", this.inverted = !1, this.form = null, this.size = "md", this._slottedDescriptionText = "", this._hasOtherError = !1, this._otherErrorCheckbox = null, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-checkboxgroup-${Date.now()}-${gr++}`), this.addEventListener("nys-change", this._handleCheckboxChange), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("nys-error", this._handleChildError), this.addEventListener("nys-error-clear", this._handleChildErrorClear);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("nys-change", this._handleCheckboxChange), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("nys-error", this._handleChildError), this.removeEventListener("nys-error-clear", this._handleChildErrorClear);
  }
  firstUpdated() {
    this._setGroupExist(), this._updateCheckboxSize(), this._updateCheckboxTile(), this._updateCheckboxShowError(), this._getSlotDescriptionForAria();
  }
  updated(e) {
    e.has("required") && this.required && this._setupCheckboxRequired(), e.has("size") && this._updateCheckboxSize(), e.has("tile") && this._updateCheckboxTile(), e.has("inverted") && this._updateCheckboxInvert(), e.has("showError") && this._updateCheckboxShowError(), e.has("form") && this._updateCheckboxForm();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _hasAtLeastOneChecked() {
    return Array.from(this.querySelectorAll("nys-checkbox")).some(
      (e) => e.checked
    );
  }
  _setGroupExist() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.groupExist = !0;
    });
  }
  // Initial update on checkbox required attribute
  async _setupCheckboxRequired() {
    const e = this.querySelector("nys-checkbox"), t = this.errorMessage || "This field is required", r = e ? await e.getInputElement() : null;
    this._internals.setValidity(
      { valueMissing: !0 },
      t,
      r || this
    );
  }
  // Updates the required attribute of each checkbox in the group
  async _manageRequire() {
    if (!this.required) return;
    const e = this.errorMessage || "You must make a selection to proceed.", t = Array.from(
      this.querySelectorAll("nys-checkbox")
    ), r = this._hasAtLeastOneChecked(), o = t ? await t[0].getInputElement().catch(() => null) : null;
    this._internals.setValidity({}), this.showError = !1, r ? this._hasOtherError && this._otherErrorCheckbox && (this._setCustomOtherError(), this.showError = !0) : this._hasOtherError ? (this._setCustomOtherError(), this.showError = !0) : (this._internals.setValidity(
      { valueMissing: !0 },
      e,
      o ?? this
    ), this.showError = !0);
  }
  _setCustomOtherError() {
    const t = this._otherErrorCheckbox?.shadowRoot?.querySelector("nys-textinput") || this._otherErrorCheckbox;
    this._internals.setValidity(
      { customError: !0 },
      "Please complete this field.",
      t
    );
  }
  // Updates the size of each checkbox in the group
  _updateCheckboxSize() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.setAttribute("size", this.size);
    });
  }
  _updateCheckboxTile() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.tile ? t.toggleAttribute("tile", !0) : t.removeAttribute("tile");
    });
  }
  _updateCheckboxInvert() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.inverted ? t.toggleAttribute("inverted", !0) : t.removeAttribute("inverted");
    });
  }
  _updateCheckboxShowError() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.showError ? t.setAttribute("showError", "") : t.removeAttribute("showError");
    });
  }
  _updateCheckboxForm() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.showError && this.form !== null ? t.setAttribute("form", this.form) : t.removeAttribute("form");
    });
  }
  // Get the slotted text contents so native VO can attempt to announce it within the legend in the fieldset
  _getSlotDescriptionForAria() {
    const t = this.shadowRoot?.querySelector(
      'slot[name="description"]'
    )?.assignedNodes({ flatten: !0 }) || [];
    this._slottedDescriptionText = t.map((r) => r.textContent?.trim()).filter(Boolean).join(", ");
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.formResetCallback();
    }), this._internals.setFormValue(""), this.showError = !1, this._internals.setValidity({}), this.requestUpdate();
  }
  async _handleInvalid(e) {
    if (e.preventDefault(), this._internals.validity.customError) {
      const r = Array.from(
        this.querySelectorAll("nys-checkbox")
      ).find(
        (o) => o.other && o.checked
      );
      if (r) {
        const o = r.shadowRoot?.querySelector("nys-textinput");
        if (o) {
          await o.updateComplete, o.focus();
          return;
        }
      }
    }
    if (this._internals.validity.valueMissing) {
      this.showError = !0, this._manageRequire();
      const t = this.querySelector("nys-checkbox"), r = t ? await t.getInputElement() : null;
      if (r) {
        const o = this._internals.form;
        o ? Array.from(o.elements).find((l) => {
          if (l.tagName.toLowerCase() === "nys-checkboxgroup") {
            if (Array.from(
              this.querySelectorAll("nys-checkbox")
            ).filter(
              (u) => u.checked
            ).length === 0)
              return l;
          } else
            return typeof l.checkValidity == "function" && !l.checkValidity();
        }) === this && r.focus() : r.focus();
      }
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Similar to how native forms handle multiple same-name fields, we group the selected values into a list for FormData.
  _handleCheckboxChange(e) {
    const t = e, { name: r } = t.detail, o = Array.from(
      this.querySelectorAll("nys-checkbox")
    ), n = o.filter((i) => i.checked).map((i) => i.value);
    this.name = r, this._internals.setFormValue(n.join(", ")), this._checkOtherInputs(o), this._hasOtherError || this._manageRequire();
  }
  async _handleChildError(e) {
    e.stopPropagation();
    const { sourceCheckbox: t } = e.detail;
    t && (this._hasOtherError = !0, this._otherErrorCheckbox = t, this.showError = !0, this._setCustomOtherError());
  }
  _handleChildErrorClear(e) {
    const r = e.detail?.sourceCheckbox;
    this._otherErrorCheckbox && r !== this._otherErrorCheckbox || (this._internals.setValidity({}), this.showError = !1, this.required && !this._hasAtLeastOneChecked() && this._manageRequire());
  }
  async _checkOtherInputs(e) {
    let t = !1;
    for (const r of e)
      if (r.checked && r.other) {
        const o = r.value.trim();
        if (!r._hasUserInteracted)
          continue;
        if (!o || o === "") {
          this._hasOtherError = !0, this._otherErrorCheckbox = r, this._setCustomOtherError(), this.showError = !0, t = !0;
          return;
        }
      }
    !t && this._hasOtherError && (this._hasOtherError = !1, this._otherErrorCheckbox = null, this.required ? this._manageRequire() : (this._internals.setValidity({}), this.showError = !1));
  }
  render() {
    return d`
      <fieldset
        aria-label="${this.label}${this._slottedDescriptionText ? ` ${this._slottedDescriptionText}` : this.description ? ` ${this.description}` : ""}"
        class="nys-checkboxgroup"
        role="radiogroup"
      >
        <nys-label
          for=${this.id + "--native"}
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-checkboxgroup__content">
          <slot></slot>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
          .showDivider=${!this.tile}
        ></nys-errormessage>
      </fieldset>
    `;
  }
};
at.styles = g(ko), at.formAssociated = !0;
let L = at;
T([
  a({ type: String, reflect: !0 })
], L.prototype, "id");
T([
  a({ type: String, reflect: !0 })
], L.prototype, "name");
T([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "required");
T([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "optional");
T([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "showError");
T([
  a({ type: String })
], L.prototype, "errorMessage");
T([
  a({ type: String })
], L.prototype, "label");
T([
  a({ type: String })
], L.prototype, "description");
T([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "tile");
T([
  a({ type: String })
], L.prototype, "tooltip");
T([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "inverted");
T([
  a({ type: String, reflect: !0 })
], L.prototype, "form");
T([
  a({ type: String, reflect: !0 })
], L.prototype, "size");
T([
  x()
], L.prototype, "_slottedDescriptionText");
T([
  x()
], L.prototype, "_hasOtherError");
T([
  x()
], L.prototype, "_otherErrorCheckbox");
customElements.get("nys-checkboxgroup") || customElements.define("nys-checkboxgroup", L);
var _r = Object.defineProperty, A = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && _r(e, t, o), o;
};
let mr = 0;
const lt = class lt extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.form = null, this.showError = !1, this.errorMessage = "", this.groupExist = !1, this.tile = !1, this.inverted = !1, this.tooltip = "", this.size = "md", this.other = !1, this.showOtherError = !1, this.isMobile = window.innerWidth < 480, this._hasUserInteracted = !1, this._manageLabelClick = () => {
      const e = this.shadowRoot?.querySelector(
        ".nys-checkbox__main-container"
      ), t = this.shadowRoot?.querySelector("input");
      !e || !t || e.addEventListener("click", (r) => {
        r.target.tagName.toLowerCase() !== "input" && (this.disabled || (t.click(), t.focus()));
      });
    }, this._handleResize = () => {
      this.isMobile = window.innerWidth < 480;
    }, this._internals = this.attachInternals();
  }
  // need this flag for "eager mode"
  async getInputElement() {
    return await this.updateComplete, this.shadowRoot?.querySelector("input") || null;
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-checkbox-${Date.now()}-${mr++}`), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("blur", this._handleBlur), window.addEventListener("resize", this._handleResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("blur", this._handleBlur), window.removeEventListener("resize", this._handleResize);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire(), this._manageLabelClick();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this.groupExist || this._internals.setFormValue(this.checked ? this.value : null);
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input"), t = this.errorMessage || "This field is required";
    e && (this.required && !this.checked ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : this._internals.setValidity({}));
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = e.validity;
    let r = "";
    t.valueMissing && (r = "This field is required"), this._setValidityMessage(r);
  }
  // Called automatically when the parent form is reset
  formResetCallback() {
    this.checked = !1, this._internals.setFormValue(null);
    const e = this.shadowRoot?.querySelector("input");
    e && (e.checked = !1), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    if (this.required && !this.checked)
      return !1;
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this.showError = !0, this._validate();
    const t = this.shadowRoot?.querySelector("input");
    if (t) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  get _hasDescription() {
    const e = this.querySelector('[slot="description"]');
    return !!this.description || !!e;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _emitChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: {
          id: this.id,
          checked: this.checked,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _emitOtherInputEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-other-input", {
        detail: {
          id: this.id,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle checkbox change event
  async _handleChange(e) {
    const { checked: t } = e.target, r = this.checked;
    this.checked = t, this.groupExist || this._internals.setFormValue(this.checked ? this.value : null), this.other && r && !t && (this.showOtherError = !1, this._hasUserInteracted = !1, this._dispatchClearError()), this._validate(), this._emitChangeEvent();
  }
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  _handleBlur() {
    this.dispatchEvent(new Event("nys-blur")), this.other && this.checked && (this._hasUserInteracted = !0, this._validateOtherAndEmitError());
  }
  _handleTextInputBlur() {
    this._hasUserInteracted = !0, this._validateOtherAndEmitError();
  }
  async _handleKeydown(e) {
    e.code === "Space" && (e.preventDefault(), this.disabled || (this.checked = !this.checked, this._internals.setFormValue(this.checked ? this.value : null), await this.updateComplete, this._validate(), this._emitChangeEvent()));
  }
  _handleTextInput(e) {
    let r = e.target.value;
    this.value = r, this._hasUserInteracted && this._validateOtherAndEmitError(), this._emitOtherInputEvent();
  }
  _validateOtherAndEmitError() {
    if (!this.other) return;
    if (!this.checked || !this._hasUserInteracted) {
      this.showOtherError = !1, this._dispatchClearError();
      return;
    }
    const e = this.value.trim() === "";
    this.showOtherError = e, e && this.dispatchEvent(
      new CustomEvent("nys-error", {
        detail: {
          id: this.id,
          name: this.name,
          type: "other",
          message: "Please enter a value for this option.",
          sourceCheckbox: this
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _dispatchClearError() {
    this.dispatchEvent(
      new CustomEvent("nys-error-clear", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return d`
      <div class="nys-checkbox">
        <div
          class="nys-checkbox__main-container ${this._hasDescription ? "has-description" : ""}"
        >
          <div class="nys-checkbox__checkbox-wrapper">
            <input
              id=${this.id + "--native"}
              class="nys-checkbox__checkbox"
              type="checkbox"
              name="${p(this.name ? this.name : void 0)}"
              .checked=${this.checked}
              ?disabled=${this.disabled}
              .value=${this.value}
              ?required="${this.required}"
              form=${p(this.form || void 0)}
              aria-checked="${this.checked}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-required="${this.required}"
              aria-describedby="group-info"
              @change="${this._handleChange}"
              @focus="${this._handleFocus}"
              @keydown="${this._handleKeydown}"
              aria-label=${this.label || p(this.other ? "Other" : void 0)}
            />
            ${this.checked ? d`<nys-icon
                  name="check"
                  size="${this.size === "md" ? "4xl" : this.size === "sm" ? "2xl" : "4xl"}"
                  class="nys-checkbox__icon"
                ></nys-icon>` : ""}
          </div>
          ${(this.label || this.other) && d`
            <nys-label
              tooltip=${this.tooltip}
              for=${this.id + "--native"}
              label="${this.label || (this.other ? "Other" : "")}"
              description=${p(this.description || void 0)}
              flag=${p(this.required ? "required" : void 0)}
              ?inverted=${this.inverted}
            >
              <slot name="description" slot="description"
                >${this.description}</slot
              >
            </nys-label>
          `}
        </div>
        <div class="nys-checkbox__other-container">
          ${this.other && this.checked ? d`
                <nys-textinput
                  .value=${this.value}
                  id=${"radiobutton-other-" + this.id}
                  @nys-input=${this._handleTextInput}
                  @nys-blur=${this._handleTextInputBlur}
                  ariaLabel="Other"
                  aria-invalid=${this.showOtherError ? "true" : "false"}
                  width=${this.isMobile ? "full" : "md"}
                ></nys-textinput>
              ` : ""}
        </div>
      </div>
      ${this.parentElement?.tagName.toLowerCase() !== "nys-checkboxgroup" ? d`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage || this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>` : ""}
    `;
  }
};
lt.styles = g(ko), lt.formAssociated = !0;
let C = lt;
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "checked");
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "disabled");
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "required");
A([
  a({ type: String })
], C.prototype, "label");
A([
  a({ type: String })
], C.prototype, "description");
A([
  a({ type: String, reflect: !0 })
], C.prototype, "id");
A([
  a({ type: String, reflect: !0 })
], C.prototype, "name");
A([
  a({ type: String })
], C.prototype, "value");
A([
  a({ type: String, reflect: !0 })
], C.prototype, "form");
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "showError");
A([
  a({ type: String })
], C.prototype, "errorMessage");
A([
  a({ type: Boolean })
], C.prototype, "groupExist");
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "tile");
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "inverted");
A([
  a({ type: String })
], C.prototype, "tooltip");
A([
  a({ type: String, reflect: !0 })
], C.prototype, "size");
A([
  a({ type: Boolean, reflect: !0 })
], C.prototype, "other");
A([
  a({ type: Boolean })
], C.prototype, "showOtherError");
A([
  x()
], C.prototype, "isMobile");
customElements.get("nys-checkbox") || customElements.define("nys-checkbox", C);
const xr = ':host{--_nys-datepicker-width: fit-content;--_nys-datepicker-width--input: var(--nys-form-width-md, 200px);--_nys-datepicker-gap: var(--nys-space-100, 8px);--_nys-datepicker-height: var(--nys-size-600, 48px);--_nys-datepicker-radius: var(--nys-radius-xl, 12px);--_nys-datepicker-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-datepicker-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-datepicker-space-sm: var(--nys-space-50, 4px);--_nys-datepicker-space-md: var(--nys-space-100, 8px);--_nys-datepicker-space-lg: var(--nys-space-150, 12px);--_nys-datepicker-border-width: var(--nys-border-width-sm, 1px);--_nys-datepicker-border-color: var(--nys-color-neutral-400, #909395);--_nys-datepicker-border-radius: var(--nys-radius-md, 4px);--_nys-datepicker-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-datepicker-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-datepicker-font-size: var(--nys-font-size-ui-md, 16px);--_nys-datepicker-font-weight: var(--nys-font-weight-regular, 400);--_nys-datepicker-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-datepicker-letterspacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-datepicker-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-datepicker-text-color: var(--nys-color-text, #1b1b1b);--_nys-datepicker-text-disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-datepicker-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-datepicker-background-color--button--active: var( --nys-color-gray-100, #d0d0ce );--_nys-datepicker-padding--calendar: var(--nys-space-200, 16px);--_nys-datepicker-color--calendar--weekends: var( --nys-color-text-weaker, #797c7f );--_nys-datepicker-gap--calendar-row: var(--nys-space-2-px, 2px);--_nys-datepicker-font-size--date: var(--nys-type-size-ui-sm, 14px);--_nys-datepicker-background-color--date--hover: var( --nys-color-neutral-50, #ededed );--_nys-datepicker-background-color--date--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-datepicker-background-color--date--selected: var( --nys-color-info-weak, #e5effa );--_nys-datepicker-focus-ring--date: var(--nys-color-link, #004dd1);--_nys-datepicker-color--date: var(--nys-color-text, #1b1b1b);--_nys-datepicker-color--date--hover: var(--nys-color-text, #1b1b1b);--_nys-datepicker-color--date--selected: var(--nys-color-info, #004dd1);--_nys-datepicker-color--date--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-datepicker-border-color--date--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-datepicker-background-color--navigation--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-datepicker-background-color--navigation--pressed: var( --nys-color-neutral-50, #ededed );--_nys-datepicker-background-color--navigation--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-datepicker-color--navigation--hover: var( --nys-color-neutral-900, #1b1b1b );--_nys-datepicker-color--navigation--pressed: var( --nys-color-neutral-900, #1b1b1b );--_nys-datepicker-color--navigation--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-datepicker-box-shadow-border--navigation: inset 0 0 0 1px var(--nys-color-neutral-900, #1b1b1b)}:host([width=lg]){--_nys-datepicker-width--input: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-datepicker-width--input: 100%}:host([showError]){--_nys-datepicker-border-color: var(--nys-color-danger, #b52c2c)}.nys-datepicker--container{display:flex;flex-direction:column;gap:var(--_nys-datepicker-space-sm);font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size);font-weight:var(--_nys-datepicker-font-weight);line-height:var(--_nys-datepicker-line-height);width:100%}.nys-datepicker--container .nys-datepicker--input-container{position:relative;width:var(--_nys-datepicker-width--input);display:flex;cursor:pointer}.nys-datepicker--container .nys-datepicker--input-container.disabled #calendar-button{cursor:not-allowed;color:var(--_nys-datepicker-color--date--disabled)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input{cursor:text;text-align:start;font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size);flex:1;height:24px;outline:transparent solid 1px;border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-border-color);background-color:var(--_nys-datepicker-background-color);padding:var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-lg);color:var(--_nys-datepicker-color)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:hover{outline-color:var(--_nys-datepicker-outline-color--hover);border-color:var(--_nys-datepicker-outline-color--hover)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:focus{outline-color:var(--_nys-datepicker-outline-color--focus);border-color:var(--_nys-datepicker-outline-color--focus)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:disabled{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);cursor:not-allowed;color:var(--_nys-datepicker-color--disabled)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input::-webkit-date-and-time-value{text-align:start}.nys-datepicker--container .nys-datepicker--input-container input[type=date]::-webkit-inner-spin-button,.nys-datepicker--container .nys-datepicker--input-container input[type=date]::-webkit-calendar-picker-indicator{display:none;appearance:none}.nys-datepicker--container .nys-datepicker--input-container #calendar-button{display:flex;align-items:center;justify-content:center;padding:var(--_nys-datepicker-space-sm);border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-background-color);outline:transparent solid 1px;background-color:var(--_nys-datepicker-background-color);position:absolute;top:50%;right:var(--_nys-datepicker-space-sm);transform:translateY(-50%);cursor:pointer}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:hover{outline-color:var(--_nys-datepicker-background-color--date--hover);border-color:var(--_nys-datepicker-background-color--date--hover);background:var(--_nys-datepicker-background-color--date--hover)}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:active{outline-color:var(--_nys-datepicker-background-color--button--active);border-color:var(--_nys-datepicker-background-color--button--active);background:var(--_nys-datepicker-background-color--button--active)}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:focus:not(:active):not(:disabled){outline-color:var(--_nys-datepicker-outline-color--focus);border-color:var(--_nys-datepicker-outline-color--focus)}.nys-datepicker--container .wc-datepicker--container{display:flex;width:fit-content}.nys-datepicker--container .wc-datepicker--container *{flex:1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}wc-datepicker{display:none;padding:var(--_nys-datepicker-padding--calendar);border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--nys-color-neutral-100, #d0d0ce);background-color:var(--_nys-datepicker-background-color);box-shadow:0 4px 6px -1px var(--nys-color-black-transparent-100, rgba(27, 27, 27, .1)),0 4px 6px -1px var(--nys-color-black-transparent-50, rgba(27, 27, 27, .01));color:var(--_nys-datepicker-text-color);margin-bottom:3px}wc-datepicker.active{display:flex;flex-direction:column-reverse;position:absolute;z-index:1}wc-datepicker *,wc-datepicker *:before,wc-datepicker *:after{margin:0;box-sizing:border-box}.wc-datepicker{display:block;width:min-content;font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size--date);font-weight:400;line-height:var(--_nys-datepicker-line-height);letter-spacing:var(--_nys-datepicker-letterspacing)}.wc-datepicker--disabled *:disabled{opacity:.5;cursor:not-allowed}.wc-datepicker--disabled .wc-datepicker__date{cursor:not-allowed;opacity:.5}.wc-datepicker--disabled .wc-datepicker__date:focus{outline:none;border-color:var(--_nys-datepicker-border-color--date--disabled);box-shadow:none}.wc-datepicker--disabled .wc-datepicker__date:hover:not(.wc-datepicker__date--selected){background-color:transparent}.wc-datepicker--disabled .wc-datepicker__date--selected:hover{color:var(--_nys-datepicker-background-color);background-color:var(--_nys-datepicker-background-color--date--selected)}.wc-datepicker--disabled #wc-month-dropdown-icon{color:var(--_nys-datepicker-color--date--disabled)}.wc-datepicker__header{display:flex;align-items:center;gap:var(--_nys-datepicker-space-sm)}.wc-datepicker__current-month{display:flex;flex-grow:1;gap:var(--_nys-datepicker-space-sm)}.wc-datepicker__month-select,.wc-datepicker__year-select{display:flex;align-items:center;font-size:var(--_nys-datepicker-font-size);font-family:var(--_nys-datepicker-font-family);padding:var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-lg);border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;color:var(--_nys-datepicker-color);background-color:var(--_nys-datepicker-background-color);line-height:var(--_nys-datepicker-line-height)}.wc-datepicker__month-select:hover:not(:disabled),.wc-datepicker__year-select:hover:not(:disabled){border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--hover);background-color:var(--_nys-datepicker-background-color--navigation--hover);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation)}.wc-datepicker__month-select:active:not(:disabled),.wc-datepicker__month-select[aria-pressed=true],.wc-datepicker__year-select:active:not(:disabled),.wc-datepicker__year-select[aria-pressed=true]{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--pressed);background-color:var(--_nys-datepicker-background-color--navigation--pressed);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation)}.wc-datepicker__month-select:disabled,.wc-datepicker__month-select[aria-disabled=true],.wc-datepicker__year-select:disabled,.wc-datepicker__year-select[aria-disabled=true]{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);background-color:var(--_nys-datepicker-background-color--navigation--disabled);color:var(--_nys-datepicker-color--disabled)}.wc-datepicker .month-wrapper{position:relative;width:135px;display:flex;align-items:center;align-self:stretch}.wc-datepicker .month-wrapper #wc-month-dropdown-icon{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}.wc-datepicker__month-select{width:100%;max-width:100%;flex-grow:1;cursor:pointer;appearance:none;text-overflow:ellipsis;padding-right:var(--nys-space-400, 32px)}.wc-datepicker__month-select>*{width:91px;height:24px}.wc-datepicker__year-select{border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;padding-right:var(--_nys-datepicker-space-sm);max-width:5rem}.wc-datepicker__previous-month-button,.wc-datepicker__next-month-button,.wc-datepicker__previous-year-button,.wc-datepicker__next-year-button{display:inline-flex;width:40px;max-width:40px;max-height:42px;padding:var(--_nys-datepicker-space-lg);justify-content:center;align-items:center;border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;color:var(--_nys-datepicker-color--date);background-color:var(--_nys-datepicker-background-color);cursor:pointer}.wc-datepicker__previous-month-button:hover:not(:disabled),.wc-datepicker__next-month-button:hover:not(:disabled),.wc-datepicker__previous-year-button:hover:not(:disabled),.wc-datepicker__next-year-button:hover:not(:disabled){background-color:var(--_nys-datepicker-background-color--navigation--hover);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--hover)}.wc-datepicker__previous-month-button:active:not(:disabled),.wc-datepicker__previous-month-button[aria-pressed=true],.wc-datepicker__next-month-button:active:not(:disabled),.wc-datepicker__next-month-button[aria-pressed=true],.wc-datepicker__previous-year-button:active:not(:disabled),.wc-datepicker__previous-year-button[aria-pressed=true],.wc-datepicker__next-year-button:active:not(:disabled),.wc-datepicker__next-year-button[aria-pressed=true]{background-color:var(--_nys-datepicker-background-color--navigation--pressed);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--pressed)}.wc-datepicker__previous-month-button:disabled,.wc-datepicker__previous-month-button[aria-disabled=true],.wc-datepicker__next-month-button:disabled,.wc-datepicker__next-month-button[aria-disabled=true],.wc-datepicker__previous-year-button:disabled,.wc-datepicker__previous-year-button[aria-disabled=true],.wc-datepicker__next-year-button:disabled,.wc-datepicker__next-year-button[aria-disabled=true]{background-color:var(--_nys-datepicker-background-color--navigation--disabled);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);color:var(--_nys-datepicker-color--disabled)}.wc-datepicker__calendar{width:100%;table-layout:fixed;border-collapse:collapse}.wc-datepicker__weekday{padding:var(--_nys-datepicker-padding--calendar) 0 var(--_nys-datepicker-space-sm) 0;min-width:var(--nys-size-500, 40px);font-weight:600;aspect-ratio:1}.wc-datepicker__weekday>span{width:42.3px;height:24px;display:flex;justify-content:center;align-items:center}.wc-datepicker__weekday[aria-label=Saturday],.wc-datepicker__weekday[aria-label=Sunday]{color:var(--_nys-datepicker-color--calendar--weekends)}.wc-datepicker__date{padding:var(--_nys-datepicker-space-md);text-align:center;cursor:pointer;border-radius:var(--nys-radius-lg)}.wc-datepicker__date:focus,.wc-datepicker__date:focus-visible{outline:none}.wc-datepicker__date:focus{box-shadow:inset 0 0 0 2px var(--_nys-datepicker-focus-ring--date)}.wc-datepicker__date:hover:not(.wc-datepicker__date--selected):not(:active){color:var(--_nys-datepicker-color--date--hover);background-color:var(--_nys-datepicker-background-color--date--hover)}.wc-datepicker__date:active{color:var(--_nys-datepicker-color--date--hover);background-color:var(--_nys-datepicker-background-color--date--active)}.wc-datepicker__date>*{display:flex;justify-content:center;align-items:center;aspect-ratio:1;width:24.3px;height:24px}.wc-datepicker__date--today{font-weight:600;color:var(--_nys-datepicker-color--date--selected)}.wc-datepicker__date--today>*{font-style:normal;text-decoration-line:underline}.wc-datepicker__date--selected{text-decoration-line:none;background-color:var(--_nys-datepicker-background-color--date--selected);color:var(--_nys-datepicker-color--date--selected)}.wc-datepicker__date--selected>*{font-weight:600}.wc-datepicker__date--disabled{color:var(--_nys-datepicker-color--date--disabled);cursor:default}.wc-datepicker__date--disabled:not(.wc-datepicker__date--disabled--selected,.wc-datepicker__date--disabled--in-range):hover{background-color:transparent}.wc-datepicker__date.wc-datepicker__date--overflowing{color:var(--_nys-datepicker-text-disabled)}.wc-datepicker__date.wc-datepicker__date--overflowing:hover,.wc-datepicker__date.wc-datepicker__date--overflowing:active{color:var(--_nys-datepicker-color)}.wc-datepicker--button-container{display:flex;padding-top:var(--_nys-datepicker-space-lg);align-items:flex-end;gap:var(--_nys-datepicker-padding--calendar);align-self:stretch}.wc-datepicker tr.wc-datepicker__calendar-row.sc-wc-datepicker{display:flex;align-items:center;gap:var(--_nys-datepicker-gap--calendar-row);align-self:stretch}', ze = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  appendChildSlotFix: !1,
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  safari10: !1,
  scriptDataOpts: !1,
  scopedSlotTextContentFix: !1,
  shadowDomShim: !1,
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  cssVarShim: !1,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  dynamicImportShim: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0
};
let Ae, Co, _t, $o = !1, et = !1, Lt = !1, j = !1, ro = null, $t = !1;
const Ce = (s, e = "") => () => {
}, so = "http://www.w3.org/1999/xlink", no = {}, wr = "http://www.w3.org/2000/svg", kr = "http://www.w3.org/1999/xhtml", Cr = (s) => s != null, zt = (s) => (s = typeof s, s === "object" || s === "function");
function $r(s) {
  var e, t, r;
  return (r = (t = (e = s.head) === null || e === void 0 ? void 0 : e.querySelector('meta[name="csp-nonce"]')) === null || t === void 0 ? void 0 : t.getAttribute("content")) !== null && r !== void 0 ? r : void 0;
}
const v = (s, e, ...t) => {
  let r = null, o = null, n = null, i = !1, l = !1;
  const c = [], h = (y) => {
    for (let f = 0; f < y.length; f++)
      r = y[f], Array.isArray(r) ? h(r) : r != null && typeof r != "boolean" && ((i = typeof s != "function" && !zt(r)) && (r = String(r)), i && l ? c[c.length - 1].$text$ += r : c.push(i ? tt(null, r) : r), l = i);
  };
  if (h(t), e) {
    e.key && (o = e.key), e.name && (n = e.name);
    {
      const y = e.className || e.class;
      y && (e.class = typeof y != "object" ? y : Object.keys(y).filter((f) => y[f]).join(" "));
    }
  }
  if (typeof s == "function")
    return s(e === null ? {} : e, c, Sr);
  const u = tt(s, null);
  return u.$attrs$ = e, c.length > 0 && (u.$children$ = c), u.$key$ = o, u.$name$ = n, u;
}, tt = (s, e) => {
  const t = {
    $flags$: 0,
    $tag$: s,
    $text$: e,
    $elm$: null,
    $children$: null
  };
  return t.$attrs$ = null, t.$key$ = null, t.$name$ = null, t;
}, Eo = {}, Er = (s) => s && s.$tag$ === Eo, Sr = {
  forEach: (s, e) => s.map(io).forEach(e),
  map: (s, e) => s.map(io).map(e).map(Dr)
}, io = (s) => ({
  vattrs: s.$attrs$,
  vchildren: s.$children$,
  vkey: s.$key$,
  vname: s.$name$,
  vtag: s.$tag$,
  vtext: s.$text$
}), Dr = (s) => {
  if (typeof s.vtag == "function") {
    const t = Object.assign({}, s.vattrs);
    return s.vkey && (t.key = s.vkey), s.vname && (t.name = s.vname), v(s.vtag, t, ...s.vchildren || []);
  }
  const e = tt(s.vtag, s.vtext);
  return e.$attrs$ = s.vattrs, e.$children$ = s.vchildren, e.$key$ = s.vkey, e.$name$ = s.vname, e;
}, Lr = (s) => rs.map((e) => e(s)).find((e) => !!e), zr = (s, e) => s != null && !zt(s) ? e & 4 ? s === "false" ? !1 : s === "" || !!s : e & 2 ? parseFloat(s) : e & 1 ? String(s) : s : s, Ar = (s) => s, ao = (s, e, t) => {
  const r = Ar(s);
  return {
    emit: (o) => Br(r, e, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: o
    })
  };
}, Br = (s, e, t) => {
  const r = P.ce(e, t);
  return s.dispatchEvent(r), r;
}, lo = /* @__PURE__ */ new WeakMap(), Mr = (s, e, t) => {
  let r = rt.get(s);
  as && t ? (r = r || new CSSStyleSheet(), typeof r == "string" ? r = e : r.replaceSync(e)) : r = e, rt.set(s, r);
}, Ir = (s, e, t, r) => {
  var o;
  let n = So(e, t);
  const i = rt.get(n);
  if (s = s.nodeType === 11 ? s : X, i)
    if (typeof i == "string") {
      s = s.head || s;
      let l = lo.get(s), c;
      if (l || lo.set(s, l = /* @__PURE__ */ new Set()), !l.has(n)) {
        {
          c = X.createElement("style"), c.innerHTML = i;
          const h = (o = P.$nonce$) !== null && o !== void 0 ? o : $r(X);
          h != null && c.setAttribute("nonce", h), s.insertBefore(c, s.querySelector("link"));
        }
        l && l.add(n);
      }
    } else s.adoptedStyleSheets.includes(i) || (s.adoptedStyleSheets = [...s.adoptedStyleSheets, i]);
  return n;
}, qr = (s) => {
  const e = s.$cmpMeta$, t = s.$hostElement$, r = e.$flags$, o = Ce("attachStyles", e.$tagName$), n = Ir(t.shadowRoot ? t.shadowRoot : t.getRootNode(), e, s.$modeName$);
  r & 10 && (t["s-sc"] = n, t.classList.add(n + "-h"), r & 2 && t.classList.add(n + "-s")), o();
}, So = (s, e) => "sc-" + (e && s.$flags$ & 32 ? s.$tagName$ + "-" + e : s.$tagName$), co = (s, e, t, r, o, n) => {
  if (t !== r) {
    let i = po(s, e), l = e.toLowerCase();
    if (e === "class") {
      const c = s.classList, h = ho(t), u = ho(r);
      c.remove(...h.filter((y) => y && !u.includes(y))), c.add(...u.filter((y) => y && !h.includes(y)));
    } else if (e === "style") {
      for (const c in t)
        (!r || r[c] == null) && (c.includes("-") ? s.style.removeProperty(c) : s.style[c] = "");
      for (const c in r)
        (!t || r[c] !== t[c]) && (c.includes("-") ? s.style.setProperty(c, r[c]) : s.style[c] = r[c]);
    } else if (e !== "key")
      if (e === "ref")
        r && r(s);
      else if (!s.__lookupSetter__(e) && e[0] === "o" && e[1] === "n")
        e[2] === "-" ? e = e.slice(3) : po(xt, l) ? e = l.slice(2) : e = l[2] + e.slice(3), t && P.rel(s, e, t, !1), r && P.ael(s, e, r, !1);
      else {
        const c = zt(r);
        if ((i || c && r !== null) && !o)
          try {
            if (s.tagName.includes("-"))
              s[e] = r;
            else {
              const u = r ?? "";
              e === "list" ? i = !1 : (t == null || s[e] != u) && (s[e] = u);
            }
          } catch {
          }
        let h = !1;
        l !== (l = l.replace(/^xlink\:?/, "")) && (e = l, h = !0), r == null || r === !1 ? (r !== !1 || s.getAttribute(e) === "") && (h ? s.removeAttributeNS(so, e) : s.removeAttribute(e)) : (!i || n & 4 || o) && !c && (r = r === !0 ? "" : r, h ? s.setAttributeNS(so, e, r) : s.setAttribute(e, r));
      }
  }
}, Rr = /\s/, ho = (s) => s ? s.split(Rr) : [], Do = (s, e, t, r) => {
  const o = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, n = s && s.$attrs$ || no, i = e.$attrs$ || no;
  for (r in n)
    r in i || co(o, r, n[r], void 0, t, e.$flags$);
  for (r in i)
    co(o, r, n[r], i[r], t, e.$flags$);
}, ot = (s, e, t, r) => {
  const o = e.$children$[t];
  let n = 0, i, l, c;
  if ($o || (Lt = !0, o.$tag$ === "slot" && (Ae && r.classList.add(Ae + "-s"), o.$flags$ |= o.$children$ ? (
    // slot element has fallback content
    2
  ) : (
    // slot element does not have fallback content
    1
  ))), o.$text$ !== null)
    i = o.$elm$ = X.createTextNode(o.$text$);
  else if (o.$flags$ & 1)
    i = o.$elm$ = X.createTextNode("");
  else {
    if (j || (j = o.$tag$ === "svg"), i = o.$elm$ = X.createElementNS(j ? wr : kr, o.$flags$ & 2 ? "slot-fb" : o.$tag$), j && o.$tag$ === "foreignObject" && (j = !1), Do(null, o, j), Cr(Ae) && i["s-si"] !== Ae && i.classList.add(i["s-si"] = Ae), o.$children$)
      for (n = 0; n < o.$children$.length; ++n)
        l = ot(s, o, n, i), l && i.appendChild(l);
    o.$tag$ === "svg" ? j = !1 : i.tagName === "foreignObject" && (j = !0);
  }
  return i["s-hn"] = _t, o.$flags$ & 3 && (i["s-sr"] = !0, i["s-cr"] = Co, i["s-sn"] = o.$name$ || "", c = s && s.$children$ && s.$children$[t], c && c.$tag$ === o.$tag$ && s.$elm$ && Ve(s.$elm$, !1)), i;
}, Ve = (s, e) => {
  P.$flags$ |= 1;
  const t = s.childNodes;
  for (let r = t.length - 1; r >= 0; r--) {
    const o = t[r];
    o["s-hn"] !== _t && o["s-ol"] && (Ao(o).insertBefore(o, At(o)), o["s-ol"].remove(), o["s-ol"] = void 0, Lt = !0), e && Ve(o, e);
  }
  P.$flags$ &= -2;
}, Lo = (s, e, t, r, o, n) => {
  let i = s["s-cr"] && s["s-cr"].parentNode || s, l;
  for (i.shadowRoot && i.tagName === _t && (i = i.shadowRoot); o <= n; ++o)
    r[o] && (l = ot(null, t, o, s), l && (r[o].$elm$ = l, i.insertBefore(l, At(e))));
}, zo = (s, e, t, r, o) => {
  for (; e <= t; ++e)
    (r = s[e]) && (o = r.$elm$, Io(r), et = !0, o["s-ol"] ? o["s-ol"].remove() : Ve(o, !0), o.remove());
}, Pr = (s, e, t, r) => {
  let o = 0, n = 0, i = 0, l = 0, c = e.length - 1, h = e[0], u = e[c], y = r.length - 1, f = r[0], D = r[y], K, de;
  for (; o <= c && n <= y; )
    if (h == null)
      h = e[++o];
    else if (u == null)
      u = e[--c];
    else if (f == null)
      f = r[++n];
    else if (D == null)
      D = r[--y];
    else if (Ze(h, f))
      Be(h, f), h = e[++o], f = r[++n];
    else if (Ze(u, D))
      Be(u, D), u = e[--c], D = r[--y];
    else if (Ze(h, D))
      (h.$tag$ === "slot" || D.$tag$ === "slot") && Ve(h.$elm$.parentNode, !1), Be(h, D), s.insertBefore(h.$elm$, u.$elm$.nextSibling), h = e[++o], D = r[--y];
    else if (Ze(u, f))
      (h.$tag$ === "slot" || D.$tag$ === "slot") && Ve(u.$elm$.parentNode, !1), Be(u, f), s.insertBefore(u.$elm$, h.$elm$), u = e[--c], f = r[++n];
    else {
      for (i = -1, l = o; l <= c; ++l)
        if (e[l] && e[l].$key$ !== null && e[l].$key$ === f.$key$) {
          i = l;
          break;
        }
      i >= 0 ? (de = e[i], de.$tag$ !== f.$tag$ ? K = ot(e && e[n], t, i, s) : (Be(de, f), e[i] = void 0, K = de.$elm$), f = r[++n]) : (K = ot(e && e[n], t, n, s), f = r[++n]), K && Ao(h.$elm$).insertBefore(K, At(h.$elm$));
    }
  o > c ? Lo(s, r[y + 1] == null ? null : r[y + 1].$elm$, t, r, n, y) : n > y && zo(e, o, c);
}, Ze = (s, e) => s.$tag$ === e.$tag$ ? s.$tag$ === "slot" ? s.$name$ === e.$name$ : s.$key$ === e.$key$ : !1, At = (s) => s && s["s-ol"] || s, Ao = (s) => (s["s-ol"] ? s["s-ol"] : s).parentNode, Be = (s, e) => {
  const t = e.$elm$ = s.$elm$, r = s.$children$, o = e.$children$, n = e.$tag$, i = e.$text$;
  let l;
  i === null ? (j = n === "svg" ? !0 : n === "foreignObject" ? !1 : j, n === "slot" || Do(s, e, j), r !== null && o !== null ? Pr(t, r, e, o) : o !== null ? (s.$text$ !== null && (t.textContent = ""), Lo(t, null, e, o, 0, o.length - 1)) : r !== null && zo(r, 0, r.length - 1), j && n === "svg" && (j = !1)) : (l = t["s-cr"]) ? l.parentNode.textContent = i : s.$text$ !== i && (t.data = i);
}, Bo = (s) => {
  const e = s.childNodes;
  let t, r, o, n, i, l;
  for (r = 0, o = e.length; r < o; r++)
    if (t = e[r], t.nodeType === 1) {
      if (t["s-sr"]) {
        for (i = t["s-sn"], t.hidden = !1, n = 0; n < o; n++)
          if (l = e[n].nodeType, e[n]["s-hn"] !== t["s-hn"] || i !== "") {
            if (l === 1 && i === e[n].getAttribute("slot")) {
              t.hidden = !0;
              break;
            }
          } else if (l === 1 || l === 3 && e[n].textContent.trim() !== "") {
            t.hidden = !0;
            break;
          }
      }
      Bo(t);
    }
}, Q = [], Mo = (s) => {
  let e, t, r, o, n, i, l = 0;
  const c = s.childNodes, h = c.length;
  for (; l < h; l++) {
    if (e = c[l], e["s-sr"] && (t = e["s-cr"]) && t.parentNode)
      for (r = t.parentNode.childNodes, o = e["s-sn"], i = r.length - 1; i >= 0; i--)
        t = r[i], !t["s-cn"] && !t["s-nr"] && t["s-hn"] !== e["s-hn"] && (uo(t, o) ? (n = Q.find((u) => u.$nodeToRelocate$ === t), et = !0, t["s-sn"] = t["s-sn"] || o, n ? n.$slotRefNode$ = e : Q.push({
          $slotRefNode$: e,
          $nodeToRelocate$: t
        }), t["s-sr"] && Q.map((u) => {
          uo(u.$nodeToRelocate$, t["s-sn"]) && (n = Q.find((y) => y.$nodeToRelocate$ === t), n && !u.$slotRefNode$ && (u.$slotRefNode$ = n.$slotRefNode$));
        })) : Q.some((u) => u.$nodeToRelocate$ === t) || Q.push({
          $nodeToRelocate$: t
        }));
    e.nodeType === 1 && Mo(e);
  }
}, uo = (s, e) => s.nodeType === 1 ? s.getAttribute("slot") === null && e === "" || s.getAttribute("slot") === e : s["s-sn"] === e ? !0 : e === "", Io = (s) => {
  s.$attrs$ && s.$attrs$.ref && s.$attrs$.ref(null), s.$children$ && s.$children$.map(Io);
}, Tr = (s, e) => {
  const t = s.$hostElement$, r = s.$cmpMeta$, o = s.$vnode$ || tt(null, null), n = Er(e) ? e : v(null, null, e);
  _t = t.tagName, r.$attrsToReflect$ && (n.$attrs$ = n.$attrs$ || {}, r.$attrsToReflect$.map(([i, l]) => n.$attrs$[l] = t[i])), n.$tag$ = null, n.$flags$ |= 4, s.$vnode$ = n, n.$elm$ = o.$elm$ = t.shadowRoot || t, Ae = t["s-sc"], Co = t["s-cr"], $o = (r.$flags$ & 1) !== 0, et = !1, Be(o, n);
  {
    if (P.$flags$ |= 1, Lt) {
      Mo(n.$elm$);
      let i, l, c, h, u, y, f = 0;
      for (; f < Q.length; f++)
        i = Q[f], l = i.$nodeToRelocate$, l["s-ol"] || (c = X.createTextNode(""), c["s-nr"] = l, l.parentNode.insertBefore(l["s-ol"] = c, l));
      for (f = 0; f < Q.length; f++)
        if (i = Q[f], l = i.$nodeToRelocate$, i.$slotRefNode$) {
          for (h = i.$slotRefNode$.parentNode, u = i.$slotRefNode$.nextSibling, c = l["s-ol"]; c = c.previousSibling; )
            if (y = c["s-nr"], y && y["s-sn"] === l["s-sn"] && h === y.parentNode && (y = y.nextSibling, !y || !y["s-nr"])) {
              u = y;
              break;
            }
          (!u && h !== l.parentNode || l.nextSibling !== u) && l !== u && (!l["s-hn"] && l["s-ol"] && (l["s-hn"] = l["s-ol"].parentNode.nodeName), h.insertBefore(l, u));
        } else
          l.nodeType === 1 && (l.hidden = !0);
    }
    et && Bo(n.$elm$), P.$flags$ &= -2, Q.length = 0;
  }
}, Or = (s, e) => {
}, qo = (s, e) => (s.$flags$ |= 16, Or(s, s.$ancestorComponent$), ds(() => Fr(s, e))), Fr = (s, e) => {
  const t = s.$hostElement$, r = Ce("scheduleUpdate", s.$cmpMeta$.$tagName$), o = t;
  let n;
  return e ? n = Me(o, "componentWillLoad") : n = Me(o, "componentWillUpdate"), n = yo(n, () => Me(o, "componentWillRender")), r(), yo(n, () => Vr(s, o, e));
}, Vr = async (s, e, t) => {
  const r = s.$hostElement$, o = Ce("update", s.$cmpMeta$.$tagName$);
  r["s-rc"], t && qr(s);
  const n = Ce("render", s.$cmpMeta$.$tagName$);
  Nr(s, e, r), n(), o(), Hr(s);
}, Nr = (s, e, t) => {
  try {
    ro = e, e = e.render && e.render(), s.$flags$ &= -17, s.$flags$ |= 2, (ze.hasRenderFn || ze.reflect) && (ze.vdomRender || ze.reflect) && (ze.hydrateServerSide || Tr(s, e));
  } catch (l) {
    Ue(l, s.$hostElement$);
  }
  return ro = null, null;
}, Hr = (s) => {
  const e = s.$cmpMeta$.$tagName$, t = s.$hostElement$, r = Ce("postUpdate", e), o = t;
  s.$ancestorComponent$, Me(o, "componentDidRender"), s.$flags$ & 64 ? (Me(o, "componentDidUpdate"), r()) : (s.$flags$ |= 64, Me(o, "componentDidLoad"), r());
}, Me = (s, e, t) => {
  if (s && s[e])
    try {
      return s[e](t);
    } catch (r) {
      Ue(r);
    }
}, yo = (s, e) => s && s.then ? s.then(e) : e(), Ur = (s, e) => mt(s).$instanceValues$.get(e), jr = (s, e, t, r) => {
  const o = mt(s), n = s, i = o.$instanceValues$.get(e), l = o.$flags$, c = n;
  t = zr(t, r.$members$[e][0]);
  const h = Number.isNaN(i) && Number.isNaN(t);
  if (t !== i && !h) {
    o.$instanceValues$.set(e, t);
    {
      if (r.$watchers$ && l & 128) {
        const y = r.$watchers$[e];
        y && y.map((f) => {
          try {
            c[f](t, i, e);
          } catch (D) {
            Ue(D, n);
          }
        });
      }
      if ((l & 18) === 2) {
        if (c.componentShouldUpdate && c.componentShouldUpdate(t, i, e) === !1)
          return;
        qo(o, !1);
      }
    }
  }
}, Wr = (s, e, t) => {
  if (e.$members$) {
    s.watchers && (e.$watchers$ = s.watchers);
    const r = Object.entries(e.$members$), o = s.prototype;
    r.map(([n, [i]]) => {
      (i & 31 || i & 32) && Object.defineProperty(o, n, {
        get() {
          return Ur(this, n);
        },
        set(l) {
          jr(this, n, l, e);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const n = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(i, l, c) {
        P.jmp(() => {
          const h = n.get(i);
          if (this.hasOwnProperty(h))
            c = this[h], delete this[h];
          else if (o.hasOwnProperty(h) && typeof this[h] == "number" && this[h] == c)
            return;
          this[h] = c === null && typeof this[h] == "boolean" ? !1 : c;
        });
      }, s.observedAttributes = r.filter(
        ([i, l]) => l[0] & 15
        /* MEMBER_FLAGS.HasAttribute */
      ).map(([i, l]) => {
        const c = l[1] || i;
        return n.set(c, i), l[0] & 512 && e.$attrsToReflect$.push([i, c]), c;
      });
    }
  }
  return s;
}, Yr = async (s, e, t, r, o) => {
  if ((e.$flags$ & 32) === 0 && (o = s.constructor, e.$flags$ |= 32, customElements.whenDefined(t.$tagName$).then(() => e.$flags$ |= 128), o.style)) {
    let i = o.style;
    typeof i != "string" && (i = i[e.$modeName$ = Lr(s)]);
    const l = So(t, e.$modeName$);
    if (!rt.has(l)) {
      const c = Ce("registerStyles", t.$tagName$);
      Mr(l, i, !!(t.$flags$ & 1)), c();
    }
  }
  e.$ancestorComponent$, qo(e, !0);
}, Kr = (s) => {
}, Zr = (s) => {
  if ((P.$flags$ & 1) === 0) {
    const e = mt(s), t = e.$cmpMeta$, r = Ce("connectedCallback", t.$tagName$);
    e.$flags$ & 1 ? (Ro(s, e, t.$listeners$), Kr(e.$lazyInstance$)) : (e.$flags$ |= 1, t.$flags$ & 12 && Gr(s), t.$members$ && Object.entries(t.$members$).map(([o, [n]]) => {
      if (n & 31 && s.hasOwnProperty(o)) {
        const i = s[o];
        delete s[o], s[o] = i;
      }
    }), Yr(s, e, t)), r();
  }
}, Gr = (s) => {
  const e = s["s-cr"] = X.createComment("");
  e["s-cn"] = !0, s.insertBefore(e, s.firstChild);
}, Qr = (s) => {
  if ((P.$flags$ & 1) === 0) {
    const e = mt(s);
    e.$rmListeners$ && (e.$rmListeners$.map((t) => t()), e.$rmListeners$ = void 0);
  }
}, Xr = (s, e) => {
  const t = {
    $flags$: e[0],
    $tagName$: e[1]
  };
  t.$members$ = e[2], t.$listeners$ = e[3], t.$watchers$ = s.$watchers$, t.$attrsToReflect$ = [];
  const r = s.prototype.connectedCallback, o = s.prototype.disconnectedCallback;
  return Object.assign(s.prototype, {
    __registerHost() {
      os(this, t);
    },
    connectedCallback() {
      Zr(this), r && r.call(this);
    },
    disconnectedCallback() {
      Qr(this), o && o.call(this);
    },
    __attachShadow() {
      this.attachShadow({
        mode: "open",
        delegatesFocus: !!(t.$flags$ & 16)
      });
    }
  }), s.is = t.$tagName$, Wr(s, t);
}, Ro = (s, e, t, r) => {
  t && t.map(([o, n, i]) => {
    const l = es(s, o), c = Jr(e, i), h = ts(o);
    P.ael(l, n, c, h), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => P.rel(l, n, c, h));
  });
}, Jr = (s, e) => (t) => {
  try {
    ze.lazyLoad || s.$hostElement$[e](t);
  } catch (r) {
    Ue(r);
  }
}, es = (s, e) => e & 4 ? X : e & 8 ? xt : e & 16 ? X.body : s, ts = (s) => ns ? {
  passive: (s & 1) !== 0,
  capture: (s & 2) !== 0
} : (s & 2) !== 0, Po = /* @__PURE__ */ new WeakMap(), mt = (s) => Po.get(s), os = (s, e) => {
  const t = {
    $flags$: 0,
    $hostElement$: s,
    $cmpMeta$: e,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return Ro(s, t, e.$listeners$), Po.set(s, t);
}, po = (s, e) => e in s, Ue = (s, e) => (0, console.error)(s, e), rt = /* @__PURE__ */ new Map(), rs = [], xt = typeof window < "u" ? window : {}, X = xt.document || { head: {} }, ss = xt.HTMLElement || class {
}, P = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (s) => s(),
  raf: (s) => requestAnimationFrame(s),
  ael: (s, e, t, r) => s.addEventListener(e, t, r),
  rel: (s, e, t, r) => s.removeEventListener(e, t, r),
  ce: (s, e) => new CustomEvent(s, e)
}, ns = /* @__PURE__ */ (() => {
  let s = !1;
  try {
    X.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        s = !0;
      }
    }));
  } catch {
  }
  return s;
})(), is = (s) => Promise.resolve(s), as = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), fo = [], To = [], ls = (s, e) => (t) => {
  s.push(t), $t || ($t = !0, e && P.$flags$ & 4 ? cs(Et) : P.raf(Et));
}, vo = (s) => {
  for (let e = 0; e < s.length; e++)
    try {
      s[e](performance.now());
    } catch (t) {
      Ue(t);
    }
  s.length = 0;
}, Et = () => {
  vo(fo), vo(To), ($t = fo.length > 0) && P.raf(Et);
}, cs = (s) => is().then(s), ds = /* @__PURE__ */ ls(To, !0);
function Qe(s, e) {
  const t = new Date(s);
  return t.setDate(t.getDate() + e), t;
}
function hs(s, e, t) {
  const r = [], o = Bt(s), n = o.getDay() === 0 ? 7 : o.getDay(), i = Xe(s), l = i.getDay() === 0 ? 7 : i.getDay(), c = t === 1 ? 7 : t - 1, h = [], u = [];
  {
    let D = (7 - t + n) % 7, K = st(o);
    for (; D > 0; )
      h.push(K), K = st(K), D -= 1;
    h.reverse();
    let De = (7 - l + c) % 7, Le = Fe(i);
    for (; De > 0; )
      u.push(Le), Le = Fe(Le), De -= 1;
  }
  let y = o;
  for (; y.getMonth() === s.getMonth(); )
    r.push(y), y = Fe(y);
  return [...h, ...r, ...u];
}
function Bt(s) {
  return xe(/* @__PURE__ */ new Date(`${String(Fo(s)).padStart(4, "0")}-${String(Oo(s)).padStart(2, "0")}-01`));
}
function me(s) {
  if (s instanceof Date)
    return `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")}`;
}
function Xe(s) {
  const e = Bt(s);
  return e.setMonth(e.getMonth() + 1), e.setDate(e.getDate() - 1), e;
}
function Oo(s) {
  return s.getMonth() + 1;
}
function us(s) {
  return new Array(12).fill(void 0).map((e, t) => {
    const r = xe(/* @__PURE__ */ new Date(`2006-${String(t + 1).padStart(2, "0")}-01`));
    return Intl.DateTimeFormat(s, {
      month: "long"
    }).format(r);
  });
}
function Fe(s) {
  return Qe(s, 1);
}
function bo(s) {
  const e = new Date(s);
  return e.setDate(1), e.setMonth(e.getMonth() + 1), e;
}
function go(s) {
  const e = new Date(s);
  return e.setFullYear(e.getFullYear() + 1), e;
}
function st(s) {
  return Je(s, 1);
}
function _o(s) {
  const e = new Date(s);
  return e.setDate(1), e.setMonth(e.getMonth() - 1), e;
}
function mo(s) {
  const e = new Date(s);
  return e.setFullYear(e.getFullYear() - 1), e;
}
function ys(s, e) {
  return new Array(7).fill(void 0).map((t, r) => (s + r) % 7 + 1).map((t) => {
    const r = xe(/* @__PURE__ */ new Date(`2006-01-0${t}`));
    return [
      Intl.DateTimeFormat(e, {
        weekday: "short"
      }).format(r).slice(0, 3),
      Intl.DateTimeFormat(e, {
        weekday: "long"
      }).format(r)
    ];
  });
}
function Fo(s) {
  return s.getFullYear();
}
function xo(s, e) {
  if (!s || !e || !e.from || !e.to)
    return !1;
  const t = e.from < e.to ? e.from : e.to, r = e.from < e.to ? e.to : e.from;
  return s >= t && s <= r;
}
function ne(s, e) {
  return !s || !e ? !1 : s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate();
}
function xe(s) {
  const e = new Date(s);
  return e.setMinutes(e.getMinutes() + e.getTimezoneOffset()), e;
}
function Je(s, e) {
  const t = new Date(s);
  return t.setDate(t.getDate() - e), t;
}
const ps = ".visually-hidden.sc-wc-datepicker{position:absolute;overflow:hidden;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}", fs = {
  clearButton: "Clear value",
  monthSelect: "Select month",
  nextMonthButton: "Next month",
  nextYearButton: "Next year",
  picker: "Choose date",
  previousMonthButton: "Previous month",
  previousYearButton: "Previous year",
  todayButton: "Show today",
  yearSelect: "Select year"
}, vs = /* @__PURE__ */ Xr(class extends ss {
  constructor() {
    super(), this.__registerHost(), this.selectDate = ao(this, "selectDate"), this.changeMonth = ao(this, "changeMonth"), this.disabled = !1, this.disableDate = () => !1, this.elementClassName = "wc-datepicker", this.firstDayOfWeek = 0, this.labels = fs, this.locale = navigator?.language || "en-US", this.showClearButton = !1, this.showMonthStepper = !0, this.showTodayButton = !1, this.showYearStepper = !1, this.startDate = me(/* @__PURE__ */ new Date()), this.maxSearchDays = 365, this.goToRangeStartOnSelect = !0, this.init = () => {
      this.currentDate = this.startDate ? xe(new Date(this.startDate)) : /* @__PURE__ */ new Date(), this.updateWeekdays();
    }, this.getAvailableDate = (s, e) => {
      let t, r = !1;
      switch (e) {
        case "previousDay":
          t = st(s);
          break;
        case "nextDay":
          t = Fe(s);
          break;
        case "previousSameWeekDay":
          t = Je(s, 7);
          break;
        case "nextSameWeekDay":
          t = Qe(s, 7);
          break;
        case "firstOfMonth":
          t = Bt(s);
          break;
        case "lastOfMonth":
          t = Xe(s);
          break;
        case "previousMonth":
          t = _o(s);
          break;
        case "nextMonth":
          t = bo(s);
          break;
        case "previousYear":
          t = mo(s);
          break;
        case "nextYear":
          t = go(s);
          break;
      }
      for (; this.disableDate(t) && !r; ) {
        switch (e) {
          case "previousDay":
          case "lastOfMonth":
            t = st(t);
            break;
          case "nextDay":
          case "firstOfMonth":
          case "previousMonth":
          case "nextMonth":
          case "previousYear":
          case "nextYear":
            t = Fe(t);
            break;
          case "previousSameWeekDay":
            t = Je(t, 7);
            break;
          case "nextSameWeekDay":
            t = Qe(t, 7);
            break;
        }
        switch (e) {
          case "firstOfMonth":
          case "lastOfMonth":
          case "previousYear":
          case "nextYear":
            r = t.getMonth() !== s.getMonth();
            break;
          case "previousMonth":
            r = t.getMonth() !== s.getMonth() - 1;
            break;
          case "nextMonth":
            r = t.getMonth() !== s.getMonth() + 1;
            break;
          default:
            r = !xo(t, {
              from: Je(s, this.maxSearchDays),
              to: Qe(s, this.maxSearchDays)
            });
            break;
        }
      }
      return r ? s : t;
    }, this.nextMonth = () => {
      this.updateCurrentDate(bo(this.currentDate));
    }, this.nextYear = () => {
      this.updateCurrentDate(go(this.currentDate));
    }, this.previousMonth = () => {
      this.updateCurrentDate(_o(this.currentDate));
    }, this.previousYear = () => {
      this.updateCurrentDate(mo(this.currentDate));
    }, this.showToday = () => {
      this.updateCurrentDate(/* @__PURE__ */ new Date());
    }, this.clear = () => {
      this.value = void 0, this.selectDate.emit(void 0);
    }, this.onClick = (s) => {
      if (this.disabled)
        return;
      const e = s.target.closest("[data-date]");
      if (!e)
        return;
      const t = xe(new Date(e.dataset.date));
      this.updateCurrentDate(t), this.onSelectDate(t);
    }, this.onMonthSelect = (s) => {
      const e = +s.target.value - 1, t = this.currentDate.getDate(), r = new Date(this.currentDate.getFullYear(), e, 1), o = Xe(r).getDate(), n = Math.min(t, o), i = new Date(this.currentDate.getFullYear(), e, n);
      this.updateCurrentDate(i);
    }, this.onYearSelect = (s) => {
      let e = +s.target.value;
      const t = s.target;
      isNaN(e) ? (e = (/* @__PURE__ */ new Date()).getFullYear(), t.value = String(e)) : e < 0 ? (e = 0, t.value = String(e)) : e > 9999 && (e = 9999, t.value = String(e));
      const r = this.currentDate.getDate(), o = this.currentDate.getMonth(), n = /* @__PURE__ */ new Date();
      n.setFullYear(e, o, 1);
      const i = Xe(n).getDate(), l = Math.min(r, i), c = /* @__PURE__ */ new Date();
      c.setFullYear(e, o, l), this.updateCurrentDate(c);
    }, this.onKeyDown = (s) => {
      this.disabled || (s.code === "ArrowLeft" ? (s.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousDay"), !0)) : s.code === "ArrowRight" ? (s.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextDay"), !0)) : s.code === "ArrowUp" ? (s.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousSameWeekDay"), !0)) : s.code === "ArrowDown" ? (s.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextSameWeekDay"), !0)) : s.code === "PageUp" ? (s.preventDefault(), s.shiftKey ? this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousYear"), !0) : this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousMonth"), !0)) : s.code === "PageDown" ? (s.preventDefault(), s.shiftKey ? this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextYear"), !0) : this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextMonth"), !0)) : s.code === "Home" ? (s.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "firstOfMonth"), !0)) : s.code === "End" ? (s.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "lastOfMonth"), !0)) : (s.code === "Space" || s.code === "Enter") && (s.preventDefault(), this.onSelectDate(this.currentDate)));
    }, this.onMouseEnter = (s) => {
      if (this.disabled)
        return;
      const e = xe(new Date(s.target.closest("td").dataset.date));
      this.hoveredDate = e;
    }, this.onMouseLeave = () => {
      this.hoveredDate = void 0;
    }, this.onFocus = (s) => {
      const e = new Date(s.target.dataset.date);
      ne(e, this.currentDate) || this.updateCurrentDate(e);
    };
  }
  componentWillLoad() {
    this.init();
  }
  watchFirstDayOfWeek() {
    this.updateWeekdays();
  }
  watchLocale() {
    this.locale || (this.locale = navigator?.language || "en-US"), this.updateWeekdays();
  }
  watchRange() {
    this.value = void 0, this.selectDate.emit(void 0);
  }
  watchStartDate() {
    this.currentDate = this.startDate ? xe(new Date(this.startDate)) : /* @__PURE__ */ new Date();
  }
  watchValue() {
    this.value && (Array.isArray(this.value) ? this.currentDate = this.value.length > 1 && !this.goToRangeStartOnSelect ? this.value[1] : this.value[0] : this.value instanceof Date && (this.currentDate = this.value));
  }
  componentDidRender() {
    this.moveFocusAfterMonthChanged && (this.focusDate(this.currentDate), this.moveFocusAfterMonthChanged = !1);
  }
  updateWeekdays() {
    this.weekdays = ys(this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek, this.locale);
  }
  getClassName(s) {
    return s ? `${this.elementClassName}__${s}` : this.elementClassName;
  }
  getCalendarRows() {
    const s = hs(this.currentDate, !0, this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek), e = [];
    for (let t = 0; t < s.length; t += 7) {
      const r = s.slice(t, t + 7);
      e.push(r);
    }
    return e;
  }
  getTitle() {
    if (this.value)
      if (this.isRangeValue(this.value)) {
        const s = Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value[0]), e = this.value[1] ? Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value[1]) : void 0;
        return e ? `${s} - ${e}` : s;
      } else
        return Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value);
  }
  focusDate(s) {
    var e;
    (e = this.el.querySelector(`[data-date="${me(s)}"]`)) === null || e === void 0 || e.focus();
  }
  updateCurrentDate(s, e) {
    const t = s.getMonth(), r = s.getFullYear();
    if (r > 9999 || r < 0)
      return;
    (t !== this.currentDate.getMonth() || r !== this.currentDate.getFullYear()) && (this.changeMonth.emit({
      month: Oo(s),
      year: Fo(s),
      day: s.getDate()
    }), e && (this.moveFocusAfterMonthChanged = !0)), this.currentDate = s, e && this.focusDate(this.currentDate);
  }
  onSelectDate(s) {
    var e, t;
    if (!this.disableDate(s))
      if (this.isRangeValue(this.value)) {
        const r = ((e = this.value) === null || e === void 0 ? void 0 : e[0]) === void 0 || this.value.length === 2 ? [s] : [this.value[0], s];
        r.length === 2 && r[0] > r[1] && r.reverse();
        const o = r[1] === void 0 ? [me(r[0])] : [me(r[0]), me(r[1])];
        this.value = r, this.selectDate.emit(o);
      } else {
        if (((t = this.value) === null || t === void 0 ? void 0 : t.getTime()) === s.getTime())
          return;
        this.value = s, this.selectDate.emit(me(s));
      }
  }
  // @ts-ignore
  isRangeValue(s) {
    return this.range;
  }
  render() {
    const s = this.showTodayButton || this.showClearButton;
    return v(Eo, null, v("div", { "aria-disabled": String(this.disabled), "aria-label": this.labels.picker, class: {
      [this.getClassName()]: !0,
      [`${this.getClassName()}--disabled`]: this.disabled
    }, role: "group" }, v("div", { class: this.getClassName("header") }, v("span", { "aria-atomic": "true", "aria-live": "polite", class: "visually-hidden" }, this.getTitle()), this.showYearStepper && v("button", { "aria-label": this.labels.previousYearButton, class: this.getClassName("previous-year-button"), disabled: this.disabled, innerHTML: this.previousYearButtonContent || void 0, onClick: this.previousYear, type: "button" }, v("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, v("polyline", { points: "11 17 6 12 11 7" }), v("polyline", { points: "18 17 13 12 18 7" }))), this.showMonthStepper && v("button", { "aria-label": this.labels.previousMonthButton, class: this.getClassName("previous-month-button"), disabled: this.disabled, innerHTML: this.previousMonthButtonContent || void 0, onClick: this.previousMonth, type: "button" }, v("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, v("polyline", { points: "15 18 9 12 15 6" }))), v("span", { class: this.getClassName("current-month") }, v("select", { title: this.labels.monthSelect, "aria-label": this.labels.monthSelect, class: this.getClassName("month-select"), disabled: this.disabled, name: "month", onChange: this.onMonthSelect }, us(this.locale).map((e, t) => v("option", { key: e, selected: this.currentDate.getMonth() === t, value: t + 1 }, e))), v("input", { title: this.labels.yearSelect, "aria-label": this.labels.yearSelect, class: this.getClassName("year-select"), disabled: this.disabled, max: 9999, maxLength: 4, min: 1, name: "year", onChange: this.onYearSelect, type: "number", value: this.currentDate.getFullYear() })), this.showMonthStepper && v("button", { "aria-label": this.labels.nextMonthButton, class: this.getClassName("next-month-button"), disabled: this.disabled, innerHTML: this.nextMonthButtonContent || void 0, onClick: this.nextMonth, type: "button" }, v("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, v("polyline", { points: "9 18 15 12 9 6" }))), this.showYearStepper && v("button", { "aria-label": this.labels.nextYearButton, class: this.getClassName("next-year-button"), disabled: this.disabled, innerHTML: this.nextYearButtonContent || void 0, onClick: this.nextYear, type: "button" }, v("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, v("polyline", { points: "13 17 18 12 13 7" }), v("polyline", { points: "6 17 11 12 6 7" })))), v("div", { class: this.getClassName("body") }, v("table", { class: this.getClassName("calendar"), onKeyDown: this.onKeyDown, role: "grid" }, v("thead", { class: this.getClassName("calendar-header") }, v("tr", { class: this.getClassName("weekday-row") }, this.weekdays.map((e) => v("th", { "aria-label": e[1], abbr: e[1], class: this.getClassName("weekday"), key: e[0], scope: "col" }, v("span", null, e[0]))))), v("tbody", null, this.getCalendarRows().map((e) => {
      const t = `row-${e[0].getMonth()}-${e[0].getDate()}`;
      return v("tr", { class: this.getClassName("calendar-row"), key: t }, e.map((r) => {
        var o, n, i, l, c;
        const h = ne(r, this.currentDate), u = r.getMonth() !== this.currentDate.getMonth(), y = Array.isArray(this.value) ? ne(r, this.value[0]) || ne(r, this.value[1]) : ne(r, this.value), f = this.isRangeValue ? xo(r, {
          from: (o = this.value) === null || o === void 0 ? void 0 : o[0],
          to: ((n = this.value) === null || n === void 0 ? void 0 : n[1]) || this.hoveredDate || this.currentDate
        }) : !1, D = !((i = this.value) === null || i === void 0) && i[0] ? [
          (l = this.value) === null || l === void 0 ? void 0 : l[0],
          ((c = this.value) === null || c === void 0 ? void 0 : c[1]) || this.hoveredDate
        ].sort((Ko, Zo) => Ko - Zo) : [], K = this.range && ne(D[0], r), de = this.range && ne(D[1], r), De = ne(r, /* @__PURE__ */ new Date()), Le = this.disableDate(r), jo = `cell-${r.getMonth()}-${r.getDate()}`, Wo = {
          [this.getClassName("date")]: !0,
          [this.getClassName("date--current")]: h,
          [this.getClassName("date--disabled")]: Le,
          [this.getClassName("date--overflowing")]: u,
          [this.getClassName("date--today")]: De,
          [this.getClassName("date--selected")]: y,
          [this.getClassName("date--in-range")]: f,
          [this.getClassName("date--start")]: K,
          [this.getClassName("date--end")]: de
        }, Yo = y ? "strong" : De ? "em" : "span";
        return v("td", { "aria-disabled": String(Le), "aria-selected": y ? "true" : void 0, "aria-current": De ? "date" : y ? "true" : void 0, class: Wo, "data-date": me(r), key: jo, onClick: this.onClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, role: "gridcell", tabIndex: ne(r, this.currentDate) && !this.disabled ? 0 : -1 }, v(Yo, { "aria-hidden": "true" }, r.getDate()), v("span", { class: "visually-hidden" }, Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(r)));
      }));
    })))), s && v("div", { class: this.getClassName("footer") }, this.showTodayButton && v("button", { class: this.getClassName("today-button"), disabled: this.disabled, innerHTML: this.todayButtonContent || void 0, onClick: this.showToday, type: "button" }, this.labels.todayButton), this.showClearButton && v("button", { class: this.getClassName("clear-button"), disabled: this.disabled, innerHTML: this.clearButtonContent || void 0, onClick: this.clear, type: "button" }, this.labels.clearButton))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      firstDayOfWeek: ["watchFirstDayOfWeek"],
      locale: ["watchLocale"],
      range: ["watchRange"],
      startDate: ["watchStartDate"],
      value: ["watchValue"]
    };
  }
  static get style() {
    return ps;
  }
}, [2, "wc-datepicker", {
  clearButtonContent: [1, "clear-button-content"],
  disabled: [4],
  disableDate: [16],
  elementClassName: [1, "element-class-name"],
  firstDayOfWeek: [2, "first-day-of-week"],
  range: [4],
  labels: [16],
  locale: [1],
  nextMonthButtonContent: [1, "next-month-button-content"],
  nextYearButtonContent: [1, "next-year-button-content"],
  previousMonthButtonContent: [1, "previous-month-button-content"],
  previousYearButtonContent: [1, "previous-year-button-content"],
  showClearButton: [4, "show-clear-button"],
  showMonthStepper: [4, "show-month-stepper"],
  showTodayButton: [4, "show-today-button"],
  showYearStepper: [4, "show-year-stepper"],
  startDate: [1, "start-date"],
  todayButtonContent: [1, "today-button-content"],
  value: [1040],
  maxSearchDays: [2, "max-search-days"],
  goToRangeStartOnSelect: [4, "go-to-range-start-on-select"],
  currentDate: [32],
  hoveredDate: [32],
  weekdays: [32]
}]), bs = vs;
var gs = Object.defineProperty, B = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && gs(e, t, o), o;
};
customElements.get("wc-datepicker") || customElements.define("wc-datepicker", bs);
let _s = 0;
var we;
const E = (we = class extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.width = "md", this.hideTodayButton = !1, this.hideClearButton = !1, this.disabled = !1, this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.form = null, this.tooltip = "", this.type = "date", this.label = "", this.description = "", this.startDate = "", this.inverted = !1, this.value = void 0, this.datepickerIsOpen = !1, this._hasUserInteracted = !1, this._onKeydownEsc = (e) => {
      if (e.key !== "Escape" || e.code !== "Escape" || !this.datepickerIsOpen) return;
      e.preventDefault(), e.stopPropagation(), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active"), this.datepickerIsOpen = !1, this.removeEventListener("keydown", this._handleFocusTrap), this.shadowRoot?.querySelector("input")?.focus();
    }, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-datepicker-${Date.now()}-${_s++}`), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("focusout", this._handleBlur), this.addEventListener("keydown", this._onKeydownEsc);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("focusout", this._handleBlur), this.removeEventListener("keydown", this._onKeydownEsc);
  }
  async firstUpdated() {
    this._setValue(this.value), !(this._shouldUseNativeDatepicker() || !await this._whenWcDatepickerReady()) && (setTimeout(() => this._replaceButtonSVG(), 0), setTimeout(() => this._addMonthDropdownIcon(), 0), setTimeout(() => this._handleDateChange(), 0), setTimeout(() => this._onDocumentClick(), 0));
  }
  async _whenWcDatepickerReady() {
    await customElements.whenDefined("wc-datepicker");
    const e = this.shadowRoot?.querySelector(
      "wc-datepicker"
    );
    return e ? ("updateComplete" in e && await e.updateComplete, await new Promise((t) => requestAnimationFrame(t)), e) : null;
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  /**
   * Form helper methods:
   * - _setValue: set internal value and trigger validation
   * - _manageRequire: handle required state
   * - _validate: actively validate and show errors
   * - checkValidity: passive boolean check without UI
   * - _setValidityMessage: sync validation message with UI and internals
   * - _handleInvalid: handle form invalid event and focus first invalid field
   */
  _setValue(e) {
    if (!e) {
      this.value = void 0, this._internals.setFormValue(""), this._manageRequire();
      return;
    }
    const t = e instanceof Date ? e : this._parseLocalDate(e), r = [
      t.getFullYear(),
      String(t.getMonth() + 1).padStart(2, "0"),
      String(t.getDate()).padStart(2, "0")
    ].join("-");
    this.value = t, this._internals.setFormValue(r);
    const o = this.shadowRoot?.querySelector("input");
    o && (o.value = r);
    const n = this.shadowRoot?.querySelector("wc-datepicker");
    n && (n.value = t), this._manageRequire();
  }
  // Called to internally set the initial internalElement required flag.
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "This field is required.";
    this.required && !this.value ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}));
  }
  /**
   * Actively validates the component:
   * - Updates internal validity state
   * - Updates UI (e.g. showError)
   * - Called on blur/change or form submission
   */
  _validate() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    this._manageRequire();
    const t = e.validationMessage;
    this._setValidityMessage(t);
  }
  /**
   * Passive check of validity:
   * - Returns true/false
   * - Does NOT update UI or show errors
   * - Used in form submission checks
   */
  checkValidity() {
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  // Sets custom validity message
  _setValidityMessage(e = "") {
    if (!this._internals) return;
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  // Handles native 'invalid' events
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this.shadowRoot?.querySelector("input");
    if (t) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  /**
   * Replaces the default wc-datepicker month navigation buttons
   * with NYS icon components for previous and next month.
   */
  _replaceButtonSVG() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    if (!e) return;
    const t = e.querySelector(
      ".wc-datepicker__next-month-button"
    ), r = e.querySelector(
      ".wc-datepicker__previous-month-button"
    );
    !t || !r || (r.innerHTML = `
    <nys-icon name="arrow_back" size="18"></nys-icon>
  `, t.innerHTML = `
    <nys-icon name="arrow_forward" size="18"></nys-icon>
  `);
  }
  _addMonthDropdownIcon() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    if (!e) return;
    const t = e.querySelector(
      ".wc-datepicker__month-select"
    );
    if (t && !t.parentElement?.classList.contains("month-wrapper")) {
      const r = document.createElement("span");
      r.className = "month-wrapper", t.parentNode?.insertBefore(r, t), r.appendChild(t);
      const o = document.createElement("nys-icon");
      o.setAttribute("name", "chevron_down"), o.setAttribute("id", "wc-month-dropdown-icon"), o.setAttribute("size", "20"), r.appendChild(o);
    }
  }
  // Creates a Date at local midnight to avoid UTC timezone shifting
  _parseLocalDate(e) {
    const [t, r, o] = e.split("-").map(Number);
    return new Date(t, r - 1, o);
  }
  _setTodayDate() {
    const e = /* @__PURE__ */ new Date();
    e.setHours(0, 0, 0, 0), this._setValue(e), this._setFocusOnTodayDate();
  }
  async _setFocusOnTodayDate(e = !1) {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0);
    const r = [
      t.getFullYear(),
      String(t.getMonth() + 1).padStart(2, "0"),
      String(t.getDate()).padStart(2, "0")
    ].join("-"), o = this.shadowRoot?.querySelector("wc-datepicker");
    if (!o) return;
    const n = o.querySelector(
      `td[data-date="${r}"]`
    );
    n && (e || n.focus());
  }
  _dispatchInputEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleInputKeydown(e) {
    this.disabled || this._shouldUseNativeDatepicker() || ((e.key == " " || e.code == "Space") && (e.preventDefault(), this._openDatepicker()), (e.key === "Escape" || e.code === "Escape") && (e.preventDefault(), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active")));
  }
  _handleBlur(e) {
    const t = e.relatedTarget;
    if (t && (this.contains(t) || this.shadowRoot?.contains(t))) return;
    this._hasUserInteracted || (this._hasUserInteracted = !0), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active"), this.datepickerIsOpen = !1, this._validate(), this.dispatchEvent(new Event("nys-blur")), this.removeEventListener("keydown", this._handleFocusTrap);
  }
  // For when users click outside of the datepicker, we remove the calendar popup
  _onDocumentClick() {
    if (this._shouldUseNativeDatepicker()) return;
    const e = (t) => {
      const r = t.composedPath(), o = this.shadowRoot?.querySelector(
        ".nys-datepicker--input-container"
      ), n = this.shadowRoot?.querySelector(
        ".wc-datepicker--container"
      ), i = this.shadowRoot?.querySelector("wc-datepicker");
      o && r.includes(o) || n && r.includes(n) || i && r.includes(i) || i?.classList.remove("active");
    };
    document.addEventListener("click", e);
  }
  _toggleDatepicker() {
    if (this.disabled) return;
    if (this._shouldUseNativeDatepicker()) {
      const r = this.shadowRoot?.querySelector(
        "input"
      );
      r && r.focus();
      return;
    }
    const t = this.shadowRoot?.querySelector("wc-datepicker")?.classList.toggle("active");
    this.datepickerIsOpen = !!t, this.value || this._setFocusOnTodayDate(), this.addEventListener("keydown", this._handleFocusTrap);
  }
  _openDatepicker() {
    if (this.disabled || this._shouldUseNativeDatepicker()) return;
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    e && (this.value || this._setFocusOnTodayDate(!0), e?.classList.add("active"), this.datepickerIsOpen = !0, this.addEventListener("keydown", this._handleFocusTrap));
  }
  _handleDateChange() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    e && e.addEventListener("selectDate", (t) => {
      const r = t.detail, o = this._parseLocalDate(r);
      this._setValue(o), this._validate(), this._dispatchInputEvent(), e.classList.remove("active"), this.datepickerIsOpen = !1, this.removeEventListener("keydown", this._handleFocusTrap);
    });
  }
  _handleTodayClick() {
    this.disabled || (this._setTodayDate(), this._hasUserInteracted && this._validate());
  }
  _handleClearClick() {
    if (this.disabled) return;
    this.value = void 0, this._internals.setFormValue("");
    const e = this.shadowRoot?.querySelector("input");
    e && (e.value = ""), this._hasUserInteracted && this._validate();
  }
  _handleInputChange(e) {
    const t = e.target;
    if (!t) return;
    const r = this._getValidDateFromInput(t.value);
    if (!r) {
      t.value || (this.value = void 0, this._internals.setFormValue(""), this._hasUserInteracted && this._validate());
      return;
    }
    this._setValue(r), this._hasUserInteracted && this._validate(), this._dispatchInputEvent();
  }
  _getValidDateFromInput(e) {
    const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
    return !r || Number(r[1]) < 1e3 ? null : this._parseLocalDate(e);
  }
  _handleFocusTrap(e) {
    if (!this.datepickerIsOpen || e.key !== "Tab") return;
    const t = this.shadowRoot?.querySelector(
      ".wc-datepicker--container"
    );
    if (!t) return;
    const r = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ], o = [];
    if (t.querySelectorAll("nys-button").forEach((c) => {
      o.push(c);
    }), o.push(
      ...Array.from(
        t.querySelectorAll(r.join(","))
      ).filter((c) => c.offsetParent !== null)
    ), o.length === 0) return;
    const n = o[0], i = o[o.length - 1], l = this.shadowRoot?.activeElement;
    e.shiftKey ? l === n && (e.preventDefault(), i.focus()) : l === i && (e.preventDefault(), n.focus());
  }
  _isSafari() {
    const e = navigator.userAgent;
    return /Safari/.test(e) && !/Chrome|Chromium|Edg/.test(e);
  }
  /**
   * Determines whether the current device uses a coarse pointer.
   * A coarse pointer usually means touch-based input where precise pointing
   * is not expected, such as fingers on phones and most tablets.
   *
   * Note: This is not a guarantee of a mobile device.
   * Some non-mobile devices may also report a coarse pointer,
   * and some mobile devices may not.
   *
   * @returns `true` if the device reports a coarse pointer, otherwise `false`.
   */
  _isMobile() {
    return window.matchMedia("(pointer: coarse)").matches;
  }
  _shouldUseNativeDatepicker() {
    return this._isSafari() || this._isMobile();
  }
  render() {
    const e = this._shouldUseNativeDatepicker();
    return d` <div class="nys-datepicker--container">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        ></nys-label>
        <div
          class="nys-datepicker--input-container ${this.disabled ? "disabled" : ""}"
        >
          <input
            id=${this.id}
            class="nys-datepicker--input"
            type="date"
            max="9999-12-31"
            ?required=${this.required}
            .value=${this.value instanceof Date ? this.value.toISOString().split("T")[0] : this.value || ""}
            ?disabled=${this.disabled}
            aria-label=${p(this.label || void 0)}
            aria-disabled=${p(this.disabled ? "true" : void 0)}
            aria-required=${p(this.required ? "true" : void 0)}
            @click=${this._openDatepicker}
            @input=${this._handleInputChange}
            @blur=${this._handleBlur}
            @keydown=${this._handleInputKeydown}
          />
          ${e ? null : d`
                <button
                  id="calendar-button"
                  @click=${this._toggleDatepicker}
                  tabindex=${this.disabled ? "-1" : "0"}
                  ?disabled=${this.disabled}
                  aria-label="Open calendar"
                  aria-haspopup="dialog"
                  aria-controls="wc-datepicker-popup"
                  aria-expanded=${this.datepickerIsOpen ? "true" : "false"}
                >
                  <nys-icon name="calendar_month" size="24"></nys-icon>
                </button>
              `}
        </div>

        <div class="wc-datepicker--container">
          <wc-datepicker
            id="wc-datepicker-popup"
            .value=${this.value instanceof Date ? this.value : this.value ? this._parseLocalDate(this.value) : void 0}
            ?disabled=${this.disabled}
            start-date=${p(this.startDate ? this.startDate : void 0)}
            role="dialog"
            aria-modal=${this.datepickerIsOpen ? "true" : "false"}
          >
            ${!this.hideTodayButton || !this.hideClearButton ? d`
                  <div class="wc-datepicker--button-container">
                    ${this.hideTodayButton ? null : d`
                          <nys-button
                            label="Today"
                            size="sm"
                            fullWidth
                            variant="outline"
                            ?disabled=${this.disabled}
                            @nys-click=${this._handleTodayClick}
                          ></nys-button>
                        `}
                    ${this.hideClearButton ? null : d`
                          <nys-button
                            label="Clear"
                            size="sm"
                            fullWidth
                            variant="outline"
                            ?disabled=${this.disabled}
                            @nys-click=${this._handleClearClick}
                          ></nys-button>
                        `}
                  </div>
                ` : null}
          </wc-datepicker>
        </div>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage || this.errorMessage}
      ></nys-errormessage>`;
  }
}, we.styles = g(xr), we.formAssociated = !0, we);
B([
  a({ type: String, reflect: !0 })
], E.prototype, "id");
B([
  a({ type: String, reflect: !0 })
], E.prototype, "name");
B([
  a({ type: String, reflect: !0 })
], E.prototype, "width");
B([
  a({ type: Boolean })
], E.prototype, "hideTodayButton");
B([
  a({ type: Boolean })
], E.prototype, "hideClearButton");
B([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "disabled");
B([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "required");
B([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "optional");
B([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "showError");
B([
  a({ type: String })
], E.prototype, "errorMessage");
B([
  a({ type: String, reflect: !0 })
], E.prototype, "form");
B([
  a({ type: String })
], E.prototype, "tooltip");
B([
  a({ type: String })
], E.prototype, "type");
B([
  a({ type: String })
], E.prototype, "label");
B([
  a({ type: String })
], E.prototype, "description");
B([
  a({ type: String })
], E.prototype, "startDate");
B([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "inverted");
B([
  a({
    type: Object,
    converter: {
      fromAttribute: (s) => s ? E.prototype._parseLocalDate(s) : void 0,
      toAttribute: (s) => s ? typeof s == "string" ? s : s.toISOString().split("T")[0] : ""
    }
  })
], E.prototype, "value");
B([
  x()
], E.prototype, "datepickerIsOpen");
let ms = E;
customElements.get("nys-datepicker") || customElements.define("nys-datepicker", ms);
const xs = ":host{--_nys-divider-size: var(--nys-size-1px, 1px);--_nys-divider-color: var(--nys-color-neutral-500, #797c7f);--_nys-divider-width: 100%}:host([inverted]){--_nys-divider-color: var(--nys-color-ink-reverse, #ffffff)}.nys-divider{width:var(--_nys-divider-width);height:var(--_nys-divider-size);background-color:var(--_nys-divider-color);flex:1 0 0;margin:0;border:none}";
var ws = Object.defineProperty, ks = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && ws(e, t, o), o;
};
let Cs = 0;
const Nt = class Nt extends b {
  constructor() {
    super(), this.inverted = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-divider-${Date.now()}-${Cs++}`;
  }
  render() {
    return d`<hr class="nys-divider" />`;
  }
};
Nt.styles = g(xs);
let nt = Nt;
ks([
  a({ type: Boolean, reflect: !0 })
], nt.prototype, "inverted");
customElements.get("nys-divider") || customElements.define("nys-divider", nt);
const Vo = ':host{--_nys-dropdownmenu-width: 180px;--_nys-dropdownmenu-height: 100%;--_nys-dropdownmenu-radius: var(--nys-radius-md, 4px);--_nys-dropdownmenu-border-width: var(--nys-border-width-sm, 1px);--_nys-dropdownmenu-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-dropdownmenu-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-dropdownmenu-boxshadow-color-100: var( --nys-color-black-transparent-100, rgba(27, 27, 27, .1) );--_nys-dropdownmenu-boxshadow-color-50: var( --nys-color-black-transparent-50, rgba(27, 27, 27, .01) );--_nys-dropdownmenu-gap: var(--size-50, 4px);--_nys-dropdownmenu-padding: var(--size-50, 4px);--_nys-dropdownmenu-font-size: var(--nys-font-size-ui-md, 16px);--_nys-dropdownmenu-font-weight: var(font-weight: 400);--_nys-dropdownmenu-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-dropdownmenu-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-dropdownmenuitem-color: var(--Text, var(--Color-Text-text, #000000));--_nys-dropdownmenuitem-padding: var(--size-130, 11px) var(--size-100, 8px);--_nys-dropdownmenuitem-border-radius: var(--medium, 6px);--_nys-dropdownmenuitem-background-color: var(--Color-Surface-surface-1, #ffffff);--_nys-dropdownmenuitem-background-color--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-dropdownmenuitem-background-color--active: var( --nys-color-neutral-50, #ededed );--_nys-dropdownmenuitem-color--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-dropdownmenuitem-outline-width: var(--nys-border-width-md, 2px);--_nys-dropdownmenuitem-outline-color: var(--nys-color-focus, #004dd1)}.nys-dropdownmenu{position:fixed;top:0;left:0}.nys-dropdownmenu.active ul{display:flex}.nys-dropdownmenu ul{display:none;align-items:flex-start;flex-direction:column;gap:var(--_nys-dropdownmenu-gap);width:var(--_nys-dropdownmenu-width);height:var(--_nys-dropdownmenu-height);border-radius:var(--_nys-dropdownmenu-radius);border:var(--_nys-dropdownmenu-border-width) solid var(--_nys-dropdownmenu-border-color);background-color:var(--_nys-dropdownmenu-background-color);box-shadow:0 4px 6px -1px var(--_nys-dropdownmenu-boxshadow-color-100),0 4px 6px -1px var(--_nys-dropdownmenu-boxshadow-color-50);padding:var(--_nys-dropdownmenu-padding);font-family:var(--_nys-dropdownmenu-font-family);font-size:var(--_nys-dropdownmenu-font-size);font-weight:var(--_nys-dropdownmenu-font-weight);line-height:var(--_nys-dropdownmenu-line-height);overflow:hidden;margin:0}.nys-dropdownmenuitem{list-style:none;width:var(--_nys-dropdownmenu-width);padding:0;margin:0}.nys-dropdownmenuitem a{display:flex;padding:var(--_nys-dropdownmenuitem-padding);align-items:flex-start;border-radius:var(--_nys-dropdownmenuitem-border-radius);background-color:var(--_nys-dropdownmenuitem-background-color);width:100%;box-sizing:border-box;text-decoration:none;text-wrap:wrap;color:var(--_nys-dropdownmenuitem-color);transition:.05s ease-in-out all}.nys-dropdownmenuitem a:hover:not(.disabled):not([aria-disabled=true]){background-color:var(--_nys-dropdownmenuitem-background-color--hover)}.nys-dropdownmenuitem a:active:not(.disabled):not([aria-disabled=true]){background-color:var(--_nys-dropdownmenuitem-background-color--active)}.nys-dropdownmenuitem a:focus:not(.disabled):not([aria-disabled=true]){outline:var(--_nys-dropdownmenuitem-outline-width) solid var(--_nys-dropdownmenuitem-outline-color)}.nys-dropdownmenuitem a.disabled,.nys-dropdownmenuitem a[aria-disabled=true]{color:var(--_nys-dropdownmenuitem-color--disabled);pointer-events:none;cursor:default}';
var $s = Object.defineProperty, wt = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && $s(e, t, o), o;
};
const ct = class ct extends b {
  constructor() {
    super(...arguments), this.label = "", this.href = "", this.disabled = !1, this.divider = "";
  }
  _handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this.dispatchEvent(
      new CustomEvent("nys-dropdownmenuitem-select", {
        bubbles: !0,
        composed: !0,
        detail: { label: this.label, href: this.href }
      })
    );
  }
  render() {
    return d`<li class="nys-dropdownmenuitem" role="presentation">
      <a
        class=${this.disabled ? "disabled" : ""}
        href=${this.disabled ? "" : this.href}
        role="menuitem"
        aria-disabled="${this.disabled ? "true" : "false"}"
        aria-label=${this.label}
        tabindex=${this.disabled ? "-1" : "0"}
        @click="${this._handleClick}"
        >${this.label}</a
      >
    </li>`;
  }
};
ct.styles = g(Vo), ct.shadowRootOptions = {
  ...b.shadowRootOptions,
  delegatesFocus: !0
};
let $e = ct;
wt([
  a({ type: String })
], $e.prototype, "label");
wt([
  a({ type: String })
], $e.prototype, "href");
wt([
  a({ type: Boolean, reflect: !0 })
], $e.prototype, "disabled");
wt([
  a({ type: String })
], $e.prototype, "divider");
customElements.get("nys-dropdownmenuitem") || customElements.define("nys-dropdownmenuitem", $e);
var Es = Object.defineProperty, Mt = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Es(e, t, o), o;
};
const Ht = class Ht extends b {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.for = "", this.showDropdown = !1, this.position = null, this._trigger = null, this._menuElement = null, this._ariaTarget = null, this.GAP = 4, this._toggleDropdown = () => {
      this.showDropdown = !this.showDropdown, this._ariaTarget?.setAttribute("aria-expanded", String(this.showDropdown)), this.showDropdown ? (window.addEventListener("scroll", this._handleWindowScroll, !0), window.addEventListener("resize", this._handleWindowResize), this._menuElement = this.shadowRoot?.querySelector(
        ".nys-dropdownmenu"
      ), this._menuElement.addEventListener("keydown", this._handleMenuKeydown), requestAnimationFrame(() => this._positionMenu())) : (window.removeEventListener("scroll", this._handleWindowScroll, !0), window.removeEventListener("resize", this._handleWindowResize), this._menuElement.removeEventListener(
        "keydown",
        this._handleMenuKeydown
      ));
    }, this._handleTriggerKeydown = (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._toggleDropdown()), e.key === "Escape" && this.showDropdown && (e.preventDefault(), this._closeDropdown());
    }, this._handleMenuKeydown = (e) => {
      const t = this._getMenuItems(), r = t.indexOf(document.activeElement);
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this._closeDropdown();
          break;
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          const o = r < t.length - 1 ? r + 1 : 0;
          t[o].focus();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          const n = r > 0 ? r - 1 : t.length - 1;
          t[n].focus();
          break;
      }
    }, this._handleWindowResize = () => {
      this.showDropdown && this._positionMenu();
    }, this._handleWindowScroll = () => {
      this.showDropdown && this._positionMenu();
    };
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  async firstUpdated() {
    await this.updateComplete, this.applyInverseTransform(), this._connectTrigger();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _findTrigger() {
    const e = this.for;
    if (!e) return null;
    let t = document.getElementById(e);
    if (t) return t;
    const r = (o) => {
      for (const n of Array.from(o.querySelectorAll("*"))) {
        const i = n.shadowRoot;
        if (i) {
          const l = i.getElementById(e);
          if (l) return l;
          const c = r(i);
          if (c) return c;
        }
      }
      return null;
    };
    return r(document);
  }
  _connectTrigger() {
    const e = this._findTrigger();
    if (!e) return;
    this._trigger = e;
    const t = e.tagName.toLowerCase() === "nys-button" ? e.shadowRoot?.querySelector("button") ?? e : e;
    t.setAttribute("aria-haspopup", "menu"), t.setAttribute("aria-expanded", "false"), this._ariaTarget = t, this._trigger.addEventListener("click", this._toggleDropdown), this._trigger.addEventListener("keydown", this._handleTriggerKeydown);
  }
  _closeDropdown() {
    this.showDropdown = !1, this._ariaTarget?.setAttribute("aria-expanded", "false"), this._trigger?.focus();
  }
  _getMenuItems() {
    return (this.shadowRoot?.querySelector("slot")?.assignedElements({ flatten: !0 }) || []).filter(
      (r) => r && !r.hasAttribute("disabled")
    );
  }
  // In some iframes (like Storybook's) or embedded containers , parent elements may have CSS transforms applied, creating a new coordinate context.
  // This function removes such transforms to prevent them from affecting tooltip positioning calculations.
  applyInverseTransform() {
    document.querySelectorAll('div[scale="1"]').forEach((e) => {
      e.style.transform = "none";
    });
  }
  /**
   * Position Logic
   * --------------------------------------------------------------------------
   */
  /**
   * The controller function for positioning the dropdown menu.
   * The logic diverts to if user sets position or we auto position the dropdown menu
   */
  _positionMenu() {
    if (!this._trigger || (this._menuElement = this.shadowRoot?.querySelector(
      ".nys-dropdownmenu"
    ), !this._menuElement)) return;
    const e = this.position ? this._setUserPosition(this.position) : this._autoPosition(), t = this._calculateCoordinates(e);
    this._applyPosition(t);
  }
  _setUserPosition(e) {
    const t = this._checkSpaceAvailable(), r = this._menuElement.getBoundingClientRect();
    return this._checkPositionFits(
      e,
      t,
      r
    ) ? e : this._findBestAlternative(e, t, r);
  }
  /**
   * Auto Positioning of the dropdown menu relies on the best surrounding space available
   * to select the desirable position.
   */
  _autoPosition() {
    const e = this._checkSpaceAvailable(), t = this._menuElement.getBoundingClientRect(), r = "bottom-end";
    return this._checkPositionFits(r, e, t) ? r : this._findBestAlternative(r, e, t);
  }
  /**
   * Checks if the dropdown menu fits inside the viewport on the given side of the trigger.
   * Overrides user set position for auto-positioning if user's desire space is not available
   */
  _checkSpaceAvailable() {
    if (!this._trigger)
      return { top: 0, bottom: 0, start: 0, end: 0 };
    const e = this._trigger.getBoundingClientRect(), t = window.innerWidth, r = window.innerHeight;
    return {
      top: e.top,
      bottom: r - e.bottom,
      start: e.left,
      end: t - e.right
    };
  }
  _checkPositionFits(e, t, r) {
    const o = r.width, n = r.height, [i, l] = e.split("-"), c = i === "bottom" ? t.bottom >= n + this.GAP : t.top >= n + this.GAP, h = l === "start" ? t.end >= o : t.start >= o;
    return console.log(
      "verticalFits && horizontalFits: ",
      c,
      h
    ), c && h;
  }
  /**
   * This position is called for when user's set position didn't fit OR auto positioning when default position doesn't fit
   * We look for the best alternative positions in order of preference base on the set position (e.g. bottom-start => bottom-end).
   * @param userPosition
   * @param space
   * @param menuRect
   */
  _findBestAlternative(e, t, r) {
    const [o, n] = e.split("-"), i = [
      `${o === "bottom" ? "top" : "bottom"}-${n}`,
      // Flip vertical
      `${o}-${n === "start" ? "end" : "start"}`,
      // Flip horizontal
      `${o === "bottom" ? "top" : "bottom"}-${n === "start" ? "end" : "start"}`
      // Flip both
    ];
    for (const l of i)
      if (this._checkPositionFits(l, t, r))
        return l;
    return this._findMostAvailableSpace(t);
  }
  _findMostAvailableSpace(e) {
    const t = e.bottom >= e.top ? "bottom" : "top", r = e.start >= e.end ? "start" : "end";
    return `${t}-${r}`;
  }
  /**
   * A valid ideal position has been chosen.
   * This function calculates the coordinate of the trigger to properly position the dropdown menu.
   * @param position
   * @returns
   */
  _calculateCoordinates(e) {
    if (!this._trigger || !this._menuElement)
      return { top: 0, left: 0 };
    const t = this._trigger.getBoundingClientRect(), r = this._menuElement.getBoundingClientRect(), [o, n] = e.split("-");
    let i = 0, l = 0;
    return o === "bottom" ? i = t.bottom + this.GAP : i = t.top - r.height - this.GAP, n === "start" ? l = t.left : l = t.right - r.width, { top: i, left: l };
  }
  _applyPosition(e) {
    this._menuElement && (this._menuElement.style.top = `${e.top}px`, this._menuElement.style.left = `${e.left}px`);
  }
  render() {
    return d`<div
      class="nys-dropdownmenu ${this.showDropdown ? "active" : ""}"
      for=${this.for}
      ?hidden=${!this.showDropdown}
    >
      <ul role="menu">
        <slot></slot>
      </ul>
    </div>`;
  }
};
Ht.styles = g(Vo);
let qe = Ht;
Mt([
  a({ type: String, reflect: !0 })
], qe.prototype, "for");
Mt([
  a({ type: Boolean })
], qe.prototype, "showDropdown");
Mt([
  a({ type: String, reflect: !0 })
], qe.prototype, "position");
customElements.get("nys-dropdownmenu") || customElements.define("nys-dropdownmenu", qe);
const Ss = ':host{--_nys-errormessage-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);--_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);--_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-errormessage-letter-spacing: var( --nys-font-letterspacing-ui-md, .044px );--_nys-errormessage-color: var(--nys-color-danger, #b52c2c);--_nys-errormessage-gap: var(--nys-space-100, 8px);--_nys-errormessage-padding--divider: var(--nys-space-50, 4px);--_nys-errormessage-width--divider: var(--nys-border-width-sm, 1px);--_nys-errormessage-margin-top: 0}.nys-errormessage{display:flex;align-items:center;gap:var(--_nys-errormessage-gap);font-family:var(--_nys-errormessage-font-family);font-weight:var(--_nys-errormessage-font-weight);font-size:var(--_nys-errormessage-font-size);line-height:var(--_nys-errormessage-line-height);letter-spacing:var(--_nys-errormessage-letter-spacing);color:var(--_nys-errormessage-color);margin-top:var(--_nys-errormessage-margin-top)}.nys-errormessage[showDivider]{padding-top:var(--_nys-errormessage-padding--divider);margin-top:var(--_nys-errormessage-padding--divider);border-top:var(--_nys-errormessage-width--divider) solid var(--_nys-errormessage-color)}';
var Ds = Object.defineProperty, It = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Ds(e, t, o), o;
};
const dt = class dt extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.showError = !1, this.errorMessage = "", this.showDivider = !1, this._internals = this.attachInternals();
  }
  render() {
    return d`${this.showError ? d`<div
          class="nys-errormessage"
          ?showDivider=${this.showDivider}
          role="alert"
        >
          <nys-icon name="error" size="2xl"></nys-icon>
          ${this._internals.validationMessage || this.errorMessage}
        </div>` : ""}`;
  }
};
dt.styles = g(Ss), dt.formAssociated = !0;
let Re = dt;
It([
  a({ type: Boolean })
], Re.prototype, "showError");
It([
  a({ type: String })
], Re.prototype, "errorMessage");
It([
  a({ type: Boolean, reflect: !0 })
], Re.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", Re);
async function Ls(s, e) {
  if (!e || e.trim() === "") return !0;
  const t = e.toLowerCase().split(",").map((n) => n.trim()), r = s.name.toLowerCase(), o = r.includes(".") ? r.split(".").pop() : "";
  for (const n of t)
    if (n.startsWith(".") && n.slice(1) === o || n.endsWith("/*") && s.type.startsWith(n.slice(0, -1)) || s.type === n)
      return !0;
  return !1;
}
const zs = ':host{--_nys-fileitem-border-radius: var(--nys-radius-md, 4px);--_nys-fileitem-padding: var(--nys-space-100, 8px) var(--nys-space-200, 16px);--_nys-fileitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-fileitem-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-fileitem-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-fileitem-font-size: var(--nys-font-size-ui-md, 16px);--_nys-fileitem-font-weight: var(--nys-font-weight-regular, 400);--_nys-fileitem-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-fileitem-letter-spacing: var( --nys-font-letterspacing-ui-md, .044px );--_nys-fileitem-background-color--progress: var( --nys-color-neutral-50, #ededed );--_nys-fileitem-background-color--progress--fill: var( --nys-color-info, #004dd1 )}.file-item{position:relative;border-radius:var(--_nys-fileitem-border-radius);border-width:var(--nys-border-width-sm, 1px);border-style:solid;border-color:var(--_nys-fileitem-border-color);background-color:var(--_nys-fileitem-background-color)}.file-item.error{--_nys-fileitem-border-color: var(--nys-color-danger, #b52c2c)}.file-item__main{display:flex;place-items:center center;gap:var(--_nys-fileinput-gap);padding:var(--_nys-fileitem-padding);height:56px;box-sizing:border-box}.file-item__info{display:flex;flex-direction:column;flex:1;min-width:0;font-family:var(--_nys-fileitem-font-family);font-size:var(--_nys-fileitem-font-size);font-style:normal;font-weight:var(--_nys-fileitem-font-weight);line-height:var(--_nys-fileitem-line-height);letter-spacing:var(--_nys-fileitem-letter-spacing)}.file-item__info-name{display:flex;max-width:100%;overflow:hidden;white-space:nowrap;align-items:center}.file-item__info-name-start{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1;min-width:0}.file-item p{margin:0}.file-item__error{color:var(--nys-color-danger, #b52c2c);text-overflow:ellipsis;font-weight:700}progress{position:absolute;bottom:0;display:flex;width:100%;height:6px;border-radius:var(--nys-radius-round, 1776px);background:var(--_nys-fileitem-background-color--progress--fill);overflow:hidden;appearance:none}progress::-moz-progress-bar{background-color:var(--_nys-fileitem-background-color--progress)}progress::-webkit-progress-value{background-color:var(--_nys-fileitem-background-color--progress--fill)}progress::-webkit-progress-bar{background-color:var(--_nys-fileitem-background-color--progress)}.file-icon[name=progress_activity]{animation:spin 1s linear infinite}.file-icon[name=error]{color:var(--nys-color-danger, #b52c2c)}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}';
var As = Object.defineProperty, kt = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && As(e, t, o), o;
};
const Ut = class Ut extends b {
  constructor() {
    super(...arguments), this.filename = "", this.status = "pending", this.progress = 0, this.errorMessage = "";
  }
  _handleRemove() {
    this.dispatchEvent(
      new CustomEvent("nys-fileRemove", {
        detail: { filename: this.filename },
        bubbles: !0,
        composed: !0
      })
    );
  }
  splitFilename(e) {
    const t = e.lastIndexOf("."), r = t !== -1 ? e.slice(t) : "", o = t !== -1 ? e.slice(0, t) : e, n = o.slice(0, o.length - 3), i = o.slice(-3);
    return { startPart: n, endPart: i, extension: r };
  }
  render() {
    const { startPart: e, endPart: t, extension: r } = this.splitFilename(this.filename);
    return d`
      <div
        class="file-item ${this.status}"
        aria-busy=${this.status === "processing" ? "true" : "false"}
        aria-label="You have selected ${this.filename}"
      >
        <div class="file-item__main" role="group">
          <nys-icon
            class="file-icon"
            name=${this.status === "processing" ? "progress_activity" : this.status === "error" ? "error" : "attach_file"}
            size="2xl"
          ></nys-icon>
          <div class="file-item__info">
            <div class="file-item__info-name">
              <span class="file-item__info-name-start">${e}</span>
              <span class="file-item__info-name-end"
                >${t}${r}</span
              >
            </div>
            ${this.errorMessage ? d`<p
                  class="file-item__error"
                  role="alert"
                  aria-live="assertive"
                  aria-invalid="true"
                  aria-errormessage=${this.errorMessage}
                  id="${this.filename}-error"
                >
                  ${this.errorMessage}
                </p>` : null}
          </div>
          <nys-button
            circle
            icon="close"
            ariaLabel="close button"
            size="sm"
            variant="ghost"
            @nys-click=${this._handleRemove}
            ariaLabel="Remove file: ${this.filename}"
          ></nys-button>
        </div>
        ${this.status === "processing" ? d`<div
              class="file-item__progress-container"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="${this.progress}"
              aria-label="Upload progress for ${this.filename}"
            >
              <progress value=${this.progress} max="100"></progress>
            </div>` : null}
      </div>
    `;
  }
};
Ut.styles = g(zs);
let Ee = Ut;
kt([
  a({ type: String })
], Ee.prototype, "filename");
kt([
  a({ type: String })
], Ee.prototype, "status");
kt([
  a({ type: Number })
], Ee.prototype, "progress");
kt([
  a({ type: String })
], Ee.prototype, "errorMessage");
customElements.define("nys-fileitem", Ee);
const Bs = ':host{--_nys-fileinput-gap: var(--nys-space-100, 8px);--_nys-fileinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-fileinput-font-weight: var(--nys-font-weight-semibold, 600);--_nys-fileinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-fileinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-fileinput-background-color--dropzone: var( --nys-color-ink-reverse, #ffffff );--_nys-fileinput-background-color--dropzone--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-fileinput-background-color--dropzone--active: var( --nys-color-theme-faint, #f7fafd );--_nys-fileinput-border-radius--dropzone: var( --nys-radius-lg, var(--nys-space-100, 8px) );--_nys-fileinput-border-style: dashed;--_nys-fileinput-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-fileinput-border-width: var(--nys-border-width-sm, 1px)}.nys-fileinput{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:var(--_nys-fileinput-gap);font-family:var(--_nys-fileinput-font-family);font-size:var(--_nys-fileinput-font-size);font-weight:var(--_nys-fileinput-font-weight);line-height:var(--_nys-fileinput-line-height)}:host([width=lg]) .nys-fileinput{max-width:var(--nys-form-width-lg, 384px)}ul{list-style-type:none;padding:0;margin:0;width:100%;display:flex;flex-direction:column;gap:var(--_nys-fileinput-gap)}.nys-fileinput__dropzone{display:flex;padding:var(--nys-space-400, 32px) var(--nys-space-200, 16px);justify-content:center;align-items:center;gap:12px;align-self:stretch;border-radius:var(--_nys-fileinput-border-radius--dropzone);outline:var(--_nys-fileinput-border-width) var(--_nys-fileinput-border-style) var(--_nys-fileinput-border-color);background-color:var(--_nys-fileinput-background-color--dropzone);transition:all 60ms ease-in-out}.nys-fileinput__dropzone:hover{cursor:pointer;--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-neutral-700, #4a4d4f)}.nys-fileinput__dropzone.drag-active{--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-theme, #154973);--_nys-fileinput-border-style: solid}.nys-fileinput__dropzone.error{--_nys-fileinput-border-color: var(--nys-color-danger, #b52c2c)}.nys-fileinput__dropzone.error:hover{--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-emergency, #721c1c)}.nys-fileinput__dropzone.disabled{cursor:not-allowed;--_nys-fileinput-border-color: var(--nys-color-neutral-300, #a7a9ab);--_nys-fileinput-border-width: var(--nys-border-width-sm, 1px);background-color:var(--_nys-fileinput-background-color--dropzone--disabled);color:var(--_nys-fileinput-color--dropzone--disabled)}progress{display:flex;width:100%;height:6px;border-radius:var(--nys-radius-round, 1776px);background-color:var(--_nys-fileinput-progress-background);overflow:hidden;appearance:none;border:none}progress::-moz-progress-bar{background-color:var(--_nys-fileinput-progress-background)}progress::-webkit-progress-value{background-color:var(--_nys-fileinput-progress-background)}progress::-webkit-progress-bar{background-color:var(--_nys-fileinput-progress-background)}';
var Ms = Object.defineProperty, O = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Ms(e, t, o), o;
};
let Is = 0;
const ht = class ht extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.multiple = !1, this.form = null, this.tooltip = "", this.accept = "", this.disabled = !1, this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.dropzone = !1, this.width = "full", this.inverted = !1, this._selectedFiles = [], this._dragActive = !1, this._internals = this.attachInternals();
  }
  get _isDropDisabled() {
    return this.disabled || !this.multiple && this._selectedFiles.length > 0;
  }
  get _buttonAriaLabel() {
    return this._selectedFiles.length === 0 ? this.multiple ? "Choose files: " : "Choose file: " : this.multiple ? "Change files: " : "Change file: ";
  }
  get _buttonAriaDescription() {
    if (this._selectedFiles.length === 0)
      return `${this.label + " " + this.description}`;
    const e = this._selectedFiles.some(
      (o) => o.status === "error"
    );
    let t = "";
    if (this._selectedFiles.length === 1)
      t = `You have selected ${this._selectedFiles[0].file.name}.`;
    else {
      const o = this._selectedFiles.map((n) => n.file.name).join(", ");
      t = `You have selected ${this._selectedFiles.length} files: ${o}`;
    }
    return `${t}${e ? " Error: One or more files are not valid file types." : ""}`;
  }
  get _innerNysButton() {
    return this.renderRoot.querySelector(
      '[name="file-btn"]'
    )?.shadowRoot?.querySelector(
      "button"
    );
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-fileinput-${Date.now()}-${Is++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    if (this.multiple) {
      const e = this._selectedFiles.map((t) => t.file);
      if (e.length > 0) {
        const t = new FormData();
        e.forEach((r) => {
          t.append(this.name, r);
        }), this._internals.setFormValue(t);
      } else
        this._internals.setFormValue(null);
    } else {
      const e = this._selectedFiles[0]?.file || null;
      this._internals.setFormValue(e);
    }
    this._manageRequire();
  }
  // Called to internally set the initial internalElement required flag.
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "Please upload a file.";
    this.required && this._selectedFiles.length == 0 ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}, "", e));
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = e === (this.errorMessage || "Please upload a file."), this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  _validate() {
    const e = this._selectedFiles.some(
      (o) => o.status === "error"
    ), t = this.required && this._selectedFiles.length === 0;
    let r = "";
    t ? r = this.errorMessage || "Please upload a file." : e && (r = "One or more files are invalid."), this._setValidityMessage(r);
  }
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  // Called automatically when the parent form is reset
  formResetCallback() {
    this._selectedFiles = [];
    const e = this.shadowRoot?.querySelector(
      ".hidden-file-input"
    );
    e && (e.value = ""), this._internals.setFormValue(null), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  _handleInvalid(e) {
    e.preventDefault(), this._validate();
    const t = this._innerNysButton;
    if (t) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && (t.focus(), t.classList.add("active-focus")) : (t.focus(), t.classList.add("active-focus"));
    }
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // Store the files to be displayed
  async _saveSelectedFiles(e) {
    if (this._selectedFiles.some(
      (o) => o.file.name == e.name
    ) || !this.multiple && this._selectedFiles.length >= 1) return;
    const r = {
      file: e,
      progress: 0,
      status: "pending"
    };
    this._selectedFiles.push(r), await this._processFile(r), this._setValue(), this._validate();
  }
  // Read the contents of stored files, this will indicate loading progress of the uploaded files
  async _processFile(e) {
    e.status = "processing";
    try {
      if (!await Ls(e.file, this.accept)) {
        e.status = "error", e.errorMsg = "File type is invalid.", this.requestUpdate();
        return;
      }
      const r = new FileReader();
      r.onprogress = (o) => {
        if (o.lengthComputable) {
          const n = Math.round(o.loaded * 100 / o.total);
          e.progress = n, this.requestUpdate();
        }
      }, r.onload = () => {
        e.progress = 100, e.status = "done", this.requestUpdate();
      }, r.onerror = () => {
        e.status = "error", e.errorMsg = "Failed to load file.", this.requestUpdate();
      }, r.readAsArrayBuffer(e.file);
    } catch {
      e.status = "error", e.errorMsg = "Error validating file.", this.requestUpdate();
    }
  }
  _dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, files: this._selectedFiles },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openFileDialog() {
    this.renderRoot.querySelector(
      ".hidden-file-input"
    )?.click();
  }
  _handlePostFileSelectionFocus() {
    if (this.multiple) {
      const e = this._innerNysButton;
      e && e.focus();
    } else
      this._focusFirstFileItemIfSingleMode();
  }
  async _focusFirstFileItemIfSingleMode() {
    if (!this.multiple) {
      await this.updateComplete;
      const t = this.renderRoot.querySelector(
        "nys-fileitem"
      )?.shadowRoot?.querySelector(
        ".file-item"
      );
      t && (t.setAttribute("tabindex", "-1"), t.focus());
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Access the selected files & add new files to the internal list via the hidden <input type="file">
  _handleFileChange(e) {
    const r = e.target.files;
    (r ? Array.from(r) : []).map((n) => {
      this._saveSelectedFiles(n);
    }), this.requestUpdate(), this._dispatchChangeEvent(), this._handlePostFileSelectionFocus();
  }
  _handleFileRemove(e) {
    const t = e.detail.filename;
    if (this._selectedFiles = this._selectedFiles.filter(
      (r) => r.file.name !== t
    ), this._selectedFiles.length === 0) {
      const r = this.shadowRoot?.querySelector(
        "input"
      );
      r && (r.value = "");
    }
    this._setValue(), this._validate(), this.requestUpdate(), this._dispatchChangeEvent();
  }
  _onDragOver(e) {
    this.disabled || (e.stopPropagation(), e.preventDefault(), this._dragActive || (this._dragActive = !0, this.requestUpdate()));
  }
  // Mostly used for styling purpose
  _onDragLeave(e) {
    this.disabled || (e.stopPropagation(), e.preventDefault(), e.currentTarget === e.target && (this._dragActive = !1, this.requestUpdate()));
  }
  _onDrop(e) {
    if (this.disabled) return;
    e.preventDefault(), this._dragActive = !1, this.requestUpdate();
    const t = e.dataTransfer?.files;
    if (!t) return;
    const r = Array.from(t);
    this.multiple ? r.forEach((o) => {
      this._saveSelectedFiles(o);
    }) : this._saveSelectedFiles(r[0]), this.requestUpdate(), this._dispatchChangeEvent();
  }
  render() {
    return d`<div
      class="nys-fileinput"
      @nys-fileRemove=${this._handleFileRemove}
    >
      <nys-label
        for=${this.id}
        label=${this.label}
        description=${this.description}
        flag=${this.required ? "required" : this.optional ? "optional" : ""}
        tooltip=${this.tooltip}
        ?inverted=${this.inverted}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>

      <input
        id=${this.id}
        class="hidden-file-input"
        tabindex="-1"
        type="file"
        name=${this.name}
        accept=${this.accept}
        form=${p(this.form || void 0)}
        ?multiple=${this.multiple}
        ?required=${this.required}
        ?disabled=${this.disabled || !this.multiple && this._selectedFiles.length > 0}
        aria-disabled="${this.disabled}"
        aria-hidden="true"
        @change=${this._handleFileChange}
        hidden
      />

      ${this.dropzone ? d`<div
            class="nys-fileinput__dropzone
            ${this._dragActive ? "drag-active" : ""}
            ${this._isDropDisabled ? "disabled" : ""}
            ${this.showError && !this._isDropDisabled ? "error" : ""}"
            @click=${this._isDropDisabled ? null : (e) => {
      e.target.closest("nys-button") || this._openFileDialog();
    }}
            @dragover=${this._isDropDisabled ? null : this._onDragOver}
            @dragleave=${this._isDropDisabled ? null : this._onDragLeave}
            @drop=${this._isDropDisabled ? null : this._onDrop}
            aria-label="Drag files here or choose from folder"
          >
            ${this._dragActive ? d`<p>Drop file to upload</p>` : d` <nys-button
                    id="choose-files-btn-drag"
                    name="file-btn"
                    label=${this.multiple ? "Choose files" : "Choose file"}
                    variant="outline"
                    ariaLabel=${this._buttonAriaLabel}
                    ariaDescription=${this._buttonAriaDescription}
                    ?disabled=${this._isDropDisabled}
                    @nys-click="${(e) => {
      e.preventDefault(), e.stopPropagation(), this._openFileDialog();
    }}"
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>` : d`<nys-button
            id="choose-files-btn"
            name="file-btn"
            label=${this.multiple ? "Choose files" : "Choose file"}
            variant="outline"
            ariaLabel=${this._buttonAriaLabel}
            ariaDescription=${this._buttonAriaDescription}
            ?disabled=${this.disabled || !this.multiple && this._selectedFiles.length > 0}
            @nys-click=${this._openFileDialog}
          ></nys-button>`}
      ${this.showError ? d`
            <nys-errormessage
              ?showError=${this.showError}
              errorMessage=${this._internals.validationMessage || this.errorMessage}
            ></nys-errormessage>
          ` : null}
      ${this._selectedFiles.length > 0 ? d`
            <ul>
              ${this._selectedFiles.map(
      (e) => d`<li>
                    <nys-fileitem
                      filename=${e.file.name}
                      status=${e.status}
                      progress=${e.progress}
                      errorMessage=${e.errorMsg || ""}
                    ></nys-fileitem>
                  </li>`
    )}
            </ul>
          ` : null}
    </div>`;
  }
};
ht.styles = g(Bs), ht.formAssociated = !0;
let z = ht;
O([
  a({ type: String, reflect: !0 })
], z.prototype, "id");
O([
  a({ type: String, reflect: !0 })
], z.prototype, "name");
O([
  a({ type: String })
], z.prototype, "label");
O([
  a({ type: String })
], z.prototype, "description");
O([
  a({ type: Boolean })
], z.prototype, "multiple");
O([
  a({ type: String, reflect: !0 })
], z.prototype, "form");
O([
  a({ type: String })
], z.prototype, "tooltip");
O([
  a({ type: String })
], z.prototype, "accept");
O([
  a({ type: Boolean, reflect: !0 })
], z.prototype, "disabled");
O([
  a({ type: Boolean, reflect: !0 })
], z.prototype, "required");
O([
  a({ type: Boolean, reflect: !0 })
], z.prototype, "optional");
O([
  a({ type: Boolean, reflect: !0 })
], z.prototype, "showError");
O([
  a({ type: String })
], z.prototype, "errorMessage");
O([
  a({ type: Boolean })
], z.prototype, "dropzone");
O([
  a({ type: String, reflect: !0 })
], z.prototype, "width");
O([
  a({ type: Boolean, reflect: !0 })
], z.prototype, "inverted");
customElements.get("nys-fileinput") || customElements.define("nys-fileinput", z);
const qs = ":host{display:inline-block;width:fit-content;height:fit-content;min-width:var(--_nys-icon-size, .7em);min-height:var(--_nys-icon-size, .7em);--_nys-icon-size: var( --nys-icon-size, .7em );box-sizing:content-box!important}@supports (font-size: 1cap){:host{--_nys-icon-size: var(--nys-icon-size, 1cap)}}.nys-icon--svg{width:var(--_nys-icon-size, 1em);height:var(--_nys-icon-size, 1em);display:block;white-space:nowrap}.nys-icon--xs{width:calc(var(--_nys-icon-size) * .75);height:calc(var(--_nys-icon-size) * .75)}.nys-icon--sm{width:calc(var(--_nys-icon-size) * .875);height:calc(var(--_nys-icon-size) * .875)}.nys-icon--md{width:var(--_nys-icon-size);height:var(--_nys-icon-size)}.nys-icon--lg{width:calc(var(--_nys-icon-size) * 1.125);height:calc(var(--_nys-icon-size) * 1.125)}.nys-icon--xl{width:calc(var(--_nys-icon-size) * 1.25);height:calc(var(--_nys-icon-size) * 1.25)}.nys-icon--2xl{width:calc(var(--_nys-icon-size) * 1.5);height:calc(var(--_nys-icon-size) * 1.5)}.nys-icon--3xl{width:calc(var(--_nys-icon-size) * 1.875);height:calc(var(--_nys-icon-size) * 1.875)}.nys-icon--4xl{width:calc(var(--_nys-icon-size) * 2.25);height:calc(var(--_nys-icon-size) * 2.25)}.nys-icon--5xl{width:calc(var(--_nys-icon-size) * 3);height:calc(var(--_nys-icon-size) * 3)}.nys-icon--12{width:.75rem;height:.75rem}.nys-icon--14{width:.875rem;height:.875rem}.nys-icon--16{width:1rem;height:1rem}.nys-icon--18{width:1.125rem;height:1.125rem}.nys-icon--20{width:1.25rem;height:1.25rem}.nys-icon--24{width:1.5rem;height:1.5rem}.nys-icon--32{width:2rem;height:2rem}.nys-icon--40{width:2.5rem;height:2.5rem}.nys-icon--50{width:3.125rem;height:3.125rem}.nys-icon--flip-horizontal{transform:scaleX(-1)}.nys-icon--flip-vertical{transform:scaleY(-1)}.nys-icon--flip-both{transform:scale(-1)}", qt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Set();
function Rs(s, e) {
  qt.set(s, e), Ct.forEach((t) => {
    t.library === s && t.setIcon();
  });
}
function Vn(s) {
  if (s === "default") {
    console.warn(
      '[nys-icon] Cannot unregister the "default" icon library.'
    );
    return;
  }
  qt.delete(s), Ct.forEach((e) => {
    e.library === s && e.setIcon();
  });
}
function Ps(s) {
  return qt.get(s);
}
function Ts(s) {
  Ct.add(s);
}
function Os(s) {
  Ct.delete(s);
}
var Fs = Object.defineProperty, be = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Fs(e, t, o), o;
};
const Vs = (() => {
  try {
    return new URL(
      /* @vite-ignore */
      "./icons/",
      import.meta.url
    ).href;
  } catch {
    return typeof document < "u" && document.currentScript ? new URL(
      "./icons/",
      document.currentScript.src
    ).href : "./icons/";
  }
})(), Ge = /* @__PURE__ */ new Map();
async function Ns(s) {
  if (Ge.has(s))
    return Ge.get(s);
  const e = fetch(s).then((t) => {
    if (!t.ok)
      throw new Error(`Icon not found at "${s}" (${t.status})`);
    return t.text();
  }).catch((t) => (Ge.delete(s), console.warn(`[nys-icon] Failed to load icon: ${t.message}`), null));
  return Ge.set(s, e), e;
}
const ut = class ut extends b {
  constructor() {
    super(...arguments), this.name = "", this.library = "default", this.ariaLabel = "", this.rotate = "0", this.flip = "", this.color = "", this.size = "md", this._renderedSvg = null, this._loadVersion = 0, this.iconLoaded = new Promise((e) => {
      this._iconLoadedResolve = e;
    });
  }
  connectedCallback() {
    super.connectedCallback(), Ts(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Os(this);
  }
  willUpdate(e) {
    (e.has("name") || e.has("library")) && this._loadIcon();
  }
  /**
   * Public method called by the registry when the icon's library is
   * re-registered or unregistered. Triggers a reload.
   */
  setIcon() {
    this._loadIcon();
  }
  async _loadIcon() {
    const { name: e, library: t } = this;
    if (!e) {
      this._renderedSvg = null, this._iconLoadedResolve();
      return;
    }
    this.iconLoaded = new Promise((c) => {
      this._iconLoadedResolve = c;
    });
    const r = ++this._loadVersion, o = Ps(t);
    if (!o) {
      console.warn(
        `[nys-icon] Icon library "${t}" is not registered.`
      ), this._renderedSvg = null, this.dispatchEvent(
        new CustomEvent("nys-icon-error", {
          detail: { name: e, library: t },
          bubbles: !0,
          composed: !0
        })
      ), this._iconLoadedResolve();
      return;
    }
    const n = o.resolver(e), i = await Ns(n);
    if (r !== this._loadVersion) return;
    if (i === null) {
      this._renderedSvg = null, this.dispatchEvent(
        new CustomEvent("nys-icon-error", {
          detail: { name: e, library: t },
          bubbles: !0,
          composed: !0
        })
      ), this._iconLoadedResolve();
      return;
    }
    const l = this._parseSvg(i);
    l && o.mutator && o.mutator(l), this._renderedSvg = l, this._iconLoadedResolve();
  }
  /**
   * Parses an SVG string and applies accessibility, rotation, flip, color, and size classes.
   */
  _parseSvg(e) {
    const o = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
    return o instanceof SVGElement ? (o.setAttribute("role", "img"), this.ariaLabel ? (o.setAttribute("aria-label", this.ariaLabel), o.removeAttribute("aria-hidden")) : (o.setAttribute("aria-hidden", "true"), o.removeAttribute("aria-label")), o.style.rotate = `${this.rotate}deg`, o.style.color = this.color || "currentcolor", o.classList.add(`nys-icon--${this.size}`), o.classList.add("nys-icon--svg"), this.flip && o.classList.add(`nys-icon--flip-${this.flip}`), o) : null;
  }
  render() {
    return this._renderedSvg ? d`${this._renderedSvg}` : null;
  }
};
ut.styles = g(qs), ut.iconsBasePath = Vs;
let Z = ut;
be([
  a({ type: String, reflect: !0 })
], Z.prototype, "name");
be([
  a({ type: String, reflect: !0 })
], Z.prototype, "library");
be([
  a({ type: String })
], Z.prototype, "ariaLabel");
be([
  a({ type: String })
], Z.prototype, "rotate");
be([
  a({ type: String })
], Z.prototype, "flip");
be([
  a({ type: String })
], Z.prototype, "color");
be([
  a({ type: String })
], Z.prototype, "size");
be([
  x()
], Z.prototype, "_renderedSvg");
Rs("default", {
  resolver: (s) => `${Z.iconsBasePath}${s}.svg`
});
customElements.get("nys-icon") || customElements.define("nys-icon", Z);
const Hs = ':host{--_nys-label-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-label-font-weight: var(--nys-font-weight-semibold, 600);--_nys-label-font-size: var(--nys-font-size-ui-md, 16px);--_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-label-color: var(--nys-color-text, #1b1b1b);--_nys-label-cursor: normal;--_nys-description-font-weight: var(--nys-font-weight-regular, 400);--_nys-description-font-style: normal;--_nys-description-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-required-font-color: var(--nys-color-danger, #b52c2c);--_nys-optional-font-weight: var(--nys-font-weight-regular, 400);--_nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-label-gap: var(--nys-space-4px, 4px)}p{margin:0}.nys-label{display:flex;flex-direction:column;align-items:flex-start;font-family:var(--_nys-label-font-family);font-size:var(--_nys-label-font-size);line-height:var(--_nys-label-line-height);letter-spacing:var(--_nys-label-letter-spacing)}.nys-label *{cursor:var(--_nys-label-cursor)}.nys-label__label{display:flex;gap:var(--_nys-label-gap);text-align:left;font-weight:var(--_nys-label-font-weight);color:var(--_nys-label-color)}.nys-label__description{text-align:left;font-weight:var(--_nys-description-font-weight);font-style:var(--_nys-description-font-style);color:var(--_nys-description-font-color)}.nys-label__required{display:contents;font-weight:var(--_nys-label-font-weight);color:var(--_nys-required-font-color)}.nys-label__optional{display:contents;font-weight:var(--_nys-optional-font-weight);color:var(--_nys-optional-font-color)}.nys-label__tooltip-wrapper{display:flex;gap:2px;align-items:center}.nys-label.invert .nys-label__label,.nys-label.invert .nys-label__description,.nys-label.invert .nys-label__optional{color:var(--nys-color-text-reverse, #ffffff)}.nys-label.invert .nys-label__tooltip-icon{color:var(--nys-color-ink-reverse, #ffffff)}';
var Us = Object.defineProperty, js = Object.getOwnPropertyDescriptor, Te = (s, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? js(e, t) : e, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = (r ? i(e, t, o) : i(o)) || o);
  return r && o && Us(e, t, o), o;
};
const jt = class jt extends b {
  constructor() {
    super(...arguments), this.for = "", this.label = "", this.description = "", this.flag = "", this.inverted = !1, this._tooltip = "";
  }
  get tooltip() {
    return this._tooltip;
  }
  set tooltip(e) {
    this._tooltip = e;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleLabelClick(e) {
    if (!this.for) return;
    const t = this.getRootNode().host;
    let r = null;
    t && t.shadowRoot && (r = t.shadowRoot.querySelector(`#${this.for}`)), r && (r instanceof HTMLInputElement ? (e.preventDefault(), e.stopPropagation(), r.type === "file" ? r.click() : r.type === "checkbox" || r.type === "radio" ? (r.focus(), r.click()) : r.focus()) : r.focus());
  }
  render() {
    return d`
      <div class="nys-label ${this.inverted ? "invert" : ""}">
        <div class="nys-label__tooltip-wrapper">
          <label
            for=${this.for}
            class="nys-label__label"
            @click=${this._handleLabelClick}
            >${this.label}
            ${this.flag === "required" ? d`<div class="nys-label__required">*</div>` : ""}
            ${this.flag === "optional" ? d`<div class="nys-label__optional">(Optional)</div>` : ""}</label
          >
          ${this._tooltip ? d`<nys-tooltip
                  text="${this._tooltip}"
                  position="top"
                  focusable
                  ?inverted=${this.inverted}
                  for="tooltip-icon-${this.for}"
                >
                </nys-tooltip>
                <nys-icon
                  id="tooltip-icon-${this.for}"
                  name="info"
                  size="3xl"
                ></nys-icon> ` : ""}
        </div>
        <p
          for=${this.for}
          class="nys-label__description"
          @click=${this._handleLabelClick}
        >
          <slot name="description">${this.description}</slot>
        </p>
      </div>
    `;
  }
};
jt.styles = g(Hs);
let ie = jt;
Te([
  a({ type: String })
], ie.prototype, "for", 2);
Te([
  a({ type: String })
], ie.prototype, "label", 2);
Te([
  a({ type: String })
], ie.prototype, "description", 2);
Te([
  a({ type: String })
], ie.prototype, "flag", 2);
Te([
  a({ type: Boolean, reflect: !0 })
], ie.prototype, "inverted", 2);
Te([
  a({ type: String })
], ie.prototype, "tooltip", 1);
customElements.get("nys-label") || customElements.define("nys-label", ie);
const Ws = ':host{--_nys-modal-width: 439px;--_nys-modal-min-width: 320px;--_nys-modal-border-radius: var(--nys-radius-lg, 8px);--_nys-modal-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-modal-border-width: 1px;--_nys-modal-background-color: var(--nys-color-surface, #ffffff);--_nys-modal-margin: var(--nys-space-250, 20px);--_nys-modal-padding: var(--nys-space-300, 24px);--_nys-modal-gap: var(--nys-space-200, 16px);--_nys-modal-background-color--overlay: var( --nys-color-black-transparent-700, rgba(27, 27, 27, .7) );--_nys-modal-gap--header: var(--nys-space-100, 8px);--_nys-modal-gap--footer: var(--nys-space-250, 20px);--_nys-modal-font-size: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-modal-font-size--subheader: var( --nys-font-size-body-lg, var(--nys-font-size-lg, 18px) );--_nys-modal-font-weight--header: var(--nys-font-weight-bold, 700);--_nys-modal-font-weight--subheader: var(--nys-font-weight-semibold, 600);--_nys-modal-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-modal-line-height--subheader: var(--nys-font-lineheight-body-lg, 28px);--_nys-modal-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}*{box-sizing:border-box}::slotted(p){margin:0!important}h2,p{flex:1;margin:0}.nys-modal-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:1000;background:var(--_nys-modal-background-color--overlay)}.nys-modal{display:flex;flex-direction:column;margin:var(--_nys-modal-margin);padding:var(--_nys-modal-padding);gap:var(--_nys-modal-gap);width:var(--_nys-modal-width);border-radius:var(--_nys-modal-border-radius);border:var(--_nys-modal-border-width) solid var(--_nys-modal-border-color);font-family:var(--_nys-modal-font-family);font-size:var(--_nys-modal-font-size);line-height:var(--_nys-modal-line-height);background:var(--_nys-modal-background-color);position:relative;z-index:10000}.nys-modal_header{display:flex;flex-direction:column;align-items:flex-start;gap:var(--_nys-modal-gap--header)}.nys-modal_header p{font-size:var(--_nys-modal-font-size--subheader);font-weight:var(--_nys-modal-font-weight--subheader);line-height:var(--_nys-modal-line-height--subheader)}.nys-modal_header-inner{display:flex;align-items:center;width:100%;font-weight:var(--_nys-modal-font-weight--header)}.nys-modal_body{display:flex;flex-direction:column;align-items:flex-start}.nys-modal_body-inner{overflow:auto;width:100%;max-height:45vh}.nys-modal_body.hidden{display:none}.nys-modal_footer ::slotted(*){display:flex;flex-direction:column-reverse;justify-content:center;gap:var(--_nys-modal-gap--footer);align-self:stretch}.nys-modal_footer.hidden ::slotted(*){display:none}@media(min-width:480px){.nys-modal_body-inner{max-height:25vh}.nys-modal_footer ::slotted(*){flex-direction:row;justify-content:flex-end;align-items:center}.nys-modal{--_nys-modal-width: 439px}}@media(min-width:768px){.nys-modal{--_nys-modal-width: 600px}}@media(min-width:1024px){.nys-modal{--_nys-modal-width: 752px}}@media(min-width:1280px){.nys-modal{--_nys-modal-width: 840px}}';
var Ys = Object.defineProperty, ge = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Ys(e, t, o), o;
};
let Ks = 0;
const Wt = class Wt extends b {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.heading = "", this.subheading = "", this.open = !1, this.mandatory = !1, this.width = "md", this._actionButtonSlot = null, this._prevFocusedElement = null, this._originalBodyOverflow = null, this.hasBodySlots = !1, this.hasActionSlots = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-modal-${Date.now()}-${Ks++}`), window.addEventListener("resize", () => this._updateSlottedButtonWidth()), window.addEventListener("keydown", (e) => this._handleKeydown(e));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._restoreBodyScroll(), window.removeEventListener("keydown", (e) => this._handleKeydown(e));
  }
  async updated(e) {
    e.has("open") && (this.open ? (this._hideBodyScroll(), this._dispatchOpenEvent(), await this.updateComplete, this._savePrevFocused(), this._focusOnModal(), this._updateDismissAria()) : (this._restorePrevFocused(), this._restoreBodyScroll(), this._dispatchCloseEvent(), this._updateDismissAria()));
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _hideBodyScroll() {
    this._originalBodyOverflow === null && (this._originalBodyOverflow = document.body.style.overflow), document.body.style.overflow = "hidden";
  }
  _restoreBodyScroll() {
    this._originalBodyOverflow !== null && (document.body.style.overflow = this._originalBodyOverflow, this._originalBodyOverflow = null);
  }
  _savePrevFocused() {
    this._prevFocusedElement = document.activeElement;
  }
  _focusOnModal() {
    this.shadowRoot?.querySelector(".nys-modal")?.focus();
  }
  async _restorePrevFocused() {
    const e = this._prevFocusedElement;
    if (e && e.tagName.toLowerCase() === "nys-button") {
      const r = await e.getButtonElement();
      if (r) {
        r.focus();
        return;
      }
    } else
      this._prevFocusedElement?.focus();
    this._prevFocusedElement = null;
  }
  // Check if the slot contains stuff (aka user add texts & action buttons), and render visibility accordingly
  async _handleBodySlotChange() {
    const e = this.shadowRoot?.querySelector("slot");
    e && (this.hasBodySlots = e.assignedNodes({ flatten: !0 }).some(
      (t) => t.nodeType === Node.ELEMENT_NODE || t.textContent?.trim()
    ));
  }
  // Determines whether we hide the action buttons slot container based on if user put in action buttons
  async _handleActionSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot[name="actions"]'
    );
    e && (this.hasActionSlots = e.assignedNodes({ flatten: !0 }).some(
      (t) => t.nodeType === Node.ELEMENT_NODE || t.textContent?.trim()
    ), this._actionButtonSlot = e, this._updateSlottedButtonWidth());
  }
  // Design has it that the slotted action buttons should be fullWidth and display:column direction for mobile view.
  // Therefore, we need to account for mobile size and screen resizes
  _updateSlottedButtonWidth() {
    if (!this._actionButtonSlot) return;
    const e = window.innerWidth <= 480;
    this._actionButtonSlot.assignedElements().forEach((t) => {
      t.querySelectorAll("nys-button").forEach((r) => {
        e ? r?.setAttribute("fullWidth", "") : r?.removeAttribute("fullWidth");
      });
    });
  }
  _dispatchOpenEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-open", {
        detail: { id: this.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-close", {
        detail: { id: this.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _getAriaDescribedBy() {
    const e = [];
    return this.subheading && e.push(`${this.id}-subheading`), this.hasBodySlots && e.push(`${this.id}-desc`), e.join(" ");
  }
  /**
   * This exist to prevent the VO for dismiss button from announcing itself between the heading & subheading/slot content.
   * We add the "Close this window" ariaLabel after the initial VO is done
   */
  _updateDismissAria() {
    const e = this.shadowRoot?.querySelector("nys-button");
    e && (e.setAttribute("ariaLabel", " "), this.open && setTimeout(() => {
      e.setAttribute("ariaLabel", "Close this window");
    }, 100));
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  async _handleKeydown(e) {
    if (this.open && (e.key === "Escape" && !this.mandatory && (e.preventDefault(), this._closeModal()), e.key === "Tab")) {
      const t = this.shadowRoot?.querySelector(".nys-modal");
      if (!t) return;
      const r = 'a[href], area[href], button:not([disabled]), details, iframe, object, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contentEditable="true"], [tabindex]:not([tabindex^="-"])', o = [], n = t.querySelector("nys-button");
      n && o.push(n);
      const i = Array.from(t.querySelectorAll("slot"));
      for (const l of i) {
        const c = l.assignedElements({ flatten: !0 });
        for (const h of c)
          h instanceof HTMLElement && h.matches(r) && o.push(h), h.querySelectorAll("nys-button").forEach(
            (u) => {
              o.push(u);
            }
          );
      }
      if (o.length > 0) {
        const l = o[0], c = o[o.length - 1];
        let h = document.activeElement, u = o.indexOf(
          h
        );
        if (e.shiftKey) {
          e.preventDefault();
          let y = u - 1;
          y < 0 && (y = o.length - 1);
          const f = o[y];
          o[y].tagName.toLowerCase() === "nys-button" ? (await f.getButtonElement())?.focus() : f.focus();
        } else
          h === c && (e.preventDefault(), l.tagName.toLowerCase() === "nys-button" ? (await l.getButtonElement())?.focus() : l.focus());
      }
    }
  }
  _closeModal() {
    this.open = !1, this._dispatchCloseEvent();
  }
  render() {
    return this.open ? d`<div
          class="nys-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="${this.id}-heading"
          aria-describedby="${this._getAriaDescribedBy()}"
        >
          <div class="nys-modal" tabindex="-1">
            <div class="nys-modal_header">
              <div class="nys-modal_header-inner">
                <h2 id="${this.id}-heading">${this.heading}</h2>
                ${this.mandatory ? "" : d`<nys-button
                      id="dismiss-modal"
                      circle
                      icon="close"
                      variant="ghost"
                      @nys-click=${this._closeModal}
                    ></nys-button>`}
              </div>
              ${this.subheading ? d`<p id="${this.id}-subheading">${this.subheading}</p>` : ""}
            </div>

            <div
              id="${this.id}-desc"
              class="nys-modal_body ${this.hasBodySlots ? "" : "hidden"}"
            >
              <div class="nys-modal_body-inner">
                <slot @slotchange=${this._handleBodySlotChange}></slot>
              </div>
            </div>

            <div
              class="nys-modal_footer ${this.hasActionSlots ? "" : "hidden"}"
            >
              <slot
                name="actions"
                @slotchange=${this._handleActionSlotChange}
              ></slot>
            </div>
          </div>
        </div>` : "";
  }
};
Wt.styles = g(Ws);
let J = Wt;
ge([
  a({ type: String, reflect: !0 })
], J.prototype, "id");
ge([
  a({ type: String })
], J.prototype, "heading");
ge([
  a({ type: String })
], J.prototype, "subheading");
ge([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "open");
ge([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "mandatory");
ge([
  a({ type: String, reflect: !0 })
], J.prototype, "width");
ge([
  x()
], J.prototype, "hasBodySlots");
ge([
  x()
], J.prototype, "hasActionSlots");
customElements.get("nys-modal") || customElements.define("nys-modal", J);
const Zs = ':host{--_nys-pagination-width: fit-content;--_nys-pagination-height: var(--nys-size-500, 40px);--_nys-pagination-radius: var(--nys-radius-xl, 12px);--_nys-pagination-gap: var(--nys-space-100, 8px);--_nys-pagination-font-size: var(--nys-font-size-ui-md, 16px);--_nys-pagination-font-weight: var(--nys-font-weight-semibold, 600);--_nys-pagination-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-pagination-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}.nys-pagination{width:var(--_nys-pagination-width);height:var(--_nys-pagination-height);border-radius:var(--_nys-pagination-radius);display:flex;align-items:center;justify-content:center;gap:var(--_nys-pagination-gap);font-family:var(--_nys-pagination-font-family);font-size:var(--_nys-pagination-font-size);font-weight:var(--_nys-pagination-font-weight);line-height:var(--_nys-pagination-line-height)}nys-button{--_nys-button-height: var(--_nys-pagination-height);--_nys-button-border-width: var(--nys-border-width-sm, 1px);--_nys-button-border-radius--start: var(--nys-radius-md, 4px);--_nys-button-border-radius--end: var(--nys-radius-md, 4px);--_nys-button-padding--x: var(--nys-space-200, 16px)}nys-button[variant=outline]{--nys-button-background-color: var(--nys-color-ink-reverse, #ffffff);--nys-button-background-color--hover: var(--nys-color-neutral-10, #f6f6f6);--nys-button-background-color--active: var(--nys-color-neutral-50, #ededed);--nys-button-border-color: var(--nys-color-neutral-200, #bec0c1);--nys-button-border-color--hover: var(--nys-color-neutral-600, #62666a);--nys-button-border-color--active: var(--nys-color-neutral-900, #1b1b1b);--nys-button-color: var(--nys-color-link, #004dd1);--nys-button-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-color--active: var(--nys-color-link-strong, #003ba1)}nys-button[variant=filled]{--nys-button-background-color: var(--nys-color-link, #004dd1);--nys-button-background-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-background-color--active: var( --nys-color-link-strongest, #002971 );--nys-button-border-color: var(--nys-color-link, #004dd1);--nys-button-border-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-border-color--active: var(--nys-color-link-strongest, #002971);--nys-button-color: var(--nys-color-ink-reverse, #ffffff);--nys-button-color--hover: var(--nys-color-ink-reverse, #ffffff);--nys-button-color--active: var(--nys-color-ink-reverse, #ffffff)}nys-button#previous,nys-button#next,nys-button#previous--mobile,nys-button#next--mobile{--nys-button-color: var(--nys-color-text, #1b1b1b);--nys-button-color--hover: var(--nys-color-text, #1b1b1b);--nys-button-color--active: var(--nys-color-text, #1b1b1b);--_nys-button-padding--x: var(--nys-space-150, 12px)}nys-button#previous--mobile,nys-button#next--mobile{display:none}nys-button.spacer{--nys-button-border-color: transparent;--nys-button-border-color--hover: transparent;--nys-button-border-color--active: transparent;--nys-button-background-color: transparent;--nys-button-background-color--hover: transparent;--nys-button-background-color--active: transparent;--nys-button-color: var(--nys-color-text, #1b1b1b);--nys-button-color--hover: var(--nys-color-text, #1b1b1b);--nys-button-color--active: var(--nys-color-text, #1b1b1b);--_nys-button-padding--x: var(--nys-space-1px, 1px);--_nys-button-cursor: default}:host([currentPage="3"]) nys-button#first-spacer,:host([_twoBeforeLast]) nys-button#last-spacer{display:none}@media(min-width:0)and (max-width:767px){nys-button#prev-page,nys-button#next-page{display:none}:host([currentPage="3"]) nys-button#first-spacer,:host([_twoBeforeLast]) nys-button#last-spacer{display:block}nys-button#previous--mobile,nys-button#next--mobile{display:block}nys-button#previous,nys-button#next{display:none}}';
var Gs = Object.defineProperty, je = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Gs(e, t, o), o;
};
let Qs = 0;
const Yt = class Yt extends b {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.name = "", this.currentPage = 1, this.totalPages = 1, this._twoBeforeLast = !1;
  }
  willUpdate(e) {
    if (this.totalPages < 1 && (this.totalPages = 1), e.has("currentPage") || e.has("totalPages")) {
      const t = this._clampPage(this.currentPage);
      t !== this.currentPage && (this.currentPage = t);
      const r = this.currentPage === this.totalPages - 2;
      r !== this._twoBeforeLast && (this._twoBeforeLast = r);
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-pagination-${Date.now()}-${Qs++}`);
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _clampPage(e) {
    return e < 1 ? 1 : e > this.totalPages ? this.totalPages : e;
  }
  renderPageButtons() {
    const e = [], t = (c, h) => {
      e.push(d`
        <nys-button
          label=${String(c)}
          ariaLabel="Page ${c}"
          id=${p(h)}
          variant=${this.currentPage === c ? "filled" : "outline"}
          size="sm"
          @nys-click="${() => this._handlePageClick(c)}"
        ></nys-button>
      `);
    }, r = (c) => {
      e.push(
        d`<nys-button
          label="..."
          class="spacer"
          tabindex="-1"
          id=${c}
          size="sm"
        ></nys-button>`
      );
    }, n = this.totalPages, i = this.currentPage - 1, l = this.currentPage + 1;
    return t(1), this.currentPage > 2 && r("first-spacer"), i > 1 && t(i, "prev-page"), this.currentPage !== 1 && this.currentPage !== n && t(this.currentPage, "current-page"), l < n && t(l, "next-page"), this.currentPage < n - 1 && r("last-spacer"), n > 1 && t(n), e;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handlePageClick(e) {
    this.currentPage = this._clampPage(e), this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { page: this.currentPage },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return this.totalPages <= 1 ? null : d`<div class="nys-pagination">
      <nys-button
        id="previous"
        label="Previous"
        prefixIcon="chevron_left"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === 1}
        @nys-click="${() => this._handlePageClick(this.currentPage - 1)}"
      ></nys-button>
      <nys-button
        id="previous--mobile"
        prefixIcon="chevron_left"
        ariaLabel="Previous Page"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === 1}
        @nys-click="${() => this._handlePageClick(this.currentPage - 1)}"
      ></nys-button>
      ${this.renderPageButtons()}
      <nys-button
        id="next"
        label="Next"
        suffixIcon="chevron_right"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === this.totalPages}
        @nys-click="${() => this._handlePageClick(this.currentPage + 1)}"
      ></nys-button>
      <nys-button
        id="next--mobile"
        suffixIcon="chevron_right"
        ariaLabel="Next Page"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === this.totalPages}
        @nys-click="${() => this._handlePageClick(this.currentPage + 1)}"
      ></nys-button>
    </div>`;
  }
  /****************** 🪡 in the Haystack Release ******/
  /****************** designsystem@its.ny.gov ********/
};
Yt.styles = g(Zs);
let ye = Yt;
je([
  a({ type: String, reflect: !0 })
], ye.prototype, "id");
je([
  a({ type: String, reflect: !0 })
], ye.prototype, "name");
je([
  a({ type: Number, reflect: !0 })
], ye.prototype, "currentPage");
je([
  a({ type: Number, reflect: !0 })
], ye.prototype, "totalPages");
je([
  a({ type: Boolean, reflect: !0 })
], ye.prototype, "_twoBeforeLast");
customElements.get("nys-pagination") || customElements.define("nys-pagination", ye);
const No = `:host{--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiobutton-border-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-color: var(--nys-color-focus, #004dd1);--_nys-radiobutton-outline-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-offset: var(--nys-space-2px, 2px);--_nys-radiobutton-gap: var(--nys-space-150, 12px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-radiobutton-font-size: var(--nys-font-size-ui-md, 16px);--_nys-radiobutton-font-weight--label: var(--nys-font-weight-regular, 400);--_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-radiobutton-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-radiobutton-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-radiobutton-border-color: var(--nys-color-neutral-600, #62666a);--_nys-radiobutton-background-color--hover: var( --nys-color-neutral-50, #ededed );--_nys-radiobutton-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--checked: var(--nys-color-theme, #154973);--_nys-radiobutton-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-radiobutton-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-radiobutton-border-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([size=sm]){--_nys-radiobutton-size: var(--nys-size-300, 24px);--_nys-radiobutton-border-radius: var(--nys-radius-sm, 2px);--_nys-radiogroup-gap: var(--nys-space-100, 8px);--_nys-radiobutton-gap: var(--nys-space-100, 8px)}:host([size=md]){--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-gap: var(--nys-space-150, 12px)}:host([tile]){--_nys-radiobutton-font-weight--label: var(--nys-font-weight-semibold, 600);--_nys-radiobutton-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-radiobutton-border-radius--tile: var(--nys-radius-md, 4px);--_nys-radiobutton-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-radiobutton-background-color--tile: var(--nys-color-ink-reverse, #ffffff);--_nys-radiobutton-padding--x--tile: var(--nys-space-250, 20px);--_nys-radiobutton-padding--y--tile: var(--nys-space-200, 16px);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-radiobutton-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-radiobutton-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-radiobutton-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-radiobutton-border-color--tile--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-radiobutton-background-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([tile][size=sm]){--_nys-radiobutton-padding--x--tile: var(--nys-space-200, 16px);--_nys-radiobutton-padding--y--tile: var(--nys-space-150, 12px)}:host([tile][showError]){--_nys-radiobutton-border-color--tile: var(--nys-color-danger, #b52c2c);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-danger, #b52c2c );--_nys-radiobutton-border-color--tile--active: var( --nys-color-danger, #b52c2c );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-danger, #b52c2c )}.nys-radiogroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height)}.nys-radiogroup__content{gap:var(--_nys-radiogroup-gap);display:flex;flex-direction:column}.nys-radiobutton{display:flex;flex-direction:column;font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height);border-radius:var(--_nys-radiobutton-border-radius--tile);border:var(--_nys-radiobutton-border-width--tile) solid var(--_nys-radiobutton-border-color--tile);background-color:var(--_nys-radiobutton-background-color--tile);padding:var(--_nys-radiobutton-padding--y--tile) var(--_nys-radiobutton-padding--x--tile)}.nys-radiobutton__radio{appearance:none;width:var(--_nys-radiobutton-size);height:var(--_nys-radiobutton-size);min-width:var(--_nys-radiobutton-size);min-height:var(--_nys-radiobutton-size);max-width:var(--_nys-radiobutton-size);max-height:var(--_nys-radiobutton-size);border:solid var(--_nys-radiobutton-border-width) var(--_nys-radiobutton-border-color);background-color:var(--_nys-radiobutton-background-color);border-radius:100%;background-repeat:no-repeat;background-position:center;background-size:contain;outline-offset:var(--_nys-radiobutton-outline-offset);outline:none;margin:0 0 auto;box-sizing:border-box}.nys-radiobutton:hover,.nys-radiobutton:hover *{cursor:pointer}input:not(:disabled):checked+.nys-radiobutton .nys-radiobutton__radio{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');background-color:var(--_nys-radiobutton-background-color--checked)}:host([tile]) .nys-radiobutton:has(input:not(:disabled):checked)+.nys-radiobutton .nys-radiobutton__radio{border-color:var(--_nys-radiobutton-border-color--tile--checked);background-color:var(--_nys-radiobutton-background-color--tile--checked)}:host([tile]) .nys-radiobutton:has(input:not(:disabled):checked:hover)+.nys-radiobutton .nys-radiobutton__radio{cursor:default}input:disabled:checked+.nys-radiobutton .nys-radiobutton__radio{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');border-color:var(--_nys-radiobutton-border-color--checked--disabled);background-color:var(--_nys-radiobutton-background-color--checked--disabled)}:host([tile]) .nys-radiobutton:has(input:disabled:checked)+.nys-radiobutton .nys-radiobutton__radio{border-color:var(--_nys-radiobutton-background-color--tile--disabled);background-color:var(--_nys-radiobutton-border-color--tile--disabled)}input:disabled+.nys-radiobutton,input:disabled+.nys-radiobutton *{cursor:not-allowed}input:disabled+.nys-radiobutton .nys-radiobutton__radio{background-color:var(--_nys-radiobutton-background-color--disabled);border-color:var(--_nys-radiobutton-border-color--disabled);cursor:not-allowed}:host([tile]) .nys-radiobutton:has(input:disabled)+.nys-radiobutton .nys-radiobutton__radio{background-color:var(--_nys-radiobutton-background-color--disabled);border-color:var(--_nys-radiobutton-border-color--disabled);cursor:not-allowed}input:hover:not(:disabled):not(:checked)+.nys-radiobutton .nys-radiobutton__radio,input:not(:disabled):not(:checked)+.nys-radiobutton:hover .nys-radiobutton__radio{border-color:var(--_nys-radiobutton-border-color--hover);background-color:var(--_nys-radiobutton-background-color--hover)}:host([tile]) input:not(:disabled):not(:checked)+.nys-radiobutton:hover{border-color:var(--_nys-radiobutton-border-color--tile--hover);background-color:var(--_nys-radiobutton-background-color--tile--hover);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--hover)}input:active:not(:disabled):not(:checked)+.nys-radiobutton .nys-radiobutton__radio,input:not(:disabled):not(:checked)+.nys-radiobutton:active .nys-radiobutton__radio{border-color:var(--_nys-radiobutton-border-color--active);background-color:var(--_nys-radiobutton-background-color--active)}:host([tile]) input:not(:disabled):not(:checked)+.nys-radiobutton:active{border-color:var(--_nys-radiobutton-border-color--tile--active);background-color:var(--_nys-radiobutton-background-color--tile--active);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--active)}:host(:focus-visible){outline:none}:host(:focus-visible) .nys-radiobutton__radio{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color)}input:focus-visible+.nys-radiobutton .nys-radiobutton__radio,.nys-radiobutton:has(:focus-visible) .nys-radiobutton__radio{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color);outline-offset:var(--_nys-radiobutton-outline-offset)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.nys-radiobutton__main-container{display:flex;align-items:center}.nys-radiobutton__other-container{display:flex;padding-inline-start:calc(var(--_nys-radiobutton-size) + var(--_nys-radiobutton-gap))}.nys-radiobutton__main-container>nys-label{--_nys-label-font-weight: var(--_nys-radiobutton-font-weight--label);display:flex;padding-inline-start:var(--_nys-radiobutton-gap)}:host([tile]) .nys-radiobutton__main-container>nys-label{--_nys-description-font-style: normal}input:disabled+.nys-radiobutton .nys-radiobutton__main-container>nys-label,input:disabled+.nys-radiobutton .nys-radiobutton__main-container>nys-label *{cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-radiobutton-color--disabled);--_nys-description-color: var(--_nys-radiobutton-color--disabled);color:var(--_nys-radiobutton-color--disabled)}fieldset{all:unset;display:contents}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}`;
var Xs = Object.defineProperty, V = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Xs(e, t, o), o;
};
let Js = 0;
const yt = class yt extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.tile = !1, this.tooltip = "", this.inverted = !1, this.form = null, this.size = "md", this.selectedValue = null, this._slottedDescriptionText = "", this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-radiogroup-${Date.now()}-${Js++}`), this.addEventListener("nys-change", this._handleRadioButtonChange), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("nys-error", this._handleChildError);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("nys-change", this._handleRadioButtonChange), this.removeEventListener("invalid", this._handleInvalid);
  }
  async firstUpdated() {
    await this.updateComplete, this._initializeCheckedRadioValue(), this._setValue(), this._setRadioButtonRequire(), this._updateRadioButtonsSize(), this._updateRadioButtonsTile(), this._updateRadioButtonsShowError(), this._getSlotDescriptionForAria(), this._initializeChildAttributes(), this._updateGroupTabIndex();
  }
  updated(e) {
    (e.has("required") || e.has("selectedValue")) && this._manageRequire(), e.has("size") && this._updateRadioButtonsSize(), e.has("tile") && this._updateRadioButtonsTile(), e.has("inverted") && this._updateRadioButtonsInvert(), e.has("showError") && this._updateRadioButtonsShowError(), e.has("form") && this._updateRadioButtonsForm();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.selectedValue);
  }
  // Updates the "require" attribute of the first radiobutton underneath a radiogroup.
  // This will make sure there's a requirement for all radiobutton under the same name/group
  _setRadioButtonRequire() {
    this.querySelectorAll("nys-radiobutton").forEach((t, r) => {
      this.required && r === 0 && t.setAttribute("required", "required");
    });
  }
  async _manageRequire() {
    const e = this.errorMessage || "Please select an option.", r = Array.from(this.querySelectorAll("nys-radiobutton"))[0];
    r && (this.required && !this.selectedValue ? this._internals.setValidity(
      { valueMissing: !0 },
      e,
      r
      // pass the custom element, not shadow input
    ) : (this.showError = !1, this._internals.setValidity({}, "", r)));
  }
  checkValidity() {
    const e = Array.from(this.querySelectorAll("nys-radiobutton"));
    return !this.required || e.some((r) => r.checked);
  }
  // Need to account for if radiogroup already have a radiobutton checked at initialization
  _initializeCheckedRadioValue() {
    const e = this.querySelector("nys-radiobutton[checked]");
    e && (this.selectedValue = e.getAttribute("value"), this._internals.setFormValue(this.selectedValue));
  }
  // Core Keyboard & Click Logic
  _getAllRadios() {
    return Array.from(
      this.querySelectorAll("nys-radiobutton")
    );
  }
  // Arrow / Space / Enter navigation at group level
  async _handleKeyDown(e) {
    if (!["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key)) return;
    e.preventDefault();
    const r = this._getAllRadios().filter((u) => !u.disabled), n = r.find((u) => u.matches(":focus")) || r.find((u) => u.checked) || r[0];
    let i = 0;
    ["ArrowUp", "ArrowLeft"].includes(e.key) ? i = -1 : ["ArrowDown", "ArrowRight"].includes(e.key) && (i = 1);
    let l = r.indexOf(n) + i;
    l < 0 && (l = r.length - 1), l >= r.length && (l = 0);
    const c = r[l];
    (await c.getInputElement())?.click(), await this.updateComplete, this._updateGroupTabIndex(), c.focus();
  }
  _updateGroupTabIndex() {
    const e = this._getAllRadios(), t = e.find((r) => r.checked && !r.disabled) || e.find((r) => !r.disabled);
    e.forEach((r) => {
      r.setAttribute("aria-checked", String(r.checked)), r.tabIndex = r === t && !r.disabled ? 0 : -1;
    });
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      t.formResetUpdate();
    }), this.selectedValue = null, this._internals.setFormValue(null), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // Apply ARIA & initial tabindex to each child radio
  _initializeChildAttributes() {
    this._getAllRadios().forEach((t) => {
      t.setAttribute("role", "radio"), t.setAttribute("aria-checked", String(t.checked)), t.setAttribute("aria-required", String(t.required)), t.setAttribute("aria-disabled", String(t.disabled)), t.setAttribute("tabindex", "-1");
    });
  }
  // Updates the size of each radiobutton underneath a radiogroup to ensure size standardization
  _updateRadioButtonsSize() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      t.setAttribute("size", this.size);
    });
  }
  _updateRadioButtonsTile() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      this.tile ? t.toggleAttribute("tile", !0) : t.removeAttribute("tile");
    });
  }
  _updateRadioButtonsInvert() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      this.inverted ? t.toggleAttribute("inverted", !0) : t.removeAttribute("inverted");
    });
  }
  _updateRadioButtonsShowError() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      this.showError ? t.setAttribute("showError", "") : t.removeAttribute("showError");
    });
  }
  _updateRadioButtonsForm() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      this.showError && this.form !== null ? t.setAttribute("form", this.form) : t.removeAttribute("form");
    });
  }
  // Get the slotted text contents so native VO can attempt to announce it within the legend in the fieldset
  _getSlotDescriptionForAria() {
    const t = this.shadowRoot?.querySelector(
      'slot[name="description"]'
    )?.assignedNodes({ flatten: !0 }) || [];
    this._slottedDescriptionText = t.map((r) => r.textContent?.trim()).filter(Boolean).join(", ");
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Keeps radiogroup informed of the name and value of its current selected radiobutton at each change
  _handleRadioButtonChange(e) {
    const { name: t, value: r } = e.detail;
    this.name = t, this.selectedValue = r, this._internals.setFormValue(this.selectedValue), this._internals.setValidity({}), this.showError = !1, this._updateGroupTabIndex();
  }
  async _handleInvalid(e) {
    if (e.preventDefault(), this._internals.validity.customError) {
      const r = this._getAllRadios().find((o) => o.other && o.checked);
      if (r) {
        const o = r.shadowRoot?.querySelector("nys-textinput");
        if (r.classList.remove("focused"), o) {
          await o.updateComplete, o.focus();
          return;
        }
      }
    }
    if (this._internals.validity.valueMissing) {
      this.showError = !0, this._manageRequire();
      const t = this.querySelector(
        "nys-radiobutton"
      );
      if (t) {
        const r = this._internals.form;
        r ? Array.from(r.elements).find(
          (i) => typeof i.checkValidity == "function" && !i.checkValidity()
        ) === this && t.focus() : t.focus();
      }
    }
  }
  _handleChildError(e) {
    e.stopPropagation();
    const { message: t, sourceRadio: r } = e.detail;
    r && (this.showError = !0, this._internals.setValidity(
      { customError: !0 },
      t || "Please complete this field.",
      r
    ));
  }
  render() {
    return d`<fieldset
      aria-label="${this.label}${this._slottedDescriptionText ? ` ${this._slottedDescriptionText}` : this.description ? ` ${this.description}` : ""}"
      role="radiogroup"
      class="nys-radiogroup"
    >
      <nys-label
        for=${this.id + "--native"}
        label=${this.label}
        description=${this.description}
        flag=${this.required ? "required" : this.optional ? "optional" : ""}
        tooltip=${this.tooltip}
        ?inverted=${this.inverted}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>
      <div class="nys-radiogroup__content" @keydown=${this._handleKeyDown}>
        <slot></slot>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage || this.errorMessage}
        .showDivider=${!this.tile}
      ></nys-errormessage>
    </fieldset>`;
  }
};
yt.styles = g(No), yt.formAssociated = !0;
let I = yt;
V([
  a({ type: String, reflect: !0 })
], I.prototype, "id");
V([
  a({ type: String, reflect: !0 })
], I.prototype, "name");
V([
  a({ type: Boolean, reflect: !0 })
], I.prototype, "required");
V([
  a({ type: Boolean, reflect: !0 })
], I.prototype, "optional");
V([
  a({ type: Boolean, reflect: !0 })
], I.prototype, "showError");
V([
  a({ type: String })
], I.prototype, "errorMessage");
V([
  a({ type: String })
], I.prototype, "label");
V([
  a({ type: String })
], I.prototype, "description");
V([
  a({ type: Boolean, reflect: !0 })
], I.prototype, "tile");
V([
  a({ type: String })
], I.prototype, "tooltip");
V([
  a({ type: Boolean, reflect: !0 })
], I.prototype, "inverted");
V([
  a({ type: String, reflect: !0 })
], I.prototype, "form");
V([
  a({ type: String, reflect: !0 })
], I.prototype, "size");
V([
  x()
], I.prototype, "selectedValue");
V([
  x()
], I.prototype, "_slottedDescriptionText");
customElements.get("nys-radiogroup") || customElements.define("nys-radiogroup", I);
var en = Object.defineProperty, N = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && en(e, t, o), o;
};
let tn = 0;
var k;
const F = (k = class extends b {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.inverted = !1, this.form = null, this.size = "md", this.tile = !1, this.other = !1, this.showOtherError = !1, this.isMobile = window.innerWidth < 480, this._hasUserInteracted = !1, this._handleResize = () => {
      this.isMobile = window.innerWidth < 480;
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-radiobutton-${Date.now()}-${tn++}`), this.checked && (k.buttonGroup[this.name] && (k.buttonGroup[this.name].checked = !1, k.buttonGroup[this.name].requestUpdate()), k.buttonGroup[this.name] = this), this.addEventListener("focus", this._handleFocus), this.addEventListener("blur", this._handleBlur), this.addEventListener("click", this._handleChange), window.addEventListener("resize", this._handleResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("focus", this._handleFocus), this.removeEventListener("blur", this._handleBlur), window.removeEventListener("resize", this._handleResize);
  }
  updated(e) {
    e.has("checked") && (e.get("checked") && !this.checked && this._clearOtherState(), this.checked && k.buttonGroup[this.name] !== this && (k.buttonGroup[this.name] && (k.buttonGroup[this.name].checked = !1, k.buttonGroup[this.name].requestUpdate()), k.buttonGroup[this.name] = this));
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  async getInputElement() {
    return await this.updateComplete, this.shadowRoot?.querySelector("input") || null;
  }
  // This callback is automatically called when the parent form is reset.
  formResetUpdate() {
    this.checked = !1, this._clearOtherState(), k.buttonGroup[this.name] === this && delete k.buttonGroup[this.name], this.requestUpdate();
  }
  _clearOtherState() {
    this.other && (this.showOtherError = !1, this._hasUserInteracted = !1, this.dispatchEvent(
      new CustomEvent("nys-error-clear", {
        detail: {
          id: this.id,
          name: this.name,
          type: "other"
        },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _emitChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: {
          id: this.id,
          checked: this.checked,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _emitOtherInputEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-other-input", {
        detail: {
          id: this.id,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle radiobutton change event & un-selection of other radio options in group
  async _handleChange() {
    this.showOtherError = !1, !this.checked && !this.disabled && (k.buttonGroup[this.name] && (k.buttonGroup[this.name].checked = !1, k.buttonGroup[this.name].requestUpdate()), k.buttonGroup[this.name] = this, this.checked = !0, this._validateOtherAndEmitError(), this._emitChangeEvent());
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("nys-blur")), setTimeout(() => {
      this.other && this.checked && (this._hasUserInteracted = !0, this._validateOtherAndEmitError());
    }, 50);
  }
  _callInputHandling() {
    if (this.disabled) return;
    const e = this.shadowRoot?.querySelector(
      'input[type="radio"]'
    );
    e && (e.focus(), e.click());
  }
  _handleTextInput(e) {
    let r = e.target.value;
    this.value = r, this._hasUserInteracted && this._validateOtherAndEmitError(), this._emitOtherInputEvent();
  }
  _handleTextInputBlur() {
    this._hasUserInteracted = !0, this._validateOtherAndEmitError();
  }
  _validateOtherAndEmitError() {
    if (!this.other) return;
    if (!this.checked || !this._hasUserInteracted) {
      this.showOtherError = !1;
      return;
    }
    const e = this.value.trim() === "";
    this.showOtherError = e, e && this.dispatchEvent(
      new CustomEvent("nys-error", {
        detail: {
          id: this.id,
          name: this.name,
          type: "other",
          message: "Please enter a value for this option.",
          sourceRadio: this
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleOtherKeydown(e) {
    (e.key == "Space" || e.key === " ") && e.stopPropagation();
  }
  render() {
    return d`
      <input
        type="radio"
        name="${p(this.name ? this.name : void 0)}"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        .value=${this.value}
        ?required="${this.required}"
        form=${p(this.form || void 0)}
        @change="${this._handleChange}"
        aria-hidden="true"
        hidden
        class="sr-only"
      />
      <div
        class="nys-radiobutton"
        @click="${this._callInputHandling}"
        aria-label=${this.label || (this.other ?? "Other")}
      >
        <div class="nys-radiobutton__main-container">
          <span class="nys-radiobutton__radio"></span>
          ${(this.label || this.other) && d`<nys-label
            label="${this.label || (this.other ? "Other" : "")}"
            description=${p(this.description || void 0)}
            ?inverted=${this.inverted}
          >
            <slot name="description" slot="description"
              >${this.description}</slot
            >
          </nys-label> `}
        </div>
        <div class="nys-radiobutton__other-container">
          ${this.other && this.checked ? d`
                <nys-textinput
                  .value=${this.value}
                  id=${"radiobutton-other-" + this.id}
                  @nys-input=${this._handleTextInput}
                  @nys-blur=${this._handleTextInputBlur}
                  @keydown=${this._handleOtherKeydown}
                  @nys-focus=${() => this.classList.remove("focused")}
                  ariaLabel="Other"
                  aria-invalid=${this.showOtherError ? "true" : "false"}
                  width=${this.isMobile ? "full" : "md"}
                ></nys-textinput>
              ` : ""}
        </div>
      </div>
    `;
  }
}, k.styles = g(No), k.buttonGroup = {}, k);
N([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "checked");
N([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "disabled");
N([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "required");
N([
  a({ type: String })
], F.prototype, "label");
N([
  a({ type: String })
], F.prototype, "description");
N([
  a({ type: String, reflect: !0 })
], F.prototype, "id");
N([
  a({ type: String, reflect: !0 })
], F.prototype, "name");
N([
  a({ type: String })
], F.prototype, "value");
N([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "inverted");
N([
  a({ type: String, reflect: !0 })
], F.prototype, "form");
N([
  a({ type: String, reflect: !0 })
], F.prototype, "size");
N([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "tile");
N([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "other");
N([
  a({ type: Boolean })
], F.prototype, "showOtherError");
N([
  x()
], F.prototype, "isMobile");
let on = F;
customElements.get("nys-radiobutton") || customElements.define("nys-radiobutton", on);
var rn = Object.defineProperty, We = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && rn(e, t, o), o;
};
class pe extends b {
  constructor() {
    super(...arguments), this.disabled = !1, this.selected = !1, this.value = "", this.label = "", this.hidden = !1;
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    e && e.addEventListener("slotchange", () => {
      const t = e.assignedNodes({ flatten: !0 });
      t.length > 0 && (this.label = t[0].textContent?.trim() || "");
    });
  }
  render() {
    return d`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `;
  }
}
We([
  a({ type: Boolean, reflect: !0 })
], pe.prototype, "disabled");
We([
  a({ type: Boolean, reflect: !0 })
], pe.prototype, "selected");
We([
  a({ type: String })
], pe.prototype, "value");
We([
  a({ type: String })
], pe.prototype, "label");
We([
  a({ type: Boolean, reflect: !0 })
], pe.prototype, "hidden");
customElements.define("nys-option", pe);
const sn = ':host{--_nys-select-width: 100%;--_nys-select-height: var(--nys-size-500, 40px);--_nys-select-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-select-font-size: var(--nys-font-size-ui-md, 16px);--_nys-select-font-weight: var(--nys-font-weight-regular, 400);--_nys-select-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-select-gap: var(--nys-space-50, 4px);--_nys-select-border-radius: var(--nys-radius-md, 4px);--_nys-select-padding: var(--nys-space-100, 8px) var(--nys-space-400, 32px) var(--nys-space-100, 8px) var(--nys-space-100, 8px);--_nys-select-color: var(--nys-color-text, #1b1b1b);--_nys-select-color--error: var( --nys-color-danger, var(--nys-color-red-600, #b52c2c) );--_nys-select-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-select-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-select-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-select-border-width: var(--nys-border-width-sm, 1px);--_nys-select-border-color: var(--nys-color-neutral-400, #909395);--_nys-select-border-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-select-border-color--focus: var(--nys-color-focus, #004dd1);--_nys-select-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-select-border-default: var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-400, #909395);--_nys-select-border-focus: var(--nys-border-width-sm, 1px) solid var(--nys-color-focus, var(--nys-color-blue-600, #004dd1));--_nys-select-border-disabled: var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-200, #bec0c1);--_nys-select-border-hover: var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-900, #1b1b1b)}.nys-select{display:flex;flex-direction:column;gap:var(--_nys-select-gap);font-family:var(--_nys-select-font-family)}.nys-select__select{color:var(--_nys-select-color);font-weight:var(--_nys-select-font-weight);font-family:var(--_nys-select-font-family);border-radius:var(--_nys-select-border-radius);border:solid var(--_nys-select-border-width) var(--_nys-select-border-color);font-size:var(--_nys-select-font-size);padding:var(--_nys-select-padding);width:var(--_nys-select-width);height:var(--_nys-select-height);max-width:100%;text-indent:1px;background:var(--_nys-select-background-color);appearance:none;text-overflow:ellipsis}.nys-select__selectwrapper{position:relative;display:inline-block;width:var(--_nys-select-width);max-width:100%}.nys-select__icon{color:var(--_nys-select-color);position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}:host([width=sm]){--_nys-select-width: var(--nys-select-form-width-sm, 88px)}:host([width=md]){--_nys-select-width: var(--nys-select-form-width-md, 200px)}:host([width=lg]){--_nys-select-width: var(--nys-select-form-width-lg, 384px)}:host([width=full]){--_nys-select-width: 100%;flex:1}.nys-select__select:hover:not(:disabled){cursor:pointer;border-color:var(--_nys-select-border-color--hover);outline:solid var(--_nys-select-border-width) var(--_nys-select-border-color--hover)}.nys-select__select:focus{border-color:var(--_nys-select-border-color--focus);outline:solid var(--_nys-select-border-width) var(--_nys-select-border-color--focus)}.nys-select__select:disabled{background-color:var(--_nys-select-background-color--disabled);border-color:var(--_nys-select-border-color--disabled);cursor:not-allowed;color:var(--_nys-select-color--disabled)}.nys-select__select:disabled~.nys-select__icon{color:var(--_nys-select-color--disabled)}:host([showError]){--_nys-select-border-default: var(--nys-border-width-sm, 1px) solid var(--_nys-select-color--error)}';
var nn = Object.defineProperty, U = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && nn(e, t, o), o;
};
let an = 0;
const pt = class pt extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.value = "", this.disabled = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.width = "full", this._originalErrorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-select-${Date.now()}-${an++}`), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    ) && this._handleSlotChange(), this._setValue();
  }
  _handleSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    ), t = this.shadowRoot?.querySelector("select");
    if (!e || !t) return;
    Array.from(t.children).forEach((n) => {
      n.hasAttribute("data-native") || n.remove();
    }), e.assignedElements({ flatten: !0 }).forEach((n) => {
      if (n instanceof pe) {
        const i = document.createElement("option");
        i.value = n.value, i.textContent = n.label || n.textContent?.trim() || "", i.disabled = n.disabled, i.selected = n.selected, t.appendChild(i);
        return;
      }
      if (n.tagName === "OPTION") {
        const i = n, l = i.cloneNode(!0);
        l.setAttribute("data-native", "true"), l.disabled = i.disabled, l.selected = i.selected, t.appendChild(l);
        return;
      }
      if (n.tagName === "OPTGROUP") {
        const i = document.createElement("optgroup");
        i.label = n.label, n.disabled && (i.disabled = !0), Array.from(n.children).forEach((l) => {
          if (l instanceof pe) {
            const c = document.createElement("option");
            c.value = l.value, c.textContent = l.label || l.textContent?.trim() || "", c.disabled = l.disabled, c.selected = l.selected, i.appendChild(c);
          } else if (l.tagName === "OPTION") {
            const c = l.cloneNode(!0);
            i.appendChild(c);
          }
        }), t.appendChild(i);
        return;
      }
    });
    const o = Array.from(t.options).find((n) => n.selected);
    o && (this.value = o.value, this._internals.setFormValue(this.value));
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("select");
    if (!e) return;
    const t = this.errorMessage || "This field is required.";
    this.required && !this.value ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("select");
    if (!t) return;
    this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e;
    const r = e ? { customError: !0 } : {};
    this._internals.setValidity(r, this.errorMessage, t);
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("select");
    if (!e) return;
    let t = e.validationMessage;
    this._manageRequire(), this._setValidityMessage(t);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this.shadowRoot?.querySelector("select");
    e && (e.value = "", Array.from(e.options).forEach((t) => t.selected = !1)), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("select");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate(), this.showError = !0;
    const t = this.shadowRoot?.querySelector("select");
    if (t) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Handle change event to bubble up selected value
  _handleChange(e) {
    const t = e.target;
    this.value = t.value, this._internals.setFormValue(this.value), this.required && this.value && (this.showError = !1, this.errorMessage = "", this._internals.setValidity({})), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("nys-blur"));
  }
  // Check if the current value matches any option, and if so, set it as selected
  updated(e) {
    if (super.updated(e), e.has("value")) {
      const t = this.shadowRoot?.querySelector("select");
      t && (t.value = this.value);
    }
  }
  render() {
    return d`
      <div class="nys-select">
        <nys-label
          for=${this.id + "--native"}
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-select__selectwrapper">
          <select
            class="nys-select__select"
            name=${this.name}
            id=${this.id + "--native"}
            form=${p(this.form || void 0)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-disabled="${this.disabled}"
            aria-label="${[this.label, this.description].filter(Boolean).join(" ")}"
            .value=${this.value}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          >
            <option data-native hidden disabled value=""></option>
          </select>
          <slot style="display: none;"></slot>
          <nys-icon
            name="chevron_down"
            size="2xl"
            class="nys-select__icon"
          ></nys-icon>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
pt.styles = g(sn), pt.formAssociated = !0;
let q = pt;
U([
  a({ type: String, reflect: !0 })
], q.prototype, "id");
U([
  a({ type: String, reflect: !0 })
], q.prototype, "name");
U([
  a({ type: String })
], q.prototype, "label");
U([
  a({ type: String })
], q.prototype, "description");
U([
  a({ type: String })
], q.prototype, "value");
U([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "disabled");
U([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "required");
U([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "optional");
U([
  a({ type: String })
], q.prototype, "tooltip");
U([
  a({ type: String, reflect: !0 })
], q.prototype, "form");
U([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "inverted");
U([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "showError");
U([
  a({ type: String })
], q.prototype, "errorMessage");
U([
  a({ type: String, reflect: !0 })
], q.prototype, "width");
customElements.get("nys-select") || customElements.define("nys-select", q);
const ln = ':host{--_nys-skipnav-padding--y: var(--nys-space-100, 8px);--_nys-skipnav-padding--x: var(--nys-space-200, 16px);--_nys-skipnav-gap: var(--nys-space-100, 8px);--_nys-skipnav-border-width: var(--nys-border-width-md, 2px);--_nys-skipnav-border-color: var(--nys-color-link, #004dd1);--_nys-skipnav-border-radius: var(--nys-radius-sm, 2px);--_nys-skipnav-font-size: var(--nys-font-size-ui-md, 16px);--_nys-skipnav-font-weight: var(--nys-font-weight-semibold, 600);--_nys-skipnav-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-skipnav-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-skipnav-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-skipnav-color: var(--nys-color-link, #004dd1);--_nys-skipnav-background-color: var(--nys-color-surface, #ffffff)}.nys-skipnav__link{position:absolute;left:auto;top:-4.8rem;display:inline-flex;padding:var(--_nys-skipnav-padding--y) var(--_nys-skipnav-padding--x);align-items:flex-end;gap:var(--_nys-skipnav-gap);background:var(--_nys-skipnav-background-color);color:var(--_nys-skipnav-color);border:var(--_nys-skipnav-border-width) solid var(--_nys-skipnav-border-color);border-radius:var(--_nys-skipnav-border-radius);font-family:var(--_nys-skipnav-font-family);font-size:var(--_nys-skipnav-font-size);font-style:normal;font-weight:var(--_nys-skipnav-font-weight);line-height:var(--_nys-skipnav-line-height);letter-spacing:var(--_nys-skipnav-letter-spacing);text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font;z-index:100;transition:.15s ease-in-out}.nys-skipnav__link:focus,.nys-skipnav__link.show{top:0;left:auto;outline:none}';
var cn = Object.defineProperty, Ho = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && cn(e, t, o), o;
};
const Kt = class Kt extends b {
  constructor() {
    super(), this.id = "", this.href = "";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-skipnav-${Date.now()}`);
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleFocus() {
    this.shadowRoot?.querySelector(".nys-skipnav__link")?.classList.add("show");
  }
  _handleBlur() {
    this.shadowRoot?.querySelector(".nys-skipnav__link")?.classList.remove("show");
  }
  _handleClick() {
    const e = (this.href || "#main-content").replace("#", ""), t = document.getElementById(e);
    t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none");
  }
  render() {
    return d`
      <div class="nys-skipnav">
        <a
          href=${this.href ? this.href : "#main-content"}
          tabindex="0"
          class="nys-skipnav__link"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @click="${this._handleClick}"
        >
          Skip to main content
        </a>
      </div>
    `;
  }
};
Kt.styles = g(ln);
let Ne = Kt;
Ho([
  a({ type: String, reflect: !0 })
], Ne.prototype, "id");
Ho([
  a({ type: String })
], Ne.prototype, "href");
customElements.get("nys-skipnav") || customElements.define("nys-skipnav", Ne);
const Uo = ':host{--_nys-stepper-font-size: var(--nys-font-size-ui-md, 16px);--_nys-stepper-font-weight: var(--nys-font-weight-semibold, 600);--_nys-stepper-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-stepper-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-step-color: var(--nys-color-text, #1b1b1b);--_nys-stepper-background-color: var(--nys-color-surface-raised, #f6f6f6)}.nys-stepper{font-family:var(--_nys-stepper-font-family);font-size:var(--_nys-stepper-font-size);font-weight:var(--_nys-stepper-font-weight);line-height:var(--_nys-stepper-line-height);display:flex;flex-direction:column;counter-reset:step;background-color:var(--_nys-stepper-background-color);max-width:100%;height:100%}.nys-stepper__header{display:flex;flex-direction:column;padding:var(--nys-space-400, 32px) var(--nys-space-400, 32px) var(--nys-space-150, 12px)}::slotted(div[slot=actions]){display:flex;flex-wrap:wrap;justify-content:flex-start;gap:var(--nys-space-100, 8px);margin-bottom:var(--nys-space-300, 24px)}.nys-stepper__counter{display:none;text-decoration:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font;color:var(--nys-color-text, #1b1b1b);text-overflow:ellipsis;font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:400;line-height:var(--nys-font-size-ui-md, 16px);cursor:pointer;width:fit-content}.nys-stepper__steps{display:flex;flex-direction:column;padding:var(--nys-space-150, 12px) var(--nys-space-400, 32px) var(--nys-space-400, 32px);overflow-y:scroll;height:fit-content;height:-moz-available;scrollbar-width:none;background:linear-gradient(var(--nys-color-surface-raised, #f6f6f6) 30%,rgba(255,255,255,0)) center top,linear-gradient(rgba(255,255,255,0),var(--nys-color-surface-raised, #f6f6f6) 70%) center bottom,linear-gradient(to bottom,#63636333,#0000) top,linear-gradient(to top,#63636333,#0000) bottom;background-repeat:no-repeat;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll;background-color:var(--nys-color-surface-raised, #f6f6f6)}.nys-step{position:relative;counter-increment:step;display:flex;flex-direction:column}.nys-step__contentwrapper{display:flex;flex-direction:row;align-items:center;gap:var(--nys-space-150, 12px);cursor:default;width:fit-content}.nys-step__contentwrapper:focus-visible{outline:solid var(--nys-color-focus, #004dd1) var(--nys-border-width-md, 2px);outline-offset:var(--nys-space-2px, 2px);border-radius:var(--nys-radius-md, 4px)}.nys-step__linewrapper{width:24px;display:flex;justify-content:center}.nys-step__line{width:var(--nys-size-1px, 1px);height:var(--nys-size-300, 24px);border-radius:var(--nys-radius-round, 1776px);background:var(--nys-color-black-transparent-200, rgba(27, 27, 27, .2));margin:var(--nys-space-100, 8px) 0}.nys-step__number{border-radius:var(--nys-radius-round, 1776px);border:var(--nys-size-1px, 1px) solid var(--nys-color-neutral-400, #909395);background:var(--nys-color-white-transparent-900, rgba(255, 255, 255, .9));width:var(--nys-size-300, 24px);min-width:var(--nys-size-300, 24px);max-width:var(--nys-size-300, 24px);height:var(--nys-size-300, 24px);min-height:var(--nys-size-300, 24px);max-height:var(--nys-size-300, 24px);display:flex;align-items:center;justify-content:center;text-align:center;color:var(--nys-color-text, #1b1b1b)}:host([previous]) .nys-step__number,:host([previous]) .nys-step__line,:host([current]) .nys-step__number,:host([current]) .nys-step__line{background-color:var(--nys-color-theme-stronger, #081b2b);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme-stronger, #081b2b)}:host([selected]) .nys-step__number{background-color:var(--nys-color-theme, #154973);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme, #154973);outline:var(--nys-size-50, 4px) solid var(--nys-color-theme-weak, #cddde9)}:host([first]) .nys-step__linewrapper{display:none!important}.nys-step__content{display:flex;flex-direction:column;gap:var(--nys-space-100, 8px)}.nys-step__label{color:var(--_nys-step-color);font-family:var(--_nys-stepper-font-family);font-size:var(--_nys-stepper-font-size);font-weight:var(--_nys-stepper-font-weight);line-height:var(--_nys-stepper-line-height);line-height:var(--nys-font-size-ui-md, 16px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:var(7%, 1.12px);text-underline-offset:auto}:host([current]) .nys-step__label,:host([previous]) .nys-step__label{text-decoration-line:underline}:host([current]) .nys-step__contentwrapper,:host([previous]) .nys-step__contentwrapper{cursor:pointer}:host([selected]) .nys-step__label{font-weight:700;text-decoration-line:none}:host([selected]) .nys-step__contentwrapper{cursor:default}:host([selected]) .nys-step__contentwrapper:focus-visible{outline-offset:6px}@media(max-width:1023px){.nys-stepper{max-width:1023px;width:100%}.nys-stepper__header{flex-direction:row-reverse;justify-content:space-between;padding:var(--nys-space-150, 12px);gap:var(--nys-space-200, 16px)}.nys-stepper__headertext{flex:1 1 0;min-width:0}::slotted(div[slot=actions]){margin-bottom:0;min-width:0;justify-content:end}.nys-stepper__counter{display:block}.nys-stepper__steps{flex-direction:row;gap:var(--nys-space-2px, 2px);padding:0}.nys-stepper__steps::slotted(*){flex:1}.nys-step__number{border-radius:0;border:none;background-color:var(--nys-color-neutral-200, #bec0c1);height:var(--nys-size-100, 8px);min-height:var(--nys-size-100, 8px);max-height:var(--nys-size-100, 8px);width:100%;min-width:100%;max-width:100%;color:transparent}:host([previous]) .nys-step__number,:host([current]) .nys-step__number{background-color:var(--nys-color-neutral-900, #1b1b1b);color:transparent}:host([selected]) .nys-step__number{background-color:var(--nys-color-theme-mid, #457aa5);outline:none}.nys-step__content,.nys-step__linewrapper{display:none}.nys-step__contentwrapper{cursor:default;pointer-events:none;width:auto}:host([isCompactExpanded]) .nys-step__content,:host([isCompactExpanded]) .nys-step__linewrapper{display:flex}:host([isCompactExpanded]) .nys-stepper__header{padding-bottom:var(--nys-space-250, 20px)}:host([isCompactExpanded]) .nys-stepper__steps{width:-webkit-fill-available;width:-moz-available;z-index:9999;overflow-y:auto;flex-direction:column;gap:0;padding:var(--nys-space-150, 12px) var(--nys-space-400, 32px) var(--nys-space-400, 32px)}:host([isCompactExpanded]) .nys-stepper__steps::slotted(*){flex:none}:host([isCompactExpanded]) .nys-step__number{border-radius:var(--nys-radius-round, 1776px);border:1px solid var(--nys-color-neutral-400, #909395);background:var(--nys-color-white-transparent-900, rgba(255, 255, 255, .9));width:var(--nys-space-300, 24px);min-width:var(--nys-space-300, 24px);max-width:var(--nys-space-300, 24px);height:var(--nys-space-300, 24px);min-height:var(--nys-space-300, 24px);max-height:var(--nys-space-300, 24px);color:var(--nys-color-text, #1b1b1b)}:host([isCompactExpanded][previous]) .nys-step__number,:host([isCompactExpanded][previous]) .nys-step__line,:host([isCompactExpanded][current]) .nys-step__number,:host([isCompactExpanded][current]) .nys-step__line{background:var(--nys-color-theme-stronger, #081b2b);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme-stronger, #081b2b)}:host([isCompactExpanded][selected]) .nys-step__number{background:var(--nys-color-theme, #154973);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme, #154973);outline:4px solid var(--nys-color-theme-weak, #cddde9)}:host([isCompactExpanded]) .nys-step__contentwrapper{pointer-events:all}}';
var dn = Object.defineProperty, Se = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && dn(e, t, o), o;
};
const Zt = class Zt extends b {
  constructor() {
    super(...arguments), this.selected = !1, this.current = !1, this.label = "", this.href = "", this.isCompactExpanded = !1, this.stepNumber = 0;
  }
  _handleActivate(e) {
    typeof this.onClick == "function" && this.onClick(e);
    const t = new CustomEvent("nys-step-click", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { href: this.href, label: this.label }
    });
    (this.hasAttribute("previous") || this.current) && !this.selected && (this.dispatchEvent(t), !t.defaultPrevented && this.href && (window.location.href = this.href));
  }
  _handleKeydown(e) {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._handleActivate(e));
  }
  render() {
    return d`
      <div class="nys-step">
        <div class="nys-step__linewrapper">
          <div class="nys-step__line"></div>
        </div>
        <div
          class="nys-step__contentwrapper"
          @click=${this._handleActivate}
          @keydown=${this._handleKeydown}
          ?disabled=${!(this.selected || this.current || this.hasAttribute("previous"))}
        >
          <div class="nys-step__number" tabindex="-1" aria-hidden="true">
            ${this.stepNumber}
          </div>
          <div class="nys-step__content" tabindex="-1" aria-hidden="true">
            <div
              class="nys-step__label"
              role="button"
              aria-label="${this.label} Step"
              tabindex=${this.selected || this.current || this.hasAttribute("previous") ? "0" : "-1"}
              aria-hidden="true"
            >
              ${this.label}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
Zt.styles = g(Uo);
let oe = Zt;
Se([
  a({ type: Boolean, reflect: !0 })
], oe.prototype, "selected");
Se([
  a({ type: Boolean, reflect: !0 })
], oe.prototype, "current");
Se([
  a({ type: String })
], oe.prototype, "label");
Se([
  a({ type: String })
], oe.prototype, "href");
Se([
  a({ type: Boolean })
], oe.prototype, "isCompactExpanded");
Se([
  a({ attribute: !1 })
], oe.prototype, "onClick");
Se([
  a({ type: Number })
], oe.prototype, "stepNumber");
customElements.get("nys-step") || customElements.define("nys-step", oe);
var hn = Object.defineProperty, Ye = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && hn(e, t, o), o;
};
let un = 0;
const Gt = class Gt extends b {
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.counterText = "initial", this.isCompactExpanded = !1, this._stepsNumbered = !1, this._onStepClick = async (e) => {
      const t = e.composedPath().find(
        (i) => i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-step"
      );
      if (!t) return;
      const r = Array.from(this.querySelectorAll("nys-step")), o = r.findIndex(
        (i) => i.hasAttribute("current")
      ), n = r.indexOf(t);
      o !== -1 && n > o || t.hasAttribute("selected") || (r.forEach((i) => i.removeAttribute("selected")), t.setAttribute("selected", ""), this._updateCounter(), this.isCompactExpanded = !1);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("nys-step-click", this._onStepClick), requestAnimationFrame(() => this._validateSteps()), this.id || (this.id = `nys-stepper-${++un}-${Date.now()}`);
  }
  disconnectedCallback() {
    this.removeEventListener("nys-step-click", this._onStepClick), super.disconnectedCallback();
  }
  _validateSteps() {
    Array.from(this.children).forEach((e) => {
      const t = e instanceof HTMLElement && e.tagName.toLowerCase() === "nys-step", r = e instanceof HTMLElement && e.hasAttribute("slot") && e.getAttribute("slot") === "actions";
      !t && !r && (console.warn(
        "Only <nys-step> elements or the <div slot='actions'> container are allowed as direct children of <nys-stepper>. Removing:",
        e
      ), e.remove());
    });
  }
  _validateButtonSlot(e) {
    const r = e.target.assignedElements();
    if (r.length !== 1 || r[0].tagName.toLowerCase() !== "div") {
      console.warn(
        "The 'actions' slot must have exactly one <div> as a direct child."
      );
      return;
    }
    const o = r[0];
    Array.from(o.children).forEach((n) => {
      n instanceof HTMLElement && n.tagName.toLowerCase() === "nys-button" ? (n.setAttribute("size", "sm"), n.hasAttribute("fullWidth") && (n.style.flex = "1 1 0")) : (console.warn(
        "The <div> inside 'actions' slot only accepts <nys-button> elements. Removing invalid node:",
        n
      ), n.remove());
    });
  }
  _updateCounter() {
    let e;
    if (this.isCompactExpanded)
      e = "Back to Form", this.style.height = "-webkit-fit-content", this.style.height = "-moz-fit-content", this.style.height = "fit-content";
    else {
      this.style.height = "auto";
      const t = this.querySelectorAll("nys-step"), r = Array.from(t).findIndex(
        (n) => n.hasAttribute("selected")
      ), o = t.length;
      e = r >= 0 ? `Step ${r + 1} of ${o}` : `Step 1 of ${o}`;
    }
    e !== this.counterText && (this.counterText = e);
  }
  willUpdate() {
    const e = this.querySelectorAll("nys-step");
    this._stepsNumbered || (e.forEach((n, i) => {
      n.stepNumber = i + 1;
    }), this._stepsNumbered = !0);
    let t = !1, r = !1, o = !1;
    e.forEach((n, i) => {
      n.hasAttribute("current") && (o ? n.removeAttribute("current") : o = !0), i === 0 ? n.setAttribute("first", "") : n.removeAttribute("first"), n.hasAttribute("current") ? (t = !0, n.removeAttribute("previous")) : t ? n.removeAttribute("previous") : n.setAttribute("previous", ""), n.hasAttribute("selected") && (t || r ? n.removeAttribute("selected") : r = !0), this.isCompactExpanded ? n.setAttribute("isCompactExpanded", "") : n.removeAttribute("isCompactExpanded");
    }), r || (o ? e.forEach((n) => {
      n.hasAttribute("current") && !r && (n.setAttribute("selected", ""), r = !0);
    }) : e.length > 0 && (e[0].setAttribute("current", ""), e[0].setAttribute("selected", ""))), this._updateCounter();
  }
  _toggleCompact() {
    this.isCompactExpanded = !this.isCompactExpanded;
  }
  _handleCounterKeydown(e) {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._toggleCompact());
  }
  render() {
    return d`
      <div class="nys-stepper" name=${this.name}>
        <div class="nys-stepper__header">
          <slot name="actions" @slotchange=${this._validateButtonSlot}></slot>
          <div class="nys-stepper__headertext">
            <div class="nys-stepper__label">${this.label}</div>
            <div
              class="nys-stepper__counter"
              @click=${this._toggleCompact}
              @keydown=${this._handleCounterKeydown}
              role="button"
              tabindex="0"
              aria-label=${this.isCompactExpanded ? "Collapse step navigation to view the form" : `Expand step navigation. You are on ${this.counterText}`}
              aria-expanded=${this.isCompactExpanded ? "true" : "false"}
            >
              ${this.counterText}
            </div>
          </div>
        </div>
        <slot class="nys-stepper__steps"></slot>
      </div>
    `;
  }
};
Gt.styles = g(Uo);
let fe = Gt;
Ye([
  a({ type: String, reflect: !0 })
], fe.prototype, "id");
Ye([
  a({ type: String, reflect: !0 })
], fe.prototype, "name");
Ye([
  a({ type: String })
], fe.prototype, "label");
Ye([
  a({ type: String })
], fe.prototype, "counterText");
Ye([
  a({ type: Boolean, reflect: !0 })
], fe.prototype, "isCompactExpanded");
customElements.get("nys-stepper") || customElements.define("nys-stepper", fe);
const yn = ':host{--_nys-table-width: 100%;--_nys-table-radius: var(--nys-radius-xl, 12px);--_nys-table-padding: var(--nys-space-100, 8px);--_nys-table-border-color: transparent;--_nys-table-border-width: 0;--_nys-table-font-family: var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif));--_nys-table-font-size: var(--nys-font-size-ui-md, 16px);--_nys-table-font-weight: var(--nys-font-weight-regular, 400);--_nys-table-line-height: var(--nys-font-line-height-ui, 24px);--_nys-table-padding--caption: var(--nys-space-250, 20px) var(--nys-space-150, 12px);--_nys-table-font-size--caption: var(--nys-font-size-ui-lg, 18px);--_nys-table-font-weight--caption: var(--nys-font-weight-bold, 700);--_nys-table-padding--cell--x: var(--nys-space-150, 12px);--_nys-table-padding--cell--y: var(--nys-space-200, 16px);--_nys-table-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-table-background-color--striped: var(--nys-color-neutral-10, #f6f6f6);--_nys-table-color--code: var(--nys-color-red-600, #b52c2c);--_nys-table-background-color--code: var(--nys-color-neutral-10, #f6f6f6)}:host([bordered]){--_nys-table-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-table-border-width: var(--nys-space-1px, 1px)}:host([download]){display:flex;flex-direction:column;gap:var(--nys-space-150, 12px)}.nys-table{width:var(--_nys-table-width);font:var(--_nys-table-font-weight) var(--_nys-table-font-size)/var(--_nys-table-line-height) var(--_nys-table-font-family)}.nys-table table{width:var(--_nys-table-width);border-collapse:collapse;background-color:var(--_nys-table-background-color)}.nys-table caption{padding:var(--_nys-table-padding--caption);font-size:var(--_nys-table-font-size--caption);font-weight:var(--_nys-table-font-weight--caption);text-align:start}.nys-table caption div{display:flex;justify-content:space-between;align-items:center}.nys-table td{padding:var(--_nys-table-padding--cell--y) var(--_nys-table-padding--cell--x);border:var(--_nys-table-border-width) solid var(--_nys-table-border-color)}.nys-table td code{color:var(--_nys-table-color--code);background-color:var(--_nys-table-background-color--code);padding:var(--nys-space-1px) var(--nys-space-2px);border-radius:var(--nys-radius-md)}.nys-table th{border:var(--_nys-table-border-width) solid var(--_nys-table-border-color);overflow:hidden;text-overflow:ellipsis;padding:var(--_nys-table-padding--cell--y) var(--_nys-table-padding--cell--x);text-align:left}.nys-table th:has(nys-button){padding:0}.nys-table th p{margin:0}.nys-table th nys-button{margin:0;width:-moz-available;width:-webkit-fill-available;width:fill-available;justify-content:space-between;--_nys-button-border-width: 0;--_nys-button-border-radius--start: 0;--_nys-button-border-radius--end: 0;--_nys-button-padding--x: var(--_nys-table-padding--cell--x);--_nys-button-justify-content: space-between;--_nys-button-outline-offset: -2px}.nys-table th.nys-table__sortedcolumn{background-color:var(--nys-color-theme-weak, #cddde9)}.nys-table td.nys-table__sortedcolumn{position:relative;z-index:0}.nys-table td.nys-table__sortedcolumn:after{content:"";position:absolute;inset:0;background-color:var(--nys-color-theme, #154973);opacity:.1;pointer-events:none;z-index:-1}:host([striped]) .nys-table tbody tr:nth-child(odd){background-color:var(--_nys-table-background-color--striped)}:host([sortable]) .nys-table th{cursor:pointer}.sr-only{border:0!important;clip-path:inset(50%)!important;height:1px!important;overflow:hidden!important;margin:-1px!important;padding:0!important;position:absolute!important;width:1px!important;white-space:nowrap!important}';
var pn = Object.defineProperty, ce = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && pn(e, t, o), o;
};
let fn = 0;
const Qt = class Qt extends b {
  /**************** Lifecycle Methods ****************/
  constructor() {
    super(), this.id = "", this.name = "", this.striped = !1, this.sortable = !1, this.bordered = !1, this.download = "", this._sortColumn = null, this._sortDirection = "none", this._captionText = "";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-table-${Date.now()}-${fn++}`);
  }
  /******************** Functions ********************/
  // Placeholder for generic functions (component-specific)
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleSlotChange()), this._handleSlotChange();
  }
  _handleSlotChange() {
    const e = this.shadowRoot?.querySelector(
      "slot"
    ), t = this.shadowRoot?.querySelector(
      ".table-container"
    );
    if (!e || !t) return;
    t.innerHTML = "";
    const o = e.assignedElements({ flatten: !0 }).find((i) => i.tagName === "TABLE");
    if (!o) return;
    const n = o.cloneNode(!0);
    this._normalizeTableDOM(n), this.sortable && this._addSortIcons(n), t.appendChild(n);
  }
  _normalizeTableDOM(e) {
    const t = e.querySelector("thead"), r = e.querySelector("tbody");
    if (t && r) return;
    const o = e.querySelector(
      "caption"
    ), n = Array.from(e.querySelectorAll("tr"));
    if (n.length === 0) return;
    const i = document.createElement("thead"), l = document.createElement("tbody"), c = n.findIndex((h) => h.querySelector("th"));
    if (c === -1)
      n.forEach((h) => l.appendChild(h));
    else {
      const h = n[c];
      h.querySelectorAll("th").forEach((u) => {
        Array.from(u.childNodes).forEach((y) => {
          if (y.nodeType === Node.TEXT_NODE && y.textContent?.trim()) {
            const f = document.createElement("p");
            f.textContent = y.textContent, u.replaceChild(f, y);
          }
        });
      }), i.appendChild(h), n.forEach((u, y) => {
        y !== c && l.appendChild(u);
      });
    }
    if (e.innerHTML = "", o && e.appendChild(o), this.sortable) {
      const h = document.createElement("span");
      if (h.setAttribute("class", "sr-only"), h.textContent = "Column headers with buttons are sortable.", o)
        o.appendChild(h);
      else {
        const u = document.createElement("caption");
        u.appendChild(h), e.appendChild(u);
      }
    }
    e.appendChild(i), e.appendChild(l);
  }
  willUpdate() {
    const e = Array.from(this.children).find(
      (o) => o.tagName === "TABLE"
    );
    if (!e) return;
    const r = e.querySelector("caption")?.textContent?.trim() ?? "";
    this._captionText !== r && (this._captionText = r);
  }
  _addSortIcons(e) {
    const t = Array.from(e.querySelectorAll("thead th"));
    t.length !== 0 && t.forEach((r, o) => {
      if (r.querySelector("nys-button[part='sort-button']")) return;
      const n = r.textContent?.trim();
      if (!n) return;
      r.textContent = "";
      const i = document.createElement("nys-button");
      i.setAttribute("part", "sort-button"), i.setAttribute("variant", "ghost"), i.setAttribute("label", n), i.setAttribute("suffixIcon", "slotted"), i.setAttribute("fullWidth", "true");
      const l = document.createElement("nys-icon");
      l.setAttribute("slot", "suffix-icon"), l.setAttribute("name", "height"), l.setAttribute("size", "24"), l.setAttribute("color", "var(--nys-color-text-weak, #4a4d4f)"), i.appendChild(l), i.addEventListener("nys-click", (c) => {
        c.stopPropagation(), this._onSortClick(o, e);
      }), r.appendChild(i);
    });
  }
  _updateSortIcons(e) {
    e.querySelectorAll("thead th").forEach((r, o) => {
      const n = r.querySelector("nys-button[part='sort-button']"), i = n?.querySelector(
        "nys-icon[slot='suffix-icon']"
      );
      if (!(!n || !i))
        if (o === this._sortColumn)
          switch (r.classList.add("nys-table__sortedcolumn"), this._sortDirection) {
            case "asc":
              i.setAttribute("name", "straight"), i.setAttribute("color", "var(--nys-color-ink, #1b1b1b)"), i.style.transform = "rotate(0deg)", r.setAttribute("aria-sort", "ascending");
              break;
            case "desc":
              i.setAttribute("name", "straight"), i.setAttribute("color", "var(--nys-color-ink, #1b1b1b)"), i.style.transform = "rotate(180deg)", r.setAttribute("aria-sort", "descending");
              break;
          }
        else
          r.classList.remove("nys-table__sortedcolumn"), i.setAttribute("name", "height"), i.setAttribute("color", "var(--nys-color-text-weak, #4a4d4f)"), i.style.transform = "", r.removeAttribute("aria-sort");
    });
  }
  _onSortClick(e, t) {
    this._sortColumn !== e ? (this._sortColumn = e, this._sortDirection = "asc") : this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc", this._updateSortIcons(t), this._sortTable(t, e, this._sortDirection);
  }
  _sortTable(e, t, r) {
    const o = e.querySelector("tbody");
    if (!o) return;
    const n = Array.from(o.querySelectorAll("tr"));
    n.sort((i, l) => {
      const c = i.children[t]?.textContent?.trim() ?? "", h = l.children[t]?.textContent?.trim() ?? "", u = Number(c), y = Number(h);
      let f;
      return !isNaN(u) && !isNaN(y) ? f = u - y : f = c.localeCompare(h), r === "asc" ? f : -f;
    }), n.forEach((i) => o.appendChild(i)), this._updateSortedColumnStyles(e);
  }
  _updateSortedColumnStyles(e) {
    e.querySelectorAll("tbody tr").forEach((r) => {
      Array.from(r.children).forEach((o, n) => {
        n === this._sortColumn ? o.classList.add("nys-table__sortedcolumn") : o.classList.remove("nys-table__sortedcolumn");
      });
    });
  }
  downloadFile() {
    const e = document.createElement("a");
    e.href = this.download, e.download = this.download.split("/").pop() || "table-data.csv", document.body.appendChild(e), e.click(), document.body.removeChild(e);
  }
  /****************** Event Handlers ******************/
  // Placeholder for event handlers if needed
  render() {
    return d`
      <div class="nys-table">
        <div class="table-container"></div>
      </div>
      ${this.download ? d` <nys-button
            id="${this.id}-download-button"
            label="Download table"
            aria-label=${this._captionText ? `Download ${this._captionText}` : "Download table"}
            size="sm"
            variant="outline"
            prefixIcon="download"
            @nys-click=${this.downloadFile}
          ></nys-button>` : ""}
      <slot style="display:none"></slot>
    `;
  }
};
Qt.styles = g(yn);
let G = Qt;
ce([
  a({ type: String, reflect: !0 })
], G.prototype, "id");
ce([
  a({ type: String, reflect: !0 })
], G.prototype, "name");
ce([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "striped");
ce([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "sortable");
ce([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "bordered");
ce([
  a({ type: String, reflect: !0 })
], G.prototype, "download");
ce([
  x()
], G.prototype, "_sortColumn");
ce([
  x()
], G.prototype, "_sortDirection");
ce([
  x()
], G.prototype, "_captionText");
customElements.get("nys-table") || customElements.define("nys-table", G);
const vn = ':host{--_nys-textarea-width: 100%;--_nys-textarea-border-radius: var(--nys-radius-md, 4px);--_nys-textarea-border-width: var(--nys-border-width-sm, 1px);--_nys-textarea-border-color: var(--nys-color-neutral-400, #909395);--_nys-textarea-padding: var(--nys-space-200, 16px);--_nys-textarea-gap: var(--nys-space-50, 4px);--_nys-textarea-color: var(--nys-color-ink, #1b1b1b);--_nys-textarea-color--placeholder: var(--nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f));--_nys-textarea-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-textarea-outline-width: var(--nys-border-width-sm, 1px);--_nys-textarea-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textarea-background-color--disabled: var(--nys-color-neutral-10, #f6f6f6);--_nys-textarea-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-textarea-color--disabled: var(--nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1));--_nys-textarea-font-family: var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif));--_nys-textarea-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textarea-font-weight: var(--nys-font-weight-regular, 400);--_nys-textarea-line-height: var(--nys-font-lineheight-ui-md, 24px);--nys-textarea-letterspacing-ui: var(--nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px))}:host([width=sm]){--_nys-textarea-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textarea-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textarea-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textarea-width: 100%;flex:1}:host([showError]){--_nys-textarea-border-color: var(--nys-color-danger, #b52c2c)}.nys-textarea{font-weight:var(--_nys-textarea-font-weight);font-family:var(--_nys-textarea-font-family);line-height:var(--_nys-textarea-line-height);letter-spacing:var(--nys-textarea-letterspacing-ui);color:var(--_nys-textarea-color);gap:var(--_nys-textarea-gap);display:flex;flex-direction:column}.nys-textarea__textarea{color:var(--_nys-textarea-color);font-size:var(--_nys-textarea-font-size);font-family:var(--_nys-textarea-font-family);border-radius:var(--_nys-textarea-border-radius);border:solid var(--_nys-textarea-border-color) var(--_nys-textarea-border-width);padding:var(--_nys-textarea-padding);width:var(--_nys-textarea-width);line-height:var(--_nys-textarea-line-height);max-width:var(--_nys-textarea-width);box-sizing:border-box}.nys-textarea__textarea::placeholder{color:var(--_nys-textarea-color--placeholder)}.nys-textarea__textarea.none{resize:none}.nys-textarea__textarea:hover:not(:disabled):not(:focus):not([readonly]){outline:solid var(--_nys-textarea-outline-width) var(--_nys-textarea-outline-color--hover);border-color:var(--_nys-textarea-outline-color--hover)}.nys-textarea__textarea:focus:not([readonly]){outline:solid var(--_nys-textarea-outline-width) var(--_nys-textarea-outline-color--focus);border-color:var(--_nys-textarea-outline-color--focus);caret-color:var(--_nys-textarea-outline-color--focus)}.nys-textarea__textarea:disabled,.nys-textarea__textarea:disabled::placeholder{background-color:var(--_nys-textarea-background-color--disabled);border-color:var(--_nys-textarea-border-color--disabled);color:var(--_nys-textarea-color--disabled);cursor:not-allowed}';
var bn = Object.defineProperty, M = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && bn(e, t, o), o;
};
let gn = 0;
const ft = class ft extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.inverted = !1, this.form = null, this.maxlength = null, this.width = "full", this.rows = 4, this.resize = "vertical", this.showError = !1, this.errorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  async updated(e) {
    if (await Promise.resolve(), e.has("rows") && (this.rows = this.rows ?? 4), e.has("readonly") || e.has("required")) {
      const t = this.shadowRoot?.querySelector("textarea");
      t && (t.required = this.required && !this.readonly);
    }
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textarea-${Date.now()}-${gn++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("textarea");
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && !this.value ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("textarea");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("textarea");
    if (!e) return;
    let t = e.validationMessage;
    this._setValidityMessage(t);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this.shadowRoot?.querySelector("textarea");
    e && (e.value = "", e.setAttribute("aria-invalid", "false")), this.showError = !1, this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("textarea");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this.shadowRoot?.querySelector("textarea");
    if (t) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Handle input event to check pattern validity
  _handleInput(e) {
    const t = e.target;
    this.value = t.value, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("nys-blur"));
  }
  _handleSelect(e) {
    const t = e.target;
    this.value = t.value, this.dispatchEvent(
      new CustomEvent("nys-select", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleSelectionChange(e) {
    const t = e.target;
    this.value = t.value, this.dispatchEvent(
      new CustomEvent("nys-selectionchange", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return d`
      <div class="nys-textarea">
        <nys-label
          for=${this.id}
          label=${this.label}
          description=${this.description}
          flag=${this.required && !this.readonly ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <textarea
          class="nys-textarea__textarea ${this.resize}"
          name=${this.name}
          id=${this.id}
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required && !this.readonly}
          ?readonly=${this.readonly}
          aria-disabled=${p(this.disabled ? "true" : void 0)}
          aria-required=${p(this.required ? "true" : void 0)}
          aria-label=${p(this.label || void 0)}
          aria-description=${p(this.description || void 0)}
          placeholder=${p(
      this.placeholder ? this.placeholder : void 0
    )}
          maxlength=${p(this.maxlength ?? void 0)}
          .rows=${this.rows}
          form=${p(this.form || void 0)}
          @input=${this._handleInput}
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @select="${this._handleSelect}"
          @selectionchange="${this._handleSelectionChange}"
        ></textarea>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
ft.styles = g(vn), ft.formAssociated = !0;
let $ = ft;
M([
  a({ type: String, reflect: !0 })
], $.prototype, "id");
M([
  a({ type: String, reflect: !0 })
], $.prototype, "name");
M([
  a({ type: String })
], $.prototype, "label");
M([
  a({ type: String })
], $.prototype, "description");
M([
  a({ type: String })
], $.prototype, "placeholder");
M([
  a({ type: String })
], $.prototype, "value");
M([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "disabled");
M([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "readonly");
M([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "required");
M([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "optional");
M([
  a({ type: String })
], $.prototype, "tooltip");
M([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "inverted");
M([
  a({ type: String, reflect: !0 })
], $.prototype, "form");
M([
  a({ type: Number })
], $.prototype, "maxlength");
M([
  a({ type: String, reflect: !0 })
], $.prototype, "width");
M([
  a({ type: Number })
], $.prototype, "rows");
M([
  a({ type: String, reflect: !0 })
], $.prototype, "resize");
M([
  a({ type: Boolean, reflect: !0 })
], $.prototype, "showError");
M([
  a({ type: String })
], $.prototype, "errorMessage");
customElements.get("nys-textarea") || customElements.define("nys-textarea", $);
const _n = ':host{--_nys-textinput-width: 100%;--_nys-textinput-height: var(--nys-size-500, 40px);--_nys-textinput-border-radius: var(--nys-radius-md, 4px);--_nys-textinput-border-width: var(--nys-border-width-sm, 1px);--_nys-textinput-border-color: var(--nys-color-neutral-400, #909395);--_nys-textinput-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-textinput-color--placeholder: var( --nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f) );--_nys-textinput-padding: var(--nys-space-100, 8px);--_nys-textinput-gap: var(--nys-space-50, 4px);--_nys-textinput-background-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-textinput-outline-color--hover: var( --nys-color-neutral-900, #1b1b1b );--_nys-textinput-outline-width: var(--nys-border-width-sm, 1px);--_nys-textinput-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textinput-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-textinput-border-color--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-textinput-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-textinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-textinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textinput-font-weight: var(--nys-font-weight-regular, 400);--_nys-textinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-textinput-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-textinput-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textinput-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textinput-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textinput-width: 100%;flex:1}:host([showError]){--_nys-textinput-border-color: var(--nys-color-danger, #b52c2c)}.nys-textinput{font-weight:var(--_nys-textinput-font-weight);font-family:var(--_nys-textinput-font-family);font-size:var(--_nys-textinput-font-size);line-height:var(--_nys-textinput-line-height);letter-spacing:var(--_nys-textinput-letter-spacing);color:var(--_nys-textinput-color);gap:var(--_nys-textinput-gap);display:flex;flex-direction:column}.nys-textinput__mask-overlay{position:absolute;margin:calc(var(--_nys-textinput-padding) + var(--_nys-textinput-border-width));color:var(--nys-color-text-weaker, #797c7f);display:inline;overflow:hidden;white-space:nowrap;font:inherit;letter-spacing:normal}.nys-textinput__input{color:var(--_nys-textinput-color);border-radius:var(--_nys-textinput-border-radius);border:solid var(--_nys-textinput-border-color) var(--_nys-textinput-border-width);outline:transparent solid var(--_nys-textinput-outline-width);padding:var(--_nys-textinput-padding);width:100%;height:var(--_nys-textinput-height);box-sizing:border-box;background-color:transparent;position:relative;font:inherit}.nys-textinput__input::placeholder{color:var(--_nys-textinput-color--placeholder)}.nys-textinput__buttoncontainer{width:var(--_nys-textinput-width);max-width:100%;display:flex}.nys-textinput__buttoncontainer.has-end-button .nys-textinput__input{border-start-end-radius:0;border-end-end-radius:0;border-inline-end:none}.nys-textinput__buttoncontainer.has-start-button .nys-textinput__input{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:none}.nys-textinput__container{position:relative;display:flex;align-items:center;width:100%;background-color:var(--_nys-textinput-background-color);border-radius:var(--_nys-textinput-border-radius)}::slotted(nys-button){--_nys-button-height: var(--_nys-textinput-height);--_nys-button-border-radius--start: var(--_nys-textinput-border-radius);--_nys-button-border-radius--end: var(--_nys-textinput-border-radius);--_nys-button-background-color--disabled: var( --_nys-textinput-background-color--disabled );--_nys-button-border-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-border-width: var(--_nys-textinput-border-width);z-index:1}.nys-textinput__buttoncontainer.has-start-button ::slotted(nys-button){--_nys-button-border-radius--end: 0}.nys-textinput__buttoncontainer.has-end-button ::slotted(nys-button){--_nys-button-border-radius--start: 0}.eye-icon{position:absolute;right:var(--nys-space-50, 4px);top:50%;transform:translateY(-50%);cursor:pointer;color:var(--_nys-textinput-color--icon);--nys-button-background-color: var(--_nys-textinput-background-color);--nys-button-background-color--hover: var( --_nys-textinput-background-color );--nys-button-background-color--active: var( --_nys-textinput-background-color );--_nys-button-outline-focus: calc( var(--_nys-button-outline-width) * -1 );--_nys-button-padding--y: var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-height: var(--nys-size-300, 32px);--_nys-button-width: var(--nys-size-400, 32px)}.nys-textinput__input:hover:not(:disabled):not(:focus):not([readonly]){outline-color:var(--_nys-textinput-outline-color--hover);border-color:var(--_nys-textinput-outline-color--hover)}.nys-textinput__input:focus:not([readonly]){outline-color:var(--_nys-textinput-outline-color--focus);border-color:var(--_nys-textinput-outline-color--focus);caret-color:var(--_nys-textinput-outline-color--focus)}.nys-textinput__input:disabled,.nys-textinput__input:disabled::placeholder,.nys-textinput__input:disabled+.eye-icon{background-color:var(--_nys-textinput-background-color--disabled);border-color:var(--_nys-textinput-border-color--disabled);color:var(--_nys-textinput-color--disabled);cursor:not-allowed}';
var mn = Object.defineProperty, w = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && mn(e, t, o), o;
};
let xn = 0;
const vt = class vt extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.type = "text", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.pattern = "", this.maxlength = null, this.ariaLabel = "", this.width = "full", this.step = null, this.min = null, this.max = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.showPassword = !1, this._originalErrorMessage = "", this._hasUserInteracted = !1, this._maskPatterns = {
      tel: "(___) ___-____"
    }, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textinput-${Date.now()}-${xn++}`), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  // Ensure the "width" property is valid after updates
  async updated(e) {
    if (e.has("disabled") && (this._validateButtonSlot("startButton"), this._validateButtonSlot("endButton")), e.has("type")) {
      const t = this._maskPatterns[this.type], r = this.shadowRoot?.querySelector("input");
      if (r)
        if (t)
          r.maxLength = t.length, this._updateOverlay(r.value, t);
        else {
          r.removeAttribute("maxLength");
          const o = this.shadowRoot?.querySelector(
            ".nys-textinput__mask-overlay"
          );
          o && (o.textContent = "");
        }
    }
    if (e.has("readonly") || e.has("required")) {
      const t = this.shadowRoot?.querySelector("input");
      t && (t.required = this.required && !this.readonly);
    }
  }
  focus() {
    this.shadowRoot?.querySelector("input")?.focus();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value?.trim() === "") ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    if (!t) return;
    this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e;
    const r = e ? { customError: !0 } : {};
    this._internals.setValidity(r, this.errorMessage, t);
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = e.validity;
    let r = "";
    t.valueMissing ? r = "This field is required" : t.typeMismatch ? r = "Invalid format for this type" : t.patternMismatch ? r = "Invalid format" : t.tooShort ? r = `Value is too short. Minimum length is ${e.minLength}` : t.tooLong ? r = `Value is too long. Maximum length is ${e.maxLength}` : t.rangeUnderflow ? r = `Value must be at least ${e.min}` : t.rangeOverflow ? r = `Value must be at most ${e.max}` : t.stepMismatch ? r = "Invalid step value" : r = e.validationMessage, this._setValidityMessage(r);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this.shadowRoot?.querySelector("input");
    e && (e.value = ""), this._internals.setFormValue(""), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.showPassword = !1, this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this.shadowRoot?.querySelector("input");
    if (t) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  _updateOverlay(e, t) {
    const r = this.shadowRoot?.querySelector(
      ".nys-textinput__mask-overlay"
    );
    if (!r) return;
    const o = e, n = t.slice(o.length);
    r.textContent = o + n;
  }
  _applyMask(e, t) {
    const r = e.replace(/\D/g, "");
    let o = "";
    if (this.type === "tel")
      return r.length > 0 && (o = "(" + r.substring(0, 3)), r.length >= 4 && (o += ") " + r.substring(3, 6)), r.length > 6 && (o += "-" + r.substring(6, 10)), o;
    let n = 0;
    for (let i = 0; i < t.length; i++)
      if (t[i] === "_" || t[i].match(/[d9]/i))
        if (n < r.length)
          o += r[n++];
        else
          break;
      else
        o += t[i];
    return o;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Handle input event to check pattern validity
  _handleInput(e) {
    const t = e.target;
    let r = t.value;
    const o = this._maskPatterns[this.type];
    o && (r = this._applyMask(r, o), t.value = r, this._updateOverlay(r, o)), this.value = r, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("nys-blur"));
  }
  _validateButtonSlot(e) {
    const t = this.shadowRoot?.querySelector(
      'slot[name="' + e + '"]'
    ), r = this.shadowRoot?.querySelector(
      ".nys-textinput__buttoncontainer"
    );
    if (!t || !r) return;
    const o = t.assignedElements();
    let n = !1;
    o.forEach((i) => {
      i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-button" && !n ? (n = !0, i.setAttribute("size", "sm"), i.setAttribute("variant", "primary"), this.disabled ? i.setAttribute("disabled", "true") : i.removeAttribute("disabled")) : (console.warn(
        "The '" + e + "' slot only accepts a single <nys-button> element. Removing invalid or extra node:",
        i
      ), i.remove());
    }), e === "startButton" ? r.classList.toggle("has-start-button", n) : e === "endButton" && r.classList.toggle("has-end-button", n);
  }
  render() {
    return d`
      <div class="nys-textinput">
        <nys-label
          for=${this.id + "--native"}
          label=${this.label}
          description=${this.description}
          flag=${this.required && !this.readonly ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-textinput__buttoncontainer">
          <slot
            name="startButton"
            @slotchange=${() => this._validateButtonSlot("startButton")}
          ></slot>
          <div class="nys-textinput__container">
            <span class="nys-textinput__mask-overlay"></span>
            <input
              class="nys-textinput__input"
              type=${this.type === "password" ? this.showPassword ? "text" : "password" : this.type}
              name=${this.name}
              id=${this.id + "--native"}
              ?disabled=${this.disabled}
              ?required=${this.required && !this.readonly}
              ?readonly=${this.readonly}
              aria-required=${this.required}
              aria-disabled="${this.disabled}"
              aria-label="${[this.label, this.description].filter(Boolean).join(" ") || p(this.ariaLabel || void 0) || "Text input"}"
              .value=${this.value}
              placeholder=${p(
      this.placeholder ? this.placeholder : void 0
    )}
              pattern=${p(this.pattern ? this.pattern : void 0)}
              min=${p(this.min !== null ? this.min : void 0)}
              maxlength=${p(
      this.maxlength !== null ? this.maxlength : void 0
    )}
              step=${p(this.step !== null ? this.step : void 0)}
              max=${p(this.max !== null ? this.max : void 0)}
              form=${p(this.form || void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type === "password" ? d` <nys-button
                  class="eye-icon"
                  id="password-toggle"
                  suffixIcon="slotted"
                  ariaLabel="password toggle"
                  variant="ghost"
                  size="sm"
                  @nys-click=${() => !this.disabled && this._togglePasswordVisibility()}
                >
                  <nys-icon
                    slot="suffix-icon"
                    size="2xl"
                    name=${this.showPassword ? "visibility_off" : "visibility"}
                  ></nys-icon>
                </nys-button>` : ""}
          </div>
          <slot
            name="endButton"
            @slotchange=${() => this._validateButtonSlot("endButton")}
          ></slot>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
vt.styles = g(_n), vt.formAssociated = !0;
let _ = vt;
w([
  a({ type: String, reflect: !0 })
], _.prototype, "id");
w([
  a({ type: String, reflect: !0 })
], _.prototype, "name");
w([
  a({ type: String, reflect: !0 })
], _.prototype, "type");
w([
  a({ type: String })
], _.prototype, "label");
w([
  a({ type: String })
], _.prototype, "description");
w([
  a({ type: String })
], _.prototype, "placeholder");
w([
  a({ type: String })
], _.prototype, "value");
w([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "disabled");
w([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "readonly");
w([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "required");
w([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "optional");
w([
  a({ type: String })
], _.prototype, "tooltip");
w([
  a({ type: String, reflect: !0 })
], _.prototype, "form");
w([
  a({ type: String })
], _.prototype, "pattern");
w([
  a({ type: Number })
], _.prototype, "maxlength");
w([
  a({ type: String })
], _.prototype, "ariaLabel");
w([
  a({ type: String, reflect: !0 })
], _.prototype, "width");
w([
  a({ type: Number })
], _.prototype, "step");
w([
  a({ type: Number })
], _.prototype, "min");
w([
  a({ type: Number })
], _.prototype, "max");
w([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "inverted");
w([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "showError");
w([
  a({ type: String })
], _.prototype, "errorMessage");
w([
  x()
], _.prototype, "showPassword");
customElements.get("nys-textinput") || customElements.define("nys-textinput", _);
const wn = ':host{--_nys-toggle-width: var(--nys-font-size-8xl, 44px);--_nys-toggle-height: var(--nys-size-300, 24px);--_nys-toggle-border-radius: var(--nys-radius-round, 1776px);--_nys-toggle-border-width: var(--nys-border-width-md, 2px);--_nys-toggle-size--knob: var(--nys-font-size-lg, 18px);--_nys-toggle-margin--knob: calc( (var(--_nys-toggle-height) - var(--_nys-toggle-size--knob)) / 2 );--_nys-toggle-transform--translateX: calc( var(--_nys-toggle-width) - var(--_nys-toggle-size--knob) - var( --_nys-toggle-margin--knob ) - 2px );--_nys-toggle-gap: var(--nys-space-150, 12px);--_nys-toggle-transition-duration: .3s;--_nys-toggle-outline-color: var(--nys-color-focus, #004dd1);--_nys-toggle-outline-width: var(--nys-border-width-md, 2px);--_nys-toggle-background-color: var(--nys-color-neutral-500, #797c7f);--_nys-toggle-background-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-toggle-background-color--checked: var(--nys-color-theme, #154973);--_nys-toggle-background-color--hover: var(--nys-color-neutral-600, #62666a);--_nys-toggle-background-color--active: var(--nys-color-neutral-700, #4a4d4f);--_nys-toggle-background-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-toggle-background-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-toggle-color-ink-reverse: var(--nys-color-ink-reverse, #ffffff);--_nys-toggle-color--disabled: var(--nys-color-neutral-500, #797c7f)}.nys-toggle__content{display:flex;gap:var(--_nys-toggle-gap)}.nys-toggle__content nys-label{--_nys-label-font-weight: var(--nys-font-weight-regular, 400)}.nys-toggle__content:has(input:disabled) nys-label{--_nys-label-color: var(--_nys-toggle-color--disabled);cursor:not-allowed}.nys-toggle__toggle{position:relative;display:inline-block;width:var(--_nys-toggle-width);min-width:var(--_nys-toggle-width);max-width:var(--_nys-toggle-width);height:var(--_nys-toggle-height);min-height:var(--_nys-toggle-height);max-height:var(--_nys-toggle-height)}.nys-toggle__toggle input{opacity:0;width:0;height:0}.nys-toggle__toggle input:checked+.slider{background-color:var(--_nys-toggle-background-color--checked)}.nys-toggle__toggle input:checked+.slider:hover{background-color:var(--_nys-toggle-background-color--checked--hover)}.nys-toggle__toggle input:checked+.slider:hover .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked--hover)}.nys-toggle__toggle input:checked+.slider .knob{transform:translate(var(--_nys-toggle-transform--translateX))}.nys-toggle__toggle input:checked+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked)}.nys-toggle__toggle input:active:not(:disabled)+.slider{background-color:var(--_nys-toggle-background-color--active);outline:solid var(--_nys-toggle-outline-width) var(--_nys-toggle-outline-color)}.nys-toggle__toggle input:active:not(:disabled)+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--active)}.nys-toggle__toggle input:active:not(:disabled)+.slider:checked{background-color:var(--_nys-toggle-background-color--checked--active)}.nys-toggle__toggle input:active:not(:disabled)+.slider:checked .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked--active)}.nys-toggle__toggle input:focus+.slider{outline:solid var(--_nys-toggle-outline-width) var(--_nys-toggle-outline-color)}.nys-toggle__toggle input:disabled+.slider{background-color:var(--_nys-toggle-background-color--disabled);cursor:not-allowed}.nys-toggle__toggle input:disabled+.slider:hover{background-color:var(--_nys-toggle-background-color--disabled)}.nys-toggle__toggle input:disabled+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--disabled)}.slider{position:absolute;cursor:pointer;border-radius:var(--_nys-toggle-border-radius);outline-offset:var(--_nys-toggle-border-width);width:var(--_nys-toggle-width);inset:0;background-color:var(--_nys-toggle-background-color);display:flex;align-items:center}.slider:hover{background-color:var(--_nys-toggle-background-color--hover)}.slider:hover .knob .toggle-icon{color:var(--_nys-toggle-background-color--hover)}.knob{content:"";height:var(--_nys-toggle-size--knob);width:var(--_nys-toggle-size--knob);margin:var(--_nys-toggle-margin--knob);border-radius:var(--nys-radius-round, 1776px);background-color:var(--_nys-toggle-color-ink-reverse);transition:all var(--_nys-toggle-transition-duration) cubic-bezier(.27,.2,.25,1.51);overflow:hidden;display:flex;align-items:center;justify-content:center}.toggle-icon{position:absolute;color:var(--_nys-toggle-background-color)}:host([size=sm]){--_nys-toggle-width: var(--nys-size-450, 36px);--_nys-toggle-height: var(--nys-size-250, 20px);--_nys-toggle-size--knob: var(--nys-size-200, 16px);--_nys-toggle-gap: var(--nys-space-100, 8px)}:host([size=sm]) .toggle-icon{font-size:var(--nys-font-size-body-xs, 12px)}@supports not (font-size: 1cap){:host([size=sm]) .toggle-icon{font-size:var(--nys-font-size-body-xs, 12px)}}:host([size=md]){--_nys-toggle-width: var(--nys-size-550, 44px);--_nys-toggle-height: var(--nys-size-300, 24px);--_nys-toggle-size--knob: var(--nys-size-250, 20px)}:host([size=md]) .toggle-icon{font-size:var(--nys-font-size-body-sm, 14px)}@supports not (font-size: 1cap){:host([size=md]) .toggle-icon{font-size:calc(var(--nys-font-size-body-sm, 14px) - 1px)}}@media(prefers-reduced-motion:reduce){:host{--toggle-transition-duration: 0s}}';
var kn = Object.defineProperty, te = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && kn(e, t, o), o;
};
let Cn = 0;
const bt = class bt extends b {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.value = "", this.label = "", this.description = "", this.form = null, this.checked = !1, this.disabled = !1, this.noIcon = !1, this.inverted = !1, this.size = "md", this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-toggle-${Date.now()}-${Cn++}`);
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  // Update the internals whenever `checked` or `value` changes.
  updated(e) {
    (e.has("checked") || e.has("value")) && this._internals.setFormValue(this.checked ? this.value : null);
  }
  formResetCallback() {
    this.checked = !1, this._internals.setFormValue(this.checked ? this.value : null), this.requestUpdate();
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _emitChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, checked: this.checked },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("nys-blur"));
  }
  _handleChange(e) {
    const { checked: t } = e.target;
    this.checked = t, this._emitChangeEvent();
  }
  _handleKeyDown(e) {
    !this.disabled && (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.checked = !this.checked, this._emitChangeEvent());
  }
  render() {
    return d`
      <div class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id=${this.id}
              type="checkbox"
              name="${p(this.name ? this.name : void 0)}"
              .value=${this.value}
              form=${p(this.form || void 0)}
              .checked=${this.checked}
              ?disabled=${this.disabled}
              role="switch"
              aria-checked="${this.checked ? "true" : "false"}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-label="${this.label || "Toggle switch"}"
              @change=${this._handleChange}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeyDown}
            />
            <span class="slider">
              <div class="knob">
                ${this.noIcon ? "" : d`<nys-icon
                      class="toggle-icon"
                      name="${this.checked ? "check" : "close"}"
                      size="2xl"
                    ></nys-icon>`}
              </div>
            </span>
          </div>
          ${this.label && d`<nys-label
            for=${this.id}
            label=${this.label}
            description=${p(this.description || void 0)}
            ?inverted=${this.inverted}
          >
            <slot name="description" slot="description"
              >${this.description}</slot
            >
          </nys-label> `}
        </div>
      </div>
    `;
  }
};
bt.styles = g(wn), bt.formAssociated = !0;
let H = bt;
te([
  a({ type: String, reflect: !0 })
], H.prototype, "id");
te([
  a({ type: String, reflect: !0 })
], H.prototype, "name");
te([
  a({ type: String })
], H.prototype, "value");
te([
  a({ type: String })
], H.prototype, "label");
te([
  a({ type: String })
], H.prototype, "description");
te([
  a({ type: String, reflect: !0 })
], H.prototype, "form");
te([
  a({ type: Boolean, reflect: !0 })
], H.prototype, "checked");
te([
  a({ type: Boolean, reflect: !0 })
], H.prototype, "disabled");
te([
  a({ type: Boolean })
], H.prototype, "noIcon");
te([
  a({ type: Boolean, reflect: !0 })
], H.prototype, "inverted");
te([
  a({ type: String, reflect: !0 })
], H.prototype, "size");
customElements.get("nys-toggle") || customElements.define("nys-toggle", H);
const $n = `:host{--_nys-tooltip-color: var(--nys-color-text-reverse, #ffffff);--_nys-tooltip-background-color: var(--nys-color-ink, #1b1b1b);--_nys-tooltip-border-radius: var(--nys-radius-md, 4px);--_nys-tooltip-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-tooltip-font-size: var(--nys-type-size-ui-sm, 14px);--_nys-tooltip-letter-spacing: var(--nys-font-letterspacing-ui-sm, .044px);--_nys-tooltip-line-height: var(--nys-font-lineheight-ui-sm, 24px)}.nys-tooltip__content{position:fixed;top:0;left:0;max-width:400px;width:max-content;max-height:120px;padding:var(--nys-space-50, 4px) var(--nys-space-100, 8px);background-color:var(--_nys-tooltip-background-color);border-radius:var(--_nys-tooltip-border-radius);cursor:auto;z-index:1}.nys-tooltip__inner{color:var(--_nys-tooltip-color);font-family:var(--_nys-tooltip-font-family);font-size:var(--_nys-tooltip-font-size);font-weight:400;line-height:var(--_nys-tooltip-line-height);letter-spacing:var(--_nys-tooltip-letter-spacing);white-space:normal;overflow-wrap:anywhere;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}.nys-tooltip__arrow{position:absolute;width:14px;height:6px;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="%231B1B1B"/></svg>') no-repeat center}.nys-tooltip__content[active]{display:block}.fade-out{opacity:0;transition:opacity .2s ease-out}:host([position=top]) .nys-tooltip__arrow{top:100%;left:var(--arrow-offset-x, 50%);transform:translate(-50%)}:host([position=bottom]) .nys-tooltip__arrow{bottom:100%;left:var(--arrow-offset-x, 50%);transform:translate(-50%) rotate(180deg)}:host([position=left]) .nys-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%) rotate(-90deg);margin-left:-4px}:host([position=right]) .nys-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%) rotate(90deg);margin-right:-4px}:host([inverted]) .nys-tooltip__content{--_nys-tooltip-color: var(--nys-color-text, #1b1b1b);--_nys-tooltip-background-color: var(--nys-color-ink-reverse, #ffffff)}:host([inverted]) .nys-tooltip__arrow{background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="white"/></svg>') no-repeat center}@media(max-width:400px){.nys-tooltip__content{max-width:calc(100vw - 2rem)}}`;
var En = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Oe = (s, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? Sn(e, t) : e, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = (r ? i(e, t, o) : i(o)) || o);
  return r && o && En(e, t, o), o;
};
let Dn = 0;
const Xt = class Xt extends b {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.text = "", this.inverted = !1, this.for = "", this._active = !1, this._userHasSetPosition = !1, this._originalUserPosition = null, this._internallyUpdatingPosition = !1, this._hideTimeout = null, this._position = null, this._showTooltip = () => {
      if (this._active = !0, this._addScrollListeners(), this._userHasSetPosition && this._originalUserPosition && this._doesPositionFit(this._originalUserPosition)) {
        this.position = this._originalUserPosition, this.updateComplete.then(() => {
          this._userPositionTooltip();
        });
        return;
      }
      this._autoPositionTooltip();
    }, this._handleBlurOrMouseLeave = () => {
      const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(
        ".nys-tooltip__content"
      );
      e !== document.activeElement && (!e || !t || this._triggerFadeOut(t));
    }, this._cancelFadeOut = () => {
      const e = this.shadowRoot?.querySelector(
        ".nys-tooltip__content"
      ), t = this._getReferenceElement();
      if (!e || !t) return;
      const r = e.matches(":hover"), o = t.matches(":hover"), n = document.activeElement === t;
      !r && !o && !n || (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), e.classList.remove("fade-out"), this._active = !0);
    }, this._handleScrollOrResize = () => {
      !this._active || this._hideTimeout || this._showTooltip();
    }, this._handleEscapeKey = (e) => {
      if (e.key === "Escape" && this._active) {
        this._active = !1, this._removeScrollListeners();
        const t = this.shadowRoot?.querySelector(
          ".nys-tooltip__content"
        );
        t && this._resetTooltipPositioningStyles(t);
      }
    };
  }
  get position() {
    return this._position;
  }
  set position(e) {
    const t = this._position;
    this._position = e, this.requestUpdate("position", t), this._internallyUpdatingPosition || (this._userHasSetPosition = e !== null, this._originalUserPosition = e);
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-tooltip-${Date.now()}-${Dn++}`), window.addEventListener("keydown", this._handleEscapeKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    e && t && (e.removeEventListener("mouseenter", this._showTooltip), e.removeEventListener("mouseenter", this._cancelFadeOut), e.removeEventListener("mouseleave", this._handleBlurOrMouseLeave), e.removeEventListener("focusin", this._showTooltip), e.removeEventListener("focusout", this._handleBlurOrMouseLeave), t.removeEventListener("mouseenter", this._cancelFadeOut), t.removeEventListener("mouseleave", this._handleBlurOrMouseLeave)), window.removeEventListener("keydown", this._handleEscapeKey);
  }
  async firstUpdated() {
    await this.updateComplete;
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    !e || !t || (this.applyInverseTransform(), this._applyTooltipPropToFormComponent(e), (e.tagName.toLowerCase() === "nys-button" || e.tagName.toLowerCase() === "nys-icon") && (this._applyFocusBehavior(e), e.addEventListener("mouseenter", this._showTooltip), e.addEventListener("mouseenter", this._cancelFadeOut), e.addEventListener("mouseleave", this._handleBlurOrMouseLeave), e.addEventListener("focusin", this._showTooltip), e.addEventListener("focusout", this._handleBlurOrMouseLeave), t.addEventListener("mouseenter", this._cancelFadeOut), t.addEventListener("mouseleave", this._handleBlurOrMouseLeave)));
  }
  updated(e) {
    super.updated(e);
    const t = this._getReferenceElement();
    t && (this._positionStartingBase(), e.has("text") && this._applyTooltipPropToFormComponent(t));
  }
  _triggerFadeOut(e) {
    !e || this._hideTimeout || (e.classList.add("fade-out"), this._hideTimeout = window.setTimeout(() => {
      this._active = !1, this._removeScrollListeners(), this._positionStartingBase(), this._resetTooltipPositioningStyles(e), e.classList.remove("fade-out"), this._hideTimeout = null;
    }, 200));
  }
  // Listen to window scroll so a focus tooltip can auto position even when user move across the page
  _addScrollListeners() {
    window.addEventListener("scroll", this._handleScrollOrResize, !0), window.addEventListener("resize", this._handleScrollOrResize);
  }
  _removeScrollListeners() {
    window.removeEventListener("scroll", this._handleScrollOrResize, !0), window.removeEventListener("resize", this._handleScrollOrResize);
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getReferenceElement() {
    const e = this.for;
    if (!e) return null;
    let t = document.getElementById(e);
    if (t) return t;
    const r = (o) => {
      for (const n of Array.from(o.querySelectorAll("*"))) {
        const i = n.shadowRoot;
        if (i) {
          const l = i.getElementById(e);
          if (l) return l;
          const c = r(i);
          if (c) return c;
        }
      }
      return null;
    };
    return r(document);
  }
  // We need to pass `ariaLabel` or `ariaDescription` to the nys-components so they can announce both their label and the tooltip's text
  async _passAria(e) {
    const t = e.tagName.toLowerCase();
    t === "nys-icon" ? e.setAttribute("ariaLabel", `Hint: ${this.text}`) : t === "nys-button" && e.setAttribute("ariaDescription", `, Hint: ${this.text}`);
  }
  /**
   * In React, the reference element found is often the native HTML element within the nys-component.
   * Therefore, this function accounts for the closest NYS component ancestor that supports a tooltip prop.
   */
  _applyTooltipPropToFormComponent(e) {
    const t = e.tagName.toLowerCase();
    if (t.startsWith("nys-")) {
      if (t === "nys-button" || t === "nys-icon") {
        this._applyFocusBehavior(e), this._passAria(e);
        return;
      }
      "tooltip" in e && (e.tooltip = this.text);
    }
  }
  // Applies focus behavior to an otherwise non focus element (i.e. nys-icon is non focusable by default)
  async _applyFocusBehavior(e) {
    if (e.style.cursor = "pointer", e.tagName.toLowerCase() === "nys-icon") {
      "updateComplete" in e && await e.updateComplete;
      const r = e.shadowRoot?.querySelector("svg");
      r && r.setAttribute("tabindex", "0");
    }
  }
  /**
   * Checks if the tooltip fits inside the viewport on the given side of the trigger.
   * Used for auto-positioning. Ignores text overflow for now.
   */
  _doesPositionFit(e) {
    const t = this._getReferenceElement(), r = this.shadowRoot?.querySelector(".nys-tooltip__content");
    if (!t || !r || e == null) return;
    const o = t.getBoundingClientRect(), n = r.getBoundingClientRect(), i = 8, l = {
      top: o.top - i,
      left: o.left - i,
      bottom: window.innerHeight - o.bottom - i,
      right: window.innerWidth - o.right - i
    };
    return {
      top: l.top >= n.height,
      bottom: l.bottom >= n.height,
      left: l.left >= n.width,
      right: l.right >= n.width
    }[e];
  }
  _userPositionTooltip() {
    const e = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    ), t = this._getReferenceElement();
    e && t && (this._positionTooltipElement(t, e, this.position), this._shiftTooltipIntoViewport(e));
  }
  // Calculates the best placement based on available space (flips placement if it doesn't fit)
  async _autoPositionTooltip() {
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    );
    if (!e || !t) return;
    const r = e.getBoundingClientRect(), o = 8, n = {
      top: r.top - o,
      left: r.left - o,
      bottom: window.innerHeight - r.bottom - o,
      right: window.innerWidth - r.right - o
    };
    let i = [
      "top",
      "bottom",
      "right",
      "left"
    ];
    if (this._userHasSetPosition && this._originalUserPosition) {
      const h = this._originalUserPosition;
      h === "left" ? i = ["left", "right", "top", "bottom"] : h === "right" ? i = ["right", "left", "top", "bottom"] : h === "top" ? i = ["top", "bottom", "right", "left"] : h === "bottom" && (i = ["bottom", "top", "right", "left"]);
    }
    for (const h of i)
      if (this._doesPositionFit(h)) {
        this._setInternalPosition(h), await this.updateComplete, this._positionTooltipElement(e, t, h), this._shiftTooltipIntoViewport(t);
        return;
      }
    let l = "top", c = n.top;
    for (const h of i)
      n[h] > c && (c = n[h], l = h);
    this._setInternalPosition(l), await this.updateComplete, this._positionTooltipElement(e, t, l), this._shiftTooltipIntoViewport(t);
  }
  _positionStartingBase() {
    const e = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    );
    e && (e.style.top = "0px", e.style.left = "0px");
  }
  _positionTooltipElement(e, t, r) {
    const o = e.getBoundingClientRect(), n = t.getBoundingClientRect(), i = 8;
    let l = 0, c = 0;
    switch (r) {
      case "top":
        l = o.top - n.height - i, c = o.left + o.width / 2 - n.width / 2;
        break;
      case "bottom":
        l = o.bottom + i, c = o.left + o.width / 2 - n.width / 2;
        break;
      case "left":
        l = o.top + o.height / 2 - n.height / 2, c = o.left - n.width - i;
        break;
      case "right":
        l = o.top + o.height / 2 - n.height / 2, c = o.right + i;
        break;
      default:
        l = o.top - n.height - i, c = o.left + o.width / 2 - n.width / 2;
        break;
    }
    t.style.top = `${l}px`, t.style.left = `${c}px`;
  }
  // In some iframes (like Storybook's) or embedded containers , parent elements may have CSS transforms applied, creating a new coordinate context.
  // This function removes such transforms to prevent them from affecting tooltip positioning calculations.
  applyInverseTransform() {
    document.querySelectorAll('div[scale="1"]').forEach((e) => {
      e.style.transform = "none";
    });
  }
  _setInternalPosition(e) {
    this._internallyUpdatingPosition = !0, this.position = e, this._internallyUpdatingPosition = !1;
  }
  // Determines if text of tooltip over-extends outside of viewport edge and adjust tooltip for horizontal overflow
  _shiftTooltipIntoViewport(e) {
    const t = this._getReferenceElement();
    if (!t) return;
    const r = t.getBoundingClientRect(), o = e.getBoundingClientRect(), n = r.left + r.width / 2, i = o.left < 0, l = o.right > window.innerWidth;
    i ? (e.style.left = "10px", e.style.transform = "none") : l && (e.style.right = "0px", e.style.left = "auto", e.style.transform = "none");
    const c = e.getBoundingClientRect(), h = (n - c.left) / c.width, u = Math.max(0, Math.min(1, h)) * 100;
    e.style.setProperty("--arrow-offset-x", `${u}%`);
  }
  // Reposition tooltip back to original set position (e.g. top, left, bottom, right) to avoid positioning issue base on last position
  _resetTooltipPositioningStyles(e) {
    e.style.left = "", e.style.right = "", e.style.top = "", e.style.transform = "", e.style.removeProperty("--arrow-offset-x");
  }
  render() {
    return d`
      <div class="nys-tooltip__main">
        ${this.text?.trim() ? d`<div
              id=${this.id}
              class="nys-tooltip__content"
              role="tooltip"
              aria-hidden=${this._active && !this._hideTimeout ? "false" : "true"}
              ?active=${this._active}
              style="visibility: ${this._active ? "visible" : "hidden"}; "
            >
              <div class="nys-tooltip__inner">${this.text}</div>
              <span class="nys-tooltip__arrow"></span>
            </div>` : ""}
      </div>
    `;
  }
};
Xt.styles = g($n);
let ae = Xt;
Oe([
  a({ type: String, reflect: !0 })
], ae.prototype, "id", 2);
Oe([
  a({ type: String })
], ae.prototype, "text", 2);
Oe([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "inverted", 2);
Oe([
  a({ type: String })
], ae.prototype, "for", 2);
Oe([
  x()
], ae.prototype, "_active", 2);
Oe([
  a({ type: String, reflect: !0 })
], ae.prototype, "position", 1);
customElements.get("nys-tooltip") || customElements.define("nys-tooltip", ae);
const Ln = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="#457AA5"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="#457AA5"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="#457AA5"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="#457AA5"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="#457AA5"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="#457AA5"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="#457AA5"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="#457AA5"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="#457AA5"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="#457AA5"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="#457AA5"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="#457AA5"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="#154973"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="#154973"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="#154973"/>
</svg>`, zn = ':host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px);--_nys-unavheader-background-color: var(--nys-color-surface, var(--nys-color-white, #ffffff));--_nys-unavheader-color: var(--nys-color-text, var(--nys-color-neutral-900, #1b1b1b));--_nys-unavheader-background-color--section-raised: var(--nys-color-surface-raised, var(--nys-color-neutral-10, #f6f6f6));font-size:var(--nys-font-size-ui-md, 16px);font-weight:var(--nys-font-weight-semibold, 600);line-height:var(--nys-font-lineheight-ui-md, 24px);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}.nys-unavheader{display:flex;flex-direction:column}.nys-unavheader>*{padding:0 var(--_nys-unavheader-padding--gutter)}.nys-unavheader__main.wrapper{background-color:var(--_nys-unavheader-background-color)}.nys-unavheader__main.content{display:flex;align-items:center;justify-content:space-between;gap:var(--nys-space-300, 24px);padding-top:var(--nys-space-100, 8px);padding-bottom:var(--nys-space-100, 8px)}.nys-unavheader__spacer{flex:1}.nys-unavheader__trustbar.wrapper{background-color:var(--nys-color-neutral-100, #d0d0ce);padding-top:var(--nys-space-100, 8px);padding-bottom:var(--nys-space-100, 8px)}.nys-unavheader__trustbar.wrapper>.content,.nys-unavheader__trustbar.wrapper>.content *{cursor:pointer}.nys-unavheader__trustbar.inline,.nys-unavheader__trustbar.inline #nys-unavheader__official{background-color:transparent;cursor:default}.nys-unavheader__trustbar>.content,.nys-unavheader__trustbar.inline{display:flex;align-items:center;gap:var(--nys-space-100, 8px);height:fit-content;font-size:var(--nys-font-size-ui-xs, 12px);font-weight:var(--nys-font-weight-regular, 400);line-height:var(--nys-font-lineheight-ui-xs, 20px);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}a#nys-unavheader__logolink{outline-offset:var(--nys-space-2px, 2px)}.nys-unavheader__logo svg{vertical-align:top;height:var(--nys-size-500, 40px);width:auto}#nys-unavheader__know,#nys-unavheader__know--inline{width:max-content;display:flex;align-items:center;cursor:pointer;gap:var(--nys-space-50, 4px);--_nys-button-height: var(--nys-font-lineheight-ui-xs, 20px);--_nys-button-border-radius--start: var(--nys-radius-md, 4px);--_nys-button-border-radius--end: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--nys-button-color: var(--nys-color-link, #004dd1);--nys-button-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-color--active: var(--nys-color-link-strongest, #002971);--nys-button-background-color--hover: var(--nys-color-transparent, #ffffff00);--nys-button-background-color--active: var(--nys-color-transparent, #ffffff00);--_nys-button-font-size: var(--nys-font-size-ui-xs, 12px);--_nys-button-font-weight: var(--nys-font-weight-regular, 400);--_nys-button-line-height: var(--nys-font-lineheight-ui-xs, 20px);--_nys-button-font-family: var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}.hide{display:none}.nys-unavheader__trustpanel.wrapper.show{background-color:var(--_nys-unavheader-background-color--section-raised);display:flex;padding-top:var(--nys-space-400, 32px);padding-bottom:var(--nys-space-400, 32px)}.nys-unavheader__messagewrapper{display:flex;gap:var(--nys-space-400, 32px)}.nys-unavheader__trustpanel.content{display:flex;flex-direction:row-reverse}.nys-unavheader__trustcontentmessage{flex:1;display:flex;flex-direction:column;gap:var(--nys-space-100, 8px);font-family:var(--nys-type-family-ui, "Proxima Nova");font-size:var(--nys-type-size-ui-sm, 14px);font-style:normal;font-weight:400;line-height:var(--nys-typography-font-lineheight-ui-sm, 24px);letter-spacing:var(--nys-typography-font-letterspacing-ui-sm, .044px)}.nys-unavheader__searchdropdown.wrapper{background-color:var(--_nys-unavheader-background-color--section-raised);padding-top:var(--nys-space-250, 20px);padding-bottom:var(--nys-space-250, 20px)}.nys-unavheader__trustpanel.wrapper>.content,.nys-unavheader__main.wrapper>.content,.nys-unavheader__trustbar>.content,.nys-unavheader__searchdropdown.wrapper>.content{max-width:1280px;margin:0 auto}.nys-unavheader__search{max-width:var(--nys-form-width-md, 200px);transition:max-width .5s ease;--_nys-textinput-gap: 0px}.nys-unavheader__search:focus{width:var(--nys-form-width-lg, 384px);max-width:var(--nys-form-width-lg, 384px)}#nys-unavheader__translate--desktop,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton{--nys-button-color: var(--nys-color-state-blue-700, #154973);--nys-button-color--hover: var(--nys-color-state-blue-700, #154973);--nys-button-color--active: var(--nys-color-state-blue-700, #154973);--_nys-button-border-width: 0px}.nys-unavheader__iconbutton{--_nys-button-width: var(--nys-size-400, 32px);--_nys-button-height: var(--nys-size-400, 32px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}.nys-unavheader__translatewrapper{position:relative}.nys-unavheader__languagelist.show{position:absolute;display:flex;flex-direction:column;min-width:fit-content;width:max-content;z-index:99999;background-color:var(--_nys-unavheader-background-color--section-raised);color:var(--nys-color-state-blue-700, #154973);margin-top:var(--nys-space-150, 12px);right:0}.nys-unavheader__languagelink{--_nys-button-padding: var(--nys-space-200, 16px) var(--nys-space-250, 20px);--nys-button-color: var(--nys-color-state-blue-700, #154973);--nys-button-color--hover: var(--nys-color-state-blue-700, #154973);--nys-button-color--active: var(--nys-color-state-blue-700, #154973);--_nys-button-border-radius--start: 0;--_nys-button-border-radius--end: 0;--_nys-button-justify-content: start}@media(min-width:0)and (max-width:479px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px)}#nys-unavheader__know{--_nys-button-padding--x: 0px;--_nys-button-padding--y: 0px;--_nys-button-height: var(--nys-space-200, 16px)}.nys-unavheader__trustbar>.content{flex-direction:column;align-items:flex-start;gap:0;line-height:16px}.nys-unavheader__trustbar.wrapper{padding-top:var(--nys-space-50, 4px);padding-bottom:var(--nys-space-50, 4px)}.nys-unavheader__trustbar.inline{display:none}.nys-unavheader__messagewrapper{flex-direction:column}#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}}@media(min-width:480px)and (max-width:767px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-sm, 20px)}.nys-unavheader__trustbar.inline{display:none}.nys-unavheader__messagewrapper{flex-direction:column}#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}}@media(min-width:768px)and (max-width:1023px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-md, 32px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}.nys-unavheader__trustpanel.wrapper.show{order:2}}@media(min-width:1024px)and (max-width:1279px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-lg, 32px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton[circle],.nys-unavheader__searchdropdown.wrapper{display:none}.nys-unavheader__languagelist.show{margin-top:var(--nys-space-100, 8px)}.nys-unavheader__trustpanel.wrapper.show{order:2}}@media(min-width:1280px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xl, 64px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton[circle],.nys-unavheader__searchdropdown.wrapper{display:none}.nys-unavheader__languagelist.show{margin-top:var(--nys-space-100, 8px)}.nys-unavheader__trustpanel.wrapper.show{order:2}}';
var An = Object.defineProperty, _e = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && An(e, t, o), o;
};
const Jt = class Jt extends b {
  constructor() {
    super(...arguments), this.trustbarVisible = !1, this.searchDropdownVisible = !1, this.languageVisible = !1, this.isSearchFocused = !1, this.hideTranslate = !1, this.hideSearch = !1, this.searchUrl = "", this.languages = [
      { code: "en", label: "English" },
      { code: "es", label: "Español" },
      { code: "zh", label: "中文" },
      { code: "zh-traditional", label: "繁體中文" },
      { code: "yi", label: "יידיש" },
      { code: "ru", label: "Русский" },
      { code: "bn", label: "বাংলা" },
      { code: "ko", label: "한국어" },
      { code: "ht", label: "Kreyòl Ayisyen" },
      { code: "it", label: "Italiano" },
      { code: "ar", label: "العربية" },
      { code: "pl", label: "Polski" },
      { code: "fr", label: "Français" },
      { code: "ur", label: "اردو" }
    ];
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getNysLogo() {
    return new DOMParser().parseFromString(Ln, "image/svg+xml").documentElement;
  }
  _toggleTrustbar(e) {
    if (this.trustbarVisible = !this.trustbarVisible, this.trustbarVisible && (this.languageVisible = !1, this.searchDropdownVisible = !1), e === "no focus") return;
    if (e === "nys-unavheader__know--inline" || !e) {
      const r = this.trustbarVisible ? "nys-unavheader__closetrustbar" : "nys-unavheader__know--inline";
      this.updateComplete.then(() => {
        this.shadowRoot?.getElementById(r)?.focus();
      });
    }
  }
  _toggleLanguageList() {
    this.languageVisible = !this.languageVisible, this.languageVisible && (this.trustbarVisible = !1, this.searchDropdownVisible = !1);
  }
  _toggleSearchDropdown() {
    this.searchDropdownVisible = !this.searchDropdownVisible, this.searchDropdownVisible && (this.trustbarVisible = !1, this.languageVisible = !1);
  }
  _handleLanguageSelect(e) {
    this.languageVisible = !1;
    const t = new CustomEvent("nys-language-select", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { language: e }
    });
    if (this.dispatchEvent(t), !t.defaultPrevented)
      if (e.url)
        window.location.href = e.url;
      else {
        const r = e.code === "en" ? "" : `${e.code}.`;
        window.location.href = `https://${r}${window.location.hostname}`;
      }
  }
  _handleSearchFocus() {
    this.isSearchFocused = !0, this.trustbarVisible = !1, this.languageVisible = !1;
  }
  _handleSearchBlur() {
    this.isSearchFocused = !1;
  }
  _handleSearchKeyup(e) {
    if (e.key === "Escape" && (this._handleSearchBlur(), e.target.blur()), e.key === "Enter") {
      const t = e.target.value?.trim();
      t !== "" && this._handleSearch(t);
    }
  }
  _handleSearchButton(e) {
    const r = (this.shadowRoot?.getElementById(
      e
    )).value?.trim();
    r !== "" && this._handleSearch(r);
  }
  _handleSearch(e) {
    const t = new CustomEvent("nys-search-submit", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { query: e }
    });
    this.dispatchEvent(t), t.defaultPrevented || (this.searchUrl ? window.location.href = `${this.searchUrl}${encodeURIComponent(e)}` : window.location.href = `https://search.its.ny.gov/search/search.html?q=${encodeURIComponent(e)}+inurl:${window.location.hostname}&site=default_collection`);
  }
  render() {
    return d`
      <header class="nys-unavheader">
        <div
          class="nys-unavheader__trustbar wrapper"
          @click="${(e) => {
      e.target.closest("nys-button") || this._toggleTrustbar("no focus");
    }}"
        >
          <div class="content">
            <label id="nys-unavheader__official"
              >An official website of New York State</label
            >
            <nys-button
              id="nys-unavheader__know"
              label="Here's how you know"
              variant="ghost"
              size="sm"
              suffixIcon="slotted"
              @nys-click="${(e) => {
      e.preventDefault(), e.stopPropagation(), this._toggleTrustbar("nys-unavheader__know");
    }}"
            >
              <nys-icon
                slot="suffix-icon"
                size="12"
                name="${this.trustbarVisible ? "chevron_up" : "chevron_down"}"
              ></nys-icon>
            </nys-button>
          </div>
        </div>
        <div
          class="nys-unavheader__trustpanel wrapper ${this.trustbarVisible ? "show" : "hide"}"
        >
          <div class="nys-unavheader__trustpanel content">
            <nys-button
              id="nys-unavheader__closetrustbar"
              class="nys-unavheader__iconbutton"
              variant="ghost"
              circle
              icon="close"
              size="sm"
              ariaLabel="Close this notice"
              aria-expanded="${this.trustbarVisible}"
              @nys-click="${() => this._toggleTrustbar("nys-unavheader__know--inline")}"
            ></nys-button>
            <div class="nys-unavheader__messagewrapper">
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_official"
              >
                <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                <label><b>Official websites use ny.gov</b></label>
                <label
                  >A <b>ny.gov</b> website belongs to an official New York State
                  government organization.</label
                >
              </div>
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_secure"
              >
                <nys-icon size="3xl" name="lock_filled"></nys-icon>
                <label><b>Secure ny.gov websites use HTTPS</b></label>
                <label
                  >A <b>lock icon</b> or <b>https://</b> means you've safely
                  connected to the ny.gov website. Share sensitive information
                  only on official, secure websites.</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="nys-unavheader__main wrapper" id="nys-universal-navigation">
          <div class="nys-unavheader__main content">
            <a
              href="https://www.ny.gov"
              id="nys-unavheader__logolink"
              aria-label="Visit the NY.gov homepage"
            >
              <div class="nys-unavheader__logo">${this._getNysLogo()}</div></a
            >
            <div class="nys-unavheader__trustbar inline">
              <label id="nys-unavheader__official"
                >An official website of New York State</label
              >
              <nys-button
                id="nys-unavheader__know--inline"
                label="Here's how you know"
                aria-controls="nys-unavheader__closetrustbar"
                aria-expanded="${this.trustbarVisible}"
                variant="ghost"
                size="sm"
                suffixIcon="slotted"
                @nys-click="${() => this._toggleTrustbar("nys-unavheader__know--inline")}"
              >
                <nys-icon
                  slot="suffix-icon"
                  size="12"
                  name="${this.trustbarVisible ? "chevron_up" : "chevron_down"}"
                ></nys-icon>
              </nys-button>
            </div>
            <div class="nys-unavheader__spacer"></div>
            ${this.hideTranslate ? null : d`<div class="nys-unavheader__translatewrapper">
                  <nys-button
                    variant="ghost"
                    circle
                    icon="slotted"
                    ariaLabel="Translate"
                    aria-expanded="${this.languageVisible}"
                    id="nys-unavheader__translate--mobile"
                    class="nys-unavheader__iconbutton"
                    @nys-click=${this._toggleLanguageList}
                  >
                    <nys-icon
                      slot="circle-icon"
                      name="language"
                      size="16"
                    ></nys-icon>
                  </nys-button>
                  ${this.isSearchFocused ? null : d`
                        <nys-button
                          variant="ghost"
                          label="Translate"
                          aria-expanded="${this.languageVisible}"
                          size="sm"
                          prefixIcon="language"
                          suffixIcon=${this.languageVisible ? "chevron_up" : "chevron_down"}
                          id="nys-unavheader__translate--desktop"
                          @nys-click="${this._toggleLanguageList}"
                        ></nys-button>
                      `}
                  <div
                    class="nys-unavheader__languagelist ${this.languageVisible ? "show" : "hide"}"
                  >
                    ${this.languages.map(
      (e) => d`<nys-button
                          variant="ghost"
                          fullWidth
                          label="${e.label}"
                          class="nys-unavheader__languagelink"
                          @click="${() => this._handleLanguageSelect(e)}"
                        ></nys-button>`
    )}
                  </div>
                </div>`}
            ${this.hideSearch ? null : d`
                  <nys-button
                    variant="ghost"
                    circle
                    icon="search"
                    ariaLabel="Search"
                    aria-expanded="${this.searchDropdownVisible}"
                    id="nys-unavheader__searchbutton"
                    class="nys-unavheader__iconbutton"
                    @nys-click=${this._toggleSearchDropdown}
                  >
                    <nys-icon
                      slot="circle-icon"
                      name="search"
                      size="16"
                    ></nys-icon>
                  </nys-button>
                  <nys-textinput
                    class="nys-unavheader__search"
                    id="nys-unavheader__searchbar"
                    placeholder="Search"
                    type="search"
                    @focus="${this._handleSearchFocus}"
                    @blur="${this._handleSearchBlur}"
                    @keyup="${this._handleSearchKeyup}"
                  >
                    <nys-button
                      id="nys-unavheader__searchbar--button"
                      slot="endButton"
                      type="submit"
                      prefixIcon="search"
                      ariaLabel="Search"
                      @nys-click=${() => {
      this._handleSearchButton("nys-unavheader__searchbar");
    }}
                    ></nys-button>
                  </nys-textinput>
                `}
          </div>
        </div>
        <div
          class="nys-unavheader__searchdropdown wrapper ${this.searchDropdownVisible ? "show" : "hide"}"
        >
          <div class="content">
            <nys-textinput
              class="nys-unavheader__search"
              id="nys-unavheader__searchbardropdown"
              placeholder="Search"
              type="search"
              @focus="${this._handleSearchFocus}"
              @blur="${this._handleSearchBlur}"
              @keyup="${this._handleSearchKeyup}"
            >
              <nys-button
                id="nys-unavheader__searchbardropdown--button"
                slot="endButton"
                type="submit"
                prefixIcon="search"
                ariaLabel="Search"
                @nys-click=${() => {
      this._handleSearchButton("nys-unavheader__searchbardropdown");
    }}
              ></nys-button
            ></nys-textinput>
          </div>
        </div>
      </header>
    `;
  }
};
Jt.styles = g(zn);
let ee = Jt;
_e([
  a({ type: Boolean })
], ee.prototype, "trustbarVisible");
_e([
  a({ type: Boolean })
], ee.prototype, "searchDropdownVisible");
_e([
  a({ type: Boolean })
], ee.prototype, "languageVisible");
_e([
  a({ type: Boolean })
], ee.prototype, "isSearchFocused");
_e([
  a({ type: Boolean })
], ee.prototype, "hideTranslate");
_e([
  a({ type: Boolean })
], ee.prototype, "hideSearch");
_e([
  a({ type: String })
], ee.prototype, "searchUrl");
_e([
  a({ type: Array })
], ee.prototype, "languages");
customElements.get("nys-unavheader") || customElements.define("nys-unavheader", ee);
const Bn = ':host{--_nys-globalheader-color: var( --nys-color-text-reverse, var(--nys-color-white, #ffffff) );--_nys-globalheader-link-color: var( --nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff) );--_nys-globalheader-background-color: var( --nys-color-theme, var(--nys-color-state-blue-700, #154973) );--_nys-globalheader-gap: var(--nys-space-300, 24px);--_nys-globalheader-padding: var(--nys-space-250, 20px);--_nys-globalheader-font-family--menu: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-globalheader-line-height: normal;--_nys-globalheader-letter-spacing: normal;--_nys-globalheader-font-weight: var(--nys-font-weight-semibold, 600);--_nys-globalheader-max-width: var(--nys-max-content-width, 1280px);--_nys-globalheader-gap--text: var(--nys-space-100, 8px);--_nys-globalheader-font-size--heading: var( --nys-font-size-agency-xl, var(--nys-font-size-2xl, 22px) );--_nys-globalheader-font-size--subheading: var( --nys-font-size-agency-md, var(--nys-font-size-md, 16px) );--_nys-globalheader-font-family--headings: var( --nys-font-family-agency, "D Sari", Arial, sans-serif );--_nys-globalheader-line-height--menu: var(--nys-font-lineheight-ui-md, 24px);--_nys-globalheader-letter-spacing--menu: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-globalheader-text-decoration-thickness--menu: var(--nys-size-2px, 2px);--_nys-globalheader-link-padding: var(--nys-space-300, 24px) var(--nys-space-200, 16px);--_nys-globalheader-font-size--menu-btn: var(--nys-type-size-ui-xs, 12px);--_nys-globalheader-line-height--menu-btn: var( --nys-font-lineheight-ui-xs, 20px );--_nys-globalheader-letter-spacing--menu-btn: var( --nys-font-letterspacing-ui-xs, .057px );--_nys-globalheader-border-color--menu: var(--nys-color-theme-mid, #457aa5);--_nys-globalheader-background-color--menu--hover: var( --nys-color-theme-strong, #0e324f );--_nys-globalheader-background-color--menu--active: var( --nys-color-theme-stronger, #081b2b )}ul{list-style-type:none;padding:0;margin:0}li{display:block;margin:0;padding:0;box-sizing:border-box}a{color:var(--_nys-globalheader-color);text-decoration:none;font-family:var(--_nys-globalheader-font-family--menu);font-style:normal;font-weight:400;line-height:var(--_nys-globalheader-line-height--menu);letter-spacing:var(--_nys-globalheader-letter-spacing--menu)}::slotted([slot=user-actions]){display:flex;align-items:center;margin-inline-start:auto;--_nys-button-outline-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) )}.nys-globalheader{display:flex;justify-content:center;padding:var(--_nys-globalheader-padding);background-color:var(--_nys-globalheader-background-color);color:var(--_nys-globalheader-color);width:100%;min-height:76px;box-sizing:border-box}a#nys-globalheader__logolink{outline-offset:var(--nys-space-2px, 2px);outline-color:var(--nys-color-ink-reverse, #ffffff);margin:auto 0}.nys-globalheader__logo svg{vertical-align:top;width:auto}.nys-globalheader__main-container{display:flex;gap:var(--_nys-globalheader-gap);max-width:var(--_nys-globalheader-max-width);width:100%}.nys-globalheader__name-container{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--_nys-globalheader-gap--text)}.nys-globalheader__name{margin:0;color:var(--_nys-globalheader-color);font-family:var(--_nys-globalheader-font-family--headings);font-size:var(--_nys-globalheader-font-size--heading);font-style:normal;font-weight:var(--_nys-globalheader-font-weight);line-height:var(--_nys-globalheader-line-height);letter-spacing:var(--_nys-globalheader-letter-spacing);overflow-wrap:break-word}.nys-globalheader__agencyName{font-size:var(--_nys-globalheader-font-size--subheading)}.nys-globalheader__agencyName.main{font-size:var(--_nys-globalheader-font-size--heading)}.nys-globalheader__content{display:none;font-family:var(--_nys-globalheader-font-family--menu)}.nys-globalheader__content ul{display:flex;flex-flow:column wrap;align-items:center}.nys-globalheader__content ul a:hover{text-decoration:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font}.nys-globalheader__content ul a:active{text-decoration-thickness:var(--_nys-globalheader-text-decoration-thickness--menu)}.nys-globalheader__content li.active a,.nys-globalheader__content-mobile li.active a{font-weight:700}.nys-globalheader__content li.active{border-bottom:8px solid var(--nys-color-theme-weak, #cddde9)}.nys-globalheader__content li.active a{margin-bottom:calc(-1 * var(--nys-space-100, 8px))}.nys-globalheader__content-mobile li.active a{border-left:8px solid var(--nys-color-theme-weak, #cddde9);border-bottom:1px solid var(--_nys-globalheader-border-color--menu)}.nys-globalheader__content ul li.active a:hover{text-decoration:none}.nys-globalheader__content-mobile{position:absolute;z-index:10;display:flex;flex-direction:column;justify-content:center;background-color:var(--_nys-globalheader-background-color);width:fit-content}.nys-globalheader__content-mobile.close{display:none}.nys-globalheader__content-mobile ul{display:flex;flex-direction:column}.nys-globalheader__content-mobile ul li:first-child a{border-top:1px solid var(--_nys-globalheader-color)}.nys-globalheader__content-mobile ul li a{display:flex;padding:24px;align-items:center;gap:8px;align-self:stretch;border-bottom:1px solid var(--_nys-globalheader-border-color--menu);background-color:var(--_nys-globalheader-background-color)}.nys-globalheader__content-mobile ul li a:hover{background-color:var(--_nys-globalheader-background-color--menu--hover)}.nys-globalheader__content-mobile ul li a:active{background-color:var(--_nys-globalheader-background-color--menu--active)}.nys-globalheader__name-container-link{display:flex;flex-direction:column;justify-content:center}.nys-globalheader__button-container{display:flex;justify-content:center;align-items:center}.nys-globalheader__mobile-menu-button{flex-direction:column;gap:3px;width:50px;height:50px;background-color:var(--_nys-globalheader-background-color);border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0;color:var(--_nys-globalheader-color)}.nys-globalheader__mobile-menu-button-text{font-size:var(--_nys-globalheader-font-size--menu-btn);line-height:var(--_nys-globalheader-line-height--menu-btn);letter-spacing:var(--_nys-globalheader-letter-spacing--menu-btn)}@media(min-width:1024px){.nys-globalheader__content{display:flex}.nys-globalheader__content ul{flex-direction:row}.nys-globalheader__content-mobile,.nys-globalheader__button-container{display:none}li{display:flex;align-items:center;padding:var(--_nys-globalheader-link-padding)}:host{--_nys-globalheader-gap: var(--nys-space-500, 40px);--_nys-globalheader-padding: var(--nys-space-50, 4px) var(--nys-size-400, 32px) 0}}@media(min-width:1280px){:host{--_nys-globalheader-padding: var(--nys-space-50, 4px) var(--nys-space-800, 64px) 0}}';
var Mn = Object.defineProperty, Ke = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && Mn(e, t, o), o;
};
const eo = class eo extends b {
  constructor() {
    super(...arguments), this.appName = "", this.agencyName = "", this.homepageLink = "", this.isMobileMenuOpen = !1, this.hasLinkContent = !1;
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleListSlotChange()), this._handleListSlotChange(), this._listenLinkClicks();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _highlightActiveLink(e) {
    const t = Array.from(e.querySelectorAll("a")), r = window.location.pathname.replace(/\/+$/, "") || "/";
    let o = {
      li: null,
      length: 0
    };
    t.forEach((n) => {
      const i = this._normalizePath(n.getAttribute("href"));
      i && (i === "/" && r === "/" ? o = { li: n.closest("li"), length: 1 } : r.startsWith(i) && i.length > o.length && (o = {
        li: n.closest("li"),
        length: i.length
      }));
    }), t.forEach((n) => n.closest("li")?.classList.remove("active")), o.li?.classList.add("active");
  }
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  async _handleListSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="user-actions"])'
    );
    if (!e) return;
    const t = e.assignedNodes({ flatten: !0 }).filter((n) => n.nodeType === Node.ELEMENT_NODE);
    this.hasLinkContent = t.length > 0, await Promise.resolve();
    const r = this.shadowRoot?.querySelector(
      ".nys-globalheader__content"
    ), o = this.shadowRoot?.querySelector(
      ".nys-globalheader__content-mobile"
    );
    !r || !o || (r.innerHTML = "", o.innerHTML = "", t.forEach((n) => {
      if (n instanceof HTMLElement) {
        const i = n.cloneNode(!0), l = n.cloneNode(!0);
        r.appendChild(i), o.appendChild(l);
      }
    }), this._highlightActiveLink(r), this._highlightActiveLink(o));
  }
  // Normalize paths so that links like "name", "/name/", and "/" match window.location.pathname.
  // This ensures consistent active-link behavior regardless of how hrefs are written.
  _normalizePath(e) {
    if (!e) return null;
    try {
      return new URL(e, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    } catch {
      return null;
    }
  }
  _toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  // Listens for click events on links to mark them active
  _listenLinkClicks() {
    this.shadowRoot?.querySelectorAll(
      ".nys-globalheader__content, .nys-globalheader__content-mobile"
    )?.forEach((t) => {
      t?.addEventListener("click", (r) => {
        const n = r.target.closest("a");
        if (!n) return;
        t.querySelectorAll("li.active").forEach((l) => l.classList.remove("active"));
        const i = n.closest("li");
        i && i.classList.add("active");
      });
    });
  }
  render() {
    return d`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this.hasLinkContent ? d` <div class="nys-globalheader__button-container">
                <button
                  class="nys-globalheader__mobile-menu-button"
                  @click="${this._toggleMobileMenu}"
                >
                  <nys-icon
                    name="${this.isMobileMenuOpen ? "close" : "menu"}"
                    size="32"
                    label="${this.isMobileMenuOpen ? "close" : "menu"} icon"
                  ></nys-icon>
                  <span class="nys-globalheader__mobile-menu-button-text"
                    >${this.isMobileMenuOpen ? "CLOSE" : "MENU"}</span
                  >
                </button>
              </div>` : ""}
          ${this.homepageLink?.trim() ? d`<a
                class="nys-globalheader__name-container-link"
                href=${this.homepageLink?.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${this.appName?.trim().length > 0 ? d`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> ` : ""}
                  ${this.agencyName?.trim().length > 0 ? d`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${this.appName?.trim().length > 0 ? "" : "main"}"
                      >
                        ${this.agencyName}
                      </div> ` : ""}
                </div>
              </a>` : d`
                <div class="nys-globalheader__name-container">
                  ${this.appName?.trim().length > 0 ? d`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> ` : ""}
                  ${this.agencyName?.trim().length > 0 ? d`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${this.appName?.trim().length > 0 ? "" : "main"}"
                      >
                        ${this.agencyName}
                      </div> ` : ""}
                </div>
              `}
          <div class="nys-globalheader__content"></div>
          <slot
            style="display: none;"
            @slotchange="${this._handleListSlotChange}"
          ></slot>
          <slot name="user-actions"></slot>
        </div>
      </header>
      <div
        class="nys-globalheader__content-mobile ${this.isMobileMenuOpen ? "" : "close"}"
      ></div>
    `;
  }
};
eo.styles = g(Bn);
let ve = eo;
Ke([
  a({ type: String })
], ve.prototype, "appName");
Ke([
  a({ type: String })
], ve.prototype, "agencyName");
Ke([
  a({ type: String })
], ve.prototype, "homepageLink");
Ke([
  x()
], ve.prototype, "isMobileMenuOpen");
Ke([
  x()
], ve.prototype, "hasLinkContent");
customElements.get("nys-globalheader") || customElements.define("nys-globalheader", ve);
const In = ':host{--_nys-globalfooter-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-globalfooter-background-color: var( --nys-color-theme-weaker, var(--nys-color-state-blue-50, #eff6fb) );--_nys-globalfooter-gap: var(--nys-space-300, 24px);--_nys-globalfooter-padding--y: var(--nys-space-400, 32px);--_nys-globalfooter-padding--gutter: var(--nys-gutter-sm, 20px);--_nys-globalfooter-font-size--agency: var( --nys-font-size-agency-xl, var(--nys-font-size-2xl, 22px) );--_nys-globalfooter-font-size--link: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-globalfooter-line-height--agency: normal;--_nys-globalfooter-font-weight--regular: var( --nys-font-weight-regular, 400 );--_nys-globalfooter-font-weight--semibold: var( --nys-font-weight-semibold, 600 );--_nys-globalfooter-max-width: var(--nys-max-content-width, 1280px);--_nys-globalfooter-font-family--agency: var( --nys-font-family-agency, "D Sari", Arial, sans-serif );--_nys-globalfooter-column-gap: var(--nys-space-400, 32px);--_nys-globalfooter-row-gap: var(--nys-space-400, 32px);--_nys-globalfooter-line-height--link: var( --nys-font-lineheight-ui-md, 24px );--_nys-globalfooter-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-globalfooter-font-family--link: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-globalfooter-text-decoration-thickness: var(--nys-size-2px, 2px);--_nys-globalfooter-background--divider: var(--nys-color-theme, #154973);--_nys-globalfooter-margin--divider: var(--nys-space-50, 4px)}.nys-globalfooter{display:flex;padding:var(--_nys-globalfooter-padding--y) var(--_nys-globalfooter-padding--gutter);justify-content:center;background-color:var(--_nys-globalfooter-background-color);color:var(--_nys-globalfooter-color);width:100%;box-sizing:border-box}.nys-globalfooter__main-container{display:flex;flex-direction:column;gap:var(--_nys-globalfooter-gap);width:100%;max-width:var(--_nys-globalfooter-max-width)}.nys-globalfooter__name{text-align:left;margin:0;color:var(--_nys-globalfooter-color);font-family:var(--_nys-globalfooter-font-family--agency);font-size:var(--_nys-globalfooter-font-size--agency);font-style:normal;font-weight:var(--_nys-globalfooter-font-weight--semibold);line-height:var(--_nys-globalfooter-line-height--agency);letter-spacing:normal}ul{list-style-type:none;padding:0;margin:0}li{margin:0;padding:0}a,span{color:var(--_nys-globalfooter-color);text-decoration:none;font-family:var(--_nys-globalfooter-font-family--link);font-size:var(--_nys-globalfooter-font-size--link);font-style:normal;font-weight:var(--_nys-globalfooter-font-weight--semibold);line-height:var(--_nys-globalfooter-line-height--link);letter-spacing:var(--_nys-globalfooter-letter-spacing)}ul li>span+ul li a{font-weight:var(--_nys-globalfooter-font-weight--regular)}a:hover{text-decoration:underline}a:active{text-decoration-thickness:var(--_nys-globalfooter-text-decoration-thickness)}.nys-globalfooter__content{width:100%}.nys-globalfooter__content ul{display:flex;flex-flow:column wrap;gap:var(--_nys-globalfooter-row-gap) var(--_nys-globalfooter-column-gap)}.nys-globalfooter__content ul li:has(span~ul){flex:1;display:flex;flex-direction:column}.nys-globalfooter__content ul:has(li>span~ul){--_nys-globalfooter-column-gap: var(--nys-space-500, 40px)}.nys-globalfooter__content ul li>span~ul{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px)}.divider{margin-top:var(--_nys-globalfooter-margin--divider);margin-bottom:var(--nys-space-300, 24px)}@media(min-width:768px){.nys-globalfooter__content ul{flex-direction:row}.nys-globalfooter__content ul li:has(span~ul){flex:1 0 205px}:host{--_nys-globalfooter-padding--gutter: var(--nys-gutter-lg, 32px);--_nys-globalfooter-row-gap: var(--nys-space-600, 48px)}}@media(min-width:1280px){:host{--_nys-globalfooter-padding--gutter: var(--nys-gutter-xl, 64px)}}';
var qn = Object.defineProperty, Rt = (s, e, t, r) => {
  for (var o = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (o = i(e, t, o) || o);
  return o && qn(e, t, o), o;
};
const to = class to extends b {
  constructor() {
    super(...arguments), this.agencyName = "", this.homepageLink = "", this.slotHasContent = !0;
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleSlotChange()), this._handleSlotChange();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  async _handleSlotChange() {
    const e = this.shadowRoot?.querySelector("slot");
    if (!e) return;
    const t = e?.assignedNodes({ flatten: !0 }).filter((n) => n.nodeType === Node.ELEMENT_NODE);
    await Promise.resolve(), this.slotHasContent = t.length > 0;
    const r = this.shadowRoot?.querySelector(
      ".nys-globalfooter__content"
    ), o = t?.some(
      (n) => n.tagName === "H4"
    );
    r && (r.classList.toggle("columns", o), r.classList.toggle("small", !o), r.innerHTML = "", t.forEach((i) => {
      if (i.nodeType === Node.ELEMENT_NODE) {
        const l = i.cloneNode(!0);
        ["script", "iframe", "object", "embed", "img"].forEach((h) => {
          l.querySelectorAll(h).forEach((u) => u.remove());
        }), r.appendChild(l), i.remove();
      }
    }), r.querySelectorAll("span").forEach((i) => {
      const l = document.createElement("nys-divider");
      l.classList.add("divider"), i.insertAdjacentElement("afterend", l);
    }));
  }
  render() {
    return d`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${this.homepageLink?.trim() ? d`<a href=${this.homepageLink?.trim()}>
                <h2 class="nys-globalfooter__name">${this.agencyName}</h2>
              </a>` : d`<h2 class="nys-globalfooter__name">${this.agencyName}</h2>`}
          ${this.slotHasContent ? d`<div class="nys-globalfooter__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>` : ""}
        </div>
      </footer>
    `;
  }
};
to.styles = g(In);
let Pe = to;
Rt([
  a({ type: String })
], Pe.prototype, "agencyName");
Rt([
  a({ type: String })
], Pe.prototype, "homepageLink");
Rt([
  x()
], Pe.prototype, "slotHasContent");
customElements.get("nys-globalfooter") || customElements.define("nys-globalfooter", Pe);
const Rn = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="white"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="white"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="white"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="white"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="white"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="white"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="white"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="white"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="white"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="white"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="white"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="white"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="white"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="white"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="white"/>
</svg>`, Pn = ':host{--_nys-unavfooter-color: var( --nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff) );--_nys-unavfooter-background-color: var( --nys-color-surface-reverse, #1b1b1b );--_nys-unavfooter-gap: var(--nys-space-200, 16px);--_nys-unavfooter-padding: var(--nys-space-250, 20px);--_nys-unavfooter-padding--gutter: var(--nys-gutter-sm, 20px);--_nys-unavfooter-font-size: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-unavfooter-font-weight: var(--nys-font-weight-semibold, 600);--_nys-unavfooter-max-width: var(--nys-max-content-width, 1280px);--_nys-unavfooter-row-gap: var(--nys-space-250, 20px);--_nys-unavfooter-column-gap: var(--nys-space-600, 48px);--_nys-unavfooter-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-unavfooter-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-unavfooter-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-unavfooter-text-decoration-thickness: var(--nys-size-2px, 2px)}ul{list-style-type:none;padding:0;margin:0}li{margin:0;padding:0}a{color:var(--_nys-unavfooter-color);text-decoration:none;font-family:var(--_nys-unavfooter-font-family);font-size:var(--_nys-unavfooter-font-size);font-style:normal;font-weight:var(--_nys-unavfooter-font-weight);line-height:var(--_nys-unavfooter-line-height);letter-spacing:var(--_nys-unavfooter-letter-spacing);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font}a:hover{text-decoration-line:underline}a:active{text-decoration-thickness:var(--_nys-unavfooter-text-decoration-thickness)}.nys-unavfooter{display:flex;flex-direction:column;gap:var(--_nys-unavfooter-gap);align-items:flex-start;background-color:var(--_nys-unavfooter-background-color);width:100%;box-sizing:border-box}.nys-unavfooter__main-container{display:flex;justify-content:center;width:100%}.nys-unavfooter__container_menu{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:var(--_nys-unavfooter-max-width);padding:var(--_nys-unavfooter-padding) var(--_nys-unavfooter-padding--gutter);gap:var(--_nys-unavfooter-gap);box-sizing:border-box}.nys-unavfooter__logo a{display:flex;align-items:center;line-height:0}.nys-unavfooter__content{display:flex;align-items:center}.nys-unavfooter__content ul{display:flex;justify-content:center;gap:var(--_nys-unavfooter-row-gap) var(--_nys-unavfooter-column-gap);flex-wrap:wrap}@media(min-width:768px){.nys-unavfooter__container_menu{flex-direction:row}.nys-unavfooter__content ul{justify-content:flex-start}:host{--_nys-unavfooter-padding--gutter: var(--nys-gutter-lg, 32px);--_nys-unavfooter-column-gap: var(--nys-space-600, 48px);--_nys-unavfooter-gap-spacing: var(--nys-space-800, 64px)}}@media(min-width:1280px){:host{--_nys-unavfooter-padding--gutter: var(--nys-gutter-xl, 64px)}}', oo = class oo extends b {
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getNysLogo() {
    return new DOMParser().parseFromString(Rn, "image/svg+xml").documentElement;
  }
  render() {
    return d`
      <footer class="nys-unavfooter">
        <div class="nys-unavfooter__main-container">
          <div class="nys-unavfooter__container_menu">
            <div class="nys-unavfooter__logo">
              <a
                href="https://www.ny.gov"
                target="_blank"
                id="nys-unavheader__logolink"
                aria-label="logo of New York State"
                >${this._getNysLogo()}</a
              >
            </div>
            <div class="nys-unavfooter__content">
              <ul>
                <li><a href="https://www.ny.gov/agencies">Agencies</a></li>
                <li>
                  <a href="https://www.ny.gov/mobileapps">App Directory</a>
                </li>
                <li><a href="https://www.ny.gov/counties">Counties</a></li>
                <li><a href="https://www.ny.gov/events">Events</a></li>
                <li><a href="https://www.ny.gov/programs">Programs</a></li>
                <li><a href="https://www.ny.gov/services">Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
oo.styles = g(Pn);
let St = oo;
customElements.get("nys-unavfooter") || customElements.define("nys-unavfooter", St);
export {
  Ie as NysAccordion,
  ue as NysAccordionItem,
  R as NysAlert,
  W as NysAvatar,
  ke as NysBacktotop,
  vr as NysBadge,
  m as NysButton,
  C as NysCheckbox,
  L as NysCheckboxgroup,
  ms as NysDatepicker,
  nt as NysDivider,
  qe as NysDropdownMenu,
  $e as NysDropdownMenuItem,
  Re as NysErrorMessage,
  z as NysFileinput,
  Pe as NysGlobalFooter,
  ve as NysGlobalHeader,
  Z as NysIcon,
  ie as NysLabel,
  J as NysModal,
  pe as NysOption,
  ye as NysPagination,
  on as NysRadiobutton,
  I as NysRadiogroup,
  q as NysSelect,
  Ne as NysSkipnav,
  oe as NysStep,
  fe as NysStepper,
  G as NysTable,
  $ as NysTextarea,
  _ as NysTextinput,
  H as NysToggle,
  ae as NysTooltip,
  St as NysUnavFooter,
  ee as NysUnavHeader,
  Rs as registerIconLibrary,
  Vn as unregisterIconLibrary
};
//# sourceMappingURL=nysds.es.js.map
