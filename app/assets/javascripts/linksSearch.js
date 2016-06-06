$(document).ready(function(){

  $( "#searchLinks" ).submit(function( event ) {
    event.preventDefault()

  });

  $('#search').on('keyup', function(event){
    var searchTerm = $(this).val()

    $.getJSON( "/api/v1/links.json?search=" + searchTerm, function( links ) {
        $('#tbody').empty()
      links.forEach(function(link) {
        var readStatus = {true: 'read', false: 'unread'}
        var readButton = {true: 'mark as unread', false: 'mark as read'}
        $('#tbody').append( '<tr><td><h3 class="edit name" data-id='
                            + link.id + '>'
                            + link.name +
                            '</h3></td><td><h6 class="edit url" data-id='
                            + link.id + '>'
                            + link.url +
                            '</h3></td><td class="status"><h6>'
                            + readStatus[link.read] +
                            '</h6></td><td><h3><a class="change btn btn-warning" data-id='
                            + link.id +
                           '>'
                            + readButton[link.read] +
                            '</a></h3></td><td><h3><a class="edit btn btn-primary" data-id='
                            + link.id + '>'
                            + 'edit' +
                            '</a></h3></td><td></tr>'
                          )
      })
    });
  })
});
