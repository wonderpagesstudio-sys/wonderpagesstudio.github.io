// Wonder Pages Studio: anteprima leggera YouTube Shorts.
// Il player (e i suoi cookie) viene caricato solo quando il visitatore clicca.
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.wps-yt');
  if (!btn || btn.querySelector('iframe')) return;
  var id = btn.getAttribute('data-id');
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&playsinline=1&rel=0';
  iframe.title = btn.getAttribute('aria-label') || 'Video YouTube';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  btn.innerHTML = '';
  btn.appendChild(iframe);
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'video_play', { video_id: id, page_path: location.pathname });
  }
});
