(function(){
	var app=angular.module('store',['storeproducts']);
	app.controller('StoreController',function(){
		this.products=gems;
	});
	app.controller('panelController',function(){
		this.tab=1;
		this.selects=function(isselected){
			this.tab=isselected;
		};
		this.afterSelect=function(afterselected){
			return this.tab===afterselected;
		};
	});
	app.controller('reviewController',function(){
		this.review={};
		this.addreview=function(product){
			product.reviews.push(this.review);
			this.review={};
		};
		
		});
		app.controller('myCtrl',function($scope){
			$("#submit").click(function(){
			var fname=$("#fname").val();
			var password=$("#password").val();
			var dataString=$("#myform").serialize();
			if(fname=='' || password==''){
				$("#msg").html("Please fill details");
			}
			else{
				$.ajax({
					type:'POST',
					url:'http://127.0.0.1/project1/webservice/save.php',
					data: dataString,
					cache:false,
					success:function(response){
						$("#msg").html(response);
						var fname=$("#fname").val("");
						var password=$("#password").val("");
					}
				});
			}
			return false;
			});
		});
		
	var gems=[{
		name:'Blue dimond',
		price:'10000',
		description:'The most costliest dimond in the world',
		canPurchase:true,
		soldOut:false,
		images:[{
		full:'blue.jpg'},
		],
		reviews:[{
		stars:'',
		body:'',
		author:'',
		color:'',}
		]
		
		
	},
	{
		name:'Red dimond',
		price:'7000',
		description:'The 2nd costliest dimond in the world',
		canPurchase:true,
		soldOut:false,
		images:[{
		full:'red.jpg'},
		],
		reviews:[{
		stars:'',
		body:'',
		author:'',
		color:'',},]
	},
	{
		name:'Green dimond',
		price:'6500',
		description:'The 3rd costliest dimond in the world',
		canPurchase:true,
		soldOut:false,
		images:[{
		full:'green.jpg'},
		],
		reviews:[{
		stars:'',
		body:'',
		author:'',
		color:'',},]
	},
	{
		name:'black dimond',
		price:'6000',
		description:'The 4th costliest dimond in the world',
		canPurchase:true,
		soldOut:false,
		images:[{
		full:'black.jpg'},
		],
		reviews:[{
		stars:'',
		body:'',
		author:'',
		color:'',},]
	},
	]
})();