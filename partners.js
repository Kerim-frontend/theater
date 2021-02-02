export const partners = function(){
        const html = (tag, val, sel) => {
        let name = document.createElement(tag);
        name.innerHTML = val;
        sel.append(name)
    
    }
    html('section', `
<section class="partners">
    <div class="container">
        <div class="title"><span>партнеры</span>театра</div>
        <div class="partners__row row">
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
          <div class="partner__item"><img src="img/partner.png" alt=""></div>
        </div>
    </div>
</section>`,root)};