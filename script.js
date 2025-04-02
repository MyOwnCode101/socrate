window.onload = () => {
    // Reading time
    const text = document.querySelector('article').innerText;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);
    const meta = document.querySelector('.meta');
    meta.innerHTML += ` | ~${readingTime} min read`;
  
    // Theme toggle
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.onclick = () => {
      document.body.classList.toggle('dark');
      toggleButton.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
    };
  };