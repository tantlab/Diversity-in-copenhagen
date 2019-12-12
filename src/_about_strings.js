import LocalizedStrings from 'react-localization'
import img1 from './static/img/about/img_1.png'
// import img2 from './static/img/about/img_2.png'

import sofie from './static/img/about/sofie_thorsen.jpg'
import alex from './static/img/about/alexander_spitzer.jpg'
import jeff from './static/img/about/jeff_risom.jpg'
import sophia from './static/img/about/sophia_schuff.jpg'
import edo from './static/img/about/edoardo_guido.png'

let data_strings = new LocalizedStrings({
    en: {
        title: "Når byen bryder boblen",
        content: [
            [
                {
                    type: 'title',
                    copy: 'Et datascape om politisk mangfoldighed i København'
                },
                {
                    type: 'paragraph',
                    copy: 'Hvor skaber byen mødesteder på tværs af politiske holdninger? Er der noget omkring byens design og programmering, der spiller en rolle i den forbindelse? Det er nogle af de demokratiske og urbane spørgsmål, der har drevet forskere fra TANTLab og bydesignere fra GEHL til sammen at konstruere det kort over Københavns politiske mangfoldighed, du er i gang med at udforske.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vi diskuterer ofte byers diversitet ude fra statistik om beboeres demografiske sammensætning. Dette kort giver et helt andet blik fra et anderledes datagrundlag. Gennem en kombination af digitale spor fra Facebook og kvalitative observationer, har vi forsøgt at kortlægge Københavns potentiale for politiske møder. Vi har taget afsæt i folks digitale engagement med byens rum brugt det til at synliggøre opdelinger der ikke handler om eksempelvis køn, alder og postnummer.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vi har kastet os ud i denne kortlægning fordi vi mener, at det er vigtigt at humanister og byplanlæggere i fællesskab eksperimenterer med at bruge nye digitale datakilder til at sætte fokus på de menneskelige aspekter af byen. I en tid hvor den ’smarte by’ ofte bliver oversat til sensor-baserede effektiviseringer af byens hårde infrastruktur (som biler og veje), skal vi insistere på at vi også kan bruge det digitale datalandskab til også at blive klogere på mønstre i menneskelige relationer og møder. I dette konkrete projekt har vi forsøgt at skabe et “feedback loop” mellem digitale spor og menneskers oplevelse af byen fra øjenhøjde.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vores kort skal ikke læses som den endelige sandhed om byens politiske opdeling. Målet med projektet er at stille data til rådighed på en måde så du - som bruger - kan udforske det, spejle dig selv i det og stille kritiske spørgsmål til det. Hvis det kan fungere som et empirisk afsæt for en debat om hvad der er værdifuldt i vores by – eller hvad vi kan og bør bruge nye digitale datakilder til – så har vi opnået hvad vi ville.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vi håber at du vil udforske kortet [link to map] og metoden [link to methods section] i den ånd. Vi vil også gerne høre din mening.  Hvad har vi overset og misforstået? Hvor har vi ramt plet?Giv lyd, hvis du kan forestille dig en bedre tilgang til data, har en data datakilde som vil gøre dette kort mere interessant, eller bare har en holdning til brugen af digitalt data i det hele taget.'
                }
            ],
            [
                {
                    type: 'images',
                    source: [img1]
                }
            ],
            [
                {
                    type: 'title',
                    copy: 'Project Teamet'
                },
                {
                    type: 'people',
                    list: [
                        {
                            name: 'Anders Koed Madsen',
                            img: '',
                            fields: [
                                { type: 'text', value: 'Akademisk Projektleder' },
                                { type: 'text', value: 'TANTLab' },
                                { type: 'mailto', value: 'akma@hum.aau.dk' }
                            ]
                        },
                        {
                            name: 'Jeff Risom',
                            img: jeff,
                            fields: [
                                { type: 'text', value: 'Ledende Samarbeidspartner' },
                                { type: 'text', value: 'GEHL' },
                                { type: 'mailto', value: 'jeff@gehlpeople.com' }
                            ]
                        },
                        {
                            name: 'Asger Gehrt Olesen',
                            img: '',
                            fields: [
                                { type: 'text', value: 'PhD Studerende' },
                                { type: 'text', value: 'TANTLab' }
                            ]
                        },
                        {
                            name: 'Sofie Thorsen',
                            img: sofie,
                            fields: [
                                { type: 'text', value: 'PhD Studerende' },
                                { type: 'text', value: 'TANTLab/GEHL' }
                            ]
                        },
                        {
                            name: 'Alexander Spitzer',
                            img: alex,
                            fields: [
                                { type: 'text', value: 'Innovation Team' },
                                { type: 'text', value: 'GEHL' }
                            ]
                        },
                        {
                            name: 'Sophia Schuff',
                            img: sophia,
                            fields: [
                                { type: 'text', value: 'Innovation Team' },
                                { type: 'text', value: 'GEHL' }
                            ]
                        },
                        {
                            name: 'Edoardo Guido',
                            img: edo,
                            fields: [
                                { type: 'text', value: 'Data Visualization, Development' },
                                { type: 'link', value: 'https://edoardoguido.com' }
                            ]
                        }        
                    ]
                }
            ]
        ]
    },
    da: {
        title: "Når byen bryder boblen",
        content: [
            [
                {
                    type: 'title',
                    copy: 'Et datascape om politisk mangfoldighed i København'
                },
                {
                    type: 'paragraph',
                    copy: 'Hvor skaber byen mødesteder på tværs af politiske holdninger? Er der noget omkring byens design og programmering, der spiller en rolle i den forbindelse? Det er nogle af de demokratiske og urbane spørgsmål, der har drevet forskere fra TANTLab og bydesignere fra GEHL til sammen at konstruere det kort over Københavns politiske mangfoldighed, du er i gang med at udforske.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vi diskuterer ofte byers diversitet ude fra statistik om beboeres demografiske sammensætning. Dette kort giver et helt andet blik fra et anderledes datagrundlag. Gennem en kombination af digitale spor fra Facebook og kvalitative observationer, har vi forsøgt at kortlægge Københavns potentiale for politiske møder. Vi har taget afsæt i folks digitale engagement med byens rum brugt det til at synliggøre opdelinger der ikke handler om eksempelvis køn, alder og postnummer.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vi har kastet os ud i denne kortlægning fordi vi mener, at det er vigtigt at humanister og byplanlæggere i fællesskab eksperimenterer med at bruge nye digitale datakilder til at sætte fokus på de menneskelige aspekter af byen. I en tid hvor den ’smarte by’ ofte bliver oversat til sensor-baserede effektiviseringer af byens hårde infrastruktur (som biler og veje), skal vi insistere på at vi også kan bruge det digitale datalandskab til også at blive klogere på mønstre i menneskelige relationer og møder. I dette konkrete projekt har vi forsøgt at skabe et “feedback loop” mellem digitale spor og menneskers oplevelse af byen fra øjenhøjde.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vores kort skal ikke læses som den endelige sandhed om byens politiske opdeling. Målet med projektet er at stille data til rådighed på en måde så du - som bruger - kan udforske det, spejle dig selv i det og stille kritiske spørgsmål til det. Hvis det kan fungere som et empirisk afsæt for en debat om hvad der er værdifuldt i vores by – eller hvad vi kan og bør bruge nye digitale datakilder til – så har vi opnået hvad vi ville.'
                },
                {
                    type: 'paragraph',
                    copy: 'Vi håber at du vil udforske kortet [link to map] og metoden [link to methods section] i den ånd. Vi vil også gerne høre din mening.  Hvad har vi overset og misforstået? Hvor har vi ramt plet?Giv lyd, hvis du kan forestille dig en bedre tilgang til data, har en data datakilde som vil gøre dette kort mere interessant, eller bare har en holdning til brugen af digitalt data i det hele taget.'
                }
            ],
            [
                {
                    type: 'images',
                    source: [img1]
                }
            ],
            [
                {
                    type: 'title',
                    copy: 'Project Teamet'
                },
                {
                    type: 'people',
                    list: [
                        {
                            name: 'Anders Koed Madsen',
                            img: '',
                            fields: [
                                { type: 'text', value: 'Akademisk Projektleder' },
                                { type: 'text', value: 'TANTLab' },
                                { type: 'mailto', value: 'akma@hum.aau.dk' }
                            ]
                        },
                        {
                            name: 'Jeff Risom',
                            img: jeff,
                            fields: [
                                { type: 'text', value: 'Ledende Samarbeidspartner' },
                                { type: 'text', value: 'GEHL' },
                                { type: 'mailto', value: 'jeff@gehlpeople.com' }
                            ]
                        },
                        {
                            name: 'Asger Gehrt Olesen',
                            img: '',
                            fields: [
                                { type: 'text', value: 'PhD Studerende' },
                                { type: 'text', value: 'TANTLab' }
                            ]
                        },
                        {
                            name: 'Sofie Thorsen',
                            img: sofie,
                            fields: [
                                { type: 'text', value: 'PhD Studerende' },
                                { type: 'text', value: 'TANTLab/GEHL' }
                            ]
                        },
                        {
                            name: 'Alexander Spitzer',
                            img: alex,
                            fields: [
                                { type: 'text', value: 'Innovation Team' },
                                { type: 'text', value: 'GEHL' }
                            ]
                        },
                        {
                            name: 'Sophia Schuff',
                            img: sophia,
                            fields: [
                                { type: 'text', value: 'Innovation Team' },
                                { type: 'text', value: 'GEHL' }
                            ]
                        },
                        {
                            name: 'Edoardo Guido',
                            img: edo,
                            fields: [
                                { type: 'text', value: 'Data Visualization, Website Development' },
                                { type: 'link', value: 'https://edoardoguido.com' }
                            ]
                        }        
                    ]
                }
            ]
        ]
    }
})

export default data_strings