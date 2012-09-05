$(function() {

    $('.b-form-radio').bem('b-form-radio').on('change', function(e, data) {
        $('#radio_current').text(data.current.text());
        $('#radio_prev').text(data.prev.text());
        window.console && console.log(e, data);
    });

});
