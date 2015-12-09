$(document).ready(function(){

    $('.skip_index').on({
        'focusin':function(){
            $(this).css({
                top:'0'
            })
        },

        'focusout':function(){

            $(this).css({
                top:'-30px'
            })
        },

        'click':function(){
            $('#content').attr('tabindex','0').focus();
            return false;
        }
    })



})
