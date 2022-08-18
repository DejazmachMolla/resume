(function () {

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }

  var prevScrollpos = 150; 
  
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("text-content").style.display = "block";
      document.getElementsByClassName("imagencontact")[0].style.borderTopLeftRadius = "0";
      document.getElementById("text-content").style.width = "calc(65% - 2em)";
      document.getElementsByTagName("header")[0].style.right = "1em";
      document.getElementsByTagName("header")[0].style.top = "1em";
      document.getElementsByClassName("contact-links")[0].style.display = "block";
      var linkTexts = document.getElementsByClassName("external-link");
      for (var i = 0; i < linkTexts.length; i++) {
        linkTexts[i].style.display = "block";
      }
      document.getElementsByClassName("small-image")[0].style.width = "100%";
      document.getElementsByClassName("small-image")[0].style.borderRadius = "20px";
      document.getElementsByClassName("imagencontact")[0].style.width = "calc(35% - 2em)";

    } else {
      document.getElementById("text-content").style.display = "none";
      document.getElementById("text-content").style.width = "0";
      document.getElementsByClassName("imagencontact")[0].style.borderTopLeftRadius = "6px";
      document.getElementsByTagName("header")[0].style.right = "0";
      document.getElementsByTagName("header")[0].style.top = "0";
      document.getElementsByClassName("contact-links")[0].style.display = "flex";
      document.getElementsByClassName("contact-links")[0].style.flexDirection = "column";
      document.getElementsByClassName("contact-links")[0].style.alignItems = "center";
      var linkTexts = document.getElementsByClassName("external-link");
      for (var i = 0; i < linkTexts.length; i++) {
        linkTexts[i].style.display = "none";
      }

      document.getElementsByClassName("small-image")[0].style.width = "40px";
      document.getElementsByClassName("small-image")[0].style.borderRadius = "100%";
      document.getElementsByClassName("imagencontact")[0].style.width = "40px";
    }
  }

  let projects = Array.from(document.getElementsByClassName("project"));
  const minProjectWidth = 280;
  var projectsWidth = projects.length*minProjectWidth;
  let browserWidth = getWidth();
  document.getElementsByClassName("project-list")[0].style.width = `${projectsWidth}px`;
  document.getElementsByClassName("module-title")[0].style.width = `${projectsWidth}px`;
  document.getElementsByClassName("next-edu-btn")[0].style.left = `${browserWidth - 100}px`;

  console.log("browserWidth : " +browserWidth);
  console.log("browserWidth/(browserWidth/minProjectWidth) : " + Math.floor(browserWidth/Math.floor(browserWidth/minProjectWidth)));
  var maxProjects = Math.floor(browserWidth/minProjectWidth);
  var projectWidth = Math.floor(browserWidth/maxProjects); // width including margin

  projects.forEach(project => {
    project.style.display = "inline-block !important";
    project.style.flex = `0 0 ${parseInt(projectWidth) - 60}px`;
  })
  
  function incline(index, growing) {
    console.log(index, growing)
    

    setTimeout(() => {
      projects.forEach(element => element.style.transition = "all 1000ms ease-in-out");
      if (growing) {
        if (index >= 1) {
          document.getElementsByClassName("prev-edu-btn")[0].style.display = "block";
        }
        
        if((index+1)*getWidth() >= projects.length*projectWidth) {
          document.getElementsByClassName("next-edu-btn")[0].style.display = "none";
        }
        
        if(index<=0)
          projects.forEach(element => element.style.transform = "translateX(" + (index*getWidth()) + "px) rotate(-5deg)");
        else
          projects.forEach(element => element.style.transform = "translateX(" + (- (index*getWidth())) + "px) rotate(-5deg)");
      } else {
        if (index == 0) {
          document.getElementsByClassName("prev-edu-btn")[0].style.display = "none";
        }
        if ((index+1)*getWidth() < projects.length*projectWidth) {
          document.getElementsByClassName("next-edu-btn")[0].style.display = "block";
        }
        if(index<0)
          projects.forEach(element => element.style.transform = "translateX(" + (index*getWidth()) + "px) rotate(5deg)");
        else
          projects.forEach(element => element.style.transform = "translateX(" + (- (index*getWidth())) + "px) rotate(5deg)");
      }
      
      setTimeout(() => {
        projects.forEach(element => element.style.transition = "all 300ms ease-in-out");
        if(growing) {
          if(index<=0)
            projects.forEach(element => element.style.transform = "translateX(" + (index*getWidth()) + "px) rotate(0)");
          else
            projects.forEach(element => element.style.transform = "translateX(" + (- (index*getWidth())) + "px) rotate(0)");
        } else {
          if(index<0)
            projects.forEach(element => element.style.transform = "translateX(" + (- (index*getWidth())) + "px) rotate(0)");
          else
            projects.forEach(element => element.style.transform = "translateX(" + (- (index*getWidth())) + "px) rotate(0)");
        }
      }, 1000);
    }, 200);

  }

  let count = 0;
  function moveLeft() {
    count++;
    incline(count, true);
  }

  function moveRight() {
    count--;
    incline(count, false);
  }


  function to_percent(pixels) {
    console.log('Inner width ' + innerWidth)
    return (pixels / getWidth()) * 100
  }
  function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, getWidth() || 0);
    return (v * w) / 100;
  }

  window.onload = function init() {
    document.getElementsByClassName("next-edu-btn")[0].addEventListener('click', moveLeft);
    document.getElementsByClassName("prev-edu-btn")[0].addEventListener('click', moveRight);
    document.getElementsByClassName("prev-edu-btn")[0].style.display = "none";
  }

})(document);