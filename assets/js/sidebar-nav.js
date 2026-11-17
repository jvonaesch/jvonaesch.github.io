document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('.sidebar-page__select');

    selects.forEach((select) => {
        select.addEventListener('change', () => {
            window.location.href = select.value;
        });
    });
});
