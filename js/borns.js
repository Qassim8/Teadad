let popupBox    = document.querySelector('.popup'),
    popupSuc    = document.querySelector('.popup .suc-popup'),
    popupFail   = document.querySelector('.popup .fail-popup'),
    crossSuc   = document.querySelector('.cross'),
    crossFail  = document.querySelector('.cros');
    
let registerBtn = document.querySelector('form'),
    formFields  = document.querySelectorAll('form input:not([type = "submit"])');

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