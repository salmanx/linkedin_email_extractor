chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractEmail") {
    sendResponse({ content: document.body.textContent });
  }
});
