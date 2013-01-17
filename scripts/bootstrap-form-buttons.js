!function ($) {

  $(function(){

    // Create buttons for checkbox inputs
    $(window).on('load', function () {
      $('.checkbox-group, .radio-group').each(function () {
        var $group = $(this)
          , data = $group.data('group')

        $group.find('input[type="' + data + '"]').each(function () {
          var $input = $(this)
            , inputTitle = $input.parent().text()
            , inputClass = 'btn btn-' + data

          if ($input.attr('checked')) { inputClass += ' active' }

          // Build button
          $group.find('.btn-group').append('<button type="button" class="' + inputClass + '" data-value="' + $input.val() + '">' + inputTitle + '</button>')
        })
      })

    })

    // Update input status when buttons are changed
    $(document).on('click.button.data-api', '.checkbox-group button, .radio-group button', function (e) {
      var $button = $(this)
        , buttonValue = $button.data('value')
        , $group = $button.closest('.checkbox-group, .radio-group')
        , data = $group.data('group')

      if (data == 'checkbox') {
        // Add or remove active status
        if ($button.hasClass('active')) {
          $group.find('input[value="' + buttonValue + '"]').prop('checked', false)
        } else {
          $group.find('input[value="' + buttonValue + '"]').prop('checked', true)
        }
      }
      else if (data == 'radio') {
        $group.find('input[value="' + buttonValue + '"]').prop('checked', true)
      }
    })


  })

}(window.jQuery)
