const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = document.querySelectorAll('li'),
          btnAll = document.querySelector('.all'),
          btnLovers = document.querySelector('.lovers'),
          btnChef = document.querySelector('.chef'),
          btnGirl = document.querySelector('.girl'),
          btnGuy = document.querySelector('.guy'),
          btnGrandmother = document.querySelector('.grandmother'),
          btnGranddad = document.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          marcAll = wrapper.querySelectorAll('.all'),
          marcGirl = wrapper.querySelectorAll('.girl'),
          marcLovers = wrapper.querySelectorAll('.lovers'),
          marcGuy = wrapper.querySelectorAll('.guy'),
          marcChef = wrapper.querySelectorAll('.chef'),
          no = document.querySelector('.portfolio-no');
          
    const typeFilter = (marcType) => {
        marcAll.forEach(marc => {
            marc.style.display = 'none';
            marc.classList.remove('animated', 'fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (marcType) {
            marcType.forEach(marc => {
                marc.style.display = 'block';
                marc.classList.add('animated', 'fadeIn');
            });
        }else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(marcAll);
    });
    btnLovers.addEventListener('click', () => {
        typeFilter(marcLovers);
    });
    btnChef.addEventListener('click', () => {
        typeFilter(marcChef);
    });
    btnGirl.addEventListener('click', () => {
        typeFilter(marcGirl);
    });
    btnGuy.addEventListener('click', () => {
        typeFilter(marcGuy);
    });
    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });
    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.tagName == 'LI') {             // если элемент является li
            items.forEach(btn => btn.classList.remove('active')); // убрали класс активности со всех элементов
            target.classList.add('active');
        }
    });

};

export default filter;