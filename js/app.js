(function (angular) {
    angular.module("app", ['ngSanitize', 'pascalprecht.translate', 'ngCookies', 'duScroll']);

    angular.module('app').config(function ($translateProvider, $locationProvider, $anchorScrollProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'lang/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('cs');
        $translateProvider.useCookieStorage();

        $anchorScrollProvider.disableAutoScrolling();

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    });

    angular.module('app')
        .value('duScrollDuration', 1000)
        .value('duScrollOffset', 50);

    angular.module("app").service("TranslateService", function ($translate) {
        return {
            getLanguage: function () {
                // if ($translate.use()) {
                //     return $translate.use();
                // } else {
                //     return $translate.proposedLanguage();
                // }
                return 'cs';
            }
        };
    });

    angular.module("app").controller("HeaderCtrl", function ($rootScope, $scope, $element, $document, $location, $window, $translate, TranslateService) {
        $scope.lang = TranslateService.getLanguage();

        $scope.setLanguage = function (languageIdentifier) {
            window.location.hash = "";
            window.location.reload();
            $translate.use(languageIdentifier);
        };

        angular.element($window).bind("scroll", function () {
            var navHeight = document.getElementById('mainNavigation').offsetHeight;
            var headerHeight = $element[0].offsetHeight;
            var actualScroll = this.pageYOffset;
            if (actualScroll > headerHeight - navHeight) {
                $scope.sticky = true;
            } else {
                $scope.sticky = false;
                var percentage = actualScroll / headerHeight;
                document.getElementById('headerContent').style.opacity = 1 - 0.5*percentage;
                document.getElementById('headerContent').style.top =  50 + 40*percentage + "%";
                document.getElementById('headerContent').style.zoom = 1 - 0.5*percentage;
            }
            $scope.$apply();
            $scope.shown = false;
        });

        $scope.scrollOnTop = function () {
            $document.scrollTop(0, 1000);
        };

    });


    angular.module("app").controller("MainCtrl", function ($scope, $rootScope, $translate, $location, duScrollOffset, $document, PartnerService, SponsorService, CompanyService, TranslateService) {
        $scope.partners = PartnerService.getAllPartners();
        $scope.sponsors = SponsorService.getAllSponsors();
        $scope.companies = CompanyService.getAllCompanies();
        $scope.lang = TranslateService.getLanguage();
        $document.ready(function () {
            var element = document.getElementById($location.$$hash);
            if ($document.scrollTop() == 0 && element)
                $document.scrollTop(element.offsetTop - duScrollOffset, 1000);
        });
        if (!window.history || !history.replaceState) {
            return;
        }
        $rootScope.$on('duScrollspy:becameActive', function ($event, $element, $target) {
            var hash = $element.prop('hash');
            if (hash) {
                history.replaceState(null, null, hash);
            }
        });
    });

    angular.module("app").controller("SlideShowCtrl", function ($scope) {
        $scope.slidesFolder = 'gallery';
        $scope.slides = [{name: '22.jpg'}, {name: '23.jpg'}, {name: '24.jpg'}, {name: '25.jpg'}, {name: '26.jpg'}, {name: '27.jpg'}, {name: '28.jpg'}, {name: '29.jpg'}, {name: '30.jpg'}, {name: '31.jpg'}, {name: '32.jpg'}, {name: '33.jpg'}, {name: '34.jpg'}, {name: '35.jpg'}, {name: '36.jpg'}, {name: '37.jpg'}, {name: '38.jpg'}, {name: '39.jpg'}, {name: '40.jpg'}, {name: '41.jpg'}, {name: '42.jpg'}, {name: '43.jpg'}, {name: '44.jpg'}, {name: '45.jpg'}, {name: '46.jpg'}, {name: '47.jpg'}, {name: '48.jpg'}, {name: '49.jpg'}, {name: '50.jpg'}, {name: '51.jpg'}, {name: '52.jpg'}, {name: '53.jpg'}, {name: '54.jpg'}, {name: '55.jpg'}, {name: '56.jpg'}, {name: '57.jpg'}, {name: '58.jpg'}, {name: '59.jpg'}, {name: '60.jpg'}, {name: '61.jpg'}, {name: '62.jpg'}, {name: '63.jpg'}, {name: '64.jpg'}, {name: '65.jpg'}, {name: '66.jpg'}
        ];
    });
})(angular);
