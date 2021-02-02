export const productions = function(){
    const html = (tag, val, sel) => {
        let name = document.createElement(tag);
        name.innerHTML = val;
        sel.append(name)
    
    }
    html('section', `
    <section class="productions">
        <div class="title"><span>наши</span> постановки</div>
        <div class="productions__row row">
            <div class="productions__item">
                <img class="productions__img" src="img/productions1.png" alt="">
                <div class="productions__name">ОСКАР 2020</div>
                <time class="productions__date" datetime="2020-09-0">сентябрь 2020</time>
                <span class="productions--hover"><img src="img/search.png" alt=""></span>
            </div>
            <div class="productions__item">
                <img class="productions__img" src="img/productions2.png" alt="">
                <div class="productions__name">ОСКАР 2020</div>
                <time class="productions__date" datetime="2020-09-0">сентябрь 2020</time>
                <span class="productions--hover"><img src="img/search.png" alt=""></span>
            </div>
            <div class="productions__item">
                <img class="productions__img" src="img/productions3.png" alt="">
                <div class="productions__name">золотой грамофон</div>
                <time class="productions__date" datetime="2020-09-0">июль 2020</time>
                <span class="productions--hover"><img src="img/search.png" alt=""></span>
            </div>
            <div class="productions__item">
                <img class="productions__img" src="img/productions4.png" alt="">
                <div class="productions__name">щелкунчик</div>
                <time class="productions__date" datetime="2020-09-0">май 2020</time>
                <span class="productions--hover"><img src="img/search.png" alt=""></span>
            </div>
        </div>
        </section>`, root)}
        const root = document.getElementById('root')