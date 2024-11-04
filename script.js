/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
  
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown");
    a = div.getElementsByTagName("span");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

document.getElementById('close-icon').addEventListener('click', event => {
  // Prevent the other event listener from triggering
  event.stopImmediatePropagation(); 

  // Remove the selected option
  document.getElementById("button-text").innerText = "Please select";

  // Remove the Price tag
  document.getElementById("price-text").innerText = "";
  document.querySelector(".price-text-container").style.display = "none";

  // Remove the close icon
  document.getElementById('close-icon').style.display = "none";
});
  