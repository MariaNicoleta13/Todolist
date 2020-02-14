$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});
$('ul').on('click', 'span', function(event) {
    $(this)
        .parent()
        .fadeOut(500, function() {
            $(this).remove();
        });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val('');
        $('ul').append(
            '<li>' +
                "<span><img class='can' src='https://img.icons8.com/ultraviolet/40/000000/delete--v2.png'></span> " +
                toDoText +
                '</li>'
        );
    }
});

$('.plus').click(function() {
    $("input[type='text']").fadeToggle();
});
