import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, { edit, save: () => null } );
