const addTodoButton = document.getElementById("new-todo");
console.log(addTodoButton);

// addTodoButton.addEventListner("click", () => {
//   const input = document.querySelector("#new-todo");
//   const text = input.value;

//   //input参照してString型で返す
//   input.value = "";

//   const newLi = document.createElement("li");
//   //inputで入ったものを入れる
//   newLi.innerText = text;
//   console.log(newLi);
// });

//newTODOの挙動
function newTodoBtn(){ 
  const input = document.getElementById('new-todo');
  const text = input.value;
  //input.valueに文字列を入れちゃう
  input.value = '';
  const newLi = document.createElement('li');
  //liタグの中にtextを入れる
  newLi.innerText = text;
  console.log(input);
  //ここでliタグを作ってるから
  document.querySelector('ul').appendChild(newLi);
  // newLi.appendChild(input);
}

function addNewBtn() { 

  let newBtn = document.createElement('button');
  newBtn.innerText = 'done';

  console.log(newBtn);

  document.querySelector('ul').appendChild(newBtn)
}
