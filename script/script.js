
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
const send = document.querySelector('.btn');
send.addEventListener ('click', function (e){
    e.preventDefault();
    if (send.contains(e.target)){
        Swal.fire({
            title: "Message Send Successfully",
            text: "Thanks for sending this message😍😍😍",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "blue"
        });
    }
});