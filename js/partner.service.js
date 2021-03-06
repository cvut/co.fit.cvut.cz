(function (angular) {
    angular.module("app").service("PartnerService", function () {
        var goldPartners = [
            {
                name: "Profinit",
                logo: "profinit.svg",
                type: "gold",
                page: "https://www.profinit.eu/kariera/",
                description: "Od roku 1998 poskytujeme komplexní IT služby od návrhu business a IT architektury až po dodávky celých řešení. Pracujeme pro více než 50 významných společností z oblastí financí, telekomunikací a státní správy. V České republice jsou to mj. Česká spořitelna, Komerční banka, ČSOB, Vodafone nebo O2. V našem týmu najdete více než 350 nadšených a zkušených profesionálů. Patříme ke špičce v oblasti vývoje SW na zakázku, data managementu, datových skladů, business intelligence a big data science.",
                extendedDescription: "<p>Naši konzultanti se zabývají analýzou, návrhem a vývojem moderních IT systémů. Většinou působí na projektech přímo u zákazníků. Právě možnost pracovat na různých projektech je na práci v Profinitu unikátní. U nás je možné získat zkušenosti rychleji a do hloubky. Nejsme korporace, kde hraje roli politika nebo tisíc pravidel a nařízení, chováme se k sobě přátelsky a pomáháme si. Charakter a dobrá organizace práce nám umožňují nabízet studentům pružné pracovní úvazky.</p>" +
                "<p>S FIT ČVUT dlouhodobě spolupracujeme v oblastech pokročilého zpracování dat, data analytics, syntaktické a sémantické analýze kódu či konceptuálních modelů. Naši odborníci vyučují a cvičí specializované předměty přímo na fakultě. Mimo společných výzkumných projektů nabízíme také zajímavá témata v podobě semestrálních projektů, diplomových a bakalářských prací.  Společně s dalšími českými a slovenskými technickými vysokými školami a pod záštitou mezinárodní odborné organizace ACM organizujeme soutěž IT SPY, ve které odborná porota vybírá nejlepší diplomovou práci z oblasti informatiky a informačních technologií.</p>",
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
                    {
                        department: "Bezpečnost",
                        skills: ["Softwarová", "Síťová", "Systémová", "Managerská", "ISO 27001"]
                    },
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
            }, {
                name: "Datamole",
                logo: "Datamole_logo.svg",
                type: "gold",
                page: "https://www.datamole.cz/",
                description: "We are an aspiring start-up fully focused on data science. Utilizing artificial intelligence techniques and data driven methods we deliver innovative and highly added value solutions to our customers.",
                extendedDescription: "<p>We are curiosity driven, each project is a new challenge. We are enthusiastic about new approaches, frameworks and tools related to data analysis, machine learning, data mining and big data. These fields are evolving rapidly and we want to be on the edge at all times and use state of the art technologies. Our team consist of experts for machine learning & data mining, (big) data processing & cluster computing, software engineering & architecture, analysis & visualisation. We believe it is our collective drive, individual expertise and shared knowledge that allow us to deliver creative and innovative solutions.</p>" +
                "<p>It is not a coincidence that we closely collaborate with the CTU FIT; many of us are proud absolvents. We are active in joint research resulting in establishing a joint laboratory at the FIT premises in 2015 (TH:A-1349). Additionally our team members also teach AI oriented courses at the FIT.</p>" +
                "<p>For students, we publish assignments on the portal SSP and supervise Bachelor's as well as Master's theses. We also offer internships and for absolvents we offer various positions, refer https://www.datamole.cz/#joinus. Would you like to meet us and see if Datamole has an opportunity for you? Do not hesitate to contact us on info@datamole.cz!</p>",
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
                visit: true,
                importance: 7
            }, {
                name: "Komerční banka",
                logo: "kb2018.svg",
                type: "gold",
                page: "https://www.kb.cz/cs/o-bance/kariera/?wt_mc=interni.header.careers",
                description: "Jsme mateřskou společností Skupiny KB a součástí mezinárodní skupiny Société Générale. Jsme přední bankovní instituce v České republice, střední i východní Evropě. Je nás téměř 8500 a nabízíme služby retailového, podnikového a investičního bankovnictví po celé České republice. Máme širokou síť poboček, přímé bankovnictví a vlastní distribuční síť. Zabýváme se velkými transformačními programy či komplexním vývojem bankovních systémů a internetového (a mobilního) bankovnictví, inovativními přístupy a nápady pro zkvalitnění zákaznické zkušenosti jako zjednodušení práce s platbami, využívání chytrých zařízení (smartwatch), Big Data nebo hledání nových scénářů pro bankovní a finanční služby (Google Wallet, Apple Pay).",
                extendedDescription: null,
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
                    {
                        department: "Bezpečnost",
                        skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]
                    },
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
            }
        ];
        var silverPartners = [
            {
                name: "Showmax",
                logo: "showmax.png",
                type: "silver",
                page: "https://tech.showmax.com/open-positions/",
                description: "Our team of highly talented developers is building a world-scalable platform, delivering the best Subscription Video-On-Demand experience on the African continent and beyond. The Showmax back-end is an in-house developed, micro service-oriented platform. The majority of our back-end services are written in Ruby, Go, or Python, and we have our own video-encoding pipeline that can orchestrate encoding across hundreds of servers. Also, we love Open Source, and a lot of our developers are active members of OSS community. What would the streaming platform be without user front-ends? Not much! We maintain and develop applications for an ever-expanding set of devices served with JavaScript applications. Obviously, desktop and mobile browsers are important, but we also support embedded JavaScript engines on SmartTVs and game consoles, and we also have native applications for Android and iOS and AppleTV (tvOS).",
                extendedDescription: null,
                upper_skills: [
                ],
                visit: true,
                importance: 8
            }
        ];
        var bronzePartners = [
            //{
            //    name: "Ackee",
            //    logo: "ackee2017.png",
            //    type: "bronze",
            //    page: "https://www.ackee.cz/o-nas#contact",
            //    description: "Vznikli jsme jako parta studentů ČVUT. Každý z nás vynikal v jiné oblasti a spojoval nás zápal pro technologie. Dneska sídlíme nedaleko naší alma mater jako dospělá firma s řadou zkušeností, skvělými lidmi a se zajímavými klienty, kterým pomáháme využívat nové technologie pro jejich byznys. Kdo jsme? Jsme tři zakladatelé a společně jsme stvořili Ackee. To nejdůležitější je ale náš tým grafiků, projekťáků, testerů a hlavně vývojářek a vývojářů pro mobilní zařízení, weby a backendy. Proto jim říkáme miláčci. V Ackee máme pořád dveře otevřené. Bereme stážisty, juniory i seniory. Jestli není tvá pozice zrovna vypsaná, pošli nám i tak CV, třeba hledáme právě tebe. Momentálně sháníme kandidáty na pozice Android Developer, iOS Developer, Frontend Web Developer.</p>",
            //    upper_skills: [],
            //    visit: false
            //},

            {
                name: "NN",
                logo: "nn.svg",
                type: "bronze",
                page: "https://kariera.nn.cz/it-hub/",
                description: "NN (odvozeno od Nationale Nederlanden) není v ČR novým pojmem. Ve skutečnosti zde působíme od roku 1992 a dlouho jste nás mohli znát jako ING pojišťovnu. Jsme společnost s bohatou historií, jejímž středobodem nejsou pojistné smlouvy, ale lidé. Součástí NN je také oddělení regionálního IT s názvem IT Hub Prague se sídlem v centru Prahy. Naší úlohou je poskytování a dodávání IT služeb pro 18 zemí. Našim zákazníkům dodáváme služby především v oblasti bezpečnosti, podpory a údržby regionálních aplikací a systémů, hosting service a jiných podpůrných služeb. Naše osazenstvo je multikulturní a prostředí inspirující.",
                extendedDescription: "<p>Pracujeme s nejnovějšími technologiemi na zajímavých projektech pro celý svět. Mezi naše hodnoty patří CLEAR – CARE – COMIT. CLEAR – jsme féroví, říkáme věci na rovinu a na nic si nehrajeme. CARE – je pro nás důležité udržet rovnováhu mezi rodinou a prací, a proto si svůj čas řídíme sami. COMMIT – víme co a proč děláme a za naší prací a rozhodnutím si stojíme. Nabízíme práci v mezinárodním prostředí, aktivní využití anglického jazyka, možnost cestovat a poznávat jiné kultury. Orientujeme se na práci s nejnovějšími technologiemi. Máme mladý dynamický tým a jsme otevřeni spolupráci se studenty a absolventy SŠ a VŠ. Nabízíme nadstandardní zaměstnanecké benefity. Sídlíme přímo v centru Prahy (Anděl).</p>",
                upper_skills: [],
                visit: true
            },

            {
                name: "Valeo",
                logo: "valeo.svg",
                type: "bronze",
                page: "http://www.valeo-czechrepublic.com/",
                description: "Není nás vidět a stejně jsme přítomni. Vylepšujeme auta tak, aby se lépe řídilo. Naše umění tkví v bezpečné a příjemné jízdě. Pomáháme při parkování v nákupních centrech v podobě sebeparkovacích aut, při nenadálých okolnostech v podobě automatického brzdění, při předjíždění v podobě hlídaní mrtvého úhlu. S prototypem samořídícího auta, „Cruise4U“, jsme již zdolali více než čtyřicet tisíc testovacích kilometrů po Evropě a Spojených Státech a stále jedeme dál. Jsme průkopníkem i v hybridizaci aut: vynalezli jsme stop-start systém a vloni jsme dodali automobilkám první sériové elektrické turbodmychadlo. A to se ani při té vší práci nezapotíme, my totiž umíme i autoklimatizace.",
                extendedDescription: "<p>V ČR vyrábíme na 3 místech (Humpolci, Žebráku a Rakovníku), vyvíjíme a zkoumáme v Praze a testujeme na polygonu v Milovicích. Celosvětově investujeme každý rok 10 % tržeb do výzkumu a vývoje, mimo jiné i do výstavby nového špičkového vývojového areálu v Praze-Hostivaři za 600 milionů korun.</p>" +
                "<p>Máte vzdělání v technickém oboru: strojní, elektro nebo IT? Baví vás neustále se vzdělávat? Chcete spolupracovat s kolegy na jiných pobočkách firmy v zahraničí a využívat angličtinu na denní bázi? Máte zodpovědný a proaktivní přístup k úkolům? Do našich týmů ve vývoji či výrobě hledáme právě takové kolegyně a kolegy. Lidi s vizí a zapálením pro svou práci a pro moderní automobilové technologie.</p>" +
                "Patříme mezi nejlépe hodnocené zaměstnavatele v ČR. Získali jsme opakovaně titul „Zaměstnavatel Roku“ pro Středočeský kraj a v roce 2016 i cenu „Top Employer Czech Republic“. Svým zaměstnancům také nabízíme nespočet benefitů.",
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
                description: "Jsme Deloitte, mezinárodní firma, která je pro většinu lidí spojená s auditem či daňovým poradenstvím. Děláme také podnikové poradenství v nejrůznějších oblastech. Zabýváme se IT a máme specialisty na aplikovanou analytiku či Big Data. Rozumíme datovým skladům a datové kvalitě. Naši experti se věnují informační bezpečnosti, IT auditu, řízení velkých IT projektů nebo využití nových digitálních technologií pro transformaci firem. Ve výsledku se na nás obrací klienti tam, kde potřebují udělat opravdu velký skok kupředu či mají složitý problém.",
                extendedDescription: "<p>Řídíme implementační projekty, tvoříme datové sklady, kterým rozumí byznys uživatelé, děláme penetrační testování mobilních aplikací, implementujeme cloudová CRM nebo moderní eCommerce řešení. Každé oddělení má svůj propracovaný systém vzdělávání specificky zaměřený na danou problematiku, nabízíme množství profesních zkoušek a interních školení. Máme jasně stanovený systém hodnocení výkonu a od něj odvíjející se kariérní růst. Pracujeme na zajímavých projektech pro zajímavé klienty. V poradenství je nás více než 200, tudíž se stále máme od koho učit.</p>",
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
                name: "Accenture",
                logo: "accenture.svg",
                type: "bronze",
                page: "https://www.accenture.com/cz-en/new-applied-now#",
                description: "Accenture je vedoucí, globální společnost nabízející odborné služby v oblasti strategie, poradenství, digitálních technologií, technologických služeb a podpory podnikových procesů prostřednictvím přibližně 373 000 pracovníků ve více než 120 zemích světa. Největším a nejvýznamnějším firmám ze všech odvětví pomáháme nastavit úspěšné strategie, navrhnout a implementovat plány, využít sílu digitálního světa – za pomoci tradičních i nových technologií – a dodat řešení. Našim klientům se dokážeme postarat o provoz jejich podnikových procesů, infrastruktury i cloudových služeb. Accenture je jediná firma se schopností poskytovat takto široké spektrum služeb a řešení upravených pro jednotlivá odvětví. V ČR působíme přes 25 let a máme více jak 1800 zaměstnanců.",
                extendedDescription: "<p>Čerstvým absolventům nabízíme zajímavou práci v mezinárodních týmech na různorodých projektech v ČR i zahraničí. Jsme číslo 1 v rámci aktuálního žebříčku časopisu Fortune “World’s Most Admired Companies” v kategorii IT Služby. Naše pozice v konzultantské divizi jsou vhodné především pro vysokoškoláky se silným analytickým a logickým myšlením. Nabízíme zajímavou práci v oblasti konzultačních služeb, moderních IT nebo podpory podnikových procesů pro prestižní firmy, praktické zkušenosti, skvělé kolegy, špičkové vzdělávací programy, atraktivní ohodnocení a štědrý balíček benefitů. Work hard, play hard – umíme se bavit a žijeme i sportem – od celosvětové Accenture Ski Challenge až po We Run Prague. V neposlední řadě se zapojujeme do různých dobročinných a charitativních aktivit, jako je náš mezinárodně oceňovaný český projekt Accenture Academy pro děti z domovů.</p>",
                upper_skills: [],
                visit: true
            },

            {
                name: "MSD IT / merc",
                logo: "msd.png",
                type: "bronze",
                page: "https://www.msdit.cz/be-part-of-our-team/",
                description: "MSD is a global healthcare company with 126-year history and experience in the industry that helps the world be well. In Prague we have two centers now: MSD IT focusing on developing and applying advanced capabilities in information sciences, information security, mobility, social media and big data, etc. and the regional MSD Finance Delivery Center that is partnering with its Finance and Business counterparts across EMEA Region in following areas: Account to Report, Order to Cash, Procure to Pay and Internal Audit & Taxes.",
                extendedDescription: "<p>Looking for career opportunities? Go to <a href='https://www.msdit.cz/' target='_blank'>www.msdit.cz</a> for IT related opportunities.</p>",
                upper_skills: [],
                visit: true
            },

            /*{
                name: "Fiedler AMS",
                logo: "fiedler.svg",
                type: "bronze",
                page: "https://www.fiedler.company/",
                description: "FIEDLER AMS je dynamická firma zaměřená na vývoj systémových řešení, výrobu vlastních snímačů, telemetrických sestav pro sběr, analýzu a vizualizaci dat, řízení procesů a pro monitorování kvality životního prostředí. Našim zákazníkům nabízíme celou řadu moderních zařízení, která sledují kvantitativní a kvalitativní parametry vody, ovzduší a půdy. Pro analýzu a vizualizaci dat využíváme a neustále vylepšujeme vlastní webové aplikace CloudFM a technologické obrazovky CloudFM Scada.",
                extendedDescription: "",
                upper_skills: [],
                visit: true
            },*/

            {
                name: "Entera",
                logo: "entera.svg",
                type: "bronze",
                page: "https://www.etnetera.cz/prace-u-nas",
                description: "V roce 1997 si Martin a Vašek chtěli přivydělat při studiu ČVUT. Založili firmu a brzy s překvapením zjistili, že mohou zaměstnat i své přátele, kteří sdílí jejich znalosti a smysl pro humor. Po více jak 20 letech úspěšného fungování je Etnetera přední společností v oblasti vývoje webových portálů a aplikací. Pracujeme v liberálním a otevřeném prostředí bez kravat a procesních příruček. Inspirujeme se principy svobodné firmy, kde se zisky dělí transparentně, týmy si určují svá vlastní pravidla a management nemá nadstandardní benefity. Není proto náhoda, že jsme se 4 roky po sobě umístili na třech nejvyšších příčkách v soutěži Best Employers ČR. Pro vývoj používáme open source řešení. Zabýváme se vývojem a provozem komunikačních a obchodních platforem, navrhujeme a vyvíjíme mobilní aplikace, nabízíme bezpečnostní služby a další.",
                extendedDescription: null,
                upper_skills: [],
                visit: true
            },
            {
                name: "Eaton",
                logo: "eaton.jpg",
                type: "bronze",
                page: "http://www.eaton.com/us/en-us/company/careers.html",
                description: "Elektrotechnický sektor společnosti Eaton Corporation je globálním lídrem v distribuci energie a ochraně elektrických obvodů; ochraně pomocných záložních zdrojů; v řízení a automatizaci; osvětlení a bezpečnosti; strukturálních řešeních a zařízeních pro elektrické sítě; řešeních pro drsná či nebezpečná prostředí a v inženýrských službách. Eaton svým zákazníkům poskytuje úsporná řešení pomáhající řídit elektrickou, hydraulickou a mechanickou energie efektivněji, bezpečněji a udržitelněji. Začátkem roku 2012 otevřela skupina Eaton vlastní inovační centrum ve Vědeckotechnickém parku v Roztokách u Prahy, své první v Evropě a páté na světě. Významnou součástí je výrobní závod v Suchdole nad Lužnicí, kde se vyrábějí proudové chrániče a jističe a rozváděčové skříně. Se svými tisíci pracovníky se tak společnost řadí mezi nejvýznamnější zaměstnavatele v Jihočeském kraji. Eaton je společností zabývající se řízením energie, jejíž obrat dosáhl v roce 2016 hodnoty 19,7 miliard USD. Eaton má přibližně 95 000 zaměstnanců a prodává své výrobky zákazníkům ve více než 175 zemích světa.",
                extendedDescription: null,
                upper_skills: [],
                visit: true
            },

            // {
            //     name: "SUSE lab",
            //     logo: "suse.svg",
            //     type: "bronze",
            //     page: "https://www.suse.com/",
            //     description: "SUSE bylo založeno roku 1992 a v současnosti je součástí skupiny Micro Focus. Primárně se sice zabývá Linuxem, ale kromě toho se jeho portfolio orientuje i na segment softwarově definovaných úložišť a zahrnuje i cloudovou platformu OpenStack.",
            //     extendedDescription: "",
            //     upper_skills: [],
            //     visit: true,
            //     sponsor: true
            // },

            {
                name: "Cleberbee",
                logo: "cleverbee.png",
                type: "bronze",
                page: "https://www.cleverbee.com/kariera/",
                description: "Jmenujeme se Cleverbee solutions s. r. o., jsme česko-švýcarská společnost a se softwarem to opravdu umíme. Na trhu jsme od roku 2000 a působíme hlavně v České republice, Švýcarsku a dalších zemích Evropy. Precizní švýcarský management Cleverbee řídí naše týmy v Praze, Hradci Králové i na zahraničních projektech. Jsme hrdí na odborné znalosti i neotřelé nápady našich zaměstnanců a snažíme se je i jejich rozvoj podporovat, jak je to jen možné. Aplikace z naší dílny dlouhá léta dobře slouží různým firmám i institucím. Vzhledem k nárokům na spolehlivá řešení i vysoké zabezpečení máme radost, když se na nás znovu obracejí s novými zajímavými zakázkami.",
                extendedDescription: "",
                upper_skills: [],
                visit: true,
                sponsor: true
            }, {
                name: "Nangu.TV",
                logo: "nangu.svg",
                type: "bronze",
                sponsor: true,
                page: "http://nangu.tv/jobs/",
                description: "Jsme nangu.TV, česká softwarová firma zabývající se vývojem kompletního řešení pro multimediální platformy IPTV a OTT. V tomto velmi dynamickém odvětví se pohybujeme už více než 10 let a vybudovali jsme si pozici lídra trhu. Úspěšně expandujeme i do zahraničí, pravidelně se účastníme nejvýznamnějších veletrhů v Evropě a evidujeme více než půl milionu zařízení připojených k nangu.TV platformě. Na našem IPTV/OTT řešení jsou postavené úspěšné služby jako O2TV. Platformu dále využívají mj. český T-Mobile, slovenský Orange a může se pochlubit i instalacemi v Polsku, Srbsku, Švýcarsku nebo Lucembursku. Našim cílem je umožnit poskytovatelům internetových a komunikačních služeb nabízet interaktivní televizní zábavu bez hranic.",
                extendedDescription: null,
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
            }, {
                name: "CREATIVE DOCK",
                logo: "creativeDock.png",
                type: "bronze",
                sponsor: true,
                page: "https://www.creativedock.com/",
                description: "CREATIVE DOCK staví firmy. Hledá, testuje a vytváří nové digitální byznysové modely a služby na klíč pro své zákazníky. CREATIVE DOCK je startupové studio, ve kterém se realizují nápady od náčrtu na papír až po plnohodnotnou firmu. Tímto způsobem pomáhá CREATIVE DOCK globálním korporacím s testováním úplně nových přístupů a obsazením nově vznikajících segmentů, které proměňují jejich byznys. CREATIVE DOCK není agenturou ani konzultační firmou, protože jeho proces stavby nových firem probíhá od nápadu až po realizaci, uvedení na trh, marketing, testování byznys modelu a úspěšné předání zákazníkům. Právě proto si může dovolit pracovat s vlastní metodikou a přístupem, svobodně a tempem, které by globální firmy nezvládly, protože mají ruce svázané procesem. Právě proto do CREATIVE DOCK přicházejí jak zkušení manažeři, tak mladí startupoví nadšenci. Přicházejí ovlivňovat byznys a mít zásadní dopad na trh.",
                extendedDescription: null,
                upper_skills: [],
                visit: true
            }, {
                name: "AMI",
                logo: "ami.png",
                type: "bronze",
                sponsor: true,
                page: "https://pojdteknam.ami.cz/",
                description: "Už 20 let nás baví informační technologie a vymýšlení řešení na míru, ale největší nadšení v nás budí oblast řízení životního cyklu identit - Identity Management (IdM). Vybudovali jsme si na českém trhu nejširší realizační tým a nikdo si s námi nezadá v množství IdMkových nástrojů, které ovládáme. Máme prsty ve většině nasazených řešení na našem území a s velkou chutí se pouštíme do dalších. Kombinujeme programování se znalostí produktu - ovládáme nejen ty komerční. V posledních letech se věnujeme především open source řešení. Fungující a přátelský kolektiv je pro nás základ. Skutečné dovednosti, potenciál a dobrá povaha je pro nás víc než nabušený životopis. Jsme dobrá parta, říkáme věci na rovinu, slovo u nás platí a názory se cení. Nenosíme saka, ve firmě si tykáme a po cestě z metra do slunných kanceláří se kocháme poklidnou atmosférou Areálu Hvězda.",
                extendedDescription: null,
                upper_skills: [],
                visit: true
            }
        ];
        return {
            getGoldPartners: function () {
                return goldPartners;
            },
            getSilverPartners: function () {
                return silverPartners;
            },
            getBronzePartners: function () {
                return bronzePartners;
            },
            getAllPartners: function () {
                return {
                    gold: goldPartners,
                    silver: silverPartners,
                    bronze: bronzePartners
                }
            }
        }
    });
})(angular);
