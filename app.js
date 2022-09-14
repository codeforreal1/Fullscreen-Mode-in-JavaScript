;(function () {
  const toggler = document.querySelector('button[id="full-screen-switcher"]')
  if (toggler) {
    if ('requestFullscreen' in document.documentElement) {
      toggler.addEventListener('click', () => {
        const landscape = document.querySelector('img[id="landscape"]')
        if (landscape) {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
          } else {
            document.exitFullscreen()
          }
        }
      })
      document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
          toggler.textContent = 'Exit Full Screen'
          toggler.className = 'btn btn-danger'
        } else {
          toggler.className = 'btn btn-primary'
          toggler.textContent = 'Enter Full Screen'
        }
      })
    } else {
      // Full Screen API not supported
      toggler.style.display = 'none'
      const unsupported = document.querySelector('p[id="unsupported"]')
      if (unsupported) {
        unsupported.style.display = 'block'
      }
    }
  }
})()
