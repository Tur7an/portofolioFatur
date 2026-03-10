document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");

  // 🔥 Default: mode dark
  if (!localStorage.getItem("theme")) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  // Set icon awal berdasarkan localStorage
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    btn.innerHTML = `<i class="bi bi-moon-stars text-xl"></i>`;
  } else {
    html.classList.remove("dark");
    btn.innerHTML = `<i class="bi bi-brightness-high text-xl"></i>`;
  }

  // Toggle mode
  btn.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Simpan mode ke localStorage agar tidak reset saat reload
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      btn.innerHTML = `<i class="bi bi-moon-stars text-xl"></i>`;
    } else {
      localStorage.setItem("theme", "light");
      btn.innerHTML = `<i class="bi bi-brightness-high text-xl"></i>`;
    }
  });
});

// === Typed.js Effect for Hero ===
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#typed-text")) {

    new Typed("#typed-text", {
      strings: [
        "Junior Web Developer",
        "Fullstack Developer",
        "UI/UX Designer",
      ],
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 800,
      loop: true,
    });
    
  }
});

// === Expand Fullname with Typing Effect ===
document.addEventListener("DOMContentLoaded", () => {
  const badge = document.getElementById("fullnameBadge");
  const displayName = document.getElementById("displayName");

  const shortName = "Fatur";
  const fullName = "Faturrahman Ardiansyah";

  let isFull = false;

  function typeText(text, callback) {
    displayName.textContent = "";
    let index = 0;

    const typer = setInterval(() => {
      displayName.textContent += text[index];
      index++;

      if (index === text.length) {
        clearInterval(typer);
        if (callback) callback();
      }
    }, 60); // Speed ketikan
  }

  badge.addEventListener("click", () => {
    isFull = !isFull;

    if (isFull) {
      badge.textContent = "Shorten";
      typeText(fullName);
    } else {
      badge.textContent = "Fullname";
      typeText(shortName);
    }
  });
});

// === About Translate EN/ID ===
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("aboutTranslate");
  const en = document.getElementById("aboutEn");
  const id = document.getElementById("aboutId");

  let isIndo = false;

  btn?.addEventListener("click", () => {
    isIndo = !isIndo;

    if (isIndo) {
      // EN → ID
      en.classList.add("hidden");
      id.classList.remove("hidden");

      setTimeout(() => {
        id.classList.remove("opacity-0");
      }, 10);

    } else {
      // ID → EN
      id.classList.add("opacity-0");

      setTimeout(() => {
        id.classList.add("hidden");
        en.classList.remove("hidden");
      }, 200);
    }
  });
});

