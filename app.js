
var comment = document.getElementById('msg').value;

document.getElementById('msg').value=''; /*limpia el textarea*/

var padre = document.getElemenntById('contenedor');
var newComments = document.createElement('div');
var parrafo = document.createElement('p');
var nodo = document.createTextNode(comment);




var boton = document.getElemenntById('btn');
boton.addEventListener('click',function({
})




/*
var comment -> mensaje de text area
var conten -> se refiere al div 
contenedor de  los futuros mensajes
(padre)
var btn -> botón 
var 
*/   

function addComment(){
//crear checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	//creamos icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);
}

if(comment.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}









