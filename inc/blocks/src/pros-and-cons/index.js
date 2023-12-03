import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { prosAndConsIcon } from '../assets/icons/';
import { TogglePageType } from '../assets/components';
import metadata from './block.json';
import './style.scss';

const prosAndConsData = [
    {
        title: 'Was sind die Vorteile von Elf Bar Watermelon?',
        items: [
            'Bietet ein angenehmes und erfrischendes Dampferlebnis mit dem reichen Geschmack von Wassermelone.',
            'Das schlanke und leichte Design erleichtert das Mitnehmen für unterwegs.',
            'Elf Bar Watermelon Vapes sind sofort einsatzbereit, es ist kein zusätzliches Einrichten oder Nachfüllen erforderlich.',
            'Die Akkuleistung des Elf Bar Watermelon ist hervorragend und gewährleistet eine lange Nutzungsdauer.',
            'Elf Bar Watermelon ist erschwinglich und bietet ein hervorragendes Preis-Leistungs-Verhältnis.',
            'Der Zugwiderstand ist derselbe wie bei herkömmlichen Zigaretten, was den Übergang erleichtert.'
        ]
    },
    {
        title: 'Was sind die Vorteile von Elf Bar Watermelon?',
        items: [
            'Das schlanke und leichte Design erleichtert das Mitnehmen für unterwegs.',
            'Elf Bar Watermelon Vapes sind sofort einsatzbereit, es ist kein zusätzliches Einrichten oder Nachfüllen erforderlich.',
            'Die Akkuleistung des Elf Bar Watermelon ist hervorragend und gewährleistet eine lange Nutzungsdauer.',
            'Elf Bar Watermelon ist erschwinglich und bietet ein hervorragendes Preis-Leistungs-Verhältnis.',
        ]
    },
]

const List = ({ title, items }) => {
    return (
        <div className="wp-block-glimp-pros-and-cons__list">
            <h2>{title}</h2>
            <ol>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}

registerBlockType(metadata, {
    icon: {
        src: prosAndConsIcon
    },
    edit: ({ attributes, setAttributes }) => {
        return (
            <div {...useBlockProps()}>
                <div className="wp-block-glimp-pros-and-cons__contents">
                    {prosAndConsData.map((item, index) => <List key={index} {...item} />)}
                </div>
                <TogglePageType attributes={attributes} setAttributes={setAttributes} />
            </div>
        )
    },
    save: () => null
}
);

