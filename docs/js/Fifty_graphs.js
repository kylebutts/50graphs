/* ASSUMING PERFECT DATA */
window.Fifty_graphs = (function (){

	function Fifty_graphs(config){

		var defaults = {
			el: "#g-container",
			layout: [ { "x": "0", "y": "0", "label": "AK" }, { "x": "10", "y": "0", "label": "ME" }, { "x": "9", "y": "1", "label": "VT" }, { "x": "10", "y": "1", "label": "NH" }, { "x": "0", "y": "2", "label": "WA" }, { "x": "1", "y": "2", "label": "ID" }, { "x": "2", "y": "2", "label": "MT" }, { "x": "3", "y": "2", "label": "ND" }, { "x": "4", "y": "2", "label": "MN" }, { "x": "6", "y": "2", "label": "MI" }, { "x": "8", "y": "2", "label": "NY" }, { "x": "9", "y": "2", "label": "MA" }, { "x": "10", "y": "2", "label": "RI" }, { "x": "0", "y": "3", "label": "OR" }, { "x": "1", "y": "3", "label": "UT" }, { "x": "2", "y": "3", "label": "WY" }, { "x": "3", "y": "3", "label": "SD" }, { "x": "4", "y": "3", "label": "IA" }, { "x": "5", "y": "3", "label": "WI" }, { "x": "6", "y": "3", "label": "IN" }, { "x": "7", "y": "3", "label": "OH" }, { "x": "8", "y": "3", "label": "PA" }, { "x": "9", "y": "3", "label": "NJ" }, { "x": "10", "y": "3", "label": "CT" }, { "x": "0", "y": "4", "label": "CA" }, { "x": "1", "y": "4", "label": "NV" }, { "x": "2", "y": "4", "label": "CO" }, { "x": "3", "y": "4", "label": "NE" }, { "x": "4", "y": "4", "label": "MO" }, { "x": "5", "y": "4", "label": "IL" }, { "x": "6", "y": "4", "label": "KY" }, { "x": "7", "y": "4", "label": "WV" }, { "x": "8", "y": "4", "label": "VA" }, { "x": "9", "y": "4", "label": "MD" }, { "x": "10", "y": "4", "label": "DE" }, { "x": "1", "y": "5", "label": "AZ" }, { "x": "2", "y": "5", "label": "NM" }, { "x": "3", "y": "5", "label": "KS" }, { "x": "4", "y": "5", "label": "AR" }, { "x": "5", "y": "5", "label": "TN" }, { "x": "6", "y": "5", "label": "NC" }, { "x": "7", "y": "5", "label": "SC" }, { "x": "8", "y": "5", "label": "DC" }, { "x": "3", "y": "6", "label": "OK" }, { "x": "4", "y": "6", "label": "LA" }, { "x": "5", "y": "6", "label": "MS" }, { "x": "6", "y": "6", "label": "AL" }, { "x": "7", "y": "6", "label": "GA" }, { "x": "0", "y": "7", "label": "HI" }, { "x": "3", "y": "7", "label": "TX" }, { "x": "8", "y": "7", "label": "FL" } ],
			break: 768,
			data: null
		}
		this.variables = {}
		this.extend(defaults, config);
		this.processLayout();
		this.processData(this.options.data);
		this.processVariables();
		this.svg = d3.select(this.options.el).append("svg")

		/* Redraw Function w/ Bind added on */
		d3.select(window).on('resize.'+this.options.el, this.redraw.bind(this));
	}

	/**
	*	This merges our inputted options and our defaults function together.
	*/
	Fifty_graphs.prototype.extend = function (){
		var settings = {};

		for(var i=0; i<arguments.length; i++){
			for(var key in arguments[i]){
				if(arguments[i].hasOwnProperty(key)){
					settings[key] = arguments[i][key];
				}
			}
		}

		this.options = settings;
	}
	Fifty_graphs.prototype.updateData = function (data) {
		this.options.data = data;
		this.processData();
	};

	/**
	*	If layout is a csv text, then creates an array of objects of form {x: x, y: y, this.options.key: label}
	*	If layout is not an object, go back to the default US map
	*	If layout is an object, will assume it's of the correct form
	*/
	Fifty_graphs.prototype.processLayout = function (){
		// Check to see if a CSV template was supplied. If so, convert to object
		if(typeof this.options.layout == "string"){
			var output = [];

				// TODO: Update these lines
			// Fixes any alternative \n forms
			this.options.layout = this.options.layout.replace(/[\n\r]/g, '\n');

			this.options.layout.split("\n").forEach(function (row, y){
				row.split(",").forEach(function (label, x){
					if(label != ""){
						var element = {x: x, y: y};
						element[this.options.key] = label;
						output.push(obj);
					}
				});
			});
			this.options.layout = output;
		}
		// restore default (maybe need to fix this to use defaults variable)
		else if( typeof this.options.layout != "object"){
			this.options.layout = [ { "x": "0", "y": "0", "label": "AK" }, { "x": "10", "y": "0", "label": "ME" }, { "x": "9", "y": "1", "label": "VT" }, { "x": "10", "y": "1", "label": "NH" }, { "x": "0", "y": "2", "label": "WA" }, { "x": "1", "y": "2", "label": "ID" }, { "x": "2", "y": "2", "label": "MT" }, { "x": "3", "y": "2", "label": "ND" }, { "x": "4", "y": "2", "label": "MN" }, { "x": "6", "y": "2", "label": "MI" }, { "x": "8", "y": "2", "label": "NY" }, { "x": "9", "y": "2", "label": "MA" }, { "x": "10", "y": "2", "label": "RI" }, { "x": "0", "y": "3", "label": "OR" }, { "x": "1", "y": "3", "label": "UT" }, { "x": "2", "y": "3", "label": "WY" }, { "x": "3", "y": "3", "label": "SD" }, { "x": "4", "y": "3", "label": "IA" }, { "x": "5", "y": "3", "label": "WI" }, { "x": "6", "y": "3", "label": "IN" }, { "x": "7", "y": "3", "label": "OH" }, { "x": "8", "y": "3", "label": "PA" }, { "x": "9", "y": "3", "label": "NJ" }, { "x": "10", "y": "3", "label": "CT" }, { "x": "0", "y": "4", "label": "CA" }, { "x": "1", "y": "4", "label": "NV" }, { "x": "2", "y": "4", "label": "CO" }, { "x": "3", "y": "4", "label": "NE" }, { "x": "4", "y": "4", "label": "MO" }, { "x": "5", "y": "4", "label": "IL" }, { "x": "6", "y": "4", "label": "KY" }, { "x": "7", "y": "4", "label": "WV" }, { "x": "8", "y": "4", "label": "VA" }, { "x": "9", "y": "4", "label": "MD" }, { "x": "10", "y": "4", "label": "DE" }, { "x": "1", "y": "5", "label": "AZ" }, { "x": "2", "y": "5", "label": "NM" }, { "x": "3", "y": "5", "label": "KS" }, { "x": "4", "y": "5", "label": "AR" }, { "x": "5", "y": "5", "label": "TN" }, { "x": "6", "y": "5", "label": "NC" }, { "x": "7", "y": "5", "label": "SC" }, { "x": "8", "y": "5", "label": "DC" }, { "x": "3", "y": "6", "label": "OK" }, { "x": "4", "y": "6", "label": "LA" }, { "x": "5", "y": "6", "label": "MS" }, { "x": "6", "y": "6", "label": "AL" }, { "x": "7", "y": "6", "label": "GA" }, { "x": "0", "y": "7", "label": "HI" }, { "x": "3", "y": "7", "label": "TX" }, { "x": "8", "y": "7", "label": "FL" } ];
		}

		return this;
	}

	/**
	*	Merge data with layout to create one data object
	*	Data can be of any form as long as it is marked by initials with value "label"
	*	Should occur after the layout is set in this.processLayout
	*	@param:[
	*		{"label": "VT", "data": {__your data__}}
	*	]
	*	@return: [
	*		{"label": "VT", "x": x, "y", y, "data": {__your data__}}
	*	]
	*	Creates this.layout_and_data (only with data objects)
	*/
	Fifty_graphs.prototype.processData = function (){
		var el = this;
		el.layout_and_data = [];


		el.options.layout.forEach(function (graph,i){
			var obj = {};
			obj.label = graph.label;
			el.options.data.forEach(function (d, j){
				if (graph.label === d.label){
					obj.data = d.data;
				}
			})
			if(!obj.data){
				obj.data = null;
			}
			el.layout_and_data.push(obj);
		})

		return this;
	}
	/**
	*	Get Variables:
	*	this.svg_width, this.svg_height, this.g_padding, this.g_width
	*/
	Fifty_graphs.prototype.processVariables = function (){
		var el = this;

		el.variables.svg_width = parseInt( d3.select(el.options.el).style("width") )

		if(el.variables.svg_width > el.options.break){
			el.variables.svg_height = el.variables.svg_width * 8/11
			el.variables.g_padding = 5
			el.variables.g_width = (el.variables.svg_width - 12*el.variables.g_padding)/11
		}
		else{
			el.variables.svg_height = el.variables.svg_width * 11/8
			el.variables.g_padding = 5
			el.variables.g_width = (el.variables.svg_width - 9*el.variables.g_padding)/8
		}


		return this;
	}

	/**
	*	This takes our blank svg and initially draws the map and labels
	*/
	Fifty_graphs.prototype.draw = function (){
		var el = this;

		/* Use forEach statement to create group and draw the graph for each item */

		// If Width greater than 768px
		if( el.variables.svg_width > el.options.break ){
			el.svg
				.attr("width", el.variables.svg_width)
				.attr("height", el.variables.svg_height)
				.style("display", "block")
				.style("margin", "0 auto")


			el.options.layout.forEach(function (state,i){
				var x = state.x * (el.variables.g_width + el.variables.g_padding ) + el.variables.g_padding
				var y = state.y * (el.variables.g_width + el.variables.g_padding ) + el.variables.g_padding
				var g = el.svg
					.append("g")
					.attr("id", state.label)
					.attr("transform", function (){
						return "translate(" + x + "," + y +")"
					})

				el.options.data.forEach(function (d,i){

					if( state.label == d.label ){
						el.graph(d.data, g, el.variables)
					}
				})

			})
		}
		// If Tablet or Smaller
		// transform: translate(x,y)rotate(90)
		else {
			el.svg
				.attr("width", el.variables.svg_width)
				.attr("height", el.variables.svg_height)
				.style("display", "block")
				.style("margin", "0 auto")


			el.options.layout.forEach(function (state,i){

				var x = el.variables.svg_width - el.variables.g_padding - state.y * (el.variables.g_width + el.variables.g_padding)
				var y = state.x * (el.variables.g_width + el.variables.g_padding)

				var g = el.svg
					.append("g")
					.attr("id", state.label)
					.attr("transform", function (){
						return "translate(" + x + "," + y +")rotate(90)"
					})

				el.options.data.forEach(function (d,i){
					if( state.label == d.label ){
						el.graph(d.data, g, el.variables)
					}
				})

			})
		}

		//this.graph(/* USE THE DATA MERGED WITH STATES */ el.options.data);
		return this;
	}

	/**
	*
	*/
	Fifty_graphs.prototype.redraw = function () {
		var el = this;

		el.processVariables();
		el.svg.selectAll("*").remove();
		el.draw();
	};

	/**
	* This will be the overwritten function that draws one instance of the fifty graphs.
	* This will be called with redraw to make the 50 instances in the correct layout
	*/
	Fifty_graphs.prototype.graph = function (state_data, g, vars){
		console.log("User must write custom this.graph() function")
		return null;
	}

	Fifty_graphs.prototype.regraph = function (state_data, g, vars) {
		console.log("User must write custom this.regraph() function")
		return null;
	};

	return Fifty_graphs;
})();
