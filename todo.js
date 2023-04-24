//Todo.js 

//func clicBtn()
function clickBtn() {
  const Input = document.getElementById("new-todo");
  const Text = Input.value;
  Input.value = "";
  
  const createBtn = document.createElement("button");
  //material.js
  createBtn.className = 'add_button col s2'
  createBtn.innerText = "done";

  const createLi = document.createElement("li");
  //material.js
  createLi.className = 'add_li col s2'
  createLi.innerText = Text;

  //clickされた時にline-throughを持ってなかったら付け加えて持ってたらつける
  createBtn.onclick = function () { 
    if (createLi.style.textDecoration === 'line-through') {
      createLi.style.textDecoration = 'none';
    } else { 
      createLi.style.textDecoration = "line-through";
    }
  }

  document.getElementById("ul").appendChild(createLi);
  document.getElementById("ul").appendChild(createBtn);

  console.log('TODOListは追加されています。');
}

