import { useSelect } from '@wordpress/data';

export const useGlimpSettings = () => {
    const settings = useSelect((select) => {
        const blockEditorSettings = select('core/block-editor').getSettings();
        const editorSettings = select('core/editor').getEditorSettings()

        return editorSettings.glimpSettings || blockEditorSettings.glimpSettings;
    }, []);
    return settings;
};
