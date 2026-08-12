const shareButton = document.querySelector(".share-button");
const toast = document.querySelector(".toast");
let toastTimer;

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
