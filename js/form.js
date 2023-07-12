"use strict";
//document is loaded? -> work with it
document.addEventListener('DOMContentLoaded', function() {
    //catch sending form
    const form = document.querySelector('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        //Check up name and email
        let error = formValidate(form);
        //For sending form info
        //All data from fields
        let formData = new FormData(form);
        //Image
        formData.append('image', formImage.files[0]);

        if (error === 0) {
        form.classList.add('_sending');
        //For sending form info
        
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        //Check up status sending information
        if (response.ok) {
            let result = await response.json();
            alert("result.message");
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');

        }else {
            alert("Error");
            form.classList.remove('_sending');
        }

        } else {
            alert ("Fill in required fields");
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
            }
        }
        }
        return error;
    }
    //helping functions
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //------------------------------------------------
    //for check up email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    //Preview photo
    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');
    
    formImage.addEventListener("change", () => {
        uploadFile(formImage.files[0]);
    });

    function  uploadFile(file) {
        //check up file type
        //'image/.psd', 'image/.fig', 'image/.xd', 'image/.sketch', 'image/.svg'
        if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
            alert("Wrong format");
            formImage.value = '';
            return;
        }
        /*
        if (file.size > 2 * 1024 * 1024) {
            alert("File size should be not more than 2 Mb");
            return;
        }
        */

        //preview settings
        var reader = new FileReader();
        reader.onload = function(e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt='maket'>`;
        };
        reader.onerror = function(e) {
            alert("Error");
        };
        reader.readAsDataURL(file);
        }
        //------------------------------------

});