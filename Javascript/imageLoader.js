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
      var link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.appendChild(img);
      var column = document.createElement('div');
      column.className = 'col-md p-1';
      column.appendChild(link);
      currentRow.appendChild(column);
    });
  }
 