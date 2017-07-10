var map, streetview, overlay, pano, globalpano;

function initialize() {
    streetView = new google.maps.StreetViewPanorama(
        document.getElementById('canvas'), {
            pano: 'pano02000',
            visible: true,
            panoProvider: getCustomPanorama
        });

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: pano02000.location.latLng,
            zoom: 19,
            streetView: streetView,
            streetViewControl: true,
            styles: mapStyle
        });

    streetView.addListener('position_changed', function() {
        map.panTo({
            lat: streetView.position.lat(),
            lng: streetView.position.lng()
        });

        localStorage.clear(); // remove previously stored pano
        globalpano = streetView.getPano(); // get current pano
        localStorage.setItem("globalpano", globalpano); // write current pano to ls
    });

    createMarker(pano02000.location.latLng, map, pano02000.location.pano);
    createMarker(pano02001.location.latLng, map, pano02001.location.pano);
    createMarker(pano02002.location.latLng, map, pano02002.location.pano);
    createMarker(pano02003.location.latLng, map, pano02003.location.pano);
    createMarker(pano02004.location.latLng, map, pano02004.location.pano);
    createMarker(pano02005.location.latLng, map, pano02005.location.pano);
    createMarker(pano02006.location.latLng, map, pano02006.location.pano);
    createMarker(pano02007.location.latLng, map, pano02007.location.pano);
    createMarker(pano02008.location.latLng, map, pano02008.location.pano);
    createMarker(pano02009.location.latLng, map, pano02009.location.pano);
    createMarker(pano02010.location.latLng, map, pano02010.location.pano);
    createMarker(pano02011.location.latLng, map, pano02011.location.pano);
    createMarker(pano02012.location.latLng, map, pano02012.location.pano);
    createMarker(pano02013.location.latLng, map, pano02013.location.pano);
    createMarker(pano02014.location.latLng, map, pano02014.location.pano);
    createMarker(pano05000.location.latLng, map, pano05000.location.pano);
    createMarker(pano07000.location.latLng, map, pano07000.location.pano);
    createMarker(pano07001.location.latLng, map, pano07001.location.pano);
    createMarker(pano07002.location.latLng, map, pano07002.location.pano);
    createMarker(pano07003.location.latLng, map, pano07003.location.pano);
    createMarker(pano07004.location.latLng, map, pano07004.location.pano);
    createMarker(pano07005.location.latLng, map, pano07005.location.pano);
    createMarker(pano11000.location.latLng, map, pano11000.location.pano);
    createMarker(pano11001.location.latLng, map, pano11001.location.pano);
    createMarker(pano11002.location.latLng, map, pano11002.location.pano);
    createMarker(pano11003.location.latLng, map, pano11003.location.pano);
    createMarker(pano11004.location.latLng, map, pano11004.location.pano);
    createMarker(pano11005.location.latLng, map, pano11005.location.pano);
    createMarker(pano11006.location.latLng, map, pano11006.location.pano);
    createMarker(pano11007.location.latLng, map, pano11007.location.pano);
    createMarker(pano11008.location.latLng, map, pano11008.location.pano);
    createMarker(pano11009.location.latLng, map, pano11009.location.pano);
    createMarker(pano11010.location.latLng, map, pano11010.location.pano);
    createMarker(pano11011.location.latLng, map, pano11011.location.pano);
    createMarker(pano11012.location.latLng, map, pano11012.location.pano);
    createMarker(pano11013.location.latLng, map, pano11013.location.pano);
    createMarker(pano11014.location.latLng, map, pano11014.location.pano);
    createMarker(pano11015.location.latLng, map, pano11015.location.pano);
    createMarker(pano11016.location.latLng, map, pano11016.location.pano);
    createMarker(pano11017.location.latLng, map, pano11017.location.pano);
    createMarker(pano11018.location.latLng, map, pano11018.location.pano);
    createMarker(pano11019.location.latLng, map, pano11019.location.pano);
    createMarker(pano11020.location.latLng, map, pano11020.location.pano);
    createMarker(pano11021.location.latLng, map, pano11021.location.pano);
    createMarker(pano11022.location.latLng, map, pano11022.location.pano);
    createMarker(pano12000.location.latLng, map, pano12000.location.pano);
    createMarker(pano12001.location.latLng, map, pano12001.location.pano);
    createMarker(pano12002.location.latLng, map, pano12002.location.pano);
    createMarker(pano12003.location.latLng, map, pano12003.location.pano);
    createMarker(pano12004.location.latLng, map, pano12004.location.pano);
    createMarker(pano12005.location.latLng, map, pano12005.location.pano);
    createMarker(pano12006.location.latLng, map, pano12006.location.pano);
    createMarker(pano12007.location.latLng, map, pano12007.location.pano);
    createMarker(pano12008.location.latLng, map, pano12008.location.pano);
    createMarker(pano12009.location.latLng, map, pano12009.location.pano);
    createMarker(pano12010.location.latLng, map, pano12010.location.pano);
    createMarker(pano12011.location.latLng, map, pano12011.location.pano);
    createMarker(pano12012.location.latLng, map, pano12012.location.pano);
    createMarker(pano12013.location.latLng, map, pano12013.location.pano);
    createMarker(pano12014.location.latLng, map, pano12014.location.pano);
    createMarker(pano12015.location.latLng, map, pano12015.location.pano);
    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://storage.googleapis.com/brechtv/SV%202/files/verdieping2.kml',
        map: map,
        preserveViewport: true
    });
}

