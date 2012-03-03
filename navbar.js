(function() {
  var fillNavBar, names, urls;

  names = ["Home Base", "About This Base"];

  urls = ["index.html", "about.html"];

  fillNavBar = function() {
    var index, name, navbar, nextEl, _len;
    navbar = document.getElementsByClassName("nav")[0];
    for (index = 0, _len = names.length; index < _len; index++) {
      name = names[index];
      nextEl = document.createElement("a");
      nextEl.innerText = name;
      nextEl.href = "http://tylerwayne.github.com/" + urls[index];
      if ((document.URL.search(urls[index])) !== -1) nextEl.className = "current";
      navbar.appendChild(nextEl);
    }
    return navbar.style.display = "block";
  };

  window.addEventListener('load', fillNavBar);

}).call(this);
