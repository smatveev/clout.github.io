document.addEventListener("DOMContentLoaded",()=> {
    setTimeout(function(){
        document.querySelector('html').scrollTop = 0;
        document.querySelector('html').classList.remove('scroll');
        document.getElementById('body').classList.remove('none');
    },100)

    window.nextWord = function (index) {
        setTimeout(function () {
            if (index === 3) {
                document.querySelector('html').classList.add('scroll');
                document.addEventListener('scroll', function (e) {
                    let scrolled = document.querySelector('html').scrollTop;
                    let allScroll = 500;
                    if (scrolled > allScroll) {
                        document.getElementById('back').style.opacity = '0';
                    } else {
                        let op = (100 - ((scrolled * 100) / allScroll)) / 100;
                        document.getElementById('back').style.opacity = String(op);
                    }

                    let rangeWindow = 100;
                    if(document.getElementById('body').offsetWidth < 800){
                        rangeWindow = 50;
                    }

                    if (scrolled > rangeWindow) {
                        imageRage();
                    }
                });
            } else {
                if (index === 0) {
                    document.querySelector('.first-word').classList.add('active');
                }
                if (index === 1) {
                    document.querySelector('.second-word').classList.add('active');
                }
                if (index === 2) {
                    document.querySelector('.thirst-word').classList.add('active');
                }
                nextWord((index + 1));
            }
        }, 1000);
    }

    nextWord(0);

    window.imageRage = function () {
        document.querySelector('.empty[data-id="7"]').classList.add('active');
        document.querySelector('.empty[data-id="13"]').classList.add('active');
        document.querySelector('.empty[data-id="1"]').classList.add('active');
        document.querySelector('.empty[data-id="6"]').classList.add('active');
        setTimeout(function () {
            document.querySelector('.empty[data-id="14"]').classList.add('active');
            document.querySelector('.empty[data-id="19"]').classList.add('active');
            document.querySelector('.empty[data-id="8"]').classList.add('active');
            document.querySelector('.empty[data-id="12"]').classList.add('active');
            document.querySelector('.empty[data-id="2"]').classList.add('active');
            document.querySelector('.empty[data-id="5"]').classList.add('active');
        }, 200)

        setTimeout(function () {
            document.querySelector('.empty[data-id="20"]').classList.add('active');
            document.querySelector('.empty[data-id="24"]').classList.add('active');
            document.querySelector('.empty[data-id="18"]').classList.add('active');
            document.querySelector('.empty[data-id="15"]').classList.add('active');
            document.querySelector('.empty[data-id="9"]').classList.add('active');
            document.querySelector('.empty[data-id="11"]').classList.add('active');
            document.querySelector('.empty[data-id="3"]').classList.add('active');
            document.querySelector('.empty[data-id="4"]').classList.add('active');
        }, 400)

        setTimeout(function () {
            document.querySelector('.empty[data-id="25"]').classList.add('active');
            document.querySelector('.empty[data-id="28"]').classList.add('active');
            document.querySelector('.empty[data-id="21"]').classList.add('active');
            document.querySelector('.empty[data-id="23"]').classList.add('active');
            document.querySelector('.empty[data-id="16"]').classList.add('active');
            document.querySelector('.empty[data-id="17"]').classList.add('active');
            document.querySelector('.empty[data-id="10"]').classList.add('active');
        }, 600)

        setTimeout(function () {
            document.querySelector('.empty[data-id="32"]').classList.add('active');
            document.querySelector('.empty[data-id="35"]').classList.add('active');
            document.querySelector('.empty[data-id="29"]').classList.add('active');
            document.querySelector('.empty[data-id="31"]').classList.add('active');
            document.querySelector('.empty[data-id="26"]').classList.add('active');
            document.querySelector('.empty[data-id="27"]').classList.add('active');
            document.querySelector('.empty[data-id="22"]').classList.add('active');
        }, 800)

        setTimeout(function () {
            document.querySelector('.empty[data-id="36"]').classList.add('active');
            document.querySelector('.empty[data-id="38"]').classList.add('active');
            document.querySelector('.empty[data-id="33"]').classList.add('active');
            document.querySelector('.empty[data-id="34"]').classList.add('active');
            document.querySelector('.empty[data-id="30"]').classList.add('active');
        }, 1000)

        setTimeout(function () {
            document.querySelector('.empty[data-id="39"]').classList.add('active');
            document.querySelector('.empty[data-id="40"]').classList.add('active');
            document.querySelector('.empty[data-id="37"]').classList.add('active');
        }, 1200)
    }

    let l = document.getElementById('menu').querySelectorAll('li')

    for (let anchor of l) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            document.getElementById('mobile').classList.remove('active');
            const blockID = anchor.querySelector('a[href*="#"]').getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    l = document.querySelectorAll('.footer-item[data-id="2"] ul li')

    for (let anchor2 of l) {
        anchor2.addEventListener('click', function (e) {
            e.preventDefault()
            document.getElementById('mobile').classList.remove('active');
            const blockID = anchor2.querySelector('a[href*="#"]').getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    l = document.getElementById('mobile').querySelectorAll('ul li')

    for (let anchor3 of l) {
        anchor3.addEventListener('click', function (e) {
            e.preventDefault()
            document.getElementById('mobile').classList.remove('active');
            const blockID = anchor3.querySelector('a[href*="#"]').getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    document.getElementById('mobile').querySelector('.mobile-head .close').addEventListener('click',function (){
        document.getElementById('mobile').classList.remove('active');
    })

    document.getElementById('logo').querySelector('.mobile-menu').addEventListener('click',function (){
        document.getElementById('mobile').classList.add('active');
    })
})