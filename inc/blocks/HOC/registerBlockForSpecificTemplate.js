import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import { subscribe, select } from '@wordpress/data';

const blocksRegistered = new Set();

export const registerBlockForSpecificTemplate = ({ metadata, icon, edit, save, slugs }) => {
    let currentTemplateId = '';

    const unsubscribe = subscribe(() => {
        const store = select('core/edit-site');
        const newTemplateId = store?.getEditedPostId();

        if (newTemplateId === currentTemplateId || !newTemplateId || !metadata.name) {
            return;
        }

        currentTemplateId = newTemplateId;

        const shouldRegister = slugs.some(slug => currentTemplateId.includes(slug));
        if (shouldRegister && !blocksRegistered.has(metadata.name)) {
            icon = icon || metadata.icon;
            registerBlockType(metadata, { icon, edit, save });
            blocksRegistered.add(metadata.name);
        } else if (!shouldRegister && blocksRegistered.has(metadata.name)) {
            unregisterBlockType(metadata.name);
            blocksRegistered.delete(metadata.name);
        }
    });

    // return unsubscribe;
};
