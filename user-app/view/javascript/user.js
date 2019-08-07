document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signup_submit").addEventListener('click', event => {
    console.log("inside user.js 1")

    let newUser = {
      firstName: document.getElementById("inputFirstName").value,
      lastName: document.getElementById("inputLastName").value,
      email: document.getElementById("inputEmail").value,
      userName: document.getElementById("inputUserName").value,
      password: document.getElementById("inputPassword1").value
    }

    console.log("newUser: ", newUser);
    $.ajax("/api/user/", {
      method: "POST",
      data: newUser,
      success: function(res) {
        console.log("success")
        let signUp_modal = document.getElementById("signUp_modal");
        signUp_modal.style.display = "none";
        let signIn_modal = document.getElementById("signIn_modal");
        signIn_modal.style.display = "block";
        document.getElementById("signIn_form").reset();
        let signIn_error_msg = document.getElementById("signIn_error_msg");
        if (signIn_error_msg) {
          signIn_error_msg.style.display = "none";
        }
        let modalContent1 = document.getElementById("signIn_modal_content");
        let p = document.createElement("p");
        p.classList.add("registration_signIn_msg");
        p.innerHTML += "Your registration was successfull. Please sign in.";
        modalContent1.append(p);
      },
      error: function(err) {
        console.log("In user.js, post, an error occured: ", err);
      }   
    });
  });

  document.getElementById("signin_submit").addEventListener('click', event => {
    let signInUser = {
      email: document.getElementById("SignInEmail").value,
      // userName: document.getElementById("#inputUserName").value,
      password: document.getElementById("SignInPassword").value,
    }
    console.log("SignInUser: ", signInUser);
    $.ajax("/api/user/", {
      method: "GET",
      data: signInUser,
      dataType: "jsonp",
      success: function(res) {
        console.log("inside then: ", res)
        // console.log("signInUser from then ", signInUser);
        console.log("inside user.js, successCheck: ", res.success);
        console.log("firstName: ", res.firstName);
        if (res.success) {
          let modal = document.getElementById("signIn_modal");
          modal.style.display = "none";
          let container = document.getElementById("slogan_container");
          let linebreak1 = document.createElement("br");
          let linebreak2 = document.createElement("br");
          let paragraph = document.createElement("p");
          paragraph.classList.add("welcome_msg");
          paragraph.innerHTML += "Welcome back, " + res.firstName + "!";
          container.append(linebreak1, linebreak2, paragraph);
          let signInLink = document.getElementById("link_signIn");
          signInLink.setAttribute("status", "signOut");
          signInLink.innerHTML = "Sign Out";
          let download_container = document.getElementById("animation_container")
          let link = document.createElement("a");
          link.setAttribute("href",".images/houzi2650x5019.jpg");
          link.setAttribute("download");
          link.classList.add("download_link");
          download_container.append(link)
        } 
      },
    error: function(err) {
      console.log("In user.js, get, an error occured: ", err);
      let modalContent = document.getElementById("signIn_modal_content");
      let p = document.createElement("p");
      p.setAttribute("id", "signIn_error_msg");
      p.innerHTML += "Ups, something went wrong. We don't recognize your email or password.";
      modalContent.append(p);
      }
    }
    );
  });
});