function openModal(type) {
  const modal = document.getElementById("certModal");
  const frame = document.getElementById("certFrame");

  if (type === "bnspCert") frame.src = "https://drive.google.com/file/d/1Mjf98lHw19cZbOGSFL9pYH5nNh0XhI3q/preview";
  if (type === "nfCert") frame.src = "https://drive.google.com/file/d/1MNcJ8BlTX4xSqLtfacCwt4cjnPWFnnui/preview";
  if (type === "afdCert") frame.src = "https://drive.google.com/file/d/1k7XhhRY1n7RLdXeLDo4XXEkG-gACoc_X/preview";
  if (type === "msibCert") frame.src = "https://drive.google.com/file/d/1BMgzFKXnzdj8qfg-IekiUjbPTByde69X/preview";

  // More Certificates
  if (type === "dicoding1") frame.src = "https://drive.google.com/file/d/1aNSnb-gDB8NodeAENHhYts5f8ziXvy-k/preview";
  if (type === "dicoding2") frame.src = "https://drive.google.com/file/d/1pSW8ogT2VeJmufiI23GDMefIAB2ubK7J/preview";
  if (type === "dicoding3") frame.src = "https://drive.google.com/file/d/1S57uSZIRfFwxNXLm_2DyCruocGk7IpH8/preview";
  if (type === "dicoding4") frame.src = "https://drive.google.com/file/d/1lXuGoVkfZStxPGG7nYPFEwd7i0hja41n/preview";
  if (type === "dicoding5") frame.src = "https://drive.google.com/file/d/1mip4p0MBKPhxvbXCCK7BGUkLCwXNpBF1/preview";
  if (type === "dicoding6") frame.src = "https://drive.google.com/file/d/1IOooGDPW6usDFL_6QJA1f0znykdEftrk/preview";
  if (type === "myskillWp") frame.src = "https://drive.google.com/file/d/1uirhpdtSkQY5P3J3i-Z0lpbbRRM7fR4O/preview";
  if (type === "myskillEx") frame.src = "https://drive.google.com/file/d/1FuGCpO-H4YiuDQWyZmB0F4V_R9uCMmvw/preview";
  if (type === "UIUX") frame.src = "https://drive.google.com/file/d/1dYNK8n_Li3W-SYzUUjkrEskQvhRyBzhu/preview";
  if (type === "filDil") frame.src = "https://drive.google.com/file/d/1bTzpJdifOHiYwf1o62hp1wyavkLExDcM/preview";
  if (type === "bootDC") frame.src = "https://drive.google.com/file/d/1yegBxXAlJifG7xPZxJPqcSJuV8KY-DyI/preview";
  if (type === "SC") frame.src = "https://drive.google.com/file/d/1FQl93Q0IXuMit_tmoQI7VG2kdlPz2e_A/preview";
  
  // Halaman untuk more certificate
  if (type === "moreCerts") frame.src = "all-certificates.html";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("certModal");
  const frame = document.getElementById("certFrame");

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  frame.src = ""; // Reset PDF
}

const toggleBtn = document.getElementById("toggleCertificates");
const hideBtn = document.getElementById("hideBtn");

const extraWrapper = document.getElementById("extraWrapper");
const showBtnWrapper = document.getElementById("showBtnWrapper");

// SHOW EXTRA CERTIFICATES
toggleBtn.addEventListener("click", () => {
  extraWrapper.classList.remove("hidden");
  extraWrapper.classList.add("max-h-[4000px]", "opacity-100");

  showBtnWrapper.classList.add("hidden");
});

// HIDE EXTRA CERTIFICATES
hideBtn.addEventListener("click", () => {
  // langsung hilangkan animasinya agar tidak ada jejak
  extraWrapper.classList.remove("max-h-[4000px]", "opacity-100");

  // langsung hide tanpa animasi fade
  extraWrapper.classList.add("hidden");

  // tampilkan tombol view more lagi
  showBtnWrapper.classList.remove("hidden");
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
    customClass: { popup: glowClass }
  });
}

document.getElementById("btnWhatsapp").addEventListener("click", (e) => {
  e.preventDefault(); // pastikan form tidak auto submit

  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  // Jika field kosong → Alert Premium
  if (!name || !message) {
    showAlert("warning", "Data tidak lengkap", "Nama dan pesan tidak boleh kosong!");
    return;
  }

  // Konfirmasi sebelum redirect
  Swal.fire({
    title: "Kirim ke WhatsApp?",
    text: "Anda akan dialihkan ke WhatsApp. Lanjutkan?",
    icon: "question",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    showCancelButton: true,
    confirmButtonText: "Ya, lanjutkan",
    cancelButtonText: "Batal",
    confirmButtonColor: "#12c471ff",
    cancelButtonColor: "#d1003bff",
    customClass: { popup: "swal-glow-success" }
  }).then((result) => {
    if (result.isConfirmed) {

      // --- RESET FORM DULU ---
      nameInput.value = "";
      messageInput.value = "";

      // Format pesan WA
      let text = `Halo, saya ${name}%0A%0A${message}`;
      let phone = "6281234567890"; // ganti dengan nomor WhatsApp kamu

      // Redirect ke WhatsApp
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    }
  });
});

