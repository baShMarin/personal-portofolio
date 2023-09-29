$(document).ready(function(){
	
	$(".fa-bars").click(function(){

		$("#wrapper #sidebar").toggleClass("menu-height");
	});
});
function preloader(){

	$(window).on("load", function(){

		$("#preloader").css({
			"visibility":"hidden",
			"opacity":"1",
			"transition":"3.7s"


		});
	});
}


document.addEventListener("DOMContentLoaded", function() {
	// Simulamos el tiempo de carga del video con un setTimeout (3 segundos en este ejemplo)
	setTimeout(function() {
	  hidePreloaderAndPlayVideo();
	}, 3000);
  
	// Agregamos el evento de escucha para el cursor que entra en el área del preloader
	const preloader = document.getElementById("preloader");
	preloader.addEventListener("mouseenter", function() {
	  showPreloader();
	});
  
	// Agregamos el evento de escucha para el cursor que sale del área del preloader
	preloader.addEventListener("mouseleave", function() {
	  hidePreloader();
	});
  });
  
  function showPreloader() {
	const preloader = document.getElementById("preloader");
	preloader.style.visibility = "visible";
	preloader.style.opacity = "1";
  }
  
  function hidePreloader() {
	const preloader = document.getElementById("preloader");
	preloader.style.visibility = "hidden";
	preloader.style.opacity = "0.1";
  }
  
  function hidePreloaderAndPlayVideo() {
	const preloader = document.getElementById("preloader");
	const video = document.getElementById("myVideo");
  
	// Ocultamos el preloader
	hidePreloader();
  
	// Mostramos el video
	video.style.display = "block";
  
	// Iniciamos la reproducción del video
	video.play();
  }

  