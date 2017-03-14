var examples = {};
examples.wsj = function(){
	var data = [
		{
		    "label": "AK",
		    "data": [12.5, 10.9, 9.1, 9.1, 12.6, 16.7, 15.1, 13.4, 12]
		}, {
		    "label": "ME",
		    "data": [-1, -0.7, 1.9, -0.4, -5.3, -5.2, -4.2, -5.5, -5.5]
		}, {
		    "label": "VT",
		    "data": [2.6, -1.1, -1.3, -4.5, -7.6, -6.8, -8.4, -13.4, -15.7]
		}, {
		    "label": "NH",
		    "data": [9.3, 10.8, 9.5, 6, 0.9, 0, -0.5, -1.6, -1]
		}, {
		    "label": "WA",
		    "data": [2.4, -0.4, -3.7, -4.4, -3.3, -2.6, -3.8, -5, -5.4]
		}, {
		    "label": "ID",
		    "data": [15, 15.7, 11.7, 11.3, 14.3, 18.3, 19.6, 17.4, 17.5]
		}, {
		    "label": "MT",
		    "data": [6.6, 5.2, 0.6, 0.4, 4.1, 10.2, 11.6, 7.1, 7]
		}, {
		    "label": "ND",
		    "data": [9.9, 11.1, 4.6, 7, 10, 11.8, 13.8, 10.4, 10.1]
		}, {
		    "label": "MN",
		    "data": [-6.6, -8.4, -8.4, -5.9, -4.5, -2.8, -2, -2.3, -1.8]
		}, {
		    "label": "MI",
		    "data": [1, -0.7, 0.2, -0.5, -1.9, -2.5, -2.7, -3.8, -3.8]
		}, {
		    "label": "NY",
		    "data": [-2.5, -4.5, -5.6, -6, -8.7, -12.1, -11.7, -10.2, -11.1]
		}, {
		    "label": "MA",
		    "data": [-6.1, -6.5, -7.8, -8.3, -11.3, -14.2, -14.3, -11.7, -9.7]
		}, {
		    "label": "RI",
		    "data": [-8, -9.4, -8.6, -9.1, -11.3, -14.8, -13.6, -11.2, -11.3]
		}, {
		    "label": "OR",
		    "data": [0.7, -1.4, -4.7, -4.7, -1.6, 0, -1.7, -4, -4.5]
		}, {
		    "label": "UT",
		    "data": [19.3, 19.3, 14.7, 15.3, 17, 19.4, 22, 20.2, 22.4]
		}, {
		    "label": "WY",
		    "data": [12.4, 13, 9.9, 7.4, 9.7, 16.7, 20.2, 19.7, 21.7]
		}, {
		    "label": "SD",
		    "data": [6.1, 7.2, 1.7, 2.5, 6.2, 9.3, 10.8, 8.8, 9.6]
		}, {
		    "label": "IA",
		    "data": [1.7, -1.8, -7.2, -4.7, -0.6, -0.4, -0.4, -1, -1.1]
		}, {
		    "label": "WI",
		    "data": [-1.3, -3.6, -5.1, -2.5, -0.3, -0.5, -0.6, -2.4, -2.5]
		}, {
		    "label": "IN",
		    "data": [4.7, 3.7, 4.6, 6.8, 7.6, 8.1, 8.7, 6.2, 5.2]
		}, {
		    "label": "OH",
		    "data": [0.7, 0.4, 0.9, 1.9, 1.7, 1.6, 1, 0.6, 0.9]
		}, {
		    "label": "PA",
		    "data": [-0.9, -3.5, -4.1, -2.4, -1.3, -1.2, -2.2, -2, -1.2]
		}, {
		    "label": "NJ",
		    "data": [2.1, 1.7, 2.2, 2.5, -1.6, -6.6, -6.3, -4.4, -5.6]
		}, {
		    "label": "CT",
		    "data": [2, 1, 0.3, -1, -3.1, -7.3, -7.8, -7.1, -7.2]
		}, {
		    "label": "CA",
		    "data": [3.1, 1.6, -1.5, -3.6, -3.8, -4.2, -6.1, -7.4, -9.3]
		}, {
		    "label": "NV",
		    "data": [9, 11.4, 7.5, 4.3, 2.9, 3.1, 1.1, -1.3, -2.1]
		}, {
		    "label": "CO",
		    "data": [7.8, 6.9, 2.6, 0.4, 3.1, 5.1, 2.9, 0.1, -0.8]
		}, {
		    "label": "NE",
		    "data": [14, 14, 9.2, 10.7, 15, 15.4, 15.5, 13.4, 12.2]
		}, {
		    "label": "MO",
		    "data": [-1.3, -0.4, -0.5, -2.5, -0.9, 1.6, 2.2, 3.1, 5.2]
		}, {
		    "label": "IL",
		    "data": [0.5, -1.8, -2.8, -4, -5, -5.4, -6.2, -7.7, -7.8]
		}, {
		    "label": "KY",
		    "data": [-3.6, -1.7, 1.6, 1.8, 2.9, 6.1, 8.4, 10.3, 12.7]
		}, {
		    "label": "WV",
		    "data": [-7.3, -5.8, -5.1, -5.3, -4, -0.1, 4.4, 7.8, 13]
		}, {
		    "label": "VA",
		    "data": [1.6, 2.5, 5, 6.2, 5.9, 5.1, 3.7, 1.7, 0.2]
		}, {
		    "label": "MD",
		    "data": [-4.5, -6.7, -4.4, -3.6, -4.4, -6.1, -8, -8.5, -10.3]
		}, {
		    "label": "DE",
		    "data": [-2.9, -1.6, 1.6, 0.3, -2.8, -5.2, -5.8, -7, -8.2]
		}, {
		    "label": "AZ",
		    "data": [11.3, 10.4, 7.4, 5.8, 4.1, 3.5, 3.8, 6, 7.3]
		}, {
		    "label": "NM",
		    "data": [3.5, 2.9, -0.1, -1.5, -0.5, 0.5, -0.3, -2.4, -3.7]
		}, {
		    "label": "KS",
		    "data": [6.5, 8, 5.3, 4.9, 10.9, 13, 11.4, 11.5, 12.2]
		}, {
		    "label": "AR",
		    "data": [-9.5, -1.5, 2.7, -1.6, -5.6, -0.8, 3.4, 8.8, 14]
		}, {
		    "label": "TN",
		    "data": [-5.3, -3.1, 1.7, 2.6, 2.2, 2.8, 4.1, 8.6, 11.8]
		}, {
		    "label": "NC",
		    "data": [-4.4, -0.7, 3.6, 4.1, 5.6, 7, 5.9, 4.3, 3.3]
		}, {
		    "label": "SC",
		    "data": [-5.1, 0.2, 6.6, 8.1, 8, 8.1, 7.9, 7.8, 7.8]
		}, {
		    "label": "DC",
		    "data": [-36.1, -42.7, -42.2, -38, -36.1, -37.8, -41, -40.7, -40.2]
		}, {
		    "label": "OK",
		    "data": [4.9, 9, 7.2, 6.8, 9.1, 10.2, 12.8, 16.8, 19]
		}, {
		    "label": "LA",
		    "data": [-2.2, -0.1, 1.8, 1, -0.5, 1.2, 5.1, 9.6, 11.9]
		}, {
		    "label": "MS",
		    "data": [-2.3, -0.7, 4.9, 7.5, 7.9, 8.2, 8.8, 9.5, 9]
		}, {
		    "label": "AL",
		    "data": [-5.1, -1.3, 4, 6.6, 7.9, 8.2, 9.8, 13.1, 13.9]
		}, {
		    "label": "GA",
		    "data": [-14.4, -6, 3.7, 4.7, 4.2, 5.8, 6.7, 6.7, 6.1]
		}, {
		    "label": "HI",
		    "data": [-3.3, -4.9, -6.1, -6, -6.4, -9.5, -7.6, -12.5, -19.5]
		}, {
		    "label": "TX",
		    "data": [0.7, 3.2, 3.5, 4.1, 6.5, 9.3, 10.7, 9.9, 9.8]
		}, {
		    "label": "FL",
		    "data": [1.1, 5, 6.8, 6, 3.1, 0.9, 0.8, 1.8, 1.9]
		}
	]

	var max = d3.max(data, function(data){
		if(data.label == "DC"){
			return 0;
		}
		return d3.max(data.data, function(d){
			return Math.abs(d)
		})
	})
	var yScale = d3.scaleLinear().domain( [-max,max] ).range([-20,20]);

	var config = {
		"el": "#g-container",
		"data": data,
		"break": 640
	};
	var map = new Fifty_graphs(config);

	map.graph = function(state_data, g, vars) {
		var width = vars.g_width
		yScale.range( [ (-vars.g_width/3), (vars.g_width/3) ])

		var id = g.attr("id")

		g.append("rect")
			.attr("width", width)
			.attr("height", width)
			.attr("fill", "none")
			.attr("stroke-weight", "1px")
			.attr("stroke", "#ddd")

		g.append("text").attr("x", (width / 2)).attr("y", 20).style("text-anchor", "middle").style("vertical-align", "center").style("font-family", "sans-serif").style("color", "#333").text(id)


		var graph = g.append("g")

		graph.append("rect").attr("width", width).attr("height", 2).attr("y", width / 2).attr("x", 0).attr("fill", "#333")



		graph.selectAll("rect").data(state_data).enter()
			.append("rect")
			.attr("x", function(d, i) {
				return width / 9 * i;
			})
			.attr("width", width / 9)
			.attr("y", function(d, i) {
				if (d > 0) {
					return width / 2 - yScale(d);
				} else {
					return width / 2;
				}
			})
			.attr("height", function(d, i) {
				if(d > 0){
					return yScale(d);
				}else {
					return -yScale(d);
				}
			})
			.attr("fill", function(d, i) {
				if (d > 0) {
					return "#C81305";
				} else {
					return "#0485A8";
				}
			})
	}
	map.draw();
}

