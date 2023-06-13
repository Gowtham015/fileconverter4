document.getElementById('Button').addEventListener('click', function() {
    var fileInput = document.getElementById('Input');
    var file = fileInput.files[0];
  
    if (file) {
      converter(file);
    }
  });
  
  function converter(file) {
    var formData = new FormData();
    formData.append('file', file);
  
    fetch('https://api.cloudconvert.com/v2', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      return response.blob();
    })
    .then(function(blob) {
      var downloadLink = document.getElementById('download');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'converted.docx';
      downloadLink.style.display = 'block';
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
  }