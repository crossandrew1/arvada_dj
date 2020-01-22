var size = 0;
var placement = 'point';

function categories_DenverFLU(feature, value, size, resolution, labelText,
    labelFont, labelFill, bufferColor, bufferWidth,
    placement) {
    // Transparency for fill
    var trans = '0.3';
    switch (value.toString()) {
        case 'URBAN Low:20%':
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
        case 'URBAN Other Park and Open Space:10%':
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
        case 'SUBURBAN Low:20%':
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
        case 'SUBURBAN Community Corridor:75%':
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
        case 'SUBURBAN Regional Center:75%':
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
        case 'SUBURBAN Low-Medium:30%':
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
        case 'SPECIAL DISTRICT Campus:55%':
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
       case 'SUBURBAN Public Park and Open Space:10%':
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

       case 'URBAN CENTER Regional Center:75%':
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
       case 'SPECIAL DISTRICT Airport:85%':
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
       case 'SUBURBAN Other Park and Open Space:10%':
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
       case 'SUBURBAN Local Center:80%':
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
       case 'SUBURBAN Public Park and Open Space:10%':
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
       case 'URBAN CENTER Community Center:75%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(5,38,7,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
         case 'SUBURBAN High-Medium:45%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(151,2,0,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
           case 'SUBURBAN Local Center:75%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(151,138,167,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SUBURBAN Low:20%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(115,28,117,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SUBURBAN Low-Medium:30%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(150,18,17,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SPECIAL DISTRICT Other Park and Open Space:10%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(15,18,17,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SPECIAL DISTRICT Regional Park:10%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(154,24,267,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SPECIAL DISTRICT Regional Center:75%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(55,38,267,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SPECIAL DISTRICT Community Corridor:75%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(215,238,267,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'SPECIAL DISTRICT Community Center:75%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(105,138,67,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
      case 'URBAN Public Park and Open Space:10%':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(35,35,35,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(150,38,167,' + trans + ')'
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
 










//        default:
 //           return [new ol.style.Style({
 //               stroke: new ol.style.Stroke({
 //                   color: 'rgba(0,0,0,1.0)',
 //                   lineDash: null,
 //                   lineCap: 'butt',
 //                   lineJoin: 'miter',
 //                   width: 0
 //               }),
 //               fill: new ol.style.Fill({
 //                   color: 'rgba(185,255,71,' + trans + ')'
 //               }),
 //               text: createTextStyle(feature, resolution, labelText, labelFont,
 //                   labelFill, placement, bufferColor,
 //                   bufferWidth)
 //           })];
 //           break;
    }
};

var style_DenverFLU = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get('denver_imp');
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
    if (feature.get('denver_imp') !== null) {
        labelText = String(feature.get('denver_imp'));
    }

    var style = categories_DenverFLU(feature, value, size, resolution, labelText,
        labelFont, labelFill, bufferColor,
        bufferWidth, placement);

    return style;
};
