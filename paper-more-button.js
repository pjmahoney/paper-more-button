Polymer({
		is: 'paper-more-button',

    properties: {
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
		},
		
		// Private methods
		_tapMore: function() {
        this.fire('tap-more');
		},
		_showMore: function(hasMore, loading) {
        return hasMore && !loading;
		}
});
