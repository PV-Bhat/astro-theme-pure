/**
 * Scroll Animation Observer
 * 
 * This script automatically applies animation effects to elements as they enter the viewport.
 * Based on the test2 template animations but adapted for the Darkrise design language.
 */

// Create a single observer for all animation elements
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements to animate
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (animatedElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add the animation class when element is in view
      if (entry.isIntersecting) {
        const el = entry.target;
        const animation = el.dataset.animate;
        const delay = el.dataset.delay || 0;
        
        // Set delay if specified
        el.style.animationDelay = `${delay}ms`;
        
        // Add the animation class
        el.classList.add(`animate-${animation}`);
        
        // Add animate-active class for any custom CSS
        el.classList.add('animate-active');
        
        // Stop observing once animation is applied
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,  // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -10% 0px' // Slightly offset to trigger animations before elements fully enter viewport
  });
  
  // Start observing each animated element
  animatedElements.forEach(element => {
    // Set initial opacity to 0 to prevent flash
    element.style.opacity = '0';
    observer.observe(element);
  });
  
  // Apply hover effects to elements with data-hover attribute
  const hoverElements = document.querySelectorAll('[data-hover]');
  
  hoverElements.forEach(element => {
    const hoverEffect = element.dataset.hover;
    element.classList.add(`hover-${hoverEffect}`);
  });
  
  // Apply glow effects to elements with data-glow attribute
  const glowElements = document.querySelectorAll('[data-glow]');
  
  glowElements.forEach(element => {
    // Apply glow class
    element.classList.add('glow-effect');
    
    // Create a gradient glow overlay if data-glow-color is specified
    const glowColor = element.dataset.glowColor;
    if (glowColor) {
      const glowOverlay = document.createElement('div');
      glowOverlay.classList.add('glow-overlay');
      glowOverlay.style.background = `radial-gradient(circle, ${glowColor}20 0%, transparent 70%)`;
      
      // Insert the glow overlay
      element.style.position = 'relative';
      element.appendChild(glowOverlay);
    }
  });
}); 