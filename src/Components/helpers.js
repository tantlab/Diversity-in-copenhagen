export default function trimString(str, length = 24) {
    if (str) {
        return str.length > length ? str.slice(0, length) + "..." : str
    } else return
}

// calculates factions presence in current viewing area
const getCurrentGroupsDataInView = (data) => {
    if (data.length > 0) {
        let c = [
            [],
            [],
            []
        ]
        let tot = []
        data.forEach(place => {
            c[0].push(place.properties['Total Red']);
            c[1].push(place.properties['Total Yellow']);
            c[2].push(place.properties['Total Blue']);
            tot.push(place.properties['Total Political Crowd'])
        });

        let avgs = c.map((faction) => {
            let aggregates = 0
            let tots = 0
            tot.map((placeTot, t) => {
                return [aggregates += ( /* placeTot *  */ faction[t]), tots += placeTot]
            })
            return aggregates / tots * 100
        })
        return avgs
    } else return [0, 0, 0]
}

// update features in view during map move
const updateMapData = (map) => {
    // update average values of bubblechart
    if (this.checkZoom()) {
        const viewportData = map.queryRenderedFeatures({
            layers: ['venues']
        })
        this.setState({
            factions: this.getCurrentGroupsDataInView(viewportData)
        })
        return viewportData
    } else return false
}

