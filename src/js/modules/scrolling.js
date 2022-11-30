const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });
    

    //Scrolling with request animation frame
    let links = document.querySelectorAll('[href^="#"]'),  //ищем все ссылки начинаюшиеся с #
        speed = 0.1;
     
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let widthTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop),  //количество рх прокрученых от верха элем
                hash = this.hash,
                //getBoundingClientRect - метолд позволяющий получить доступ к свойствам
                toBlock = document.querySelector(hash).getBoundingClientRect().top,  //верхняя граница элемента к которому будет скролить
                start = null;

            requestAnimationFrame(step);
       
            function step(time) {
                if (start === null) {  //узнаем первый ли раз запускаеться анимация
                    start = time;  //в следующую итерацию start не будет = null 
                }

                let progress = time - start,
                    //вычесляем количество рх на которое необходимо пролистать за период анимации и  какую сторону
                    //количество рх пролистаного делим на скорость и отнимаем количество рх прокрученых от верха элем, количество рх прокрученых от верха элем + верхняя граница элемента к которому будет скролить
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : 
                    Math.min(widthTop + progress/speed, widthTop + toBlock));

                    (document.documentElement || document.body).scrollTo(0, r); // по оси Х = 0, по оси Y = r

                    //останавливаем анимацию
                    if (r != widthTop + toBlock) {  //когда будет ровна сума = долистали до нужного элем
                         requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        });
    });


    //Pure js scrolling
    // const element = document.documentElement,
    //       body = document.body;

    // const calcScroll = (e) => {
    //     upElem.addEventListener('click', function() {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //         if (this.hash !== '') {  //получаем ссылку
    //             e.preventDefault();
    //             let hashElement = document.querySelector(this.hash),  //получаем элем по ид(хешу)
    //                 hashElementTop = 0;  //сколько нужно пролестать пикс до род хеш элемv    

    //             //узнаем сколько пикселей от род элемента
    //             while (hashElement.offsetParent) { //пока существует родитель(body) запускаем цикл
    //                 hashElementTop += hashElement.offSetTop;  //offSetTop - сколько пикселей осталось до верхней граници род элем
    //                 hashElement = hashElement.offsetParent;  //18:50
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // //(расстояние прoлистаное вниз, сколько пикселей отскролили от родителя, элем к которому листаем)
    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval =1,  //значение через какое будет произв анимация
    //         prevScrollTop,  //предшествуюшщее значение
    //         speed;  //скорост анимации

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //         if () {

    //         } else {
    //             element.scrollTop += speed;
    //             body.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     });
    // };
};

export default scrolling;