const sampleBody = document.getElementById("sample-body");
const sampleKind = document.getElementById("sample-kind");
const summary = sampleBody.cloneNode(true);
const sourceText = [
  "The release candidate is ready for staging. Before deploying to production, the team still needs to test a document upload in staging.",
  "The final check is to regenerate a summary and confirm that its expiry date moves forward in the report."
];
for (const button of document.querySelectorAll("[data-view]")) {
  button.addEventListener("click", () => {
    const isSummary = button.dataset.view === "summary";
    sampleKind.textContent = isSummary ? "Generated summary" : "Source document";
    const content = isSummary ? [...summary.cloneNode(true).childNodes] : sourceText.map(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    });
    sampleBody.replaceChildren(...content);
    for (const item of document.querySelectorAll("[data-view]")) {
      item.setAttribute("aria-pressed", String(item === button));
    }
  });
}
