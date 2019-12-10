/** 
 * Return OL style instance for subcatchments
 */
function categories_SubBasins(feature){
    // define color, size, and style for basin  
    function colors(fill_color){
        var style = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'black',
              //  lineDash: [7,10],
                lineCap: 'butt',
                lineJoin: 'miter',
                width: .6
            }),
            fill: new ol.style.Fill({
                color: fill_color,
            }),
        })];
        return style;
    }

    var trans = '0.30';
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

    if (feature.get("first_city") !== null ) {
        var value = String(feature.get("first_city"));
    }

    switch (value.toString()) {
        case 'Denver':
            return colors(CC);
        case 'L':
            return colors(LDC);
        case 'Aurora':
            return colors(VBC);
        case 'B':
            return colors(HL);
        case 'Commerce City':
            return  colors(R);
        case 'Thornton':
            return colors(BG);
        case 'Broomfield':
            return colors(FHL);
        case 'Powhaton South':
            return colors(LC);
        case 'Riverwood':
            return colors(MG);
        case 'Titus':
            return colors(UDC);
        case 'C':
            return colors(C);
    }

}
//define style layer to be used in layers.js
var style_Municipalities = function(feature){
	/*var context = {
		feature: feature,
	};*/
	var style = categories_SubBasins(feature);
	return style;
};

