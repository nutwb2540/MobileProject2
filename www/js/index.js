document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log('onDeviceReady');
  var config = {
    apiKey: "AIzaSyCOitAKUQhFTZ_ayLGZczBF-mPTxd_8vXk",
    authDomain: "shopee-1eff2.firebaseapp.com",
    databaseURL: "https://shopee-1eff2.firebaseio.com",
    projectId: "shopee-1eff2",
    storageBucket: "shopee-1eff2.appspot.com",
    messagingSenderId: "954641713547"
  };
firebase.initializeApp(config);
  
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    localStorage.setItem('username', user.displayName);
    window.location.href = 'home.html'
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

$("#google").click(function () {

  console.log('Start Google sign in');
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});
$("#facebook").click(function () {
console.log("Start Facebook Login")
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
      }
      // The signed-in user info.
      var user = result.user;
  }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
  });
}
)
$("#login").click(function () {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error.code + ':' + error.message);
          ons.notification.alert('login feiled');
          // ...
      });
  })
 
}