document.getElementById("btnHireMe").addEventListener("click", () => {

  Swal.fire({
    title: "Thank You!",
    html: `
      <p class="text-sm text-gray-300 mb-4">
        Terima kasih telah mempertimbangkan saya. 
        Saya berharap dapat membantu dan memberikan solusi terbaik 
        serta bekerja sama secara profesional. 
        Silakan pilih media kontak yang Anda inginkan.
      </p>

      <div class="flex flex-col gap-3">

        <!-- WhatsApp -->
        <a href="https://wa.me/6281279715551" target="_blank"
           class="flex items-center gap-3 bg-green-600/20 hover:bg-green-600/30 
                  border border-green-500/40 text-green-300 
                  px-4 py-2 rounded-xl transition font-semibold">
          <i class="fa-brands fa-whatsapp text-xl"></i> WhatsApp
        </a>

        <!-- Telegram -->
        <a href="https://t.me/faturfr" target="_blank"
           class="flex items-center gap-3 bg-sky-600/20 hover:bg-sky-600/30 
                  border border-sky-500/40 text-sky-300 
                  px-4 py-2 rounded-xl transition font-semibold">
          <i class="fa-brands fa-telegram text-xl"></i> Telegram
        </a>

        <!-- Instagram -->
        <a href="https://instagram.com/fatur.kl" target="_blank"
           class="flex items-center gap-3 bg-pink-600/20 hover:bg-pink-600/30 
                  border border-pink-500/40 text-pink-300 
                  px-4 py-2 rounded-xl transition font-semibold">
          <i class="fa-brands fa-instagram text-xl"></i> Instagram
        </a>

        <!-- Email -->
        <a href="mailto:faturrahmanardiansyah17@gmail.com"
           class="flex items-center gap-3 bg-purple-600/20 hover:bg-purple-600/30 
                  border border-purple-500/40 text-purple-300 
                  px-4 py-2 rounded-xl transition font-semibold">
          <i class="fa-solid fa-envelope text-xl"></i> Email
        </a>

      </div>
    `,
    background: "rgba(20, 20, 35, 0.9)",
    color: "#fff",
    width: 430,
    showConfirmButton: false,
    customClass: {
      popup: "swal-hireme-premium"
    }
  });

});

// ===============================
// NAVBAR ACTIVE LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateMenu() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateMenu);

// ===============================
// ADD ACTIVE CLASS ON CLICK
// ===============================
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

document.getElementById("hideBtn").addEventListener("click", function () {
  // Tutup wrapper extra certificates
  const wrapper = document.getElementById("extraWrapper");
  wrapper.style.maxHeight = "0";
  wrapper.style.opacity = "0";

  // Scroll ke atas section certificates
  const section = document.getElementById("certificates");
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// ===== LinkedIn Redirect Alert =====
document.getElementById("btnLinkedIn").addEventListener("click", function (e) {
  e.preventDefault(); // cegah redirect langsung

  Swal.fire({
    title: "Menuju LinkedIn?",
    text: "Anda akan diarahkan ke profil LinkedIn saya.",
    icon: "info",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    showCancelButton: true,
    confirmButtonText: "Lanjutkan",
    cancelButtonText: "Batal",
    confirmButtonColor: "#00FF87",
    cancelButtonColor: "#FF0048",
    iconColor: "#00CCFF",
    customClass: { popup: "swal-glow-success" }
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(
        "https://www.linkedin.com/in/faturrahmanardiansyah/",
        "_blank"
      );
    }
  });
});

// ==== MOBILE MENU ====
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const closeMobileMenu = document.getElementById("closeMobileMenu");

// Open menu
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  document.body.classList.add("no-scroll");
});

// Close menu
closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  document.body.classList.remove("no-scroll");
});

// Auto close when clicking menu item
document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    document.body.classList.remove("no-scroll");
  });
});
