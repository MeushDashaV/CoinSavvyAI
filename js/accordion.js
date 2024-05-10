document.addEventListener('DOMContentLoaded', function () {
  var headers = document.querySelectorAll('.accordion-header');
  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var accordionItem = this.parentElement;
      var arrow = this.querySelector('.arrow-svg');

      if (!accordionItem.classList.contains('active')) {
        var activeItem = document.querySelector('.accordion-item.active');
        if (activeItem) {
          activeItem.classList.remove('active');
          toggleAccordion(activeItem);
        }
        accordionItem.classList.add('active');
        toggleAccordion(accordionItem);
      } else {
        accordionItem.classList.remove('active');
        toggleAccordion(accordionItem);
      }
    });
  });
});

function toggleAccordion(item) {
  var content = item.querySelector('.accordion-content');
  var arrowTop = item.querySelector('.arrow-svg-top');
  var arrowBottom = item.querySelector('.arrow-svg-bottom');

  if (item.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px'; // Ми змінюємо max-height на висоту контенту
    arrowTop.style.display = 'none';
    arrowBottom.style.display = 'inline-block';
  } else {
    content.style.maxHeight = null; // Повертаємо max-height на null
    arrowTop.style.display = 'inline-block';
    arrowBottom.style.display = 'none';
  }
}

function scrollToTarget() {
  const targetBlock = document.getElementById('targetBlock');

  targetBlock.scrollIntoView({ behavior: 'smooth' });
}
