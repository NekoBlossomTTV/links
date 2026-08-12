const shareButton = document.querySelector(".share-button");
const toast = document.querySelector(".toast");
const avatar = document.querySelector(".avatar");
const livePanel = document.querySelector(".live-panel");
const twitchChannel = "nekoblossomttv";
let toastTimer;

// Add ?preview=live to the page URL to preview the live appearance.
const livePreviewEnabled =
  new URLSearchParams(window.location.search).get("preview") === "live";

function setStreamLive(isLive) {
  avatar.classList.toggle("is-live", isLive);
  livePanel.hidden = !isLive;
}

async function refreshTwitchStatus() {
  if (livePreviewEnabled) {
    setStreamLive(true);
    return;
  }

  try {
    const response = await fetch(
      `https://decapi.me/twitch/uptime/${encodeURIComponent(twitchChannel)}?t=${Date.now()}`,
      {
      cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`Status request failed (${response.status}).`);
    }

    const uptime = (await response.text()).trim().toLowerCase();
    const explicitlyOffline =
      uptime.includes("offline") ||
      uptime.includes("not live") ||
      uptime.includes("could not find");
    const looksLikeLiveUptime =
      /^\d+\s+(second|minute|hour|day|week|month|year)s?\b/.test(uptime) &&
      !explicitlyOffline;

    setStreamLive(looksLikeLiveUptime);
  } catch (error) {
    console.warn("Could not refresh the Twitch status.", error);
    setStreamLive(false);
  }
}

setStreamLive(false);
refreshTwitchStatus();
window.setInterval(refreshTwitchStatus, 10_000);

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
