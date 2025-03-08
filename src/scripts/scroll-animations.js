/**
 * Scroll Animations
 * 
 * This script adds animation effects to elements when they enter the viewport.
 * It targets elements with the 'animate-on-scroll' class and applies the appropriate
 * animation class based on data attributes.
 */

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If element is in view
      if (entry.isIntersecting) {
        // Get the animation type from data attribute, default to fade-up
        const animationType = entry.target.dataset.animation || 'fade-up';
        
        // Apply the animation class
        entry.target.classList.add(`animate-${animationType}`);
        
        // Stop observing after animation is applied
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Adds a little offset to trigger earlier
  });
  
  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add hover effects for elements with data-hover attributes
  const hoverElements = document.querySelectorAll('[data-hover]');
  
  hoverElements.forEach(element => {
    const hoverEffect = element.dataset.hover;
    
    if (hoverEffect) {
      element.classList.add(`hover-${hoverEffect}`);
    }
  });
  
  // Optional: Add animated glow effect to specific elements
  const glowElements = document.querySelectorAll('[data-glow="true"]');
  
  glowElements.forEach(element => {
    element.classList.add('animate-glow');
  });
}); 