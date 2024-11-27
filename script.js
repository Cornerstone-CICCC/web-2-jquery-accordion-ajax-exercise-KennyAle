$(function() {
  $('.accordion-header').on('click', function() {
    $(this).next('.accordion-content').slideToggle('fast',
      function() {
        $(this).siblings('.accordion-content').hide('fast')
      }
    )
  })
  $('.todos button').on('click', function() { 
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(response) {
        const data = response.todos
        console.log(data)
        data.forEach(todo => {
          $('.todos ul').append(`<li>${todo.todo}</li>`)
        });
      },
      error: function(error) {
        console.eror(error)
      }
    })
  })
})


