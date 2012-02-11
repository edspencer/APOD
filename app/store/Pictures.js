Ext.define('apod.store.Pictures', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'apod.model.Picture',
        
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.acme.com/jef/apod/rss.xml&num=20',
            
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});