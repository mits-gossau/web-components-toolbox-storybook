// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'
// fetch modules / Shadow:Line 604
import(
  '../../molecules/eventCard/EventCard.js'
  // @ts-ignore
).then((module) => customElements.define('m-steps-event-card', module.default))

/**
 * EventList
 * An example at: src/es/components/pages/Spielplan.html
 *
 * @export
 * @class EventList
 * @type {CustomElementConstructor}
 */

export default class EventList extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
    this.events = []
    /**
     * @typedef {Object} Translations
     * @property {string} buttonTickets - The translation for the "Tickets" button.
     * @property {string} linkDetails - The translation for the "Mehr Details" link.
     * @property {string} soldOut - The translation for the "ausverkauft" message indicating sold-out status.
     * @property {string} timeSuffix - The translation for the suffix added to time values, e.g., "Uhr".
     */
    /**
     * @type {Translations}
     */
    this.translations = {
      buttonTickets: '',
      linkDetails: '',
      soldOut: '',
      timeSuffix: '',
    }


    this.answerEventNameListener = event => {
      //this.renderHTML('loading')
      /*event.detail.fetch.then(recipeData => {
        this.renderHTML(recipeData.items)
      })*/
      console.log('helloooo', event, event.detail)
    }
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    const dataEventsUrl = this.getAttribute('data-events')
    const dataTranslationsUrl = this.getAttribute('data-translations')

    // @ts-ignore
    fetch(dataEventsUrl)
      .then((response) => response.json())
      .then((data) => {
        this.events = data
      })
      .catch((error) => {
        console.error(error)
      })

    // @ts-ignore
    fetch(dataTranslationsUrl)
      .then((response) => response.json())
      .then((data) => {
        this.translations = data
        this.renderHTML()
      })
      .catch((error) => {
        console.error(error)
      })

    document.body.addEventListener(this.getAttribute('answer-event-name') || 'answer-event-name', this.answerEventNameListener)
  }

  disconnectedCallback () {
    document.body.removeEventListener(this.getAttribute('answer-event-name') || 'answer-event-name', this.answerEventNameListener)
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
      :host {
        --button-secondary-width: 100%;
        --button-secondary-font-size: 1rem;
      }
      :host .event-list {
        border-bottom: 1px solid var(--steps-color-black);
        margin: 1.25rem 0;
      }
    `
  }

  renderHTML () {
    // array reduce acc = ''
    const eventHtml = this.events.map(item => /* html */`
      <m-steps-event-card 
        choreographer="${item.event.choreographer}"
        compagnieName="${item.event.compagnieName}"
        eventIcons='${JSON.stringify(item.event.icons)}'
        location="${item.location.name}"
        locationIcons='${JSON.stringify(item.location.icons)}'
        locationSubline="${item.location.subline}"
        productionTitle="${item.event.productionTitle}"
        soldOut="${item.event.soldOut}"
        textButtonTickets="${this.translations.buttonTickets}"
        textLinkDetails="${this.translations.linkDetails}"
        textSoldOut="${this.translations.soldOut}"
        textTimeSuffix="${this.translations.timeSuffix}"
        dateTime="${item.event.dateTime}"
      ></m-steps-event-card>`).join('');

    this.html = /* html */ `
      <div class="event-list">
        ${eventHtml}
      </div>
    `
  }
}
