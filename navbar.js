(function() {
  var fillNavBar, isCurrent, names, urls;

  names = ["Home Base", "About This Base", "Effective Design"];

  urls = ["index.html", "about.html", "design.html"];

  isCurrent = function(url) {
    if ((document.URL.search(url)) !== -1) {
      return true;
    } else if (document.URL === "http://tylerwayne.github.com" && url === "index.html") {
      return true;
    } else {
      return false;
    }
  };

  fillNavBar = function() {
    var index, name, navbar, nextEl, _len;
    navbar = document.getElementsByTagName("nav")[0];
    for (index = 0, _len = names.length; index < _len; index++) {
      name = names[index];
      nextEl = document.createElement("a");
      nextEl.innerText = name;
      nextEl.href = urls[index];
      if (isCurrent(nextEl.href)) nextEl.className = "current";
      navbar.appendChild(nextEl);
    }
    return navbar.style.display = "block";
  };

  window.addEventListener('load', fillNavBar);

}).call(this);
