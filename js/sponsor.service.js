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
                visit: true
            },
            {
                name: "T-Mobile",
                logo: "tmobile.jpg",
                type: "gold",
                sponsor: true,
                page: "https://www.t-mobile.cz/web/guest/kariera#hledame",
                description: "Ukážeme vám cestu do mobilní budoucnosti. Jednoduše a s lidským přístupem vám poskytneme všechny výhody mobility - spolehlivě a dostupně, vždy a všude. Klademe důraz na poskytování spolehlivých a kvalitních služeb, které splní očekávání našich zákazníků. U zaměstnanců podporujeme týmovou spolupráci, tvořivost a firemní kulturu zaměřenou na výsledky. Snažíme se pracovat transparentně a efektivně. Naše obchodní cíle budou vždy v souladu s odpovědností vůči společnosti, v níž žijeme.",
                visit: true
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
                    {department: "Cizí jazyky", skills: ["Angličtina", "Italština"]}
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
                name: "Ataccama Software",
                logo: "atacama.jpg",
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
            }, {
                name: "Commerz Systems",
                logo: "commerz-systems.svg",
                type: "bronze",
                page: "http://commerzsystems.de/en/",
                description: "Commerz Systems (CS) is an independent IT company that plays a key role in the success of the Commerzbank group as the central service provider for application development and operation.",
                extendedDescription: "<p>Commerz Systems was founded in 2008 from a merger of two IT companies with many years of experience in development and IT operations for Commerzbank AG. As a service provider to the bank, CS is experiencing strong growth:Together with the more than 830 employees at the Eschborn, Bremen, Prague and Łodź locations, Commerz Systems offers a broad range of services in the fields of software development, maintenance, and IT operations. Technologically, the entire spectrum of current software architecture – from the established mainframe to highly specialized web applications and apps – is covered. Commerz Systems supports the private, entrepreneurial, and corporate customer business as well as all central functions of Commerzbank.</p>",
                upper_skills: [],
                visit: true
            }, {
                name: "Tipsport",
                logo: "tipsport.svg",
                type: "bronze",
                sponsor: true,
                page: "https://jobs.tipsport.cz/",
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
                    {
                        department: "Bezpečnost",
                        skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]
                    },
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
            }, {
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
                description: "V eManu rozumíme chytrým zařízením. Umíme vymyslet a realizovat jak šikovné mobilní nebo webové aplikace, tak i úplná softwarová řešení. Naše produkty denně používají miliony lidí. Jsme česká firma a sídlíme v Praze, další kanceláře pak máme v Plzni, Hradci Králové a Mladé Boleslavi. Pracujeme na velkých projektech například pro Škoda Auto, Honeywell, Edenred, E.ON, Allianz, Česká pojišťovna, MND nebo Autodesk. Neustále se držíme na vývojářské špičce a nebojíme se nových výzev. Věříme, že můžeme lidem díky chytrým technologiím ulehčit a obohatit život. A to dává naší práci smysl.",
                extendedDescription: "",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            /*{
             name: "EPAM Systems",
             logo: "epam.svg",
             type: "bronze",
             page: "http://www.epamsystems.cz/",
             description: "Since 1993, EPAM Systems, Inc. (NYSE:EPAM), has leveraged its core engineering expertise to become a leading global product development and digital platform engineering services company. Through its ‘Engineering DNA’ and innovative strategy, consulting, and design capabilities, EPAM works in collaboration with its customers to deliver innovative solutions that turn complex business challenges into real business opportunities. EPAM’s global teams serve customers in over 25 countries across North America, Europe, Asia and Australia. EPAM is a recognized market leader among independent research agencies and was ranked #8 in FORBES 25 Fastest Growing Public Tech Companies, as a top information technology services company on FORTUNE’S 100 Fastest Growing Companies, and as a top UK Digital Design & Build Agency.",
             extendedDescription: "<p>EPAM Systems Czech Republic concentrates on  support of global EPAM customers, especially in the area of finance and pharma industry.</p>" +
             "<p>After people join us, they receive a comprehensive set of benefits. We invest a lot into EPAMers’ professional development, there are a lot of educational activities, such as webinars, conferences, courses. There are different IT events, people can either share their knowledge or learn something new. Having that many nationalities we need to speak the same language, which is why we offer our employees English courses to boost their skills. What is very attractive benefit, is possibility to work on international project and possibility to go work (of course, after certain time) to another EPAM location  in over 25 countries around the world.</p>" +
             "<p>We know, that there is a big competition on IT market, but we are committed to making EPAM a great place to work through our culture, training and global mobility program. We know how to work hard, and we know how to have a great time.  </p>",
             upper_skills: [],
             visit: false,
             sponsor: true
             },*/

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

             /*{
                name: "LMC s.r.o.",
                logo: "lmc.svg",
                type: "bronze",
                page: "https://www.lmc.eu",
                description: "Naším snem je, aby lidé měli svou práci rádi. A více než 1.000.000 z nich jsme s tím už pomohli. Umíme najít skvělé zaměstnance, usnadnit nábor i vzdělávat lidi v týmu. Díky tomu všemu s námi spolupracuje již přes 17.000 klientů. Patříme do mezinárodní skupiny Alma Career a dosáhneme tak do 15 evropských zemí.",
                upper_skills: [],
                visit: false,
                sponsor: true
            },*/

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
                name: "EdHouse",
                logo: "edhouse.png",
                type: "bronze",
                page: "http://www.edhouse.cz/cz/kariera/",
                description: "Baví nás dělat software a děláme jej už 11 let s týmem více jak 80 lidí. Naši práci umíme fakt dobře. Vyvíjíme software pro nadnárodní společnosti, dokážeme vymyslet, co je třeba a přitom cestujeme, poznáváme, sdílíme, žijeme, bavíme se... Chceš vědět ještě víc? Přijď se podívat k našemu stánku, čeká tam na Tebe i něco dobrého ;-).",
                extendedDescription: "<p>Naší hlavní myšlenkou je přinášet zajímavou práci do Zlínského regionu a Olomouce. A že zajímavá je! :-)</p>" +
                    "<p>V našem týmu Thermo Fisher Scientific můžeš pracovat s elektronovým mikroskopem a vyvíjet software pro jeho obsluhu! Posouváme hranice a už nyní u nás nanotechnologie rostou :-)</p>" +
                    "<p>Také s námi můžeš vdechovat život nové generaci kontrolerů, zajišťujících řízení a monitoring spalovacích motorů. Software našeho zákazníka ComAp najdeš v nemocnicích i na závodní dráze.</p>" +
                    "<p>Pro On Semiconductor můžeš dělat software, který detekuje vadné mikročipy na výrobní lince a ušetříš tak práci spoustě lidem. Můžeš pomáhat s podporou výroby a testováním součástek, které se uplatňují například v letectví, osvětlení, zdravotních pomůckách, ale také ve vesmíru!</p>" +
                    "<p>Podílet se můžeš i na práci pro NCR. Vytvoř software, díky kterému bude fungovat obsluha čerpacích stanic a objednávkové systémy v restauracích po celém světě.</p>" +
                    "<p>A to už je něco :-) A tohle NĚCO se děje od nás, ze Zlína, Vsetína a Olomouce, kde má každý náš zaměstnanec své místečko.</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            /*{
                name: "Amarula Solutions",
                logo: "amarula.png",
                type: "bronze",
                page: "https://www.amarulasolutions.com/job-opportunities/",
                description: "Amarula Solutions has a passion for open source. Our software engineers have their roots in open source and participate actively in open source communities. We want to bring customer satisfaction by having a hands-on mentality in embedded solutions. We make hardware products faster, more secure and stable. From chip software to system drivers, from mobile devices to ATMs.",
                extendedDescription: "<p>Our goal is to provide high quality embedded solutions. The open source software ecosystem along with the right chain of hardware development companies, enables us to build competitive solutions for your company. Among our customers we can count: hardware manufacturers, defense industry leaders but also end user oriented companies. </p>",
                upper_skills: [],
                visit: false,
                sponsor: true
            },*/

            {
                name: "Quanti",
                logo: "quanti.png",
                type: "bronze",
                page: "https://www.quanti.cz/home",
                description: "Quanti s.r.o. je českou technologickou firmou se sídlem v Praze v areálu kampusu Dejvice. Naše portfolio je opravdu široké. Know-how naší společnosti spočívá v propojování hardwarových a softwarových řešení, na která si ostatní firmy netroufají. Disponujeme pracovními týmy, které jsou složené ze skutečných expertů a nadšenců pro konkrétní problematiku.",
                extendedDescription: "<p>Realizujeme jak rozsáhlá softwarová řešení, tak i specifické hardwarové zakázky. Máme za sebou i řadu webových portálů nebo technologicky náročných mobilních aplikací například pro vlastní hardware, streamování audio-video, pozicování v prostoru nebo aplikace využívající bluetooth. V projektech používáme nejnovější technologie a dbáme na neustálé vzdělávání našich zaměstnanců. Většina kolektivu je složena z absolventů nebo studentů FIT či FEL ČVUT, máme zkušenosti i s vedením semestrálních, bakalářských či diplomových prací. Studium při práci není u nás překážkou. V případě dotazů nás kontaktujte na info@quanti.cz.</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "KPMG",
                logo: "kmpg.png",
                type: "bronze",
                page: "https://home.kpmg.com/cz/cs/home/kariera.html",
                description: "KPMG Česká republika zahájila svou činnost v roce 1990, v současné době má více než 1000 zaměstnanců a kanceláře v Praze, Brně, Českých Budějovicích a Ostravě. Společnost poskytuje služby v oblasti auditu, daní, poradenství a práva.  Jako součást celosvětové sítě poradenských společností může KPMG Česká republika využít znalosti a zkušenosti více než 197 tisíc odborníků, kteří působí ve 154 státech světa. Nezávislé členské společnosti sítě KPMG jsou přidružené ke KPMG International Cooperative  („KPMG International“), švýcarské organizační jednotce. Každá členská společnost celosvětové sítě KPMG je právně samostatná a oddělená jednotka a tak se označuje.",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "The AKKADEMY Switzerland",
                logo: "akka.png",
                type: "bronze",
                page: "https://www.akka-technologies.com/en/career",
                description: "With more than 18,000 skilled employees and a solid presence in Europe, Asia and America, the AKKA Technologies Group is one of the leaders among European consulting engineering companies, always eager to meet the highest quality standards. To keep pace with this fast-changing world, AKKA Technologies set up an International Graduate Engineering Program, providing young talents with the opportunity to build a successful career and acquire a lifelong set of consulting skills.",
                extendedDescription: "<p>Our International Graduate Program addresses those who have a genuine passion for technologies. In an international and professional environment, you will be mentored during 12 months with the latest in-class and technical training methods, conceived to supplement your academic background. As a part of a digital transformation program, we created The AKKADEMY. Bringing together high-potential engineers from all over Europe and train them to become the next generation of top engineering consultants – capable of meeting our clients' most difficult innovation & business challenges.</p>",
                upper_skills: [],
                visit: true,
                sponsor: true
            },

            {
                name: "OKsystem",
                logo: "oksystem.png",
                type: "bronze",
                page: "https://www.oksystem.com/cz/kariera",
                description: "Jsme česká softwarová společnost, která působí na trhu informačních technologií více než 27 let. Jsme dodavatelem a systémovým integrátorem rozsáhlých informačních systémů ve veřejné i podnikové sféře, zaměřujeme se na vývoj mobilních aplikací, bezpečnost ve světě IT a mobilních zařízení a naše autorizované školicí centrum poskytuje testování a školení produktů Cisco, Microsoft a SUSE Linux. Máme kanceláře v Praze a Brně, kde nyní pracuje celkem 280 zaměstnanců, ale stále hledáme posily do našeho týmu. Přidejte se k nám a i Vy.",
                upper_skills: [],
                visit: true,
                sponsor: true
            },
            {
                name: "Kiwi.com",
                logo: "kiwi.svg",
                type: "bronze",
                page: "https://www.kiwi.com/jobs/",
                description: "Od probdělých nocí a kupování prvních letenek z baru po firmu s více než 1 400 zaměstnanci a titulem Forbes Startup roku. To je ve zkratce příběh Kiwi.com - unikátního vyhledávače letenek nespolupracujících aerolinek, který vznikl a stále sídlí v Brně. Kiwi.com mění denně zážitky z cestování více něž 7000 lidí po celém světě a do roku 2021 má jasný cíl - změnit cestování, jak jej známe, být světovou jedničkou a dostat Brno na mapu těch nejlepších firem na světě. A k tomu má rozhodně dobře našlápnuto!",
                upper_skills: [],
                visit: true,
                sponsor: true
            },
            {
                name: "Unicorn Systems a.s.",
                logo: "unicorn.png",
                type: "bronze",
                page: "https://unicorn.com/en/career",
                description: "Unicorn je renomovaná evropská společnost poskytující ty největší informační systémy a řešení z oblasti informačních a komunikačních technologií. Dlouhodobě se soustředíme na vysokou přidanou hodnotu a konkurenční výhodu ve prospěch svých zákazníků.",
                extendedDescription: "Působíme na trhu již od roku 1990 a za tu dobu jsme vytvořili řadu špičkových a rozsáhlých řešení, která jsou rozšířena a užívána mezi těmi nejvýznamnějšími podniky z různých odvětví. Máme ty nejlepší reference z oblasti bankovnictví, pojišťovnictví, energetiky a utilit, komunikace a médií, výroby, obchodu i veřejné správy.",
                upper_skills: [],
                visit: true,
                sponsor: true
            },
            {
                name: "Ernst & Young ",
                logo: "ernstYoung.gif",
                type: "bronze",
                page: "https://www.ey.com/",
                description: "Jsme konzultanti. Klientům pomáháme uspět, realizovat jejich sny a dělat práci den za dnem efektivněji. EY už není jenom Audit a Daně. Specializujeme se také na Transakce, Forenzní služby nebo Advisory. Pomáháme firmám zlepšit fungování IT systémů. Radíme, jak se zorientovat v datech. Zabýváme se kybernetickou bezpečností, robotikou a dokážeme své nápady proměnit ve fungující řešení. IT technologie pronikají všemi projekty, které v EY děláme. Bez ohledu na jejich velikost, délku trvání, složitost nebo oddělení, které je má na starosti. Díky tomu pro tebe máme hromadu příležitostí. Každý projekt je v něčem jiný. Liší se zadání od klienta i řešení, která vymyslíme. Spolupracujeme s největšími firmami a děláme i pro start-upy, o kterých bude teprve slyšet.\n",
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
