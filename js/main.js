// التحكم في القائمة الرئيسية
document.querySelector('.mobile-menu-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('#header nav').classList.toggle('active');
});

// التحكم في القوائم الفرعية
document.querySelectorAll('.open_menu > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('active');
        }
    });
});

// إغلاق القوائم عند النقر خارجها
document.addEventListener('click', function(e) {
    if (!e.target.closest('#header nav')) {
        document.querySelector('#header nav').classList.remove('active');
        document.querySelectorAll('.sec_menu').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});