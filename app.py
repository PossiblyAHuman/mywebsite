from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def homepage1():
    return render_template("homepage.html")

@app.route("/templates/homepage.html")
def homepage2():
    return render_template("homepage.html")

@app.route("/templates/interests.html")
def interests():
    return render_template("interests.html")

@app.route("/templates/resume.html")
def resume():
    return render_template("resume.html")

@app.route("/templates/projects.html")
def project():
    return render_template("projects.html")

@app.route("/allProjects")
def allProjects():
    proj1 = {}
    proj1["title"] = "proj1"
    proj1["url"] = "https://www.google.com"
    proj1["image"] = "../static/me.png"

    proj2 = {}
    proj2["title"] = "proj2"
    proj2["url"] = "https://www.facebook.com"
    proj2["image"] = "../static/githublogo.jpg"

    proj3 = {}
    proj3["title"] = "proj3"
    proj3["url"] = "https://www.twitter.com"
    proj3["image"] = "../static/leetcodelogo.png"

    proj4 = {}
    proj4["title"] = "proj4"
    proj4["url"] = "https://www.youtube.com"
    proj4["image"] = "../static/linkedinlogo.png"

    proj5 = {}
    proj5["title"] = "proj5"
    proj5["url"] = "https://www.microsoft.com"
    proj5["image"] = "../static/githublogo.jpg"

    listie = [proj1, proj2, proj3, proj4, proj5]

    print("listielistie", listie)
    return listie

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 8080)