document.addEventListener("DOMContentLoaded", function() {
  var anchors = document.querySelectorAll("ul.bucket li a");
  var singleAnchors = document.querySelectorAll("ul li.single a");

  for (var z = 0; z < singleAnchors.length; z++) {
    singleAnchors[z].onclick = function(event) {
      document.querySelector(".active").classList.remove("active");
      if (!this.closest("li a").classList.contains("active")) {
        this.closest("li a").classList.add("active");
      }
    };
  }

  for (var i = 0; i < anchors.length; i++) {
    window.onload = function() {
      const activeBucket = document
        .querySelector(".active")
        .closest("ul.bucket");
      if (activeBucket !== null) {
        activeBucket.classList.add("active");
      }
    };

    anchors[i].onclick = function() {
      document.querySelector(".active").classList.remove("active");
      if (!this.closest("ul.bucket").classList.contains("active")) {
        this.closest("ul.bucket").classList.add("active");
      }
    };
  }
});
