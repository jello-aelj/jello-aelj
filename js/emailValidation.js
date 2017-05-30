


// $('#someForm').on('submit', function(e) {
//         e.preventDefault();

function submitEmail(){
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#comments').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'http://formspree.io/alex.stelzig@hotmail.fr',
            method:'POST',
            data: {message: "hello!"},
            dataType:"json",
            success:function() {
                console.log('success'); 
                // $('#formBlock').hide();
                // $('#thankyouBlock').show();
            }   

        });     
        
    };

