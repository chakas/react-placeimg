# react-placeimg
React component for adding place holder images into your app

**Installation:**
`npm i --save react-placeimg`

**Usage:**
`import PlaceImg from "react-placeimg";`
```
<PlaceImg 
    width="800"
    height="600" 
    category=""
    filter="grayscale"
    onLoad={()=>console.log("Image loaded successfully")}
/>
```

Params
===
1. width  : Integer in CSS pixels (e.g., 300)
2. height : Integer in CSS pixels
3. category : Any one of this `animals,arch,nature,people,tech`
4. filter : Any one of this `grayscale,sepia`

Events
===
`onLoad`: Event listener fired after image loaded