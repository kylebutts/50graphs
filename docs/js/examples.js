var examples = {};
examples.wsj = function(){
	function random() {
		return [(Math.random() * 0.2) - 0.1, (Math.random() * 0.2) - 0.1, (Math.random() * 0.2) - 0.1, (Math.random() * 0.2) - 0.1, (Math.random() * 0.2) - 0.1]
	}
	var data = [{
		"data": [random(), random(), random(), random()],
		"label": "AK"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "ME"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "VT"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NH"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "WA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "ID"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MT"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "ND"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MN"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MI"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NY"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "RI"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "OR"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "UT"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "WY"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "SD"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "IA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "WI"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "IN"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "OH"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "PA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NJ"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "CT"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "CA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NV"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "CO"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NE"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MO"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "IL"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "KY"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "WV"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "VA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MD"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "DE"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "AZ"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NM"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "KS"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "AR"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "TN"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "NC"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "SC"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "DC"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "OK"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "LA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "MS"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "AL"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "GA"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "HI"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "TX"
	}, {
		"data": [random(), random(), random(), random()],
		"label": "FL"
	}];



	var config = {
		"el": "#g-container",
		"data": data,
		"break": 640
	};
	var map = new Fifty_graphs(config);

	var count = 0;
	map.graph = function(state_data, g, vars) {
		var width = vars.g_width


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

		var data = state_data[count];
		graph.selectAll("rect").data(data).enter()
			.append("rect")
			.attr("x", function(d, i) {
				return width / 5 * i;
			})
			.attr("width", width / 5)
			.attr("y", function(d, i) {
				if (d > 0) {
					return width / 2 - Math.abs(200 * d);
				} else {
					return width / 2;
				}
			})
			.attr("height", function(d, i) {
				return Math.abs(200 * d);
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
	function randomData() {
		return (Math.random() > 0.5) ? "#C81305" : "#0485A8"
	}
	var data = [{
			"data": randomData(),
			"label": "AK"
		}, {
			"data": randomData(),
			"label": "ME"
		}, {
			"data": randomData(),
			"label": "VT"
		}, {
			"data": randomData(),
			"label": "NH"
		}, {
			"data": randomData(),
			"label": "WA"
		}, {
			"data": randomData(),
			"label": "ID"
		}, {
			"data": randomData(),
			"label": "MT"
		}, {
			"data": randomData(),
			"label": "ND"
		}, {
			"data": randomData(),
			"label": "MN"
		}, {
			"data": randomData(),
			"label": "MI"
		}, {
			"data": randomData(),
			"label": "NY"
		}, {
			"data": randomData(),
			"label": "MA"
		}, {
			"data": randomData(),
			"label": "RI"
		}, {
			"data": randomData(),
			"label": "OR"
		}, {
			"data": randomData(),
			"label": "UT"
		}, {
			"data": randomData(),
			"label": "WY"
		}, {
			"data": randomData(),
			"label": "SD"
		}, {
			"data": randomData(),
			"label": "IA"
		}, {
			"data": randomData(),
			"label": "WI"
		}, {
			"data": randomData(),
			"label": "IN"
		}, {
			"data": randomData(),
			"label": "OH"
		}, {
			"data": randomData(),
			"label": "PA"
		}, {
			"data": randomData(),
			"label": "NJ"
		}, {
			"data": randomData(),
			"label": "CT"
		}, {
			"data": randomData(),
			"label": "CA"
		}, {
			"data": randomData(),
			"label": "NV"
		}, {
			"data": randomData(),
			"label": "CO"
		}, {
			"data": randomData(),
			"label": "NE"
		}, {
			"data": randomData(),
			"label": "MO"
		}, {
			"data": randomData(),
			"label": "IL"
		}, {
			"data": randomData(),
			"label": "KY"
		}, {
			"data": randomData(),
			"label": "WV"
		}, {
			"data": randomData(),
			"label": "VA"
		}, {
			"data": randomData(),
			"label": "MD"
		}, {
			"data": randomData(),
			"label": "DE"
		}, {
			"data": randomData(),
			"label": "AZ"
		}, {
			"data": randomData(),
			"label": "NM"
		}, {
			"data": randomData(),
			"label": "KS"
		}, {
			"data": randomData(),
			"label": "AR"
		}, {
			"data": randomData(),
			"label": "TN"
		}, {
			"data": randomData(),
			"label": "NC"
		}, {
			"data": randomData(),
			"label": "SC"
		}, {
			"data": randomData(),
			"label": "DC"
		}, {
			"data": randomData(),
			"label": "OK"
		}, {
			"data": randomData(),
			"label": "LA"
		}, {
			"data": randomData(),
			"label": "MS"
		}, {
			"data": randomData(),
			"label": "AL"
		}, {
			"data": randomData(),
			"label": "GA"
		}, {
			"data": randomData(),
			"label": "HI"
		}, {
			"data": randomData(),
			"label": "TX"
		}, {
			"data": randomData(),
			"label": "FL"
		}];

	var config = {
		"el": "#g-container",
		"data": data
	};
	var map = new Fifty_graphs(config);

	map.graph = function(state_data, g) {
		var id = g.attr("id")

		g.append("rect")
			.attr("width", 80)
			.attr("height", 80)
			.attr("fill", function(){
				return state_data
			})
			.attr("stroke-weight", "1px")
			.attr("stroke", "#ddd")

		g.append("text").attr("x", 40).attr("y", 20).style("text-anchor", "middle").style("vertical-align", "center").style("font-family", "sans-serif").style("color","#333").text(id)
	}
	map.draw();
}
