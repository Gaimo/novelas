const topButton = document.getElementById('top_button');

// Exibe o botão quando o usuário desce 30% da página
window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight * 0.3) {
        topButton.style.display = 'flex';
        topButton.classList.remove('fade-out');
    } else {
        topButton.classList.add('fade-out');
    }
});

topButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});