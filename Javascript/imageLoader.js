
// Load navigation bar
window.onload = function() {
fetch('/navbar.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('navbar').innerHTML = html;
    
    loadImages(imageUrls, 'Some very nice image, too bad it is not displayed');
    });
    fetchModal();
};

function fetchModal() {
fetch('/modal.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('myModal').innerHTML = html;
    });
}

function openModal(url) {
// fill modal with images
var carouselItems = '';
    for (var i = 0; i < imageUrls.length; i++) {
    
    var activeClass = (imageUrls[i] === url) ? 'active' : ''; 
    
    carouselItems += '<div class="carousel-item ' + activeClass + '">';
    carouselItems += '<img src="' + imageUrls[i] + '" class="d-block w-100" alt="...">';
    carouselItems += '</div>';
        
    }
// Update the carousel inner HTML with the generated markup
$('#carousel-contents').html(carouselItems);
// Trigger click event on the button that opens the modal
$('#myModal').modal('show');
};

function loadImages(imageUrls, altText) {
var imageDisplay = document.getElementById('image_display');
var currentRow;

imageUrls.forEach(function(url, index) {
    if (index % 2 === 0) {
        currentRow = document.createElement('div');
        currentRow.className = 'row p-0';
        imageDisplay.appendChild(currentRow);
    }

    var img = document.createElement('img');
    img.src = url;
    img.alt = altText;
    
    // Add an event listener to each image to open the modal on click
    img.addEventListener('click', function() {
        openModal(url);
    });

    var link = document.createElement('a');
    link.appendChild(img);
    var column = document.createElement('div');
    column.className = 'col-md p-1';
    column.appendChild(link);
    currentRow.appendChild(column);
});
}