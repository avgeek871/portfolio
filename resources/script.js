
/* About Me Functions */

function changeInfoBoxToProjects () {
    document.getElementById('about-me').style.visibility = "hidden";
    document.getElementById('skills').style.visibility = "hidden";
    document.getElementById('projects').style.visibility = "visible";
};
function changeInfoBoxToSkills () {
    document.getElementById('about-me').style.visibility = "hidden";
    document.getElementById('projects').style.visibility = "hidden";
    document.getElementById('skills').style.visibility = "visible";
};
function changeInfoBoxToAbout () {
    document.getElementById('skills').style.visibility = "hidden";
    document.getElementById('projects').style.visibility = "hidden";
    document.getElementById('about-me').style.visibility = "visible";
};

/* Event Listeners */

document.getElementById('a').addEventListener("click", changeInfoBoxToAbout);
document.getElementById('b').addEventListener("click", changeInfoBoxToProjects);
document.getElementById('c').addEventListener("click", changeInfoBoxToSkills);