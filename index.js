var btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    btn.textContent = "Done";
});


function whichElement(e) {
    var targ;
    if (!e) {
      var e = window.event;
    }
    if (e.target) {
      targ=e.target;
    } else if (e.srcElement) {
      targ=e.srcElement;
    }
    var tname;
    tname = targ.tagName;
    alert("You clicked on a " + tname + " element.");
  }

  function color(color) {
    document.forms[0].myInput.style.background = color;
  }

//   onmousedown="whichElement(event)"