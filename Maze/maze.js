$(function(){
    let start = false;
    let count = 0;
    $('#end').on('mouseover',function(){
        if(start===true && count=== 0){
            $("#status").text("Congratulations,You won click S to restart again");
        }
        start = false;
        count = 0;
    });
    $("#maze").mouseleave(function(){
            if(start ){
                $(".boundary").addClass("youlose");
                $("#status").text("oooops..you lose click S to start again");
            }        
    }); 

    $('#start').click(function(){
        start = true;
        $("#status").text("Game Started");
        $(".boundary").removeClass("youlose");
    });
    $('.boundary').mouseover(function(){
            if(start){
            $(".boundary").addClass("youlose");
            $("#status").text("You Lose Click S to start again");
            count++;
            }                
    });
});