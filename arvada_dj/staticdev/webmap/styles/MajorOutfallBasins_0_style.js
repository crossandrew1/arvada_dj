/**
 *    Return OL style instance for major collection basins
 */
function categories_MajorBasins(feature){
    // define color, size, and style for basin
    function colors(basin){
        var style = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'white',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: .75
            }),
            fill: new ol.style.Fill({
                color: basin,
            }),
        })];
        return style;
    }
        
    var trans = '0.5';
    var UDC = 'rgba(84,48,5,' + trans + ')'
    var BG = 'rgba(14,0,10,' + trans + ')'
    var LC = 'rgba(191,129,45,' + trans + ')'
    var LDC = 'rgba(223,194,125,' + trans + ')'
    var MG = 'rgba(0,132,195,' + trans + ')'
    var R = 'rgba(145,245,229,' + trans + ')'
    var HL ='rgba(193,0,0,' + trans + ')'
    var FHL = 'rgba(145,245,229,' + trans + ')'
    var C = 'rgba(145,245,229,' + trans + ')'
    var VBC = 'rgba(10,102,94,' + trans + ')'
    var CC = 'rgba(100,60,48,' + trans + ')'

    if (feature.get("Basin") !== null ) {
        var value = String(feature.get("Basin"));
    }
    switch (value.toString()) {
        case 'CC':
            return colors(CC);
        case 'LDC':
            return colors(LDC);
        case 'VBC':
            return colors(VBC);
        case 'HL':
            return colors(HL);
        case 'R':
            return  colors(R);
        case 'BG':
            return colors(BG);
        case 'FHL':
            return colors(FHL);
        case 'LC':
            return colors(LC);
        case 'MG':
            return colors(MG);
        case 'UDC':
            return colors(UDC);
        case 'C':
            return colors(C);
    }

}
//define style layer to be used in layers.js
var style_MajorOutfallBasins_0 = function(feature){
        /*var context = {
            feature: feature,
        };*/
        var style = categories_MajorBasins(feature);
        return style;
    };
