import LocalizedStrings from 'react-localization'

let img_placeholder = "https://picsum.photos/id/100/600/400"

let strings = new LocalizedStrings({
    en: {
        nav: {
            about: "About",
            data: "Data",
            map: "Explore the Map"
        },
        home: {
            hero: {
                title: "Do you live in a bubble?",
                subtitle: "A datascape of political diversity in Copenhagen"
            },
            paragraphs: [
                "We tend to spend time with people like ourselves. This is why our political discussions often take place in bubble where we rarely encounter opinions that conflict with our own.",
                "Urban life and urban space can either strengthen or break such bubbles. This is a space where people in neither at work nor at home. It is a space with possibilities for chance encounters with different people.",
                "But which parts of the city succeeds in breaking political bubbles?",
                "And which parts come to serve as home for a very specific political crowd?",
                "And is there something about the programming of the urban that make some places more and less diverse than others?",
                "Explore the map and see how diverse your favorite place are or dive into the qualitative stories about Nørrebro and Kongens Nytorv"
            ]
        },
        map: {
            sidebar: {
                rode: {
                    legend: {
                        title: "Legend",
                        less: "Less diverse",
                        more: "More diverse"
                    },
                    place: {
                        least: "Least diverse place",
                        most: "Most diverse place",
                        diversity: "Political diversity",
                        charge: "Political charge",
                        graphLegend: {
                            crowd: "Political Crowd",
                            score: "Diversity Score"
                        }
                    }
                },
                venue: {
                    legend: {
                        charge: "Political Charge",
                        colors: {
                            r: "Red",
                            y: "Yellow",
                            b: "Blue",
                            d: "Diverse",
                            n: "Neutral",
                        }
                    },
                    place: {
                        eventNumber: "Number of Events",
                        least: "Least Diverse Event",
                        most: "Most Diverse Event",
                    },
                    graphs: {
                        charge: "Political Charge",
                        score: "Diversity Score",
                        types: "Types of Events",
                        overall: "Overall Crowd",
                        political: "Political Crowd"
                    }
                }
            }
        },
        data: {
            title: "Hvordan har vi lavet kortet?",
            content: [
                [
                    {
                        type: 'paragraph',
                        copy: 'Kortet over København bygger på data fra projektet ’Det Danske Facebookatlas’, der har indsamlet aktivitet fra 69.000 danske Facebooksider i perioden 2012-2018. Alle disse sider er oprettet som offentlige sider og der er således ikke indsamlet data fra personlige profiler eller grupper. Ligeledes er databasen anonymiseret og GDPR registreret, så brugernes navne og demografi er slettet. I Danmark findes ca 3,3 millioner Facebookbrugere hvoraf 2,4 millioner er aktive dagligt'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Eftersom datasættet indeholder anonymiserede ID’er er det muligt at se fintmaskede mønstre i hvordan disse anonymiserede brugere interagerer med både politisk indhold og events i København. Det er sådanne sammenhænge der er grundlaget for de diversitetsmålinger, der ligger under kortet, hvor vi har givet 5000 steder i København farve efter den politiske blok de tiltrækker.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Vi har taget en række skridt for at sikre at de informationer der overdrages fra Det Danske Facebookatlas til projektet ikke kan spores tilbage til konkrete brugerprofiler der måtte være tilgængelige på Facebook. Hovedelementerne er, at vi holder os fra politiske fordelinger på event-niveau og vi har anonymiseret steder med under 50 brugere samt steder hvor en bestemt politisk blok fylder størstedelen af det samlede publikum. Ligeledes er vi åbne for at steder kan kontakte os hvis de ikke ønsker at blive anonymiseret på kortet.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Nedenfor findes en beskrivelse af de fem metodiske skridt vi har taget for at lave kortet samt sikre os mod af-anonymisering.'
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Første skridt: Associere anonymiserede ID’er med en politisk blok'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Det første vi gjorde var at associere anonymiserede ID’er med en politisk blok. Denne association er baseret på deres engagement med danske politiske Facebook-sider. Det Danske Facebook Atlas har data på ca. 700 sider der identificerer sig selv som politiske. Det kan f.eks. være individuelle politiker-sider som eksemplet nedenfor eller sider fra partiers forskellige regionale og lokale enheder. Tilsammen har de 700 politiske sider produceret 297.334 posts i perioden fra 2012 til 2018.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Hvis en bruger har interageret mere end 2 gange med de politiske sider kategoriserer vi vedkommende som politisk interesseret. Det har mere end 600.000 unikke Facebookbrugere gjort fra 2012-2018 i Det Danske Facebookatlas. Vi er ikke interesseret hvem de er, men i hvordan de fordeler deres positive interaktioner i form af likes og hjerter mellem de tre blokke i dansk politik: rød, gul og blå. Vores antagelse er at en positiv respons på en politisk post signalerer at brugeren er enig i opslaget og dermed støtter den politiske idé det udtrykker, mens andre emojis (som eks. sure og grædende smileys) er mere tvetydige.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'caption',
                        copy: 'Billede af post Socialdemokratiets Facebookside, der genererer positiv respons. Vi ser kun på de to første emojis og ikke den grinende, da den både kan signalere støtte men også afstandtagen fra budskabet.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Baseret på fordelingen af positive emojis har vi associeret hvert anonymiseret ID med en politisk blok. Hvis en bruger har mere end 60% af sine positive interaktioner inden for en politisk blok ser vi brugeren som støtte af den blok. Hvis en bruger ikke har 60% af sine positive interaktioner inden for én politisk blok siger vi at brugeren ikke tilhører en bestemt blok og vedkommende får ikke en politisk farve.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når vi ser på den politiske fordeling af de 600.000 brugere får vi følgende fordeling, hvor 63% associeres med  rød blok.  Ud fra det kan vi sige at den røde blok er en smule overrepræsenteret og den gule en smule underrepræsenteret i forhold til danskernes faktiske stemmeafgivning ved de tre folketingsvalg i denne periode.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Andet skridt: Beskrive den politiske fordeling på Københavnske events'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Efter at have associeret de 600.000 ID’er med en politisk blok, har vi set på deres engagement med events i København. I København har der i perioden fra 2012-2018 været oprettet ca. 150.000 offentlige events på Facebook. Det er alt fra store koncerter til små løbeklubber der mødes i en park. Igen har vi kun behandlet offentlige events og holdt os fra private events.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'For hver af de 150.000 offentlige events har vi udtrukket anonymiserede ID’er på de brugere der enten har indikeret at de deltager i eventet eller er interesseret i det. Selvom vi ikke ved, om disse brugere har været der fysisk, har de signaleret overfor deres Facebook-venner, at det er et event de kunne forestille sig at være til. De har på den måde udtrykt at de identificerer sig med det. '
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Af vores 600.000 politiske brugere har omkring halvdelen engageret sig med events in København. Hvis man ser på fordelingen af disse brugere har den tydeligvis ændret sig i forhold til den vi så tidligere. De røde fylder mere hvilket fortæller os at de politisk engagerede brugere der er aktive i København har bestemte politiske præferencer. Faktisk er fordelingen ret tæt på den gennemsnitlige Københavnske vælger fordeling over Folketingsvalgene i 2011, 2015 og 2019.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Ved at se på disse overlap har det været muligt at lave en politisk profil for hvert event i København. Hvis vi f.eks. tager de 1000 anonymiserede ID’er fra koncerten på VEGA ovenfor, ser vi efter hvor mange af dem vi kan genfinde i det politiske datasæt og hvilken politisk association, der har. Resultatet kunne være en politisk fordeling som den der ses nedenfor. Af de politiske brugere der har en blok-preference of har vist interesse i koncerten er fordelingen i dette tænkte eksempel 24% er røde, 1% er gule og 19% er blå og 55% enten ubesluttede eller politisk uinteresserede.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Tredje skridt: Beregne et events politiske ladning og diversitet'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Fordelingen ovenfor er grundlaget for at beregne to vigtige mål i kortet, nemlig et events ’politiske ladning’ og et events ’diversitets score’.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når vi beregner et events ’politiske ladning’ ser vi på hvor stor del af det samlede publikum der har klare politiske præferencer for enten rød, blå eller gul blok. Det vil sige forholdet mellem den der tilhører en blok og den resten af dem der har vist interesse i koncerten. Hvis vi igen ser på VEGA koncerten ovenfor , vil den have en politisk ladning på 0,45 fordi 45% af deltagerne (450 ud af 1000) har en klar politisk holdning.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når vi beregner et events diversitet er vi udelukkende interesseret i fordelingen mellem de blokloyale brugere, som i det tænkte VEGA eksempel ser ud som nedenfor.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Diversitets scoren går fra 0 til 100 og er designet til at vise hvor de blok loyale brugere potentielt møder hinanden. Et perfekt diverst event ville være et event hvor de blok-loyale brugere fordeler sig ligeligt med 33% røde, 33% blå og 33% gule (score = 100). Det modsatte scenarie ville være et event hvor de alle tilhører den samme blok (score = 0).'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Endeligt kan vi med afsæt i disse beregninger tildele hvert event en politisk kategori. Hvis et event hører til blandt den mest diverse fjerdedel i København siger vi at det er et ’diverst event’ og det markeres med grøn. Hvis mere end 70% af et events loyale politiske crowd er fra en bestemt blok siger vi at et event er domineret af den pågældende blok og det farves henholdsvist rødt gult eller blåt. Hvis et event ikke falder i nogle af de kategorier er det mindre interessant for vores analyse og det farves derfor gråt.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Fjerde skridt: Synliggøre steders politiske karakter gennem eventdata'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Eftersom et kort med 150.000 events ville være uoverskueligt og alt for let at af-anonymisere, har vi lavet grundkortet med fokus på de steder i København, der afholder events. VEGA er for eksempel et sted, der fra 2012-2018 har været vært for 2306 events. Vi bruger det samlede publikum på tværs af VEGAS events til at skabe VEGAs politiske profil, som i første omgang er tilgængelig som farven på stedets prik på kortet.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Stederne er farvet ud fra samme principper som events ovenfor. Hvis mere end 70% af steders loyale politiske brugere er røde er det rødt osv. Der er dog den væsentlige forskel at over 400 steder er anonymiseret fordi de havde en størrelse eller politisk profil, der udgjorde en risiko for af-anonymisering. Et sted er således anonymt hvis det har mindre end 50 brugere eller hvis en politisk blok udgør mere end 75% af de samlede brugere. Som det ses ovenfor er de anonyme steder markeret med ???'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Hvis du kører musen henover et sted, er det første du ser i denne profil hvor mange events et sted har afholdt samt navnene på det event som har tiltrukket det mest diverse publikum. Vi viser med vilje ikke det mindst diverse, da det også ville løbe en risiko for af-anonymisering. Her får du således en kvalitativ indikation på hvilke events der er gode til at skabe diverse politiske møder. I eksemplet med VEGA er det mest diverse event f.eks. en koncert med Rasmus Walter.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'I sidebaren har vi også brugt et vaffeldiagram til at illustrere hvilke typer events der har været afholdt på et givent sted samt den velkendte bar-chart til at vise publikums fordelingen.  Som det ses af visualiseringerne nedenfor kan to steder have nogenlunde samme fordeling af publikum, men en meget forskellig event profil.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Stedet til venstre er Christiansborg. Som sted tiltrækker det et publikum på tværs af rød og blå blok, men de kommer ikke så ofte til de samme events. Man kan sige at stedet er diverst (begge fløje føler sig hjemme), men det er dets events ikke. Stedet holder nogle diverse events hvor dets blå og røde publikum mødes, men er også vært for en række events der trækker enten et rødt eller blåt publikum. Stedet til højre er et kontorfællesskab på Gammeltorv, der har en politisk fordeling der ligner Christiansborgs. Men modsat Christiansborg, så komme de røde og de blå til de samme events på dette sted.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Stedet til venstre er Christiansborg. Som sted tiltrækker det et publikum på tværs af rød og blå blok, men de kommer ikke så ofte til de samme events. Man kan sige at stedet er diverst (begge fløje føler sig hjemme), men det er dets events ikke. Stedet holder nogle diverse events hvor dets blå og røde publikum mødes, men er også vært for en række events der trækker enten et rødt eller blåt publikum. Stedet til højre er et kontorfællesskab på Gammeltorv, der har en politisk fordeling der ligner Christiansborgs. Men modsat Christiansborg, så komme de røde og de blå til de samme events på dette sted.'
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Femte skridt: Skabe et overblik over zoners politiske karakter'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Det sidste skidt i designet af kortet var at producere et overordnet lag, der gør det muligt at sige noget om diversiteten i større områder af København. I stedet for at visualisere de enkelte steder har vi her inddelt København i de mest finmaskede administrative zoner kommunen stiller til rådighed (de hedder ’roder’). Dette zonelag er en opsummering af de steder der er placeret i zonen. F.eks. er VEGA placeret i zonen ’Enghavevejs’ der er hjemsted for xxxx steder i vores kort.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'På samme måde som ovenfor, bruger vi det samlede publikum på tværs af disse steder til at skabe Enhavevejs politiske profil. Det øverste lag af kortet viser forskellene i de forskellige områders diversitets score som er bergenet ud fra samme metode som beskrevet i ovenfor. Vi har således farvet de enkelte zoner alt efter hvor de ligger på diversitets indexet. Grøn indikerer høj diversitet, mens mørk lille indikerer en politiske boble.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'caption',
                        copy: 'Det øverste lag er kortet farver de administrative zoner baseret på om de ligger højt eller lavt på diversitets-indexes. De 25% mest diverse zoner er mørkegrønne og de 25% mindst diverse er mørke lilla.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når du ser på zonekortet er der også information tilgængelig, når du bevæger din mus henover et område. Her fokuserer vi dog udelukkende på områdets politiske ladning og diversitets score, som vi har valgt at vise over tid. Det kan give en fornemmelse af den overordnede udvikling i området inden man zoomer ned og ser på den politiske fordeling på de konkrete steder der står bag den udvikling.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    }
                ]
            ]
        }
    },
    da: {
        nav: {
            about: "Om projektet",
            data: "Data",
            map: "Udforsk kortet"
        },
        home: {
            hero: {
                title: "Lever du i en boble?",
                subtitle: "Et datascape om politisk diversitet i København"
            },
            paragraphs: [
                "Vi har en tendens til at omgås mennesker der minder om os selv. Derfor finder vores politiske diskussioner ofte finder i sted politiske bobler, hvor vi ikke møder borgere med synpunkter der strider mod vores egne.",
                "Byrum kan enten forstærke eller at bryde disse bobler. Her er folk ikke på arbejde. De er heller ikke hjemme. De er et sted, hvor der er højere chance for tilfældige møder med mennesker de ikke kender.",
                "Men hvilke dele af byen lykkes faktisk med at bryde politiske bobler?",
                "Og hvilke dele fungerer som hjemsted for et meget bestemt politisk segment?",
                "Og er der noget omkring byens fremtoning og infrastruktur der gør nogle steder mere ellermindre diverse end andre?",
                "Udforsk kortet og se hvordan dine favorit steder klarer sig når det gælder politisk diversiteteller dyk ned i de kvalitative historier om Nørrebro og Kongens Nytorv."
            ]
        },
        map: {
            sidebar: {
                rode: {
                    legend: {
                        title: "Legend",
                        less: "Mindst diverse",
                        more: "Mest diverse"
                    },
                    place: {
                        least: "Mindst diverse sted",
                        most: "Mest diverse sted",
                        diversity: "Politisk diversitet",
                        charge: "Politisk ladning",
                        graphLegend: {
                            crowd: "Blok loyale deltagere",
                            score: "Diversitets score"
                        }
                    }
                },
                venue: {
                    legend: {
                        charge: "Politisk ladning",
                        colors: {
                            r: "Red",
                            y: "Yellow",
                            b: "Blue",
                            d: "Diverse",
                            n: "Neutral",
                        }
                    },
                    place: {
                        eventNumber: "Antal events",
                        least: "Mindst diverse event",
                        most: "Mest diverse event",
                    },
                    graphs: {
                        charge: "Typer af events",
                        score: "Antal deltagere",
                        types: "Blok loyale deltagere",
                        overall: "Politisk ladning",
                        political: "Diversitets score"
                    }
                }
            }
        },
        data: {
            title: "Hvordan har vi lavet kortet?",
            content: [
                [
                    {
                        type: 'paragraph',
                        copy: 'Kortet over København bygger på data fra projektet ’Det Danske Facebookatlas’, der har indsamlet aktivitet fra 69.000 danske Facebooksider i perioden 2012-2018. Alle disse sider er oprettet som offentlige sider og der er således ikke indsamlet data fra personlige profiler eller grupper. Ligeledes er databasen anonymiseret og GDPR registreret, så brugernes navne og demografi er slettet. I Danmark findes ca 3,3 millioner Facebookbrugere hvoraf 2,4 millioner er aktive dagligt'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Eftersom datasættet indeholder anonymiserede ID’er er det muligt at se fintmaskede mønstre i hvordan disse anonymiserede brugere interagerer med både politisk indhold og events i København. Det er sådanne sammenhænge der er grundlaget for de diversitetsmålinger, der ligger under kortet, hvor vi har givet 5000 steder i København farve efter den politiske blok de tiltrækker.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Vi har taget en række skridt for at sikre at de informationer der overdrages fra Det Danske Facebookatlas til projektet ikke kan spores tilbage til konkrete brugerprofiler der måtte være tilgængelige på Facebook. Hovedelementerne er, at vi holder os fra politiske fordelinger på event-niveau og vi har anonymiseret steder med under 50 brugere samt steder hvor en bestemt politisk blok fylder størstedelen af det samlede publikum. Ligeledes er vi åbne for at steder kan kontakte os hvis de ikke ønsker at blive anonymiseret på kortet.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Nedenfor findes en beskrivelse af de fem metodiske skridt vi har taget for at lave kortet samt sikre os mod af-anonymisering.'
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Første skridt: Associere anonymiserede ID’er med en politisk blok'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Det første vi gjorde var at associere anonymiserede ID’er med en politisk blok. Denne association er baseret på deres engagement med danske politiske Facebook-sider. Det Danske Facebook Atlas har data på ca. 700 sider der identificerer sig selv som politiske. Det kan f.eks. være individuelle politiker-sider som eksemplet nedenfor eller sider fra partiers forskellige regionale og lokale enheder. Tilsammen har de 700 politiske sider produceret 297.334 posts i perioden fra 2012 til 2018.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Hvis en bruger har interageret mere end 2 gange med de politiske sider kategoriserer vi vedkommende som politisk interesseret. Det har mere end 600.000 unikke Facebookbrugere gjort fra 2012-2018 i Det Danske Facebookatlas. Vi er ikke interesseret hvem de er, men i hvordan de fordeler deres positive interaktioner i form af likes og hjerter mellem de tre blokke i dansk politik: rød, gul og blå. Vores antagelse er at en positiv respons på en politisk post signalerer at brugeren er enig i opslaget og dermed støtter den politiske idé det udtrykker, mens andre emojis (som eks. sure og grædende smileys) er mere tvetydige.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'caption',
                        copy: 'Billede af post Socialdemokratiets Facebookside, der genererer positiv respons. Vi ser kun på de to første emojis og ikke den grinende, da den både kan signalere støtte men også afstandtagen fra budskabet.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Baseret på fordelingen af positive emojis har vi associeret hvert anonymiseret ID med en politisk blok. Hvis en bruger har mere end 60% af sine positive interaktioner inden for en politisk blok ser vi brugeren som støtte af den blok. Hvis en bruger ikke har 60% af sine positive interaktioner inden for én politisk blok siger vi at brugeren ikke tilhører en bestemt blok og vedkommende får ikke en politisk farve.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når vi ser på den politiske fordeling af de 600.000 brugere får vi følgende fordeling, hvor 63% associeres med  rød blok.  Ud fra det kan vi sige at den røde blok er en smule overrepræsenteret og den gule en smule underrepræsenteret i forhold til danskernes faktiske stemmeafgivning ved de tre folketingsvalg i denne periode.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Andet skridt: Beskrive den politiske fordeling på Københavnske events'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Efter at have associeret de 600.000 ID’er med en politisk blok, har vi set på deres engagement med events i København. I København har der i perioden fra 2012-2018 været oprettet ca. 150.000 offentlige events på Facebook. Det er alt fra store koncerter til små løbeklubber der mødes i en park. Igen har vi kun behandlet offentlige events og holdt os fra private events.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'For hver af de 150.000 offentlige events har vi udtrukket anonymiserede ID’er på de brugere der enten har indikeret at de deltager i eventet eller er interesseret i det. Selvom vi ikke ved, om disse brugere har været der fysisk, har de signaleret overfor deres Facebook-venner, at det er et event de kunne forestille sig at være til. De har på den måde udtrykt at de identificerer sig med det. '
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Af vores 600.000 politiske brugere har omkring halvdelen engageret sig med events in København. Hvis man ser på fordelingen af disse brugere har den tydeligvis ændret sig i forhold til den vi så tidligere. De røde fylder mere hvilket fortæller os at de politisk engagerede brugere der er aktive i København har bestemte politiske præferencer. Faktisk er fordelingen ret tæt på den gennemsnitlige Københavnske vælger fordeling over Folketingsvalgene i 2011, 2015 og 2019.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Ved at se på disse overlap har det været muligt at lave en politisk profil for hvert event i København. Hvis vi f.eks. tager de 1000 anonymiserede ID’er fra koncerten på VEGA ovenfor, ser vi efter hvor mange af dem vi kan genfinde i det politiske datasæt og hvilken politisk association, der har. Resultatet kunne være en politisk fordeling som den der ses nedenfor. Af de politiske brugere der har en blok-preference of har vist interesse i koncerten er fordelingen i dette tænkte eksempel 24% er røde, 1% er gule og 19% er blå og 55% enten ubesluttede eller politisk uinteresserede.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Tredje skridt: Beregne et events politiske ladning og diversitet'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Fordelingen ovenfor er grundlaget for at beregne to vigtige mål i kortet, nemlig et events ’politiske ladning’ og et events ’diversitets score’.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når vi beregner et events ’politiske ladning’ ser vi på hvor stor del af det samlede publikum der har klare politiske præferencer for enten rød, blå eller gul blok. Det vil sige forholdet mellem den der tilhører en blok og den resten af dem der har vist interesse i koncerten. Hvis vi igen ser på VEGA koncerten ovenfor , vil den have en politisk ladning på 0,45 fordi 45% af deltagerne (450 ud af 1000) har en klar politisk holdning.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når vi beregner et events diversitet er vi udelukkende interesseret i fordelingen mellem de blokloyale brugere, som i det tænkte VEGA eksempel ser ud som nedenfor.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Diversitets scoren går fra 0 til 100 og er designet til at vise hvor de blok loyale brugere potentielt møder hinanden. Et perfekt diverst event ville være et event hvor de blok-loyale brugere fordeler sig ligeligt med 33% røde, 33% blå og 33% gule (score = 100). Det modsatte scenarie ville være et event hvor de alle tilhører den samme blok (score = 0).'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Endeligt kan vi med afsæt i disse beregninger tildele hvert event en politisk kategori. Hvis et event hører til blandt den mest diverse fjerdedel i København siger vi at det er et ’diverst event’ og det markeres med grøn. Hvis mere end 70% af et events loyale politiske crowd er fra en bestemt blok siger vi at et event er domineret af den pågældende blok og det farves henholdsvist rødt gult eller blåt. Hvis et event ikke falder i nogle af de kategorier er det mindre interessant for vores analyse og det farves derfor gråt.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Fjerde skridt: Synliggøre steders politiske karakter gennem eventdata'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Eftersom et kort med 150.000 events ville være uoverskueligt og alt for let at af-anonymisere, har vi lavet grundkortet med fokus på de steder i København, der afholder events. VEGA er for eksempel et sted, der fra 2012-2018 har været vært for 2306 events. Vi bruger det samlede publikum på tværs af VEGAS events til at skabe VEGAs politiske profil, som i første omgang er tilgængelig som farven på stedets prik på kortet.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Stederne er farvet ud fra samme principper som events ovenfor. Hvis mere end 70% af steders loyale politiske brugere er røde er det rødt osv. Der er dog den væsentlige forskel at over 400 steder er anonymiseret fordi de havde en størrelse eller politisk profil, der udgjorde en risiko for af-anonymisering. Et sted er således anonymt hvis det har mindre end 50 brugere eller hvis en politisk blok udgør mere end 75% af de samlede brugere. Som det ses ovenfor er de anonyme steder markeret med ???'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Hvis du kører musen henover et sted, er det første du ser i denne profil hvor mange events et sted har afholdt samt navnene på det event som har tiltrukket det mest diverse publikum. Vi viser med vilje ikke det mindst diverse, da det også ville løbe en risiko for af-anonymisering. Her får du således en kvalitativ indikation på hvilke events der er gode til at skabe diverse politiske møder. I eksemplet med VEGA er det mest diverse event f.eks. en koncert med Rasmus Walter.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'I sidebaren har vi også brugt et vaffeldiagram til at illustrere hvilke typer events der har været afholdt på et givent sted samt den velkendte bar-chart til at vise publikums fordelingen.  Som det ses af visualiseringerne nedenfor kan to steder have nogenlunde samme fordeling af publikum, men en meget forskellig event profil.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Stedet til venstre er Christiansborg. Som sted tiltrækker det et publikum på tværs af rød og blå blok, men de kommer ikke så ofte til de samme events. Man kan sige at stedet er diverst (begge fløje føler sig hjemme), men det er dets events ikke. Stedet holder nogle diverse events hvor dets blå og røde publikum mødes, men er også vært for en række events der trækker enten et rødt eller blåt publikum. Stedet til højre er et kontorfællesskab på Gammeltorv, der har en politisk fordeling der ligner Christiansborgs. Men modsat Christiansborg, så komme de røde og de blå til de samme events på dette sted.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Stedet til venstre er Christiansborg. Som sted tiltrækker det et publikum på tværs af rød og blå blok, men de kommer ikke så ofte til de samme events. Man kan sige at stedet er diverst (begge fløje føler sig hjemme), men det er dets events ikke. Stedet holder nogle diverse events hvor dets blå og røde publikum mødes, men er også vært for en række events der trækker enten et rødt eller blåt publikum. Stedet til højre er et kontorfællesskab på Gammeltorv, der har en politisk fordeling der ligner Christiansborgs. Men modsat Christiansborg, så komme de røde og de blå til de samme events på dette sted.'
                    },
                ],
                [
                    {
                        type: 'title',
                        copy: 'Femte skridt: Skabe et overblik over zoners politiske karakter'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Det sidste skidt i designet af kortet var at producere et overordnet lag, der gør det muligt at sige noget om diversiteten i større områder af København. I stedet for at visualisere de enkelte steder har vi her inddelt København i de mest finmaskede administrative zoner kommunen stiller til rådighed (de hedder ’roder’). Dette zonelag er en opsummering af de steder der er placeret i zonen. F.eks. er VEGA placeret i zonen ’Enghavevejs’ der er hjemsted for xxxx steder i vores kort.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'På samme måde som ovenfor, bruger vi det samlede publikum på tværs af disse steder til at skabe Enhavevejs politiske profil. Det øverste lag af kortet viser forskellene i de forskellige områders diversitets score som er bergenet ud fra samme metode som beskrevet i ovenfor. Vi har således farvet de enkelte zoner alt efter hvor de ligger på diversitets indexet. Grøn indikerer høj diversitet, mens mørk lille indikerer en politiske boble.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'caption',
                        copy: 'Det øverste lag er kortet farver de administrative zoner baseret på om de ligger højt eller lavt på diversitets-indexes. De 25% mest diverse zoner er mørkegrønne og de 25% mindst diverse er mørke lilla.'
                    },
                    {
                        type: 'paragraph',
                        copy: 'Når du ser på zonekortet er der også information tilgængelig, når du bevæger din mus henover et område. Her fokuserer vi dog udelukkende på områdets politiske ladning og diversitets score, som vi har valgt at vise over tid. Det kan give en fornemmelse af den overordnede udvikling i området inden man zoomer ned og ser på den politiske fordeling på de konkrete steder der står bag den udvikling.'
                    },
                    {
                        type: 'images',
                        source: [img_placeholder]
                    },
                    {
                        type: 'paragraph',
                        copy: 'Vi håber at du nu har et fundament fro at forstå hvad du ser på det Københavnske diversitetskort. Hvis du har spørgsmål til metoden er du velkomment il at skrive til Anders Koed Madsen på akma@hum.aau.dk'
                    }
                ]
            ]
        }
    }
})

export default strings