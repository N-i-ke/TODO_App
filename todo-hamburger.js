//hamburger-menuの全体の要素をクリックしたときに動く
function toggleMenu() {
  const getHamID = document.getElementById("hamburger-wrap");

  console.log(getHamID);

  if (getHamID.style.display === "none") {
    getHamID.style.display = "block";
  } else {
    getHamID.style.display = "none";
  }
}
