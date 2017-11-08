import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	console.log(Images.find().count());

	if (Images.find().count() == 0) {
		for (var i = 1; i <= 22; i++) {
		
			Images.insert(
				{
					img_src: 'img_'+i+'.jpg',
					img_alt: 'image number '+i
				}
			);
		}

		console.log(Images.find().count());
	}
});

