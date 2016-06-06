$(document).ready(function(){

  $( "#searchLinks" ).submit(function( event ) {
    event.preventDefault()

  });

  $('#search').on('keyup', function(event){
    var searchTerm = $(this).val()

    $.getJSON( "/api/v1/links.json?search=" + searchTerm, function( links ) {
        $('#tbody').empty()
      links.forEach(function(link) {
        $('#tbody').append( '<tr><td><h3 class="edit name" data-id='
                            + link.id + '>'
                            + link.name +
                            '</h3></td><td><h6 class="edit url" data-id='
                            + link.id + '>'
                            + link.url +
                            '</h3></td><td class="status"><h6>'
                            + link.read +
                            '</h3></td><td><h3><a class="delete btn btn-danger" data-id='
                            + link.id +
                            ' id=delete' + link.id + '>'
                            + 'delete' +
                            '</a></h3></td><td><h3><a class="change btn btn-success" data-id='
                            + link.id +
                            ' data-q=' + link.quality +
                            ' data-change=up' +
                            ' id=up' + link.id + '>'
                            + 'thumbs up' +
                            '</a></h3></td><td><h3><a class="change btn btn-warning" data-id='
                            + link.id +
                            ' data-q=' + link.quality +
                            ' data-change=down' +
                            ' id=down' + link.id + '>'
                            + 'thumbs down' +
                            '</a></h3></td></tr>'
                          )
      })
    });
  })
});
