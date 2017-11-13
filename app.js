	var boton = document.getElemenntById('btn');
	boton.addEventListener('click',function({
	

  //obtener elementos necesarios
   var tweet = document.getElementById('msg').value;
	//obtiene el contenido del textarea  
   document.getElementById('msg').value ='';
   	//limpiar el textarea
   var cont = document.getElementById('postbox');
	//definir el contenedor en una variable.
	
	

  //crear elementos necesarios
  var tweetBox = document.createElement('div');
  //div que contiene el comentario
  var elementTweet = document.createElement('p');
  //Crear el elemento del comentario 

  //crear nodo de texto
   nodoTweet = document.createTextNode('tweet')

  //ordenar elementos
  elementTweet.appendChild('nodotweet');
  //agrego el contenido de la caja de texto al elemento p
  tweetBox.appendChild('elementTweet');
  //a la caja de texto le agrego el tweet.
  tweetBox.appendChild('nodotweet');
  //agregando el comentario a su caja personal.
  cont.appendChild('tweetBox');
  //agregando la caja al contenedor de tweets.


  //esto debería no permitir que el botón funcione si no hay nada dentro del text area. PEro mi botón no funciona ._.
  if(tweets.length == 0 || tweets == null){
    boton.disabled =true;
  } else{
    boton.disabled =false;
  }

})


(function(){
var msg = document.getElementById("msg");
  var counter = document.getElementById('char-left');
  var counterbox= document.getElementsByClassName("counterbox");
  var maxChar = 140;
  var blue = 20;    
  var red = 10;
 counter.innerHTML = maxChar;

 msg.onkeydown = function(){
        setTimeout(function(){
counter.innerHTML = maxChar - msg.value.length;
//cuenta mientras está presionada (abajo) la tecla.
if (msg.value.length <=20){
   counter.
}


}









