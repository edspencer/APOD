Ext.define('apod.model.Picture', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            'id', 'title', 'link', 'author', 'content',
            {
                name: 'image',
                type: 'string',
                convert: function(value, record) {
                    var content = record.get('content'),
                        regex   = /img src=\"([a-zA-Z0-9\_\.\/\:]*)\"/,
                        match   = content.match(regex),
                        src     = match[1];

                    if (src != "" && !src.match(/\.gif$/)) {
                        src = "http://src.sencha.io/screen.width/" + src;
                    }
                    
                    return src;
                }
            }
        ]
    }
});