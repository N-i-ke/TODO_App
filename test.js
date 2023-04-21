
function test_create_button() { 

    var body = document.getElementsByTagName('body')[0];
    var getID = document.getElementById('test');
    var getLi = document.createElement('li');

    for (let i = 0; i < 2; i++) { 
        //中ループ二つ取れる
        var liBox = document.createElement('div');
      
        for (let j = 0; j < 2; j++) { 
            var pF = document.createElement('p');
            var pS = document.createElement('p');

            pF.appendChild(liBox);
            pS.appendChild(liBox);
        }
        getLi.appendChild(liBox);
        //一旦divを入れる
    }
    getID.appendChild(getLi);
    body.appendChild(getID);
}

addBtn()
function addBtn() { 
    const addTodoButton = document.querySelectorAll('#new-todo');
    //ID検索してクリックされたら
    addTodoButton.addEventListner('click', () => {
        
        const input = document.querySelector('#new-todo');
        const text = input.value;

        console.log(text);



    });
}

//必要なファイルtodo.html
// todo.js
// test.js
// sass bem記法
// todo.scss
// todo.css
// reset.css