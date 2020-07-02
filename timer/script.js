 // var n=0;
    var btnStart=document.getElementById("btnStart");
    var btnPause=document.getElementById("btnPause");
    var btnCancel=document.getElementById("btnCancel");
    var min=document.querySelectorAll("input")[0];
    var is_cal=false;
    // console.log(min-1);
    var sec=document.querySelectorAll("input")[1];
    var timer;
    btnStart.onclick=count;
    btnPause.onclick=pause;
    btnCancel.onclick=Cancel;

    var box=document.getElementsByTagName("div")[0];
    var audio= new Audio("E:/CloudMusic/童话镇.mp3");
    function count(){
        is_cal=true;   
    }
    function pause(){
        is_cal=false;
    }

    function Cancel(){
        is_cal=false;
        min.value=25;
        sec.value=0;
        audio.pause();
    }

    timer=setInterval(function(){
        // alert("ddd");
        if(is_cal){
            if(sec.value>=1 && min.value>=0){
                sec.value--

            }
            else if(min.value>0){
                sec.value=59;
                min.value--
            }
            else{
                is_cal=false;
                sec.value=min.value=0;
                audio.play();
            }
            
        }else{
            min.value=min.value;
        }

    },1000);

  
