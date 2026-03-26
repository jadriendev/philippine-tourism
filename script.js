const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeSidebar = document.getElementById('closeSidebar');

    function openSidebar() {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
    }

    function closeSide() {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        overlay.classList.remove('opacity-100');

        setTimeout(() => {
            overlay.classList.add('pointer-events-none');
        }, 300);
    }

    menuBtn.addEventListener('click', openSidebar);
    closeSidebar.addEventListener('click', closeSide);
    overlay.addEventListener('click', closeSide);

document.getElementById("year").textContent = new Date().getFullYear();