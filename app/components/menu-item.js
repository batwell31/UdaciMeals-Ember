import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    orderManager: inject.service('order-manager'),
    classNames: ['menu-item'],
    tagName: 'li',
    mealCategory: 'breakfast',
    actions: {
        chooseItem(menuItemName) {
            this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
        }
    }
});
