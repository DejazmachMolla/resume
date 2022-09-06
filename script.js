(function () {
  const SliderType = {
    PROJECT: 0,
    EDUCATION: 1
  };
  let sliderType = SliderType.PROJECT;

  function getCurrentBrowserWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  /**
   * Show text content of the developer intro
   */

  function showDeveloperIntroText() {
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
    document.getElementById("text-content").style.width = "auto";
    
  }

  function hideDeveloperIntroText() {
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
  var prevScrollpos = 150; 
  var minTextAllowingWidth = 600;

  /**
   * Hide developer intro for mobile devices
   */
  function hideDeveloperIntroForMobile() {
    if(minTextAllowingWidth > getCurrentBrowserWidth()) {
      hideDeveloperIntroText();
    } else {
      document.getElementById("text-content").style.height = `${document.getElementById("imagencontact").offsetWidth -24}px`;
      document.getElementById("text-content").style.width = "auto";
    }
  }
  
  hideDeveloperIntroForMobile();
  window.onscroll = function () {
    //hideDeveloperIntroForMobile();
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && minTextAllowingWidth <= getCurrentBrowserWidth()) {
      showDeveloperIntroText();
    } else {
      hideDeveloperIntroText();
    }
  }

  window.onresize = function() {
    setTimeout(() =>
      location.reload(),
      1000
    )
  }

  let projects = Array.from(document.getElementsByClassName("project"));
  let educations = Array.from(document.getElementsByClassName("edu-container"));

  const minProjectWidth = 280;
  const minEducationWidth = 280;
  
  var projectsWidth = projects.length*minProjectWidth;
  var educationsWidth = educations.length*minEducationWidth;

  let browserWidth = getCurrentBrowserWidth();
  document.getElementsByClassName("project-list")[0].style.width = `${projectsWidth}px`;
  
  document.getElementsByClassName("next-btn")[0].style.left = `${browserWidth - 100}px`;
  document.getElementsByClassName("next-btn")[1].style.left = `${browserWidth - 100}px`;

  console.log("browserWidth : " +browserWidth);
  var maxProjects = Math.floor(browserWidth/minProjectWidth);
  var projectWidth = Math.floor(browserWidth/maxProjects);

  var maxEducations = Math.floor(browserWidth/minEducationWidth);
  var educationWidth = Math.floor(browserWidth/maxEducations);

  projects.forEach(project => {
    project.style.flex = `0 0 ${parseInt(projectWidth) - 60}px`;
  })

  /**
   * Show next projects button if there are enough projects than the window can contain
   */
  if (getCurrentBrowserWidth() < projects.length*projectWidth) {
    document.getElementsByClassName("next-btn")[0].style.display = "block";
  } else {
    document.getElementsByClassName("next-btn")[0].style.display = "none";
  }

  educations.forEach(edu => {
    edu.style.flex = `0 0 ${parseInt(educationWidth) - 30}px`;
  })
  
  /**
   * Show next projects button if there are enough projects than the window can contain
   */
  if (getCurrentBrowserWidth() < educations.length*educationWidth) {
    document.getElementsByClassName("next-btn")[1].style.display = "block";
  } else {
    document.getElementsByClassName("next-btn")[1].style.display = "none";
  }
  
  function incline(index, growing) {
    let sliderItems = [];
    let classIndex = 0;
    if(sliderType==SliderType.PROJECT) {
      sliderItems = projects;
    } else {
      sliderItems = educations;
      classIndex = 1;
    }

    function stop(sI, growing) {
      setTimeout(() => {
        sI.forEach(element => element.style.transition = "all 300ms ease-in-out");
        if(growing) {
          if(index<=0)
            sI.forEach(element => element.style.transform = "translateX(" + (index*getCurrentBrowserWidth()) + "px) rotate(0)");
          else
            sI.forEach(element => element.style.transform = "translateX(" + (- (index*getCurrentBrowserWidth())) + "px) rotate(0)");
        } else {
          if(index<0)
            sI.forEach(element => element.style.transform = "translateX(" + (- (index*getCurrentBrowserWidth())) + "px) rotate(0)");
          else
            sI.forEach(element => element.style.transform = "translateX(" + (- (index*getCurrentBrowserWidth())) + "px) rotate(0)");
        }
      }, 1000);
    }

    setTimeout(() => {
      sliderItems.forEach(element => element.style.transition = "all 1000ms ease-in-out");
      if (growing) {
        if (index >= 1) {
          document.getElementsByClassName("prev-btn")[classIndex].style.display = "block";
        }
        
        if((index+1)*getCurrentBrowserWidth() >= sliderItems.length*projectWidth) {
          document.getElementsByClassName("next-btn")[classIndex].style.display = "none";
        }
        
        if(index<=0) {
          sliderItems.forEach(element => element.style.transform = "translateX(" + (index*getCurrentBrowserWidth()) + "px) rotate(-5deg)");
        } else {
          sliderItems.forEach(element => element.style.transform = "translateX(" + (- (index*getCurrentBrowserWidth())) + "px) rotate(-5deg)");
        }
      } else {
        if (index == 0) {
          document.getElementsByClassName("prev-btn")[classIndex].style.display = "none";
        }
        if ((index+1)*getCurrentBrowserWidth() < sliderItems.length*projectWidth) {
          document.getElementsByClassName("next-btn")[classIndex].style.display = "block";
        }
        if(index<0) {
          sliderItems.forEach(element => element.style.transform = "translateX(" + (index*getCurrentBrowserWidth()) + "px) rotate(5deg)");
        } else {
          sliderItems.forEach(element => element.style.transform = "translateX(" + (- (index*getCurrentBrowserWidth())) + "px) rotate(5deg)");
        }
      }
      stop(sliderItems, growing);
      
    }, 200);
  }

  let projectCount = 0;
  let educationCount = 0;
  function moveProjectLeft() {
    sliderType = SliderType.PROJECT;
    projectCount++;
    incline(projectCount, true);
  }

  function moveProjectRight() {
    sliderType = SliderType.PROJECT;
    projectCount--;
    incline(projectCount, false);
  }

  function moveEducationLeft() {
    sliderType = SliderType.EDUCATION;
    educationCount++;
    incline(educationCount, true);
  }

  function moveEducationRight() {
    sliderType = SliderType.EDUCATION;
    educationCount--;
    incline(educationCount, false);
  }

  window.onload = function init() {
    document.getElementsByClassName("next-btn")[0].addEventListener('click', moveProjectLeft);
    document.getElementsByClassName("prev-btn")[0].addEventListener('click', moveProjectRight);

    document.getElementsByClassName("next-btn")[1].addEventListener('click', moveEducationLeft);
    document.getElementsByClassName("prev-btn")[1].addEventListener('click', moveEducationRight);

    document.getElementsByClassName("prev-btn")[0].style.display = "none";
    document.getElementsByClassName("prev-btn")[1].style.display = "none";
  }

})(document);