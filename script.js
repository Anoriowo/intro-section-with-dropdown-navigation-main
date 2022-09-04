function closeMenu() {
    if (document.getElementById('navbarSupportedContent').style.display == 'block') {
      document.getElementById('navbarSupportedContent').style.display = 'none'
    }
     else {
      document.getElementById('navbarSupportedContent').style.display = 'block'
    }
  }
  document.getElementById('close_icon').addEventListener('click', closeMenu)

  function openMenu() {
    if (document.getElementById('navbarSupportedContent').style.display == 'block') {
      document.getElementById('navbarSupportedContent').style.display = 'none'
    }
     else {
      document.getElementById('navbarSupportedContent').style.display = 'block'
    }
  }
  document.getElementById('navbar_toggler').addEventListener('click', openMenu)