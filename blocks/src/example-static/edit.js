import { __ } from '@wordpress/i18n';
import { 
	// useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

function MediaUploader({image, setAttributes}) {
	// const {id, url, size, alt} = image;

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) =>
					console.log( 'selected ' + media.length )
				}
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ image?.id }
				render={ ( { open } ) => (
					<Button onClick={ open }>Open Media Library</Button>
				) }
			/>
		</MediaUploadCheck>
	);
}

export default function Edit({attributes, setAttributes}) {
	const {title, subtitle, description, image} = attributes;

	return (
		<section class="hero">
			<div class="hero__column">
				<MediaUploader image={image} setAttributes={setAttributes} />
			</div>
			<div class="hero__column">
				<RichText
					tagName="h2"
					placeholder={ __( 'Example Static – hello from the editor!', 'example-static' ) }
					value={ title }
					onChange={ title => setAttributes({ title }) }
				/>
				<RichText
					tagName="h4"
					placeholder={ __( 'Example Static – hello from the editor!', 'example-static' ) }
					value={ subtitle }
					onChange={ subtitle => setAttributes({ subtitle }) }
				/>
				<RichText
					tagName="p"
					placeholder={ __( 'Example Static – hello from the editor!', 'example-static' ) }
					value={ description }
					onChange={ description => setAttributes({ description }) }
				/>
			</div>
		</section>
	);
}
