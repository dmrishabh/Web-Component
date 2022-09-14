    //   template

    const template = document.createElement('template');
template.innerHTML = `
<style>
h3{
    color: blue;

}
</style>
<div class="user-card">
<h3>

</h3>
</div>
`;
class userCard extends HTMLElement {
    constructor() {
      super();
    //   shadow DOM 
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const value = this.getAttribute("data-name");
    this.shadowRoot.querySelector('h3').innerText = value;
   
      console.log(value);
    }
  }
customElements.define('user-card', userCard);
  