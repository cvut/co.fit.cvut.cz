(function (angular) {
    angular.module('app').directive('companyPreview', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {company: '='},
            templateUrl: 'templates/company-preview.tmpl.html',
            link: function (scope, elem, attrs) {
                if (scope.company.sponsor) {
                    scope.partnerSponsor = 'SPONSOR';
                } else {
                    scope.partnerSponsor = 'PARTNER';
                }
                switch (scope.company.type) {
                    case 'gold':
                        scope.status = 'GOLD';
                        break;
                    case 'silver':
                        scope.status = 'SILVER';
                        break;
                    case 'bronze':
                        scope.status = 'BRONZE';
                        break;
                }
            }
        };
    });

    angular.module('app').directive('companyDetail', function ($sce) {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {company: '='},
            templateUrl: 'templates/company-detail.tmpl.html',
            link: function (scope, elem, attrs) {
                scope.extendedDescription = scope.company.extendedDescription;
            }
        };
    });

    angular.module('app').directive('slideshow', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {slides: '='},
            templateUrl: 'templates/slideshow.tmpl.html',
            link: function (scope, elem, attrs) {
                var timeout = 5000;
                if (attrs.timeout) {
                    timeout = attrs.timeout;
                }

                scope.slidesFolder = attrs.slidesFolder;

                scope.setSlide = function (index) {
                    scope.currentSlide = scope.slides[index];
                    setTimeout(function () {
                        scope.nextSlide();
                        scope.$apply();
                    }, timeout);
                };

                scope.nextSlide = function () {
                    var currIndex = scope.slides.indexOf(scope.currentSlide);
                    var nextIndex = currIndex + 1;
                    if (nextIndex >= scope.slides.length) {
                        nextIndex = 0;
                    }
                    scope.setSlide(nextIndex);
                };

                scope.prevSlide = function () {
                    var currIndex = scope.slides.indexOf(scope.currentSlide);
                    var prevIndex = currIndex - 1;
                    if (prevIndex < 0) {
                        prevIndex = scope.slides.length - 1;
                    }
                    scope.setSlide(prevIndex);
                };
                scope.setSlide(0);
            }
        };
    });


})(angular);
