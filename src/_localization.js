import LocalizedStrings from 'react-localization'

let strings = new LocalizedStrings({
    en: {
        nav: {
            about: "About",
            map: "Explore the Map"
        },
        map: {
            sidebar: {
                venue: {
                    graph: {
                        title: "Diversity Score"
                    },
                    events: {
                        least: "Least diverse event",
                        most: "Most diverse event"
                    }
                },        
                events: {
                    title: "Types of events",
                    most: "Most diverse event",
                    least: "Least diverse event"
                },
                area: "Area",
                diversity: "Avg diversity",
                colors: {
                    r: "Red",
                    y: "Yellow",
                    b: "Blue"
                }
            }
        },
    },
    it: {
        nav: {
            about: "Sul progetto",
            map: "Esplora la mappa"
        },
        map: {
            sidebar: {
                venue: {
                    graph: {
                        title: "Punteggio diversità"
                    },
                    events: {
                        least: "Evento più diverso",
                        most: "Evento meno diverso"
                    }
                },        
                events: {
                    title: "Tipi di eventi",
                    most: "Eventi più diversi",
                    least: "Eventi meno diversi"
                },
                area: "Zona",
                diversity: "Diversità",
                colors: {
                    r: "Rosso",
                    y: "Giallo",
                    b: "Blu"
                }
            }
        }
    }
})

export default strings