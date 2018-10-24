(function (angular) {
    angular.module("app").service("CompanyService", function () {

        var companies = [
            {
                name: "Technologická agentura ČR",
                logo: "tacr.png",
                type: "",
                sponsor: false,
                page: "https://www.tacr.cz/index.php/cz/",
                description: "Česká republika prostřednictvím Technologické agentury ČR finančně podporuje stovky projektů v hodnotě mnoha stovek miliónů korun, které souvisí s principy Smart Life a vytváří prostředí pro progresivní vývoj nových metod a technologií k implementaci nastávajícího Industry 4.0. To je umožněno díky 10 programům TA ČR, jež každý z nich má svou nezaměnitelnou funkci a význam. Technologická agentura ČR vznikla proto, aby propojila svět akademického a firemního výzkumu a vývoje a podpořila projekty aplikovaného výzkumu a technologického transferu. V rámci námi podpořených projektů vznikají konkrétní unikátní produkty, patenty a další výsledky. Mechanismy našich programů pak umožňují, aby se výsledky výzkumu dostaly rychleji do praxe. Přispíváme tak ke zvyšování konkurenceschopnosti české ekonomiky. Přejeme si, abychom propojili co nejvíce partnerů s těmi nejlepšími nápady a pomohli tak měnit svět k lepšímu. ",
                extendedDescription: null,
                upper_skills: [],
                visit: true
            }
        ];
        return {
            getAllCompanies: function () {
                return companies;
            }
        }
    });
})(angular);
