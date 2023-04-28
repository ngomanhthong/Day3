var btnOpen = document.querySelector('.button1')
    var modal = document.querySelector('.modal')
    var iconClose = document.querySelector('.modal_header i')
    var btnClose = document.querySelector('.modal_footer button')

    function toggleModal(e) {
        modal.classList.toggle('remove')
    }

    btnOpen.addEventListener('click', toggleModal)
    btnClose.addEventListener('click', toggleModal)
    iconClose.addEventListener('click', toggleModal)
    modal.addEventListener('click', function (e) {
        if (e.target == e.currentTarget) {
            toggleModal()
        }
    })
      