var initialcats = [
	{
		clickCount : 0,
		name: 'Ana',
		imgSrc: 'img/cat.jpg',
		nickname: ['Bana']
	},
	{
		clickCount : 0,
		name: 'Tanya',
		imgSrc: 'img/cat2.jpg',
		nickname: ['Tatty']
	},
	{
		clickCount : 0,
		name: 'Victoria',
		imgSrc: 'img/cat3.jpg',
		nickname: ['Vico']
	},
	{
		clickCount : 0,
		name: 'Ophelia',
		imgSrc: 'img/cat4.jpg',
		nickname: ['Oph']
	}
]


var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickname = ko.observableArray(data.nickname);

	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Baby';
		} else if (clicks < 20) {
			title = 'Infant';
		} else if (clicks < 30) {
			title = 'Kid';
		} else if (clicks < 40) {
			title = 'Teen';
		} else if (clicks < 60) {
			title = 'Hipster';
		} else if (clicks < 80) {
			title = 'Big Guy';
		} else {
			title = 'Old Man';
		}
		return title;
	}, this);
};

var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialcats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );

	});
	
	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
};



ko.applyBindings(new ViewModel());