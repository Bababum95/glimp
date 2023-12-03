import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { TogglePageType } from '../assets/components';
import metadata from './block.json';
import './style.scss';

const faqsData = [
    {
        title: 'Warum ist der Elf Bar Watermelon Disposable Vape eine gute Wahl?',
        text: [
            'Die Nachteile des Elf Bar Pink Lemonade Einweg Vapes sind: \
            Diese einzigartige Geschmackskomposition macht die Elf Bar \
            Pink Lemonade angenehm erfrischend. \
            Der Geschmack ist fruchtig und leicht \
            säuerlich und sorgt für ein belebendes Dampferlebnis. \
            Warum ist der Elf Bar Watermelon Disposable Vape eine gute Wahl? \
            E-Shishas bestehen vorwiegend aus einem Akku und einem Liquidtank und bieten je nach \
            Akku- und Liquidkapazität verschiedene Puffanzahlen. Die meisten Einweg E-Shishas in Deutschland \
            haben einen 2ml großen Liquidtank und bieten rund 600 Züge.'
        ]
    },
    {
        title: 'Was sind die anderen Sorten von Elf Bar?',
        text: [
            'E-Shisha ist eine elektronische Zigarette, die direkt aus der Verpackung einsatzbereit ist und kein weiteres Zubehör benötigt. E-Shishas sind in verschiedenen Geschmacksrichtungen erhältlich und zum einmaligen Gebrauch konzipiert. \
            E-Shishas bestehen vorwiegend aus einem Akku und einem Liquidtank und bieten je nach Akku- und Liquidkapazität verschiedene Puffanzahlen. Die meisten Einweg E-Shishas in Deutschland haben einen 2ml großen Liquidtank und bieten rund 600 Züge.',
        ]
    },
]

const FAQ = ({ title, text }) => {
    return (
        <details>
            <summary>
                {title}
            </summary>
            {text}
        </details>
    )
}

registerBlockType(metadata, {
    edit: ({ attributes, setAttributes }) => {
        return (
            <div {...useBlockProps()}>
                {faqsData.map((item, index) => <FAQ key={index} {...item} />)}
                <TogglePageType attributes={attributes} setAttributes={setAttributes} />
            </div>
        )
    },
    save: () => null
});
