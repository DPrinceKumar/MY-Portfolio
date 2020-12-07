
//data modal
function showModal(index){
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display="block";
}
function hideModal(e){
    if(e.target.className=="modal"){
        let modal=document.getElementsByClassName("modal")[0];
        modal.style.display="none";
    }
}

