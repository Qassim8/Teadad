let popupBox    = document.querySelector('.popup'),
    popupSuc    = document.querySelector('.popup .suc-popup'),
    popupFail   = document.querySelector('.popup .fail-popup'),
    crossSuc   = document.querySelector('.cross'),
    crossFail  = document.querySelector('.cros');

// Register Page
let registerBtn = document.querySelector('.register'),
    formFields  = document.querySelectorAll('.register input:not([type = "submit"])');
    
registerBtn[1].oninput = function(){
    if(this.value === registerBtn[0].value){
        this.style.cssText = 'border: 1px solid green;'
    }else{
        this.style.cssText = 'border: 1px solid red;'
    }
}
registerBtn[1].onblur = function(){
    this.style.cssText = 'border: none;'
}
registerBtn[3].oninput = function(){
    if(this.value === registerBtn[2].value){
        this.style.cssText = 'border: 1px solid green;'
    }else{
        this.style.cssText = 'border: 1px solid red;'
    }
}
registerBtn[3].onblur = function(){
    this.style.cssText = 'border: none;'
}
registerBtn[6].oninput = function(){
    if(this.value === registerBtn[5].value){
        this.style.cssText = 'border: 1px solid green;'
    }else{
        this.style.cssText = 'border: 1px solid red;'
    }
}
registerBtn[6].onblur = function(){
    this.style.cssText = 'border: none;'
}
    registerBtn.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    function popUp(){
        for (let i = 0; i < formFields.length; i++) {
            if(formFields[i].value !== null && formFields[i].value !== ''){
                popupBox.style.display = 'block';
                popupSuc.style.display = 'block';
                popupFail.style.display = 'none';
                
            }else{
                popupBox.style.display = 'block';
                popupFail.style.display = 'block';
                console.log(formFields[i])
            }
    }
    }
    popUp();
});
crossSuc.onclick = function(){
    popupBox.style.display = 'none';
}
crossFail.onclick = function(){
    popupBox.style.display = 'none';
}
//End Register
//Start Borns

//End Borns


