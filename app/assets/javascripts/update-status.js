$(document).on('click', '.change', function(event){
  event.preventDefault();

  var linkId = $(this).data('id')
  var statusHeading = $(this).parent('td').siblings('.status').children('h6')

  var statusText = $(this).parent('td').siblings('.status').children('h6').text()

  var statusChange = {unread: "read", read: "unread"}
  var statusParam = {unread: true, read: false}
  statusHeading.empty().html(statusChange[statusText])

  $.ajax({
    url: '/api/v1/links/' + linkId,
    method: "PATCH",
    dataType: 'json',
    data: { quality: statusParam[statusText]
    }
  }).success(function() {
    console.log('updated')
  })
});
