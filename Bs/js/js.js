
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
/*Animation*/
function logoappear() {
  document.getElementById("largelogo").style.animationName= "logoanimation";
}
function logofade() {
  document.getElementById("largelogo").style.animationName= "logoanimationfade";
}
function portfolioplay() {
  document.getElementById("portfolio").style.animationName= "portfolioplay";
  document.getElementById("portfolio").style.animationIterationCount = "infinite";
  document.getElementById("portfolio").style.animationDuration= "2.4s";
  document.getElementById("portfolio").style.animationTimingFunction= "linear";
}
function portfoliostop() {
  document.getElementById("portfolio").style.animationName= "portfoliostop";
  document.getElementById("portfolio").style.animationIterationCount = "1";
  document.getElementById("portfolio").style.animationDuration= "2.4s";
}
function playballs() {
  document.getElementById("balls1").style.animationName= "playballs1";
  document.getElementById("balls1").style.animationIterationCount = "infinite";
  document.getElementById("balls1").style.animationDuration= "2s";
  document.getElementById("balls2").style.animationName= "playballs1";
  document.getElementById("balls2").style.animationIterationCount = "infinite";
  document.getElementById("balls2").style.animationDuration= "1.8s";
  document.getElementById("lines1").style.animationName= "playballs1";
  document.getElementById("lines1").style.animationIterationCount = "infinite";
  document.getElementById("lines1").style.animationDuration= "1.6s";
  document.getElementById("lines2").style.animationName= "playballs1";
  document.getElementById("lines2").style.animationIterationCount = "infinite";
  document.getElementById("lines2").style.animationDuration= "1.4s";
  document.getElementById("dotted").style.animationName= "playballs1";
  document.getElementById("dotted").style.animationIterationCount = "infinite";
  document.getElementById("dotted").style.animationDuration= "1.2s";
}
function stopballs1() {
  document.getElementById("balls1").style.animationIterationCount ="1";
  document.getElementById("balls2").style.animationIterationCount ="1";
  document.getElementById("lines1").style.animationIterationCount ="1";
  document.getElementById("lines2").style.animationIterationCount ="1";
  document.getElementById("dotted").style.animationIterationCount ="1";
  if (playballs) {
    stopballs();
  }
}
function stopballs() {
  document.getElementById("balls1").style.animationName= "none";
  document.getElementById("balls1").style.top= "00%";
  document.getElementById("balls1").style.left= "00%";
  document.getElementById("balls2").style.animationName= "none";
  document.getElementById("balls2").style.top= "00%";
  document.getElementById("balls2").style.left= "00%";
  document.getElementById("lines1").style.animationName= "none";
  document.getElementById("lines1").style.top= "00%";
  document.getElementById("lines1").style.left= "00%";
  document.getElementById("lines2").style.animationName= "none";
  document.getElementById("lines2").style.top= "00%";
  document.getElementById("lines2").style.left= "00%";
  document.getElementById("dotted").style.animationName= "none";
  document.getElementById("dotted").style.top= "00%";
  document.getElementById("dotted").style.left= "00%";
}

function fadeaway() {
  document.getElementById("balls1").style.animationName= "fadinganimation";
  document.getElementById("balls2").style.animationName= "fadinganimation";
  document.getElementById("lines1").style.animationName= "fadinganimation"; 
  document.getElementById("lines2").style.animationName= "fadinganimation";
  document.getElementById("dotted").style.animationName= "fadinganimation";
}
function appearin() {
  document.getElementById("balls1").style.animationName= "appear";
  document.getElementById("balls2").style.animationName= "appear";
  document.getElementById("lines1").style.animationName= "appear"; 
  document.getElementById("lines2").style.animationName= "appear";
  document.getElementById("dotted").style.animationName= "appear";
}
function portfolioanimation() {
document.getElementById("portfolio").style.animationName= "portfolioanimation"; 
}
function portfolioanimationfade() {
  document.getElementById("portfolio").style.animationName= "portfolioanimationfade"; 
  }

    
function slidesv1() {
    document.getElementById("scrollline1").style.width = "100%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "60%";
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "100%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
      
}
function slidesv2() {
    document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "100%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "60%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "100%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
}
function slidesv3() {
    document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "100%";
    document.getElementById("scrollline4").style.width = "60%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "100%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
}   
function slidesv4() {
    document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "100%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "100%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
}

