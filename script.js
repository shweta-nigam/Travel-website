
  const destinationItems = document.querySelectorAll('.destination-item');
  const destinationImg = document.getElementById('destination-img');

  destinationItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      const imgSrc = item.getAttribute('data-img');
      destinationImg.src = imgSrc;
      destinationImg.classList.add('fade-in');
    });

    item.addEventListener('mouseout', function() {
      destinationImg.classList.remove('fade-in');
    });
  });




const navDestinations = document.getElementById('nav-destinations');
const hiddenPage = document.querySelector('.hidden-1');

// Flag to track whether the user is hovering over the nav or the hidden section
let isHovering = false;

// Show hidden page when mouse enters the "Destinations" link
navDestinations.addEventListener('mouseenter', () => {
    isHovering = true;
    hiddenPage.style.display = 'flex';
});

// Show hidden page when mouse enters the hidden section
hiddenPage.addEventListener('mouseenter', () => {
    isHovering = true;
    hiddenPage.style.display = 'flex';
});

// Hide hidden page when mouse leaves both "Destinations" link and the hidden section
navDestinations.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!isHovering) {
            hiddenPage.style.display = 'none';
        }
    }, 300);
});

hiddenPage.addEventListener('mouseleave', () => {
    setTimeout(() => {
        isHovering = false;
        hiddenPage.style.display = 'none';
    }, 300);
});

// slider carousel

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}