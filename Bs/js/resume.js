function showresume() {
    document.getElementById("page0").style.animationName = "page0left";   
}
function hideresume() {
    document.getElementById("page0").style.animationName = "page0right";   
    document.getElementById("owlsays").style.display = "none";  
}
function hidescrollbare() {
    document.getElementById("scrollline1").style.opacity= "0";   
    document.getElementById("scrollline2").style.opacity= "0";   
    document.getElementById("scrollline3").style.opacity= "0";   
    document.getElementById("scrollline4").style.opacity= "0";  
    document.getElementById("scrollline12").style.opacity= "0";   
    document.getElementById("scrollline22").style.opacity= "0";   
    document.getElementById("scrollline32").style.opacity= "0";   
    document.getElementById("scrollline42").style.opacity= "0"; 
    document.getElementById("scrolldowndiv1").style.opacity= "0"; 
    document.getElementById("scrolldowndiv2").style.opacity= "0";
    document.getElementById("leftarrow").style.opacity= "1"; 

    document.getElementById("designsmallpic").style.width= "420%";
    document.getElementById("designsmallpic").style.height= "100%";
    document.getElementById("designsmallpic").style.top= "0%";
    document.getElementById("designsmallpic").style.left= "366.8%";
    document.getElementById("designsmallpic").style.opacity="1";

    document.getElementById("designsmallpic2").style.opacity="0";
    document.getElementById("designsmallpicanimation1").style.opacity="0";
    document.getElementById("designsmallpicanimation2").style.opacity="0";

}
designsmallpicanimation1

function showscrollbare() {
    document.getElementById("scrollline1").style.opacity= "1";   
    document.getElementById("scrollline2").style.opacity= "1";   
    document.getElementById("scrollline3").style.opacity= "1";   
    document.getElementById("scrollline4").style.opacity= "1";  
    document.getElementById("scrollline12").style.opacity= "1";   
    document.getElementById("scrollline22").style.opacity= "1";   
    document.getElementById("scrollline32").style.opacity= "1";   
    document.getElementById("scrollline42").style.opacity= "1"; 
    document.getElementById("scrolldowndiv1").style.opacity= "1"; 
    document.getElementById("scrolldowndiv2").style.opacity= "1"; 
    document.getElementById("leftarrow").style.opacity= "0"; 
   
    document.getElementById("designsmallpic").style.width= "230%";
    document.getElementById("designsmallpic").style.height= "72%";
    document.getElementById("designsmallpic").style.top= "16%";
    document.getElementById("designsmallpic").style.left= "110%";
    document.getElementById("designsmallpic").style.opacity="0";

    document.getElementById("designsmallpic2").style.opacity="1";
    document.getElementById("designsmallpicanimation1").style.opacity="1";
    document.getElementById("designsmallpicanimation2").style.opacity="1";
}
/*stop scrolling on resume*/


function page00appears() {
        document.getElementById("page00").style.display = "flex"; 
}
function page00disappears() {
        document.getElementById("page00").style.display = "none"; 
}

function waveappears() {
    document.getElementById("wave1").style.animationName = "waveappears1";
    document.getElementById("wave2").style.animationName = "waveappears2"; 
    document.getElementById("wave3").style.animationName = "waveappears3";  
}
function wavefade() {
    document.getElementById("wave1").style.animationName = "wavefade1";
    document.getElementById("wave2").style.animationName = "wavefade2"; 
    document.getElementById("wave3").style.animationName = "wavefade3";  
}
function wavemove() {
    document.getElementById("wave1").style.animationName = "wavemove1";
    document.getElementById("wave2").style.animationName = "wavemove2"; 
    document.getElementById("wave3").style.animationName = "wavemove3";  
}

function wingsappears() {
    document.getElementById("wings").style.animationName = "wingsappear";
}
function wingsdisappears() {
    document.getElementById("wings").style.animationName = "wingsdisappear";
}
/*rotate animation*/
function rotatewing1() {
    document.getElementById("wing1").style.animationName = "rotate-20";}
function rotatewing2() {
    document.getElementById("wing2").style.animationName = "rotate-20";}
function rotatewing3() {
    document.getElementById("wing3").style.animationName = "rotate-20";}
function rotatewing4() {
    document.getElementById("wing4").style.animationName = "rotate-20";}

function stoprotatewing1() {
    document.getElementById("wing1").style.animationName = "rotate20";}
function stoprotatewing2() {
    document.getElementById("wing2").style.animationName = "rotate20";}
function stoprotatewing3() {
    document.getElementById("wing3").style.animationName = "rotate20";}
function stoprotatewing4() {
    document.getElementById("wing4").style.animationName = "rotate20";}

/*wings resume animation*/
function wingsresumeshow() {
    document.getElementById("wingsresume").style.animationName = "wingsresumeshow";}
function wingsresumehide() {
    document.getElementById("wingsresume").style.animationName = "wingsresumehide";}

    /*show wings resume and hide them*/
    function wing1resume() {
        document.getElementById("wing1resume").style.display = "flex";
        document.getElementById("wing1resume").style.animationName = "wingshow1234";
        document.getElementById("wing2resume").style.display = "none";

        document.getElementById("wing3resume").style.display = "none";
        document.getElementById("wing4resume").style.display = "none";
    }
    function wing2resume() {
        document.getElementById("wing1resume").style.display = "none";
        document.getElementById("wing2resume").style.display = "flex";
        document.getElementById("wing2resume").style.animationName = "wingshow1234";
        document.getElementById("wing3resume").style.display = "none";
        document.getElementById("wing4resume").style.display = "none";
    }
    function wing3resume() {
        document.getElementById("wing1resume").style.display = "none";
        document.getElementById("wing2resume").style.display = "none";
        document.getElementById("wing3resume").style.display = "flex";
        document.getElementById("wing3resume").style.animationName = "wingshow1234";
        document.getElementById("wing4resume").style.display = "none";
    }
    function wing4resume() {
        document.getElementById("wing1resume").style.display = "none";
        document.getElementById("wing2resume").style.display = "none";
        document.getElementById("wing3resume").style.display = "none";
        document.getElementById("wing4resume").style.display = "flex";
        document.getElementById("wing4resume").style.animationName = "wingshow1234";
    }

