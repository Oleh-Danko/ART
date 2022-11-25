import {getResource} from "../services/requests";

const showMoreStyle = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.add('animated', 'fadeInUp');
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });

    //     btn.remove();
    // });

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => {
                let card = document.createElement('div');
                card.textContent = error;
                card.style.color = 'red';
                card.style.textAlign = 'centr';
                document.querySelector(wrapper).appendChild(card);
            });

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, link, title}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src}>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};
            
export default showMoreStyle;