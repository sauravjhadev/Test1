const addHeaderEffect =()=>{
    // Select the header element
const header = document.querySelector('header');

// Get the height of the header
const headerHeight = header.offsetHeight;

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > headerHeight) {
    // Add 'sticky' class when scrolling beyond the header height
    header.classList.add('sticky');
    header.classList.remove('fixed');
  } else {
    // Add 'fixed' class when scrolling back to the top
    header.classList.add('fixed');
    header.classList.remove('sticky');
  }
});

}

export {addHeaderEffect};
