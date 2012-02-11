Ext.define('apod.view.Picture', {
    extend: 'Ext.Img',
    xtype: 'apodimage',
    
    config: {
        /**
         * @cfg {apod.model.Picture} picture The Picture to show
         */
        picture: null,
        
        /**
         * @private
         * @cfg {Boolean} infoVisible True if Picture information is currently visible
         */
        infoVisible: false
    },
    
    updatePicture: function(picture) {
        this.setSrc(picture.get('image'));
    }
});