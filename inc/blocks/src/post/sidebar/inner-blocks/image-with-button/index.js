import { registerBlockType } from '@wordpress/blocks';
import { Edit as edit } from './edit.js';
import { Save as save } from './save.js';
import metadata from './block.json';

registerBlockType( metadata, { edit, save } );
