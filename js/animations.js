$(document).ready(function(){
    $('.tweet-compose').on('click', function(){
        $('.tweet-compose').css('height', '5em');
        $('#tweet-controls').show();  
    })

    var keydownThing = function(){
        var jsCharCount = $('#char-count');
        var jsComposeText = $('.tweet-compose');
        var colorDetection = jsCharCount.html(140 - jsComposeText.val().length);
            if (colorDetection < 11){
            $('#char-count').css('color', 'red');
    }
    };

    $('.tweet-compose').keydown(function(){
        keydownThing();
    })
    $('.tweet-compose').keyup(function(){
        keydownThing();
    })
    $('.tweet-compose').keypress(function(){
        keydownThing();
    })



    $('.tweet').hover(function(){
        $('.tweet-actions').addClass('tweet-show');

    }, function(){
        $('.tweet-actions').removeClass('tweet-show');

    })


    var toggleTweet = function() {
        $(".tweet").click(function() {
            $(this).find(".hide-def").slideDown();
        });

        $(".tweet").mouseleave(function() {
            $(this).find(".hide-def").slideUp('medium');
        });
    };






})