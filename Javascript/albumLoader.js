
// Load navigation bar
window.onload = function() {
    loadEverything();
};

async function loadEverything() {
    fetch('/navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;            
    });

    await load_albums();
    // wait
    
    fetch('/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });
}
async function load_albums() {
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
    return;
}