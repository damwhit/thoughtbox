$(document).on('click', '.filter', function(event) {

  var button = $(this)
  var status = button.data('status')

  statusValue = {read: true, unread: false}
  $.getJSON( "/api/v1/links.json?status=" + statusValue[status], function( links ) {
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
                          '</h6></td><td><a class="change btn btn-warning" data-id='
                          + link.id +
                         '>'
                          + readButton[link.read] +
                          '</a></td><td><h3><a class="edit btn btn-primary" data-id='
                          + link.id + '>'
                          + 'edit' +
                          '</a></h3></td><td></tr>'
                        )
    })
  });
});
