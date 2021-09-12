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
