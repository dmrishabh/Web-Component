# HTML Web Component 
### Like react or vue we can create components using set of web platform Api's vanilla js with html 
---
#### There're  3 main building block 
- Custom Element 
```html
<custom-element>

 <-- code  goes here -->

</custom-element>
```
- Shadow Dom
```js
// Used for self-contained components
// Encapsulate styles and markup
// Create with 
element.attachShadow({mode:open})
// Create a shadowRoot that we can reference and interact with 
```
- HTML Template
```js

// define encapsulated markup of our web component
// template tag stores markup on page
// include both html and css in templates
// use slot to add custom text

```
---
#### Some benefits


* Create custom html tags
* Create custom class
* lifecycle methods available
---
## Custom Elements lifecycle method 

```javascript
constructor(){
    // called when an instance of the element is created or upgraded
}
connectedCallback(){
    // called every time when the element is inserted into the DOM
}
disconnectedCallback(){
    // called every time when the element is removed from the DOM
}
attributeChangedCallback( attributeName , oldValue, newValue ){
    // called when an attribute is added, removed, updated, or replaced
}

```

---

## Getting Started
---
```js
// Syntax 
class userCard extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Element functionality written in here
    }
  }
  customElements.define('user-card', WordCount);
  
```
---

