// Dynamic Background Animation
document.addEventListener('DOMContentLoaded', () => {
  // Create the dynamic background element
  const dynamicBg = document.createElement('div');
  dynamicBg.className = 'dynamic-bg';
  document.body.prepend(dynamicBg);

  // Add subtle floating particles
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    
    // Random size (very small)
    const size = Math.random() * 2 + 1;
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    
    // Random delay
    const delay = Math.random() * 10;
    
    // Apply styles
    particle.style.left = `${xPos}%`;
    particle.style.top = `${yPos}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
    
    dynamicBg.appendChild(particle);
  }
}); 