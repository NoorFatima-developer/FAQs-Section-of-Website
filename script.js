const accordion = document.querySelectorAll('.accordian');

accordion.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answers');

    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
        
    })

})