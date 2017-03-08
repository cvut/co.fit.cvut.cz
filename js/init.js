var partners;

function initAll() {

    var cell = $('header .cell');
    cell.mouseenter(function (e) {
        var ico = $(this).find(".ico.random");
        if (ico.length) {
            var backgroundPos = ico.css('backgroundPosition').split(" ");
            var pos = parseInt(backgroundPos[0]);
            ico.css('backgroundPosition', pos + 18.5 + "%" + " center");
        }
    });

    cell.mouseleave(function (e) {
        var ico = $(this).find(".ico.random");
        ico.css('backgroundPosition', "");
    });

    $('a').mouseenter(function (e) {
        var href = $(this).attr('href');
        $('a[href="' + href + '"]').addClass('hovered');
        $(this).mouseleave(function (e) {
            $('a[href="' + href + '"]').removeClass('hovered');
        })
    });

    var gallery = $('#gallery');
    gallery.slideme({
        arrows: true,
        autoslide: true,
        autoslideHoverStop: true,
        css3: true,
        interval: 4000,
        pagination: "none",
        resizable: {width: 900, height: 900},
        loop: true,
        transition: 'fade'
    });
    var rand = Math.round(Math.random() * ($('ul.slideme li').size() - 1));
    gallery.slideme('jumpTo', rand);

    $('.expandable-container').click(function (e) {
        var container = $(this);
        var elementToHide = container.parent().find('.expanded');
        var elementToShow = container.find('.expandable');
        var descriptionToShow = container.find('.description');
        if (!$(this).hasClass('expanded')) {
            elementToShow.addClass('expanded');
            descriptionToShow.addClass('expanded');
        }
        elementToHide.removeClass('expanded');

        if (container.hasClass('follow')) {
            $('.expandable').not('.expanded').hide();
            if (container.find('.expandable').hasClass('expanded')) {

                scrollAnimate(container);
            }
            $('.expanded').show();
        } else {
            $('.expandable').not('.expanded').slideUp('slow');
            $('.expanded').slideDown('slow');
        }
    });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        scrollAnimate($target, function () {
            window.location.hash = target;
        });
    });

    $('form.filter').submit(function (e) {
        e.preventDefault();
    });

    $('form.filter input').keyup(function (e) {
        var criteria = $(this).val().split(/[\s,]+/);

        $.each(criteria, function (index, value) {
            $.each($('.comming-partners .company'), function (e) {
                var description = $(this).find('.description h3');
                var skills = $(this).find('.skills');
                if ((description.text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                    || (skills.text().toLowerCase().indexOf(value.toLowerCase()) >= 0)) {
                    $(this).css('display', 'block');
                } else {
                    $(this).css('display', 'none');
                }
            });

        });

    });
}

function scrollAnimate($target, callback) {
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, callback);
}

function getPosition(partner) {
    var score;
    if (partner.type == "gold") {
        score = 1;
    } else if (partner.type == "silver") {
        score = 2;
    } else if (partner.type == "bronze") {
        score = 3;
    } else {
        score = 7;
    }
    if (partner.sponsor) {
        score += 3;
    }
    if (partner.importance) {
        score += -partner.importance/10 + 0.1
    }
    return score;
}

