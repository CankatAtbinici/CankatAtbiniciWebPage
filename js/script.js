

console.log("merhaba dünya");


$(document).ready(function(){
    $("#welcome_pic").fadeIn(3000)

    
//WELCOME MESSAGE STARTS
    $(document).ready(function(){
        $('body').mousemove(function(event) { 
            var left = event.pageX
            var top = event.pageY
            
               // console.log(left, top);
            if ((left>580 && left<1150 ) && (top> 250) && (top<305) ) {
                $("#welcome_message").css("display" , "block")
            }else{
                $("#welcome_message").css("display" , "none")
            }
           
        });

        $("#contact_me_button").click(function(){
            $(".container").fadeToggle()
        })

        $("#send_mail_button").click(function() {
            $.getScript("../mailler/mailler.js")

            mailSendService()
        })
   
    });
    //WELCOME MESSAGE ENDS


})




