// -------------------------------- FIREBASE --------------------------------

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  getFirestore,
  collection,
  addDoc,
  db,
  getDocs,
  doc,
} from "./firebase.js";

// -------- state Loading , Pending ------------
let msg = document.getElementById("msg");
msg.innerHTML = "";

let signUp = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // -------- state Loading , Pending ------------
  msg.innerHTML = "Pending...";
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("Successfully SignUp", user);
      sendEmailVerification(auth.currentUser).then(() => {
        console.log("Email verification sent!");
      });
      //  CRUD OPERATION
      // ADD DOC  ==> CREATE
      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: user.email,
          uid: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      // -------- state Loading , Pending ------------
      msg.innerHTML = "";
      msg = alert("Sign Up Successfully");
      // ---------------------------------------------
      const errorCode = error.code;
      console.log("Not SUccessfully SignUp", errorCode);
    });
};

let signup = document.getElementById("sign_up");
signup.addEventListener("click", signUp);

let signIn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // ---------------------- loaction ---------------------
      window.location.href = "www.google.com";
      const user = userCredential.user;
      console.log("Login Successfully", user);
    })

    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};
let signin = document.getElementById("sign_in");
signin.addEventListener("click", signIn);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid, "Already logged In");
    // window.location.href = "./dashboard.html"
  } else {
    console.log("No User Here");
  }
});

// let sendMail = ()=>{

// }
// let email = document.getElementById("verification")
// email.addEventListener("click", sendMail)

let sign_out = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch((error) => {
      console.log("Have some error", error);
    });
};

let signout = document.getElementById("sign_out");
signout.addEventListener("click", sign_out);

// READ DATA == //GET DATA
let getuser = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id); // Document ID (e.g., luduMIuK1HoeFiAurYV8)
    // console.log(doc.data()); // Document data as an object
    // OR
    // console.log(doc.id ,doc.data());
  });
};
getuser();

// ------------------post add-------------------
let title = document.getElementById("title");
let discription = document.getElementById("discription");
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addBtn);

const addpost = async () => {
  if (title.value !== "" && discription.value !== "") {
    // addBtn.innerHTML = "Loading..."
    try {
      const docRef = await addDoc(collection(db, "post"), {
        title: title.value,
        discription: discription.value,

      });
      console.log("Document written with ID: ", docRef.id);
      getpost(); 
      // ----------------add kerne k baad bhi or khudi bhi -------------------
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      addBtn.innerHTML = "Post Has Been Added";
    }
  }
  title.value = "";
  description.value = "";
};

// ------------------read add (get post )-------------------
const getpost = async () => {
  post.innerHTML=""; 
  const querySnapshot = await getDocs(collection(db, "post"));
  querySnapshot.forEach((doc) => {
    const { title, discription } = doc.data();
    console.log(title, discription);
    post.innerHTML += `
   <div class="card p-2 mb-2">
       <div class="card-header d-flex">
       <img class="profile-photo" src="${profilePhotoImg.src}" />
       <div class="name-time d-flex flex-column">
        ${firstName} ${lastName}
        <div class="time">${currentTime}</div>
      </div>
    </div>
      <div style="background-image: url(${backgroundImg})" class="card-body">
        <blockquote class="blockquote mb-0">
           <p>${title.value}</p>
           <footer class="blockquote-footer">${description.value}</footer>
         </blockquote>
      </div>
       <div class="card-footer d-flex justify-content-end">
         <button type="button" onclick="editpost(`${doc.id}`)" class="ms-2 btn  editBtn">Edit</button>
         <button type="button" onclick="deletePost(`${doc.id}`)" class="ms-2 btn btn-danger deleteBtn">Delete</button>
       </div>
  </div>`;
  
    let isEdit = null; 
    // oper kara lo sb k sath

window.editpost = async(id , e) =>{
try {
  let userData = await getDoc(doc(db,"post",id))
  // input field get karyen gye 
  const {title, discription} = userData.data();
  titleupdate.value = title;
  discriptionupdate.value = discription;
  isEdit = id;
  // console.log(userData.data());
} catch (error) {
  console.log(error);
  
}
}
const updatePost =()=>{
  try {
    // , edit kerwane wali value bhi dete
    await updateDoc(doc(db,"post", isEdit),{
      title: titleupdate.value,
      discription :discriptionupdate.value
    });
    getpost();
  } catch (error) {
    console.log(error);
    
  }
}

updateBtn.addEventListener("click", updatePost)

window.deletePost = async(id ,button) =>{
    // jo bacha howa hai wo aye os k liye get mai khali ker do
    try {
      await deleteDoc(doc(db,"post", id));
      // console.log("DELETED");
      getpost();
      
    } catch (error) {
      console.log(error);
      
    }
    // console.log('edit',id);
  }

    // console.log(doc.data().title);
    // console.log(doc.data().discription);

    // console.log(`${doc.id} => ${doc.data()}`);
  });
};
getpost();

