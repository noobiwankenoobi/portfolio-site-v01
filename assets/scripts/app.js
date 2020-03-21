// MODALS BEGIN
const projectModal = document.getElementById("project-facedetection-modal-id");

const projectModalContent = document.getElementsByClassName("project-modal-content");

// Get the button that opens the modal
const openProjectModalBtn = document.getElementById("project-facedetection-card-id");

// Get the <span> element that closes the modal
const closeProjectModalBtn = document.getElementsByClassName("close-modal-btn")[0];

const modalStatus = {
  closedOrOpen: "closed",
}

// When the user clicks the button, open the modal 
openProjectModalBtn.onclick = function() {
  projectModal.style.display = "flex";
  modalStatus.closedOrOpen = "open";
  console.log("modalStatus.closedOrOpen= ", modalStatus.closedOrOpen);
}

// When the user clicks on <span> (x), close the modal
closeProjectModalBtn.onclick = function() {
  projectModal.style.display = "none";
  modalStatus.closedOrOpen = "closed";
  console.log("modalStatus.closedOrOpen= ", modalStatus.closedOrOpen);
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   console.log("event.target= ", event.target)
//   if (modalStatus.modalStatus === "open" && event.target !== projectModalContent) {
//     projectModal.style.display = "none";
//     modalStatus.closedOrOpen = "closed";
//   }
// }
// MODALS END