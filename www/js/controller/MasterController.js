app.controller('MasterController', ['$scope', '$state', 'NewsService', function($scope, $state, NewsService){
	$scope.news = [
	{title:'A', imageUrl:'', createdDate: new Date(), content:'xxx xxxxxx'},
	{title:'B', imageUrl:'', createdDate: new Date(), content:'xxx xxxxxx'},
	{title:'C', imageUrl:'', createdDate: new Date(), content:'xxx xxxxxx'},
	{title:'D', imageUrl:'', createdDate: new Date(), content:'xxx xxxxxx'}
	];

	$scope.showDetail = function(newsItem){
		 //console.log(newsItem.title);
		 NewsService.selectedNews = newsItem;
		$state.go('detail');
	}
	
}])