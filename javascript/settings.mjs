const SETTINGS = {
    //CONTAINER_SIZE is the size of the container, if you want a specific one in mind. If not, leave as '' for it to fill the available area
    CONTAINER_SIZE: {
        HEIGHT: '',
        WIDTH: '',
    },
    //ITEM_WIDTH is the size in pixels of individual recommendation item. If no value is given, defaults to 150px.
    ITEM_WIDTH: 280, 
    //ORIENTATION is where captions will appear relative to the thumbnail. Options: 'below', 'aside'
    ORIENTATION: 'aside',
    //CONTENT_TYPE is what kind of recommendations are desired - only internal, only external, or a mix. Options: 'organic', 'sponsored', 'mixed'
    CONTENT_TYPE: 'sponsored', 
    //HEADER_TEXT: this is what will display in the header line above the recommendations
    HEADER_TEXT: 'AD CONTENT',
    //SHOW_COMPNAY_LOGO: enter 1 to display, 0 to hide
    SHOW_COMPANY_LOGO: 1,
};

// ENDPOINT is the URL supplied for getting results from Taboola 
const ENDPOINT = `http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040a
b1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=
http://www.site.com/videos/214321562187.html`;

export { ENDPOINT, SETTINGS };