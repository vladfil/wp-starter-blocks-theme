import { useBlockProps } from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {title, subtitle, description, image} = attributes;

	return (
		<section class="hero">
			<div class="hero__column">
				
			</div>
			<div class="hero__column">
				<h2>{title}</h2>
				<h4>{subtitle}</h4>
				<p>{description}</p>
			</div>
		</section>
	);
}
