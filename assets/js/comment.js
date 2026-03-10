/* =============================
   GLOBAL SETTINGS
============================= */
let canSend = true;        // Anti-spam flag
let cooldownTime = 15000;   // 5 detik

/* =============================
   TIME FORMATTER
============================= */
function timeAgo(date) {
  const diffMs = Date.now() - date.getTime();
  const diffSec = diffMs / 1000;
  const diffMin = diffSec / 60;
  const diffHour = diffMin / 60;
  const diffDay = diffHour / 24;

  if (diffSec < 60) return "Baru saja";
  if (diffMin < 60) return `${Math.floor(diffMin)} menit lalu`;
  if (diffHour < 24) return `${Math.floor(diffHour)} jam lalu`;

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')} WIB`;
}

/* =============================
   RENDER BUBBLE CHAT
============================= */
function renderBubble(data) {
  const box = document.getElementById("commentBox");

  if (box.children[0]?.tagName === "P") {
    box.innerHTML = "";
  }

  const name = data.name;
  const message = data.message;
  const time = data.timestamp?.toDate() || new Date();
  const isOwner = name.toLowerCase() === "fatur";

  const wrapper = document.createElement("div");
  wrapper.className = `
    flex items-end gap-3 w-full mb-3 animate-chatEnter
    ${isOwner ? "justify-end" : "justify-start"}
  `;

  const avatar = document.createElement("div");
  avatar.className = `
    w-10 h-10 rounded-full flex items-center justify-center 
    text-white font-bold
    ${isOwner ? "bg-blue-600" : "bg-pink-500"}
  `;
  avatar.textContent = name.charAt(0).toUpperCase();

  const bubble = document.createElement("div");
  bubble.className = `
    max-w-[95%] p-4 rounded-2xl border shadow
    ${isOwner
      ? "bg-blue-900 text-blue-100 border-blue-300/40"
      : "bg-white/10 dark:bg-black/20 text-white border-white/10 dark:border-black/20"}
  `;

  bubble.innerHTML = `
    <p class="text-sm font-semibold mb-1">${name}</p>
    <p class="text-sm leading-relaxed">${message}</p>
    <p class="text-xs mt-2 opacity-60">${timeAgo(time)}</p>
  `;

  if (isOwner) {
    wrapper.appendChild(bubble);
    wrapper.appendChild(avatar);
  } else {
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
  }

  box.appendChild(wrapper);

  // Auto scroll ke bawah
  box.scrollTo({ top: box.scrollHeight, behavior: "smooth" });
}

/* =============================
   SEND COMMENT (WITH ANTI-SPAM)
============================= */
document.getElementById("btnComment").addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const btn = document.getElementById("btnComment");

  // === VALIDASI FIELD KOSONG (SweetAlert) ===
  if (!name || !message) {
    Swal.fire({
      icon: "warning",
      title: "Data tidak lengkap",
      text: "Nama dan pesan tidak boleh kosong!",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  // === ANTI-SPAM CHECK ===
  if (!canSend) {
    Swal.fire({
      icon: "error",
      title: "Terlalu cepat!",
      text: "Tunggu 5 detik sebelum mengirim pesan lagi.",
      confirmButtonColor: "#d33",
    });
    return;
  }

  // Matikan tombol sementara
  canSend = false;
  btn.disabled = true;
  btn.classList.add("opacity-50", "cursor-not-allowed");

  // Cooldown
  setTimeout(() => {
    canSend = true;
    btn.disabled = false;
    btn.classList.remove("opacity-50", "cursor-not-allowed");
  }, cooldownTime);

  // === KIRIM KE FIREBASE ===
  try {
    await db.collection("comments").add({
      name: name,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Gagal mengirim!",
      text: error.message,
      confirmButtonColor: "#d33",
    });
  }
});

/* =============================
   REALTIME LISTENER
============================= */
db.collection("comments")
  .orderBy("timestamp", "asc")
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === "added") {
        renderBubble(change.doc.data());
      }
    });
  });

  function showAlert(type, title, text) {
  let glowClass = "";

  if (type === "warning") glowClass = "swal-glow-warning";
  if (type === "error") glowClass = "swal-glow-error";
  if (type === "success") glowClass = "swal-glow-success";

  Swal.fire({
    icon: type,
    title: title,
    text: text,
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    confirmButtonColor: type === "warning" ? "#FFC107" :
                        type === "error" ? "#FF0048" :
                        "#00FF87",
    iconColor: type === "warning" ? "#FFC107" :
               type === "error" ? "#FF0048" :
               "#00FF87",
    customClass: {
      popup: glowClass
    }
  });
}
