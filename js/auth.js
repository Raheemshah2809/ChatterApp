// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-Vcc-BVFGy4d1v_HRLwXTPCB_q-k8h6s",
    authDomain: "chatterapp-4e70f.firebaseapp.com",
    databaseURL: "https://chatterapp-4e70f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatterapp-4e70f",
    storageBucket: "chatterapp-4e70f.appspot.com",
    messagingSenderId: "641611806858",
    appId: "1:641611806858:web:a6c66593e01559b54c5573"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//invokes firebase authentication.
const auth = firebase.auth();

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
    console.log("signout");
};

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password).
    then(() => {
            window.location.replace("Homepage.html");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert.warning(errorMessage);
        });
};

const signOutButton = document.querySelector("#signout");

if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        signOut();
        // window.location.replace("index.html");
    });
}