const accordion = document.querySelectorAll('.accordian');

accordion.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answers');

    icon.addEventListener('click', () => {
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';    //scroll gives integer value, that's why use px, it will convert value to integer...
        }
       
    })
})