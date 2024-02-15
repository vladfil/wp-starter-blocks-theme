import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import edit from './edit.js';
import save from './save.js';
import metadata from './block.json';


registerBlockType( metadata.name, {
	edit,
	save,
} );
