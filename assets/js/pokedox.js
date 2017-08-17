$(document).ready(function(){
	for(var i=1;i<=151;i++){
		$('#left').append("<img class='img-fluid' data-toggle='modal' data-target='#myModal' id='"+i+"'src='http://pokeapi.co/media/img/"+i+".png'>")
	}
	$(document).on('click','img',function(){
		var id = this.id
		$.get('http://pokeapi.co/api/v1/pokemon/'+id,function(res){
			// console.log(res)
			html_1 = ""
			html_1 += "<img src='http://pokeapi.co/media/img/"+id+".png'>"
			html_1 += "<h2>" + res.sprites[0].name + "</h2>"
			$('#poke-1').html(html_1)

			html_2 = ""
			html_2 += "<h4>Types</h4>"
			html_2 += "<ul>"
			for(var i=0; i<res.types.length;i++){
				html_2 += "<li>" + res.types[i].name + "</li>"
			}
			$('#poke-2').html(html_2)

			html_str = ""
			html_str += "</ul>"
			html_str += "<h4>Height</h4>"
			html_str += "<p>" + res.height + "</p>"
			html_str += "<h4>Weight</h4>"
			html_str += "<p>" + res.weight + "</p>"
			$('#poke-3').html(html_str)
		},"json")
	})
}) 