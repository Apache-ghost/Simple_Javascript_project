// script.js

// FAQ data
const faqs = [
    {
        question: 'Question 1',
        answer: 'Answer 1'
    },
    {
        question: 'Question 2',
        answer: 'Answer 2'
    },
    {
        question: 'Question 3',
        answer: 'Answer 3'
    }
];

// Create FAQ elements
const faqContainer = document.getElementById('faqContainer');

faqs.forEach((faq, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = faq.question;

    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.textContent = faq.answer;
    answerElement.style.display = 'none';

    const dropdownButton = document.createElement('button');
    dropdownButton.textContent = 'Show Answer';

    dropdownButton.addEventListener('click', () => {
        if (answerElement.style.display === 'none') {
            answerElement.style.display = 'block';
            dropdownButton.textContent = 'Hide Answer';
        } else {
            answerElement.style.display = 'none';
            dropdownButton.textContent = 'Show Answer';
        }
    });

    questionElement.appendChild(dropdownButton);
    faqContainer.appendChild(questionElement);
    faqContainer.appendChild(answerElement);
});