    var myTime,progressCounter=0;
    startFunction();
    /*to initialize the progresbar*/
    function startFunction(){
        myTime = setInterval(loadProgessbarInCoursePage,350);
        console.log(myTime);
    }
    /*to move progresbar in regular interval*/
    function loadProgessbarInCoursePage(){
        if(progressCounter == 0){
            $('#progressBar').css('width','25%')
        } else if(progressCounter == 1){
            $('#progressBar').css('width','50%')
        }  else if(progressCounter == 2){
            $('#progressBar').css('width','75%')
        } else if(progressCounter == 3){
            $('#progressBar').css('width','100%')
        }  else if(progressCounter == 4){
          /* $('.progress').hide()*/
          $('#progressBar').attr('style', 'visibility:hidden')
            /*to clear the time interval */
            clearInterval(myTime);
        }
        progressCounter++;
    }
