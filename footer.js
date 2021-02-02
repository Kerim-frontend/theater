export const footer = function(){
    const html = (tag, val, sel) => {
    let name = document.createElement(tag);
    name.innerHTML = val;
    sel.append(name)

}
html('footer', `
<footer class="footer">
<div class="container">
    <div class="title"><span>стать</span> меценатом</div>
    <div class="footer__row row">
        <div class="col-4">
         <div class="footer__phone"><a href="tel:+78121234555">+7 (812) 123-45-55</a></div>
         <div class="footer__phone"><a href="tel:+78121234555">+7 (812) 123-45-55</a></div>
         <div class="footer__email"><a href="#">info@theater.ru</a></div>
         <div class="footer__adress"><a href="#">г. санкт-петербург, невский 140</a></div>
        </div>
        <div class="col-8">
            <div class="footertop__row row">
            <div class="form__row ">
               <input type="text" placeholder="Имя">
               <input type="text" placeholder="Телефон">
            </div>
            <div class="form__row ">
               <input type="text" placeholder="Компания">
               <input type="email" placeholder="E-mail">
            </div>
               <textarea placeholder="Сообщение "></textarea>
            </div>
                <div class="bottom__row row">
                <p class="footer__text">* Ваши данные не будут переданы третьим лицам, 100% вероятность. Конфиденциальность мы гарантируем, и защищаем персональные данные согласно законку ФЗ-52.</p>
                <button class="footer__btn btn" type="send">отправить</button></div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__copy">(с) Все права защищены. Большой театр. 2020</div>
            <div class="footer__creat">Разработано d-e-n.ru</div>
        </div>
    </div>
</footer>`, root)};