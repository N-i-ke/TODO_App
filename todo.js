//Todo.js 

const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener("click", function () {
  
  const Input = document.querySelector("#todoBtn");
   const Text = Input.value;
   Input.value = "";

   const createBtn = document.createElement("button");
   createBtn.className = "add_button col s2";
   createBtn.innerText = "完了";

   const createLi = document.createElement("li");
   createLi.className = "input-field col s2";
   createLi.innerText = Text;

   createBtn.onclick = function () {
     if (createLi.style.textDecoration === "line-through") {
       createLi.style.textDecoration = "none";
     } else {
       createLi.style.textDecoration = "line-through";
     }
   };

  document.getElementById("ul").appendChild(createLi);
  document.getElementById("ul").appendChild(createBtn);
  
  //localStrage　04/27
  const inputData = Text;
  //inputDataにTodolistの内容を入れる
  localStorage.setItem('key', inputData);
  //localStrageのkeyにtodolistのkeyを入れる
  const saveData = localStorage.getItem('key');
  //localStrageのkeyを取得
  Text = saveData;
});

//responsive対応をしていく 04/26
window.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("resize", function () {
  
    if (window.matchMedia("screen and (max-width: 994px)").matches) {
      //framework materialz.jsのcssのcolを付与して対応する
      let getCol = document.getElementById("ul")[0];
      // getCol.style.display = 'block';

    }
  });
});

window.addEventListener("beforeunload", function () {
  localStorage.clear();
});



