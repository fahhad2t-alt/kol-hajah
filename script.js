import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuGmGzpmIFPPX6E9RqZVRwVMD6s1LmJpw",
  authDomain: "kol-hajah.firebaseapp.com",
  projectId: "kol-hajah",
  storageBucket: "kol-hajah.firebasestorage.app",
  messagingSenderId: "965122607090",
  appId: "1:965122607090:web:33c2c72354ca13d45fcd6b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.querySelector("form");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const inputs = form.querySelectorAll("input");
  const select = form.querySelector("select");
  const textarea = form.querySelector("textarea");

  try {
    await addDoc(collection(db, "requests"), {
      title: inputs[0].value,
      price: inputs[1].value,
      category: select.value,
      description: textarea.value,
      phone: inputs[2].value,
      createdAt: new Date()
    });

    alert("تم نشر الإعلان بنجاح ✅");
    form.reset();

  } catch (error) {
    alert("حدث خطأ أثناء الحفظ");
    console.error(error);
  }
});