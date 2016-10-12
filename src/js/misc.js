module.exports = {
  	loadScript:function(src, type, id, onload){
		var script  = document.createElement('script')
		script.type = type ? type : 'text/javascript'
		script.src = src
		if(id) script.id = 'google-api-client'
		if(onload) script.onload = callback
		document.body.appendChild(script)
	}
}
