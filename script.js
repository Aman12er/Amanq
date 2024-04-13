function showsidebar(){
    const sidebar=document.querySelector('.slidebar')
    sidebar.style.display='flex'

}
function hidesidebar(){
    const sidebar=document.querySelector('.slidebar')
    sidebar.style.display='none'
    
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-description');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const description = button.parentElement.querySelector('.description');
            description.classList.toggle('hidden');
        });
    });
});


  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (!isInViewport(card)) {
            card.style.left = '0%'; // Move the card to the left edge
        }
    });
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check when the page loads
  handleScroll();