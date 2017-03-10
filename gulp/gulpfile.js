var fs = require('fs')
var reps = require('./reps.json')

var array = [];
for (var i = 0; i < reps.length; i++) {
	var obj = {};
	var repeat = false;

	var rep = reps[i]
	var folderName = rep.first.toLowerCase() + '_' + rep.last.toLowerCase()
	var url = "http://www.phoneyourrep.com/reps/" + folderName
	var state = rep.state.abbr

	for(var j = 0; j < array.length; j++){
		if(state == array[j].label){
			array[j].data.push({
				name: rep.first + " " + rep.last,
				url: url
			})
			repeat = true;
		}
	}
	if(!repeat){
		obj.label = state;
		obj.data = [{
			name: rep.first + " " + rep.last,
			url: url
		}];
		console.log(obj);
		array.push(obj);
	}


}

fs.writeFile('reps_sorted.json', JSON.stringify(array) , 'utf-8')
