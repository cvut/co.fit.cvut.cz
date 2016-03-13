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

    $('#gallery').slideme({
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

    $('.expandable-container').click(function (e) {
        var elementToHide = $(this).parent().find('.expanded');
        var elementToShow = $(this).find('.expandable');
        var descriptionToShow = $(this).find('.description');
        if (!$(this).hasClass('expanded')) {
            elementToShow.addClass('expanded');
            descriptionToShow.addClass('expanded');
        }
        elementToHide.removeClass('expanded');
        $('.expandable').not('.expanded').slideUp('slow');
        $('.expanded').slideDown('slow');
    });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, function () {
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

function initPartners() {
    partners = [
        {
            name: "Profinit",
            logo: "profinit.png",
            type: "gold",
            page: "http://www.profinit.eu/",
            description: "<p>Společnost PROFINIT je členem nadnárodní skupiny New Frontier Group, která je leadrem v oblasti digitální transformace organizací a firem ve střední a východní Evropě. S více než 2000 zaměstnanci v 17 zemích jsme také jedním z deseti největších poskytovatelů ICT služeb v celém CEE regionu a patříme ke špičce v oblasti vývoje SW na zakázku, data managementu, datových skladů a business intelligence. Jako jediní máme místní know-how nepřenesené z USA či jiných vzdálených trhů. Pokrýváme klíčové oblasti přímých kanálů, self-care, online prodeje, podpory a řízení obchodní, agentské a pobočkové sítě, marketingu, financí, sociálních sítí či fraudu. Dlouhodobě spolupracujeme se společnostmi Informatica, IBM, EMC, Oracle, Liferay, Microsoft, Sybase, Talend, SAP, Kentico, SuccessFactors a také s ČVUT (FIT) a Marketingovým institutem.</p>" +
            "<p class='expandable'>Profinit je garantem semestrálních předmětů na ČVUT a MFF UK. Dlouhodobě s univerzitami spolupracujeme v oblastech pokročilého zpracování dat, data analytics, syntaktické a sémantické analýze kódu či konceptuálních modelů. Naši odborníci předměty vyučují i cvičí. Mimo společných výzkumných projektů nabízíme také zajímavá témata v podobě semestrálních projektů, diplomových a bakalářských prací. Příkladem úspěšné spolupráce jsou naše produktové řady Manta tools a SVAT.</p>" +
            "<p class='expandable'>Společně s nejprestižnějšími českými a slovenskými technickými vysokými školami a pod záštitou mezinárodní odborné organizace ACM organizujeme soutěž ACM SPY, ve které odborná porota vybírá nejlepší diplomovou práci z oblasti informatiky a informačních technologií. Cílem soutěže je podpořit talentované studenty v jejich studiu a výzkumu a pomoci jim uplatnit tuto snahu i výsledky v praxi.</p>" +
            "<p class='expandable'>Spolupráce s vysokými školami je pro nás zdrojem inovace, inspirace a samozřejmě také talentu. My na oplátku předáváme své dlouholeté zkušenosti mladým lidem.</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Lely",
            logo: "lely.png",
            type: "gold",
            page: "http://www.lely.com/",
            description: "<p>Our area is innovation in agriculture, we use artificial intelligence techniques to make farms more profitable and durable, and farmer’s life easier and more enjoyable. Our most know invention is automated milking robot (Lely Astronaut). However, we supply the agricultural sector with a complete portfolio of products and services ranging from milking robots, automated feeding systems and barn cleaners to forage harvesting. Lely is active in more than 60 countries and employs some 2,000 people.</p>" +
            "<p class='expandable'> In cooperation with FIT CTU we mainly work on AI projects. That includes machine learning techniques to improve robot behavior or data mining and data science techniques to extract information from robots data. It is not only about the work it is about passion to do to something new and innovative.</p>" +
            "<p class='expandable'> We offer assignments for graduate as well as undergraduate students through Portal for Cooperation with Industry (SSP).</p>",
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
            name: "Suse",
            logo: "suse.svg",
            type: "silver",
            page: "https://www.suse.com/",
            description: "<p>Established in 1992, SUSE, now part of Micro Focus, is the original provider of the enterprise Linux distribution and the most interoperable platform for mission-critical computing. With a portfolio centered around SUSE Linux Enterprise, we power thousands of organizations around the world across physical, virtual and cloud environments. Through our continued commitment to the highest quality Linux support and innovative products, SUSE grew more than threefold after it was acquired by Novell in 2004. Now operating as an independent business of Micro Focus International, SUSE continues its unwavering focus on the benefits of open source and the needs of its commercial partners and customers.</p>" +
            "<p class='expandable'>Why join SUSE? You work for the world's fastest-growing, enterprise Linux company. You're a member of a team engineering the most reliable, interoperable, enterprise Linux and cloud infrastructure solutions.You're part of an organization with world-class services and support.</p>" +
            "<p class='expandable'>Do you need more reason why to join? Open Source is in our Genes, we ARE Enterprise Linu,. results matter, we invest in being innovative and YOU matter!</p>" +
            "<p class='expandable'>This year, we are celebrating our 22nd anniversary. Not many technology companies can say that. We're proud of what we've done so far. And there's more to come.</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Mikenopa",
            logo: "mikenopa.png",
            type: "silver",
            page: "http://www.mikenopa.com/",
            description: "",
            upper_skills: [],
            visit: false
        },

        {
            name: "HP",
            logo: "hp.svg",
            type: "silver",
            page: "http://www.hp.com/",
            description: "<p>V současnosti se nacházíme na dlouholeté cestě s cílem zlepšit situaci ve společnosti HP a vytvořili jsme plán, který pomůže obnovit růst naší společnosti. Víme, kam se potřebujeme dostat, a již dnes dosahujeme pokroků.</p>" +
            "<p class='expandable'>Nadále podporujeme inovaci produktů na našich klíčových trzích a soustředíme se na cloudové technologie, zabezpečení a velkoobjemová datová úložiště.</p>" +
            "<p class='expandable'>Vidíme před sebou velké příležitosti a jsme připraveni se jich chopit s pomocí nejen širokého portfolia našich produktů a služeb, ale především zkušeností. Máme zkušené odborníky, stanovený plán a solidní základy, které nám pomohou uspět v další fázi naší cesty.</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Komerční banka",
            logo: "kb.png",
            type: "silver",
            page: "http://www.kb.cz/",
            description: "<p>Komerční banka, a.s. patří mezi přední bankovní instituce v České republice a v regionu střední a východní Evropy. Je univerzální bankou se širokou nabídkou služeb v oblasti retailového, podnikového a investičního bankovnictví. V aktuální době nabízí služby pro zhruba 1,6 milionu klientů, které obsluhuje na stovkách poboček a skrz nejrůznější digitální kanály.</p>" +
            "<p class='expandable'>Zabýváme se velkými transformačními programy či komplexním vývojem bankovních systémů a internetového (a mobilního) bankovnictví. Dále také inovativními přístupy a nápady pro zkvalitnění zákaznické zkušenosti jako např. zjednodušení práce s platbami, využívání chytrých zařízení (smartwatch), lepší práce s velkými daty (Big Data) nebo hledání nových scénářů pro bankovní a finanční služby (Google Wallet nebo Apple Pay).</p>" +
            "<p class='expandable'>Talentovaní studenti mají možnost se zúčastnit integračního a rozvojového programu Connecting a Connecting +. Poznají zde sami sebe a zároveň také fungování banky z odlišných pohledů (finance, marketing, HR, Risk a Distribuce). V průběhu kariérního postupu nabízíme mnoho školení jak v oblasti technických dovedností, tak v soft skills.</p>" +
            "<p class='expandable'>Díky stabilnímu prostředí velké organizace a široké škále využívaných a provozovaných technologií, metodik a produktů se v KB mohou uplatit studenti nejrůznějších zaměření. Dokážeme nabídnout široké spektrum témat od serverové virtualizace či IT architektury až po témata zabývající se digitálním marketingem nebo sociálními sítěmi. V rámci naší IT Inovační laboratoře již teď působí řada studentů ČVUT, kteří obhájili nebo zpracovávají diplomové práce zaměřené na praktickou aplikovatelnost jejich výsledku. Pokud máte zájem se o našem týmu a nabízených příležitostech dozvědět více, neváhejte nás kontaktovat u našeho kiosku na Co@FITu!</p>",
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
            "<p class='expandable'>Absolventi představují pro naši společnost silný náboj, provzdušnění, oživení svým nadšením, spontaneitou a neotřelými úhly pohledu na věc. V České pojišťovně pracuje řada zaměstnanců, kteří se v mnoha případech vypracovali z pozic čerstvých absolventů na pozice specialistů a lídrů. Jsme si jako moderní společnost vědomi potenciálu, který v zaměstnávání absolventů dřímá. Dáváme absolventům rádi šanci, kdykoli je to jen trochu možné. Když se jí rádi chopí a využijí ji, pak vzniká synergie, která je nesmírně obohacující.</p>",
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
            name: "SWATCH group",
            logo: "asicentrum.png",
            type: "bronze",
            page: "http://www.asicentrum.cz/",
            description: "<p>The Swatch Group Ltd is an international group producing and selling watches, jewellery, watch movements and components. The Swatch Group has a unique emotional culture. Beauty, sensuality, emotions in watches are as much part of it as high-tech, quality  and added value on the customer's wrist. Both, emotional poetry and innovation play an active part in the commitment to its customers.</p>" +
            "<p class='expandable'>The Swatch Group was founded in 1983 and since the time shown steady growth. Today, the Group employs over 35.000 persons in fifty countries. Swatch Group's 2014 gross sales amounted to a record number of CHF 9 219 millions.</p>" +
            "<p class='expandable'>EM Microelectronic, Swiss semiconductor manufacturer of the Swatch Group, is focused on the design and production of ultra-low power, low voltage integrated circuits for battery-operated and field-powered applications. It has 40 years of experience in the design of IC processing analog and digital signals simultaneously.</p>" +
            "<p class='expandable'>ASICentrum, established in 1992 in Prague, Czech Republic, is a design center of EM Microelectronic. The team of designers is highly experienced in the submicron design technologies of ultra-low power, low voltage silicon chips, in the development of embedded software and various applications related to mobile devices and wireless communication. ASICentrum has long tradition in cooperation with many Czech technical universities.</p>" +
            "<p class='expandable'>We offer permanent (full-time employment) or internship (part-time job) for students and thesis entering.</p>",
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
                {department: "Cizí jazyky", skills: ["Angličtina", "Francouzština"]},
            ],
            visit: true
        },

        {
            name: "Barclays",
            logo: "barclays.svg",
            type: "bronze",
            page: "http://www.barclays.co.uk/",
            description: "<p>Barclays is a British multinational banking & financial services company headquartered in London. It is a universal bank with operations in retail, wholesale and investment banking, as well as wealth management, mortgage lending and credit cards. It has operations in over 50 countries and territories and has around 48 million customers. Barclays is organised into four core business: Personal & Corporate (Personal Banking, Corporate Banking, Wealth & Investment Management), Barclaycard, Investment Banking and Africa.</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Gemalto",
            logo: "gemalto.svg",
            type: "bronze",
            page: "http://www.gemalto.com/",
            description: "<p>Společnost Gemalto je světový lídr v oblasti digitálního zabezpečení a největší světový výrobce komplexních digitálních a čipových karet. Gemalto má přes 14 000 zaměstnanců v 45 zemích. Pražská pobočka má v současné době 300 zaměstnanců.</p>" +
            "<p class='expandable'>Mezi naše produkty patří např. kreditní/debetní a bezkontaktní platební karty, osobní mobilní služby, ochrana identity, zabezpečení plateb, ověřování on-line služeb, cloud computing pro přístup, e-zdravotnictví a služby e-governmentu (cestovní pasy a občanské průkazy), moduly pro M2M.</p>" +
            "<p class='expandable'> Poskytujeme zabezpečovací software, širokou škálu bezpečnostních osobních zařízení a řízených služeb pro mnohé přední světové mobilní operátory, banky, podniky a vládní agentury.</p>" +
            "<p class='expandable'>Zabýváme se projekty HW řešení (čipové karty, tokeny, security modely), SW řešení OS, embedovaných systémů a jejich aplikace a komplexními zákaznickými řešeními (customizace a personalizace embed.produktů, platformy pro kontaktní a bezkontaktní služby).</p>" +
            "<p class='expandable'>Nabízíme možnost geografické mobility (Evropa - France, Německo; Asie - Singapore, Filipíny; Amerika - USA, ...), mezitýmové mobility a spolupráce, prostor pro dlouhodobý kariérní postup či každoroční školení.</p>" +
            "<p class='expandable'>Naši zaměstnanci využívají unikátní technologie (embedované bezpečnostní elementy, bezdrátové technologie, kryptografie a biometrie) a řeší široké spektrum projektů od embedovaného vývoje po rozsáhlé distribuované systémy s vysokou dostupností (zálohované clustery). Máme špičkové zákazníky a partnery jako je T-mobile, Vodafone, O2, Barclays, Microsoft, Apple, Samsung.</p>",
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
            "<p class='expandable'>Kdo jsme? Jsme tři zakladatelé a společně jsme stvořili Ackee. To nejdůležitější je ale náš tým grafiků, projekťáků, testerů a hlavně vývojářek a vývojářů pro mobilní zařízení, weby a backendy. Proto jim říkáme miláčci.</p>" +
            "<p class='expandable'>V Ackee máme pořád dveře otevřené. Bereme stážisty, juniory i seniory. Jestli není tvá pozice zrovna vypsaná, pošli nám i tak CV, třeba hledáme právě tebe. Momentálně sháníme kandidáty na pozice Android Developer, iOS Developer, Frontend Web Developer</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Nangu.TV",
            logo: "nangu.svg",
            type: "bronze",
            page: "http://nangu.tv/",
            description: "<p>nangu.TV je česká softwarová firma zabývající se vývojem kompletního řešení pro IPTV a OTT multimediální platformy, která se v tomto velmi dynamickém odvětví pohybuje už více než 10 let a vybudovala si pozici leadra trhu. Úspěšně expandujeme i do zahraničí, pravidelně se účastníme nejvýznamnějších veletrhů v Evropě a napříč našimi zákazníky evidujeme více než půl milionu zařízení připojených k nangu.TV platformě.</p>" +
            "<p class='expandable'>Na našem IPTV/OTT řešení jsou postavené úspěšné služby jako O2TV. Platformu dále využívají mj. český T-Mobile, slovenský Orange a můžeme se pochlubit i instalacemi v Polsku, Srbsku, Švýcarsku nebo Lucembursku. nangu.TV umožňuje operátorům a poskytovatelům internetových služeb obohatit jejich stávající nabídku o interaktivní televizní zážitek. K základním nabízených funkcionalitám patří sledování pořadů i několik týdnů zpětně (timeshift), možnost si program na chvíli zastavit, videotéka, konzumace video obsahu na různých zařízeních jako jsou TV, mobilní telefony, tablety nebo PC (tzv. Multiscreen) a mnoho dalšího. Komponenty si vyvíjíme sami „in-house“ a jsme tak schopni dodat end-2-end řešení, čímž se odlišujeme od většiny našich konkurentů.</p>" +
            "<p class='expandable'>Mimojiné nabízíme rozvojové aktivity jako účast na odborných školeních/kurzech, účast na konferencích, jazykové kurzy, soft skills kurzy, možný kariérní posun v rámci týmu i firmy. Jsme otevřeni nápadům zaměstnanců jak z hlediska osobního, tak pracovního rozvoje.</p>" +
            "<p class='expandable'>Důvody, proč chtít být součástí našeho týmu, nejlépe vystihuje nadšení našich zaměstnanců:</p>" +
            "<p class='expandable'>" + '"Kód, který dnes napíšu, bude zanedlouho denně používat statisíce lidí. Mám možnost zásadním způsobem ovlivňovat finální produkt." -- Tomáš Tichý, Front-end team leader' + "</p>" +
            "<p class='expandable'>" + '"Baví mě diskutovat nad code review - v takto rozsáhlém systému se kód častěji čte než píše." -- Matěj Laitl, Back-end team leader' + "</p>" +
            "<p class='expandable'>" + '"Líbí se mi, že to není jen o práci, ale také o tom kolektivu. Pořád je nějaká akce, grilovačka, fotbálek, pivko, stále se něco děje." -- Jindřich Hulín-Mihalec, Frond-End vývojář' + "</p>",
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
            name: "Alza.cz",
            logo: "alza.png",
            type: "foreign",
            page: "https://www.alza.cz/",
            description: "<p>Pět eshopů. Šest mobilních aplikací. 45 prodejen u nás i na Slovensku. 27 AlzaBoxů pro výdej zboží po celé republice. Expanze do celé Evropy. Obrovské logistické centrum VGP v Horních Počernicích. Za 20 let jsme ušli obrovský kus cesty. Z malé prodejny v Dělnické až do unikátních kancelářích Hall Office. Pražským Holešovicím jsme zůstali věrni. Stejně jako našim hodnotám a neformální, přátelské atmosféře.</p>" +
            "<p class='expandable'>Mezi naše projekty patří AlzaBoxy, kterými tak nabízíme jedinečný servis zákazníkům. Logistické procesy v našem centrálním skladu jsou napojeny na vlastní softwarové řešení. Řešíme optimalizaci skladových pohybů, automatizaci, plánování rozvážek apod. Intenzivně se zaměřujeme na vývoj mobilních aplikací. Prošlapujeme cestičky pohodlného nákupu na platformách iOS, Android a Windows Phone. Věnujeme se vývoji vlastního firemního IS s více než 130 moduly a SW aplikace pro zákazníky. Také se zabýváme zdokonalováním vyvolávání zakázek při výdeji zboží, platebními automaty PayBox.</p>" +
            "<p class='expandable'>Nabízíme spolupráci na zajímavých projektech, možnost osobní seberealizace i profesního růstu. Využíváme nejmodernějších technologií. Pracujeme v týmech vývoje IS, vývoje webových a mobilních aplikací, IT administrátorů a internetového marketingu. Naleznete u nás zkušené kolegovy a profesionály v oboru. Možnost spolupráce na zkrácené úvazky, práci v týmech a po ukončení VŠ možnost nastoupit na hlavní pracovní poměr.</p>",
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
            visit: true
        },

        {
            name: "Ataccama Software",
            logo: "atacama.png",
            type: "foreign",
            page: "https://www.ataccama.com/",
            description: "<p>Ataccama je česko-kanadská softwarová společnost, která pomáhá firmám maximálně využít potenciálu velkých dat a je významným hráčem na mezinárodním trhu v oblasti datové kvality.</p>"
            + "<p class='expandable'>Na technologická řešení společnosti Ataccama spoléhá více než 250 zákazníků, od velkých nadnárodních korporací po středně velké organizace napříč odvětvími, a to především v Kanadě, Spojených státech, střední a západní Evropě. Analytická společnost Gartner zařadila společnost Ataccama na prestižní Gartner Magic Quadrant v oblasti nástrojů datové kvality a master data managamentu.</p>",
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
            name: "Cesnet",
            logo: "cesnet.png",
            type: "foreign",
            page: "https://www.cesnet.cz/",
            description: "<p>CESNET je sdružení vysokých škol a Akademie věd  České republiky, které provozuje a rozvíjí národní e-infrastrukturupro vědu, výzkum a vzdělávání zahrnující počítačovou síť,výpočetní gridy, datová úložiště, prostředí pro spolupráci a nabízející širokou škálu služeb.</p>" +
            "<p class='expandable'>Důležitou složkou činnosti sdružení je výzkum a vývoj v oblasti pokročilých síťových technologií a aplikací, jehož výsledky uplatňujeme při rozvoji e-infrastruktury. Tyto aktivity probíhají zejména formou projektů.</p>" +
            "<p class='expandable'>V oblasti výzkumu se zabýváme především tématy rozvoje sítě národního výzkumu a vzdělávání, optickými sítěmi, nástroji pro monitoring a konfiguraci, sledováním infrastruktury a provozu sítě, technologiemi pro síťové aplikace, AAI a mobilitou, MetaCentrum, multimediálními přenosy a kolaborativní prostředí, CESNET CSIRT či podporou aplikací.</p>",
            upper_skills: [],
            visit: true
        },

        {
            name: "Deloitte Advisory",
            logo: "deloitte.svg",
            type: "foreign",
            page: "http://www2.deloitte.com/",
            description: "<p>Jsme Deloitte. Mezinárodní firma, která je pro většinu lidí spojená s auditem či daňovým poradenstvím. Děláme ale i podnikové poradenství v nejrůznějších oblastech. Zabýváme se i IT a máme specialisty na aplikovanou analytiku či big data. Rozumíme datovým skladům a datové kvalitě. Naši experti se věnují informační bezpečnosti, IT auditu, řízení velkých IT projektů nebo využití nových digitálních technologií pro transformaci firem.</p>" +
            "<p class='expandable'>Máme široký záběr a zároveň umíme jít do velkého detailu. Ve výsledku se na nás obrací klienti tam, kde potřebují udělat opravdu velký skok kupředu či mají složitý problém. Řídíme implementační projekty, tvoříme datové sklady, kterým rozumí byznys uživatelé, děláme penetrační testování mobilních aplikací, implementujeme cloudová CRM nebo moderní eCommerce řešení. A také hledáme zajímavé vzory v podnikových datech a navrhujeme, jak tyto poznatky využít.</p>" +
            "<p class='expandable'>Každé oddělení má svůj propracovaný systém vzdělávání specificky zaměřený na danou problematiku, nabízíme množství profesních zkoušek a interních školení. Máme jasně stanovený systém hodnocení výkonu a od něj odvíjející se kariérní růst. Pracujeme na zajímavých projektech pro zajímavé klienty. V poradenství je nás více než 200, tudíž se stále máme od koho učit.</p>",
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
            + "<p class='expandable'>Internet Mall nabízí možnost spolupráce na dohodu o pracovní činnosti, zkrácený pracovní úvazek či hlavní pracovní poměr. Pracujeme na projektech webových stránek pro pět různých zemí postavené na nejmodernějších technologiích, Warehouse management cockpit postavený nad SAP HANA pro řízení našeho skladu, Microservice architektura, různé REST API pro mobilní aplikace, marketplace nebo online exporty nad 100.000ks zboží.</p>"
            + "<p class='expandable'>Nabízíme plně agilní a velmi zkušený tým, zajímavou práci v různých produktech, špičkové technologie (Oracle, SAP HANA, PHP 5.5, Angular JS, SAS, atd.), Microservice architekruta, Continuous delivery i velkou možnost kariérního růstu.</p>",
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
            visit: true
        },

        {
            name: "KPMG",
            logo: "kmpg.png",
            type: "foreign",
            page: "http://www.kpmg.com/",
            description: "<p>Řadíme se mezi nejvýznamnější poradenské firmy poskytující služby v oblasti auditu, daní a poradenství. Stále se rozrůstáme a hledáme talentované a ambiciózní lidi, kteří na sobě chtějí pracovat a být součástí našeho mezinárodního týmu. Hned na startu kariéry nabízíme motivující pracovní prostředí, finanční ohodnocení a zázemí silné společnosti. Budete pracovat na zakázkách pro české i zahraniční společnosti ze soukromého i veřejného sektoru. KPMG Česká republika má celkem 840 zaměstnanců a kanceláře v Praze, Brně, Ostravě a Českých Budějovicích.</p>" +
            "<p class='expandable'>Zabýváme se např. projekty Information Security (revize a rozvoj systému řízení informační bezpečnosti, studie v oblasti bezpečnosti), IT Security (penetrační testy, konfigurační review), Project management (řízení externích projektů, quality assurance), IT Governance (poradenství v oblasti řízení IT ve firmě) Enterprise Architecture, Business Intelligence & Data Analytics, Intellectual Property.</p>" +
            "<p class='expandable'>Nabízíme uplatnění pro studenty a absolventy VŠ na pracovních pozicích Assistant oddělení Auditu, Daňového poradenství, Management Consulting, Risk Consulting, Deal Advisory nebo Assistant v Advokátní kanceláři KPMG Legal. Dále nabízíme odborné stáže KPMG Internship Programme pro studenty 4. a 5. ročníků, do všech oddělení. Stáže probíhají zpravidla od září do března.</p>" +
            "<p class='expandable'>Zajímavá práce v prestižním a moderním oboru, příjemné prostředí mezinárodní společnosti a mladý kolektiv, možnost profesního růstu a dalšího vzdělávání, velmi dobré platové podmínky, sociální výhody, možnost práce na zkrácený úvazek.</p>",
            upper_skills: [
                {
                    department: "Soft skills",
                    skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                },
                {department: "Cizí jazyky", skills: ["Angličtina"]}
            ],
            visit: true
        },

        {
            name: "OldanyGroup",
            logo: "oldany.png",
            type: "foreign",
            page: "http://www.oldanygroup.cz/",
            description: "<p>OldanyGroup se zabývá již řadu let moderními a inovativními technologiemi v oblasti ICT. Poskytujeme cloudové služby, komplexní správu systémů a poradenství. Obstaráváme komplexní řešení od analýzy a návrhu, přes implementaci až po kontinuální správu celého systému. Nejsme velká korporace, kde se proaktivní zaměstnanec ztratí v davu. Vítáme všechny nové nápady a rádi budeme u zrodu velkých projektů.</p>"
            + "<p class='expandable'>V oblasti ICT se zabýváme kromě dodávky HW a SW službami jako je komplexní řešení projektů virtualizace infrastruktury se zaměřením na virtuální desktopovou infrastrukturu, poskytování cloudových služeb (IaaS, PaaS a BaaS). Dále komplexní správou systémů - kontinuální správa počítačových systémů (Linux, Windows, VMware), vč. nonstop dohledu, podpory uživatelů. Řešíme návrhy a konzultace k řešením v oblasti ICT, nasazení OS Windows, Linux a VMware vSphere; vysoká dostupnost dat a systémů; rozložení zátěže – load balancing; virtuální serverová a desktopová infrastruktura, hostování aplikací v cloudu.</p>"
            + "<p class='expandable'>Nabízíme spolupráci na projektu webové a mobilní aplikace pro evidenci docházky Frekr. Správa cloud computingové služby, která umožňuje jednotlivcům i firmám pronajmout si libovolný počet virtuálních serverů a spravovat je přes jednoduché webové rozhraní Beescale. Vlastní produkt tenký klient TiCtOG, který slouží nejen pro potřeby řešení virtuální desktopové infrastruktury (VDI) a terminálového přístupu.</p>",
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
            visit: true
        },

        {
            name: "Teleport",
            type: "foreign",
            page: "http://goo.gl/mDnrUW",
            description: "<p>Teleport je rozvojový projekt, který si klade za cíl podpořit podnikavého ducha a globální ambice českých vysokoškolských studentů (převážně z oborů ICT a designu) jejich vysíláním na stáže do startupů v Silicon Valley. Teleport připraví zájemce na pohovor s vybranými startupy, zprostředkuje pracovní stáž, zprocesuje a zaplatí pracovní vízum, zorganizuje komplexní program během pobytu v Silicon Valley (meetupy s podnikateli a tamní česko-slovenskou komunitou, kalendář akcí, návštěvy technologických společností jako Google či Facebook) a v případě zájmu dodá podporu (mentoring, poradentsví) i po návratu do ČR. Naším cílem je vytvořit příští generaci podnikatelů a business lídrů světového kalibru.</p>" +
            "<p class='expandable'>Teleport nabízí jedinečnou příležitost působit v jedné z nejdynamičtějších a nejinovativnějsích oblastí světa. Mimo práci bude mít stážista nespočet příležitostí navštěvovat různé vzdělávací a networkingové akce, pravidelně se setkávat s česko-slovenskou podnikatelskou komunitou v Silicon Valley, utvářet si vlastní  network složený z předních podnikatelů, inovátorů, investorů a dalších profesionálů, zúčastnit se kurzů na Stanfordu a UC Berkeley, získávat informace o nejnovějších technologických trendech, čerpat inspirace pro vlastní podnikání.</p>" +
            "<p class='expandable'>V oblasti ICT technologické startupy v Silicon Valley vyhledávají stážisty na plný úvazek převážně na pozice front-end vývojář, back-end vývojář, full-stack vývojář, mobilní vývojář, inženýr mechaniky, inženýr robotiky a data scientist. Konkretní náplň práce bude záviset na zaměření daného startupu a jeho potřebách a bude součástí tzv. stážového plánu, na kterém se shodne stážista se startupem.</p>" +
            "<p class='expandable'>Absolventi Teleportu se stanou součástí prestižního networku, kterému bude nadále poskytována podpora pro jejich budoucí rozvoj. Budou mít jedinečnou startovací pozici začít svůj vlastní business či získat pracovní nabídky od nejprestižnějších technologických firem.</p>",
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
            visit: true
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
                + this.type + ' expandable-container"><div class="logo">'
                + (this.logo == null ? '<h3>' + this.name + '</h3>' : '<img src="img/partners/' + this.logo + '"/>')
                + '</div><div class="description"><h3 style="display: none;">'
                + this.name + '</h3>' + this.description + '</div><div class="expandable">'
                + '<ul class="skills">' + skills + '</ul>'
                + '<div class="pull-right"><a href="'
                + this.page + '" target="_blank" class="btn" title="Přejít na stránky společnosti">Stránky společnosti</a></div></div></div>');
        }
    });
}
