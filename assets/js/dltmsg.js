console.log("DASHBOARD JS LOADED!!!");

// ===== FIREBASE CONFIG =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getFirestore, collection, onSnapshot, deleteDoc, doc, query, orderBy
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// CONFIG KAMU
const firebaseConfig = {
  apiKey: "AIzaSyAiP_KP3qOxv8xWsDwICjnSRS2q9todigY",
  authDomain: "portfolio-fatur.firebaseapp.com",
  projectId: "portfolio-fatur",
  storageBucket: "portfolio-fatur.firebasestorage.app",
  messagingSenderId: "1032940271910",
  appId: "1:1032940271910:web:e2029ab5083a4a7119a9e7",
  measurementId: "G-ERZGKG9LXT"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tableBody = document.getElementById("commentTable");

// ===== LOAD REALTIME FIRESTORE: URUTAN BARU -> LAMA =====
const q = query(
  collection(db, "comments"),
  orderBy("timestamp", "desc") // 🔥 newest first
);

onSnapshot(q, (snapshot) => {
  tableBody.innerHTML = ""; 

  if (snapshot.empty) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" class="text-center py-6 text-gray-500 dark:text-gray-300">
          No comments found...
        </td>
      </tr>`;
    return;
  }

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const id = docSnap.id;

    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50 dark:hover:bg-gray-700/40 transition";

    const date = data.timestamp?.toDate() || new Date();

    row.innerHTML = `
      <td class="px-4 py-3 text-gray-800 dark:text-gray-100 font-medium">${data.name}</td>
      <td class="px-4 py-3 text-gray-600 dark:text-gray-300">${data.message}</td>
      <td class="px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">
        ${date.toLocaleString("id-ID")}
      </td>
      <td class="px-4 py-3 text-center">
        <button 
          class="px-3 py-1 rounded-lg text-sm font-semibold
                 bg-red-600 hover:bg-red-700 text-white shadow 
                 transition"
          onclick="deleteComment('${id}')">
          Delete
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
});

// ===== DELETE FIRESTORE DOC =====
window.deleteComment = (id) => {
  Swal.fire({
    title: "Delete comment?",
    text: "This action cannot be undone.",
    icon: "warning",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#FF0048",
    cancelButtonColor: "#00FF87",
  }).then(res => {
    if (res.isConfirmed) {
      deleteDoc(doc(db, "comments", id));
    }
  });
};
