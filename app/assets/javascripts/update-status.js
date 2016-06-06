$(document).on('click', '.change', function(event){
  event.preventDefault();
  var button = $(this)

  var linkId = button.data('id')
  var statusHeading = button.parent('td').siblings('.status').children('h6')

  var statusText = button.parent('td').siblings('.status').children('h6').text()

  var statusChange = {unread: "read", read: "unread"}
  var buttonChange = {read: "mark as read", unread: "mark as unread"}
  var statusParam = {unread: true, read: false}

  statusHeading.empty().html(statusChange[statusText])
  button.empty().html(buttonChange[statusText])

  $.ajax({
    url: '/api/v1/links/' + linkId,
    method: "PATCH",
    dataType: 'json',
    data: { read: statusParam[statusText]
    }
  }).success(function() {
    console.log('updated')
  })
});
