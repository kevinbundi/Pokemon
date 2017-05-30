$(document).ready(function(){
	for(var i=1;i<=151;i++){
		$('#left').append("<img id='"+i+"'src='http://pokeapi.co/media/img/"+i+".png'>")
	}
	$(document).on('click','img',function(){
		var id = this.id
		$.get('http://pokeapi.co/api/v1/pokemon/'+id,function(res){
			// console.log(res)
			html_str = ""
			html_str += "<h1>" + res.sprites[0].name + "</h1>"
			html_str += "<img src='http://pokeapi.co/media/img/"+id+".png'>"
			html_str += "<h3>Types</h3>"
			html_str += "<ul>"
			for(var i=0; i<res.types.length;i++){
				html_str += "<li>" + res.types[i].name + "</li>"
			}
			html_str += "</ul>"
			html_str += "<h3>Height</h3>"
			html_str += "<p>" + res.height + "</p>"
			html_str += "<h3>Weight</h3>"
			html_str += "<p>" + res.weight + "</p>"
			$('#right').html(html_str)
		},"json")

	})
})