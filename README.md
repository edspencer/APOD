# Sencha Touch 2 APOD App

Very simple Sencha Touch 2 app - just grabs the latest images from NASA's Astronomy Picture Of the Day (http://apod.nasa.gov/apod/astropix.html) and displays them in a Carousel. app.js file drives most of the application, but there's also:

* A Store - app/store/Pictures.js - that fetches the data from the APOD RSS feed
* A Model - app/model/Picture.js - that represents a single image from the feed
* A View - app/view/Picture.js - that displays each image