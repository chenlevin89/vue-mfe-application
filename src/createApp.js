import {createApp} from 'vue';
import App from './App.vue'

export default function createVueApp(element, props) {
    const app = createApp(App, props);
    app.mount(element);

    return () => app.unmount();
}