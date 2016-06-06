$(document).on('click', '.name', function(event) {
  $(this).attr('contentEditable', 'true');

  $(this).on('blur keydown', function(e){
    var nameText = this.textContent
    var linkId = $(this).data('id')
    var key = e.which

    if (key == 13) {
      e.preventDefault()
      $('.name').blur()
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

$(document).on('click', '.url', function(event) {
  $(this).attr('contentEditable', 'true');

  $(this).on('blur keydown', function(e){
    var urlText = this.textContent
    var linkId = $(this).data('id')
    var key = e.which

    if (key == 13) {
      e.preventDefault()
      $('.url').blur()
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
