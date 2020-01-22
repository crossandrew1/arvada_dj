/** categories_municipalities
 * Return OL style instance for subcatchments
 */
function categories_ADAMSFLU(feature){
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
    var UDC = 'rgba(217,232,8,' + trans + ')'
    var BG = 'rgba(255,0,0,' + trans + ')'
    var LC = 'rgba(250,0,50,.1)'
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

    if (feature.get("futurelu") !== null ) {
        var value = String(feature.get("futurelu"));
    }

    switch (value.toString()) {
        case 'Activity Center':
            return colors(CC);
        case 'Agriculture':
            return colors(LDC);
        case 'Commercial':
            return colors(VBC);
        case 'Estate Residential':
            return colors(HL);
        case 'Industrial':
            return  colors(R);
        case 'Low Intensity Mixed Use':
            return colors(BG);
        case 'Mixed Use/Employment':
            return colors(FHL);
        case 'Municia':
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
var  style_ADAMSFLU = function(feature){
	/*var context = {
		feature: feature,
	};*/
	var style = categories_ADAMSFLU(feature);
	return style;
};

