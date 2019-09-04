$(document).ready(function()
  {
  $('#menu_crear').hide();
  $('#menu_buscar').hide();
  $('#menu_jugar').hide();
  $('#volver').hide();
  $("#crear").on( "click", function() { 
    $('#login').hide();
    $('#menu_crear').toggle("slow");
    $('#volver').toggle("slow");
     });
  $("#buscar").on( "click", function() {
    $('#login').hide();
    $('#menu_buscar').toggle("slow");
    $('#volver').toggle("slow");
    $('#dtBasicExample').DataTable({
    "searching": true // false to disable search (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
     });
  $("#jugar").on( "click", function() {
    $('#login').hide();
    $('#menu_jugar').toggle("slow");
    $('#volver').toggle("slow");
     });
  $("#volver").on( "click", function() {
    $('#login').toggle("slow");
    $('#menu_crear').hide();
    $('#menu_buscar').hide();
    $('#menu_jugar').hide();
    $('#volver').hide();
     });
  });