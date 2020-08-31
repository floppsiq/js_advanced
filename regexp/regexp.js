const textBefore = document.getElementById('text-box__before-text'); 
const textAfter = document.getElementById('text-box__after-text'); 

let changeText = () => {
    let str = textBefore.textContent;
    console.log(str);
    //Решение первого задания
    //textAfter.innerText = str.replace(/\'/g, '"');
    //Решение второго задания
    textAfter.innerText = str.replace(/\B'|'\B/g, '"');
}
document.getElementById('btn-change-text').addEventListener("click", changeText);