const projectModal = document.getElementById("project-facedetection-modal-id");

// Get the button that opens the modal
const openProjectModalBtn = document.getElementById("project-facedetection-card-id");

// Get the <span> element that closes the modal
const closeProjectModalBtn = document.getElementsByClassName("close-modal-btn")[0];

// When the user clicks the button, open the modal 
openProjectModalBtn.onclick = function() {
  projectModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closerProjectModalBtn.onclick = function() {
  projectModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target !== projectModal) {
    projectModal.style.display = "none";
  }
}