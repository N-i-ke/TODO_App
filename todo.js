//func todoAction() 
function todoAction() { 
    const buttonList = document.querySelectorAll('button');

    buttonList.forEach((button) => { 
        button.addEventListener('click', () => { 
            button.closest('.todo_done');
            console.log(button.closest('.todo_done'));
            // li.classList.add('done');
        });
    });
}

// func increTODO() ボタンを押した時に新しいリストを作る関数
function increTODO() {
  //liタグを生成
  const getTodo = document.getElementById("list_ID");
  let getLi = document.createElement("li");

  const getSen = document.getElementsByClassName("todo_sen")[0];
  getSen.textContent = "todo_sentence";
  console.log(getSen.textContent = "todo_sentence");

  const getNextSen = document.getElementsByClassName("next_todo_sen")[0];
  getNextSen.textContent = "next_todo_sentence";

  insertSentence();
  //creatButton関数とinsert関数
  creatButton();
  //class next_todo_senを参照
  nextInsertSen();

  function creatButton() {
    const getButton = document.createElement("button");
    getLi.appendChild(getButton);
  }

  function insertSentence() {
    const getSen = document.getElementsByClassName("todo_sen")[0];
    getSen.textContent = "Todo {ここに四番目の数値を入れる} ";
  }

  function nextInsertSen() {
    const nextSen = document.getElementsByClassName("next_todo_sen")[0];
    nextSen.textContent = "とりあえずなんか入れる";
  }

  //一番最初はliタグがid = "list_ID"を参照して生成される
  getTodo.appendChild(getLi);
  getLi.appendChild(getSen)
  getLi.appendChild(getNextSen);

  //2回目以降のクリックで対応してないから
}

