

<p align="center">
  <a href="http://kylebutts.github.io/50graphs"><img src="/docs/logo.png"></a>
</p>
# 50graphs.js
*50graphs.js* is a charting library that allows 50 instances


## Reference
**[Documentation](kylebutts.github.io/50graphs/docs)

## Installing
```html
<script src="https://d3js.org/d3.v4.js"></script>
<script src="50graphs.js"></script>
```

## Basic Usage
```JavaScript
var data = [{
  "label": "AK",
  "data": /* Valid JSON data will go here */
}, {
  "label": "ME",
  "data": /* Valid JSON data will go here */
},...]

var config = {
  "el": "#g-container",
  "data": data,
  "break": 640
};
var map = new Fifty_graphs(config);

map.graph = function(state_data, vars, g){
  /* Insert D3 Function to define one instance of graph and the charting library will do the rest */
}
map.draw()

// To trigger redraw after updated data, you only need to call redraw function
map.redraw()
```

## Examples
Below is the WSJ's graphic remade in 50graphs.js. View more examples on the main page. [50graphs.js page](http://kylebutts.github.io/50graphs)

<p align="center">
  <img src="/docs/wsj_remade.png">
</p>

*Inspiration comes from WSJ “A Field Guide to Red and Blue America”: [WSJ](http://graphics.wsj.com/elections/2016/field-guide-red-blue-america/)*
