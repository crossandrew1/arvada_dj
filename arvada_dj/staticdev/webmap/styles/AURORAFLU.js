/** categories_municipalities
 * Return OL style instance for subcatchments
 */
function categories_AURORAFLU(feature){
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
	var D = 'rgba(145,245,229,' + trans + ')'
	var E = 'rgba(145,245,229,' + trans + ')'
	var F = 'rgba(145,245,229,' + trans + ')'
	var G = 'rgba(145,245,229,' + trans + ')'
	var H = 'rgba(145,245,229,' + trans + ')'
    var VBC = 'rgba(10,102,94,' + trans + ')'
    var CC = 'rgba(100,60,48,' + trans + ')'

    if (feature.get("placetype") !== null ) {
        var value = String(feature.get("placetype"));
    }

    switch (value.toString()) {
        case 'City Corridor':
            return colors(CC);
        case 'Commercial Hub':
            return colors(LDC);
        case 'Emerging Neighborhood':
            return colors(VBC);
        case 'Established Neighborhood':
            return colors(HL);
        case 'Industrial Hub':
            return  colors(R);
        case 'Innovation Campus':
            return colors(BG);
        case 'Urban Center':
            return colors(FHL);
        case 'Urban Green Space':
            return colors(LC);
        case 'Parks and Open Space':
            return colors(MG);
        case 'Residential':
            return colors(UDC);
        case 'PUD':
            return colors(C);
         case 'R-1':
            return colors(D);
	 case 'R-2':
            return colors(E);
	 case 'R-3':
            return colors(F);
	 case 'ROW':
            return colors(G);
	 case 'THOR':
            return colors(H);
	

 



	}

}
//define style layer to be used in layers.js
var  style_AURORAFLU = function(feature){
	/*var context = {
		feature: feature,
	};*/
	var style = categories_AURORAFLU(feature);
		return style;
};

