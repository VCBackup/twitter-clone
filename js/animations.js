$(document).ready(function(){
    $('.tweet-compose').on('click', function(){
        $('.tweet-compose').css('height', '5em');
        $('#tweet-controls').show();  
    })
        var jsTweetCompose = document.getElementById('tweet-compose');
        var jsCharCount = document.getElementById('char-count');
        jsCharCount = 140;
    $('.tweet-compose').keydown(function(){
        return jsCharCount.value--;        
    })
    
    $('.tweet').hover(function(){
        $('.tweet-actions').fadeIn( 500 );

    }, function(){
        $('.tweet-actions').fadeOut( 100 );

    })









})