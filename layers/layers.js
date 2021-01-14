var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_NDVI110121_1 = new ol.format.GeoJSON();
var features_NDVI110121_1 = format_NDVI110121_1.readFeatures(json_NDVI110121_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI110121_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI110121_1.addFeatures(features_NDVI110121_1);
var lyr_NDVI110121_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI110121_1, 
                style: style_NDVI110121_1,
                interactive: true,
    title: 'NDVI 11/01/21<br />\
    <img src="styles/legend/NDVI110121_1_0.png" />  0,222 - 0,264 <br />\
    <img src="styles/legend/NDVI110121_1_1.png" />  0,264 - 0,307 <br />\
    <img src="styles/legend/NDVI110121_1_2.png" />  0,307 - 0,350 <br />\
    <img src="styles/legend/NDVI110121_1_3.png" />  0,350 - 0,392 <br />\
    <img src="styles/legend/NDVI110121_1_4.png" />  0,392 - 0,435 <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_NDVI110121_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_NDVI110121_1];
lyr_NDVI110121_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_NDVI110121_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', });
lyr_NDVI110121_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', });
lyr_NDVI110121_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});