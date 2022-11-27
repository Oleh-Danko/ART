const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typefilter = (markType) => {
        markAll.forEach(mark => {
            mark.classList.remove('animated', 'fadeIn');
            mark.style.display = 'none';
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.classList.add('animated', 'fadeIn');
                mark.style.display = 'block';
            });
        } 

        if (markType.length == 0) {
            no.classList.add('animated', 'fadeIn');
            no.style.display = 'block';
        }
    };

    menu.addEventListener('click', (e) => {
        let itemClass = e.target.classList[0];
        let markElems = wrapper.querySelectorAll(`.${itemClass}`);
        typefilter(markElems);
    });

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
  
};

export default filter;
