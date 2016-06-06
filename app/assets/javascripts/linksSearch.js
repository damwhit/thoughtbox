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
                            '</h6></td><td><h3><a class="change btn btn-warning" data-id='
                            + link.id +
                           '>'
                            + 'mark as' +
                            '</a></h3></td><td><h3><a class="edit btn btn-primary" data-id='
                            + link.id + '>'
                            + 'edit' +
                            '</a></h3></td><td></tr>'
                          )
      })
    });
  })
});
