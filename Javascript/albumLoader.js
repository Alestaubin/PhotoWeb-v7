
// Load navigation bar
window.onload = function() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(html => {
        document.getElementById('navbar').innerHTML = html;
    
    //call masonry
    var grid = document.querySelector('.album-grid');

    var msnry = new Masonry( grid, {
        itemSelector: '.album-grid-item',
        columnWidth: '.album-grid-sizer',
        percentPosition: true
    });

    imagesLoaded( grid ).on( 'progress', function() {
        // layout Masonry after each image loads
        msnry.layout();
    });
    });
}