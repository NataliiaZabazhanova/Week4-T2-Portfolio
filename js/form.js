"use strict"
//document is loaded? -> work with it
document.addEventListener('DOMContentLoaded', function() {
    //catch sending form
    const form = document.querySelector('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        
    }
});