function initPartners() {
    partners = [
        {
            name: "Profinit",
            logo: "profinit.svg",
            type: "gold",
            page: "https://www.profinit.eu/kariera/",
            description: "<p>Od roku 1998 poskytujeme komplexní IT služby od návrhu business a IT architektury až po dodávky celých řešení. Pracujeme pro více než 50 významných společností z oblastí financí, telekomunikací a státní správy. V České republice jsou to mj. Česká spořitelna, Komerční banka, ČSOB, Vodafone nebo O2. V našem týmu najdete více než 350 nadšených a zkušených profesionálů. Patříme ke špičce v oblasti vývoje SW na zakázku, data managementu, datových skladů, business intelligence a big data science.</p>" +
            "<div class='expandable'><p>Naši konzultanti se zabývají analýzou, návrhem a vývojem moderních IT systémů. Většinou působí na projektech přímo u zákazníků. Právě možnost pracovat na různých projektech je na práci v Profinitu unikátní. U nás je možné získat zkušenosti rychleji a do hloubky. Nejsme korporace, kde hraje roli politika nebo tisíc pravidel a nařízení, chováme se k sobě přátelsky a pomáháme si. Charakter a dobrá organizace práce nám umožňují nabízet studentům pružné pracovní úvazky.</p>" +
            "<p>S FIT ČVUT dlouhodobě spolupracujeme v oblastech pokročilého zpracování dat, data analytics, syntaktické a sémantické analýze kódu či konceptuálních modelů. Naši odborníci vyučují a cvičí specializované předměty přímo na fakultě. Mimo společných výzkumných projektů nabízíme také zajímavá témata v podobě semestrálních projektů, diplomových a bakalářských prací.  Společně s dalšími českými a slovenskými technickými vysokými školami a pod záštitou mezinárodní odborné organizace ACM organizujeme soutěž IT SPY, ve které odborná porota vybírá nejlepší diplomovou práci z oblasti informatiky a informačních technologií.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: [".NET", "Java", "Javascript", "C#", "Groovy", "ObjectiveC", "Matlab", "R", "Perl"]
                },
                {
                    department: "Databáze",
                    skills: ["LDAP", "Relační DB", "Dokumentové DB", "Grafové DB", "Návrh DB", "Optimalizace DB", "Big Data"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Diskrétní", "Statistika"]},
                {department: "Bezpečnost", skills: ["Softwarová", "Síťová", "Systémová", "Managerská", "ISO 27001"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "Windows", "iOS", "Android", "Windows Phone"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina", "Němčina"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Procedurální", "Strukturované", "Algoritmizace"]
                }
            ],
            visit: true,
            importance: 10
        },

        {
            name: "Datamole",
            logo: "Datamole_logo.svg",
            type: "gold",
            page: "https://www.datamole.cz/",
            description: "<p>We are an aspiring start-up fully focused on data science. Utilizing artificial intelligence techniques and data driven methods we deliver innovative and highly added value solutions to our customers.</p>" +
            "<div class='expandable'><p>We are curiosity driven, each project is a new challenge. We are enthusiastic about new approaches, frameworks and tools related to data analysis, machine learning, data mining and big data. These fields are evolving rapidly and we want to be on the edge at all times and use state of the art technologies. Our team consist of experts for machine learning & data mining, (big) data processing & cluster computing, software engineering & architecture, analysis & visualisation. We believe it is our collective drive, individual expertise and shared knowledge that allow us to deliver creative and innovative solutions.</p>" +
            "<p>It is not a coincidence that we closely collaborate with the CTU FIT; many of us are proud absolvents. We are active in joint research resulting in establishing a joint laboratory at the FIT premises in 2015 (TH:A-1349). Additionally our team members also teach AI oriented courses at the FIT.</p>" +
            "<p>For students, we publish assignments on the portal SSP and supervise Bachelor's as well as Master's theses. We also offer internships and for absolvents we offer various positions, refer https://www.datamole.cz/#joinus. Would you like to meet us and see if Datamole has an opportunity for you? Do not hesitate to contact us on info@datamole.cz!</p></div>",
            upper_skills: [
                {
                    department: "Programování",
                    skills: ["C", "C++", ".NET", "Java", "Javascript", "C#", "Python", "Matlab", "R", "Scala"]
                },
                {department: "Datamining", skills: ["Pattern recognition"]},
                {department: "Matematika", skills: ["Optimalizace"]},
                {department: "Umělá inteligence", skills: ["Machine learning", "Robotika"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {department: "Technologie", skills: ["OOP", "Funkcionální"]}
            ],
            visit: false,
            importance: 9
        },

        {
            name: "Komerční banka",
            logo: "kb2017.png",
            type: "gold",
            page: "https://www.kb.cz/cs/o-bance/kariera/?wt_mc=interni.header.careers",
            description: "<p>Komerční banka, a.s. patří mezi přední bankovní instituce v ČR a v regionu střední a východní Evropy. Je univerzální bankou se širokou nabídkou služeb v oblasti retailového, podnikového a investičního bankovnictví. Zabýváme se velkými transformačními programy či komplexním vývojem bankovních systémů a internetového (a mobilního) bankovnictví, inovativními přístupy a nápady pro zkvalitnění zákaznické zkušenosti jako zjednodušení práce s platbami, využívání chytrých zařízení (smartwatch), Big Data nebo hledání nových scénářů pro bankovní a finanční služby (Google Wallet, Apple Pay).</p>" +
            "<div class='expandable'>" +
            "<p>Talentovaní studenti mají možnost zúčastnit se integračního a rozvojového programu Connecting a Connecting +. Poznají zde sami sebe a zároveň fungování banky z odlišných pohledů (finance, marketing, HR, Risk a Distribuce). V průběhu kariérního postupu nabízíme mnoho školení jak v oblasti technických dovedností, tak soft skills. Díky stabilnímu prostředí velké organizace a široké škále využívaných a provozovaných technologií, metodik a produktů se v KB mohou uplatit studenti nejrůznějších zaměření. Dokážeme nabídnout široké spektrum témat od serverové virtualizace či IT architektury až po témata zabývající se digitálním marketingem nebo sociálními sítěmi. V rámci naší IT Inovační laboratoře již teď působí řada studentů ČVUT, kteří obhájili nebo zpracovávají diplomové práce zaměřené na praktickou aplikovatelnost jejich výsledku. Pokud máte zájem se o našem týmu a nabízených příležitostech dozvědět více, neváhejte nás kontaktovat u našeho kiosku na Co@FITu!</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", "Ruby", ".NET", "Java", "Javascript", "PHP", "C#", "Python", "R"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Dokumentové DB", "Grafové DB", "Objektové DB", "Návrh DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky", "Kvalita kódu", "bezpečnost", "agilní vývoj", "SCRUM", "RUP", "optimalizace", "front end", "API", "middleware"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Statistika"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]},
                {department: "Umělá inteligence", skills: ["Machine learning"]},
                {department: "Operační systémy", skills: ["Unix", "Windows", "iOS", "Android", "Windows Phone"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Počítání", skills: ["Škálovatelné"]},
                {department: "Cizí jazyky", skills: ["Angličtina", "Francouzština"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Procedurální", "Funkcionální", "Strukturované", "Algoritmizace"]
                }
            ],
            visit: true,
            importance: 8
        },

        {
            name: "Accenture",
            logo: "accenture.png",
            type: "gold",
            page: "https://www.accenture.com/cz-cs/careers",
            description: "<p>Accenture je vedoucí, globální společnost nabízející odborné služby v oblasti strategie, poradenství, digitálních technologií, technologických služeb a podpory podnikových procesů prostřednictvím přibližně 373 000 pracovníků ve více než 120 zemích světa. Největším a nejvýznamnějším firmám ze všech odvětví pomáháme nastavit úspěšné strategie, navrhnout a implementovat plány, využít sílu digitálního světa – za pomoci tradičních i nových technologií – a dodat řešení. Našim klientům se dokážeme postarat o provoz jejich podnikových procesů, infrastruktury i cloudových služeb. Accenture je jediná firma se schopností poskytovat takto široké spektrum služeb a řešení upravených pro jednotlivá odvětví. V ČR působíme přes 25 let a máme více jak 1800 zaměstnanců.</p>" +
            "<div class='expandable'><p>Čerstvým absolventům nabízíme zajímavou práci v mezinárodních týmech na různorodých projektech v ČR i zahraničí. Jsme číslo 1 v rámci aktuálního žebříčku časopisu Fortune “World’s Most Admired Companies” v kategorii IT Služby. Naše pozice v konzultantské divizi jsou vhodné především pro vysokoškoláky se silným analytickým a logickým myšlením. Nabízíme zajímavou práci v oblasti konzultačních služeb, moderních IT nebo podpory podnikových procesů pro prestižní firmy, praktické zkušenosti, skvělé kolegy, špičkové vzdělávací programy, atraktivní ohodnocení a štědrý balíček benefitů. Work hard, play hard – umíme se bavit a žijeme i sportem – od celosvětové Accenture Ski Challenge až po We Run Prague. V neposlední řadě se zapojujeme do různých dobročinných a charitativních aktivit, jako je náš mezinárodně oceňovaný český projekt Accenture Academy pro děti z domovů.</p>" +
            "</div> ",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", ".NET", "Java", "Javascript", "PHP", "C#", "Groovy", "Python", "Perl"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Návrh DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kodu", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "Windows"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: true,
            importance: 7
        },

        {
            name: "Ackee",
            logo: "ackee2017.png",
            type: "bronze",
            page: "https://www.ackee.cz/o-nas#contact",
            description: "<p>Vznikli jsme jako parta studentů ČVUT. Každý z nás vynikal v jiné oblasti a spojoval nás zápal pro technologie. Dneska sídlíme nedaleko naší alma mater jako dospělá firma s řadou zkušeností, skvělými lidmi a se zajímavými klienty, kterým pomáháme využívat nové technologie pro jejich byznys. Kdo jsme? Jsme tři zakladatelé a společně jsme stvořili Ackee. To nejdůležitější je ale náš tým grafiků, projekťáků, testerů a hlavně vývojářek a vývojářů pro mobilní zařízení, weby a backendy. Proto jim říkáme miláčci. V Ackee máme pořád dveře otevřené. Bereme stážisty, juniory i seniory. Jestli není tvá pozice zrovna vypsaná, pošli nám i tak CV, třeba hledáme právě tebe. Momentálně sháníme kandidáty na pozice Android Developer, iOS Developer, Frontend Web Developer.</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "NN",
            logo: "nn.svg",
            type: "bronze",
            page: "https://kariera.nn.cz",
            description: "<p>NN (odvozeno od Nationale Nederlanden) není v ČR novým pojmem. Ve skutečnosti zde působíme od roku 1992 a dlouho jste nás mohli znát jako ING pojišťovnu. Jsme společnost s bohatou historií, jejímž středobodem nejsou pojistné smlouvy, ale lidé. Součástí NN je také oddělení regionálního IT s názvem IT Hub Prague se sídlem v centru Prahy. Naší úlohou je poskytování a dodávání IT služeb pro 18 zemí. Našim zákazníkům dodáváme služby především v oblasti bezpečnosti, podpory a údržby regionálních aplikací a systémů, hosting service a jiných podpůrných služeb. Naše osazenstvo je multikulturní a prostředí inspirující. </p>"
            + "<div class='expandable'><p>Pracujeme s nejnovějšími technologiemi na zajímavých projektech pro celý svět. Mezi naše hodnoty patří CLEAR – CARE – COMIT. CLEAR – jsme féroví, říkáme věci na rovinu a na nic si nehrajeme. CARE – je pro nás důležité udržet rovnováhu mezi rodinou a prací, a proto si svůj čas řídíme sami. COMMIT – víme co a proč děláme a za naší prací a rozhodnutím si stojíme. Nabízíme práci v mezinárodním prostředí, aktivní využití anglického jazyka, možnost cestovat a poznávat jiné kultury. Orientujeme se na práci s nejnovějšími technologiemi. Máme mladý dynamický tým a jsme otevřeni spolupráci se studenty a absolventy SŠ a VŠ. Nabízíme nadstandardní zaměstnanecké benefity. Sídlíme přímo v centru Prahy (Anděl).</p></div>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Valeo",
            logo: "valeo.svg",
            type: "bronze",
            page: "http://www.valeo-czechrepublic.com/",
            description: "<p>Není nás vidět a stejně jsme přítomni. Vylepšujeme auta tak, aby se lépe řídilo. Naše umění tkví v bezpečné a příjemné jízdě. Pomáháme při parkování v nákupních centrech v podobě sebeparkovacích aut, při nenadálých okolnostech v podobě automatického brzdění, při předjíždění v podobě hlídaní mrtvého úhlu. S prototypem samořídícího auta, „Cruise4U“, jsme již zdolali více než čtyřicet tisíc testovacích kilometrů po Evropě a Spojených Státech a stále jedeme dál. Jsme průkopníkem i v hybridizaci aut: vynalezli jsme stop-start systém a vloni jsme dodali automobilkám první sériové elektrické turbodmychadlo. A to se ani při té vší práci nezapotíme, my totiž umíme i autoklimatizace.</p>" +
            "<div class='expandable'><p>V ČR vyrábíme na 3 místech (Humpolci, Žebráku a Rakovníku), vyvíjíme a zkoumáme v Praze a testujeme na polygonu v Milovicích. Celosvětově investujeme každý rok 10 % tržeb do výzkumu a vývoje, mimo jiné i do výstavby nového špičkového vývojového areálu v Praze-Hostivaři za 600 milionů korun.</p>" +
            "<p>Máte vzdělání v technickém oboru: strojní, elektro nebo IT? Baví vás neustále se vzdělávat? Chcete spolupracovat s kolegy na jiných pobočkách firmy v zahraničí a využívat angličtinu na denní bázi? Máte zodpovědný a proaktivní přístup k úkolům? Do našich týmů ve vývoji či výrobě hledáme právě takové kolegyně a kolegy. Lidi s vizí a zapálením pro svou práci a pro moderní automobilové technologie.</p>" +
            "Patříme mezi nejlépe hodnocené zaměstnavatele v ČR. Získali jsme opakovaně titul „Zaměstnavatel Roku“ pro Středočeský kraj a v roce 2016 i cenu „Top Employer Czech Republic“. Svým zaměstnancům také nabízíme nespočet benefitů.</div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Programování", skills: ["C", "C++", "C#", "Python"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Testování", "UML", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky", "Automotive SPICE"]
                },
                {department: "Matematika", skills: ["Algebra", "Diskrétní", "Statistika"]},
                {department: "Bezpečnost", skills: ["Systémová"]},
                {department: "Operační systémy", skills: ["Systémy reálného času", "OSEK/VDX"]},
                {department: "Umělá inteligence", skills: ["Machine learning", "Robotika"]},
                {department: "Počítání", skills: ["Paralelní", "GPU"]},
                {department: "Počítačové inženýrství", skills: ["Vestavěné systémy", "Testování a spolehlivost"]},
                {department: "Technologie", skills: ["OOP", "Procedurální", "Algoritmizace"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: true
        },

        {
            name: "Deloitte Advisory",
            logo: "deloitte.png",
            type: "bronze",
            page: "http://www.jsmedeloitte.cz/",
            description: "<p>Jsme Deloitte, mezinárodní firma, která je pro většinu lidí spojená s auditem či daňovým poradenstvím. Děláme také podnikové poradenství v nejrůznějších oblastech. Zabýváme se IT a máme specialisty na aplikovanou analytiku či Big Data. Rozumíme datovým skladům a datové kvalitě. Naši experti se věnují informační bezpečnosti, IT auditu, řízení velkých IT projektů nebo využití nových digitálních technologií pro transformaci firem. Ve výsledku se na nás obrací klienti tam, kde potřebují udělat opravdu velký skok kupředu či mají složitý problém.</p>" +
            "<div class='expandable'><p>Řídíme implementační projekty, tvoříme datové sklady, kterým rozumí byznys uživatelé, děláme penetrační testování mobilních aplikací, implementujeme cloudová CRM nebo moderní eCommerce řešení. Každé oddělení má svůj propracovaný systém vzdělávání specificky zaměřený na danou problematiku, nabízíme množství profesních zkoušek a interních školení. Máme jasně stanovený systém hodnocení výkonu a od něj odvíjející se kariérní růst. Pracujeme na zajímavých projektech pro zajímavé klienty. V poradenství je nás více než 200, tudíž se stále máme od koho učit.</p>" +
            "</div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: [".NET", "Java", "Javascript", "PHP", "C#", "ObjectiveC", "Python", "Matlab", "R"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Dokumentové DB", "Grafové DB", "Objektové DB", "Návrh DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Algebra", "Optimalizace", "Statistika", "teorie grafu"]},
                {department: "Bezpečnost", skills: ["Softwarová", "Síťová", "Systémová", "Managerská"]},
                {department: "Umělá inteligence", skills: ["Machine learning"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Počítání", skills: ["Paralelní", "Distribuované"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Procedurální", "Funkcionální", "Strukturované", "Algoritmizace"]
                }
            ],
            visit: true
        },

        {
            name: "EmbedIT",
            logo: "embedit.png",
            type: "gold",
            sponsor: true,
            page: "https://www.embedit.cz/Career",
            description: "<p>EmbedIT is a 100% Czech IT Centre that provides IT services including design and support to Home Credit Group and Air Bank (PPF Group). Our internally designed and developed applications serve over 45 million customers in 11 countries, including Russia, China or United States. Production Services team manages 20 data centers worldwide with a volume of more than 200 million transactions per day produced in network of over 187 thousand points of sale, loan offices, branches and post offices. Our team of more than 800+ professionals is located in 3 Czech cities: Prague, Brno, and Ostrava.</p>",
            visit: true
        },

        {
            name: "Česká pojišťovna",
            logo: "ceskapojistovna.png",
            type: "silver",
            sponsor: true,
            page: "http://ceskapojistovna.jobs.cz/studenti-a-absolventi/",
            description: "<p>Jsme největší pojišťovnou na českém pojistném trhu s více než 185letou bohatou tradicí. Poskytujeme jak individuální životní a neživotní pojištění, tak i pojištění pro malé, střední a velké klienty v oblasti průmyslových, podnikatelských rizik a zemědělství. Přibližně 3900 zaměstnanců a 5600 obchodních zástupců se na více než 4500 obchodních místech stará o maximální spokojenost klientů. Česká pojišťovna spravuje téměř osm milionů pojistných smluv a její tržní podíl na domácím trhu dosahuje 23,9 procent.</p>" +
            "<div class='expandable'><p>Absolventi představují pro naši společnost silný náboj, provzdušnění, oživení svým nadšením, spontaneitou a neotřelými úhly pohledu na věc. V České pojišťovně pracuje řada zaměstnanců, kteří se v mnoha případech vypracovali z pozic čerstvých absolventů na pozice specialistů a lídrů. Jsme si jako moderní společnost vědomi potenciálu, který v zaměstnávání absolventů dřímá. Dáváme absolventům rádi šanci, kdykoli je to jen trochu možné. Když se jí rádi chopí a využijí ji, pak vzniká synergie, která je nesmírně obohacující.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Týmovost"]
                },
                {department: "Programování", skills: ["C", "C++", ".NET", "Java", "Javascript", "C#", "Matlab, R"]},
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Dokumentové DB", "Objektové DB", "Návrh DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "UML", "Verzování zdrojového kódu", "BPMN", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {
                    department: "Matematika",
                    skills: ["Optimalizace", "Spojitá", "Diskrétní", "Statistika", "pojistná matematika"]
                },
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "FreeBSD", "Systémy reálného času", "Windows", "iOS", "Android", "Windows Phone"]
                },
                {
                    department: "Počítačové inženýrství",
                    skills: ["Architektura počítačů", "Logický návrh", "Vestavěné systémy", "Programovatelný hardware", "Testování a spolehlivost"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina", "Italština"]},
            ],
            visit: true
        },

        {
            name: "Gemalto",
            logo: "gemalto.svg",
            type: "bronze",
            sponsor: true,
            page: "http://www.gemalto.com/companyinfo/careers",
            description: "<p>Gemalto je světový lídr v oblasti digitálního zabezpečení a největší světový výrobce komplexních digitálních a čipových karet. Má přes 14 000 zaměstnanců v 45 zemích. Mezi naše produkty patří kreditní/debetní a bezkontaktní platební karty, osobní mobilní služby, ochrana identity, zabezpečení plateb, ověřování on-line služeb, cloud computing pro přístup, e-zdravotnictví a služby e-governmentu (cestovní pasy a občanské průkazy), moduly pro M2M.</p>" +
            "<div class='expandable'><p>Poskytujeme zabezpečovací software, bezpečnostní osobní zařízení a řízení služeb pro mnohé přední světové mobilní operátory, banky, podniky a vládní agentury. Zabýváme se projekty HW řešení (čipové karty, tokeny, security modely), SW řešení OS, embedovaných systémů a jejich aplikace a komplexními zákaznickými řešeními (customizace a personalizace embed.produktů, platformy pro kontaktní a bezkontaktní služby). Nabízíme možnost geografické mobility (Francie, Německo, Singapore, Filipíny, USA), mezitýmové mobility a spolupráce, prostor pro dlouhodobý kariérní postup či každoroční školení. Naši zaměstnanci využívají unikátní technologie (embedované bezpečnostní elementy, bezdrátové technologie, kryptografie a biometrie) a řeší široké spektrum projektů od embedovaného vývoje po rozsáhlé distribuované systémy s vysokou dostupností (zálohované clustery). Máme špičkové zákazníky a partnery jako je T-mobile, Vodafone, O2, Barclays, Microsoft, Apple a Samsung.</p>" +
            "</div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost", "prezentační dovednosti"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", "Ruby", ".NET", "Java", "Javascript", "C#", "Groovy", "ObjectiveC", "Python", "J2EE", "Spring", "Back-end technologie"]
                },
                {
                    department: "Databáze",
                    skills: ["LDAP", "Relační DB", "Návrh DB", "Optimalizace DB", "DB administrace"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "FreeBSD", "Windows", "iOS", "Android", "Windows Phone"]
                },
                {department: "Uživatelské rozhraní", skills: ["Testování UI"]},
                {department: "Cizí jazyky", skills: ["Angličtina", "Francouzština"]},
                {department: "Technologie", skills: ["OOP", "Procedurální", "Strukturované", "Algoritmizace"]}
            ],
            visit: true
        },

        {
            name: "Nangu.TV",
            logo: "nangu.svg",
            type: "bronze",
            sponsor: true,
            page: "http://nangu.tv/jobs/",
            description: "<p>Nangu.TV je česká softwarová firma zabývající se vývojem kompletního řešení pro IPTV a OTT multimediální platformy, která se v tomto velmi dynamickém odvětví pohybuje už více než 10 let a vybudovala si pozici leadra trhu. Úspěšně expandujeme i do zahraničí, pravidelně se účastníme nejvýznamnějších veletrhů v Evropě a napříč našimi zákazníky evidujeme více než půl milionu zařízení připojených k nangu.TV platformě. Na našem IPTV/OTT řešení jsou postavené úspěšné služby jako O2TV. Platformu dále využívají mj. český T-Mobile, slovenský Orange a můžeme se pochlubit i instalacemi v Polsku, Srbsku, Švýcarsku nebo Lucembursku.</p>" +
            "<div class='expandable'><p>Nangu.TV umožňuje operátorům a poskytovatelům internetových služeb obohatit jejich stávající nabídku o interaktivní televizní zážitek. K základním nabízených funkcionalitám patří sledování pořadů i několik týdnů zpětně (timeshift), možnost si program na chvíli zastavit, videotéka, konzumace video obsahu na různých zařízeních jako jsou TV, mobilní telefony, tablety nebo PC (tzv. Multiscreen). Komponenty si vyvíjíme sami „in-house“ a jsme tak schopni dodat end-2-end řešení, čímž se odlišujeme od většiny našich konkurentů. Nabízíme rozvojové aktivity jako účast na odborných školeních/kurzech, účast na konferencích, jazykové kurzy, soft skills kurzy, možný kariérní posun v rámci týmu i firmy. Jsme otevřeni nápadům zaměstnanců jak z hlediska osobního, tak pracovního rozvoje.</p>" +
            "<p>Důvody, proč chtít být součástí našeho týmu, nejlépe vystihuje nadšení našich zaměstnanců:</p>" +
            "<p>" + '"Kód, který dnes napíšu, bude zanedlouho denně používat statisíce lidí. Mám možnost zásadním způsobem ovlivňovat finální produkt." -- Tomáš Tichý, Front-end team leader' + "</p>" +
            "<p>" + '"Baví mě diskutovat nad code review - v takto rozsáhlém systému se kód častěji čte než píše." -- Matěj Laitl, Back-end team leader' + "</p>" +
            "<p>" + '"Líbí se mi, že to není jen o práci, ale také o tom kolektivu. Pořád je nějaká akce, grilovačka, fotbálek, pivko, stále se něco děje." -- Jindřich Hulín-Mihalec, Frond-End vývojář' + "</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost", "Agile"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", "Java", "Javascript", "ObjectiveC", "Python", "Erlang", "Perl"]
                },
                {department: "Databáze", skills: ["Relační DB", "Grafové DB", "NoSQL DB"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Matematika", skills: ["Optimalizace", "Statistika"]},
                {department: "Bezpečnost", skills: ["Softwarová", "Síťová"]},
                {department: "Operační systémy", skills: ["Unix", "iOS", "Android", "Linux"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI", "UIX"]
                },
                {department: "Počítačové inženýrství", skills: ["Testování a spolehlivost"]},
                {department: "Počítání", skills: ["Škálovatelné"]},
                {department: "Cizí jazyky", skills: ["Angličtina", "Němčina", "Ruština"]},
                {department: "Technologie", skills: ["OOP", "Procedurální", "Funkcionální", "Algoritmizace"]}
            ],
            visit: true
        },

        {
            name: "Ataccama Software",
            logo: "atacama2017.png",
            type: "bronze",
            sponsor: true,
            page: "https://jobs.ataccama.com",
            description: "<p>Ataccama je česko-kanadská softwarová společnost, která pomáhá firmám maximálně využít potenciálu Big Data a je významným hráčem na mezinárodním trhu v oblasti datové kvality. Na technologická řešení společnosti Ataccama spoléhá více než 250 zákazníků, od velkých nadnárodních korporací po středně velké organizace napříč odvětvími, a to především v Kanadě, Spojených státech, střední a západní Evropě. Analytická společnost Gartner zařadila společnost Ataccama na prestižní Gartner Magic Quadrant v oblasti nástrojů datové kvality a master data managamentu.</p>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Programování", skills: ["Java", "Javascript"]},
                {department: "Databáze", skills: ["LDAP", "Relační DB", "Dokumentové DB", "Objektové DB"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Integrace aplikací", "Testování", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Diskrétní", "Statistika"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová"]},
                {department: "Umělá inteligence", skills: ["Machine learning"]},
                {department: "Operační systémy", skills: ["Unix", "Windows"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina", "Němčina", "Ruština", "Španělština"]},
                {department: "Technologie", skills: ["OOP", "Funkcionální", "Algoritmizace"]}
            ],
            visit: true
        },

        {
            name: "SWATCH group",
            logo: "asicentrum.png",
            type: "bronze",
            sponsor: true,
            page: "http://www.swatchgroup.com/en/human_resources/working_at_swatch_group",
            description: "<p>ASICentrum, established 1992 in Prague, Czech Republic, is a design center of EM Microelectronic. The team of designers is highly experienced in the submicron design technologies of ultra-low power, low voltage silicon chips, in the development of embedded software and various applications related to mobile devices and wireless communication. ASICentrum has long tradition in cooperation with many Czech technical universities. We offer permanent (full-time employment) or internship (part-time job) for students and thesis entering.</p>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", "Java", "PHP", "C#", "ObjectiveC", "Python", "Matlab", "Assembler"]
                },
                {department: "Databáze", skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Bugtracking"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Bugtracking"]
                },
                {
                    department: "Operační systémy",
                    skills: ["Unix", "Systémy reálného času", "Windows", "iOS", "Android"]
                },
                {department: "Uživatelské rozhraní", skills: ["Testování UI", "Kódování UI", "Implementace web UI"]},
                {
                    department: "Počítačové inženýrství",
                    skills: ["Architektura počítačů", "Logický návrh", "Testování a spolehlivost"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina", "Francouzština"]}
            ],
            visit: true
        },

        {
            name: "Randstad s.r.o.",
            logo: "randstad.png",
            type: "bronze",
            sponsor: true,
            page: "https://www.randstad.cz/pridejte-se-k-nam/",
            description: "<p>Svět práce se vyvíjí a my s ním. Utváříme ho, aby byl lepším místem jak pro zaměstnance, tak pro firmy, které jim dávají práci. Poskytneme vám podporu během celého procesu a pomůžeme vám najít vysněnou práci. Dosadit toho správného člověka na tu správnou pozici je základem veškeré naší činnosti. Naším cílem a posláním je propojovat firmy s talenty.</p>" +
            "<div class='expandable'><p>Spolupracujeme s celou řadou atraktivních zaměstnavatelů, kteří stále hledají vhodné specialisty na rozličné technické pozice. V tuto chvíli dodáváme nejvíce zaměstnanců do společností působících v oblastech Automotive, Engineering, IT, Finance, Logistika a FMCG. Stále studujete nebo jste úspěšně studium ukončili a hledáte své první uplatnění? Ať už jste při škole získali nějaké zkušenosti nebo jste na trhu práce úplným nováčkem, můžeme vám pomoci najít cestu k vaší vysněné práci! </p>" +
            "<p>V globálním měřítku tvoří 80 % managementu lidé, kteří u nás kariérně vyrostli. Klademe velký důraz na rozvoj našich zaměstnanců, naše konzultanty vzděláváme, aby mohli být rovnocennými partnery našich klientů a stát se skutečnými experty ve svém oboru. V Randstadu si zakládáme na otevřené a přátelské kultuře a pro naše zaměstnance vytváříme kreativní a inspirující pracovní prostředí, kde je prostor pro diskuzi a svobodné vyjadřování. Základem všeho je týmová spolupráce. Neuznáváme striktní hierarchie ani skleněné stropy.</p>" +
            "<p>Na našem stánku můžete čekat partu pohodových konzultantů, kteří jsou připraveni s Vámi konzultovat životopis nebo sdílet hinty, jak zaujmout na pohovoru a získat job snů. Dozvíte se více o aktuálních pracovních příležitostí na part-time i full-time pro české i mezinárodní společnosti. Nabídneme vám nové vydání našeho magazínu pro ICT odborníky s oblíbenými přehledy o platech a zajímavými rozhovory s kandidáty i klienty. Připravena bude tombola, ve které můžete získat designové flash-disky, powerbanky, usb rozdvojky.</p></div>",
            upper_skills: [],
            visit: true
        },

        {
            name: "IBM",
            logo: "ibm.png",
            type: "foreign",
            page: "http://www-05.ibm.com/employment/cz-cs/?lnk=mca_czcs",
            description: "<p>IBM je přední světová společnost v oboru informačních technologií. Mezi hlavní činnosti společnosti patří v současnosti výroba a prodej počítačového softwaru, hardwaru a desítky služeb.</p>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Tipsport",
            logo: "tipsport.svg",
            type: "bronze",
            sponsor: true,
            page: "https://tipsport.jobs.cz/volna-mista/",
            description: "<p>Tipsport mění svět kurzového sázení, v prostředí jedinečné sázkařské komunity umožňuje svým klientům sdílet informace a nacházet inspiraci. Společnost, která dominuje českému trhu, tak zároveň výrazně překračuje jeho hranice. V roce 1991 Tipsport vznikl jako lokální společnost s jedinou pobočkou ve středočeském Berouně. Dnes je mezinárodním holdingem s 3000 zaměstnanců, kteří v Česku pracují pro značky Tipsport a Chance a na Slovensku pro značku Tipsport.</p>" +
            "<div class='expandable'><p>U nás se můžeš věnovat vývoji komunitního webu, mobilních aplikací či interních systémů. Naše systémy jsou navrhovány, vytvářeny a optimalizovány na vysokou zátěž a provoz s maximální dostupností, kdy obsluhují tisíce dotazů za vteřinu a poskytují služby 24/7/365. A to nejen pro sázkovou společnost Tipsport, ale i pro naše dceřiné firmy Chance a Tipsport Slovensko.</p>" +
            "<p>Díky způsobu vývoje u nás není problém najít prostor na studium, testování či implementaci nových technologií. Naši vývojáři nežijí ve stresu z termínů, ale mají prostor dělat to, co je baví. Vždy se najde čas na péči o kód – doplnění testů, komentářů, refaktoring, optimalizace a všechno pilujeme k dokonalosti. Navíc máme na vzdělávání připravený i pěkný budget a v rozletu Ti u nás nebudou bránit žádné mantinely.</p>" +
            "<p>V Tipsportu víme, jak je vývoj informačních technologií důležitý. Proto je IT hýčkanou divizí s nadstandardními výhodami. Volná pracovní doba, práce z domova je u nás běžnou záležitostí a do Plzně si pro kolegy jezdíme vlastní dopravou. A protože jen prací člověk být živ nemůže, vyřádíme se na různých teambuildingových akcích: motokáry, paintball, arkádové hry, návštěva restauračních zařízení… IT tým se každým rokem rozrůstá a platí u nás, že šikovných kolegů není nikdy dostatek! Rádi uvítáme ostřílené profíky i čerstvé absolventy bez praxe.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["Java"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Objektové DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "Verzování zdrojového kódu", "Continuous Integration", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Optimalizace", "Statistika"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "Windows", "iOS", "Android"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Počítání", skills: ["Paralelní", "Škálovatelné"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Procedurální", "Funkcionální", "Strukturované", "Algoritmizace"]
                },
                {
                    department: "Další technologie",
                    skills: ["Google closure", "ReactJS", "Less", "Gulp", "DWR", "MongoDB", "Guava", "NodeJS", "SocketIO", "REST API", "Hibernate", "JBoss server", "Oracle", "ActiveMQ", "Gradle", "Jenkins"]
                }
            ],
            visit: false
        },

        {
            name: "ORIFLAME SOFTWARE s.r.o.",
            logo: "",
            type: "foreign",
            page: "",
            description: "<p></p>"
            + "<div class='expandable'><p></p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Cleverbee",
            logo: null,
            type: "foreign",
            page: "http://www.cleverbee.com/",
            description: "<p>Cleverbee solutions je česko-švýcarská sw společnost, která se orientuje na vývoj J2EE aplikací. Zaměřuje se na vývoj sw na zakázku a systémovou integraci. Nabízí sw řešení v oblasti portálových řešení - Liferay portál, řešení pro správu dokumentů - Alfresco a BI systém Pentaho. Nabízíme pozici Java developer zaměřenou jak na vývoj frontendových aplikací (JavaScript, Jquery, HTML, CSS, minoritně Java), tak i zaměření na vývoj backendových aplikací (Spring, Hibernate, EJB). </p>"
            + "<div class='expandable'><p>Vývojář spolupracuje na návrhu, implementaci, testu a údržbě v rámci SW projektů. Projektová orientace skýtá možnost různých rolí v rámci vývojového cyklu pro rozmanité technologické platformy. Nabízíme práci ve středně velkém týmu, možnost implementace v širokém spektru programovacích jazyků pod různými operačními systémy a databázemi. Myslíme si, že máme přátelské a otevřené prostředí, spoustu chytrých lidí, kteří rádi pomohou druhému. Nabízíme možnosti dalšího odborného vzdělávání se a posunu na seniornější pozici. Máte zájem pracovat jako JAVA Developer? Chcete pracovat s nejnovějšími technologiemi? Už vás nebaví ty jasně vymezené mantinely Vašich pravomocí, které jsou prostě dané a přes které nejede vlak? Máte nápady jak dělat věci jinak a chcete mít možnost a prostor to zkusit a tím i celou firmu třeba posunout někam jinam? Připojte se k nám. :-)</p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Mall.cz",
            logo: "mall.png",
            type: "foreign",
            page: "https://www.mall.cz/",
            description: "<p>Budujeme internetový svět, kde lidé vždy naleznou, co potřebují, a zároveň se mohou spolehnout na náš vynikající servis. Chceme být hlavním hráčem v internetovém nakupování ve střední Evropě. Do naší Mall Group party spadají e-shopy jako Mall.cz, CZC.cz, Koloniál.cz a další. Mezi současné projekty patří responsivní web, implementace lepších služeb pro zákazníky (Platební metody, Doručovací metody), upgrade vnitřní architektury (online synchronizace produktů ze SAPu do WEBu pomocí událostí, přes RabbitMQ a WebService nad cílovými objekty), interní cloud technologie, oobecně zlepšování procesů v agilním vývoji, zavádění DevOps kultury.<p>"
            + "<div class='expandable'><p>Dbáme na vzdělávání našich zaměstnanců formou interních a externích workshopů a přednášek, konferencí či různých tutoriálů. Kolegové i externí odborníci předávají know-how o nejnovějších technologiích, které nás baví. Interní databáze in-house přednášek námi používaných technologií je samozřejmostí. Podporujeme i interní nábor a přesuny mezi týmy, ať už v rámci vývoje či celého IT, potažmo celé společnosti. Máme přátelský team, kde je každý ochoten pomoci, teamy si pořádají snídaně, chodíme na pivo a jiné teambuildingové akce (paintball, escape games, hackdays, RocDev). Vývoj je založen na moderních technologiích. Podporujeme neustálé vzdělávání formou interních školení, nebo domácích a zahraničních konferencí. Orientace na kvalitu a čistotu kódu. Kontinuálně vyvíjíme jeden produkt a snažíme se, aby byl co nelepší.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Programování", skills: ["Javascript", "PHP"]},
                {department: "Databáze", skills: ["Relační DB", "NoSQL - ElasticSearch"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Verzování zdrojového kódu", "Continuous Integration", "Metodiky"]
                },
                {department: "Bezpečnost", skills: ["Softwarová"]},
                {department: "Operační systémy", skills: ["Unix", "Windows", "iOS", "Android"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {department: "Technologie", skills: ["OOP"]}
            ],
            visit: false
        },

        {
            name: "T-Mobile",
            logo: "tmobile.png",
            type: "foreign",
            page: "https://www.t-mobile.cz/",
            description: "<p>Věříme, že technologie mají lidem zjednodušovat a zpříjemňovat život. A dobře víme, že být nejlepší a neustále posouvat hranice, můžeme jen se správnými lidmi.</p>" +
            "<div class='expandable'><p></p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "BellaDati",
            logo: "belladati.png",
            type: "foreign",
            page: "http://www.belladati.com/",
            description: "<p>From M2M, B2C and monitoring to machine learning, predictive and prescriptive analytics in days. We help you to grow your business.</p>" +
            "<div class='expandable'><p></p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Quanti, s.r.o.",
            logo: "quanti.png",
            type: "foreign",
            page: "http://www.quanti.cz/",
            description: "<p>Všechno to začalo nevinnou větou. „Postavme si robota.“ Už jako kluci jsme měli společný sen. Dělat věci, které jsou cool a stanou se součástí historie. Cool věci umíme opravdu dobře, ale samotný nápad není vše. Je potřeba se vždycky zamyslet nad reálným přínosem, aby nic nezůstalo ležet na dně nadějného šuplíku. Nejraději máme projekty z oblasti autonomní robotiky, telekomunikací, moderních dopravních prostředků, armády či bezpečnosti. Začínali jsme na malých webech, nyní realizujeme největší portály v ČR.</p>" +
            "<div class='expandable'><p>Dodáváme hotová řešení od návrhu, analýzy, vývoje až po implementaci a správy softwaru. Nejčastěji spolu s portály dodáváme databáze a mobilní aplikace pro všechny platformy. Nabízíme informační systémy postavené na různých technologiích a frameworcích, v mnoha programovacích jazycích (Java, C, PHP, .NET a další). Ovládáme všechny mainstreamové technologie iOS, Android, Windows Phone, Blackberry. Také se zabýváme vývojem a kustomizací speciální elektroniky. Švábi kam se podíváš, všichni zasypaní součástkami až po uši a věčně začouzená místnost od kalafuny. Jakmile se však rozrazí dveře, dostáváme do rukou čerstvě upečenou elektroniku, která například dodá lunárnímu vozítku šestý smysl na hledání mikroorganismů nebo ovládá skutečnou helikoptéru. Tak vypadá naše mikrolaboratoř na vývoj speciální, prototypové elektroniky. Nejčastěji se u nás dělají řídící obvody motorů, senzorické desky, unikátní senzory, a mnohé další.</p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "KPMG",
            logo: "kmpg.png",
            type: "foreign",
            page: "http://www.kpmg.com/",
            description: "<p>Řadíme se mezi nejvýznamnější poradenské firmy poskytující služby v oblasti auditu, daní a poradenství. Stále se rozrůstáme a hledáme talentované a ambiciózní lidi, kteří na sobě chtějí pracovat a být součástí našeho mezinárodního týmu. Hned na startu kariéry nabízíme motivující pracovní prostředí, finanční ohodnocení a zázemí silné společnosti. Budete pracovat na zakázkách pro české i zahraniční společnosti ze soukromého i veřejného sektoru. KPMG Česká republika má celkem 840 zaměstnanců a kanceláře v Praze, Brně, Ostravě a Českých Budějovicích.</p>" +
            "<div class='expandable'><p>Zabýváme se projekty Information Security (revize a rozvoj systému řízení informační bezpečnosti, studie v oblasti bezpečnosti), IT Security (penetrační testy, konfigurační review), Project management (řízení externích projektů, quality assurance), IT Governance (poradenství v oblasti řízení IT ve firmě), Enterprise Architecture, Business Intelligence & Data Analytics, Intellectual Property. Nabízíme uplatnění pro studenty a absolventy VŠ na pracovních pozicích Assistant oddělení Auditu, Daňového poradenství, Management Consulting, Risk Consulting, Deal Advisory nebo Assistant v Advokátní kanceláři KPMG Legal. Dále nabízíme odborné stáže KPMG Internship Programme pro studenty magisterského studia do všech oddělení. Stáže probíhají zpravidla od září do března. U nás naleznete zajímavou práci v prestižním a moderním oboru, příjemné prostředí mezinárodní společnosti a mladý kolektiv, možnost profesního růstu a dalšího vzdělávání, velmi dobré platové podmínky, sociální výhody a možnost práce na zkrácený úvazek.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: false
        },

        {
            name: "Suse",
            logo: "suse.svg",
            type: "foreign",
            page: "https://www.suse.com/",
            description: "<p>Established in 1992, SUSE, now part of Micro Focus, is the original provider of the enterprise Linux distribution and the most interoperable platform for mission-critical computing. With a portfolio centered around SUSE Linux Enterprise, we power thousands of organizations around the world across physical, virtual and cloud environments. Through our continued commitment to the highest quality Linux support and innovative products, SUSE grew more than threefold after it was acquired by Novell in 2004. Now operating as an independent business of Micro Focus International, SUSE continues its unwavering focus on the benefits of open source and the needs of its commercial partners and customers.</p>" +
            "<div class='expandable'><p>Why join SUSE? You work for the world's fastest-growing, enterprise Linux company. You're a member of a team engineering the most reliable, interoperable, enterprise Linux and cloud infrastructure solutions.You're part of an organization with world-class services and support.</p>" +
            "<p>Do you need more reason why to join? Open Source is in our Genes, we ARE Enterprise Linu,. results matter, we invest in being innovative and YOU matter!</p>" +
            "<p>This year, we are celebrating our 22nd anniversary. Not many technology companies can say that. We're proud of what we've done so far. And there's more to come.</p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Mikenopa",
            logo: "mikenopa.png",
            type: "foreign",
            page: "http://www.mikenopa.com/",
            description: "",
            upper_skills: [],
            visit: false
        },

        {
            name: "HP",
            logo: "hp.svg",
            type: "foreign",
            page: "http://www.hp.com/",
            description: "<p>V současnosti se nacházíme na dlouholeté cestě s cílem zlepšit situaci ve společnosti HP a vytvořili jsme plán, který pomůže obnovit růst naší společnosti. Víme, kam se potřebujeme dostat, a již dnes dosahujeme pokroků.</p>" +
            "<div class='expandable'><p>Nadále podporujeme inovaci produktů na našich klíčových trzích a soustředíme se na cloudové technologie, zabezpečení a velkoobjemová datová úložiště.</p>" +
            "<p>Vidíme před sebou velké příležitosti a jsme připraveni se jich chopit s pomocí nejen širokého portfolia našich produktů a služeb, ale především zkušeností. Máme zkušené odborníky, stanovený plán a solidní základy, které nám pomohou uspět v další fázi naší cesty.</p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Alza.cz",
            logo: "alza.png",
            type: "foreign",
            page: "https://www.alza.cz/",
            description: "<p>Pět eshopů. Šest mobilních aplikací. 45 prodejen u nás i na Slovensku. 27 AlzaBoxů pro výdej zboží po celé republice. Expanze do celé Evropy. Obrovské logistické centrum VGP v Horních Počernicích. Za 20 let jsme ušli obrovský kus cesty. Z malé prodejny v Dělnické až do unikátních kancelářích Hall Office. Pražským Holešovicím jsme zůstali věrni. Stejně jako našim hodnotám a neformální, přátelské atmosféře.</p>" +
            "<div class='expandable'><p>Mezi naše projekty patří AlzaBoxy, kterými tak nabízíme jedinečný servis zákazníkům. Logistické procesy v našem centrálním skladu jsou napojeny na vlastní softwarové řešení. Řešíme optimalizaci skladových pohybů, automatizaci, plánování rozvážek apod. Intenzivně se zaměřujeme na vývoj mobilních aplikací. Prošlapujeme cestičky pohodlného nákupu na platformách iOS, Android a Windows Phone. Věnujeme se vývoji vlastního firemního IS s více než 130 moduly a SW aplikace pro zákazníky. Také se zabýváme zdokonalováním vyvolávání zakázek při výdeji zboží, platebními automaty PayBox.</p>" +
            "<p>Nabízíme spolupráci na zajímavých projektech, možnost osobní seberealizace i profesního růstu. Využíváme nejmodernějších technologií. Pracujeme v týmech vývoje IS, vývoje webových a mobilních aplikací, IT administrátorů a internetového marketingu. Naleznete u nás zkušené kolegovy a profesionály v oboru. Možnost spolupráce na zkrácené úvazky, práci v týmech a po ukončení VŠ možnost nastoupit na hlavní pracovní poměr.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Programování", skills: [".NET", "Javascript", "C#", "html"]},
                {department: "Databáze", skills: ["Relační DB", "Návrh DB", "Optimalizace DB"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Web mining"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]},
                {department: "Operační systémy", skills: ["Unix", "Windows", "iOS", "Android", "Windows Phone"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {
                    department: "Počítačové inženýrství",
                    skills: ["Programovatelný hardware", "Testování a spolehlivost"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina", "Němčina"]},
                {department: "Technologie", skills: ["OOP"]}
            ],
            visit: false
        },

        {
            name: "Barclays",
            logo: "barclays.svg",
            type: "foreign",
            page: "http://www.barclays.co.uk/",
            description: "<p>Barclays is a British multinational banking & financial services company headquartered in London. It is a universal bank with operations in retail, wholesale and investment banking, as well as wealth management, mortgage lending and credit cards. It has operations in over 50 countries and territories and has around 48 million customers. Barclays is organised into four core business: Personal & Corporate (Personal Banking, Corporate Banking, Wealth & Investment Management), Barclaycard, Investment Banking and Africa.</p>",
            upper_skills: [],
            visit: false
        },

        {
            name: "Cesnet",
            logo: "cesnet.png",
            type: "foreign",
            page: "https://www.cesnet.cz/",
            description: "<p>CESNET je sdružení vysokých škol a Akademie věd  České republiky, které provozuje a rozvíjí národní e-infrastrukturupro vědu, výzkum a vzdělávání zahrnující počítačovou síť,výpočetní gridy, datová úložiště, prostředí pro spolupráci a nabízející širokou škálu služeb.</p>" +
            "<div class='expandable'><p>Důležitou složkou činnosti sdružení je výzkum a vývoj v oblasti pokročilých síťových technologií a aplikací, jehož výsledky uplatňujeme při rozvoji e-infrastruktury. Tyto aktivity probíhají zejména formou projektů.</p>" +
            "<p>V oblasti výzkumu se zabýváme především tématy rozvoje sítě národního výzkumu a vzdělávání, optickými sítěmi, nástroji pro monitoring a konfiguraci, sledováním infrastruktury a provozu sítě, technologiemi pro síťové aplikace, AAI a mobilitou, MetaCentrum, multimediálními přenosy a kolaborativní prostředí, CESNET CSIRT či podporou aplikací.</p></div>",
            upper_skills: [],
            visit: false
        },

        {
            name: "OldanyGroup",
            logo: "oldany.png",
            type: "foreign",
            page: "http://www.oldanygroup.cz/",
            description: "<p>OldanyGroup se zabývá již řadu let moderními a inovativními technologiemi v oblasti ICT. Poskytujeme cloudové služby, komplexní správu systémů a poradenství. Obstaráváme komplexní řešení od analýzy a návrhu, přes implementaci až po kontinuální správu celého systému. Nejsme velká korporace, kde se proaktivní zaměstnanec ztratí v davu. Vítáme všechny nové nápady a rádi budeme u zrodu velkých projektů.</p>"
            + "<div class='expandable'><p>V oblasti ICT se zabýváme kromě dodávky HW a SW službami jako je komplexní řešení projektů virtualizace infrastruktury se zaměřením na virtuální desktopovou infrastrukturu, poskytování cloudových služeb (IaaS, PaaS a BaaS). Dále komplexní správou systémů - kontinuální správa počítačových systémů (Linux, Windows, VMware), vč. nonstop dohledu, podpory uživatelů. Řešíme návrhy a konzultace k řešením v oblasti ICT, nasazení OS Windows, Linux a VMware vSphere; vysoká dostupnost dat a systémů; rozložení zátěže – load balancing; virtuální serverová a desktopová infrastruktura, hostování aplikací v cloudu.</p>"
            + "<p>Nabízíme spolupráci na projektu webové a mobilní aplikace pro evidenci docházky Frekr. Správa cloud computingové služby, která umožňuje jednotlivcům i firmám pronajmout si libovolný počet virtuálních serverů a spravovat je přes jednoduché webové rozhraní Beescale. Vlastní produkt tenký klient TiCtOG, který slouží nejen pro potřeby řešení virtuální desktopové infrastruktury (VDI) a terminálového přístupu.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Programování", skills: ["Java", "Javascript", "PHP", "Perl"]},
                {department: "Databáze", skills: ["LDAP", "Relační DB", "Dokumentové DB"]},
                {
                    department: "Softwarové inženýrství",
                    skills: ["Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy"]
                },
                {department: "Bezpečnost", skills: ["Softwarová", "Systémová"]},
                {department: "Operační systémy", skills: ["Unix", "Windows", "iOS", "Android"]},
                {department: "Uživatelské rozhraní", skills: ["Testování UI", "Kódování UI", "Implementace web UI"]},
                {department: "Počítačové inženýrství", skills: ["Architektura počítačů", "Vestavěné systémy"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: false
        },

        {
            name: "Teleport",
            type: "foreign",
            page: "http://goo.gl/mDnrUW",
            description: "<p>Teleport je rozvojový projekt, který si klade za cíl podpořit podnikavého ducha a globální ambice českých vysokoškolských studentů (převážně z oborů ICT a designu) jejich vysíláním na stáže do startupů v Silicon Valley. Teleport připraví zájemce na pohovor s vybranými startupy, zprostředkuje pracovní stáž, zprocesuje a zaplatí pracovní vízum, zorganizuje komplexní program během pobytu v Silicon Valley (meetupy s podnikateli a tamní česko-slovenskou komunitou, kalendář akcí, návštěvy technologických společností jako Google či Facebook) a v případě zájmu dodá podporu (mentoring, poradentsví) i po návratu do ČR. Naším cílem je vytvořit příští generaci podnikatelů a business lídrů světového kalibru.</p>" +
            "<div class='expandable'><p>Teleport nabízí jedinečnou příležitost působit v jedné z nejdynamičtějších a nejinovativnějsích oblastí světa. Mimo práci bude mít stážista nespočet příležitostí navštěvovat různé vzdělávací a networkingové akce, pravidelně se setkávat s česko-slovenskou podnikatelskou komunitou v Silicon Valley, utvářet si vlastní  network složený z předních podnikatelů, inovátorů, investorů a dalších profesionálů, zúčastnit se kurzů na Stanfordu a UC Berkeley, získávat informace o nejnovějších technologických trendech, čerpat inspirace pro vlastní podnikání.</p>" +
            "<p>V oblasti ICT technologické startupy v Silicon Valley vyhledávají stážisty na plný úvazek převážně na pozice front-end vývojář, back-end vývojář, full-stack vývojář, mobilní vývojář, inženýr mechaniky, inženýr robotiky a data scientist. Konkretní náplň práce bude záviset na zaměření daného startupu a jeho potřebách a bude součástí tzv. stážového plánu, na kterém se shodne stážista se startupem.</p>" +
            "<p>Absolventi Teleportu se stanou součástí prestižního networku, kterému bude nadále poskytována podpora pro jejich budoucí rozvoj. Budou mít jedinečnou startovací pozici začít svůj vlastní business či získat pracovní nabídky od nejprestižnějších technologických firem.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost", "Zodpovědnost"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", "Ruby", ".NET", "Java", "Javascript", "PHP", "C#", "SmallTalk", "Groovy", "ObjectiveC", "Python", "Matlab", "R", "Erlang", "Perl", "Scala", "Assembler"]
                },
                {
                    department: "Databáze",
                    skills: ["LDAP", "Relační DB", "Dokumentové DB", "Grafové DB", "Objektové DB", "Návrh DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Algebra", "Optimalizace", "Spojitá", "Diskrétní", "Statistika"]},
                {department: "Bezpečnost", skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]},
                {department: "Umělá inteligence", skills: ["Machine learning", "Robotika", "Teorie her"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "FreeBSD", "Systémy reálného času", "Windows", "iOS", "Android", "Windows Phone"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {
                    department: "Počítačové inženýrství",
                    skills: ["Architektura počítačů", "Logický návrh", "Vestavěné systémy", "Programovatelný hardware", "Testování a spolehlivost"]
                },
                {department: "Počítání", skills: ["Paralelní", "Distribuované", "GPU", "Škálovatelné"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Procedurální", "Funkcionální", "Strukturované", "Algoritmizace"]
                }
            ],
            visit: false
        },

        {
            name: "CZ.NIC",
            logo: "cznic.svg",
            type: "foreign",
            page: "https://www.nic.cz/page/321/kariera-v-cz.nic/",
            description: "<p>CZ.NIC je neziskové sdružení, které bylo založeno předními poskytovateli internetových služeb v roce 1998 a nyní má již 118 členů. Hlavními činnostmi jsou provozování registru doménových jmen .CZ, zabezpečování provozu domény nejvyšší úrovně .CZ a osvěta v oblasti doménových jmen. V současné době se sdružení intenzivně věnuje rozšiřování technologie DNSSEC a služby mojeID, rozvoji systému správy domén a podpoře nových technologií a projektů prospěšných pro internetovou infrastrukturu v České republice. Kromě toho je jeho cílem vylepšovat český i mezinárodní internet a obecně konat dobro v této oblasti. Z toho důvodu CZ.NIC vytváří např. naučný seriál \"Jak na Internet\", pořádá konference \"Internet a technologie\" a zejména produkuje spoustu otevřeného software.</p>" +
            "<div class='expandable'><p>Nejsme obyčejná firma, která se žene za ziskem. U nás se dělají věci proto, že mají smysl, ne proto, že přinesou zisk. I když se náš počet již blíží ke stovce, pořád jsme malá firma. Nemáme žádné složité interní předpisy ani strukturu. Nenabízíme sáhodlouhý seznam zaměstnaneckých výhod a kulečníkový stůl u nás v kanceláři také nenajdete. Místo toho máme práci, která je vidět a kterou se budete moci pochlubit, možnost rozvíjet se a ovlivňovat vlastní práci.</p>" +
            "<p>I když máme sídlo v Praze, rozhodně nejsme pragocentričtí. Máme pobočky v Brně, Plzni a Českých Budějovicích. Pokud tedy nechcete do Prahy, chcete z ní vypadnout a nebo se třeba po studiích v Praze vrátit blíž k domovu, koukněte na možnosti na našem webu. Nabízíme práci i na částečný úvazek, takže můžete klidně začít třeba už při studiu.</p>" +
            "<p>Konkrétní požadavky najdete u každé pozice. Obecně chceme lidi, kteří myslí a práce je baví. Vzdělání je důležité, ale schopnosti a snaha jsou pro nás důležitější než tituly. Nezáleží nám na věku, pohlaví nebo barvě pleti, přijímáme ale pouze nekuřáky.</p></div> ",
            upper_skills: [],
            visit: false
        },

        {
            name: "Young & Rubicam Praha",
            logo: "rubicam.png",
            type: "foreign",
            page: "https://www.wunderman.cz/ ",
            description: "<p>Jsme součástí mezinárodní sítě Wunderman a současně největší komunikační agentura na českém trhu. Principem naší práce je analýza dostupných dat a důkladné porozumění zákazníkovi. Na něm je založena kreativní, přímá a relevantní komunikace, často využívající chytrých digitálních řešení.</p>" +
            "<div class='expandable'><p>Zabýváme se oblastmi direct marketingu, dat a digital. Nabízíme široké spektrum interních i externích školení, manažerský program nebo program pro Top talenty. Preferujeme neformální pracovní prostředí v partě fajn lidí, organizujeme spoustu zábavných akcí pro zaměstnance.</p></div> ",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: [".NET", "Javascript", "PHP", "C#"]
                },
                {
                    department: "Databáze",
                    skills: ["LDAP", "Relační DB", "Dokumentové DB", "Grafové DB", "Objektové DB", "Návrh DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Process modeling", "UML", "BPMN", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                {department: "Matematika", skills: ["Statistika"]},
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Grafika", "Implementace web UI"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {
                    department: "Technologie",
                    skills: ["OOP"]
                }
            ],
            visit: false
        },

        {
            name: "Liftago",
            logo: "liftago.png",
            type: "foreign",
            page: "https://www.liftago.com/cs",
            description: "<p>Liftago je na taxislužbách nezávislá platforma, která prostřednictvím mobilních aplikací propojuje poptávku pasažérů přímo s nabídkami konkrétních prověřených řidičů taxi s licencí. Vzniká tak přirozená konkurence mezi řidiči taxi, která doposud neexistovala. Přes Liftago si pasažér pro každou jízdu vybírá z reálných nabídek podle ceny, rychlosti přistavení a hodnocení konkrétních řidičů. Platforma Liftago do budoucna bude takto efektivně \"obchodovat\" různé druhy dopravy. </p>" +
            "<div class='expandable'><p>Liftago vyvíjí svoji vlastní internetovou službu pro efektivní přepravu ve městech. Řešení využívá mobilní aplikace a cloudovou platformu. Aplikace v mobilních telefonech našich přepravců slouží pro nabízení kapacity, zatímco naši noví zákazníci využívají svoje smartphony k objednání taxíků. Cloudová platforma shromažďuje a analyzuje velké množství dat z mobilních aplikací přepravců i zákazníků. V reálném čase pak pomocí rozhodovacích algoritmů na bázi machine learningu umožňujeme zákazníkům vybírat z nabídek taxikářů dle svých preferencí. Důležitou roli v Liftagu hrají data. Business inteligence nám umožňuje vylepšovat funkcionalitu a algoritmy tak, aby byla existující kapacita v dopravě využita co nejvíce.</p>" +
            "<p>Liftago je mladý start-up, který si našel vlastní unikátní hodnotu na trhu městské mobility: budujeme tržiště přepravy, ne další \"appku\". Jakmile najdeme lidi schopné tento koncept s námi rozvíjet, vnímat náš koncept a nehledět si jen svého úkolu, dostanou u nás prostor a svobodu. Produkt rozvíjíme nejen po stránce funkční a technické (efektivní propojování nabídky a poptávky po svezení), ale i marketingové. Našli jsme vlastní cestu a chceme službu rozvíjet na další trhy.</p>" +
            "<p>V Čechách máte šanci pracovat pro ultra technická odvětví a produktech pro firmy, nebo úspěšné e-commerce projekty. Liftago nabízí práci na rychle rostoucí službě, která přitahuje velké množství běžných uživatelů i pozornost široké veřejnosti. Pokud se chcete podílet na projektu, který bude měnit přepravní zvyky lidí, jsme tu. :-)</p></div> ",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["Java", "Javascript", "Python", "R"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Dokumentové DB", "Návrh DB", "Optimalizace DB", "Messaging"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Lean Development"]
                },
                {department: "Datamining", skills: ["Pattern recognition"]},
                {department: "Bezpečnost", skills: ["Softwarová"]},
                {department: "Umělá inteligence", skills: ["Machine learning"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix", "iOS", "Android"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {department: "Počítání", skills: ["Distribuované", "Škálovatelné"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Procedurální", "Algoritmizace"]
                },
                {
                    department: "Další technologie",
                    skills: ["BI", "Data Analysis", "Continuous Deployment", "SaaS", "Cloud", "Amazon", "Distributed Systems"]
                }
            ],
            visit: false
        },

        {
            name: "Edhouse s.r.o.",
            logo: "edhouse.png",
            type: "foreign",
            page: "http://www.edhouse.cz/cz/",
            description: "<p>Jsme největší softwarová společnost ve Zlíně. Vznikli jsme v roce 2006 a vypracovali jsme si pozici stabilního a férového zaměstnavatele. Od roku 2014 působíme také na Vsetíně, kde rozvíjíme pobočku vývojového centra Edhouse.</p>" +
            "<div class='expandable'><p>Setkáte se u nás s mezinárodními projekty, nejčastěji v technologiích C++, Java a C# .NET. Pro studenty a absolventy připravujeme různé druhy stáží, brigád, letních praxí, částečných i plných úvazků. Nabízíme také velké množství interních vzdělávacích aktivit a rozvojových plánů.</p>" +
            "<p>Pracujeme pro světové jedničky na mezinárodním trhu a tím naplňujeme náš cíl přinášet zajímavou práci do našeho regionu – Zlínského kraje. Mezi naše klíčové zákazníky patří společnosti FEI, NCR, ComAp a ON Semicoductor.</p></div> ",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Analytické myšlení", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", ".NET", "Java", "C#"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Verzování zdrojového kódu", "Metodiky"]
                },
                {department: "Bezpečnost", skills: ["Softwarová"]},
                {
                    department: "Operační systémy",
                    skills: ["Windows"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: false
        },

        {
            name: "Physter Technology, a. s.",
            logo: "physter.png",
            type: "foreign",
            page: "http://www.physter.com/",
            description: "<p>Physter Technology, a.s. je přední dodavatel a integrátor profesionálních softwarových systémů a informačních a komunikačních technologií, působící na trhu od roku 2003. Jsme součástí holdingové struktury řízené londýnskou centrálou Physter Technology, LTD. která působí na různých světových trzích v různých oblastech. V ČR máme 40 zaměstnanců. Softwarová analýza, architektura, vývoj a projektový management jsou klíčovými kompetencemi společnosti.</p>" +
            "<div class='expandable'><p>Naši geekové vyvíjejí unikátní řešení pro velké zákazníky především z oblasti telekomunikací a bankovnictví. Zabýváme se projekty jako např. outsourcing mobilního CRM, service provisioning management nebo novou integrační platformou na open source. Provázíme zákazníka celým životním cyklem projektu – od analýzy a návrhu řešení až po go–live a následnou podporu. Po celou dobu spolupracujeme napřímo se zákazníkem, často on-site.</p>" +
            "<p>Myslíme si, že nejlépe se učíme přímou zkušeností. Proto mají naši lidé možnost se v rámci firmy posouvat vertikálně i horizontálně - měnit svoje role např. z testera na vývojáře nebo analytika, podle osobní specializace a zájmu. Samozřejmě podporujeme vzdělávání a získávání certifikací. Zakládáme si na ploché organizační struktuře, práci v menších flexibilních týmech a absenci byrokracie a formalit.</p></div>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["C", "C++", "Java", "Javascript", "PHP", "Oracle PL/SQL"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Objektové DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "BPMN", "Bugtracking", "Tiketové systémy"]
                },
                {
                    department: "Operační systémy",
                    skills: ["Unix", "Windows", "Sun Solaris", "Novell"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                },
                {
                    department: "Technologie",
                    skills: ["OOP"]
                },
                {
                    department: "Cizí jazyky",
                    skills: ["Angličtina"]
                }

            ],
            visit: false
        },

        {
            name: "Guavus",
            logo: "guavus.png",
            type: "foreign",
            page: "http://www.guavus.com/",
            description: "<p>Guavus is a California-based big data analytics company providing applications for planning, operations, customer experience management and IOT. These applications uniquely bring together computer science, data science and domain science to provide real-time analytics that enable businesses to become more efficient, profitable and competitive. We have customers among the biggest telecommunications operators both at American and the world market. Founded in 2006, Guavus currently employs around 500 people all over the world with a large software development office in Montreal, Canada.</p>" +
            "<div class='expandable'><p>One of the Guavus's key projects is currently the Service Reflex platform which is an analytics tool for operations management. It enables service providers to dynamically improve service quality and enhance customer experience by ingesting, fusing and contextualizing network impacting events with subscriber data in real time. From a software developer perspective, this project involves data analysis, building and learning predictive models, focus on real-time data processing and touching cutting-edge technologies. Acquiring new customers, expanding the coverage within the existing ones and introduction of new features results in complex and challenging tasks waiting to be solved every day.</p>" +
            "<p>For our Montreal office, we are looking mostly for students finishing their Bachelor’s or Master’s Degree with interest in software development, data analysis and knowledge engineering. If you are looking for interesting projects, if you are willing to learn new technologies, and if you want to work overseas in a friendly office located in one of the most enjoyable cities in Canada, then Guavus should be your top choice!</p></div> ",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Analytické myšlení", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["Java", "Python"]
                },
                {
                    department: "Databáze",
                    skills: ["Relační DB", "Dokumentové DB", "Návrh DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Objektový návrh", "Testování", "Verzování zdrojového kódu", "Continuous Integration"]
                },
                {department: "Matematika", skills: ["Optimalizace", "Statistika"]},
                {department: "Umělá inteligence", skills: ["Machine learning"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix"]
                },
                {department: "Počítání", skills: ["Paralelní", "Distribuované"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: false
        },

        {
            name: "Policie ČR",
            logo: "policie.png",
            type: "foreign",
            page: "http://www.policie.cz/",
            description: "",
            upper_skills: [],
            visit: false
        },

        {
            name: "PWC",
            logo: "pwc.png",
            type: "foreign",
            page: "http://www.pwc.com/cz/cs/",
            description: "",
            upper_skills: [],
            visit: false
        },

        {
            name: "Greyson",
            logo: "greyson.gif",
            type: "bronze",
            page: "http://www.greyson.eu/careers",
            description: "<p>Greyson je poradenská firma, která pracuje s předními organizacemi ve střední a východní Evropě a pomáhá jim dosáhnout dlouhodobých cílů. Naše projekty se týkají datových skladů bank, migrace dat v bankách apod. Zaměstnáváme jak klasické business konzultanty a BI konzultanty, tak vývojáře a testery.</p>" +
            "<div class='expandable'><p>Pořádáme sérii profesních školení, využíváme zaškolování seniorními kolegy a také pořádáme interní školení na různá odborná témata. Pokud jde o kariérní růst, máme jasná kritéria a hierarchii a naši lidé přesně vědí co musí udělat, aby se mohli dostat o příčku výše. Dvakrát do roka probíhá oficiální hodnocení pracovního výkonu, ze které vzejdou další kroky na rozvoj a požadavky na školení. Nabízíme zajímavé projekty ve firmě, která raketově roste i v době, kdy je na trhu obrovská poptávka po lidech. Také disponujeme širokou škálou firemních benefitů, např. až 6 týdnů dovolené nebo soukromou vilu na Bali pro relax našich zaměstnanců zdarma. :)</p></div>",
            upper_skills: [],
            visit: false,
            sponsor: true
        },

        {
            name: "eMan",
            logo: "eman.png",
            type: "bronze",
            page: "https://www.eman.cz/kariera/",
            description: "<p>eMan je předním českým poskytovatelem softwarových řešení. Vyvíjíme aplikace pro smartphony, tablety, auta, wearables a další chytrá zařízení. Náš tým má 80 členů. Sídlo a hlavní kancelář máme v Praze. V roce 2016 jsme otevřeli regionální pobočky v Plzni a Hradci Králové. Mezi naše klíčové zákazníky patří například Škoda Auto, Honeywell, O2, Edenred, E.ON, Allianz, Česká pojišťovna, MND nebo Autodesk. eMan je součástí skupiny JABLOTRON GROUP.</p>" +
            "<div class='expandable'><p>Zabýváme se vývojem mobilních aplikací (návrh a vývoj aplikací pro smartphony, tablety, wearables, automobily a jiná “smart” zařízení), webovým vývojem (návrh a vývoj webových aplikací a backend řešení, klientské portály, obchodní a komunikační platformy, backend systémy, rozsáhlá enterprise řešení), UX/UI designem (UX strategie, prototyping, UX design aplikací, od mobilních řešení přes webové aplikace až po řešení pro chytré automobily nebo nemocniční lůžka) a dalšími službami (provoz a servis aplikací, quality assurance, bezpečnost a testování aplikací, hromadná správa mobilních zařízení, biometrické podpisy). Nabízíme možnost spolupráce formou práce na plný/částečný úvazek, stáže nebo možnost realizace diplomové/bakalářské práce.</p>" +
            "<p>Osobní rozvoj a učení se je pro nás na prvním místě. Nabízíme finanční odměnu, se kterou budete opravdu spokojení. U nás máš možnost organizovat si svou práci podle sebe – důležitý je pro nás výsledek, ne pevná pravidla, podle jakých se k němu dostaneš. Jsme mladý kolektiv v příjemném pracovním prostředí. Mezi benefity patří výuka angličtiny, homeoffice, stolní fotbálek, HTC Vive a XBox v chillout zóně, sportovní akce, možnost zapůjčení firemního vozidla, celofiremní víkendové akce a teambuildingy, telefon, notebook, monitor a ergonomické pomůcky, polohovatelné stoly, občerstvení na pracovišti, konference, pravidelné firemní snídaně, školení či možnost proplacení odborných seminářů a kurzů.</p></div>",
            upper_skills: [],
            visit: false,
            sponsor: true
        },

        {
            name: "Epam",
            logo: "epam.svg",
            type: "bronze",
            page: "http://www.epamsystems.cz/",
            description: "<p>Since 1993, EPAM Systems, Inc. (NYSE:EPAM), has leveraged its core engineering expertise to become a leading global product development and digital platform engineering services company. Through its ‘Engineering DNA’ and innovative strategy, consulting, and design capabilities, EPAM works in collaboration with its customers to deliver innovative solutions that turn complex business challenges into real business opportunities. EPAM’s global teams serve customers in over 25 countries across North America, Europe, Asia and Australia. EPAM is a recognized market leader among independent research agencies and was ranked #8 in FORBES 25 Fastest Growing Public Tech Companies, as a top information technology services company on FORTUNE’S 100 Fastest Growing Companies, and as a top UK Digital Design & Build Agency.</p>" +
            "<div class='expandable'><p>EPAM Systems Czech Republic concentrates on  support of global EPAM customers, especially in the area of finance and pharma industry.</p>" +
            "<p>After people join us, they receive a comprehensive set of benefits. We invest a lot into EPAMers’ professional development, there are a lot of educational activities, such as webinars, conferences, courses. There are different IT events, people can either share their knowledge or learn something new. Having that many nationalities we need to speak the same language, which is why we offer our employees English courses to boost their skills. What is very attractive benefit, is possibility to work on international project and possibility to go work (of course, after certain time) to another EPAM location  in over 25 countries around the world.</p>" +
            "<p>We know, that there is a big competition on IT market, but we are committed to making EPAM a great place to work through our culture, training and global mobility program. We know how to work hard, and we know how to have a great time.  </p></div>",
            upper_skills: [],
            visit: false,
            sponsor: true
        },

        {
            name: "2N TELEKOMUNIKACE a.s.",
            logo: "Logo2N.png",
            type: "bronze",
            page: "https://www.2n.cz",
            description: "<p>Vytváříme originální produkty a řešení vycházející z nejnovějších IP technologií a udáváme tak trendy v oblasti komunikace a bezpečnosti. Jsme celosvětovou jedničkou na trhu v oblasti IP interkomů, které se prodávají ve více než 130 zemí světa. Hledáme nové talenty v oblasti  programování embedded systémů. Nabízíme flexibilní úvazky během studií s možností přejít na full time po dokončení studií.</p>",
            upper_skills: [],
            visit: false,
            sponsor: true
        },

        {
            name: "LMC s.r.o.",
            logo: "lmc.svg",
            type: "bronze",
            page: "https://www.lmc.eu",
            description: "<p>LMC vyvíjí a provozuje nejenom největší kariérní portály Jobs.cz a Prace.cz, ale i řadu dalších služeb pro online svět práce a vzdělávání, jako např. Teamio.com, Easytask.cz, Jobote.com nebo Seduo.cz. Naším snem je, aby lidé měli svou práci rádi. </p>" +
            "<div class='expandable'><p>Soustředíme se na vývoj zmíněných služeb pro online trh práce a vzdělávání. Každý produkt má svůj vývojový tým (vývojáři, UX, product manager, business owner, delivery manager/scrum master). Vedle toho samozřejmě máme týmy, které se nadhledově starají o naše služby -  software architecture, R'n'D, system admins, ICT.</p>" +
            "<p>Vzdělávání a rozvoj je pro nás společně s přátelskou firemní kulturou hlavní prioritou - děláme výměny zkušeností mezi týmy, interní kurzy (např. Měsíc deploymentu, Měsíc databází), kde přednáší lidi z firmy i zvenčí, kurzy soft-skills, jezdíme pravidelně na české i zahraniční konference. Zároveň podporujeme naše lidi v zapojení do odborných komunit. Pokud má někdo ambici se stát leaderem, je pro něj k dispozici leadership program. </p>" +
            "<p>Důvody, proč se k nám přidat: přátelská atmosféra; důraz na vzdělávání; práce, která má smysl a díky které pomáháš jiným lidem mít víc radosti ze života; více jak milion uživatelů, kteří naše služby využívají; jsme vepředu s agilním vývojem, se kterým máme víc jak 6 let zkušeností; testování a code review bereme vážně; podporujeme komunitu; máme vlastní firemní čajovnu.</p></div>",
            upper_skills: [],
            visit: false,
            sponsor: true
        },

        {
            name: "NCR",
            logo: "ncr.png",
            type: "bronze",
            page: "https://www.ncr.com/careers",
            description: "<p>NCR is a diverse business with 29,000 people in over 180 locations worldwide with a history, present and future of firsts. Founded in 1884 (as National Cash Register Company) maker of the first mechanical cash registers. NCR holds the Hospitality market leadership with a solution encompassing Point of Sale, Online and Mobile Ordering, Real Time Reporting, Theft and Loss Prevention. As the Omni-Channel leader NCR changes future of business by connecting consumer transaction data from all the industries served by NCR and presenting consumers with their complete financial picture.</p>" +
            "<div class='expandable'><p>Among our projects are 3rd party system integration (electronic payments, loyalty, online ordering), implementation of legal regulations (fiscal, labor law), multi-platformness, next Generation UI, real Time Reporting, theft and Loss Prevention and Big Data.</p>" +
            "<p>Students can join NCR as interns or part timers to balance their study and employment changing to full time employment once graduated. Starting as junior Software or Quality Engineers they can specialize and become Software Architects, Product Owners or Engineering Managers. We at NCR prefer to grow our people.</p>" +
            "<p>Do you value friendly and ethical environment, team work, highly skilled and motivated coworkers, innovative solutions (like the real time reporting and theft prevention)? Then NCR is the right choice for you!</p></div>",
            upper_skills: [],
            visit: false,
            sponsor: true
        },

        {
            name: "Commerz Systems",
            logo: "commerz-systems.svg",
            type: "bronze",
            page: "http://www.commerzsystems.de/en/",
            description: "<p>Existuje mnoho variant s pasážemi Lorem Ipsum, nicméně valná většina trpí neduhy v podobě snahy o vtipný text či použití naprosto náhodných slov, což nevypadá zrovna uvěřitelně. Pokud plánujete použít pasáž z Lorem Ipsum, měli byste mít jistotu, že v textu nebude nic, co by jej mohlo narušovat. Všechny generátory Lorem Ipsum na internetu mají tendenci opakovat kusy textu podle potřeby, díky čemuž je tento prvním pravým generátorem svého druhu. Používá totiž slovník více jak 200 latinských slov, která jsou kombinována do vět tak, aby text vypadal rozumně.</p>" +
            "<div class='expandable'><p></p>" +
            "<p></p>" +
            "<p></p></div>",
            upper_skills: [],
            visit: false,
            sponsor: true
        }

    ];
    partners.sort(function (parA, parB) {
        return getPosition(parA) - getPosition(parB);
    });
    $.each(partners, function (e) {
        var partnersField;
        var skills = "";
        if (!this.sponsor) {
            if (this.type == "gold") {
                partnersField = $('.partners-list .gold');
            } else if (this.type == "silver") {
                partnersField = $('.partners-list .silver');
            } else if (this.type == "bronze") {
                partnersField = $('.partners-list .bronze');
            } else {
                partnersField = $('');
            }
        } else {
            if (this.type == "gold") {
                partnersField = $('.sponsors-list .gold');
            } else if (this.type == "silver") {
                partnersField = $('.sponsors-list .silver');
            } else if (this.type == "bronze") {
                partnersField = $('.sponsors-list .bronze');
            } else {
                partnersField = $('');
            }
        }

        partnersField.append('<div class="partner"><div class="border"><div class="logo">'
            + '<a href="' + this.page + '" target="_blank"><img alt="" src="img/partners/'
            + this.logo + '"/></a></div><div class="info">'
            + '<span class="status"></span></div></div></div>');


        if ((this.type=="gold" || this.type=="silver" || this.type=="bronze") && !this.sponsor) {
        //if (this.visit && !this.sponsor) {
            $.each(this.upper_skills, function (index, upperSkill) {
                skills += '<li class="upper-skill"><span class="upper-skill-name">' + upperSkill.department + '</span><ul class="lower-skills">';
                $.each(upperSkill.skills, function (index, lowerSkill) {
                    skills += '<li class="lower-skill">' + lowerSkill + '</li>'
                });
                skills += '</ul></li>'
            });
            $('.comming-partners').append('<div class="company '
                + this.type + ' expandable-container follow"><div class="logo">'
                + (this.logo == null ? '<h3>' + this.name + '</h3>' : '<img src="img/partners/' + this.logo + '"/>')
                + '</div><div class="description"><h3 style="display: none;">'
                + this.name + '</h3>' + (this.description == '' ? 'Popis připravujeme' : this.description) + '</div><div class="expandable" >'
                + '<ul class="skills" style="display: none;">' + skills + '</ul>'
                + '<div class="pull-right"><a href="'
                + this.page + '" target="_blank" class="btn" title="Přejít na stránky společnosti">Stránky společnosti</a></div></div></div>');
        }
        if ((this.type=="gold" || this.type=="silver" || this.type=="bronze") && this.sponsor) {
        //if (this.visit && this.sponsor) {
            $('.comming-sponsors').append('<div class="company '
                + this.type + ' expandable-container follow"><div class="logo">'
                + (this.logo == null ? '<h3>' + this.name + '</h3>' : '<img src="img/partners/' + this.logo + '"/>')
                + '</div><div class="description"><h3 style="display: none;">'
                + this.name + '</h3>' + (this.description == '' ? 'Popis připravujeme' : this.description) + '</div><div class="expandable" >'
                + '<ul class="skills" style="display: none;">' + skills + '</ul>'
                + '<div class="pull-right"><a href="'
                + this.page + '" target="_blank" class="btn" title="Přejít na stránky společnosti">Stránky společnosti</a></div></div></div>');
        }
    });
}