function createMarker(pos, map, title) {
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: title,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: "#6D7BE3",
            scale: 5
        }
    });
    marker.addListener("click", function() {
        map.setCenter(marker.getPosition());
        streetView.setPano(title);
    });
}

function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    return "https://storage.googleapis.com/brechtv/SV%202/images/2e%20verdieping/" + pano + '.JPG';
}

function getCustomPanorama(pano, zoom, tileX, tileY) {
    switch (pano) {
        case 'pano02000':
            return pano02000;
            break;
        case 'pano02001':
            return pano02001;
            break;
        case 'pano02002':
            return pano02002;
            break;
        case 'pano02003':
            return pano02003;
            break;
        case 'pano02004':
            return pano02004;
            break;
        case 'pano02005':
            return pano02005;
            break;
        case 'pano02006':
            return pano02006;
            break;
        case 'pano02007':
            return pano02007;
            break;
        case 'pano02008':
            return pano02008;
            break;
        case 'pano02009':
            return pano02009;
            break;
        case 'pano02010':
            return pano02010;
            break;
        case 'pano02011':
            return pano02011;
            break;
        case 'pano02012':
            return pano02012;
            break;
        case 'pano02013':
            return pano02013;
            break;
        case 'pano02014':
            return pano02014;
            break;
        case 'pano05000':
            return pano05000;
            break;
        case 'pano07000':
            return pano07000;
            break;
        case 'pano07001':
            return pano07001;
            break;
        case 'pano07002':
            return pano07002;
            break;
        case 'pano07003':
            return pano07003;
            break;
        case 'pano07004':
            return pano07004;
            break;
        case 'pano07005':
            return pano07005;
            break;
        case 'pano11000':
            return pano11000;
            break;
        case 'pano11001':
            return pano11001;
            break;
        case 'pano11002':
            return pano11002;
            break;
        case 'pano11003':
            return pano11003;
            break;
        case 'pano11004':
            return pano11004;
            break;
        case 'pano11005':
            return pano11005;
            break;
        case 'pano11006':
            return pano11006;
            break;
        case 'pano11007':
            return pano11007;
            break;
        case 'pano11008':
            return pano11008;
            break;
        case 'pano11009':
            return pano11009;
            break;
        case 'pano11010':
            return pano11010;
            break;
        case 'pano11011':
            return pano11011;
            break;
        case 'pano11012':
            return pano11012;
            break;
        case 'pano11013':
            return pano11013;
            break;
        case 'pano11014':
            return pano11014;
            break;
        case 'pano11015':
            return pano11015;
            break;
        case 'pano11016':
            return pano11016;
            break;
        case 'pano11017':
            return pano11017;
            break;
        case 'pano11018':
            return pano11018;
            break;
        case 'pano11019':
            return pano11019;
            break;
        case 'pano11020':
            return pano11020;
            break;
        case 'pano11021':
            return pano11021;
            break;
        case 'pano11022':
            return pano11022;
            break;
        case 'pano12000':
            return pano12000;
            break;
        case 'pano12001':
            return pano12001;
            break;
        case 'pano12002':
            return pano12002;
            break;
        case 'pano12003':
            return pano12003;
            break;
        case 'pano12004':
            return pano12004;
            break;
        case 'pano12005':
            return pano12005;
            break;
        case 'pano12006':
            return pano12006;
            break;
        case 'pano12007':
            return pano12007;
            break;
        case 'pano12008':
            return pano12008;
            break;
        case 'pano12009':
            return pano12009;
            break;
        case 'pano12010':
            return pano12010;
            break;
        case 'pano12011':
            return pano12011;
            break;
        case 'pano12012':
            return pano12012;
            break;
        case 'pano12013':
            return pano12013;
            break;
        case 'pano12014':
            return pano12014;
            break;
        case 'pano12015':
            return pano12015;
            break;
        default:
            return pano02000;
    }
}
var pano02000 = {
    location: {
        pano: 'pano02000',
        description: 'Traphal B200',
        latLng: new google.maps.LatLng(51.0608323, 3.70788232)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02001",
        heading: 147
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 168,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02001 = {
    location: {
        pano: 'pano02001',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.0608058, 3.70790963)
    },
    links: [{
        description: "Naar traphal B200",
        pano: "pano02000",
        heading: 327
    }, {
        description: "Naar gang B201",
        pano: "pano02002",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02004",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 125,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02002 = {
    location: {
        pano: 'pano02002',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06082126, 3.70793663)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02001",
        heading: 227
    }, {
        description: "Naar gang B201",
        pano: "pano02003",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 219,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02003 = {
    location: {
        pano: 'pano02003',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06080183, 3.70796534)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02002",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 237,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02004 = {
    location: {
        pano: 'pano02004',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06076328, 3.70783536)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02001",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02005",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 246,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02005 = {
    location: {
        pano: 'pano02005',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06081394, 3.70776231)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02004",
        heading: 137
    }, {
        description: "Naar gang B201",
        pano: "pano02006",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 239,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02006 = {
    location: {
        pano: 'pano02006',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06076866, 3.70768324)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02005",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02007",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 87,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02007 = {
    location: {
        pano: 'pano02007',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06071833, 3.70759535)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02006",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02008",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 197,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02008 = {
    location: {
        pano: 'pano02008',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06067947, 3.70752748)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02007",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02009",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 133,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02009 = {
    location: {
        pano: 'pano02009',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06062593, 3.70743399)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02008",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02010",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 97,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02010 = {
    location: {
        pano: 'pano02010',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06057884, 3.70735176)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02009",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02011",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 67,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02011 = {
    location: {
        pano: 'pano02011',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06050654, 3.7072255)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02010",
        heading: 47
    }, {
        description: "Naar gang B201",
        pano: "pano02012",
        heading: 139
    }, {
        description: "Naar gang B201",
        pano: "pano02013",
        heading: 320
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 348,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02012 = {
    location: {
        pano: 'pano02012',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.0604383, 3.7073173)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02011",
        heading: 319
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 103,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02013 = {
    location: {
        pano: 'pano02013',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06055166, 3.70716656)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02011",
        heading: 140
    }, {
        description: "Naar noodtrap B239",
        pano: "pano02014",
        heading: 237
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 13,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02014 = {
    location: {
        pano: 'pano02014',
        description: 'Noodtrap B239',
        latLng: new google.maps.LatLng(51.06053145, 3.70711629)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02013",
        heading: 57
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 239,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05000 = {
    location: {
        pano: 'pano05000',
        description: 'Traphal E222',
        latLng: new google.maps.LatLng(51.0599667, 3.70936559)
    },
    links: [{
        description: "FOUT",
        pano: "pano02013",
        heading: 292
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 112,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07000 = {
    location: {
        pano: 'pano07000',
        description: 'Traphal G210',
        latLng: new google.maps.LatLng(51.05924978, 3.70805315)
    },
    links: [{
        description: "Naar traphal G210",
        pano: "pano07001",
        heading: 281
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 286,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07001 = {
    location: {
        pano: 'pano07001',
        description: 'Traphal G210',
        latLng: new google.maps.LatLng(51.05925642, 3.70799902)
    },
    links: [{
        description: "Naar traphal G210",
        pano: "pano07000",
        heading: 101
    }, {
        description: "Naar gang G204",
        pano: "pano07002",
        heading: 299
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 124,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07002 = {
    location: {
        pano: 'pano07002',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05927358, 3.70794986)
    },
    links: [{
        description: "Naar traphal G210",
        pano: "pano07001",
        heading: 119
    }, {
        description: "Naar gang G204",
        pano: "pano07003",
        heading: 28
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 208,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07003 = {
    location: {
        pano: 'pano07003',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05931264, 3.70798419)
    },
    links: [{
        description: "Naar gang G204",
        pano: "pano07002",
        heading: 208
    }, {
        description: "Naar gang G204",
        pano: "pano07004",
        heading: 28
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 136,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07004 = {
    location: {
        pano: 'pano07004',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05935686, 3.70802318)
    },
    links: [{
        description: "Naar gang G204",
        pano: "pano07003",
        heading: 208
    }, {
        description: "Naar gang G204",
        pano: "pano07005",
        heading: 50
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 41,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07005 = {
    location: {
        pano: 'pano07005',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05937402, 3.70805635)
    },
    links: [{
        description: "Naar gang G204",
        pano: "pano07004",
        heading: 230
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 98,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11000 = {
    location: {
        pano: 'pano11000',
        description: 'Traphal L202',
        latLng: new google.maps.LatLng(51.05977339, 3.71021651)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11001",
        heading: 249
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 159,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11001 = {
    location: {
        pano: 'pano11001',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05975624, 3.7102414)
    },
    links: [{
        description: "Naar traphal L202",
        pano: "pano11000",
        heading: 317
    }, {
        description: "Naar gang L201",
        pano: "pano11002",
        heading: 47
    }, {
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 325,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11002 = {
    location: {
        pano: 'pano11002',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05977033, 3.71026585)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11001",
        heading: 227
    }, {
        description: "Naar gang L201",
        pano: "pano11003",
        heading: 47
    }, {
        description: "Naar gang L201",
        pano: "pano11011",
        heading: 319
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 99,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11003 = {
    location: {
        pano: 'pano11003',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.0597959, 3.71031023)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11002",
        heading: 227
    }, {
        description: "Naar gang L201",
        pano: "pano11004",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 91,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11004 = {
    location: {
        pano: 'pano11004',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.0598303, 3.71036994)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11003",
        heading: 227
    }, {
        description: "Naar gang L201",
        pano: "pano11005",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 105,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11005 = {
    location: {
        pano: 'pano11005',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05985651, 3.71033192)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11004",
        heading: 137
    }, {
        description: "Naar gang L201",
        pano: "pano11006",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 346,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11006 = {
    location: {
        pano: 'pano11006',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05987622, 3.71030332)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11005",
        heading: 137
    }, {
        description: "Naar gang L201",
        pano: "pano11007",
        heading: 317
    }, {
        description: "Naar gang L201",
        pano: "pano11010",
        heading: 229
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 7,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11007 = {
    location: {
        pano: 'pano11007',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.0599073, 3.71025823)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11006",
        heading: 137
    }, {
        description: "Naar gang L201",
        pano: "pano11008",
        heading: 317
    }, {
        description: "Naar terras",
        pano: "pano11009",
        heading: 234
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 104,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11008 = {
    location: {
        pano: 'pano11008',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05993598, 3.71021662)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11007",
        heading: 137
    }, {
        description: "Naar gang L201",
        pano: "pano12014",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 96,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11009 = {
    location: {
        pano: 'pano11009',
        description: 'Terras',
        latLng: new google.maps.LatLng(51.05988283, 3.710203)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11007",
        heading: 54
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 328,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11010 = {
    location: {
        pano: 'pano11010',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05984908, 3.71025197)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11006",
        heading: 49
    }, {
        description: "Naar gang L201",
        pano: "pano11011",
        heading: 222
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 290,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11011 = {
    location: {
        pano: 'pano11011',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05981552, 3.71020372)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11010",
        heading: 42
    }, {
        description: "Naar gang L201",
        pano: "pano11002",
        heading: 139
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 328,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11012 = {
    location: {
        pano: 'pano11012',
        description: 'Gang L209',
        latLng: new google.maps.LatLng(51.0597118, 3.71016428)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11001",
        heading: 47
    }, {
        description: "Naar lokaal L226",
        pano: "pano11013",
        heading: 137
    }, {
        description: "Naar gang L210",
        pano: "pano11017",
        heading: 227
    }, {
        description: "Naar gang L209",
        pano: "pano11016",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 95,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11013 = {
    location: {
        pano: 'pano11013',
        description: 'Lokaal L226',
        latLng: new google.maps.LatLng(51.05968368, 3.71020509)
    },
    links: [{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 317
    }, {
        description: "Naar lokaal L226",
        pano: "pano11014",
        heading: 233
    }, {
        description: "Naar lokaal L226",
        pano: "pano11015",
        heading: 64
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 304,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11014 = {
    location: {
        pano: 'pano11014',
        description: 'Lokaal L226',
        latLng: new google.maps.LatLng(51.05964823, 3.71012787)
    },
    links: [{
        description: "Naar lokaal L226",
        pano: "pano11013",
        heading: 53
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 252,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11015 = {
    location: {
        pano: 'pano11015',
        description: 'Lokaal L226',
        latLng: new google.maps.LatLng(51.05971756, 3.71032011)
    },
    links: [{
        description: "Naar lokaal L226",
        pano: "pano11013",
        heading: 244
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11016 = {
    location: {
        pano: 'pano11016',
        description: 'Gang L209',
        latLng: new google.maps.LatLng(51.05975639, 3.71009959)
    },
    links: [{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 110,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11017 = {
    location: {
        pano: 'pano11017',
        description: 'Gang L210',
        latLng: new google.maps.LatLng(51.0596814, 3.71011151)
    },
    links: [{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 47
    }, {
        description: "Naar gang L210",
        pano: "pano11018",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 74,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11018 = {
    location: {
        pano: 'pano11018',
        description: 'Gang L210',
        latLng: new google.maps.LatLng(51.05964409, 3.71004677)
    },
    links: [{
        description: "Naar gang L210",
        pano: "pano11017",
        heading: 47
    }, {
        description: "Naar gang L210",
        pano: "pano11019",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 87,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11019 = {
    location: {
        pano: 'pano11019',
        description: 'Gang L210',
        latLng: new google.maps.LatLng(51.05968317, 3.70999008)
    },
    links: [{
        description: "Naar gang L210",
        pano: "pano11018",
        heading: 137
    }, {
        description: "Naar gang M201",
        pano: "pano11020",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 103,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11020 = {
    location: {
        pano: 'pano11020',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05971155, 3.70994889)
    },
    links: [{
        description: "Naar gang L210",
        pano: "pano11019",
        heading: 137
    }, {
        description: "Naar noodtrap",
        pano: "pano11021",
        heading: 241
    }, {
        description: "Naar gang M201",
        pano: "pano11022",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 88,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11021 = {
    location: {
        pano: 'pano11021',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.05969885, 3.70991201)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano11020",
        heading: 61
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 341,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11022 = {
    location: {
        pano: 'pano11022',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.0597469, 3.70989761)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano11020",
        heading: 137
    }, {
        description: "Naar gang M201",
        pano: "pano12008",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 134,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12000 = {
    location: {
        pano: 'pano12000',
        description: 'Traphal M202',
        latLng: new google.maps.LatLng(51.05992304, 3.70988022)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12001",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 231,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12001 = {
    location: {
        pano: 'pano12001',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05994041, 3.70985502)
    },
    links: [{
        description: "Naar traphal M202",
        pano: "pano12000",
        heading: 137
    }, {
        description: "Naar gang M201",
        pano: "pano12002",
        heading: 227
    }, {
        description: "Naar gang M201",
        pano: "pano12010",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 101,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12002 = {
    location: {
        pano: 'pano12002',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05992682, 3.70983144)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12001",
        heading: 47
    }, {
        description: "Naar gang M201",
        pano: "pano12003",
        heading: 137
    }, {
        description: "Naar gang M201",
        pano: "pano12007",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 181,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12003 = {
    location: {
        pano: 'pano12003',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05987788, 3.70990313)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12002",
        heading: 317
    }, {
        description: "Naar gang M201",
        pano: "pano12004",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 153,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12004 = {
    location: {
        pano: 'pano12004',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.0598165, 3.70979661)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12003",
        heading: 47
    }, {
        description: "Naar gang M201",
        pano: "pano12005",
        heading: 317
    }, {
        description: "Naar gang M201",
        pano: "pano12008",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 188,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12005 = {
    location: {
        pano: 'pano12005',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05984248, 3.70975892)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12004",
        heading: 137
    }, {
        description: "Naar gang M201",
        pano: "pano12006",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 74,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12006 = {
    location: {
        pano: 'pano12006',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05986565, 3.70972529)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12005",
        heading: 137
    }, {
        description: "Naar gang M201",
        pano: "pano12007",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 282,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12007 = {
    location: {
        pano: 'pano12007',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.0598961, 3.70977813)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12006",
        heading: 227
    }, {
        description: "Naar gang M201",
        pano: "pano12002",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 357,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12008 = {
    location: {
        pano: 'pano12008',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05978866, 3.70983701)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12004",
        heading: 317
    }, {
        description: "Naar terras",
        pano: "pano12009",
        heading: 56
    }, {
        description: "Naar gang M201",
        pano: "pano11022",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 77,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12009 = {
    location: {
        pano: 'pano12009',
        description: 'Terras',
        latLng: new google.maps.LatLng(51.05981043, 3.70988893)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12008",
        heading: 236
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 69,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12010 = {
    location: {
        pano: 'pano12010',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05997044, 3.70990714)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12001",
        heading: 227
    }, {
        description: "Naar gang M201",
        pano: "pano12011",
        heading: 52
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 48,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12011 = {
    location: {
        pano: 'pano12011',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.06002298, 3.71001433)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12010",
        heading: 232
    }, {
        description: "Naar gang M201",
        pano: "pano12012",
        heading: 48
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 59,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12012 = {
    location: {
        pano: 'pano12012',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.06005334, 3.7100698)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12011",
        heading: 228
    }, {
        description: "Naar gang M201",
        pano: "pano12013",
        heading: 149
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 173,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12013 = {
    location: {
        pano: 'pano12013',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.06000625, 3.71011466)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12012",
        heading: 329
    }, {
        description: "Naar gang L201",
        pano: "pano12014",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12014 = {
    location: {
        pano: 'pano12014',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05998441, 3.71014635)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12013",
        heading: 317
    }, {
        description: "Naar gang L201",
        pano: "pano11008",
        heading: 137
    }, {
        description: "Naar noodtrap",
        pano: "pano12015",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 129,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12015 = {
    location: {
        pano: 'pano12015',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.06000225, 3.71017695)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano12014",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 8,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
google.maps.event.addDomListener(window, 'load', initialize);
