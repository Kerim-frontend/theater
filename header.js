export const header = function(){
    const html = (tag, val, sel) => {
        let name = document.createElement(tag);
        name.innerHTML = val;
        sel.append(name)
    
    }
 
html('header',`
<div class="container">
    <div class="header__inner" >
    <button class="menu__btn">
    <span class="menu__btn-line"></span>
  </button>
   <nav class="nav">
   <ul class="nav__list">
   <li class="nav__item"><a href="#">Главная</a></li>
   <li class="nav__item"><a href="#">о театре</a></li>
   <li class="nav__item"><a href="#">Наши постановки</a></li>
   <li class="nav__item"><a href="#">партнеры театра</a></li>
   <li class="nav__item"><a href="#">контакты</a></li>
</ul>
<div class=" fixed__socials fixed__socials--mobile">
      <div class="fixed__social"><a href="#"><img src="img/instagram.svg" alt=""></a></div>
      <div class="fixed__social"><a href="#"><img src="img/facebook.svg" alt=""></a></div>
      <div class="fixed__social"><a href="#"><img src="img/vk.svg" alt=""></a></div>
      <div class="fixed__social"><a href="#"><img src="img/youtube.svg" alt=""></a></div>
</div>
   </nav>
   <div class="header__phone">
       <a href="tel:+74951234567">+7 495 123-45-67</a>
   </div>
   </div>
   <div class="hero">
    <div class="slider__wrapper">
        <div class="track">
            <div class="slider__item">
                <div class="hero__row row">
                    <div class="col-6">
                        <h1 class="hero__title">Большой театр</h1>
                        <p class="hero__description">Большо́й теа́тр — петербургский театр, существовавший в
                            1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в
                            Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в
                            Европе XVIII.</p>
                        <button class="btn">афиша</button>
                    </div>
                    <div class="col-6">
                        <img class="hero__img" src="img/image 3.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="slider__item">
                <div class="hero__row row">
                    <div class="col-6">
                        <h1 class="hero__title">Большой театр</h1>
                        <p class="hero__description">Большо́й теа́тр — петербургский театр, существовавший в
                            1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в
                            Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в
                            Европе XVIII.</p>
                        <button class="btn">афиша</button>
                    </div>
                    <div class="col-6">
                        <img class="hero__img" src="img/image 3.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="slider__btns">
        <div class="prev"><img src="img/prev.png" alt=""></div>
        <div class="next"><img src="img/next.png" alt=""></div>
        </div>
        

</div>



`, root)}
