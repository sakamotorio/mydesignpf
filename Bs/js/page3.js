/*small pic appears animation*/

function smallpicprojectappear() {
    document.getElementById("smallpicanimation0project").style.animationName= "smallpicanimation0";
    document.getElementById("smallpicanimation1project").style.animationName= "smallpicanimation1";
    document.getElementById("smallpicanimation2project").style.animationName= "smallpicanimation1";
}
function smallpicprojectfade() {
    document.getElementById("smallpicanimation0project").style.animationName= "smallpicanimation02";
    document.getElementById("smallpicanimation1project").style.animationName= "smallpicanimation12";
    document.getElementById("smallpicanimation2project").style.animationName= "smallpicanimation12";

}
/*aboutme appears animation*/
function graphicappears1() {
    document.getElementById("projectline1").style.animationName= "projectlinesappear1";
    document.getElementById("projectline2").style.animationName= "projectlinesappear2";
    document.getElementById("graphic1").style.animationName= "graphicappears";
    document.getElementById("projects1").style.animationName= "graphicappears";
    document.getElementById("clickprojects").style.animationName= "clickprojectsappears";
    document.getElementById("projectsbutton").style.animationName= "projectsbuttonappears";
}
function graphicdisappears1() {
    document.getElementById("projectline1").style.animationName= "projectlinesdisappear1";
    document.getElementById("projectline2").style.animationName= "projectlinesdisappear2";
    document.getElementById("graphic1").style.animationName= "graphicdisappears";
    document.getElementById("projects1").style.animationName= "graphicdisappears";
    document.getElementById("clickprojects").style.animationName= "clickprojectsdisappears";
    document.getElementById("projectsbutton").style.animationName= "projectsbuttondisappears";
}
/*left arrow */


function leftarrow2appears() {
    document.getElementById("leftarrow2").style.display= "flex";
    document.getElementById("page000").style.display= "flex";
    document.getElementById("night2").style.animationName= "night2animation1";
    document.getElementById("smallpicproject0night2").style.animationName= "project0night2animation";
    
} 
function leftarrow2fade() {
    
    document.getElementById("leftarrow2").style.display= "none";
    document.getElementById("night2").style.animationName= "night2animation2";
    document.getElementById("page000").style.display= "none";
    document.getElementById("smallpicproject0night2").style.animationName= "project0night2animationfade";
}

                                                    /*slider flyer*/


/* slide containers appear */


/*slider show*/
function flyerslidershow() {  
    document.getElementById("flyercontainer").style.animationName= "slidecontainershow";
    document.getElementById("flyercontainer").style.display= "flex";
}
function bannerslidershow() {   
    document.getElementById("bannercontainer").style.animationName= "slidecontainershow";
    document.getElementById("bannercontainer").style.display= "flex";
}
function plannerslidershow() {   
    document.getElementById("plannercontainer").style.animationName= "slidecontainershow";
    document.getElementById("plannercontainer").style.display= "flex";
}

/*slider hide*/
function flyersliderhide() {    
    document.getElementById("flyercontainer").style.animationName= "slidecontainerhide";
}
function bannersliderhide() {    
    document.getElementById("bannercontainer").style.animationName= "slidecontainerhide";
}
function plannersliderhide() {    
    document.getElementById("plannercontainer").style.animationName= "slidecontainerhide";
}
/*hide all sliders*/
function allslidershide() {    
    document.getElementById("flyercontainer").style.display= "none";
    document.getElementById("bannercontainer").style.display= "none";
    document.getElementById("plannercontainer").style.display= "none";
}

/*slides*/

var slideIndex = [1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/*rotate head 20deg */
function rotate1head1() {
    document.getElementById("owl1head").style.animationName= "headrotate1";
}
function rotate1head2() {
    document.getElementById("owl1head").style.animationName= "headrotate2";
}
/* owl 2 */
function rotate2head1() {
    document.getElementById("owl2head").style.animationName= "headrotate12";
}
function rotate2head2() {
    document.getElementById("owl2head").style.animationName= "headrotate22";
}
/* owl 3*/
function rotate3head1() {
    document.getElementById("owl3head").style.animationName= "headrotate1";
}
function rotate3head2() {
    document.getElementById("owl3head").style.animationName= "headrotate2";
}

/*owlsays appear*/
function owlsays1appear() {
    document.getElementById("owlsays").style.display = "flex";  
    document.getElementById("owl1says").style.animationName= "owlsaysappear";
}
function owlsays2appear() {
    document.getElementById("owlsays").style.display = "flex";
    document.getElementById("owl2says").style.animationName= "owlsaysappear";
}
function owlsays3appear() {
    document.getElementById("owlsays").style.display = "flex";
    document.getElementById("owl3says").style.animationName= "owlsaysappear";
}
/*owlsays disappear*/
function owlsays1disappear() {
    document.getElementById("owl1says").style.animationName= "owlsaysdisappear";
}
function owlsays2disappear() {
    document.getElementById("owl2says").style.animationName= "owlsaysdisappear";
}
function owlsays3disappear() {
    document.getElementById("owl3says").style.animationName= "owlsaysdisappear";
}

/*dark night appears*/
function darknightappears() {
    document.getElementById("darknightmountain1").style.animationName= "mountain1animation";
    document.getElementById("darknightmountain2").style.animationName= "mountain1animation";
    document.getElementById("darknightfog").style.animationName= "mountain1animation";
    document.getElementById("darknightherb").style.animationName= "herbanimation";
    document.getElementById("darknightstars").style.animationName= "starsanimation";
}
function darknightfade() {
    document.getElementById("darknightmountain1").style.animationName= "mountain1animationfade";
    document.getElementById("darknightmountain2").style.animationName= "mountain1animationfade";
    document.getElementById("darknightfog").style.animationName= "mountain1animationfade";
    document.getElementById("darknightherb").style.animationName= "herbanimationfade";
    document.getElementById("darknightstars").style.animationName= "starsanimationfade";
}


        
        
            
        




