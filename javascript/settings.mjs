const SETTINGS = {
    //ITEM_WIDTH is the size in pixels of individual recommendation item. If no value is given, defaults to 150px.
    ITEM_WIDTH: 400, 
    THUMBNAIL_SIZE: { 
        // set the height and width for the thumbnails. Smaller images will expand to fill the space. Larger images will be resized down to the smallest value and the excess cropped to fix. If no values are given, defaults to the available width defined by ITEM_WIDTH. 
        width: '',
        height: '',
    },
    //ORIENTATION is where captions will appear relative to the thumbnail. Options: 'below', 'aside', or leave blank '' for automatic determination based on available space
    ORIENTATION: 'below',
    //CONTENT_TYPE is what kind of recommendations are desired - only internal, only external, or a mix. Options: 'organic', 'sponsored', 'mixed'
    CONTENT_TYPE: 'mixed', 
};

// ENDPOINT is the URL supplied for getting results from Taboola 
const ENDPOINT = `http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040a
b1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=
http://www.site.com/videos/214321562187.html`;

export { ENDPOINT, SETTINGS };