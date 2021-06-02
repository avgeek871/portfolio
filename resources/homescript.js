
/* About Me Functions */

function changeInfoBoxToProjects () {
    document.getElementById('about-me').style.opacity = "0";
    document.getElementById('skills').style.opacity = "0";
    document.getElementById('projects').style.opacity = "1";
};
function changeInfoBoxToSkills () {
    document.getElementById('about-me').style.opacity = "0";
    document.getElementById('projects').style.opacity = "0";
    document.getElementById('skills').style.opacity = "1";
};
function changeInfoBoxToAbout () {
    document.getElementById('skills').style.opacity = "0";
    document.getElementById('projects').style.opacity = "0";
    document.getElementById('about-me').style.opacity = "1";
};

/* Event Listeners */

document.getElementById('a').addEventListener("click", changeInfoBoxToAbout);
document.getElementById('b').addEventListener("click", changeInfoBoxToProjects);
document.getElementById('c').addEventListener("click", changeInfoBoxToSkills);