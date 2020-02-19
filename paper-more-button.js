import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';

class PaperMoreButton extends PolymerElement {
    static get template() {
        return html`
<paper-button hidden$=[[!_showMore(hasMore,loading)]] on-tap="_tapMore"><slot></slot></paper-button>
</paper-spinner-lite>`;
    }

    static get is() {
        return 'paper-more-button';
    }

    static get properties() {
        return {
			/**
			 * True if the lister has more items than currently shown
			 */
			hasMore: {
				type: Boolean,
				value: false
			},

			/**
			 * True if the lister is currently loading items
			 */
			loading: {
				type: Boolean,
				value: false
			}
		};
    }

	// Private methods
	_tapMore() {
		this.dispatchEvent(new CustomEvent('tap-more', {detail: {kicked: true}}));
	}
	_showMore(hasMore, loading) {
		return hasMore && !loading;
	}
}

customElements.define(PaperMoreButton.is, PaperMoreButton);
