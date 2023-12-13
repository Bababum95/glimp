import { registerBlockType } from '@wordpress/blocks';
import { default as edit } from './edit.js';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, { edit, save: () => null } );
