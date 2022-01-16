var compressor = require('yuicompressor');
var fs = require('fs');
var path = require('path');

var pages = ["Google_files/",
			"YouTube_files/",
			"Manipal_files/",
			"Pinterest_files/"]

while(pages.length > 0){
	var page = pages.pop();
	var path = "./pages/"+page;
	var dir = "./pages/compressed/"+page;
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
	var files = fs.readdirSync(path);
	for( var i in files){
		var file = files[i];
		if(/\.js$/.test(file) || /\.js.download$/.test(file)){
			compressScript(path+file,dir+file,'js');
		}else if(/\.css$/.test(file)){
			compressScript(path+file,dir+file,'css');
		}else if(fs.lstatSync(path+file).isDirectory()){
			pages.push(page+file+"/");
		}
	}
}

function compressScript(file,outfile,type){
	compressor.compress( file , {
		//Compressor Options:
		charset: 'utf8',
		type: type+'',
		nomunge: true,
		'line-break': 80
	}, function(er, data, extra) {
	
		if (er){
			console.log(outfile,' ... Compression Failed!');
		}else{
			fs.writeFile(outfile, data, function (err) {
				if (err) 
					console.log(outfile,' ...Not Saved!');;
				console.log(outfile,' ...Saved!');
			});
		}
    
		//if(extra) console.log(extra)
	});
}