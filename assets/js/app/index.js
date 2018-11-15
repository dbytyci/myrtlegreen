'use strict';

const demoEl = document.getElementById('demo');

if(demoEl) {
    import('./components/demoComponent').then(m => m.demoComponent.init());
}