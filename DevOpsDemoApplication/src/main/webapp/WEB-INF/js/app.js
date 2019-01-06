var app = angular.module('demoApp', ['ngTouch', 'ui.grid']);

app.service('EmployeeDetails', function () {
	var employeeList = [];
   this.getAllEmployee = function(){
	   debugger;
	   return employeeList;
   }
   this.addEmployee = function(emp, $http){
	   debugger;
	   employeeList.push(emp);
	   $http.post('/EmployeeServlet', emp).then(function(response){
		   debugger;
		   
	   });
   }
});

app.controller('MainCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
		$scope.employeeList = [];
		//debugger;
		$http({
			url : 'EmployeeServlet',
			method : 'GET',
		}).then(function(response){
			//debugger;
			$scope.employeeList = response.data;
		});
 
	  $scope.employee = [
	    {
	        "First Name": "Cox",
	        "Last Name": "Carney",
	        "Company": "Kovair",
	        "Date of Joining": "01/06/2010",
	        "Department": "ALM Developement"
	    },
	    {
	        "First Name": "Lorraine",
	        "Last Name": "Wise",
	        "Company": "Kovair",
	        "Date of Joining": "01/07/2010",
	        "Department": "Cloud Infra Exec"
	    },
	    {
	        "First Name": "Nancy",
	        "Last Name": "Waters",
	        "Company": "Kovair",
	        "Date of Joining": "01/08/2010",
	        "Department": "Omnibus Developement"
	    },
	    {
	        "First Name": "Somesh Ch.",
	        "Last Name": "Roy",
	        "Company": "Kovair",
	        "Date of Joining": "01/08/2005",
	        "Department": "Omnibus Developement"
	    },
	    {
	        "First Name": "Alexa",
	        "Last Name": "Galcanvos",
	        "Company": "Kovair",
	        "Date of Joining": "15/09/2006",
	        "Department": "Omnibus Developement"
	    },
	    {
	        "First Name": "Jeromy",
	        "Last Name": "Jack",
	        "Company": "Kovair",
	        "Date of Joining": "20/09/2010",
	        "Department": "ALM Developement"
	    },
	    {
	        "First Name": "Scott",
	        "Last Name": "Allen",
	        "Company": "Kovair",
	        "Date of Joining": "21/10/2009",
	        "Department": "ALM Developement"
	    },
	    {
	        "First Name": "Soumonil",
	        "Last Name": "Roy Chowdhury",
	        "Company": "Kovair",
	        "Date of Joining": "01/08/2005",
	        "Department": "Software Engineer"
	    },
	    {
	        "First Name": "Joydeep",
	        "Last Name": "Dutta",
	        "Company": "Kovair",
	        "Date of Joining": "01/08/2006",
	        "Department": "Software Engineer"
	    }
	];
	 
	  $scope.cellClicked = function (row, col) {
		//debugger;
		$scope.selectedEmployee = $filter('filter')($scope.employeeList, {'firstName': row.entity.firstName}) [0];
	 };
	  
	 $scope.gridOptions = {
			 data: 'employeeList',
			 columnDefs: [
			              { name: 'First Name' , field: 'firstName', cellTemplate: '<div data-ng-click="grid.appScope.cellClicked(row,col)" class="ui-grid-cell-contents" >{{COL_FIELD CUSTOM_FILTERS}}</div>' },
			              { name: 'Last Name', field: 'lastName' },
			              { name: 'Designation', field: 'designation' },
			              { name: 'Email', field: 'email' },
			]
	 };
	 
}]);

app.controller('AddEmployeeCtrl',['$scope', '$http',  '$window', function($scope, $http, $window){
	debugger;
	$("#doj").datepicker({
        format: "mm-dd-yyyy",
        autoclose: true
    })

    $('#doj').on('changeDate', function (ev) {
    	debugger;
    	
        $(this).datepicker('hide');
    });
	//$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
	    //$scope.Employee.gender = "Male";
	    //$scope.Employee.department = "ALM Developement";
		$scope.genders = [{id : 1, value : 'Male'},{id : 2, value : 'Female'}];
		$scope.departments = [{
			id : 1,
			name : 'ALM Developement' 
		},{
			id : 2,
			name : 'Omnibus Developement'
		},{
			id : 3,
			name : 'DevOps Cloud'
		},{
			id : 4,
			name : 'System And Networking'
		},{
			id : 5,
			name : 'Solution'
		},{
			id : 6,
			name : 'Delivery Management' 
		},{
			id : 7,
			name : 'Technical Support'
		}];
		$scope.getDepartment = function(department) {
			debugger
		//$scope.Employee.department = $this.selectedText;
		}
		
		$scope.getGender = function($this) {
			debugger;
		}
		$scope.addEmployeeToServer = function() {
			debugger;
			
	        $http({
	        	    url : 'EmployeeServlet',
	                method : 'POST',
	                contentType: 'application/json',
	                data : JSON.stringify($scope.Employee)
	        }).then(function(response){
	        	$window.location.href = "ViewDemoPage.html"
	        	
	        });
		};
}]);