examples.flip_state = function() {
	var data_initial = [{
			"data": {
				"ev": 3,
				"p": "R"
			},
			"label": "AK"
		}, {
			"data": {
				"ev": 4,
				"p": "D"
			},
			"label": "ME"
		}, {
			"data": {
				"ev": 3,
				"p": "D"
			},
			"label": "VT"
		}, {
			"data": {
				"ev": 4,
				"p": "D"
			},
			"label": "NH"
		}, {
			"data": {
				"ev": 12,
				"p": "D"
			},
			"label": "WA"
		}, {
			"data": {
				"ev": 4,
				"p": "R"
			},
			"label": "ID"
		}, {
			"data": {
				"ev": 3,
				"p": "R"
			},
			"label": "MT"
		}, {
			"data": {
				"ev": 3,
				"p": "R"
			},
			"label": "ND"
		}, {
			"data": {
				"ev": 10,
				"p": "D"
			},
			"label": "MN"
		}, {
			"data": {
				"ev": 16,
				"p": "S"
			},
			"label": "MI"
		}, {
			"data": {
				"ev": 29,
				"p": "D"
			},
			"label": "NY"
		}, {
			"data": {
				"ev": 11,
				"p": "D"
			},
			"label": "MA"
		}, {
			"data": {
				"ev": 4,
				"p": "D"
			},
			"label": "RI"
		}, {
			"data": {
				"ev": 7,
				"p": "D"
			},
			"label": "OR"
		}, {
			"data": {
				"ev": 6,
				"p": "R"
			},
			"label": "UT"
		}, {
			"data": {
				"ev": 3,
				"p": "R"
			},
			"label": "WY"
		}, {
			"data": {
				"ev": 3,
				"p": "R"
			},
			"label": "SD"
		}, {
			"data": {
				"ev": 6,
				"p": "R"
			},
			"label": "IA"
		}, {
			"data": {
				"ev": 10,
				"p": "S"
			},
			"label": "WI"
		}, {
			"data": {
				"ev": 11,
				"p": "R"
			},
			"label": "IN"
		}, {
			"data": {
				"ev": 18,
				"p": "S"
			},
			"label": "OH"
		}, {
			"data": {
				"ev": 20,
				"p": "S"
			},
			"label": "PA"
		}, {
			"data": {
				"ev": 14,
				"p": "D"
			},
			"label": "NJ"
		}, {
			"data": {
				"ev": 7,
				"p": "D"
			},
			"label": "CT"
		}, {
			"data": {
				"ev": 55,
				"p": "D"
			},
			"label": "CA"
		}, {
			"data": {
				"ev": 6,
				"p": "D"
			},
			"label": "NV"
		}, {
			"data": {
				"ev": 9,
				"p": "D"
			},
			"label": "CO"
		}, {
			"data": {
				"ev": 5,
				"p": "R"
			},
			"label": "NE"
		}, {
			"data": {
				"ev": 10,
				"p": "R"
			},
			"label": "MO"
		}, {
			"data": {
				"ev": 20,
				"p": "D"
			},
			"label": "IL"
		}, {
			"data": {
				"ev": 8,
				"p": "R"
			},
			"label": "KY"
		}, {
			"data": {
				"ev": 5,
				"p": "R"
			},
			"label": "WV"
		}, {
			"data": {
				"ev": 13,
				"p": "S"
			},
			"label": "VA"
		}, {
			"data": {
				"ev": 10,
				"p": "D"
			},
			"label": "MD"
		}, {
			"data": {
				"ev": 3,
				"p": "D"
			},
			"label": "DE"
		}, {
			"data": {
				"ev": 11,
				"p": "R"
			},
			"label": "AZ"
		}, {
			"data": {
				"ev": 5,
				"p": "S"
			},
			"label": "NM"
		}, {
			"data": {
				"ev": 6,
				"p": "R"
			},
			"label": "KS"
		}, {
			"data": {
				"ev": 6,
				"p": "R"
			},
			"label": "AR"
		}, {
			"data": {
				"ev": 11,
				"p": "R"
			},
			"label": "TN"
		}, {
			"data": {
				"ev": 15,
				"p": "R"
			},
			"label": "NC"
		}, {
			"data": {
				"ev": 9,
				"p": "R"
			},
			"label": "SC"
		}, {
			"data": {
				"ev": 3,
				"p": "D"
			},
			"label": "DC"
		}, {
			"data": {
				"ev": 7,
				"p": "R"
			},
			"label": "OK"
		}, {
			"data": {
				"ev": 8,
				"p": "R"
			},
			"label": "LA"
		}, {
			"data": {
				"ev": 6,
				"p": "R"
			},
			"label": "MS"
		}, {
			"data": {
				"ev": 9,
				"p": "R"
			},
			"label": "AL"
		}, {
			"data": {
				"ev": 16,
				"p": "R"
			},
			"label": "GA"
		}, {
			"data": {
				"ev": 4,
				"p": "D"
			},
			"label": "HI"
		}, {
			"data": {
				"ev": 38,
				"p": "R"
			},
			"label": "TX"
		}, {
			"data": {
				"ev": 29,
				"p": "S"
			},
			"label": "FL"
		}];
	var data = data_initial

	var config = {
		"el": "#g-container",
		"data": data
	};

	d3.select(config.el).append("div").attr("class", "row").append("h1").attr("id", "phone-intro").text("Click a state to flip the results")

	var svg_width = parseInt(d3.select(config.el).style("width"))
	var svg_height = "60"
	var svg = d3.select(config.el).append("svg").attr("width", svg_width).attr("height", svg_height)

	d3.select(window).on('resize', updateBar)

	var r,s,d;
	function updateBar(){
		console.log("update")
		svg_width = parseInt(d3.select(config.el).style("width"))
		svg.attr("width", svg_width).attr("height", svg_height)
	}
	function computeScores(){
		r = 0;
		s = 0;
		d = 0;
		for(var i = 0; i < data.length; i++){
			if(data[i].data.p == "R"){
				r += data[i].data.ev
			} else if(data[i].data.p == "S"){
				s += data[i].data.ev
			} else {
				d += data[i].data.ev
			}
		}
	}
	function drawBar(){
		svg.html('')
		svg.append("rect").attr("width", function(){
				return r/538 * svg_width
			})
			.attr("height", "60")
			.attr("fill","#D75C5C")
			.attr("x", function(){
				return (1 - r/538) * svg_width
			})
			.attr("y", 0)

		svg.append("rect").attr("width", function(){
				return d/538 * svg_width
			})
			.attr("height", "60")
			.attr("fill","#3989CB")
			.attr("x", function(){
				return 0
			})
			.attr("y", 0)

		svg.append("rect").attr("width", function(){
				return svg_width
			})
			.attr("height", "60")
			.attr("fill","none")
			.attr("stroke", "#bbb")
			.attr("stroke-width", "4px")
			.attr("x", 0)
			.attr("y", 0)

		svg.append("text").attr("x", 15)
			.attr("y", 38)
			.text(function(){
				return "D: " + d;
			})
			.style("font-size", "24px")
			.style("font-family", "Open Sans, sans-serif")
			.style("fill", "#fff")

		svg.append("text").attr("x", function(){
				return svg_width - 15
			})
			.attr("y", 38)
			.text(function(){
				return "R: " + r;
			})
			.attr("text-anchor", "end")
			.style("font-size", "24px")
			.style("font-family", "Open Sans, sans-serif")
			.style("fill", "#fff")

		svg.append("rect")
			.attr("width", "4px")
			.attr("height", "60px")
			.attr("fill", "#bbb")
			.attr("x", function(){
				return svg_width/2-2
			})
	}
	computeScores();

	var map = new Fifty_graphs(config);

	map.graph = function(state_data, g, vars) {
		drawBar()

		var id = g.attr("id")

		g.append("rect")
			.attr("width", vars.g_width)
			.attr("height", vars.g_width)
			.attr("fill", function(){
				if(state_data.p == "R"){
					return "#D75C5C"
				}
				else if(state_data.p == "D"){
					return "#3989CB"
				}else{
					return "transparent"
				}
			})
			.attr("stroke-width", function(){
				if(state_data.p == "S"){
					return "4px"
				}
				return "1px"
			})
			.attr("stroke", function(){
				if(state_data.p == "S"){
					return "#bbb"
				}
				return "#ddd"
			})

		g.style("cursor", "pointer")
			.on("click", function(){
				for(var i = 0; i < data.length; i++){
					if(data[i].label == id){
						if(data[i].data.p == "R"){
							data[i].data.p = "S"
						} else if(data[i].data.p == "S"){
							data[i].data.p = "D"
						} else {
							data[i].data.p = "R"
						}
					}
				}
				computeScores()

				map.redraw();
				})

		g.append("text").attr("x", function(){ return vars.g_width/2 }).attr("y", 20).style("text-anchor", "middle").style("vertical-align", "center").style("font-family", "sans-serif").style("color","#333").text(id)
		g.append("text").attr("x", function(){ return vars.g_width/2 }).attr("y", function(){
			return vars.g_width/2+20
		}).style("text-anchor", "middle").style("vertical-align", "center").style("font-family", "sans-serif").style("font-size", "1.75rem").style("color","#333").text(function(){
			return state_data.ev
		})

	}
	map.draw();
}

