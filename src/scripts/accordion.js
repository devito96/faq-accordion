const faqQuestions = document.querySelectorAll('.question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        faqQuestions.forEach(question => {
            question.classList.remove('active')
        });
        question.classList.add('active')
    })
})