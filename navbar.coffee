names = [
	"Home Base",
	"About This Base"
]
urls = [
	"index.html",
	"about.html"
]

# Create the navigation bar.
fillNavBar = ->
	navbar = document.getElementsByClassName("nav")[0]
	for name,index in names
		nextEl = document.createElement "a"
		nextEl.innerText = name
		nextEl.href = "http://tylerwayne.github.com/" + urls[index]
		# Determine the current page
		if (document.URL.search urls[index]) != -1
			nextEl.className = "current"
		navbar.appendChild (nextEl)
	navbar.style.display = "block"

window.addEventListener 'load', fillNavBar
