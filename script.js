(function () {
  var prevScrollpos = 150;
  var projectsWidth = 8*250;
  document.getElementsByClassName("project-list")[0].style.width = `${projectsWidth}px`;
  document.getElementsByClassName("module-title")[0].style.width = `${projectsWidth}px`;
  document.getElementsByClassName("next-edu-btn")[0].style.left = `${window.innerWidth - 100}px`;
  
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

  function incline(index, growing) {
    console.log("inclining")
    console.log(index, growing)
    let projects = Array.from(document.getElementsByClassName("project"))

    setTimeout(() => {
      projects.forEach(element => element.style.transition = "all 1000ms ease-in-out");
      if (growing) {
        if (index >= 1) {
          document.getElementsByClassName("prev-edu-btn")[0].style.display = "block";
          //document.getElementById("prev-proj-btn").disbled = true;
          //document.getElementsByClassName("prev-edu-btn")[0].style.display = "block";
          //document.getElementsByClassName("prev-edu-btn")[0].style.right = `${window.innerWidth - 100}px`;
        }
        console.log('index*250 '+(index + 2)*250)
        console.log('innerWidth '+window.innerWidth)
        if((index+2)*250 >= window.innerWidth) {
          document.getElementsByClassName("next-edu-btn")[0].style.display = "none";
        }
        if (index >= (projects.length / 4 - 1)) {
          //document.getElementsByClassName("next-edu-btn")[0].style.display = "none";
        }
        projects.forEach(element => element.style.transform = "translateX(" + (- (window.innerWidth)) + "px) rotate(-5deg)");
      } else {
        if (index == 0) {
          document.getElementsByClassName("prev-edu-btn")[0].style.display = "none";
        }
        if (index < (projects.length / 4 - 1)) {
          document.getElementsByClassName("next-edu-btn")[0].style.display = "block";
        }
        projects.forEach(element => element.style.transform = "translateX(" + (- (index * 450) - to_percent(140)) + "%) rotate(5deg)");
      }

      setTimeout(() => {
        projects.forEach(element => element.style.transition = "all 300ms ease-in-out");
        projects.forEach(element => element.style.transform = "translateX(" + (- (index * 450) - to_percent(140)) + "%) rotate(0)");
        //document.getElementsByClassName("prev-edu-btn")[0].style.display = "block";
        //document.getElementsByClassName("prev-edu-btn")[0].style.right = `${window.innerWidth - 100}px`;
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
    return (pixels / window.innerWidth) * 100
  }
  function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  window.onload = function init() {
    document.getElementsByClassName("next-edu-btn")[0].addEventListener('click', moveLeft);
    document.getElementsByClassName("prev-edu-btn")[0].addEventListener('click', moveRight);
    document.getElementsByClassName("prev-edu-btn")[0].style.display = "none";
  }

})(document);