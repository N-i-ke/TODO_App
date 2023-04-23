//ボタンを押したらliタグとbuttonタグが増える動き

function clickBtn() { 

    const testInput = document.getElementById('new-todo');
    const testText = testInput.value;

    const createBtn = document.createElement('button');
    createBtn.innerText = 'done';
    
    testInput.value = '';

    const createLi = document.createElement('li');
    createLi.innerText = testText;

    document.querySelector('ul').appendChild(createLi);
    document.querySelector('ul').appendChild(createBtn);
    
}

