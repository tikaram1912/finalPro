  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAciUfaagGwjT9tms5VtrNBVLlM9Eff7VI",
    authDomain: "spotify-clone-8f09e.firebaseapp.com",
    projectId: "spotify-clone-8f09e",
    storageBucket: "spotify-clone-8f09e.appspot.com",
    messagingSenderId: "216378310325",
    appId: "1:216378310325:web:6d56ac4f5617cfbbf448fc",
    measurementId: "G-034D29SEJV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth();

  console.log(app);



   //----- New Registration code start	  
    document.getElementById("register").addEventListener("click", function() {
        var email =  document.getElementById("email").value;
        var password = document.getElementById("password").value;
        //For new registration
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert("Registration successfully!!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage);
          alert(error);
        });		  		  
    });
    //----- End

    //----- Login code start	  
    document.getElementById("login").addEventListener("click", function() {
        var email =  document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert(user.email+" Login successfully!!!");
          document.getElementById('logout').style.display = 'block';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });		  		  
    });
    //----- End

    //----- Logout code start	  
    document.getElementById("logout").addEventListener("click", function() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            document.getElementById('logout').style.display = 'none';
          }).catch((error) => {
            // An error happened.
            console.log('An error happened.');
          });		  		  
    });
    //----- End