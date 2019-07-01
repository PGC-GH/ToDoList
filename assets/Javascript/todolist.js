/*  Si funciona, cambiá el alert("probando") por un $(this).toggleClass("completado") . Esto agrega la clase "completado" al elemento que disparó el evento (this), es decir el li que está siendo clickeado. Se usa toggleClass para que la tarea se marque o desmarque cada vez que se hace click. Toggle aplica la clase al elemento si no la tiene, o la saca si la tiene, alternando cada vez que se hace click. */

$("li").click(function() {
  $(this).toggleClass("completado");
});

$("span").click(function(event) {
  $(this)
    .parent()
    .fadeOut(1000, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

// Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event) {
  //filtrar para que sólo se active cuando aprietan Enter
  if (event.key == "Enter") {
    $("ul").append(
      "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +
        $(this).val() +
        "</li>"
    );
    // se borra el contenido del input
    $(this).val("");
    event.stopPropagation();
  }
});

/* / Añadir el efecto de tachado a los items completados */
$("ul").on("click", "li", function() {
  $(this).toggleClass("completado");
});
// Borrar los items completados
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$(".fa-chevron-down").click(function() {
  $("input").slideToggle();
});
