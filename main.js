function clickBtn() { 

    //liタグを作る
    const testInput = document.getElementById('test-new-todo');
    const testText = testInput.value;

    //buttonタグを作る
    const createBtn = document.createElement('button');
    createBtn.innerText = 'done';
    

    testInput.value = '';

    const createLi = document.createElement('li');
    createLi.innerText = testText;

    document.querySelector('ul').appendChild(createLi);
    document.querySelector('ul').appendChild(createBtn);
    
}
