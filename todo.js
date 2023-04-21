const addTodoButton = document.getElementById("new-todo");
console.log(addTodoButton);

//youtuber mu-zaru-channelを一部参考にソースコードは以下
// https://github.com/moozaru-ch/mu-zaru-channel/blob/master/todo-javascript/day2/index.html

// addTodoButton.addEventListner("click", () => {
//   const input = document.querySelector("#new-todo");
//   const text = input.value;

//   input参照してString型で
//   input.value = "";

//   const newLi = document.createElement("li");
//   //inputに入れる
//   newLi.innerText = text;
//   console.log(newLi);
// });

//newTODOの挙動
function newTodoBtn(){ 
  const input = document.getElementById('new-todo');
  const text = input.value;
  //value参照
  input.value = '';
  const newLi = document.createElement('li');
  
  newLi.innerText = text;
  console.log(input);
  
  document.querySelector('ul').appendChild(newLi);
  //下消しても可
  // newLi.appendChild(input);
}

function addNewBtn() { 

  let newBtn = document.createElement('button');
  newBtn.innerText = 'done';

  console.log(newBtn);

  document.querySelector('ul').appendChild(newBtn)
}
