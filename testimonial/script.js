// script.js

// Testimonial data
const testimonials = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor interdum sapien, ac feugiat dolor euismod sed.',
        author: 'John Doe',
        image: 'image1.jpg',
        date: '23/06/2023'
    },
    {
        content: 'Nullam vel purus enim. Suspendisse aliquet justo quis risus ultrices, ut eleifend urna aliquam.',
        author: 'Jane Smith'
    },
    {
        content: 'Donec at elit ante. Ut sed metus hendrerit, condimentum elit ut, convallis mauris.',
        author: 'Mike Johnson'
    }
];

let currentTestimonialIndex = 0;

// Create testimonial elements
const testimonialContainer = document.getElementById('testimonialContainer');

function renderTestimonial() {
    testimonialContainer.innerHTML = '';

    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');

    const contentElement = document.createElement('p');
    contentElement.textContent = testimonials[currentTestimonialIndex].content;

    const authorElement = document.createElement('div');
    authorElement.classList.add('author');
    authorElement.textContent = `- ${testimonials[currentTestimonialIndex].author}`;

    testimonialElement.appendChild(contentElement);
    testimonialElement.appendChild(authorElement);
    testimonialContainer.appendChild(testimonialElement);
}

function showPreviousTestimonial() {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    renderTestimonial();
}

function showNextTestimonial() {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    renderTestimonial();
}

renderTestimonial();

// Previous and Next buttons event listeners
const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';
previousButton.addEventListener('click', showPreviousTestimonial);

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', showNextTestimonial);

const navigationContainer = document.createElement('div');
navigationContainer.classList.add('navigation');
navigationContainer.appendChild(previousButton);
navigationContainer.appendChild(nextButton);

testimonialContainer.appendChild(navigationContainer);