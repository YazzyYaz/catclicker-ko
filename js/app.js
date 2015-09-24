var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat.jpg');
	this.imgAttribution = ko.observable('');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	self.nickname = ko.observableArray([
		{nick: 'Tab'},
		{nick: 'Tobes'},
		{nick: 'Tabu'},
		{nick: 'Tootsie'},
		{nick: 'Toker'}
	]);
}

ko.applyBindings(new ViewModel());