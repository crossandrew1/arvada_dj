/** categories_municipalities
 * Return OL style instance for subcatchments
 */
function categories_CCFLU(feature, value, size, resolution, labelText,
    labelFont, labelFill, bufferColor, bufferWidth,
    placement){
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

	    text: createTextStyle(feature, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)

        })];
        return style;
    }

    var trans = '0.30';
    var UDC = 'rgba(0,6,175,' + trans + ')'
    var BG = 'rgba(255,255,255,' + trans + ')'
    var LC = 'rgba(0,0,0,.5)'
    var LDC = 'rgba(252,59,216,' + trans + ')'
    var MG = 'rgba(0,132,195,' + trans + ')'
    var R = 'rgba(155,100,69,' + trans + ')'
    var HL ='rgba(193,0,0,' + trans + ')'
    var FHL = 'rgba(80,80,80,' + trans + ')'
    var C = 'rgba(28,4,239,' + trans + ')'
    var D = 'rgba(255,232,134,' + trans + ')'
    var E = 'rgba(255,222,85,' + trans + ')'
    var F = 'rgba(255,205,0,' + trans + ')'
    var G = 'rgba(185,220,229,' + trans + ')'
    var H = 'rgba(15,25,229,' + trans + ')'
    var VBC = 'rgba(10,102,94,' + trans + ')'
    var CC = 'rgba(252,59,62,.7 )'

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
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get('landuse_% impervious_1');
    var labelText = "";
    var size = 0;
	 text: createTextStyle(feature, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)

    var labelFont = "100.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "#ffffff";
    var bufferWidth = 6;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get('landuse_% impervious_1') !== null) {
        labelText = String(feature.get('landuse_% impervious_1'));
    }

	var style = categories_CCFLU(feature, value, size, labelText,
        labelFont, labelText, bufferColor,
        bufferWidth, placement);
	return style ;
};

