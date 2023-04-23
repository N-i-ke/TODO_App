//Todo.js 

//func clicBtn()
function clickBtn() {
  const Input = document.getElementById("new-todo");
  const Text = Input.value;
  Input.value = "";
  
  const createBtn = document.createElement("button");
  createBtn.className = 'add_button'
  createBtn.innerText = "done";

  const createLi = document.createElement("li");
  createLi.className = 'add_li'
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

