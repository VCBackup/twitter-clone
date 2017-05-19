$(document).ready(function(){
    $('.tweet-compose').on('click', function(){
        $('.tweet-compose').css('height', '5em');
        $('#tweet-controls').show();  
    })
    $('.tweet-compose').keydown(function(){
        $('#char-count').val(10);
    })










})