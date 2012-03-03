names = [
	"Home Base",
	"About This Base"
]
urls = [
	"index.html",
	"about.html"
]

# Determine if the given URL is the current page
isCurrent = (url) ->
	if (document.URL.search url) != -1
		return true
	else if document.URL == "http://tylerwayne.github.com" and \
	url == "index.html"
		return true
	else
		return false
		
# Create the navigation bar.
fillNavBar = ->
	navbar = document.getElementsByClassName("nav")[0]
	for name,index in names
		nextEl = document.createElement "a"
		nextEl.innerText = name
		nextEl.href = "http://tylerwayne.github.com/" + urls[index]
		# Determine the current page
		if isCurrent urls[index]
			nextEl.className = "current"
		navbar.appendChild (nextEl)
	navbar.style.display = "block"

window.addEventListener 'load', fillNavBar
