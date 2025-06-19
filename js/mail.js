

const firebaseConfig = {
    apiKey: "AIzaSyATPn0ngO_KrmGrS4PGXPoTTFdVNruWnA8",
    authDomain: "contactform-887c6.firebaseapp.com",
    databaseURL: "https://contactform-887c6-default-rtdb.firebaseio.com",
    projectId: "contactform-887c6",
    storageBucket: "contactform-887c6.firebasestorage.app",
    messagingSenderId: "314442226996",
    appId: "1:314442226996:web:d327d1ebd7f339acbdd961"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference database
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, email, subject, msgContent);

    // enable alert
    document.querySelector('.alert').style.display = 'block';

    // remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
  }
//   reset the form
  document.getElementById("contactForm").reset();

  const saveMessages = (name, email, subject, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        email : email,
        subject : subject,
        msgContent : msgContent,
    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


