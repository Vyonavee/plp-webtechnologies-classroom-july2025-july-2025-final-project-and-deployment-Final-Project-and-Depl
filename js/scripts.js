// Simple slider + nav toggle + form validation
document.addEventListener('DOMContentLoaded', function(){
  // Slider
  const slides = Array.from(document.querySelectorAll('.slide'));
  let idx = 0;
  const show = i => {
    slides.forEach(s=>s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  if(slides.length){
    document.getElementById('next')?.addEventListener('click',()=>{ idx=(idx+1)%slides.length; show(idx); });
    document.getElementById('prev')?.addEventListener('click',()=>{ idx=(idx-1+slides.length)%slides.length; show(idx); });
    // auto rotate
    setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); },4000);
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  navToggle?.addEventListener('click', ()=>{
    const nav = document.getElementById('site-nav');
    if(!nav) return;
    if(nav.style.display === 'flex' || nav.style.display === 'block') nav.style.display = 'none';
    else nav.style.display = 'block';
  });

  // Contact form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const feedback = document.getElementById('formFeedback');
      feedback.textContent = '';

      if(!name.value.trim()){ feedback.textContent = 'Please enter your name.'; name.focus(); return; }
      if(!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){ feedback.textContent = 'Please enter a valid email.'; email.focus(); return; }
      if(!message.value.trim()){ feedback.textContent = 'Please enter a message.'; message.focus(); return; }

      // Simulate success — in real site you'd POST to a server or use Formspree
      feedback.textContent = 'Thanks! Your message was sent (simulated).';
      form.reset();
    });
  }
});