angular.module('Finetime.controllers', [])

.controller('DataCtrl', function($scope){
	$scope.latitude = latitude;
	$scope.longitude = longitude;
	$scope.datetime = datetime;

	$scope.sunAltitude = sunAltitude;
	$scope.sunAzimuth = sunAzimuth;

	$scope.nauticalDawnTime = nauticalDawnTime; 
	$scope.nauticalDawnAltitude = nauticalDawnAltitude; 
	$scope.nauticalDawnAzimuth = nauticalDawnAzimuth;

	$scope.dawnTime = dawnTime ;
	$scope.dawnAltitude = dawnAltitude ;
	$scope.dawnAzimuth = dawnAzimuth;

	$scope.sunriseTime = sunriseTime ;
	$scope.sunriseAltitude = sunriseAltitude ;
	$scope.sunriseAzimuth = sunriseAzimuth;

	$scope.sunriseEndTime = sunriseEndTime ;
	$scope.sunriseEndAltitude = sunriseEndAltitude ;
	$scope.sunriseEndAzimuth = sunriseEndAzimuth;

	$scope.solarNoonTime = solarNoonTime ;
	$scope.solarNoonAltitude = solarNoonAltitude ;
	$scope.solarNoonAzimuth = solarNoonAzimuth;

	$scope.goldenHourTime = goldenHourTime ;
	$scope.goldenHourAltitude = goldenHourAltitude ;
	$scope.goldenHourAzimuth = goldenHourAzimuth;

	$scope.sunsetStartTime = sunsetStartTime ;
	$scope.sunsetStartAltitude = sunsetStartAltitude ;
	$scope.sunsetStartAzimuth = sunsetStartAzimuth;

	$scope.sunsetTime = sunsetTime ;
	$scope.sunsetAltitude = sunsetAltitude ;
	$scope.sunsetAzimuth = sunsetAzimuth;

	$scope.duskTime = duskTime ;
	$scope.duskAltitude = duskAltitude ;
	$scope.duskAzimuth = duskAzimuth;

	$scope.nauticalDuskTime = nauticalDuskTime ;
	$scope.nauticalDuskAltitude = nauticalDuskAltitude ;
	$scope.nauticalDuskAzimuth = nauticalDuskAzimuth;

	$scope.nightTime = nightTime ;
	$scope.nightAltitude = nightAltitude ;
	$scope.nightAzimuth = nightAzimuth;

	$scope.nadirTime = nadirTime ;
	$scope.nadirAltitude = nadirAltitude ;
	$scope.nadirAzimuth = nadirAzimuth;

	$scope.nightEndTime = nightEndTime ;
	$scope.nightEndAltitude = nightEndAltitude ;
	$scope.nightEndAzimuth = nightEndAzimuth;

	$scope.moonAltitude = moonAltitude ;
	$scope.moonAzimuth = moonAzimuth ;
	$scope.moonDistance = moonDistance;

	$scope.moonAngle = moonAngle ;
	$scope.moonFraction = moonFraction ;
	$scope.moonPhase = moonPhase;

	$scope.moonRise = moonRise ;
	$scope.moonSet = moonSet;


});
