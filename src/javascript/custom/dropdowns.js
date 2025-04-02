document.addEventListener('DOMContentLoaded', function() {
    // ========== VARIABLES GLOBALES ==========
    const dropdownTriggers = {
        language: document.querySelector('#dropdown-language-trigger'),
        profile: document.querySelector('#dropdown-profile-trigger')
    };
    
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const menuItems = document.querySelectorAll('.dropdown-content .menu-item');

    // ========== FUNCIONES BÁSICAS ==========
    const closeAllDropdowns = () => {
        dropdowns.forEach(dropdown => dropdown.style.display = 'none');
    };

    const removeActiveStates = () => {
        menuItems.forEach(item => item.classList.remove('active'));
    };

    // ========== MANEJO DE DROPDOWNS ==========
    const handleDropdown = (trigger) => (e) => {
        e.stopPropagation();
        const dropdown = trigger.querySelector('.dropdown-content');
        const isVisible = dropdown.style.display === 'block';
        
        closeAllDropdowns();
        removeActiveStates();
        
        if (!isVisible) {
            dropdown.style.display = 'block';
        }
    };

    // Eventos para triggers
    Object.entries(dropdownTriggers).forEach(([key, trigger]) => {
        trigger?.addEventListener('click', handleDropdown(trigger));
    });

    // ========== MANEJO DE ITEMS ACTIVOS ==========
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remover estado activo de todos los items
            removeActiveStates();
            
            // Añadir estado activo al item clickeado
            this.classList.add('active');
            
            // Cerrar dropdowns después de seleccionar (opcional)
            // closeAllDropdowns(); // Descomentar si se necesita
        });
    });

    // ========== CERRAR DROPDOWNS AL HACER CLICK FUERA ==========
    document.addEventListener('click', () => {
        closeAllDropdowns();
        removeActiveStates(); // Opcional: Remover estados activos al cerrar
    });

    // ========== HOVER DINÁMICO (MEJORA UX) ==========
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover-active');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover-active');
        });
    });
});