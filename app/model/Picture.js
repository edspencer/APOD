/**
 * Simple Model that represents an image from NASA's Astronomy Picture Of the Day. The only remarkable
 * thing about this model is the 'image' field, which uses a regular expression to pull its value out 
 * of the main content of the RSS feed. Ideally the image url would have been presented in its own field
 * in the RSS response, but as it wasn't we had to use this approach to parse it out
 */
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
                        src     = match ? match[1] : '';

                    if (src != "" && !src.match(/\.gif$/)) {
                        src = "http://src.sencha.io/screen.width/" + src;
                    }
                    
                    return src;
                }
            }
        ]
    }
});