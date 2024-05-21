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
function github()
{
  window.open("https://github.com/PossiblyAHuman", "_blank");
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



function allProjects() {
  request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

      var response = JSON.parse(this.response)

      length = response.length

      box4 = document.getElementById("Box4");
      box4.innerHTML = ""

      for (let i = 0; i < length; ) {

        projrow = document.createElement("div");
        projrow.className = "projectRow";

        let j = i;

        var counter = 0
        for (; i < length && i < j+3; i++) {

          const projcardcontainer = document.createElement("div");
          projcardcontainer.className = "projectCardContainer";

          const projcard = document.createElement("div");
          projcard.className = "projectCard";

          /*projcard.innerHTML = response[i]["title"];*/
          projcard.style.backgroundImage = "url("+ response[i]["image"] +")";
          projcard.style.backgroundColor = "white";
          
          const projcardtitle = document.createElement("div");
          projcardtitle.className = "projectCardTitle";
          projcardtitle.innerHTML = response[i]["title"];

          projcardcontainer.appendChild(projcard);
          projcardcontainer.appendChild(projcardtitle);

          projrow.appendChild(projcardcontainer);
          
          const currentIndex = i;
          projcardcontainer.onclick = function () {
            window.open(response[currentIndex]["url"], "_blank");
          };

          counter++
        }

        while (counter != 3) {
          const fillerProjectCard = document.createElement("div");
          fillerProjectCard.className = "fillerProjectCard";
          fillerProjectCard.style.backgroundColor = "transparent";
          projrow.appendChild(fillerProjectCard);
          counter++
        }



        box4.append(projrow)
      }
      
    }
  }

  request.open("GET", "/allProjects")
  request.send()
}