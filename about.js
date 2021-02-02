export const about = function(){
       const html = (tag, val, sel) => {
        let name = document.createElement(tag);
        name.innerHTML = val;
        sel.append(name)
    }
    
    html('section', `
<section class="about">
<div class="container">
    <div class="title"><span>о</span>театре</div>
    <div class="about__row row">
        <div class="about__col5 col-5">
            <div class="about__suptitle">Самый лучший театр СПБ</div>
            <div class="about__text">Как свидетельствуют архивные документы,
                первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди.
                В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ,
                Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну
                создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым.
                Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия
                можно
                считать 1784 год.</div>
        </div>
        <div class="col-3">
            <div class="about__suptitle">немного о цифрах</div>
            <div class="about__icon"><img src="img/about1.svg" alt=""></div>
            <div class="about__description"><span>1600</span>посадочный мест</div>
            <div class="about__icon"><img src="img/about2.svg" alt=""></div>
            <div class="about__description"><span>350</span>лет истории</div>
        </div>
        <div class="about__img col-4">
            <img  src="img/about3.png" alt="">
        </div>
    </div>
</div>
</section>`, root)}
