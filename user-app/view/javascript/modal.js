// Modal Demo
document.getElementById("link_demo").addEventListener('click', () => {
  let modal = document.getElementById("demo_modal");
  modal.style.display = "block";
});
document.getElementById("close_demo").addEventListener('click', () => {
  let modal = document.getElementById("demo_modal");
  modal.style.display = "none";
})

// Modal SignIn
document.getElementById("link_signIn").addEventListener('click', () => {
  let link = document.getElementById("link_signIn");
  let signIn_error_msg = document.getElementById("signIn_error_msg");
  if (signIn_error_msg) {
    signIn_error_msg.style.display = "none";
  }
  
  console.log("link.getAttribute(status): ", link.getAttribute("status"));
  if (link.getAttribute("status") === "signOut") {
    console.log("inside signOut");
    location.reload();
  }
  let modal = document.getElementById("signIn_modal");
  modal.style.display = "block"
})
document.getElementById("close_signIn").addEventListener('click', () => {
  let modal = document.getElementById("signIn_modal");
  modal.style.display = "none";
})

// Modal SignUp
document.getElementById("link_signUp").addEventListener('click', () => {
  let modal_signIn = document.getElementById("signIn_modal");
  let modal_signUp = document.getElementById("signUp_modal");
  modal_signIn.style.display = "none";
  modal_signUp.style.display = "block";
})
document.getElementById("close_signUp").addEventListener('click', () => {
  let modal = document.getElementById("signUp_modal");
  modal.style.display = "none";
})
document.getElementById("cancel_btn").addEventListener('click', () => {
  let modal = document.getElementById("signUp_modal");
  modal.style.display = "none";
})