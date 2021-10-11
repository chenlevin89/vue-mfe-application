import { createApp } from 'vue'
import App from './App.vue'

export class MfeVue extends HTMLElement {
    connectedCallback() {
        createApp(App).mount(this);
    }
}
  
customElements.get('vue-mfe-element') ||  customElements.define('vue-mfe-element', MfeVue);


const url = new URL(location?.href);
if(url?.port === '5400'){
    const elem = document.createElement('vue-mfe-element');
    document.body.appendChild(elem);
}
