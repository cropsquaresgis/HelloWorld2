var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_22Jan31NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "22Jan31NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/22Jan31NDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9895984.136575, 5447820.189751, -9835598.423570, 5504393.119569]
                            })
                        });
var format_22Jan31ParcelStats3_2 = new ol.format.GeoJSON();
var features_22Jan31ParcelStats3_2 = format_22Jan31ParcelStats3_2.readFeatures(json_22Jan31ParcelStats3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22Jan31ParcelStats3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22Jan31ParcelStats3_2.addFeatures(features_22Jan31ParcelStats3_2);
var lyr_22Jan31ParcelStats3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_22Jan31ParcelStats3_2, 
                style: style_22Jan31ParcelStats3_2,
                interactive: true,
    title: '22Jan31ParcelStats3<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_0.png" /> -0.096 - -0.024<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_1.png" /> -0.024 - -0.004<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_2.png" /> -0.004 - 0.02<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_3.png" /> 0.02 - 0.047<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_4.png" /> 0.047 - 0.078<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_5.png" /> 0.078 - 0.118<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_6.png" /> 0.118 - 0.159<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_7.png" /> 0.159 - 0.22<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_8.png" /> 0.22 - 0.31<br />\
    <img src="styles/legend/22Jan31ParcelStats3_2_9.png" /> 0.31 - 0.436<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_22Jan31NDVI_1.setVisible(true);lyr_22Jan31ParcelStats3_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_22Jan31NDVI_1,lyr_22Jan31ParcelStats3_2];
lyr_22Jan31ParcelStats3_2.set('fieldAliases', {'PARCELID': 'PARCELID', 'OWNERNME1': 'OWNERNME1', 'OWNERNME2': 'OWNERNME2', 'OWNERNAMES': 'OWNERNAMES', 'GISACRE': 'GISACRE', 'SITEADDRES': 'SITEADDRES', 'SITECSZ': 'SITECSZ', '22Jan31NDV': '22Jan31NDV', });
lyr_22Jan31ParcelStats3_2.set('fieldImages', {'PARCELID': 'TextEdit', 'OWNERNME1': 'TextEdit', 'OWNERNME2': 'TextEdit', 'OWNERNAMES': 'TextEdit', 'GISACRE': 'TextEdit', 'SITEADDRES': 'TextEdit', 'SITECSZ': 'TextEdit', '22Jan31NDV': 'TextEdit', });
lyr_22Jan31ParcelStats3_2.set('fieldLabels', {'PARCELID': 'no label', 'OWNERNME1': 'no label', 'OWNERNME2': 'no label', 'OWNERNAMES': 'no label', 'GISACRE': 'no label', 'SITEADDRES': 'no label', 'SITECSZ': 'no label', '22Jan31NDV': 'no label', });
lyr_22Jan31ParcelStats3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});