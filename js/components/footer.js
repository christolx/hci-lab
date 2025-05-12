function loadFooter() {
    fetch('components/footer.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('main-footer').innerHTML = html;
            const year = new Date().getFullYear();
            document.getElementById('footer-year').textContent = year;
        })
}

document.addEventListener('DOMContentLoaded', loadFooter);
