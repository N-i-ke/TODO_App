//footer

const plusBtn = document.querySelector('#plusBtn');
const trashBtn = document.querySelector('#trashBtn');

//footer左ボタンのゴミ箱機能
trashBtn.addEventListener("click", function () {

  const getUlID = document.getElementById("ul");
  const fisTodoList = getUlID.children[0];
  const secTodoList = getUlID.children[1];
  
  //todo-listにcss line-throughが存在したら消えるように実装
  if (fisTodoList.style.textDecoration === "line-through") {

    deleteFirstElement = getUlID.removeChild(fisTodoList);
    deleteSecondElement = getUlID.removeChild(secTodoList);

  }

});

//footer右ボタンの要素追加機能
plusBtn.addEventListener('click', function () {

  console.log('plus');

});


