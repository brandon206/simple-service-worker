// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw_cached_pages.js')
      .then( registration => console.log("ServiceWorker registration successful"))
      .catch(error => console.log(`ServiceWorker error: ${error}`));
  } )
}
