/** categories_municipalities
 * Return OL style instance for subcatchments
 */
function categories_CCFLU(feature){
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
    var D = 'rgba(195,245,229,' + trans + ')'
    var E = 'rgba(145,145,229,' + trans + ')'
    var F = 'rgba(145,245,129,' + trans + ')'
    var G = 'rgba(185,220,229,' + trans + ')'
    var H = 'rgba(15,25,229,' + trans + ')'
    var VBC = 'rgba(10,102,94,' + trans + ')'
    var CC = 'rgba(100,60,48,' + trans + ')'

    if (feature.get("zoning_cod") !== null ) {
        var val =String(feature.get("zoning_cod"));
    }

    switch (val.toString()) {
        case 'ADCO':
            return colors(CC);
        case 'AG':
            return colors(LDC);
        case 'C-1':
            return colors(VBC);
        case 'C-2':
            return colors(HL);
        case 'C-3':
            return  colors(R);
        case 'I-1':
            return colors(BG);
        case 'I-2':
            return colors(FHL);
        case 'I-3':
            return colors(LC);
        case 'MHP':
            return colors(MG);
        case 'PUBLIC':
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
var  style_CCFLU = function(feature){
	/*var context = {
		feature: feature,
	};*/
	var style = categories_CCFLU(feature);
	return style ;
};

