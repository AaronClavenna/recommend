# recommend
Recommendation Widget: embeddable, client-side widget for fetching organic/sponsored article recommendations. JS (Vanilla), responsive

This widget allows you to customize its behavior using a set of configuration options, found in the file 'settings.mjs'. Adjust these settings (described later in this file - see 'SETTINGS OVERVIEW') to tailor the appearance and functionality of the widget. 

## HOW TO USE: 

Either download this file as a ZIP and unzip it into your directory, or clone the git repository this was found in. 

Then, insert this code snippet into the body of your HTML file, in the location where you would like this widget to appear: 

##### FOR DOWNLOADED FILES:
```
<div id="recommendations-content-container"></div>
<script type="module" src="recommendationsScript.js" defer></script>
```
**!NOTE!**: the src may need to be adjusted depending on into which directory you've placed this program's files. 

##### FROM GITHUB (limited access):
```
<div id="recommendations-content-container"></div>
<script type="module" src="https://aaronclavenna.github.io/recommend/recommendationsScript.js" defer></script>
```


## SETTINGS OVERVIEW: 

### 'CONTAINER_SIZE':
Description: Adjust the maximum size of the widget. Leave as '' to fill the available space provided, or else enter values for a specific HEIGHT, WIDTH, or both.  

Options: '', 'inherit', '(a value)px', '(a value)%', etc.  

Example: 
```
CONTAINER_SIZE: {
    HEIGHT: '300px',
    WIDTH: '100%',
}
```

### 'ITEM_WIDTH':
Description: Width of each individual recommendation link, measured in pixels. Do not affix 'px' to this - that will happen automatically. If you do not know which size you would like to use, please leave a ''. 

Default: 150px 

Example: `ITEM_WIDTH: 350`

### 'ORIENTATION':
Description: Specifies the position of the text caption/article title relative to its thumbnail.  

Options: 
- 'below': A large rectangular thumbnail, below which captions will appear.
- 'aside': A small square thumbnail, to which captions will appear on the right side.  

Example: `ORIENTATION: 'aside'`

### 'CONTENT_TYPE': 
**!NOTE!** - currently non functional. All recommendations will be external.  

Description: Determines the types of recommendations to display - internal, external, or a mixture.  

Options:  
- 'organic': Only display internal link recommendations 
- 'sponsored': Only display external (sponsored) recommendations
- 'mixed': Display both internal and external recommendations  

Example: `CONTENT_TYPE: 'sponsored'`

### 'HEADER_TEXT':
Description: Text to display above the recommendations.  

Options: Any normal text string - although brevity is preferred.  

Example: `HEADER_TEXT: 'MORE FOR YOU'`

### 'SHOW_COMPANY_LOGO':
Description: Control the visibilty of the Company logo in the header bar.  

**!NOTE!**: currently just text. An image could be added, but I don't have one.  

Options:  

- '1': Displays the Company logo
- '0' (or ''): Hide the Company logo  

Example: `SHOW_COMPANY_LOGO: 1`

### 'ENDPOINT':
Description: This is the URL that this widget will call to retrieve recommendations. This URL should be supplied to you, and does not require further adjustment. 

---

Adjust these settings to customize the widget's behavior to suit your needs. 

---

Logdate 18.02.24 - Unit tests not operational  
