 const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);
    
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let block = this.nextElementSibling;
            if (!btn.classList.contains('active-style')) {
                btns.forEach(btn => {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = '0px';
                });
                this.classList.add('active-style');
                block.classList.add('active-content');
                block.style.maxHeight = block.scrollHeight + 80 + "px";
            } else {
                this.classList.remove('active-style');
                block.classList.remove('active-content');
                block.style.maxHeight = "0px";
            }


        }); 
    });
 };

 export default accordion;
















//  blocks.forEach(block => {
//     block.style.display = 'none';
//     block.classList.add('animated', 'fadeIn');
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
        
//         if(btn.nextElementSibling.style.display == 'none') {
//             btn.nextElementSibling.style.display = 'block';  
//         } else {
//             btn.nextElementSibling.style.display = 'none'; 
//         }            
//     });
// });