/*scrolling down and up function*/

function scrollfunctionzero1(event) {
  var y0 = event.deltaY;
  if (y0 > 0) {
    document.getElementById("lname1").style.animationName= "lnamedisappear1";
    document.getElementById("lname2").style.animationName= "lnamedisappear1";
    document.getElementById("lnamedes1").style.animationName= "aboutlinesdisappear1";
    document.getElementById("lnamedes2").style.animationName= "aboutlinesdisappear2";
    document.getElementById("hydro").style.animationName= "hydrodisappears";
    document.getElementById("designsmallpicanimation0").style.animationName= "designsmallpicanimation0";
    document.getElementById("designsmallpicanimation1").style.animationName= "designsmallpicanimation1";
    document.getElementById("designsmallpicanimation2").style.animationName= "designsmallpicanimation1";
    document.getElementById("lname1").style.animationName= "lnamedisappear1";
    document.getElementById("lname2").style.animationName= "lnamedisappear1";
    document.getElementById("aboutline1").style.animationName= "aboutlinesappear1";
    document.getElementById("aboutline2").style.animationName= "aboutlinesappear2";
    document.getElementById("aboutme12").style.animationName= "aboutappear";
    document.getElementById("aboutme22").style.animationName= "aboutappear";
    document.getElementById("freelancer").style.animationName= "freelanceappears";
    document.getElementById("resumebutton").style.animationName= "resumebuttonappears";

  document.getElementById("page0").style.top = "-100%";  
  document.getElementById("largelogo").style.animationName= "logoanimationfade";
  document.getElementById("portfolio").style.animationName= "portfolioanimationfade";
  document.getElementById("balls1").style.animationName= "fadinganimation";
  document.getElementById("balls2").style.animationName= "fadinganimation";
  document.getElementById("lines1").style.animationName= "fadinganimation"; 
  document.getElementById("lines2").style.animationName= "fadinganimation";
  document.getElementById("dotted").style.animationName= "fadinganimation";
  
  document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "100%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "60%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "100%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
  }
  else{

    document.getElementById("page0").style.top = "0%";
    document.getElementById("scrollphrase").innerHTML ="SCROLLDOWN";
  }
}
function scrollfunctionzero2(event) {
  var y0 = event.deltaY;
  if (y0 > 0) {
  document.getElementById("page0").style.top = "-200%";

  document.getElementById("designsmallpicanimation0").style.animationName= "designsmallpicanimation02";
  document.getElementById("designsmallpicanimation1").style.animationName= "designsmallpicanimation12";
  document.getElementById("designsmallpicanimation2").style.animationName= "designsmallpicanimation12";

  document.getElementById("smallpicanimation0project").style.animationName= "smallpicanimation0";
    document.getElementById("smallpicanimation1project").style.animationName= "smallpicanimation1";
    document.getElementById("smallpicanimation2project").style.animationName= "smallpicanimation1";
    document.getElementById("projectline1").style.animationName= "projectlinesappear1";
    document.getElementById("projectline2").style.animationName= "projectlinesappear2";
    document.getElementById("graphic1").style.animationName= "graphicappears";
    document.getElementById("projects1").style.animationName= "graphicappears";
    document.getElementById("clickprojects").style.animationName= "clickprojectsappears";
    document.getElementById("projectsbutton").style.animationName= "projectsbuttonappears";

  document.getElementById("aboutline1").style.animationName= "aboutlinesdisappear1";
    document.getElementById("aboutline2").style.animationName= "aboutlinesdisappear2";
    document.getElementById("aboutme12").style.animationName= "aboutdisappear";
    document.getElementById("aboutme22").style.animationName= "aboutdisappear";
    document.getElementById("freelancer").style.animationName= "freelancedisappears";
    document.getElementById("resumebutton").style.animationName= "resumebuttondisappears";
  document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "100%";
    document.getElementById("scrollline4").style.width = "60%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "100%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
  }
  else{
    document.getElementById("lname1").style.animationName= "lnameappear1";
    document.getElementById("lname2").style.animationName= "lnameappear1";
    document.getElementById("lnamedes1").style.animationName= "aboutlinesappear1";
    document.getElementById("lnamedes2").style.animationName= "aboutlinesappear2";
    document.getElementById("hydro").style.animationName= "hydroappears";
    document.getElementById("page0").style.top = "0%";
    document.getElementById("largelogo").style.animationName= "logoanimation";
    document.getElementById("portfolio").style.animationName= "portfolioanimation"; 
    document.getElementById("lname1").style.animationName= "lnameappear1";
    document.getElementById("lname2").style.animationName= "lnameappear1";
    document.getElementById("aboutline1").style.animationName= "aboutlinesdisappear1";
    document.getElementById("aboutline2").style.animationName= "aboutlinesdisappear2";
    document.getElementById("aboutme12").style.animationName= "aboutdisappear";
    document.getElementById("aboutme22").style.animationName= "aboutdisappear";
    document.getElementById("freelancer").style.animationName= "freelancedisappears";
    document.getElementById("resumebutton").style.animationName= "resumebuttondisappears";
  document.getElementById("balls1").style.animationName= "appear";
  document.getElementById("balls2").style.animationName= "appear";
  document.getElementById("lines1").style.animationName= "appear"; 
  document.getElementById("lines2").style.animationName= "appear";
  document.getElementById("dotted").style.animationName= "appear";

  document.getElementById("designsmallpicanimation0").style.animationName= "designsmallpicanimation02";
    document.getElementById("designsmallpicanimation1").style.animationName= "designsmallpicanimation12";
    document.getElementById("designsmallpicanimation2").style.animationName= "designsmallpicanimation12";

    document.getElementById("scrollphrase").innerHTML ="SCROLLDOWN";
    document.getElementById("scrollline1").style.width = "100%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "60%";
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "100%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
  }
}
function scrollfunctionzero3(event) {
  var y0 = event.deltaY;
  if (y0 > 0) {
    document.getElementById("smallpicanimation0project").style.animationName= "smallpicanimation02";
    document.getElementById("smallpicanimation1project").style.animationName= "smallpicanimation12";
    document.getElementById("smallpicanimation2project").style.animationName= "smallpicanimation12";
    document.getElementById("projectline1").style.animationName= "projectlinesdisappear1";
    document.getElementById("projectline2").style.animationName= "projectlinesdisappear2";
    document.getElementById("graphic1").style.animationName= "graphicdisappears";
    document.getElementById("projects1").style.animationName= "graphicdisappears";
    document.getElementById("clickprojects").style.animationName= "clickprojectsdisappears";
    document.getElementById("projectsbutton").style.animationName= "projectsbuttondisappears";
    /*page 4 */
    document.getElementById("contactpic").style.animationName= "contactpicappears";
    document.getElementById("smallpicanimation1contact").style.animationName= "smallpiccontactdis";
    document.getElementById("smallpicanimation2contact").style.animationName= "smallpiccontactdis";
    document.getElementById("contactme").style.animationName= "contactappears"; 
    document.getElementById("contactme2").style.animationName= "contactappears"; 
    document.getElementById("contactline1").style.animationName= "contactlinesappear1"; 
    document.getElementById("contactline2").style.animationName= "contactlinesappear2"; 
    document.getElementById("clickcontacts").style.animationName= "clickcontactsappears"; 
    document.getElementById("mynumber").style.animationName= "clickcontactsappears"; 

  document.getElementById("page0").style.top = "-300%";
  document.getElementById("scrollphrase").innerHTML ="SCROLLUP";
  document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "100%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "100%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
  }
  else{
    document.getElementById("smallpicanimation0project").style.animationName= "smallpicanimation02";
    document.getElementById("smallpicanimation1project").style.animationName= "smallpicanimation12";
    document.getElementById("smallpicanimation2project").style.animationName= "smallpicanimation12";
    document.getElementById("projectline1").style.animationName= "projectlinesdisappear1";
    document.getElementById("projectline2").style.animationName= "projectlinesdisappear2";
    document.getElementById("graphic1").style.animationName= "graphicdisappears";
    document.getElementById("projects1").style.animationName= "graphicdisappears";
    document.getElementById("clickprojects").style.animationName= "clickprojectsdisappears";
    document.getElementById("projectsbutton").style.animationName= "projectsbuttondisappears";

    document.getElementById("designsmallpicanimation0").style.animationName= "designsmallpicanimation0";
    document.getElementById("designsmallpicanimation1").style.animationName= "designsmallpicanimation1";
    document.getElementById("designsmallpicanimation2").style.animationName= "designsmallpicanimation1";

    document.getElementById("aboutline1").style.animationName= "aboutlinesappear1";
    document.getElementById("aboutline2").style.animationName= "aboutlinesappear2";
    document.getElementById("aboutme12").style.animationName= "aboutappear";
    document.getElementById("aboutme22").style.animationName= "aboutappear";
    document.getElementById("freelancer").style.animationName= "freelanceappears";
    document.getElementById("resumebutton").style.animationName= "resumebuttonappears";
    document.getElementById("page0").style.top = "-100%";
    document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "100%";
    document.getElementById("scrollline3").style.width = "60%";
    document.getElementById("scrollline4").style.width = "60%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "100%";
    document.getElementById("scrollline32").style.height = "60%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
  }
}
function scrollfunctionzero4(event) {
  var y0 = event.deltaY;
  if (y0 > 0) {
  document.getElementById("page0").style.top = "-300%";
  }
  else{
    document.getElementById("smallpicanimation0project").style.animationName= "smallpicanimation0";
    document.getElementById("smallpicanimation1project").style.animationName= "smallpicanimation1";
    document.getElementById("smallpicanimation2project").style.animationName= "smallpicanimation1";
    document.getElementById("projectline1").style.animationName= "projectlinesappear1";
    document.getElementById("projectline2").style.animationName= "projectlinesappear2";
    document.getElementById("graphic1").style.animationName= "graphicappears";
    document.getElementById("projects1").style.animationName= "graphicappears";
    document.getElementById("clickprojects").style.animationName= "clickprojectsappears";
    document.getElementById("projectsbutton").style.animationName= "projectsbuttonappears";
/*page 4 */
    document.getElementById("contactpic").style.animationName= "contactpicdisappears";
    document.getElementById("smallpicanimation1contact").style.animationName= "smallpiccontact";
    document.getElementById("smallpicanimation2contact").style.animationName= "smallpiccontact";
    document.getElementById("contactme").style.animationName= "contactdisappears"; 
    document.getElementById("contactme2").style.animationName= "contactdisappears"; 
    document.getElementById("contactline1").style.animationName= "contactlinesdisappear1"; 
    document.getElementById("contactline2").style.animationName= "contactlinesdisappear2"; 
    document.getElementById("clickcontacts").style.animationName= "clickcontactsdisappears"; 
    document.getElementById("mynumber").style.animationName= "clickcontactsdisappears"; 

    document.getElementById("page0").style.top = "-200%";
    document.getElementById("scrollline1").style.width = "60%";
    document.getElementById("scrollline2").style.width = "60%";
    document.getElementById("scrollline3").style.width = "100%";
    document.getElementById("scrollline4").style.width = "60%";  
    document.getElementById("scrollline1").style.transition = "0.8s";
    document.getElementById("scrollline2").style.transition = "0.8s";
    document.getElementById("scrollline3").style.transition = "0.8s";
    document.getElementById("scrollline4").style.transition = "0.8s";
    /*horizontal*/
    document.getElementById("scrollline12").style.height = "60%";
    document.getElementById("scrollline22").style.height = "60%";
    document.getElementById("scrollline32").style.height = "100%";
    document.getElementById("scrollline42").style.height = "60%";
    document.getElementById("scrollline12").style.transition = "0.8s";
    document.getElementById("scrollline22").style.transition = "0.8s";
    document.getElementById("scrollline32").style.transition = "0.8s";
    document.getElementById("scrollline42").style.transition = "0.8s";
  }
}

function translines1() {
  document.getElementById("page0").style.top = "00%";
  document.getElementById("scrollphrase").innerHTML ="SCROLLDOWN";
  
}
function translines2() {
  document.getElementById("page0").style.top = "-100%";
}
function translines3() {
  document.getElementById("page0").style.top = "-200%";
}
function translines4() {
  document.getElementById("page0").style.top = "-300%";
  document.getElementById("scrollphrase").innerHTML ="SCROLLUP";
}




