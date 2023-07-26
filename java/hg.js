let a = document.getElementById('but1')
a.onclick = function(){
        the.href = 'style.css'
}
let b = document.getElementById('but2')
b.onclick = function(){
        the.href = 'gf.css'
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.okno-btn')) {

    let dropdowns = document.getElementsByClassName("okno-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


