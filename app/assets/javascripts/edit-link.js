$(document).on('click', '.edit', function(event) {

  var name = $('.name')
  name.attr('contentEditable', 'true');
  name.on('blur keydown', function(e){
    var nameText = this.textContent
    var linkId = $(this).data('id')
    var key = e.which

    if (key == 13) {
      e.preventDefault()
      $('.edit').blur()
    }

    if (key == 13 || e.type == 'blur') {

      $.ajax({
        url: '/api/v1/links/' + linkId,
        method: "PATCH",
        dataType: 'json',
        data: { name: nameText }
      }).success(function(data) {
        console.log('updated')
      })
    }
  })
});

$(document).on('click', '.edit', function(event) {

  var url = $('.url')
  url.attr('contentEditable', 'true');
  url.on('blur keydown', function(e){
    var urlText = this.textContent
    var linkId = $(this).data('id')
    var key = e.which

    if (key == 13) {
      e.preventDefault()
      $('.edit').blur()
    }

    if (key == 13 || e.type == 'blur') {

      $.ajax({
        url: '/api/v1/links/' + linkId,
        method: "PATCH",
        dataType: 'json',
        data: { url: urlText }
      }).success(function(data) {
        console.log('updated')
      })
    }
  })
});
