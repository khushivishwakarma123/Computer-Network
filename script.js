// Scroll animation for posts
const posts = document.querySelectorAll('.post');
window.addEventListener('scroll', () => {
  posts.forEach(post => {
    const rect = post.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      post.classList.add('visible');
    }
  });
});

// Theme toggle (dark/light)
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
