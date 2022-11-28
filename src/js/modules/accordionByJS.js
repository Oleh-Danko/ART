 const accordion = (triggerSelector, itemSelector) => {
    const btns = document.querySelectorAll(triggerSelector),
          blocks = document.querySelectorAll(itemSelector);

    blocks.forEach(block => {
        block.style.display = 'none';
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(btn.nextElementSibling.style.display == 'none') {
                btn.nextElementSibling.style.display = 'block';  
            } else {
                btn.nextElementSibling.style.display = 'none'; 
            }            
        });
    });
 };

 export default accordion;