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

function initPartners() {
    partners = [
        {
            name: "Profinit",
            logo: "profinit.svg",
            type: "gold",
            page: "http://www.profinit.eu/",
            description: "<p>Profinit je již od roku 1998 významným hráčem na poli application outsourcingu a information managementu. V našem sehraném týmu najdete více než 300 nadšených a zkušených profesionálů. Obrat naší společnosti činil na konci roku 2014 necelých 400 miliónů korun. Aktuálně pracujeme pro více než padesát významných klientů po celém světě. Patříme ke špičce v oblasti vývoje SW na zakázku, data managementu, datových skladů a business intelligence. Jako jediní máme místní know-how nepřenesené z USA či jiných vzdálených trhů. Pokrýváme klíčové oblasti přímých kanálů, self-care, online prodeje, podpory a řízení obchodní, agentské a pobočkové sítě, marketingu, financí, sociálních sítí či fraudu. Dlouhodobě spolupracujeme se společnostmi Informatica, IBM, EMC, Oracle, Liferay, Microsoft, Sybase, Talend, SAP, Kentico, SuccessFactors a také s ČVUT (FIT) a Marketingovým institutem. </p>" +
            "<div class='expandable'><p>Jsme garantem semestrálních předmětů na ČVUT a MFF UK. Dlouhodobě s univerzitami spolupracujeme v oblastech pokročilého zpracování dat, data analytics, syntaktické a sémantické analýze kódu či konceptuálních modelů. Naši odborníci předměty vyučují i cvičí. Mimo společných výzkumných projektů nabízíme také zajímavá témata v podobě semestrálních projektů, diplomových a bakalářských prací. Příkladem úspěšné spolupráce jsou naše produktové řady Manta tools a SVAT. </p>" +
            "<p>Společně s nejprestižnějšími českými a slovenskými technickými vysokými školami a pod záštitou mezinárodní odborné organizace ACM organizujeme soutěž ACM SPY, ve které odborná porota vybírá nejlepší diplomovou práci z oblasti informatiky a informačních technologií. Cílem soutěže je podpořit talentované studenty v jejich studiu a výzkumu a pomoci jim uplatnit tuto snahu i výsledky v praxi. </p>" +
            "<p>Spolupráce s vysokými školami je pro nás zdrojem inovace, inspirace a samozřejmě také talentu. My na oplátku předáváme své dlouholeté zkušenosti mladým lidem.</p>" +
            "<p>Pokud máte zájem dozvědět se o naší společnosti více, přijďte k našemu kiosku na Co@FITu. Těšíme se na Vás!</p></div>",
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
            visit: true
        },

        {
            name: "Lely",
            logo: "lely.png",
            type: "gold",
            page: "http://www.lely.com/",
            description: "<p>Our area is innovation in agriculture, we use artificial intelligence techniques to make farms more profitable and durable, and farmer’s life easier and more enjoyable. Our most know invention is automated milking robot (Lely Astronaut). However, we supply the agricultural sector with a complete portfolio of products and services ranging from milking robots, automated feeding systems and barn cleaners to forage harvesting. Lely is active in more than 60 countries and employs some 2,000 people.</p>" +
            "<div class='expandable'><p> In cooperation with FIT CTU we mainly work on AI projects. That includes machine learning techniques to improve robot behavior or data mining and data science techniques to extract information from robots data. It is not only about the work it is about passion to do to something new and innovative.</p>" +
            "<p> We offer assignments for graduate as well as undergraduate students through Portal for Cooperation with Industry (SSP).</p></div>",
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
            visit: true
        },

        {
            name: "Accenture",
            logo: "accenture.png",
            type: "gold",
            page: "https://www.accenture.com/cz-cs/Careers.aspx",
            description: "<p>Accenture je vedoucí, globální společnost nabízející odborné služby. Poskytujeme širokou škálu služeb a řešení v oblasti strategie, poradenství, digitálních technologií, technologických služeb a podpory podnikových procesů prostřednictvím přibližně 373 000 pracovníků ve více než 120 zemích světa. Největším a nejvýznamnějším firmám ze všech odvětví pomáháme nastavit úspěšné strategie, navrhnout a implementovat plány, využít sílu digitálního světa – za pomoci tradičních i nových technologií – a dodat řešení. Našim klientům se dokážeme postarat o provoz jejich podnikových procesů, infrastruktury i cloudových služeb. Accenture je jediná firma se schopností poskytovat takto široké spektrum služeb a řešení upravených pro jednotlivá odvětví. Tržby společnosti dosáhly 31 miliard USD za fiskální rok končící 31. srpnem 2015. České republice působíme už 25 let a máme více jak 1800 zaměstnanců.</p>" +
            "<div class='expandable'><p>Čerstvým absolventům nabízíme zajímavou práci v mezinárodních týmech na různorodých projektech v ČR i zahraničí. Naše pozice v konzultantské divizi jsou vhodné především pro vysokoškoláky se silným analytickým a logickým myšlením. Oblast moderních informačních technologií je příležitost především pro ty, jejichž předním zájmem jsou moderní informační technologie a snaha se v této oblasti trvale rozvíjet. V rámci podpory podnikových procesů nabízíme šanci těm, kteří chtějí využívat jazyky na denní bázi. Nabízíme pozice v oblasti konzultačních služeb, moderních informačních technologií nebo podpory podnikových procesů.</p>" +
            "<p>Poskytujeme odborné služby a řešení v oblasti strategií, poradenství, digitalizace, technologií a podpory podnikových procesů významným a renomovaným firmám, včetně 94 z top 100 největších firem na světě. Jsme číslo 1 v rámci aktuálního žebříčku časopisu Fortune “World’s Most Admired Companies” v kategorii IT Služby.</p>" +
            "<h4>Co získáš, když půjdeš pracovat k nám?</h4>" +
            "<p>Zajímavou práci pro významné a prestižní firmy - vždyť není snad výzvou řešit, jak mohou největší banky, pojišťovny, telekomunikační, výrobní či energetické firmy lépe a efektivněji uspokojovat své zákazníky a využívat při tom inovativní přístupy a technologie?</p>" +
            "<p>Vzácné praktické zkušenosti – staneš se expertem na specifická průmyslová odvětví nebo podnikové funkce (procesy) anebo technologie, což ti samozřejmě v budoucnu přinese i spoustu zajímavých pracovních nabídek.</p>" +
            "<p>Skvělé kolegy - jsme výborná parta a dostanou se k nám ti nejlepší, které baví měnit svět k lepšímu a navzájem si při tom pomáhat.</p>" +
            "<p>Špičkové vzdělávací programy - podle odborných periodik jsou tréninky v Accenture jedny z nejlepších na světě co do kvality i kvantity. Jsme číslo 1 v rámci žebříčku “Learning Elite” časopisu Chief Learning Officer.</p>" +
            "<p>Atraktivní ohodnocení a štědrý balíček benefitů.</p>" +
            "<p>Pravidelný proces povyšování založený na transparentním posouzení tvé výkonnosti.</p>" +
            "<p>Osobního kariérního poradce, který ti bude pomáhat s rozvojem a směřováním tvé kariéry.</p>" +
            "<p>Work hard, play hard – umíme se i bavit a žijeme i sportem – od celosvětové Accenture Ski Challenge v nejznámějších lyžařských destinacích až po We Run Prague.</p>" +
            "<p>Příležitost zapojovat se do různých dobročinných a charitativních aktivit, jako je například náš mezinárodně oceňovaný český projekt Accenture Academy pro děti z domovů.</p>" +
            "<p>Pracovní smlouvu na dobu neurčitou.</p>" +
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
            visit: true
        },

        {
            name: "Komerční banka",
            logo: "kb.png",
            type: "silver",
            page: "http://www.kb.cz/",
            description: "<p>Komerční banka, a.s. patří mezi přední bankovní instituce v České republice a v regionu střední a východní Evropy. Je univerzální bankou se širokou nabídkou služeb v oblasti retailového, podnikového a investičního bankovnictví. V aktuální době nabízí služby pro zhruba 1,6 milionu klientů, které obsluhuje na stovkách poboček a skrz nejrůznější digitální kanály.</p>" +
            "<div class='expandable'><p>Zabýváme se velkými transformačními programy či komplexním vývojem bankovních systémů a internetového (a mobilního) bankovnictví. Dále také inovativními přístupy a nápady pro zkvalitnění zákaznické zkušenosti jako např. zjednodušení práce s platbami, využívání chytrých zařízení (smartwatch), lepší práce s velkými daty (Big Data) nebo hledání nových scénářů pro bankovní a finanční služby (Google Wallet nebo Apple Pay).</p>" +
            "<p>Talentovaní studenti mají možnost se zúčastnit integračního a rozvojového programu Connecting a Connecting +. Poznají zde sami sebe a zároveň také fungování banky z odlišných pohledů (finance, marketing, HR, Risk a Distribuce). V průběhu kariérního postupu nabízíme mnoho školení jak v oblasti technických dovedností, tak v soft skills.</p>" +
            "<p>Díky stabilnímu prostředí velké organizace a široké škále využívaných a provozovaných technologií, metodik a produktů se v KB mohou uplatit studenti nejrůznějších zaměření. Dokážeme nabídnout široké spektrum témat od serverové virtualizace či IT architektury až po témata zabývající se digitálním marketingem nebo sociálními sítěmi. V rámci naší IT Inovační laboratoře již teď působí řada studentů ČVUT, kteří obhájili nebo zpracovávají diplomové práce zaměřené na praktickou aplikovatelnost jejich výsledku. Pokud máte zájem se o našem týmu a nabízených příležitostech dozvědět více, neváhejte nás kontaktovat u našeho kiosku na Co@FITu!</p></div>",
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
            visit: true
        },

        {
            name: "Česká pojišťovna",
            logo: "ceskapojistovna.png",
            type: "silver",
            page: "http://www.ceskapojistovna.cz/",
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
            visit: false
        },

        {
            name: "SWATCH group",
            logo: "asicentrum.png",
            type: "bronze",
            page: "http://www.asicentrum.cz/",
            description: "<p>The Swatch Group Ltd is an international group producing and selling watches, jewellery, watch movements and components. The Swatch Group has a unique emotional culture. Beauty, sensuality, emotions in watches are as much part of it as high-tech, quality  and added value on the customer's wrist. Both, emotional poetry and innovation play an active part in the commitment to its customers.</p>" +
            "<div class='expandable'><p>The Swatch Group was founded in 1983 and since the time shown steady growth. Today, the Group employs over 35.000 persons in fifty countries. Swatch Group's 2014 gross sales amounted to a record number of CHF 9 219 millions.</p>" +
            "<p>EM Microelectronic, Swiss semiconductor manufacturer of the Swatch Group, is focused on the design and production of ultra-low power, low voltage integrated circuits for battery-operated and field-powered applications. It has 40 years of experience in the design of IC processing analog and digital signals simultaneously.</p>" +
            "<p>ASICentrum, established in 1992 in Prague, Czech Republic, is a design center of EM Microelectronic. The team of designers is highly experienced in the submicron design technologies of ultra-low power, low voltage silicon chips, in the development of embedded software and various applications related to mobile devices and wireless communication. ASICentrum has long tradition in cooperation with many Czech technical universities.</p>" +
            "<p>We offer permanent (full-time employment) or internship (part-time job) for students and thesis entering.</p></div>",
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
            name: "Nangu.TV",
            logo: "nangu.svg",
            type: "bronze",
            page: "http://nangu.tv/",
            description: "<p>nangu.TV je česká softwarová firma zabývající se vývojem kompletního řešení pro IPTV a OTT multimediální platformy, která se v tomto velmi dynamickém odvětví pohybuje už více než 10 let a vybudovala si pozici leadra trhu. Úspěšně expandujeme i do zahraničí, pravidelně se účastníme nejvýznamnějších veletrhů v Evropě a napříč našimi zákazníky evidujeme více než půl milionu zařízení připojených k nangu.TV platformě.</p>" +
            "<div class='expandable'><p>Na našem IPTV/OTT řešení jsou postavené úspěšné služby jako O2TV. Platformu dále využívají mj. český T-Mobile, slovenský Orange a můžeme se pochlubit i instalacemi v Polsku, Srbsku, Švýcarsku nebo Lucembursku. nangu.TV umožňuje operátorům a poskytovatelům internetových služeb obohatit jejich stávající nabídku o interaktivní televizní zážitek. K základním nabízených funkcionalitám patří sledování pořadů i několik týdnů zpětně (timeshift), možnost si program na chvíli zastavit, videotéka, konzumace video obsahu na různých zařízeních jako jsou TV, mobilní telefony, tablety nebo PC (tzv. Multiscreen) a mnoho dalšího. Komponenty si vyvíjíme sami „in-house“ a jsme tak schopni dodat end-2-end řešení, čímž se odlišujeme od většiny našich konkurentů.</p>" +
            "<p>Mimojiné nabízíme rozvojové aktivity jako účast na odborných školeních/kurzech, účast na konferencích, jazykové kurzy, soft skills kurzy, možný kariérní posun v rámci týmu i firmy. Jsme otevřeni nápadům zaměstnanců jak z hlediska osobního, tak pracovního rozvoje.</p>" +
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
            name: "GoodData",
            logo: "gooddata.png",
            type: "bronze",
            page: "http://www.gooddata.com/",
            description: "<p>Jsme česká firma založená Romanem Staňkem v roce 2007, v současnosti s pobočkami v Praze a Brně, San Franciscu a Portlandu. Využíváme nejnovější technologie k vytvoření moderní vysoce zabezpečené cloudové platformy pro extrakci, správu a  multidimenzionální analýzu podnikových dat. Náš produkt využívá přes 40 % společností z žebříčku Fortune 500.</p>" +
            "<div class='expandable'><p>V GoodData vyvíjíme vysoce dostupné distribuované komponenty v Erlangu a Javě, zatímco UX tým designuje novou verzi javascriptové aplikace pro datové analytiky. Nedílnou součástí týmu jsou administrátoři, kteří se starají o privátní cloud, v němž databáze HP Vertica, Postgres nebo MongoDB mají k dispozici desítky TB paměti. Toto vše pak využívá náš algebraický engine, který zajišťuje překlad z multidimenzionálního dotazovacího jazyka MAQL do SQL, který je proveden nad relačními SQL databázemi se zákaznickými daty.</p>" +
            "<p>Nabízíme možnost pracovat na vývoji a zajištění produkce silně škálovatelné (moderně navržené) platformy, která zvládá analytické úlohy pro desítky tisíc uživatelů a zajišťuje stovky TB zákaznických dat. V ČR je minimum podobně rozsáhlých projektů. Ve firmě se také masivně používá Open Source a webové technologie.</p>" +
            "<p>Pro své zaměstnance pořádáme Hackathony, zúčastňujeme se konferencí v ČR i v zahraničí, pořádáme interní technická školení. Nabízíme stáže pro studenty, kteří mají zájem prohloubit svoje zkušenosti a nastartovat si kariéru. Studentům vycházíme vstříc jak ve formě úvazku, tak v počtu odpracovaných hodin a po skončení studií lze přejít na plný pracovní úvazek. Umožňujeme práci z domova. Pokud má student zájem o konkrétní problematiku / technologie, zprostředkujeme setkání s managerem (student může přijít s nápadem, který mu pomůžeme realizovat). Nabízíme mentoring pro případ školních prací a vypisujeme také diplomové práce. Každý zaměstnanec dostane k dispozici nb Apple McBook nebo Lenovo. V kanceláři poskytujeme zdarma nápoje a občerstvení, stejně jako vybavenou posilovnu a na odreagování fotbálek, šipky nebo pinpongový stůl.</p></div> ",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {
                    department: "Programování",
                    skills: ["Java", "Javascript", "PHP", "Erlang", "Perl"]
                },
                {
                    department: "Databáze",
                    skills: ["LDAP", "Relační DB", "Dokumentové DB", "Optimalizace DB"]
                },
                {
                    department: "Softwarové inženýrství",
                    skills: ["Integrace aplikací", "Testování", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                },
                {department: "Matematika", skills: ["Algebra", "Optimalizace", "Statistika"]},
                {department: "Bezpečnost", skills: ["Softwarová", "Síťová"]},
                {
                    department: "Operační systémy",
                    skills: ["Unix"]
                },
                {
                    department: "Uživatelské rozhraní",
                    skills: ["Testování UI", "Grafika", "Kódování UI"]
                },
                {department: "Počítání", skills: ["Paralelní", "Distribuované", "Škálovatelné"]},
                {department: "Cizí jazyky", skills: ["Angličtina"]},
                {
                    department: "Technologie",
                    skills: ["OOP", "Funkcionální"]
                },
                {
                    department: "Další technologie",
                    skills: ["PostgreSQL", "Vertica"]
                }
            ],
            visit: true
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
            name: "Gemalto",
            logo: "gemalto.svg",
            type: "bronze",
            page: "http://www.gemalto.com/",
            description: "<p>Společnost Gemalto je světový lídr v oblasti digitálního zabezpečení a největší světový výrobce komplexních digitálních a čipových karet. Gemalto má přes 14 000 zaměstnanců v 45 zemích. Pražská pobočka má v současné době 300 zaměstnanců.</p>" +
            "<div class='expandable'><p>Mezi naše produkty patří např. kreditní/debetní a bezkontaktní platební karty, osobní mobilní služby, ochrana identity, zabezpečení plateb, ověřování on-line služeb, cloud computing pro přístup, e-zdravotnictví a služby e-governmentu (cestovní pasy a občanské průkazy), moduly pro M2M.</p>" +
            "<p> Poskytujeme zabezpečovací software, širokou škálu bezpečnostních osobních zařízení a řízených služeb pro mnohé přední světové mobilní operátory, banky, podniky a vládní agentury.</p>" +
            "<p>Zabýváme se projekty HW řešení (čipové karty, tokeny, security modely), SW řešení OS, embedovaných systémů a jejich aplikace a komplexními zákaznickými řešeními (customizace a personalizace embed.produktů, platformy pro kontaktní a bezkontaktní služby).</p>" +
            "<p>Nabízíme možnost geografické mobility (Evropa - France, Německo; Asie - Singapore, Filipíny; Amerika - USA, ...), mezitýmové mobility a spolupráce, prostor pro dlouhodobý kariérní postup či každoroční školení.</p>" +
            "<p>Naši zaměstnanci využívají unikátní technologie (embedované bezpečnostní elementy, bezdrátové technologie, kryptografie a biometrie) a řeší široké spektrum projektů od embedovaného vývoje po rozsáhlé distribuované systémy s vysokou dostupností (zálohované clustery). Máme špičkové zákazníky a partnery jako je T-mobile, Vodafone, O2, Barclays, Microsoft, Apple, Samsung.</p></div>",
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
            name: "Ackee",
            logo: "ackee.png",
            type: "bronze",
            page: "https://www.ackee.cz/",
            description: "<p>Vznikli jsme jako parta studentů ČVUT. Každý z nás vynikal v jiné oblasti a spojoval nás zápal pro technologie. Dneska sídlíme nedaleko naší alma mater jako dospělá firma s řadou zkušeností, skvělými lidmi a se zajímavými klienty, kterým pomáháme využívat nové technologie pro jejich byznys.</p>" +
            "<div class='expandable'><p>Kdo jsme? Jsme tři zakladatelé a společně jsme stvořili Ackee. To nejdůležitější je ale náš tým grafiků, projekťáků, testerů a hlavně vývojářek a vývojářů pro mobilní zařízení, weby a backendy. Proto jim říkáme miláčci.</p>" +
            "<p>V Ackee máme pořád dveře otevřené. Bereme stážisty, juniory i seniory. Jestli není tvá pozice zrovna vypsaná, pošli nám i tak CV, třeba hledáme právě tebe. Momentálně sháníme kandidáty na pozice Android Developer, iOS Developer, Frontend Web Developer</p></div>",
            upper_skills: [],
            visit: true
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
            name: "Ataccama Software",
            logo: "atacama.png",
            type: "foreign",
            page: "https://www.ataccama.com/",
            description: "<p>Ataccama je česko-kanadská softwarová společnost, která pomáhá firmám maximálně využít potenciálu velkých dat a je významným hráčem na mezinárodním trhu v oblasti datové kvality.</p>"
            + "<div class='expandable'><p>Na technologická řešení společnosti Ataccama spoléhá více než 250 zákazníků, od velkých nadnárodních korporací po středně velké organizace napříč odvětvími, a to především v Kanadě, Spojených státech, střední a západní Evropě. Analytická společnost Gartner zařadila společnost Ataccama na prestižní Gartner Magic Quadrant v oblasti nástrojů datové kvality a master data managamentu.</p></div>",
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
            name: "Deloitte Advisory",
            logo: "deloitte.svg",
            type: "foreign",
            page: "http://www2.deloitte.com/",
            description: "<p>Jsme Deloitte. Mezinárodní firma, která je pro většinu lidí spojená s auditem či daňovým poradenstvím. Děláme ale i podnikové poradenství v nejrůznějších oblastech. Zabýváme se i IT a máme specialisty na aplikovanou analytiku či big data. Rozumíme datovým skladům a datové kvalitě. Naši experti se věnují informační bezpečnosti, IT auditu, řízení velkých IT projektů nebo využití nových digitálních technologií pro transformaci firem.</p>" +
            "<div class='expandable'><p>Máme široký záběr a zároveň umíme jít do velkého detailu. Ve výsledku se na nás obrací klienti tam, kde potřebují udělat opravdu velký skok kupředu či mají složitý problém. Řídíme implementační projekty, tvoříme datové sklady, kterým rozumí byznys uživatelé, děláme penetrační testování mobilních aplikací, implementujeme cloudová CRM nebo moderní eCommerce řešení. A také hledáme zajímavé vzory v podnikových datech a navrhujeme, jak tyto poznatky využít.</p>" +
            "<p>Každé oddělení má svůj propracovaný systém vzdělávání specificky zaměřený na danou problematiku, nabízíme množství profesních zkoušek a interních školení. Máme jasně stanovený systém hodnocení výkonu a od něj odvíjející se kariérní růst. Pracujeme na zajímavých projektech pro zajímavé klienty. V poradenství je nás více než 200, tudíž se stále máme od koho učit.</p></div>",
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
            name: "Mall.cz",
            logo: "mall.png",
            type: "foreign",
            page: "https://www.mall.cz/",
            description: "<p>Již 15 let působíme na trhu e-commerce v ČR a jsme jedním z předních e-commerce hráčů ve střední Evropě. V současné době notně investujeme do moderních skladů a technologií, které podporují náš další růst. Jsme stabilní firma, která každým rokem roste o 30%.<p>"
            + "<div class='expandable'><p>Internet Mall nabízí možnost spolupráce na dohodu o pracovní činnosti, zkrácený pracovní úvazek či hlavní pracovní poměr. Pracujeme na projektech webových stránek pro pět různých zemí postavené na nejmodernějších technologiích, Warehouse management cockpit postavený nad SAP HANA pro řízení našeho skladu, Microservice architektura, různé REST API pro mobilní aplikace, marketplace nebo online exporty nad 100.000ks zboží.</p>"
            + "<p>Nabízíme plně agilní a velmi zkušený tým, zajímavou práci v různých produktech, špičkové technologie (Oracle, SAP HANA, PHP 5.5, Angular JS, SAS, atd.), Microservice architekruta, Continuous delivery i velkou možnost kariérního růstu.</p></div>",
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
            name: "KPMG",
            logo: "kmpg.png",
            type: "foreign",
            page: "http://www.kpmg.com/",
            description: "<p>Řadíme se mezi nejvýznamnější poradenské firmy poskytující služby v oblasti auditu, daní a poradenství. Stále se rozrůstáme a hledáme talentované a ambiciózní lidi, kteří na sobě chtějí pracovat a být součástí našeho mezinárodního týmu. Hned na startu kariéry nabízíme motivující pracovní prostředí, finanční ohodnocení a zázemí silné společnosti. Budete pracovat na zakázkách pro české i zahraniční společnosti ze soukromého i veřejného sektoru. KPMG Česká republika má celkem 840 zaměstnanců a kanceláře v Praze, Brně, Ostravě a Českých Budějovicích.</p>" +
            "<div class='expandable'><p>Zabýváme se např. projekty Information Security (revize a rozvoj systému řízení informační bezpečnosti, studie v oblasti bezpečnosti), IT Security (penetrační testy, konfigurační review), Project management (řízení externích projektů, quality assurance), IT Governance (poradenství v oblasti řízení IT ve firmě) Enterprise Architecture, Business Intelligence & Data Analytics, Intellectual Property.</p>" +
            "<p>Nabízíme uplatnění pro studenty a absolventy VŠ na pracovních pozicích Assistant oddělení Auditu, Daňového poradenství, Management Consulting, Risk Consulting, Deal Advisory nebo Assistant v Advokátní kanceláři KPMG Legal. Dále nabízíme odborné stáže KPMG Internship Programme pro studenty 4. a 5. ročníků, do všech oddělení. Stáže probíhají zpravidla od září do března.</p>" +
            "<p>Zajímavá práce v prestižním a moderním oboru, příjemné prostředí mezinárodní společnosti a mladý kolektiv, možnost profesního růstu a dalšího vzdělávání, velmi dobré platové podmínky, sociální výhody, možnost práce na zkrácený úvazek.</p></div>",
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
            visit: true
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
            visit: true
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
            visit: true
        },

        {
            name: "Tipsport",
            logo: "tipsport.png",
            type: "foreign",
            page: "https://www.tipsport.jobs.cz/",
            description: "<p>Většina sázek je v dnešní době přijímána online a tak lze Tipsport označit za technologickou firmu. Naše IT oddělení je proto opravdu hýčkané. Jen náš tým developerů má 26 lidí, a protože v kurzovém sázení stále přibývají nové funkcionality i související služby, už zase je nás málo. :-)</p>"
            + "<div class='expandable'><p>Pokud naskočíš do našeho týmu, v prvních týdnech a měsících Tě čeká zaškolení pod vedením některého z našich zkušených vývojářů. Provedeme Tě zvlášť frontendovou a backendovou částí aplikace. Podle toho, co Ti bude bližší, si sám vybereš, jestli se budeš raději věnovat frontendu či backendu. Až projdeš fází zaškolení, budeš se v kooperaci s kolegy podílet na vývoji systémů, které tvoříme a optimalizujeme na vysokou zátěž a provoz s maximální dostupností, vždyť obsluhují tisíce dotazů a poskytují služby 24x7.</p>" +
            "<p>Pracujeme v neformálním a velmi přátelském kolektivu. Nabízíme možnost profesního i osobního růstu, možnost podílet se na vývoji a optimalizaci systémů stavěných na vysokou zátěž, možnost zúčastnit se odborných kurzů a školení, prostor pro sebevzdělávání a zkoumání nových technologií, možnost práce z domova, flexibilní pracovní dobu, sick days, odborné tréninky a školení a v neposlední řadě také zajímavé mzdové ohodnocení a široký systém dalších zaměstnaneckých benefitů.</p></div>",
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
            visit: true
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
            visit: true
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
            visit: true
        },

        {
            name: "Valeo",
            logo: "valeo.svg",
            type: "foreign",
            page: "http://www.valeo-czechrepublic.com/",
            description: "<p>Jsme předním dodavatelem pro automobilový průmysl. Navrhujeme inovativní produkty a systémy, které přispívají ke snižování emisí CO2, ke zlepšení výkonu vozidel a k vývoji intuitivního řízení. V roce 2014 jsme investovali přes 10% z prodeje do výzkumu a vývoje. Máme 135 výrobních závodů, 51 R&D center a zaměstnáváme 82700 lidí ve 30 zemích. V České republice je přes 3000 zaměstnanců a 3 výrobní závody, v Rakovníku, Žebráku a Humpolci, kde vyrábíme klimatizační jednotky, kompresory, výměníky tepla a kontrolní panely.</p>" +
            "<div class='expandable'><p>V R&D centru v Praze vyvíjíme i senzory a software pro autonomní auta: parkovací asistenty, kamery, automatické nouzové brzděni, hlídání mrtvého úhlu a adaptivní tempomaty. V oblasti vývoje parkovacích asistenčních systémů a integrace senzorů do automobilů je Valeo lídrem na trhu. Zabezpečujeme komplexní vývoj \"od A do Z\" - od sběru zákaznických požadavků, SW designu, HW designu, mechanického designu, elektrických testů, až po systémové testy přímo na autech na našem rozlehlém testovacím polygonu v Milovicích nebo v reálném silničním provozu.</p>" +
            "<p>Hledáme kolegyně a kolegy, které baví IT, chtějí se neustále vzdělávat, spolupracovat s kolegy v zahraničí, jsou zodpovědní a proaktivní, lidi s vizí a zapálením pro svou práci a pro moderní automobilové technologie. </p>" +
            "<p>Podílejte se na špičkových inovacích v oblasti autonomních vozidel! Nabízíme možnost rychlého vývoje kariéry a osobního růstu podpořeného technickým a jazykovým školením. Jsme „Top Employer Czech Republic 2016“ a „Zaměstnavatel Roku 2015“. Nabízíme zaměstnancům širokou škálu bonusů a benefitů, jakými jsou např. bonusy závislé na výsledcích týmu a firmy, 4 týdny dovolené + 2 týdny placeného volna, penzijní připojištění (po 1 roce trvání zaměstnáni), příspěvek na stravování nebo příspěvek na relaxační aktivity. </p></div>",
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
            visit: true
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
        }

    ];
    $.each(partners, function (e) {
        var partnersField;
        var skills = "";
        if (this.type == "gold") {
            partnersField = $('.partners-list .gold');
        } else if (this.type == "silver") {
            partnersField = $('.partners-list .silver');
        } else if (this.type == "bronze") {
            partnersField = $('.partners-list .bronze');
        } else {
            partnersField = $('');
        }
        partnersField.append('<div class="partner"><div class="border"><div class="logo">'
            + '<img alt="" src="img/partners/' + this.logo + '"/></div><div class="info">'
            + '<h4>' + this.name + '<span class="status"></span></h4></div></div></div>'
        );

        if (this.visit) {
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
                + this.name + '</h3>' + (this.description == '' ? 'Popis připravujeme' : this.description) + '</div><div class="expandable">'
                + '<ul class="skills">' + skills + '</ul>'
                + '<div class="pull-right"><a href="'
                + this.page + '" target="_blank" class="btn" title="Přejít na stránky společnosti">Stránky společnosti</a></div></div></div>');
        }
    });
}
