// FUNCTION TO HELP WITH EVENT.TARGET //
document.onclick = function(event) {
  console.log("EVENT TARGET ID= ", event.target.id)
  console.log("EVENT TARGET ID IS A = ", typeof event.target.id)
  console.log("EVENT TARGET= ", event.target)
}

////////////////////////////
// MODALS SECTION BEGINS //
//////////////////////////

//////////////////////////////////////
// ASIGN DOM ELEMENTS TO VARIABLES //
////////////////////////////////////

// ASSIGN EACH MODAL TO A VARIABLE BY ID //
const faceDetectModal = document.getElementById("project-facedetection-modal-id");
const ticTacToeModal = document.getElementById("project-tictactoe-modal-id")
const curioModal = document.getElementById("project-curio-modal-id")

// ASSIGN EACH CARD ID TO VARIABLE //
const faceDetectCardId = "project-facedetection-card-id";
const ticTacToeCardId = "project-tictactoe-card-id";
const curioCardId = "project-curio-card-id";

// GIVE ALL MODALS A SINGLE VARIABLE BY CLASS //
const allModals = document.getElementsByClassName("project-modal-div")

// Get the button that opens the modal
// const openProjectModalBtn = document.getElementsByClassName("project-card-div");


//////////////////////////
// MODAL STATUS OBJECT //
////////////////////////
const modalStatus = {
  closedOrOpen: "closed",
}

/////////////////
// OPEN MODAL //
///////////////
// BY ID OF CARD CLICKED
// For now this will be hard coded by project
// Eventually pass ids around and have simpler openModal logic
const openProjectModal = (event) => {
  clickedProjectCardId = event.target.id;
  if (clickedProjectCardId == faceDetectCardId ) {
    faceDetectModal.style.display = "flex";
  } else if (clickedProjectCardId == ticTacToeCardId) {
    ticTacToeModal.style.display = "flex";
  } else if (clickedProjectCardId == curioCardId) {
    curioModal.style.display = "flex";
  }
  // Change the modal object status
  modalStatus.closedOrOpen = "open";
}
//////////////////////////////////////////////////////////////////


///////////////////
// CLOSE MODALS //
/////////////////
const closeModals = (event) => {
  // Set each modal display to "none"
  faceDetectModal.style.display = "none";
  ticTacToeModal.style.display = "none";
  curioModal.style.display = "none";

  // Change the modal object status
  modalStatus.closedOrOpen = "closed";
}
///////////////////////////////////////////////////////////////
  

/////////////////////
// CLICK HANDLERS //
///////////////////
const addHandlers = () => {
  $('.project-card-div').on('click', openProjectModal);
  $('.close-modal-btn').on('click', closeModals);
  // $('.project-modal-div').on('click', clickOutsideModal)
}

// ON PAGE LOAD //
$(() => {
  addHandlers()
})