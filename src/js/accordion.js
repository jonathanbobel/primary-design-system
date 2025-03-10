export function initAccordion() {
  console.log("Accordion script initialized! 🚀");

  document.querySelectorAll(".accordion").forEach((accordion) => {
    // Prevent duplicate event listeners by checking if one is already attached
    if (accordion.dataset.accordionInitialized === "true") {
      return;
    }
    accordion.dataset.accordionInitialized = "true"; // Mark as initialized

    accordion.addEventListener("click", function (event) {
      const target = event.target.closest(".accordion-trigger");
      if (!target) return;

      console.log("Accordion clicked:", target);

      const panelId = target.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (!panel) return;

      const isExpanded = target.getAttribute("aria-expanded") === "true";
      console.log("Current expanded state:", isExpanded);

      if (isExpanded) {
        target.setAttribute("aria-expanded", "false");
        panel.setAttribute("hidden", "");
        panel.style.display = "none";
        console.log("Accordion collapsed ❌");
      } else {
        target.setAttribute("aria-expanded", "true");
        panel.removeAttribute("hidden");
        panel.style.display = "block";
        console.log("Accordion expanded ✅");
      }
    });
  });
}