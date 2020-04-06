let dropArea = document.getElementById("dropArea");


['dragenter', 'dragover', 'dragleave', 'drop']
  .forEach((eventName) => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  
['dragenter', 'dragover']
  .forEach((eventName) => {
    dropArea.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop']
  .forEach((eventName) => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  dropArea.addEventListener('drop', handleDrop, false);

function unhighlight(e) {
  dropArea.classList.remove('highlight')
}

function highlight(e) {
  dropArea.classList.add('highlight');
}

function preventDefaults (e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleFiles(files) {
  debugger;
  ([...files]).forEach(uploadFile)
}


function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  debugger;
  handleFiles(files);
}


function uploadFile(file) {
  let url = 'https://httpbin.org/post';
  let formData = new FormData()

  formData.append('file', file)

  console.log(formData.get('file'));
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then((response) => { console.log(response)})
  .catch((e) => {
    console.log(response)
   })
}


