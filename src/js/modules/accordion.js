 const accordion = () => {
    const head = document.querySelectorAll('.accordion-heading'),
          blocks = document.querySelectorAll('.accordion-block');

    blocks.forEach(item => {
        item.style.display = 'none';
        item.classList.add('animated', 'fadeIn');
    });

    head.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(item.nextElementSibling.style.display == 'none') {
                item.nextElementSibling.style.display = 'block';  
            } else {
                item.nextElementSibling.style.display = 'none'; 
            }            
        });
    });
 };

 export default accordion;