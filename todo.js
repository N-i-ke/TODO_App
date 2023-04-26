//Todo.js 

//func clicBtn()
function clickBtn() {
  const Input = document.getElementById("new-todo");
  const Text = Input.value;
  Input.value = "";

  const createBtn = document.createElement("button");
  // material.js framework col s2
  createBtn.className = "add_button col s2";
  createBtn.innerText = "完了";

  const createLi = document.createElement("li");
  // material.js framework col s2
  createLi.className = "input-field col s2";
  createLi.innerText = Text;

  //clickされた時にline-throughを持ってなかったら付け加えて持ってたらつける
  createBtn.onclick = function () {
    if (createLi.style.textDecoration === "line-through") {
      createLi.style.textDecoration = "none";
    } else {
      createLi.style.textDecoration = "line-through";
    }
  };

  document.getElementById("ul").appendChild(createLi);
  document.getElementById("ul").appendChild(createBtn);
}



  //追加されるTODOListのresponsive対応
  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("resize", function () {
  
      if (window.matchMedia("screen and (max-width: 994px)").matches) {
        //framework materialz.jsのcssのcolを付与して対応する
        let getCol = document.getElementById("ul")[0];
        // getCol.style.display = 'block';

      }
    });
  });
