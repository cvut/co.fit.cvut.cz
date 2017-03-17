(function (angular) {
    angular.module("app", ['ngSanitize', 'pascalprecht.translate', 'ngCookies']);

    angular.module('app').config(function ($translateProvider, $locationProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'lang/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('cs');
        $translateProvider.useCookieStorage();

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    });

    angular.module("app").service("TranslateService", function ($translate) {
        return {
            getLanguage: function () {
                if ($translate.use()) {
                    return $translate.use();
                } else {
                    return $translate.proposedLanguage();
                }
            }
        };
    });

    angular.module("app").controller("HeaderCtrl", function ($scope, $element, $location, $window, $templateCache, $translate, TranslateService) {
        $scope.lang = TranslateService.getLanguage();

        $scope.setLanguage = function (languageIdentifier) {
            window.location.hash = "";
            window.location.reload();
            $translate.use(languageIdentifier);
        };

        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset > $element[0].offsetHeight - document.getElementById('mainNavigation').offsetHeight) {
                $scope.sticky = true;
            } else {
                $scope.sticky = false;
            }
            $scope.$apply()
        });
    });


    angular.module("app").controller("MainCtrl", function ($scope, $translate, PartnerService, SponsorService, TranslateService) {
        $scope.partners = PartnerService.getAllPartners();
        $scope.sponsors = SponsorService.getAllSponsors();
        $scope.lang = TranslateService.getLanguage();
    });

    angular.module("app").controller("SlideShowCtrl", function ($scope) {
        $scope.slidesFolder = 'gallery';
        $scope.slides = [{name: '22.jpg'}, {name: '23.jpg'}, {name: '24.jpg'}, {name: '25.jpg'}, {name: '26.jpg'}, {name: '27.jpg'}, {name: '28.jpg'}, {name: '29.jpg'}, {name: '30.jpg'}, {name: '31.jpg'}, {name: '32.jpg'}, {name: '33.jpg'}, {name: '34.jpg'}, {name: '35.jpg'}, {name: '36.jpg'}, {name: '37.jpg'}, {name: '38.jpg'}, {name: '39.jpg'}, {name: '40.jpg'}, {name: '41.jpg'}, {name: '42.jpg'}, {name: '43.jpg'}, {name: '44.jpg'}, {name: '45.jpg'}, {name: '46.jpg'}, {name: '47.jpg'}, {name: '48.jpg'}, {name: '49.jpg'}, {name: '50.jpg'}, {name: '51.jpg'}, {name: '52.jpg'}, {name: '53.jpg'}, {name: '54.jpg'}, {name: '55.jpg'}, {name: '56.jpg'}, {name: '57.jpg'}, {name: '58.jpg'}, {name: '59.jpg'}, {name: '60.jpg'}, {name: '61.jpg'}, {name: '62.jpg'}, {name: '63.jpg'}, {name: '64.jpg'}, {name: '65.jpg'}, {name: '66.jpg'}
        ];
    });
})(angular);
