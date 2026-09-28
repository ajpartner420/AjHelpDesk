/* Global Theme Toggle Engine */
function initTheme() {
  const savedTheme = localStorage.getItem('aj_theme') || 'dark';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('aj_theme', isDark ? 'dark' : 'light');
}

// Auto Initialize Theme on Page Load
initTheme();
