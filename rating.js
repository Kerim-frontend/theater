export const rating = function(){
    const html = (tag, val, sel) => {
        let name = document.createElement(tag);
        name.innerHTML = val;
        sel.append(name)
    
    }
    html('section', `
<section class="rating">
<div class="container">
    <div class="rating__row row">
        <div class="col-5">
            <div class="rating__years">
                <div class="rating__year">2018</div>
                <div class="rating__year">2019</div>
                <div class="rating__year">2020</div>
            </div>
        </div>
        <div class="col-7">
            <div class="rating__stars">
                <img class="rating__star" src="img/star.svg" alt="">
                <img class="rating__star" src="img/star.svg" alt="">
                <img class="rating__star" src="img/star.svg" alt="">
                <img class="rating__star" src="img/star.svg" alt="">
                <img class="rating__star" src="img/star.svg" alt="">
            </div>
            <div class="rating__description">Лучший театр
                по мнению театральных критиков Парижа</div>
        </div>
    </div>
</div>
</section>`, root)};