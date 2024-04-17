const tabBtn = document.querySelectorAll('.tabs__btn');
const tabBlock = document.querySelectorAll('.tabs__item');

tabBtn.forEach((e) => {
  e.addEventListener('click', () => {
    
    tabBtn.forEach((item) => item.classList.remove('tabs__btn_active'))
    e.classList.add('tabs__btn_active')

    tabBlock.forEach((el) => {
      el.dataset.target === e.dataset.path ?
        el.classList.add('tabs__item_active') :
        el.classList.remove('tabs__item_active')
    })
  })
})


