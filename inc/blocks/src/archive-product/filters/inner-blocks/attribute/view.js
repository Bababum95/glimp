import Choices from 'choices.js';

const elements = document.querySelectorAll('.wp-block-glimp-filters-attribute__dropdown');

if(elements.length > 0) {
    elements.forEach(element => {
        new Choices(element, {
            searchChoices: false,
            searchEnabled: false,
            itemSelectText: '',
            allowHTML: true
        });
    })
}
