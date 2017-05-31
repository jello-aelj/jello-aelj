


// $('#someForm').on('submit', function(e) {
//         e.preventDefault();

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function submitEmail(){
        
        //get the name field value
        var name = $('#name');
        //get the name field value
        var email = $('#email');
        //get the comments
        var comments = $('#comments');
                    
        var levelSelector = document.getElementById("level");
        var level = levelSelector.options[levelSelector.selectedIndex].value;

        //validation

        var nameEmpty = name.val().trim() == "";
        var emailEmpty = email.val().trim() == "";
        var levelEmpty = level == "";
        
        if(nameEmpty || emailEmpty || levelEmpty){

            if(nameEmpty){
                console.log("name empty");
                document.getElementById("name").style.borderColor = "red";
                document.getElementById("nameError").style.display = "unset";
            }else{
                document.getElementById("name").style.borderColor = "#CCCCCC";
                document.getElementById("nameError").style.display = "none";
            }

            if(emailEmpty){
                console.log("email empty");
                document.getElementById("email").style.borderColor = "red";
                document.getElementById("emailError").style.display = "unset";
            }else{
                document.getElementById("email").style.borderColor = "#CCCCCC";
                document.getElementById("emailError").style.display = "none";
            }

            if(levelEmpty){
                console.log("level empty");
                document.getElementById("level").style.borderColor = "red";
                document.getElementById("levelError").style.display = "unset";
            }else{
                document.getElementById("level").style.borderColor = "#CCCCCC";
                document.getElementById("levelError").style.display = "none";
            }

            console.log('failed'); 
        }else{
            document.getElementById("name").style.borderColor = "#CCCCCC";
            document.getElementById("nameError").style.display = "none";
            document.getElementById("email").style.borderColor = "#CCCCCC";
            document.getElementById("emailError").style.display = "none";
            document.getElementById("level").style.borderColor = "#CCCCCC";
            document.getElementById("levelError").style.display = "none";
            console.log('success'); 

            //send to formspree
        $.ajax({
            url:'https://formspree.io/alex.stelzig@hotmail.fr',
            method:'POST',
            data: {name:name,
                _replyto:email,
                 email:email,
                comments:comments,
                // Japaneselevel:level,
                _subject:'My Form Submission',},
            dataType:"json",
            // success:function() {
            //     // $('#formBlock').hide();
            //     // $('#thankyouBlock').show();
            // }   

        });     
        }



        
    };

