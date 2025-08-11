function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        console.log("Service Worker registriran:", registration);
      }).catch((err) => {
        console.log("Greška prilikom registracije Service Workera:", err);
      });
    });
  }
  
  function goBack() {
    window.history.back();
}