examples.phone_your_rep = function() {
	var data = [{
		    "label": "NM",
		    "data": [{
		        "name": "Tom Udall",
		        "url": "http://www.phoneyourrep.com/reps/tom_udall"
		    }, {
		        "name": "Martin Heinrich",
		        "url": "http://www.phoneyourrep.com/reps/martin_heinrich"
		    }, {
		        "name": "Ben Luján",
		        "url": "http://www.phoneyourrep.com/reps/ben_luján"
		    }, {
		        "name": "Michelle Lujan Grisham",
		        "url": "http://www.phoneyourrep.com/reps/michelle_lujan grisham"
		    }, {
		        "name": "Stevan Pearce",
		        "url": "http://www.phoneyourrep.com/reps/stevan_pearce"
		    }]
		}, {
		    "label": "MT",
		    "data": [{
		        "name": "Jon Tester",
		        "url": "http://www.phoneyourrep.com/reps/jon_tester"
		    }, {
		        "name": "Ryan Zinke",
		        "url": "http://www.phoneyourrep.com/reps/ryan_zinke"
		    }, {
		        "name": "Steve Daines",
		        "url": "http://www.phoneyourrep.com/reps/steve_daines"
		    }]
		}, {
		    "label": "AL",
		    "data": [{
		        "name": "Jefferson Sessions",
		        "url": "http://www.phoneyourrep.com/reps/jefferson_sessions"
		    }, {
		        "name": "Mo Brooks",
		        "url": "http://www.phoneyourrep.com/reps/mo_brooks"
		    }, {
		        "name": "Mike Rogers",
		        "url": "http://www.phoneyourrep.com/reps/mike_rogers"
		    }, {
		        "name": "Terri Sewell",
		        "url": "http://www.phoneyourrep.com/reps/terri_sewell"
		    }, {
		        "name": "Bradley Byrne",
		        "url": "http://www.phoneyourrep.com/reps/bradley_byrne"
		    }, {
		        "name": "Richard Shelby",
		        "url": "http://www.phoneyourrep.com/reps/richard_shelby"
		    }, {
		        "name": "Martha Roby",
		        "url": "http://www.phoneyourrep.com/reps/martha_roby"
		    }, {
		        "name": "Robert Aderholt",
		        "url": "http://www.phoneyourrep.com/reps/robert_aderholt"
		    }, {
		        "name": "Gary Palmer",
		        "url": "http://www.phoneyourrep.com/reps/gary_palmer"
		    }]
		}, {
		    "label": "MI",
		    "data": [{
		        "name": "Debbie Stabenow",
		        "url": "http://www.phoneyourrep.com/reps/debbie_stabenow"
		    }, {
		        "name": "Justin Amash",
		        "url": "http://www.phoneyourrep.com/reps/justin_amash"
		    }, {
		        "name": "John Conyers",
		        "url": "http://www.phoneyourrep.com/reps/john_conyers"
		    }, {
		        "name": "Fred Upton",
		        "url": "http://www.phoneyourrep.com/reps/fred_upton"
		    }, {
		        "name": "Daniel Kildee",
		        "url": "http://www.phoneyourrep.com/reps/daniel_kildee"
		    }, {
		        "name": "Brenda Lawrence",
		        "url": "http://www.phoneyourrep.com/reps/brenda_lawrence"
		    }, {
		        "name": "Paul Mitchell",
		        "url": "http://www.phoneyourrep.com/reps/paul_mitchell"
		    }, {
		        "name": "Tim Walberg",
		        "url": "http://www.phoneyourrep.com/reps/tim_walberg"
		    }, {
		        "name": "Gary Peters",
		        "url": "http://www.phoneyourrep.com/reps/gary_peters"
		    }, {
		        "name": "Sander Levin",
		        "url": "http://www.phoneyourrep.com/reps/sander_levin"
		    }, {
		        "name": "Mike Bishop",
		        "url": "http://www.phoneyourrep.com/reps/mike_bishop"
		    }, {
		        "name": "Bill Huizenga",
		        "url": "http://www.phoneyourrep.com/reps/bill_huizenga"
		    }, {
		        "name": "Dave Trott",
		        "url": "http://www.phoneyourrep.com/reps/dave_trott"
		    }, {
		        "name": "Debbie Dingell",
		        "url": "http://www.phoneyourrep.com/reps/debbie_dingell"
		    }, {
		        "name": "Jack Bergman",
		        "url": "http://www.phoneyourrep.com/reps/jack_bergman"
		    }, {
		        "name": "John Moolenaar",
		        "url": "http://www.phoneyourrep.com/reps/john_moolenaar"
		    }]
		}, {
		    "label": "RI",
		    "data": [{
		        "name": "John Reed",
		        "url": "http://www.phoneyourrep.com/reps/john_reed"
		    }, {
		        "name": "Sheldon Whitehouse",
		        "url": "http://www.phoneyourrep.com/reps/sheldon_whitehouse"
		    }, {
		        "name": "David Cicilline",
		        "url": "http://www.phoneyourrep.com/reps/david_cicilline"
		    }, {
		        "name": "James Langevin",
		        "url": "http://www.phoneyourrep.com/reps/james_langevin"
		    }]
		}, {
		    "label": "FL",
		    "data": [{
		        "name": "Bill Nelson",
		        "url": "http://www.phoneyourrep.com/reps/bill_nelson"
		    }, {
		        "name": "Vern Buchanan",
		        "url": "http://www.phoneyourrep.com/reps/vern_buchanan"
		    }, {
		        "name": "Gus Bilirakis",
		        "url": "http://www.phoneyourrep.com/reps/gus_bilirakis"
		    }, {
		        "name": "Kathy Castor",
		        "url": "http://www.phoneyourrep.com/reps/kathy_castor"
		    }, {
		        "name": "Ileana Ros-Lehtinen",
		        "url": "http://www.phoneyourrep.com/reps/ileana_ros-lehtinen"
		    }, {
		        "name": "Bill Posey",
		        "url": "http://www.phoneyourrep.com/reps/bill_posey"
		    }, {
		        "name": "Frederica Wilson",
		        "url": "http://www.phoneyourrep.com/reps/frederica_wilson"
		    }, {
		        "name": "Daniel Webster",
		        "url": "http://www.phoneyourrep.com/reps/daniel_webster"
		    }, {
		        "name": "Ted Yoho",
		        "url": "http://www.phoneyourrep.com/reps/ted_yoho"
		    }, {
		        "name": "Carlos Curbelo",
		        "url": "http://www.phoneyourrep.com/reps/carlos_curbelo"
		    }, {
		        "name": "Matt Gaetz",
		        "url": "http://www.phoneyourrep.com/reps/matt_gaetz"
		    }, {
		        "name": "John Rutherford",
		        "url": "http://www.phoneyourrep.com/reps/john_rutherford"
		    }, {
		        "name": "Al Lawson",
		        "url": "http://www.phoneyourrep.com/reps/al_lawson"
		    }, {
		        "name": "Darren Soto",
		        "url": "http://www.phoneyourrep.com/reps/darren_soto"
		    }, {
		        "name": "Charlie Crist",
		        "url": "http://www.phoneyourrep.com/reps/charlie_crist"
		    }, {
		        "name": "Brian Mast",
		        "url": "http://www.phoneyourrep.com/reps/brian_mast"
		    }, {
		        "name": "Dennis Ross",
		        "url": "http://www.phoneyourrep.com/reps/dennis_ross"
		    }, {
		        "name": "Mario Diaz-Balart",
		        "url": "http://www.phoneyourrep.com/reps/mario_diaz-balart"
		    }, {
		        "name": "Marco Rubio",
		        "url": "http://www.phoneyourrep.com/reps/marco_rubio"
		    }, {
		        "name": "Thomas Rooney",
		        "url": "http://www.phoneyourrep.com/reps/thomas_rooney"
		    }, {
		        "name": "Ron DeSantis",
		        "url": "http://www.phoneyourrep.com/reps/ron_desantis"
		    }, {
		        "name": "Neal Dunn",
		        "url": "http://www.phoneyourrep.com/reps/neal_dunn"
		    }, {
		        "name": "Stephanie Murphy",
		        "url": "http://www.phoneyourrep.com/reps/stephanie_murphy"
		    }, {
		        "name": "Val Demings",
		        "url": "http://www.phoneyourrep.com/reps/val_demings"
		    }, {
		        "name": "Francis Rooney",
		        "url": "http://www.phoneyourrep.com/reps/francis_rooney"
		    }, {
		        "name": "Debbie Wasserman Schultz",
		        "url": "http://www.phoneyourrep.com/reps/debbie_wasserman schultz"
		    }, {
		        "name": "Alcee Hastings",
		        "url": "http://www.phoneyourrep.com/reps/alcee_hastings"
		    }, {
		        "name": "Theodore Deutch",
		        "url": "http://www.phoneyourrep.com/reps/theodore_deutch"
		    }, {
		        "name": "Lois Frankel",
		        "url": "http://www.phoneyourrep.com/reps/lois_frankel"
		    }]
		}, {
		    "label": "MO",
		    "data": [{
		        "name": "Claire McCaskill",
		        "url": "http://www.phoneyourrep.com/reps/claire_mccaskill"
		    }, {
		        "name": "Emanuel Cleaver",
		        "url": "http://www.phoneyourrep.com/reps/emanuel_cleaver"
		    }, {
		        "name": "Vicky Hartzler",
		        "url": "http://www.phoneyourrep.com/reps/vicky_hartzler"
		    }, {
		        "name": "Billy Long",
		        "url": "http://www.phoneyourrep.com/reps/billy_long"
		    }, {
		        "name": "Ann Wagner",
		        "url": "http://www.phoneyourrep.com/reps/ann_wagner"
		    }, {
		        "name": "Blaine Luetkemeyer",
		        "url": "http://www.phoneyourrep.com/reps/blaine_luetkemeyer"
		    }, {
		        "name": "Roy Blunt",
		        "url": "http://www.phoneyourrep.com/reps/roy_blunt"
		    }, {
		        "name": "Sam Graves",
		        "url": "http://www.phoneyourrep.com/reps/sam_graves"
		    }, {
		        "name": "Wm. Clay",
		        "url": "http://www.phoneyourrep.com/reps/wm._clay"
		    }, {
		        "name": "Jason Smith",
		        "url": "http://www.phoneyourrep.com/reps/jason_smith"
		    }]
		}, {
		    "label": "KY",
		    "data": [{
		        "name": "Mitch McConnell",
		        "url": "http://www.phoneyourrep.com/reps/mitch_mcconnell"
		    }, {
		        "name": "Brett Guthrie",
		        "url": "http://www.phoneyourrep.com/reps/brett_guthrie"
		    }, {
		        "name": "Harold Rogers",
		        "url": "http://www.phoneyourrep.com/reps/harold_rogers"
		    }, {
		        "name": "Rand Paul",
		        "url": "http://www.phoneyourrep.com/reps/rand_paul"
		    }, {
		        "name": "Thomas Massie",
		        "url": "http://www.phoneyourrep.com/reps/thomas_massie"
		    }, {
		        "name": "Garland Barr",
		        "url": "http://www.phoneyourrep.com/reps/garland_barr"
		    }, {
		        "name": "James Comer",
		        "url": "http://www.phoneyourrep.com/reps/james_comer"
		    }, {
		        "name": "John Yarmuth",
		        "url": "http://www.phoneyourrep.com/reps/john_yarmuth"
		    }]
		}, {
		    "label": "OK",
		    "data": [{
		        "name": "James Inhofe",
		        "url": "http://www.phoneyourrep.com/reps/james_inhofe"
		    }, {
		        "name": "Tom Cole",
		        "url": "http://www.phoneyourrep.com/reps/tom_cole"
		    }, {
		        "name": "Frank Lucas",
		        "url": "http://www.phoneyourrep.com/reps/frank_lucas"
		    }, {
		        "name": "Markwayne Mullin",
		        "url": "http://www.phoneyourrep.com/reps/markwayne_mullin"
		    }, {
		        "name": "Steve Russell",
		        "url": "http://www.phoneyourrep.com/reps/steve_russell"
		    }, {
		        "name": "James Lankford",
		        "url": "http://www.phoneyourrep.com/reps/james_lankford"
		    }, {
		        "name": "Jim Bridenstine",
		        "url": "http://www.phoneyourrep.com/reps/jim_bridenstine"
		    }]
		}, {
		    "label": "CA",
		    "data": [{
		        "name": "Dianne Feinstein",
		        "url": "http://www.phoneyourrep.com/reps/dianne_feinstein"
		    }, {
		        "name": "Judy Chu",
		        "url": "http://www.phoneyourrep.com/reps/judy_chu"
		    }, {
		        "name": "Ken Calvert",
		        "url": "http://www.phoneyourrep.com/reps/ken_calvert"
		    }, {
		        "name": "Anna Eshoo",
		        "url": "http://www.phoneyourrep.com/reps/anna_eshoo"
		    }, {
		        "name": "Jeff Denham",
		        "url": "http://www.phoneyourrep.com/reps/jeff_denham"
		    }, {
		        "name": "Jim Costa",
		        "url": "http://www.phoneyourrep.com/reps/jim_costa"
		    }, {
		        "name": "Susan Davis",
		        "url": "http://www.phoneyourrep.com/reps/susan_davis"
		    }, {
		        "name": "Darrell Issa",
		        "url": "http://www.phoneyourrep.com/reps/darrell_issa"
		    }, {
		        "name": "Duncan Hunter",
		        "url": "http://www.phoneyourrep.com/reps/duncan_hunter"
		    }, {
		        "name": "Tom McClintock",
		        "url": "http://www.phoneyourrep.com/reps/tom_mcclintock"
		    }, {
		        "name": "Doris Matsui",
		        "url": "http://www.phoneyourrep.com/reps/doris_matsui"
		    }, {
		        "name": "Edward Royce",
		        "url": "http://www.phoneyourrep.com/reps/edward_royce"
		    }, {
		        "name": "Linda Sánchez",
		        "url": "http://www.phoneyourrep.com/reps/linda_sánchez"
		    }, {
		        "name": "Adam Schiff",
		        "url": "http://www.phoneyourrep.com/reps/adam_schiff"
		    }, {
		        "name": "Brad Sherman",
		        "url": "http://www.phoneyourrep.com/reps/brad_sherman"
		    }, {
		        "name": "Eric Swalwell",
		        "url": "http://www.phoneyourrep.com/reps/eric_swalwell"
		    }, {
		        "name": "Alan Lowenthal",
		        "url": "http://www.phoneyourrep.com/reps/alan_lowenthal"
		    }, {
		        "name": "Raul Ruiz",
		        "url": "http://www.phoneyourrep.com/reps/raul_ruiz"
		    }, {
		        "name": "Paul Cook",
		        "url": "http://www.phoneyourrep.com/reps/paul_cook"
		    }, {
		        "name": "Jared Huffman",
		        "url": "http://www.phoneyourrep.com/reps/jared_huffman"
		    }, {
		        "name": "David Valadao",
		        "url": "http://www.phoneyourrep.com/reps/david_valadao"
		    }, {
		        "name": "Norma Torres",
		        "url": "http://www.phoneyourrep.com/reps/norma_torres"
		    }, {
		        "name": "Mimi Walters",
		        "url": "http://www.phoneyourrep.com/reps/mimi_walters"
		    }, {
		        "name": "Ted Lieu",
		        "url": "http://www.phoneyourrep.com/reps/ted_lieu"
		    }, {
		        "name": "Mark DeSaulnier",
		        "url": "http://www.phoneyourrep.com/reps/mark_desaulnier"
		    }, {
		        "name": "Kamala Harris",
		        "url": "http://www.phoneyourrep.com/reps/kamala_harris"
		    }, {
		        "name": "Jimmy Panetta",
		        "url": "http://www.phoneyourrep.com/reps/jimmy_panetta"
		    }, {
		        "name": "Salud Carbajal",
		        "url": "http://www.phoneyourrep.com/reps/salud_carbajal"
		    }, {
		        "name": "J. Correa",
		        "url": "http://www.phoneyourrep.com/reps/j._correa"
		    }, {
		        "name": "Maxine Waters",
		        "url": "http://www.phoneyourrep.com/reps/maxine_waters"
		    }, {
		        "name": "Mike Thompson",
		        "url": "http://www.phoneyourrep.com/reps/mike_thompson"
		    }, {
		        "name": "Jackie Speier",
		        "url": "http://www.phoneyourrep.com/reps/jackie_speier"
		    }, {
		        "name": "Lucille Roybal-Allard",
		        "url": "http://www.phoneyourrep.com/reps/lucille_roybal-allard"
		    }, {
		        "name": "Grace Napolitano",
		        "url": "http://www.phoneyourrep.com/reps/grace_napolitano"
		    }, {
		        "name": "Jerry McNerney",
		        "url": "http://www.phoneyourrep.com/reps/jerry_mcnerney"
		    }, {
		        "name": "Zoe Lofgren",
		        "url": "http://www.phoneyourrep.com/reps/zoe_lofgren"
		    }, {
		        "name": "John Garamendi",
		        "url": "http://www.phoneyourrep.com/reps/john_garamendi"
		    }, {
		        "name": "Doug LaMalfa",
		        "url": "http://www.phoneyourrep.com/reps/doug_lamalfa"
		    }, {
		        "name": "Karen Bass",
		        "url": "http://www.phoneyourrep.com/reps/karen_bass"
		    }, {
		        "name": "Xavier Becerra",
		        "url": "http://www.phoneyourrep.com/reps/xavier_becerra"
		    }, {
		        "name": "Mark Takano",
		        "url": "http://www.phoneyourrep.com/reps/mark_takano"
		    }, {
		        "name": "Ami Bera",
		        "url": "http://www.phoneyourrep.com/reps/ami_bera"
		    }, {
		        "name": "Scott Peters",
		        "url": "http://www.phoneyourrep.com/reps/scott_peters"
		    }, {
		        "name": "Juan Vargas",
		        "url": "http://www.phoneyourrep.com/reps/juan_vargas"
		    }, {
		        "name": "Julia Brownley",
		        "url": "http://www.phoneyourrep.com/reps/julia_brownley"
		    }, {
		        "name": "Steve Knight",
		        "url": "http://www.phoneyourrep.com/reps/steve_knight"
		    }, {
		        "name": "Pete Aguilar",
		        "url": "http://www.phoneyourrep.com/reps/pete_aguilar"
		    }, {
		        "name": "Kevin McCarthy",
		        "url": "http://www.phoneyourrep.com/reps/kevin_mccarthy"
		    }, {
		        "name": "Devin Nunes",
		        "url": "http://www.phoneyourrep.com/reps/devin_nunes"
		    }, {
		        "name": "Tony Cárdenas",
		        "url": "http://www.phoneyourrep.com/reps/tony_cárdenas"
		    }, {
		        "name": "Ro Khanna",
		        "url": "http://www.phoneyourrep.com/reps/ro_khanna"
		    }, {
		        "name": "Nanette Barragán",
		        "url": "http://www.phoneyourrep.com/reps/nanette_barragán"
		    }, {
		        "name": "Nancy Pelosi",
		        "url": "http://www.phoneyourrep.com/reps/nancy_pelosi"
		    }, {
		        "name": "Barbara Lee",
		        "url": "http://www.phoneyourrep.com/reps/barbara_lee"
		    }, {
		        "name": "Dana Rohrabacher",
		        "url": "http://www.phoneyourrep.com/reps/dana_rohrabacher"
		    }]
		}, {
		    "label": "WY",
		    "data": [{
		        "name": "Michael Enzi",
		        "url": "http://www.phoneyourrep.com/reps/michael_enzi"
		    }, {
		        "name": "Liz Cheney",
		        "url": "http://www.phoneyourrep.com/reps/liz_cheney"
		    }, {
		        "name": "John Barrasso",
		        "url": "http://www.phoneyourrep.com/reps/john_barrasso"
		    }]
		}, {
		    "label": "IL",
		    "data": [{
		        "name": "Richard Durbin",
		        "url": "http://www.phoneyourrep.com/reps/richard_durbin"
		    }, {
		        "name": "Randy Hultgren",
		        "url": "http://www.phoneyourrep.com/reps/randy_hultgren"
		    }, {
		        "name": "John Shimkus",
		        "url": "http://www.phoneyourrep.com/reps/john_shimkus"
		    }, {
		        "name": "Cheri Bustos",
		        "url": "http://www.phoneyourrep.com/reps/cheri_bustos"
		    }, {
		        "name": "Bill Foster",
		        "url": "http://www.phoneyourrep.com/reps/bill_foster"
		    }, {
		        "name": "Mike Bost",
		        "url": "http://www.phoneyourrep.com/reps/mike_bost"
		    }, {
		        "name": "Raja Krishnamoorthi",
		        "url": "http://www.phoneyourrep.com/reps/raja_krishnamoorthi"
		    }, {
		        "name": "Peter Roskam",
		        "url": "http://www.phoneyourrep.com/reps/peter_roskam"
		    }, {
		        "name": "Daniel Lipinski",
		        "url": "http://www.phoneyourrep.com/reps/daniel_lipinski"
		    }, {
		        "name": "Rodney Davis",
		        "url": "http://www.phoneyourrep.com/reps/rodney_davis"
		    }, {
		        "name": "Danny Davis",
		        "url": "http://www.phoneyourrep.com/reps/danny_davis"
		    }, {
		        "name": "Tammy Duckworth",
		        "url": "http://www.phoneyourrep.com/reps/tammy_duckworth"
		    }, {
		        "name": "Darin LaHood",
		        "url": "http://www.phoneyourrep.com/reps/darin_lahood"
		    }, {
		        "name": "Adam Kinzinger",
		        "url": "http://www.phoneyourrep.com/reps/adam_kinzinger"
		    }, {
		        "name": "Luis Gutiérrez",
		        "url": "http://www.phoneyourrep.com/reps/luis_gutiérrez"
		    }, {
		        "name": "Bobby Rush",
		        "url": "http://www.phoneyourrep.com/reps/bobby_rush"
		    }, {
		        "name": "Bradley Schneider",
		        "url": "http://www.phoneyourrep.com/reps/bradley_schneider"
		    }, {
		        "name": "Janice Schakowsky",
		        "url": "http://www.phoneyourrep.com/reps/janice_schakowsky"
		    }, {
		        "name": "Mike Quigley",
		        "url": "http://www.phoneyourrep.com/reps/mike_quigley"
		    }, {
		        "name": "Robin Kelly",
		        "url": "http://www.phoneyourrep.com/reps/robin_kelly"
		    }]
		}, {
		    "label": "PA",
		    "data": [{
		        "name": "Robert Casey",
		        "url": "http://www.phoneyourrep.com/reps/robert_casey"
		    }, {
		        "name": "Lou Barletta",
		        "url": "http://www.phoneyourrep.com/reps/lou_barletta"
		    }, {
		        "name": "Robert Brady",
		        "url": "http://www.phoneyourrep.com/reps/robert_brady"
		    }, {
		        "name": "Charles Dent",
		        "url": "http://www.phoneyourrep.com/reps/charles_dent"
		    }, {
		        "name": "Michael Doyle",
		        "url": "http://www.phoneyourrep.com/reps/michael_doyle"
		    }, {
		        "name": "Tim Murphy",
		        "url": "http://www.phoneyourrep.com/reps/tim_murphy"
		    }, {
		        "name": "Glenn Thompson",
		        "url": "http://www.phoneyourrep.com/reps/glenn_thompson"
		    }, {
		        "name": "Patrick Toomey",
		        "url": "http://www.phoneyourrep.com/reps/patrick_toomey"
		    }, {
		        "name": "Scott Perry",
		        "url": "http://www.phoneyourrep.com/reps/scott_perry"
		    }, {
		        "name": "Keith Rothfus",
		        "url": "http://www.phoneyourrep.com/reps/keith_rothfus"
		    }, {
		        "name": "Dwight Evans",
		        "url": "http://www.phoneyourrep.com/reps/dwight_evans"
		    }, {
		        "name": "Ryan Costello",
		        "url": "http://www.phoneyourrep.com/reps/ryan_costello"
		    }, {
		        "name": "Brendan Boyle",
		        "url": "http://www.phoneyourrep.com/reps/brendan_boyle"
		    }, {
		        "name": "Brian Fitzpatrick",
		        "url": "http://www.phoneyourrep.com/reps/brian_fitzpatrick"
		    }, {
		        "name": "Bill Shuster",
		        "url": "http://www.phoneyourrep.com/reps/bill_shuster"
		    }, {
		        "name": "Tom Marino",
		        "url": "http://www.phoneyourrep.com/reps/tom_marino"
		    }, {
		        "name": "Mike Kelly",
		        "url": "http://www.phoneyourrep.com/reps/mike_kelly"
		    }, {
		        "name": "Matthew Cartwright",
		        "url": "http://www.phoneyourrep.com/reps/matthew_cartwright"
		    }, {
		        "name": "Patrick Meehan",
		        "url": "http://www.phoneyourrep.com/reps/patrick_meehan"
		    }, {
		        "name": "Lloyd Smucker",
		        "url": "http://www.phoneyourrep.com/reps/lloyd_smucker"
		    }]
		}, {
		    "label": "TX",
		    "data": [{
		        "name": "John Cornyn",
		        "url": "http://www.phoneyourrep.com/reps/john_cornyn"
		    }, {
		        "name": "Michael Burgess",
		        "url": "http://www.phoneyourrep.com/reps/michael_burgess"
		    }, {
		        "name": "Kevin Brady",
		        "url": "http://www.phoneyourrep.com/reps/kevin_brady"
		    }, {
		        "name": "Joe Barton",
		        "url": "http://www.phoneyourrep.com/reps/joe_barton"
		    }, {
		        "name": "Louie Gohmert",
		        "url": "http://www.phoneyourrep.com/reps/louie_gohmert"
		    }, {
		        "name": "Blake Farenthold",
		        "url": "http://www.phoneyourrep.com/reps/blake_farenthold"
		    }, {
		        "name": "Henry Cuellar",
		        "url": "http://www.phoneyourrep.com/reps/henry_cuellar"
		    }, {
		        "name": "Sam Johnson",
		        "url": "http://www.phoneyourrep.com/reps/sam_johnson"
		    }, {
		        "name": "Sheila Jackson Lee",
		        "url": "http://www.phoneyourrep.com/reps/sheila_jackson lee"
		    }, {
		        "name": "Kay Granger",
		        "url": "http://www.phoneyourrep.com/reps/kay_granger"
		    }, {
		        "name": "Kenny Marchant",
		        "url": "http://www.phoneyourrep.com/reps/kenny_marchant"
		    }, {
		        "name": "Pete Olson",
		        "url": "http://www.phoneyourrep.com/reps/pete_olson"
		    }, {
		        "name": "Mac Thornberry",
		        "url": "http://www.phoneyourrep.com/reps/mac_thornberry"
		    }, {
		        "name": "Pete Sessions",
		        "url": "http://www.phoneyourrep.com/reps/pete_sessions"
		    }, {
		        "name": "Randy Weber",
		        "url": "http://www.phoneyourrep.com/reps/randy_weber"
		    }, {
		        "name": "Beto O'Rourke",
		        "url": "http://www.phoneyourrep.com/reps/beto_o'rourke"
		    }, {
		        "name": "Brian Babin",
		        "url": "http://www.phoneyourrep.com/reps/brian_babin"
		    }, {
		        "name": "Will Hurd",
		        "url": "http://www.phoneyourrep.com/reps/will_hurd"
		    }, {
		        "name": "Vicente Gonzalez",
		        "url": "http://www.phoneyourrep.com/reps/vicente_gonzalez"
		    }, {
		        "name": "Ted Poe",
		        "url": "http://www.phoneyourrep.com/reps/ted_poe"
		    }, {
		        "name": "Michael McCaul",
		        "url": "http://www.phoneyourrep.com/reps/michael_mccaul"
		    }, {
		        "name": "Eddie Johnson",
		        "url": "http://www.phoneyourrep.com/reps/eddie_johnson"
		    }, {
		        "name": "Jeb Hensarling",
		        "url": "http://www.phoneyourrep.com/reps/jeb_hensarling"
		    }, {
		        "name": "Al Green",
		        "url": "http://www.phoneyourrep.com/reps/al_green"
		    }, {
		        "name": "Lloyd Doggett",
		        "url": "http://www.phoneyourrep.com/reps/lloyd_doggett"
		    }, {
		        "name": "K. Conaway",
		        "url": "http://www.phoneyourrep.com/reps/k._conaway"
		    }, {
		        "name": "John Carter",
		        "url": "http://www.phoneyourrep.com/reps/john_carter"
		    }, {
		        "name": "John Culberson",
		        "url": "http://www.phoneyourrep.com/reps/john_culberson"
		    }, {
		        "name": "Filemon Vela",
		        "url": "http://www.phoneyourrep.com/reps/filemon_vela"
		    }, {
		        "name": "Roger Williams",
		        "url": "http://www.phoneyourrep.com/reps/roger_williams"
		    }, {
		        "name": "Joaquin Castro",
		        "url": "http://www.phoneyourrep.com/reps/joaquin_castro"
		    }, {
		        "name": "John Ratcliffe",
		        "url": "http://www.phoneyourrep.com/reps/john_ratcliffe"
		    }, {
		        "name": "Bill Flores",
		        "url": "http://www.phoneyourrep.com/reps/bill_flores"
		    }, {
		        "name": "Lamar Smith",
		        "url": "http://www.phoneyourrep.com/reps/lamar_smith"
		    }, {
		        "name": "Marc Veasey",
		        "url": "http://www.phoneyourrep.com/reps/marc_veasey"
		    }, {
		        "name": "Jodey Arrington",
		        "url": "http://www.phoneyourrep.com/reps/jodey_arrington"
		    }, {
		        "name": "Gene Green",
		        "url": "http://www.phoneyourrep.com/reps/gene_green"
		    }, {
		        "name": "Ted Cruz",
		        "url": "http://www.phoneyourrep.com/reps/ted_cruz"
		    }]
		}, {
		    "label": "MD",
		    "data": [{
		        "name": "Benjamin Cardin",
		        "url": "http://www.phoneyourrep.com/reps/benjamin_cardin"
		    }, {
		        "name": "Steny Hoyer",
		        "url": "http://www.phoneyourrep.com/reps/steny_hoyer"
		    }, {
		        "name": "Andy Harris",
		        "url": "http://www.phoneyourrep.com/reps/andy_harris"
		    }, {
		        "name": "John Sarbanes",
		        "url": "http://www.phoneyourrep.com/reps/john_sarbanes"
		    }, {
		        "name": "Anthony Brown",
		        "url": "http://www.phoneyourrep.com/reps/anthony_brown"
		    }, {
		        "name": "Jamie Raskin",
		        "url": "http://www.phoneyourrep.com/reps/jamie_raskin"
		    }, {
		        "name": "Chris Van Hollen",
		        "url": "http://www.phoneyourrep.com/reps/chris_van hollen"
		    }, {
		        "name": "Elijah Cummings",
		        "url": "http://www.phoneyourrep.com/reps/elijah_cummings"
		    }, {
		        "name": "John Delaney",
		        "url": "http://www.phoneyourrep.com/reps/john_delaney"
		    }, {
		        "name": "C. Ruppersberger",
		        "url": "http://www.phoneyourrep.com/reps/c._ruppersberger"
		    }]
		}, {
		    "label": "WA",
		    "data": [{
		        "name": "Maria Cantwell",
		        "url": "http://www.phoneyourrep.com/reps/maria_cantwell"
		    }, {
		        "name": "Cathy McMorris Rodgers",
		        "url": "http://www.phoneyourrep.com/reps/cathy_mcmorris rodgers"
		    }, {
		        "name": "Rick Larsen",
		        "url": "http://www.phoneyourrep.com/reps/rick_larsen"
		    }, {
		        "name": "David Reichert",
		        "url": "http://www.phoneyourrep.com/reps/david_reichert"
		    }, {
		        "name": "Adam Smith",
		        "url": "http://www.phoneyourrep.com/reps/adam_smith"
		    }, {
		        "name": "Suzan DelBene",
		        "url": "http://www.phoneyourrep.com/reps/suzan_delbene"
		    }, {
		        "name": "Denny Heck",
		        "url": "http://www.phoneyourrep.com/reps/denny_heck"
		    }, {
		        "name": "Derek Kilmer",
		        "url": "http://www.phoneyourrep.com/reps/derek_kilmer"
		    }, {
		        "name": "Dan Newhouse",
		        "url": "http://www.phoneyourrep.com/reps/dan_newhouse"
		    }, {
		        "name": "Pramila Jayapal",
		        "url": "http://www.phoneyourrep.com/reps/pramila_jayapal"
		    }, {
		        "name": "Patty Murray",
		        "url": "http://www.phoneyourrep.com/reps/patty_murray"
		    }, {
		        "name": "Jaime Herrera Beutler",
		        "url": "http://www.phoneyourrep.com/reps/jaime_herrera beutler"
		    }]
		}, {
		    "label": "OH",
		    "data": [{
		        "name": "Sherrod Brown",
		        "url": "http://www.phoneyourrep.com/reps/sherrod_brown"
		    }, {
		        "name": "Marcia Fudge",
		        "url": "http://www.phoneyourrep.com/reps/marcia_fudge"
		    }, {
		        "name": "Marcy Kaptur",
		        "url": "http://www.phoneyourrep.com/reps/marcy_kaptur"
		    }, {
		        "name": "Bill Johnson",
		        "url": "http://www.phoneyourrep.com/reps/bill_johnson"
		    }, {
		        "name": "Jim Jordan",
		        "url": "http://www.phoneyourrep.com/reps/jim_jordan"
		    }, {
		        "name": "James Renacci",
		        "url": "http://www.phoneyourrep.com/reps/james_renacci"
		    }, {
		        "name": "Tim Ryan",
		        "url": "http://www.phoneyourrep.com/reps/tim_ryan"
		    }, {
		        "name": "Robert Portman",
		        "url": "http://www.phoneyourrep.com/reps/robert_portman"
		    }, {
		        "name": "Patrick Tiberi",
		        "url": "http://www.phoneyourrep.com/reps/patrick_tiberi"
		    }, {
		        "name": "Brad Wenstrup",
		        "url": "http://www.phoneyourrep.com/reps/brad_wenstrup"
		    }, {
		        "name": "Steve Stivers",
		        "url": "http://www.phoneyourrep.com/reps/steve_stivers"
		    }, {
		        "name": "Robert Latta",
		        "url": "http://www.phoneyourrep.com/reps/robert_latta"
		    }, {
		        "name": "Bob Gibbs",
		        "url": "http://www.phoneyourrep.com/reps/bob_gibbs"
		    }, {
		        "name": "Steve Chabot",
		        "url": "http://www.phoneyourrep.com/reps/steve_chabot"
		    }, {
		        "name": "David Joyce",
		        "url": "http://www.phoneyourrep.com/reps/david_joyce"
		    }, {
		        "name": "Joyce Beatty",
		        "url": "http://www.phoneyourrep.com/reps/joyce_beatty"
		    }, {
		        "name": "Warren Davidson",
		        "url": "http://www.phoneyourrep.com/reps/warren_davidson"
		    }, {
		        "name": "Michael Turner",
		        "url": "http://www.phoneyourrep.com/reps/michael_turner"
		    }]
		}, {
		    "label": "TN",
		    "data": [{
		        "name": "Lamar Alexander",
		        "url": "http://www.phoneyourrep.com/reps/lamar_alexander"
		    }, {
		        "name": "Steve Cohen",
		        "url": "http://www.phoneyourrep.com/reps/steve_cohen"
		    }, {
		        "name": "Diane Black",
		        "url": "http://www.phoneyourrep.com/reps/diane_black"
		    }, {
		        "name": "John Duncan",
		        "url": "http://www.phoneyourrep.com/reps/john_duncan"
		    }, {
		        "name": "Jim Cooper",
		        "url": "http://www.phoneyourrep.com/reps/jim_cooper"
		    }, {
		        "name": "David Roe",
		        "url": "http://www.phoneyourrep.com/reps/david_roe"
		    }, {
		        "name": "David Kustoff",
		        "url": "http://www.phoneyourrep.com/reps/david_kustoff"
		    }, {
		        "name": "Charles Fleischmann",
		        "url": "http://www.phoneyourrep.com/reps/charles_fleischmann"
		    }, {
		        "name": "Scott DesJarlais",
		        "url": "http://www.phoneyourrep.com/reps/scott_desjarlais"
		    }, {
		        "name": "Marsha Blackburn",
		        "url": "http://www.phoneyourrep.com/reps/marsha_blackburn"
		    }, {
		        "name": "Bob Corker",
		        "url": "http://www.phoneyourrep.com/reps/bob_corker"
		    }]
		}, {
		    "label": "MN",
		    "data": [{
		        "name": "Amy Klobuchar",
		        "url": "http://www.phoneyourrep.com/reps/amy_klobuchar"
		    }, {
		        "name": "Betty McCollum",
		        "url": "http://www.phoneyourrep.com/reps/betty_mccollum"
		    }, {
		        "name": "Erik Paulsen",
		        "url": "http://www.phoneyourrep.com/reps/erik_paulsen"
		    }, {
		        "name": "Timothy Walz",
		        "url": "http://www.phoneyourrep.com/reps/timothy_walz"
		    }, {
		        "name": "Tom Emmer",
		        "url": "http://www.phoneyourrep.com/reps/tom_emmer"
		    }, {
		        "name": "Jason Lewis",
		        "url": "http://www.phoneyourrep.com/reps/jason_lewis"
		    }, {
		        "name": "Richard Nolan",
		        "url": "http://www.phoneyourrep.com/reps/richard_nolan"
		    }, {
		        "name": "Alan Franken",
		        "url": "http://www.phoneyourrep.com/reps/alan_franken"
		    }, {
		        "name": "Collin Peterson",
		        "url": "http://www.phoneyourrep.com/reps/collin_peterson"
		    }, {
		        "name": "Keith Ellison",
		        "url": "http://www.phoneyourrep.com/reps/keith_ellison"
		    }]
		}, {
		    "label": "NY",
		    "data": [{
		        "name": "Kirsten Gillibrand",
		        "url": "http://www.phoneyourrep.com/reps/kirsten_gillibrand"
		    }, {
		        "name": "Eliot Engel",
		        "url": "http://www.phoneyourrep.com/reps/eliot_engel"
		    }, {
		        "name": "Joseph Crowley",
		        "url": "http://www.phoneyourrep.com/reps/joseph_crowley"
		    }, {
		        "name": "Carolyn Maloney",
		        "url": "http://www.phoneyourrep.com/reps/carolyn_maloney"
		    }, {
		        "name": "José Serrano",
		        "url": "http://www.phoneyourrep.com/reps/josé_serrano"
		    }, {
		        "name": "Hakeem Jeffries",
		        "url": "http://www.phoneyourrep.com/reps/hakeem_jeffries"
		    }, {
		        "name": "Chris Collins",
		        "url": "http://www.phoneyourrep.com/reps/chris_collins"
		    }, {
		        "name": "Elise Stefanik",
		        "url": "http://www.phoneyourrep.com/reps/elise_stefanik"
		    }, {
		        "name": "John Katko",
		        "url": "http://www.phoneyourrep.com/reps/john_katko"
		    }, {
		        "name": "Kathleen Rice",
		        "url": "http://www.phoneyourrep.com/reps/kathleen_rice"
		    }, {
		        "name": "Thomas Suozzi",
		        "url": "http://www.phoneyourrep.com/reps/thomas_suozzi"
		    }, {
		        "name": "Adriano Espaillat",
		        "url": "http://www.phoneyourrep.com/reps/adriano_espaillat"
		    }, {
		        "name": "Claudia Tenney",
		        "url": "http://www.phoneyourrep.com/reps/claudia_tenney"
		    }, {
		        "name": "Nydia Velázquez",
		        "url": "http://www.phoneyourrep.com/reps/nydia_velázquez"
		    }, {
		        "name": "Paul Tonko",
		        "url": "http://www.phoneyourrep.com/reps/paul_tonko"
		    }, {
		        "name": "Louise Slaughter",
		        "url": "http://www.phoneyourrep.com/reps/louise_slaughter"
		    }, {
		        "name": "Charles Schumer",
		        "url": "http://www.phoneyourrep.com/reps/charles_schumer"
		    }, {
		        "name": "Tom Reed",
		        "url": "http://www.phoneyourrep.com/reps/tom_reed"
		    }, {
		        "name": "Jerrold Nadler",
		        "url": "http://www.phoneyourrep.com/reps/jerrold_nadler"
		    }, {
		        "name": "Gregory Meeks",
		        "url": "http://www.phoneyourrep.com/reps/gregory_meeks"
		    }, {
		        "name": "Peter King",
		        "url": "http://www.phoneyourrep.com/reps/peter_king"
		    }, {
		        "name": "Yvette Clarke",
		        "url": "http://www.phoneyourrep.com/reps/yvette_clarke"
		    }, {
		        "name": "Grace Meng",
		        "url": "http://www.phoneyourrep.com/reps/grace_meng"
		    }, {
		        "name": "Brian Higgins",
		        "url": "http://www.phoneyourrep.com/reps/brian_higgins"
		    }, {
		        "name": "Nita Lowey",
		        "url": "http://www.phoneyourrep.com/reps/nita_lowey"
		    }, {
		        "name": "Lee Zeldin",
		        "url": "http://www.phoneyourrep.com/reps/lee_zeldin"
		    }, {
		        "name": "Daniel Donovan",
		        "url": "http://www.phoneyourrep.com/reps/daniel_donovan"
		    }, {
		        "name": "John Faso",
		        "url": "http://www.phoneyourrep.com/reps/john_faso"
		    }, {
		        "name": "Sean Maloney",
		        "url": "http://www.phoneyourrep.com/reps/sean_maloney"
		    }]
		}, {
		    "label": "CO",
		    "data": [{
		        "name": "Mike Coffman",
		        "url": "http://www.phoneyourrep.com/reps/mike_coffman"
		    }, {
		        "name": "Diana DeGette",
		        "url": "http://www.phoneyourrep.com/reps/diana_degette"
		    }, {
		        "name": "Ed Perlmutter",
		        "url": "http://www.phoneyourrep.com/reps/ed_perlmutter"
		    }, {
		        "name": "Scott Tipton",
		        "url": "http://www.phoneyourrep.com/reps/scott_tipton"
		    }, {
		        "name": "Ken Buck",
		        "url": "http://www.phoneyourrep.com/reps/ken_buck"
		    }, {
		        "name": "Jared Polis",
		        "url": "http://www.phoneyourrep.com/reps/jared_polis"
		    }, {
		        "name": "Michael Bennet",
		        "url": "http://www.phoneyourrep.com/reps/michael_bennet"
		    }, {
		        "name": "Cory Gardner",
		        "url": "http://www.phoneyourrep.com/reps/cory_gardner"
		    }, {
		        "name": "Doug Lamborn",
		        "url": "http://www.phoneyourrep.com/reps/doug_lamborn"
		    }]
		}, {
		    "label": "IN",
		    "data": [{
		        "name": "André Carson",
		        "url": "http://www.phoneyourrep.com/reps/andré_carson"
		    }, {
		        "name": "Todd Rokita",
		        "url": "http://www.phoneyourrep.com/reps/todd_rokita"
		    }, {
		        "name": "Peter Visclosky",
		        "url": "http://www.phoneyourrep.com/reps/peter_visclosky"
		    }, {
		        "name": "Jackie Walorski",
		        "url": "http://www.phoneyourrep.com/reps/jackie_walorski"
		    }, {
		        "name": "Trey Hollingsworth",
		        "url": "http://www.phoneyourrep.com/reps/trey_hollingsworth"
		    }, {
		        "name": "Todd Young",
		        "url": "http://www.phoneyourrep.com/reps/todd_young"
		    }, {
		        "name": "Larry Bucshon",
		        "url": "http://www.phoneyourrep.com/reps/larry_bucshon"
		    }, {
		        "name": "Susan Brooks",
		        "url": "http://www.phoneyourrep.com/reps/susan_brooks"
		    }, {
		        "name": "Joe Donnelly",
		        "url": "http://www.phoneyourrep.com/reps/joe_donnelly"
		    }, {
		        "name": "Luke Messer",
		        "url": "http://www.phoneyourrep.com/reps/luke_messer"
		    }, {
		        "name": "Jim Banks",
		        "url": "http://www.phoneyourrep.com/reps/jim_banks"
		    }]
		}, {
		    "label": "WV",
		    "data": [{
		        "name": "Shelley Capito",
		        "url": "http://www.phoneyourrep.com/reps/shelley_capito"
		    }, {
		        "name": "David McKinley",
		        "url": "http://www.phoneyourrep.com/reps/david_mckinley"
		    }, {
		        "name": "Evan Jenkins",
		        "url": "http://www.phoneyourrep.com/reps/evan_jenkins"
		    }, {
		        "name": "Joe Manchin",
		        "url": "http://www.phoneyourrep.com/reps/joe_manchin"
		    }, {
		        "name": "Alex Mooney",
		        "url": "http://www.phoneyourrep.com/reps/alex_mooney"
		    }]
		}, {
		    "label": "SC",
		    "data": [{
		        "name": "James Clyburn",
		        "url": "http://www.phoneyourrep.com/reps/james_clyburn"
		    }, {
		        "name": "Jeff Duncan",
		        "url": "http://www.phoneyourrep.com/reps/jeff_duncan"
		    }, {
		        "name": "Trey Gowdy",
		        "url": "http://www.phoneyourrep.com/reps/trey_gowdy"
		    }, {
		        "name": "Tim Scott",
		        "url": "http://www.phoneyourrep.com/reps/tim_scott"
		    }, {
		        "name": "Tom Rice",
		        "url": "http://www.phoneyourrep.com/reps/tom_rice"
		    }, {
		        "name": "Mick Mulvaney",
		        "url": "http://www.phoneyourrep.com/reps/mick_mulvaney"
		    }, {
		        "name": "Lindsey Graham",
		        "url": "http://www.phoneyourrep.com/reps/lindsey_graham"
		    }, {
		        "name": "Marshall Sanford",
		        "url": "http://www.phoneyourrep.com/reps/marshall_sanford"
		    }, {
		        "name": "Joe Wilson",
		        "url": "http://www.phoneyourrep.com/reps/joe_wilson"
		    }]
		}, {
		    "label": "AR",
		    "data": [{
		        "name": "John Boozman",
		        "url": "http://www.phoneyourrep.com/reps/john_boozman"
		    }, {
		        "name": "French Hill",
		        "url": "http://www.phoneyourrep.com/reps/french_hill"
		    }, {
		        "name": "Steve Womack",
		        "url": "http://www.phoneyourrep.com/reps/steve_womack"
		    }, {
		        "name": "Bruce Westerman",
		        "url": "http://www.phoneyourrep.com/reps/bruce_westerman"
		    }, {
		        "name": "Eric Crawford",
		        "url": "http://www.phoneyourrep.com/reps/eric_crawford"
		    }, {
		        "name": "Tom Cotton",
		        "url": "http://www.phoneyourrep.com/reps/tom_cotton"
		    }]
		}, {
		    "label": "GA",
		    "data": [{
		        "name": "Sanford Bishop",
		        "url": "http://www.phoneyourrep.com/reps/sanford_bishop"
		    }, {
		        "name": "Tom Graves",
		        "url": "http://www.phoneyourrep.com/reps/tom_graves"
		    }, {
		        "name": "John Lewis",
		        "url": "http://www.phoneyourrep.com/reps/john_lewis"
		    }, {
		        "name": "Tom Price",
		        "url": "http://www.phoneyourrep.com/reps/tom_price"
		    }, {
		        "name": "Doug Collins",
		        "url": "http://www.phoneyourrep.com/reps/doug_collins"
		    }, {
		        "name": "Barry Loudermilk",
		        "url": "http://www.phoneyourrep.com/reps/barry_loudermilk"
		    }, {
		        "name": "Rick Allen",
		        "url": "http://www.phoneyourrep.com/reps/rick_allen"
		    }, {
		        "name": "Jody Hice",
		        "url": "http://www.phoneyourrep.com/reps/jody_hice"
		    }, {
		        "name": "A. Ferguson",
		        "url": "http://www.phoneyourrep.com/reps/a._ferguson"
		    }, {
		        "name": "David Scott",
		        "url": "http://www.phoneyourrep.com/reps/david_scott"
		    }, {
		        "name": "Buddy Carter",
		        "url": "http://www.phoneyourrep.com/reps/buddy_carter"
		    }, {
		        "name": "Henry Johnson",
		        "url": "http://www.phoneyourrep.com/reps/henry_johnson"
		    }, {
		        "name": "Austin Scott",
		        "url": "http://www.phoneyourrep.com/reps/austin_scott"
		    }, {
		        "name": "Rob Woodall",
		        "url": "http://www.phoneyourrep.com/reps/rob_woodall"
		    }, {
		        "name": "David Perdue",
		        "url": "http://www.phoneyourrep.com/reps/david_perdue"
		    }, {
		        "name": "John Isakson",
		        "url": "http://www.phoneyourrep.com/reps/john_isakson"
		    }]
		}, {
		    "label": "GU",
		    "data": [{
		        "name": "Madeleine Bordallo",
		        "url": "http://www.phoneyourrep.com/reps/madeleine_bordallo"
		    }]
		}, {
		    "label": "LA",
		    "data": [{
		        "name": "Bill Cassidy",
		        "url": "http://www.phoneyourrep.com/reps/bill_cassidy"
		    }, {
		        "name": "Cedric Richmond",
		        "url": "http://www.phoneyourrep.com/reps/cedric_richmond"
		    }, {
		        "name": "Steve Scalise",
		        "url": "http://www.phoneyourrep.com/reps/steve_scalise"
		    }, {
		        "name": "Ralph Abraham",
		        "url": "http://www.phoneyourrep.com/reps/ralph_abraham"
		    }, {
		        "name": "Garret Graves",
		        "url": "http://www.phoneyourrep.com/reps/garret_graves"
		    }, {
		        "name": "Mike Johnson",
		        "url": "http://www.phoneyourrep.com/reps/mike_johnson"
		    }, {
		        "name": "John Kennedy",
		        "url": "http://www.phoneyourrep.com/reps/john_kennedy"
		    }, {
		        "name": "Clay Higgins",
		        "url": "http://www.phoneyourrep.com/reps/clay_higgins"
		    }]
		}, {
		    "label": "NC",
		    "data": [{
		        "name": "Virginia Foxx",
		        "url": "http://www.phoneyourrep.com/reps/virginia_foxx"
		    }, {
		        "name": "Patrick McHenry",
		        "url": "http://www.phoneyourrep.com/reps/patrick_mchenry"
		    }, {
		        "name": "George Holding",
		        "url": "http://www.phoneyourrep.com/reps/george_holding"
		    }, {
		        "name": "Robert Pittenger",
		        "url": "http://www.phoneyourrep.com/reps/robert_pittenger"
		    }, {
		        "name": "Richard Hudson",
		        "url": "http://www.phoneyourrep.com/reps/richard_hudson"
		    }, {
		        "name": "Mark Walker",
		        "url": "http://www.phoneyourrep.com/reps/mark_walker"
		    }, {
		        "name": "David Price",
		        "url": "http://www.phoneyourrep.com/reps/david_price"
		    }, {
		        "name": "Walter Jones",
		        "url": "http://www.phoneyourrep.com/reps/walter_jones"
		    }, {
		        "name": "George Butterfield",
		        "url": "http://www.phoneyourrep.com/reps/george_butterfield"
		    }, {
		        "name": "Richard Burr",
		        "url": "http://www.phoneyourrep.com/reps/richard_burr"
		    }, {
		        "name": "Mark Meadows",
		        "url": "http://www.phoneyourrep.com/reps/mark_meadows"
		    }, {
		        "name": "Alma Adams",
		        "url": "http://www.phoneyourrep.com/reps/alma_adams"
		    }, {
		        "name": "David Rouzer",
		        "url": "http://www.phoneyourrep.com/reps/david_rouzer"
		    }, {
		        "name": "Thom Tillis",
		        "url": "http://www.phoneyourrep.com/reps/thom_tillis"
		    }, {
		        "name": "Ted Budd",
		        "url": "http://www.phoneyourrep.com/reps/ted_budd"
		    }]
		}, {
		    "label": "AZ",
		    "data": [{
		        "name": "Trent Franks",
		        "url": "http://www.phoneyourrep.com/reps/trent_franks"
		    }, {
		        "name": "Raúl Grijalva",
		        "url": "http://www.phoneyourrep.com/reps/raúl_grijalva"
		    }, {
		        "name": "John McCain",
		        "url": "http://www.phoneyourrep.com/reps/john_mccain"
		    }, {
		        "name": "Kyrsten Sinema",
		        "url": "http://www.phoneyourrep.com/reps/kyrsten_sinema"
		    }, {
		        "name": "Martha McSally",
		        "url": "http://www.phoneyourrep.com/reps/martha_mcsally"
		    }, {
		        "name": "Tom O'Halleran",
		        "url": "http://www.phoneyourrep.com/reps/tom_o'halleran"
		    }, {
		        "name": "Andy Biggs",
		        "url": "http://www.phoneyourrep.com/reps/andy_biggs"
		    }, {
		        "name": "Paul Gosar",
		        "url": "http://www.phoneyourrep.com/reps/paul_gosar"
		    }, {
		        "name": "Jeff Flake",
		        "url": "http://www.phoneyourrep.com/reps/jeff_flake"
		    }, {
		        "name": "Ruben Gallego",
		        "url": "http://www.phoneyourrep.com/reps/ruben_gallego"
		    }, {
		        "name": "David Schweikert",
		        "url": "http://www.phoneyourrep.com/reps/david_schweikert"
		    }]
		}, {
		    "label": "CT",
		    "data": [{
		        "name": "Rosa DeLauro",
		        "url": "http://www.phoneyourrep.com/reps/rosa_delauro"
		    }, {
		        "name": "Joe Courtney",
		        "url": "http://www.phoneyourrep.com/reps/joe_courtney"
		    }, {
		        "name": "John Larson",
		        "url": "http://www.phoneyourrep.com/reps/john_larson"
		    }, {
		        "name": "Christopher Murphy",
		        "url": "http://www.phoneyourrep.com/reps/christopher_murphy"
		    }, {
		        "name": "James Himes",
		        "url": "http://www.phoneyourrep.com/reps/james_himes"
		    }, {
		        "name": "Richard Blumenthal",
		        "url": "http://www.phoneyourrep.com/reps/richard_blumenthal"
		    }, {
		        "name": "Elizabeth Esty",
		        "url": "http://www.phoneyourrep.com/reps/elizabeth_esty"
		    }]
		}, {
		    "label": "OR",
		    "data": [{
		        "name": "Earl Blumenauer",
		        "url": "http://www.phoneyourrep.com/reps/earl_blumenauer"
		    }, {
		        "name": "Kurt Schrader",
		        "url": "http://www.phoneyourrep.com/reps/kurt_schrader"
		    }, {
		        "name": "Ron Wyden",
		        "url": "http://www.phoneyourrep.com/reps/ron_wyden"
		    }, {
		        "name": "Suzanne Bonamici",
		        "url": "http://www.phoneyourrep.com/reps/suzanne_bonamici"
		    }, {
		        "name": "Jeff Merkley",
		        "url": "http://www.phoneyourrep.com/reps/jeff_merkley"
		    }, {
		        "name": "Greg Walden",
		        "url": "http://www.phoneyourrep.com/reps/greg_walden"
		    }, {
		        "name": "Peter DeFazio",
		        "url": "http://www.phoneyourrep.com/reps/peter_defazio"
		    }]
		}, {
		    "label": "IA",
		    "data": [{
		        "name": "Steve King",
		        "url": "http://www.phoneyourrep.com/reps/steve_king"
		    }, {
		        "name": "Charles Grassley",
		        "url": "http://www.phoneyourrep.com/reps/charles_grassley"
		    }, {
		        "name": "David Loebsack",
		        "url": "http://www.phoneyourrep.com/reps/david_loebsack"
		    }, {
		        "name": "Rod Blum",
		        "url": "http://www.phoneyourrep.com/reps/rod_blum"
		    }, {
		        "name": "Joni Ernst",
		        "url": "http://www.phoneyourrep.com/reps/joni_ernst"
		    }, {
		        "name": "David Young",
		        "url": "http://www.phoneyourrep.com/reps/david_young"
		    }]
		}, {
		    "label": "WI",
		    "data": [{
		        "name": "Ron Kind",
		        "url": "http://www.phoneyourrep.com/reps/ron_kind"
		    }, {
		        "name": "Mark Pocan",
		        "url": "http://www.phoneyourrep.com/reps/mark_pocan"
		    }, {
		        "name": "Mike Gallagher",
		        "url": "http://www.phoneyourrep.com/reps/mike_gallagher"
		    }, {
		        "name": "F. Sensenbrenner",
		        "url": "http://www.phoneyourrep.com/reps/f._sensenbrenner"
		    }, {
		        "name": "Gwen Moore",
		        "url": "http://www.phoneyourrep.com/reps/gwen_moore"
		    }, {
		        "name": "Sean Duffy",
		        "url": "http://www.phoneyourrep.com/reps/sean_duffy"
		    }, {
		        "name": "Glenn Grothman",
		        "url": "http://www.phoneyourrep.com/reps/glenn_grothman"
		    }, {
		        "name": "Tammy Baldwin",
		        "url": "http://www.phoneyourrep.com/reps/tammy_baldwin"
		    }, {
		        "name": "Paul Ryan",
		        "url": "http://www.phoneyourrep.com/reps/paul_ryan"
		    }, {
		        "name": "Ron Johnson",
		        "url": "http://www.phoneyourrep.com/reps/ron_johnson"
		    }]
		}, {
		    "label": "HI",
		    "data": [{
		        "name": "Mazie Hirono",
		        "url": "http://www.phoneyourrep.com/reps/mazie_hirono"
		    }, {
		        "name": "Brian Schatz",
		        "url": "http://www.phoneyourrep.com/reps/brian_schatz"
		    }, {
		        "name": "Tulsi Gabbard",
		        "url": "http://www.phoneyourrep.com/reps/tulsi_gabbard"
		    }, {
		        "name": "Colleen Hanabusa",
		        "url": "http://www.phoneyourrep.com/reps/colleen_hanabusa"
		    }]
		}, {
		    "label": "VA",
		    "data": [{
		        "name": "H. Griffith",
		        "url": "http://www.phoneyourrep.com/reps/h._griffith"
		    }, {
		        "name": "David Brat",
		        "url": "http://www.phoneyourrep.com/reps/david_brat"
		    }, {
		        "name": "Barbara Comstock",
		        "url": "http://www.phoneyourrep.com/reps/barbara_comstock"
		    }, {
		        "name": "Donald Beyer",
		        "url": "http://www.phoneyourrep.com/reps/donald_beyer"
		    }, {
		        "name": "Scott Taylor",
		        "url": "http://www.phoneyourrep.com/reps/scott_taylor"
		    }, {
		        "name": "A. McEachin",
		        "url": "http://www.phoneyourrep.com/reps/a._mceachin"
		    }, {
		        "name": "Mark Warner",
		        "url": "http://www.phoneyourrep.com/reps/mark_warner"
		    }, {
		        "name": "Bob Goodlatte",
		        "url": "http://www.phoneyourrep.com/reps/bob_goodlatte"
		    }, {
		        "name": "Gerald Connolly",
		        "url": "http://www.phoneyourrep.com/reps/gerald_connolly"
		    }, {
		        "name": "Timothy Kaine",
		        "url": "http://www.phoneyourrep.com/reps/timothy_kaine"
		    }, {
		        "name": "Robert Scott",
		        "url": "http://www.phoneyourrep.com/reps/robert_scott"
		    }, {
		        "name": "Thomas Garrett",
		        "url": "http://www.phoneyourrep.com/reps/thomas_garrett"
		    }, {
		        "name": "Robert Wittman",
		        "url": "http://www.phoneyourrep.com/reps/robert_wittman"
		    }]
		}, {
		    "label": "KS",
		    "data": [{
		        "name": "Jerry Moran",
		        "url": "http://www.phoneyourrep.com/reps/jerry_moran"
		    }, {
		        "name": "Pat Roberts",
		        "url": "http://www.phoneyourrep.com/reps/pat_roberts"
		    }, {
		        "name": "Roger Marshall",
		        "url": "http://www.phoneyourrep.com/reps/roger_marshall"
		    }, {
		        "name": "Mike Pompeo",
		        "url": "http://www.phoneyourrep.com/reps/mike_pompeo"
		    }, {
		        "name": "Lynn Jenkins",
		        "url": "http://www.phoneyourrep.com/reps/lynn_jenkins"
		    }, {
		        "name": "Kevin Yoder",
		        "url": "http://www.phoneyourrep.com/reps/kevin_yoder"
		    }]
		}, {
		    "label": "NJ",
		    "data": [{
		        "name": "Leonard Lance",
		        "url": "http://www.phoneyourrep.com/reps/leonard_lance"
		    }, {
		        "name": "Frank LoBiondo",
		        "url": "http://www.phoneyourrep.com/reps/frank_lobiondo"
		    }, {
		        "name": "Bill Pascrell",
		        "url": "http://www.phoneyourrep.com/reps/bill_pascrell"
		    }, {
		        "name": "Frank Pallone",
		        "url": "http://www.phoneyourrep.com/reps/frank_pallone"
		    }, {
		        "name": "Christopher Smith",
		        "url": "http://www.phoneyourrep.com/reps/christopher_smith"
		    }, {
		        "name": "Donald Payne",
		        "url": "http://www.phoneyourrep.com/reps/donald_payne"
		    }, {
		        "name": "Tom MacArthur",
		        "url": "http://www.phoneyourrep.com/reps/tom_macarthur"
		    }, {
		        "name": "Josh Gottheimer",
		        "url": "http://www.phoneyourrep.com/reps/josh_gottheimer"
		    }, {
		        "name": "Robert Menéndez",
		        "url": "http://www.phoneyourrep.com/reps/robert_menéndez"
		    }, {
		        "name": "Rodney Frelinghuysen",
		        "url": "http://www.phoneyourrep.com/reps/rodney_frelinghuysen"
		    }, {
		        "name": "Cory Booker",
		        "url": "http://www.phoneyourrep.com/reps/cory_booker"
		    }, {
		        "name": "Bonnie Watson Coleman",
		        "url": "http://www.phoneyourrep.com/reps/bonnie_watson coleman"
		    }, {
		        "name": "Donald Norcross",
		        "url": "http://www.phoneyourrep.com/reps/donald_norcross"
		    }, {
		        "name": "Albio Sires",
		        "url": "http://www.phoneyourrep.com/reps/albio_sires"
		    }]
		}, {
		    "label": "MA",
		    "data": [{
		        "name": "Stephen Lynch",
		        "url": "http://www.phoneyourrep.com/reps/stephen_lynch"
		    }, {
		        "name": "Richard Neal",
		        "url": "http://www.phoneyourrep.com/reps/richard_neal"
		    }, {
		        "name": "Joseph Kennedy",
		        "url": "http://www.phoneyourrep.com/reps/joseph_kennedy"
		    }, {
		        "name": "Katherine Clark",
		        "url": "http://www.phoneyourrep.com/reps/katherine_clark"
		    }, {
		        "name": "James McGovern",
		        "url": "http://www.phoneyourrep.com/reps/james_mcgovern"
		    }, {
		        "name": "Michael Capuano",
		        "url": "http://www.phoneyourrep.com/reps/michael_capuano"
		    }, {
		        "name": "Elizabeth Warren",
		        "url": "http://www.phoneyourrep.com/reps/elizabeth_warren"
		    }, {
		        "name": "William Keating",
		        "url": "http://www.phoneyourrep.com/reps/william_keating"
		    }, {
		        "name": "Niki Tsongas",
		        "url": "http://www.phoneyourrep.com/reps/niki_tsongas"
		    }, {
		        "name": "Seth Moulton",
		        "url": "http://www.phoneyourrep.com/reps/seth_moulton"
		    }, {
		        "name": "Edward Markey",
		        "url": "http://www.phoneyourrep.com/reps/edward_markey"
		    }]
		}, {
		    "label": "VT",
		    "data": [{
		        "name": "Patrick Leahy",
		        "url": "http://www.phoneyourrep.com/reps/patrick_leahy"
		    }, {
		        "name": "Peter Welch",
		        "url": "http://www.phoneyourrep.com/reps/peter_welch"
		    }, {
		        "name": "Bernard Sanders",
		        "url": "http://www.phoneyourrep.com/reps/bernard_sanders"
		    }]
		}, {
		    "label": "ME",
		    "data": [{
		        "name": "Chellie Pingree",
		        "url": "http://www.phoneyourrep.com/reps/chellie_pingree"
		    }, {
		        "name": "Bruce Poliquin",
		        "url": "http://www.phoneyourrep.com/reps/bruce_poliquin"
		    }, {
		        "name": "Angus King",
		        "url": "http://www.phoneyourrep.com/reps/angus_king"
		    }, {
		        "name": "Susan Collins",
		        "url": "http://www.phoneyourrep.com/reps/susan_collins"
		    }]
		}, {
		    "label": "DC",
		    "data": [{
		        "name": "Eleanor Norton",
		        "url": "http://www.phoneyourrep.com/reps/eleanor_norton"
		    }]
		}, {
		    "label": "SD",
		    "data": [{
		        "name": "John Thune",
		        "url": "http://www.phoneyourrep.com/reps/john_thune"
		    }, {
		        "name": "Kristi Noem",
		        "url": "http://www.phoneyourrep.com/reps/kristi_noem"
		    }, {
		        "name": "Mike Rounds",
		        "url": "http://www.phoneyourrep.com/reps/mike_rounds"
		    }]
		}, {
		    "label": "NE",
		    "data": [{
		        "name": "Adrian Smith",
		        "url": "http://www.phoneyourrep.com/reps/adrian_smith"
		    }, {
		        "name": "Don Bacon",
		        "url": "http://www.phoneyourrep.com/reps/don_bacon"
		    }, {
		        "name": "Jeff Fortenberry",
		        "url": "http://www.phoneyourrep.com/reps/jeff_fortenberry"
		    }, {
		        "name": "Benjamin Sasse",
		        "url": "http://www.phoneyourrep.com/reps/benjamin_sasse"
		    }, {
		        "name": "Deb Fischer",
		        "url": "http://www.phoneyourrep.com/reps/deb_fischer"
		    }]
		}, {
		    "label": "ID",
		    "data": [{
		        "name": "Michael Simpson",
		        "url": "http://www.phoneyourrep.com/reps/michael_simpson"
		    }, {
		        "name": "Raúl Labrador",
		        "url": "http://www.phoneyourrep.com/reps/raúl_labrador"
		    }, {
		        "name": "Michael Crapo",
		        "url": "http://www.phoneyourrep.com/reps/michael_crapo"
		    }, {
		        "name": "James Risch",
		        "url": "http://www.phoneyourrep.com/reps/james_risch"
		    }]
		}, {
		    "label": "AK",
		    "data": [{
		        "name": "Don Young",
		        "url": "http://www.phoneyourrep.com/reps/don_young"
		    }, {
		        "name": "Dan Sullivan",
		        "url": "http://www.phoneyourrep.com/reps/dan_sullivan"
		    }, {
		        "name": "Lisa Murkowski",
		        "url": "http://www.phoneyourrep.com/reps/lisa_murkowski"
		    }]
		}, {
		    "label": "NV",
		    "data": [{
		        "name": "Dina Titus",
		        "url": "http://www.phoneyourrep.com/reps/dina_titus"
		    }, {
		        "name": "Catherine Cortez Masto",
		        "url": "http://www.phoneyourrep.com/reps/catherine_cortez masto"
		    }, {
		        "name": "Jacky Rosen",
		        "url": "http://www.phoneyourrep.com/reps/jacky_rosen"
		    }, {
		        "name": "Dean Heller",
		        "url": "http://www.phoneyourrep.com/reps/dean_heller"
		    }, {
		        "name": "Ruben Kihuen",
		        "url": "http://www.phoneyourrep.com/reps/ruben_kihuen"
		    }, {
		        "name": "Mark Amodei",
		        "url": "http://www.phoneyourrep.com/reps/mark_amodei"
		    }]
		}, {
		    "label": "UT",
		    "data": [{
		        "name": "Chris Stewart",
		        "url": "http://www.phoneyourrep.com/reps/chris_stewart"
		    }, {
		        "name": "Orrin Hatch",
		        "url": "http://www.phoneyourrep.com/reps/orrin_hatch"
		    }, {
		        "name": "Mia Love",
		        "url": "http://www.phoneyourrep.com/reps/mia_love"
		    }, {
		        "name": "Jason Chaffetz",
		        "url": "http://www.phoneyourrep.com/reps/jason_chaffetz"
		    }, {
		        "name": "Rob Bishop",
		        "url": "http://www.phoneyourrep.com/reps/rob_bishop"
		    }, {
		        "name": "Mike Lee",
		        "url": "http://www.phoneyourrep.com/reps/mike_lee"
		    }]
		}, {
		    "label": "ND",
		    "data": [{
		        "name": "Heidi Heitkamp",
		        "url": "http://www.phoneyourrep.com/reps/heidi_heitkamp"
		    }, {
		        "name": "John Hoeven",
		        "url": "http://www.phoneyourrep.com/reps/john_hoeven"
		    }, {
		        "name": "Kevin Cramer",
		        "url": "http://www.phoneyourrep.com/reps/kevin_cramer"
		    }]
		}, {
		    "label": "NH",
		    "data": [{
		        "name": "Margaret Hassan",
		        "url": "http://www.phoneyourrep.com/reps/margaret_hassan"
		    }, {
		        "name": "Carol Shea-Porter",
		        "url": "http://www.phoneyourrep.com/reps/carol_shea-porter"
		    }, {
		        "name": "Jeanne Shaheen",
		        "url": "http://www.phoneyourrep.com/reps/jeanne_shaheen"
		    }, {
		        "name": "Ann Kuster",
		        "url": "http://www.phoneyourrep.com/reps/ann_kuster"
		    }]
		}, {
		    "label": "MS",
		    "data": [{
		        "name": "Trent Kelly",
		        "url": "http://www.phoneyourrep.com/reps/trent_kelly"
		    }, {
		        "name": "Roger Wicker",
		        "url": "http://www.phoneyourrep.com/reps/roger_wicker"
		    }, {
		        "name": "Bennie Thompson",
		        "url": "http://www.phoneyourrep.com/reps/bennie_thompson"
		    }, {
		        "name": "Gregg Harper",
		        "url": "http://www.phoneyourrep.com/reps/gregg_harper"
		    }, {
		        "name": "Steven Palazzo",
		        "url": "http://www.phoneyourrep.com/reps/steven_palazzo"
		    }, {
		        "name": "Thad Cochran",
		        "url": "http://www.phoneyourrep.com/reps/thad_cochran"
		    }]
		}, {
		    "label": "DE",
		    "data": [{
		        "name": "Lisa Blunt Rochester",
		        "url": "http://www.phoneyourrep.com/reps/lisa_blunt rochester"
		    }, {
		        "name": "Chris Coons",
		        "url": "http://www.phoneyourrep.com/reps/chris_coons"
		    }, {
		        "name": "Thomas Carper",
		        "url": "http://www.phoneyourrep.com/reps/thomas_carper"
		    }]
		}, {
		    "label": "PR",
		    "data": [{
		        "name": "Jenniffer González-Colón",
		        "url": "http://www.phoneyourrep.com/reps/jenniffer_gonzález-colón"
		    }]
		}, {
		    "label": "MP",
		    "data": [{
		        "name": "Gregorio Sablan",
		        "url": "http://www.phoneyourrep.com/reps/gregorio_sablan"
		    }]
		}, {
		    "label": "AS",
		    "data": [{
		        "name": "Aumua Amata",
		        "url": "http://www.phoneyourrep.com/reps/aumua_amata"
		    }]
		}, {
		    "label": "VI",
		    "data": [{
		        "name": "Stacey Plaskett",
		        "url": "http://www.phoneyourrep.com/reps/stacey_plaskett"
		    }]
	}]

	var config = {
		"el": "#g-container",
		"data": data,
		"break": 640
	};

	var selected = null;


	d3.select(config.el).append("div").attr("class", "row").append("h1").attr("id", "phone-intro").text("Click your state to view your reps")

	var tooltip = d3.select(config.el).append("div").attr("id", "tip").attr("class", "row")

	var map = new Fifty_graphs(config);



	map.graph = function(state_data, g, vars){
		var width = vars.g_width
		var id = g.attr("id")


		g.append("rect")
			.attr("width", width)
			.attr("height", width)
			.attr("fill", function(){
				if(id == selected){
					return "#6e4f96";
				}
				return "#967BBA";
			})
			.attr("stroke-width", function(){
				if(id == selected){
					return "3px";
				}
				return "1px";
			})
			.attr("stroke", function(){
				if(id == selected){
					return "#555";
				}
				return "#ddd";
			})

		g.append("text").attr("x", (width / 2)).attr("y", 20).style("text-anchor", "middle").style("vertical-align", "center").style("font-family", "sans-serif").style("fill", "#ddd").text(id)

		g.on("click", function(){
			tooltip.html('');

			var id = d3.select(this).attr("id")
			tooltip.append("h1").attr("class","tooltip-header").text("Congresmembers of "+ id + ":")

			var list = tooltip.append("ul").attr("class","tooltip-list")
			list.selectAll("li").data(state_data).enter().append("li").append("a")
				.text(function(d){
					return d.name;
				}).attr("href", function(d){
					return d.url;
				})
			list.append("div").style("clear", "both")

			for(var i = 0; i < data.length; i++){
				if(data[i].selected){
					data[i].selected = false;
				}
				if(id == data[i].label){
					data[i].selected = true;
				}
			}
			selected = id;
			map.updateData(data);
			map.redraw();

		})
	}

	map.draw()

}
