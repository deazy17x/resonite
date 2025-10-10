// DevTools'u engellemek için basit bir betik
(function() {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C gibi tuş kombinasyonlarını engelle
    document.onkeydown = function(e) {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) || // Ctrl+Shift+C
            (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl+U
        ) {
            return false;
        }
    };

    // Sağ tıklama menüsünü engelle
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    document.addEventListener('DOMContentLoaded', function() {
        const downloadLink = document.getElementById('download-link');
        if (downloadLink) {
            downloadLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'https://www.dropbox.com/scl/fi/gn0505uge8g1s3d475ymf/ResoniteMods.rar?rlkey=tyyo03yroto4b5bvniii06ci8&st=fd0k4ggr&dl=1';
            });
        }
    });
})();
