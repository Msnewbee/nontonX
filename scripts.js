function changeVideo(videoID) {
    document.getElementById('videoPlayer').src = `https://mega.nz/embed/${videoID}`;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let mailtoLink = `mailto:bilariko2@gmail.com?subject=Pesan dari ${name}&body=Email: ${email}%0A%0APesan:%0A${message}`;
    window.location.href = mailtoLink;
});
