
export const pixedPanel = function(){
    const html = (tag, val, sel) => {
    let name = document.createElement(tag);
    name.innerHTML = val;
    sel.append(name)

}
html('div', `
<div class="fixed__panel">
<div class="fixed__info">
<div class="fixed__text">контактная информация</div>
<div class="fixed__socials">
      <div class="fixed__social"><a href="#"><img src="img/instagram.svg" alt=""></a></div>
      <div class="fixed__social"><a href="#"><img src="img/facebook.svg" alt=""></a></div>
      <div class="fixed__social"><a href="#"><img src="img/vk.svg" alt=""></a></div>
      <div class="fixed__social"><a href="#"><img src="img/youtube.svg" alt=""></a></div>
</div>
</div>
</div>`,root)};