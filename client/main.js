import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var img_data = [
	{
		img_src: 'red_bird.jpg',
		img_alt: 'red bird'
	},
	{
		img_src: 'red_green_bird.jpg',
		img_alt: 'red green bird'
	},
	{
		img_src: 'white_bird.jpg',
		img_alt: 'white bird'
	}
];

Template.images.helpers({ images: img_data });

Template.images.events({
	'click .js-image': function(event) {
		$(event.target).css('width', '50px');
	}
});


