//Todo.js

let main = () => {
  setupHeader();
  setupFooter();
  setupTodoList();
};

let setupHeader = () => {
  //jquery
  $(document).ready(function () {
    $(".sidenav").sidenav({
      edge: "left",
    });
  });
};

let setupFooter = () => {
  //footer
  const plusBtn = document.querySelector("#plusBtn");
  const trashBtn = document.querySelector("#trashBtn");

  //footer左ボタンのゴミ箱機能
  trashBtn.addEventListener("click", function () {
    const getUlID = document.getElementById("ul");
    const fisTodoList = getUlID.children[0];
    const secTodoList = getUlID.children[1];

    //todo-listにcss line-throughが存在したら消えるように実装
    if (fisTodoList.style.textDecoration === "line-through") {
      deleteFirstElement = getUlID.removeChild(fisTodoList);
      deleteSecondElement = getUlID.removeChild(secTodoList);
    } else {
      alert("本当に削除してもよろしいですか？");
    }
  });
  //footer右ボタンの要素追加機能
  plusBtn.addEventListener("click", function () {
    console.log("plus");
  });
};

let setupTodoList = () => {
  const addBtn = document.querySelector("#addBtn");

  addBtn.addEventListener("click", function () {
    const Input = document.querySelector("#todoBtn");
    const Text = Input.value;
    Input.value = "";

    const createBtn = document.createElement("button");
    createBtn.className = "add_button col s2";
    createBtn.id = "todoID";
    createBtn.innerText = "完了";

    const createLi = document.createElement("li");
    createLi.className = "input-field col s2";
    createLi.id = "todoID";
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

    const inputData = Text;
    localStorage.setItem("key", inputData);

    //ここで保存がされてるのでここを削除する必要がある
    // const saveData = localStorage.getItem('key');
    // Text = saveData;

    //loadしたらローカルストレージの履歴は消える
    window.addEventListener("beforeunload", function () {
      localStorage.clear();
    });
  });
};

main();

