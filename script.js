const episodes = [
    "wVQESDiL#rWrzrxNp6Ip17-s-dICc2iaMr73T5Pic5Ep563F3vlY!",
    "gA5VnRBL#7RQII5KdmoV-Tj4OwaBOJ3ncg7q70Et7K86OE4WLPA0!",
    "9d43yZgA#JfeYXtCuhCNDbxejLHRDkeTdW3nRK1Xz5RC1sAowfL4!",
    "5UQCmIYR#4Lsgd_7srCe5I40zUoAqYruTYSkh6RumVAOocKoD5-g!",
    "sEwWjTwZ#MJwYHtqIN7hp_yXCqeIyqACGZtIOVZ-YrKeoGesmBpA!",
    "hYxzCLBQ#hfwORuSgBA7kw5_YDlqNQf-YPJhuCbc08jzzzRHQXgA!",
];

const container = document.getElementById("episodes");
let currentIframe = null;

episodes.forEach((link, index) => {
    const episodeDiv = document.createElement("div");
    episodeDiv.className = "episode-item";
    episodeDiv.innerHTML = `<div class="episode-title">Episode ${index + 1}</div>`;

    episodeDiv.addEventListener("click", () => {
        if (currentIframe) {
            currentIframe.remove();
        }
        
        const iframeContainer = document.createElement("div");
        iframeContainer.className = "iframe-container";
        iframeContainer.innerHTML = `<div class="loader"></div>`;

        const iframe = document.createElement("iframe");
        iframe.className = "episode-iframe";
        iframe.setAttribute("loading", "lazy");
        iframe.src = `https://mega.nz/embed/${link}`;
        iframe.allowFullscreen = true;

        iframe.onload = () => {
            iframeContainer.innerHTML = "";
            iframeContainer.appendChild(iframe);
        };

        episodeDiv.appendChild(iframeContainer);
        currentIframe = iframeContainer;
    });

    container.appendChild(episodeDiv);
});

function showAnimeInfo() {
    document.getElementById("anime-info").style.display = "block";
}
