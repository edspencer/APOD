Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'apod',
    models: ['Picture'],
    stores: ['Pictures'],
    views: ['Picture', 'Title'],
    
    launch: function() {
        var carousel = Ext.create('Ext.Carousel', {
            store: 'Pictures',
            direction: 'horizontal',
            fullscreen: true,
            items: [],
            
            listeners: {
                activeitemchange: function(carousel, item) {
                    info.setHtml(item.getPicture().get('title'));
                }
            }
        });
        
        var store = Ext.getStore('Pictures');
        
        store.load(function(pictures) {
            var items = [];
            
            Ext.each(pictures, function(picture) {
                if (!picture.get('image')) {
                    return;
                }
                
                items.push({
                    xtype: 'apodimage',
                    picture: picture
                });
            });
            
            carousel.setItems(items);
            carousel.setActiveItem(0);
        });
        
        var info = Ext.create('apod.view.Title').show();
        
        var visible = false;
        
        carousel.element.on('tap', function() {
            console.log('feh');
            if (visible) {
                info.element.removeCls('apod-title-visible');
                visible = false;
            } else {
                info.element.addCls('apod-title-visible');
                visible = true;
            }
        });
    }
});