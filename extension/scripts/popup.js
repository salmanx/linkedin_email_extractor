const API_ENDPOINT = "http://localhost:3000/api/v1";

document.getElementById("extract-email").addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "extractEmail" },
      async (response) => {
        if (response.content) {
          const emails = EmailExtractor.getUniqueEmails(response.content);
          if (emails.length === 0) {
            document.getElementById("email-display").innerText =
              "No email found!";
          } else {
            document.getElementById("email-display").innerHTML = emails[0];
            // make api request to acknowledge email and generate message with gpt
            try {
              await fetch(
                API_ENDPOINT +
                  "?" +
                  new URLSearchParams({
                    email: emails[0],
                  }).toString()
              );
            } catch (error) {
              console.log(error);
            }
          }
        }
      }
    );
  });
});
