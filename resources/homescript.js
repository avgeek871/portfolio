
/* Element Variables */

const amt = document.getElementById('about-me');
const ami = document.getElementById('about-me-img');
const st = document.getElementById('skills');
const si = document.getElementById('skills-img');
const pt = document.getElementById('projects');
const pi = document.getElementById('projects-img');


/* About Me Functions */

function changeInfoBoxToProjects () {
    amt.style.opacity = "0";
    ami.style.opacity = "0";
    st.style.opacity = "0";
    si.style.opacity = "0";
    pt.style.opacity = "1";
    pi.style.opacity = "1";
};
function changeInfoBoxToSkills () {
    amt.style.opacity = "0";
    ami.style.opacity = "0";
    pt.style.opacity = "0";
    pi.style.opacity = "0";
    st.style.opacity = "1";
    si.style.opacity = "1";    
};
function changeInfoBoxToAbout () {
    st.style.opacity = "0";
    si.style.opacity = "0";
    pt.style.opacity = "0";
    pi.style.opacity = "0";
    amt.style.opacity = "1";
    ami.style.opacity = "1";
};

/* Event Listeners */

document.getElementById('a').addEventListener("click", changeInfoBoxToAbout);
document.getElementById('b').addEventListener("click", changeInfoBoxToProjects);
document.getElementById('c').addEventListener("click", changeInfoBoxToSkills);