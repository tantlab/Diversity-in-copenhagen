import LocalizedStrings from 'react-localization'

let strings = new LocalizedStrings({
    en: {
        nav: {
            about: "About",
            map: "Explore the Map"
        },
        home: {

        },
        map: {
            sidebar: {
                rode: {
                    place: {
                        least: "Least diverse place",
                        most: "Most diverse place",
                        diversity: "Average diversity",
                        charge: "Average political charge",
                        graphLegend: {
                            crowd: "Political Crowd",
                            score: "Diversity Score"
                        }
                    }
                },
                venue: {
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
    },
    it: {
        nav: {
            about: "Sul progetto",
            map: "Esplora la mappa"
        },
        home: {

        },
        map: {
            sidebar: {
                rode: {
                    place: {
                        least: "Posto meno diverso",
                        most: "Posto più diverso",
                        diversity: "Media diversità",
                        charge: "Media carica politica",
                        graphLegend: {
                            crowd: "Folla politica",
                            score: "Punteggio diversità"
                        }
                    }
                },
                venue: {
                    place: {
                        eventNumber: "Numero di eventi",
                        least: "Evento meno diverso",
                        most: "Evento più diverso",
                    },
                    graphs: {
                        charge: "Carica politica",
                        score: "Punteggio diversità",
                        types: "Tipi di eventi",
                        overall: "Folla totale",
                        political: "Folla politica"
                    }
                }
            }
        }
    }
})

export default strings