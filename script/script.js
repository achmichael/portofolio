
const container = document.querySelector('.bio-container');
const bio = document.getElementById('bio');
bio.addEventListener('click' ,(event) => {
    event.preventDefault();
    if (bio.contains(event.target)) {
        container.classList.toggle('active');
    }
});
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click' , function (e){
    if(closeButton.contains(e.target)){
        container.classList.remove('active');
    }
});
document.addEventListener('click', function (e){
    if (!closeButton.contains(e.target) && !bio.contains(e.target)) {
        container.classList.remove('active');
    }
});
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const send = document.querySelector('.btn');
send.addEventListener('click', function(e) {
    const nama = document.querySelector('.nama');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');


    // Pengecekan input kosong
    if (nama.value.trim() === '') {
        e.preventDefault();
        Swal.fire({
            title: "Name is required",
            text: "Please enter your name",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "blue"
        });
    } else if (message.value.trim() === '') {
        e.preventDefault();
        Swal.fire({
            title: "Message is required",
            text: "Please enter your message",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "blue"
        });
    }else if (!isValidEmail(email.value.trim())) {
        e.preventDefault();
        Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "blue"
        });
        return; // Menghentikan eksekusi lebih lanjut jika email tidak valid
    } else {
        e.preventDefault();
        // Jika semua input valid, tampilkan pesan sukses
        Swal.fire({
            title: "Message Sent Successfully",
            text: "Thanks for sending this message 😍",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "blue"
        });
    }
});
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) { // Scroll ke bawah
    const imageElement = document.querySelector('.image');
    if (imageElement) {
      imageElement.classList.add('parallax'); // Tambahkan kelas parallax
    }
  } else { // Scroll ke atas
    const imageElement = document.querySelector('.image');
    if (imageElement) {
      imageElement.classList.remove('parallax'); // Hapus kelas parallax
    }
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk menangani pengguliran ke atas di bagian atas halaman
}, false);
