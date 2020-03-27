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
  console.log("Open Project Modals is Running")
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
  console.log("Modal status=", faceDetectModal.style.display)
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



//////////////////////////
// SHOW AND HIDE PAGES //
////////////////////////

// Set initial shows/hides
const onSiteLoad = () => {
  console.log("ON SITE LOAD IS RUNNING")
  $('.projects-page').hide();
  
  $('.bio-page').hide();
  $('.art-page').hide();
  $('.contact-page').hide();
  $('.home-page').show();
  // closeModals();
}

const showHomePage = () => {
  $('.bio-page').hide();
  $('.projects-page').hide();
 
  $('.art-page').hide();
  $('.contact-page').hide();
  $('.home-page').show();
  closeModals();
}

const showBioPage = () => {
  $('.projects-page').hide();
 
  $('.art-page').hide();
  $('.contact-page').hide();
  $('.home-page').hide();
  $('.bio-page').show();
  closeModals();
}

const showProjectPage = () => {
  $('.home-page').hide();
  $('.bio-page').hide();
  $('.art-page').hide();
  $('.contact-page').hide();
  
  $('.projects-page').show();
  closeModals();
}

const showArtPage = () => {
  $('.home-page').hide();
  $('.bio-page').hide();
  $('.contact-page').hide();
  $('.projects-page').hide();

  $('.art-page').show();
  closeModals();
}

const showContactPage = () => {
  $('.home-page').hide();
  $('.bio-page').hide();
  $('.art-page').hide();
  $('.projects-page').hide();

  $('.contact-page').show();
  closeModals();
}

const showResumePage = () => {
  console.log("download resume")
}

  
/////////////////////
// CLICK HANDLERS //
///////////////////
const addHandlers = () => {
  // Nav Links
  $('#home-nav-link').on('click', showHomePage);
  $('#bio-nav-link').on('click', showBioPage);
  $('#projects-nav-link').on('click', showProjectPage);
  $('#art-nav-link').on('click', showArtPage);
  $('#contact-nav-link').on('click', showContactPage);
  $('#resume-nav-link').on('click', showResumePage);
  // Modals handlers
  $('.project-card-div').on('click', openProjectModal);
  
  $('.close-modal-btn').on('click', closeModals);
 
  

  // $('.project-modal-div').on('click', clickOutsideModal)
}

// ON PAGE LOAD //
$(() => {
  addHandlers();
  onSiteLoad();
})