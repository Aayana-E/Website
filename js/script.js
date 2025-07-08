
const hamburger = document.querySelector('.window_column.window_right');
const dropdown = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
dropdown.classList.toggle('hidden');
});

// Optional: click outside to close
document.addEventListener('click', (e) => {
if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
}
});

