(function () {
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
      //document.getElementsByClassName("contact-links")[0].style.display = "block";
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
})();