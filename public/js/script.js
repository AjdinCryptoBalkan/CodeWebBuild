const img = document.querySelector('.img-now')
const sendbox = document.querySelector('.sendbox')


setTimeout(() => {
    img.classList.remove('start')
    img.classList.add('end')
}, 1000);

setTimeout(() => {
    sendbox.classList.remove('now-go')
    sendbox.classList.add('now-end')
}, 2000);