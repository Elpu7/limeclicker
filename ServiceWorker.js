self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // Tämä sallii asennuksen ja perus offline-tuen
});