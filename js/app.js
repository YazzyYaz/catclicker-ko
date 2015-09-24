var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat.jpg');
	this.imgAttribution = ko.observable('');

	this.nickname = ko.observableArray([
		{nick: 'Tab'},
		{nick: 'Tobes'},
		{nick: 'Tabu'},
		{nick: 'Tootsie'},
		{nick: 'Toker'}
	]);

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
}

var ViewModel = function() {
	
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}



ko.applyBindings(new ViewModel());