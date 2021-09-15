let choices = [];//getters and setters

function showModal(modal) {
  modal.style.display = 'block';
}

function hideModal(modal) {
  modal.style.display = 'none';
}
window.onclick = function(event){
  let modals = document.getElementsByClassName("modal");
  for(let i=0; i < modals.length; i++){
    if(event.target == modals[i]){
      hideModal(modals[i]);
    }
  }
}

let boxes = document.querySelector("#plans").querySelectorAll(".plan-box");
for(let x of boxes){
  x.onclick = function() { addChoice(x.getAttribute('value'));
  };
}

function addChoice(text) {
  const choice = {
    id : Date.now(),
    name: text,
    counter:0
  }
  let prev = choices.find(elem => elem.name == text);
  if (prev){
    prev.counter++;
  }else{
    choices.push(choice);
  }
  localStorage.setItem('choiceRef', JSON.stringify(choices));
}

const form = document.querySelector("#email-form");
form.addEventListener('submit',event => emailForm('#email-input'));

function emailForm(inputId){
  event.preventDefault();
  const input = document.querySelector(inputId);
  const text = input.value.trim();
  if(text !== ''){
    addEmail(text);
    input.value = '';
  }
}

function addEmail(text){
  const user = {
    id : Date.now(),
    email:text
  }
  localStorage.setItem('emailRef', JSON.stringify(user));
}

document.addEventListener('DOMContentLoaded', () => {
  const choiceRef = localStorage.getItem('choiceRef');
  if (choiceRef){
    choices = JSON.parse(choiceRef);
  }
});
