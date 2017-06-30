for (var i = 0; i < data.length; i++) {
	$(".item").append("<div class='names' id='user" + data[i].id + "'><h1>" + data[i].name + "</h1></div>");
		for (var j = 0; j < data[i].photos.length; j++) {
			$("#user" + data[i].id).append("<div><img src='" + data[i].photos[j].link + " 'width='250px' heigth='auto'> </div>");
		}	
	
}


