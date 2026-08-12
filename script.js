const shareButton = document.querySelector(".share-button");
const toast = document.querySelector(".toast");
const avatar = document.querySelector(".avatar");
const livePanel = document.querySelector(".live-panel");
let toastTimer;

// Keep this false until the automatic Twitch status check is connected.
// Add ?preview=live to the page URL to preview the live appearance.
const streamIsLive =
  false || new URLSearchParams(window.location.search).get("preview") === "live";

function setStreamLive(isLive) {
  avatar.classList.toggle("is-live", isLive);
  livePanel.hidden = !isLive;
}

setStreamLive(streamIsLive);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Find all my links in one place.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied!");
  } catch (error) {
    if (error.name !== "AbortError") {
      showToast("Could not copy the link");
    }
  }
});
