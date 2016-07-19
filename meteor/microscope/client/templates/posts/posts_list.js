var postsData = [
    {
	title: 'Introducing Telescope',
	url: 'http://www.google.com'
    },
    {
	title: 'Meteor',
	url: 'http://meteor.com'
    }
];

Template.postsList.helpers({
    //    posts: postsData
    posts: function(){
	return Posts.find();
    }
});
