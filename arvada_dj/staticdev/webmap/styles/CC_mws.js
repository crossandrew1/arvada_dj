var size = 0;
var placement = 'point';

function categories_CCFLU(feature, value, size, resolution, labelText,
    labelFont, labelFill, bufferColor, bufferWidth,
    placement) {
    // Transparency for fill
    var trans = '0.3';
    switch (value.toString()) {
        case 'AG:2%':
            var style = [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(218,90,93,' + trans + ')',
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            //console.log('clear creek', style);
            return style;
            break;
        case 'll':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(38,216,213,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'I-1:80%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                   lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                   color: 'rgba(50,150,175,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'I-2:85%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'I-3:90%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'R-1:30%':
            return [new ol.style.Style({
               stroke: new ol.style.Stroke({
                   color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(252,59,216,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'R-2:30%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0,132,195,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
       case 'R-3:45%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(155,100,69,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;

       case 'C-1:80%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(193,0,0,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
       case 'C-2:85%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(80,80,80,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
       case 'C-3:90%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(28,4,239,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
       case 'PUD:30%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(185,255,71,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
       case 'TBD':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(10,102,94,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
	break;
       case 'NA':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(15,238,67,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
         case 'ROW':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(15,238,67,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
           case 'THOR':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(15,238,67,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
 









        default:
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(185,255,71,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
    }
};

var style_CCFLU = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get('landuse_% impervious_1');
    var labelText = "";
    size = 0;
    var labelFont = "18.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get('landuse_% impervious_1') !== null) {
        labelText = String(feature.get('landuse_% impervious_1'));
    }

    var style = categories_CCFLU(feature, value, size, resolution, labelText,
        labelFont, labelFill, bufferColor,
        bufferWidth, placement);

    return style;
};
