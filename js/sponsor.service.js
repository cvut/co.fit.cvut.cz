(function (angular) {
    angular.module("app").service("SponsorService", function () {
        var goldSponsors = [
            {
                name: "EmbedIT",
                logo: "embedit.png",
                type: "gold",
                sponsor: true,
                page: "https://www.embedit.cz/Career",
                description: "EmbedIT is a 100% Czech IT Centre that provides IT services including design and support to Home Credit Group and Air Bank (PPF Group). Our internally designed and developed applications serve over 45 million customers in 11 countries, including Russia, China or United States. Production Services team manages 20 data centers worldwide with a volume of more than 200 million transactions per day produced in network of over 187 thousand points of sale, loan offices, branches and post offices. Our team of more than 800+ professionals is located in 3 Czech cities: Prague, Brno, and Ostrava.",
                visit: false
            }
        ];
        var silverSponsors = [
            {
                name: "Česká pojišťovna",
                logo: "ceskapojistovna.png",
                type: "silver",
                sponsor: true,
                page: "http://ceskapojistovna.jobs.cz/studenti-a-absolventi/",
                description: "Jsme největší pojišťovnou na českém pojistném trhu s více než 185letou bohatou tradicí. Poskytujeme jak individuální životní a neživotní pojištění, tak i pojištění pro malé, střední a velké klienty v oblasti průmyslových, podnikatelských rizik a zemědělství. Přibližně 3900 zaměstnanců a 5600 obchodních zástupců se na více než 4500 obchodních místech stará o maximální spokojenost klientů. Česká pojišťovna spravuje téměř osm milionů pojistných smluv a její tržní podíl na domácím trhu dosahuje 23,9 procent.",
                extendedDescription: "<p>Absolventi představují pro naši společnost silný náboj, provzdušnění, oživení svým nadšením, spontaneitou a neotřelými úhly pohledu na věc. V České pojišťovně pracuje řada zaměstnanců, kteří se v mnoha případech vypracovali z pozic čerstvých absolventů na pozice specialistů a lídrů. Jsme si jako moderní společnost vědomi potenciálu, který v zaměstnávání absolventů dřímá. Dáváme absolventům rádi šanci, kdykoli je to jen trochu možné. Když se jí rádi chopí a využijí ji, pak vzniká synergie, která je nesmírně obohacující.</p>",
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
            }
        ];
        var bronzeSponsors = [
            {
                name: "Gemalto",
                logo: "gemalto.svg",
                type: "bronze",
                sponsor: true,
                page: "http://www.gemalto.com/companyinfo/careers",
                description: "Gemalto je světový lídr v oblasti digitálního zabezpečení a největší světový výrobce komplexních digitálních a čipových karet. Má přes 14 000 zaměstnanců v 45 zemích. Mezi naše produkty patří kreditní/debetní a bezkontaktní platební karty, osobní mobilní služby, ochrana identity, zabezpečení plateb, ověřování on-line služeb, cloud computing pro přístup, e-zdravotnictví a služby e-governmentu (cestovní pasy a občanské průkazy), moduly pro M2M.",
                extendedDescription: "<p>Poskytujeme zabezpečovací software, bezpečnostní osobní zařízení a řízení služeb pro mnohé přední světové mobilní operátory, banky, podniky a vládní agentury. Zabýváme se projekty HW řešení (čipové karty, tokeny, security modely), SW řešení OS, embedovaných systémů a jejich aplikace a komplexními zákaznickými řešeními (customizace a personalizace embed.produktů, platformy pro kontaktní a bezkontaktní služby). Nabízíme možnost geografické mobility (Francie, Německo, Singapore, Filipíny, USA), mezitýmové mobility a spolupráce, prostor pro dlouhodobý kariérní postup či každoroční školení. Naši zaměstnanci využívají unikátní technologie (embedované bezpečnostní elementy, bezdrátové technologie, kryptografie a biometrie) a řeší široké spektrum projektů od embedovaného vývoje po rozsáhlé distribuované systémy s vysokou dostupností (zálohované clustery). Máme špičkové zákazníky a partnery jako je T-mobile, Vodafone, O2, Barclays, Microsoft, Apple a Samsung.</p>",
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
            }, {
                name: "Nangu.TV",
                logo: "nangu.svg",
                type: "bronze",
                sponsor: true,
                page: "http://nangu.tv/jobs/",
                description: "Nangu.TV je česká softwarová firma zabývající se vývojem kompletního řešení pro IPTV a OTT multimediální platformy, která se v tomto velmi dynamickém odvětví pohybuje už více než 10 let a vybudovala si pozici leadra trhu. Úspěšně expandujeme i do zahraničí, pravidelně se účastníme nejvýznamnějších veletrhů v Evropě a napříč našimi zákazníky evidujeme více než půl milionu zařízení připojených k nangu.TV platformě. Na našem IPTV/OTT řešení jsou postavené úspěšné služby jako O2TV. Platformu dále využívají mj. český T-Mobile, slovenský Orange a můžeme se pochlubit i instalacemi v Polsku, Srbsku, Švýcarsku nebo Lucembursku.",
                extendedDescription: "<p>Nangu.TV umožňuje operátorům a poskytovatelům internetových služeb obohatit jejich stávající nabídku o interaktivní televizní zážitek. K základním nabízených funkcionalitám patří sledování pořadů i několik týdnů zpětně (timeshift), možnost si program na chvíli zastavit, videotéka, konzumace video obsahu na různých zařízeních jako jsou TV, mobilní telefony, tablety nebo PC (tzv. Multiscreen). Komponenty si vyvíjíme sami „in-house“ a jsme tak schopni dodat end-2-end řešení, čímž se odlišujeme od většiny našich konkurentů. Nabízíme rozvojové aktivity jako účast na odborných školeních/kurzech, účast na konferencích, jazykové kurzy, soft skills kurzy, možný kariérní posun v rámci týmu i firmy. Jsme otevřeni nápadům zaměstnanců jak z hlediska osobního, tak pracovního rozvoje.</p>" +
                "<p>Důvody, proč chtít být součástí našeho týmu, nejlépe vystihuje nadšení našich zaměstnanců:</p>" +
                "<p>" + '"Kód, který dnes napíšu, bude zanedlouho denně používat statisíce lidí. Mám možnost zásadním způsobem ovlivňovat finální produkt." -- Tomáš Tichý, Front-end team leader' + "</p>" +
                "<p>" + '"Baví mě diskutovat nad code review - v takto rozsáhlém systému se kód častěji čte než píše." -- Matěj Laitl, Back-end team leader' + "</p>" +
                "<p>" + '"Líbí se mi, že to není jen o práci, ale také o tom kolektivu. Pořád je nějaká akce, grilovačka, fotbálek, pivko, stále se něco děje." -- Jindřich Hulín-Mihalec, Frond-End vývojář' + "</p>",
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
            },{
                name: "Ataccama Software",
                logo: "atacama2017.png",
                type: "bronze",
                sponsor: true,
                page: "https://jobs.ataccama.com",
                description: "Ataccama je česko-kanadská softwarová společnost, která pomáhá firmám maximálně využít potenciálu Big Data a je významným hráčem na mezinárodním trhu v oblasti datové kvality. Na technologická řešení společnosti Ataccama spoléhá více než 250 zákazníků, od velkých nadnárodních korporací po středně velké organizace napříč odvětvími, a to především v Kanadě, Spojených státech, střední a západní Evropě. Analytická společnost Gartner zařadila společnost Ataccama na prestižní Gartner Magic Quadrant v oblasti nástrojů datové kvality a master data managamentu.",
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
            },{
                name: "Randstad s.r.o.",
                logo: "randstad.png",
                type: "bronze",
                sponsor: true,
                page: "https://www.randstad.cz/pridejte-se-k-nam/",
                description: "Svět práce se vyvíjí a my s ním. Utváříme ho, aby byl lepším místem jak pro zaměstnance, tak pro firmy, které jim dávají práci. Poskytneme vám podporu během celého procesu a pomůžeme vám najít vysněnou práci. Dosadit toho správného člověka na tu správnou pozici je základem veškeré naší činnosti. Naším cílem a posláním je propojovat firmy s talenty.",
                extendedDescription: "<p>Spolupracujeme s celou řadou atraktivních zaměstnavatelů, kteří stále hledají vhodné specialisty na rozličné technické pozice. V tuto chvíli dodáváme nejvíce zaměstnanců do společností působících v oblastech Automotive, Engineering, IT, Finance, Logistika a FMCG. Stále studujete nebo jste úspěšně studium ukončili a hledáte své první uplatnění? Ať už jste při škole získali nějaké zkušenosti nebo jste na trhu práce úplným nováčkem, můžeme vám pomoci najít cestu k vaší vysněné práci! </p>" +
                "<p>V globálním měřítku tvoří 80 % managementu lidé, kteří u nás kariérně vyrostli. Klademe velký důraz na rozvoj našich zaměstnanců, naše konzultanty vzděláváme, aby mohli být rovnocennými partnery našich klientů a stát se skutečnými experty ve svém oboru. V Randstadu si zakládáme na otevřené a přátelské kultuře a pro naše zaměstnance vytváříme kreativní a inspirující pracovní prostředí, kde je prostor pro diskuzi a svobodné vyjadřování. Základem všeho je týmová spolupráce. Neuznáváme striktní hierarchie ani skleněné stropy.</p>" +
                "<p>Na našem stánku můžete čekat partu pohodových konzultantů, kteří jsou připraveni s Vámi konzultovat životopis nebo sdílet hinty, jak zaujmout na pohovoru a získat job snů. Dozvíte se více o aktuálních pracovních příležitostí na part-time i full-time pro české i mezinárodní společnosti. Nabídneme vám nové vydání našeho magazínu pro ICT odborníky s oblíbenými přehledy o platech a zajímavými rozhovory s kandidáty i klienty. Připravena bude tombola, ve které můžete získat designové flash-disky, powerbanky, usb rozdvojky.</p>",
                upper_skills: [],
                visit: false
            },{
                name: "Tipsport",
                logo: "tipsport.svg",
                type: "bronze",
                sponsor: true,
                page: "https://tipsport.jobs.cz/volna-mista/",
                description: "Většina sázek je v dnešní době přijímána online a tak lze Tipsport označit za technologickou firmu. Naše IT oddělení je proto opravdu hýčkané. Jen náš tým developerů má 26 lidí, a protože v kurzovém sázení stále přibývají nové funkcionality i související služby, už zase je nás málo. :-) Pokud naskočíš do našeho týmu, nejdříve Tě čeká zaškolení pod vedením některého ze zkušených vývojářů. Provedeme Tě zvlášť frontendovou a backendovou částí aplikace.",
                extendedDescription: "<p>Podle toho, co Ti bude bližší, si sám vybereš, jestli se budeš raději věnovat frontendu či backendu. Až projdeš fází zaškolení, budeš se v kooperaci s kolegy podílet na vývoji systémů, které tvoříme a optimalizujeme na vysokou zátěž a provoz s maximální dostupností, vždyť obsluhují tisíce dotazů a poskytují služby 24x7. Pracujeme v neformálním a přátelském kolektivu. Nabízíme možnost profesního i osobního růstu, možnost podílet se na vývoji a optimalizaci systémů stavěných na vysokou zátěž, možnost zúčastnit se odborných kurzů a školení, prostor pro sebevzdělávání a zkoumání nových technologií, možnost práce z domova, flexibilní pracovní dobu, sick days, odborné tréninky a školení a v neposlední řadě také zajímavé mzdové ohodnocení a široký systém dalších zaměstnaneckých benefitů.</p>",
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
            },{
                name: "Greyson",
                logo: "greyson.gif",
                type: "bronze",
                page: "http://www.greyson.eu/careers",
                description: "Greyson je poradenská firma, která pracuje s předními organizacemi ve střední a východní Evropě a pomáhá jim dosáhnout dlouhodobých cílů. Naše projekty se týkají datových skladů bank, migrace dat v bankách apod. Zaměstnáváme jak klasické business konzultanty a BI konzultanty, tak vývojáře a testery.",
                extendedDescription: "<p>Pořádáme sérii profesních školení, využíváme zaškolování seniorními kolegy a také pořádáme interní školení na různá odborná témata. Pokud jde o kariérní růst, máme jasná kritéria a hierarchii a naši lidé přesně vědí co musí udělat, aby se mohli dostat o příčku výše. Dvakrát do roka probíhá oficiální hodnocení pracovního výkonu, ze které vzejdou další kroky na rozvoj a požadavky na školení. Nabízíme zajímavé projekty ve firmě, která raketově roste i v době, kdy je na trhu obrovská poptávka po lidech. Také disponujeme širokou škálou firemních benefitů, např. až 6 týdnů dovolené nebo soukromou vilu na Bali pro relax našich zaměstnanců zdarma. :)</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "eMan",
                logo: "eman.png",
                type: "bronze",
                page: "https://www.eman.cz/kariera/",
                description: "eMan je předním českým poskytovatelem softwarových řešení. Vyvíjíme aplikace pro smartphony, tablety, auta, wearables a další chytrá zařízení. Náš tým má 80 členů. Sídlo a hlavní kancelář máme v Praze. V roce 2016 jsme otevřeli regionální pobočky v Plzni a Hradci Králové. Mezi naše klíčové zákazníky patří například Škoda Auto, Honeywell, O2, Edenred, E.ON, Allianz, Česká pojišťovna, MND nebo Autodesk. eMan je součástí skupiny JABLOTRON GROUP.",
                extendedDescription: "<p>Zabýváme se vývojem mobilních aplikací (návrh a vývoj aplikací pro smartphony, tablety, wearables, automobily a jiná “smart” zařízení), webovým vývojem (návrh a vývoj webových aplikací a backend řešení, klientské portály, obchodní a komunikační platformy, backend systémy, rozsáhlá enterprise řešení), UX/UI designem (UX strategie, prototyping, UX design aplikací, od mobilních řešení přes webové aplikace až po řešení pro chytré automobily nebo nemocniční lůžka) a dalšími službami (provoz a servis aplikací, quality assurance, bezpečnost a testování aplikací, hromadná správa mobilních zařízení, biometrické podpisy). Nabízíme možnost spolupráce formou práce na plný/částečný úvazek, stáže nebo možnost realizace diplomové/bakalářské práce.</p>" +
                "<p>Osobní rozvoj a učení se je pro nás na prvním místě. Nabízíme finanční odměnu, se kterou budete opravdu spokojení. U nás máš možnost organizovat si svou práci podle sebe – důležitý je pro nás výsledek, ne pevná pravidla, podle jakých se k němu dostaneš. Jsme mladý kolektiv v příjemném pracovním prostředí. Mezi benefity patří výuka angličtiny, homeoffice, stolní fotbálek, HTC Vive a XBox v chillout zóně, sportovní akce, možnost zapůjčení firemního vozidla, celofiremní víkendové akce a teambuildingy, telefon, notebook, monitor a ergonomické pomůcky, polohovatelné stoly, občerstvení na pracovišti, konference, pravidelné firemní snídaně, školení či možnost proplacení odborných seminářů a kurzů.</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "Epam",
                logo: "epam.svg",
                type: "bronze",
                page: "http://www.epamsystems.cz/",
                description: "Since 1993, EPAM Systems, Inc. (NYSE:EPAM), has leveraged its core engineering expertise to become a leading global product development and digital platform engineering services company. Through its ‘Engineering DNA’ and innovative strategy, consulting, and design capabilities, EPAM works in collaboration with its customers to deliver innovative solutions that turn complex business challenges into real business opportunities. EPAM’s global teams serve customers in over 25 countries across North America, Europe, Asia and Australia. EPAM is a recognized market leader among independent research agencies and was ranked #8 in FORBES 25 Fastest Growing Public Tech Companies, as a top information technology services company on FORTUNE’S 100 Fastest Growing Companies, and as a top UK Digital Design & Build Agency.",
                extendedDescription: "<p>EPAM Systems Czech Republic concentrates on  support of global EPAM customers, especially in the area of finance and pharma industry.</p>" +
                "<p>After people join us, they receive a comprehensive set of benefits. We invest a lot into EPAMers’ professional development, there are a lot of educational activities, such as webinars, conferences, courses. There are different IT events, people can either share their knowledge or learn something new. Having that many nationalities we need to speak the same language, which is why we offer our employees English courses to boost their skills. What is very attractive benefit, is possibility to work on international project and possibility to go work (of course, after certain time) to another EPAM location  in over 25 countries around the world.</p>" +
                "<p>We know, that there is a big competition on IT market, but we are committed to making EPAM a great place to work through our culture, training and global mobility program. We know how to work hard, and we know how to have a great time.  </p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "2N TELEKOMUNIKACE a.s.",
                logo: "Logo2N.png",
                type: "bronze",
                page: "https://www.2n.cz",
                description: "Vytváříme originální produkty a řešení vycházející z nejnovějších IP technologií a udáváme tak trendy v oblasti komunikace a bezpečnosti. Jsme celosvětovou jedničkou na trhu v oblasti IP interkomů, které se prodávají ve více než 130 zemí světa. Hledáme nové talenty v oblasti  programování embedded systémů. Nabízíme flexibilní úvazky během studií s možností přejít na full time po dokončení studií.",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "LMC s.r.o.",
                logo: "lmc.svg",
                type: "bronze",
                page: "https://www.lmc.eu",
                description: "Naším snem je, aby lidé měli svou práci rádi. A více než 1.000.000 z nich jsme s tím už pomohli. Umíme najít skvělé zaměstnance, usnadnit nábor i vzdělávat lidi v týmu. Díky tomu všemu s námi spolupracuje již přes 17.000 klientů. Patříme do mezinárodní skupiny Alma Career a dosáhneme tak do 15 evropských zemí.",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "NCR",
                logo: "ncr.png",
                type: "bronze",
                page: "https://www.ncr.com/careers",
                description: "NCR is a diverse business with 29,000 people in over 180 locations worldwide with a history, present and future of firsts. Founded in 1884 (as National Cash Register Company) maker of the first mechanical cash registers. NCR holds the Hospitality market leadership with a solution encompassing Point of Sale, Online and Mobile Ordering, Real Time Reporting, Theft and Loss Prevention. As the Omni-Channel leader NCR changes future of business by connecting consumer transaction data from all the industries served by NCR and presenting consumers with their complete financial picture.",
                extendedDescription: "<p>Among our projects are 3rd party system integration (electronic payments, loyalty, online ordering), implementation of legal regulations (fiscal, labor law), multi-platformness, next Generation UI, real Time Reporting, theft and Loss Prevention and Big Data.</p>" +
                "<p>Students can join NCR as interns or part timers to balance their study and employment changing to full time employment once graduated. Starting as junior Software or Quality Engineers they can specialize and become Software Architects, Product Owners or Engineering Managers. We at NCR prefer to grow our people.</p>" +
                "<p>Do you value friendly and ethical environment, team work, highly skilled and motivated coworkers, innovative solutions (like the real time reporting and theft prevention)? Then NCR is the right choice for you!</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "Barclays",
                logo: "barclays.svg",
                type: "bronze",
                page: "https://jobs.barclays.co.uk",
                description: "Barclays is a transatlantic consumer, corporate and investment bank offering products and services across personal, corporate and investment banking, credit cards and wealth management, with a strong presence in our two home markets of the UK and the US. Our goal is to become the bank of choice by providing superior services to customers and clients and supporting our stakeholders via a commercially successful business that generates long-term sustainable returns",
                extendedDescription: "<p>Our Technology Centre in Prague has grown to become a strategic location for development, testing and application management, primarily serving our Investment Bank.  Our aim is to develop cutting-edge technology solutions which enable the whole bank to move forward and are integral to Barclays’ success. By joining us you will be helping to create solutions that revolutionise the way Barclays does business.</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "Cleverbee",
                logo: "cleverbee.gif",
                type: "bronze",
                page: "http://www.cleverbee.com/kariera/",
                description: "Popis sponzora bude brzy doplněn.",
                extendedDescription: "",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "Edhouse",
                logo: "edhouse.png",
                type: "bronze",
                page: "http://www.edhouse.cz/cz/kariera/",
                description: "Popis sponzora bude brzy doplněn.",
                extendedDescription: "",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "Suse",
                logo: "suse.svg",
                type: "bronze",
                page: "https://www.suse.com/",
                description: "Popis sponzora bude brzy doplněn.",
                extendedDescription: "",
                upper_skills: [],
                visit: true,
                sponsor: true
            }
        ];
        return {
            getGoldSponsors: function () {
                return goldSponsors;
            },
            getSilverSponsors: function () {
                return silverSponsors;
            },
            getBronzeSponsors: function () {
                return bronzeSponsors;
            },
            getAllSponsors: function () {
                return {
                    gold: goldSponsors,
                    silver: silverSponsors,
                    bronze: bronzeSponsors
                };
            }
        }
    });
})(angular);
