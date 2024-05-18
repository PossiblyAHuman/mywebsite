function homepage()
{
  location.href = "/templates/homepage.html"
}
function resume()
{
  location.href = "/templates/resume.html"
}
function interests()
{
  location.href = "/templates/interests.html"
}
function projects()
{
  location.href = "/templates/projects.html"
}

function linkedin()
{
  window.open("https://www.linkedin.com/in/azhou7/", "_blank");
}

function interest_tech() {
  var box = document.getElementById("techbox");

  if (box.hidden == true)
  {
    box.hidden = false
  } else {
    box.hidden = true
  }
}

function interest_programming() {
  var box = document.getElementById("programmingbox");

  if (box.hidden == true)
  {
    box.hidden = false
  } else {
    box.hidden = true
  }
}