function burgerFunction() {
  let x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

let y = document.getElementById("dmToggle");
let z = document.getElementById("darkmodeToggle");
let r = document.querySelector(":root");

let toggleActive = localStorage.getItem("toggleActive")
toggleActive = JSON.parse(toggleActive) === true;

// toggleActive = localStorage.getItem("toggleActive");
if (toggleActive === true) {
  y.className += " toggle";
  z.className = "fa fa-toggle-on";
  r.style.setProperty("--backgroundColour", "#0d0d0d");
  r.style.setProperty("--textColour", "#fdfdfd");
  console.log(toggleActive, "test1")
} else {
  r.style.setProperty("--backgroundColour", "#fdfdfd");
  r.style.setProperty("--textColour", "#0d0d0d");
  console.log(toggleActive, "test2")
}

function darkmodeFunction() {
  
  if (y.className === "darkmodeAnchor") {
    y.className += " toggle";
    z.className = "fa fa-toggle-on";
    r.style.setProperty("--backgroundColour", "#0d0d0d");
    r.style.setProperty("--textColour", "#fdfdfd");
    localStorage.setItem("toggleActive", "true")
    console.log(toggleActive, "test3")
  } else {
    y.className = "darkmodeAnchor";
    z.className = "fa fa-toggle-off";
    r.style.setProperty("--backgroundColour", "#fdfdfd");
    r.style.setProperty("--textColour", "#0d0d0d");
    localStorage.setItem("toggleActive", "false")
    console.log(toggleActive, "test4")
  }
}

