from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/interests")
def interests():
    return render_template("interests.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 8080)