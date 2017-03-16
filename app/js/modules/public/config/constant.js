'use strict';
module.exports = {
    /**
     * [ChartData containing dummy data for an e-commerce site]
     * @type {Array}
     */
    ChartData: [{
        /**
         * [Brand Vs Revenue]
         * @type {Object}
         */
        params: {
            dimension: 'Brand',
            measure: 'Revenue'
        },
        chart: {
            "caption": "Revenue Collected by top 5 brands",
            "subCaption": "Last month",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        data: [{
            label: "Samsung",
            value: "33000"
        }, {
            label: "Motorola",
            value: "54000"
        }, {

            label: "Asus",
            value: "23000"
        }, {
            label: "Sony",
            value: "48000"
        }, {
            label: "Lenovo",
            value: "40000"
        }]
    }, {
        /**
         * [Brand Vs Sales]
         * @type {Object}
         */
        params: {
            dimension: 'Brand',
            measure: 'Sales'
        },
        chart: {
            "caption": "Top 5 Brands by sales",
            "subCaption": "Last month",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        data: [{
            label: "Samsung",
            value: "23000"
        }, {
            label: "Motorola",
            value: "54000"
        }, {

            label: "Asus",
            value: "42000"
        }, {
            label: "Sony",
            value: "28000"
        }, {
            label: "Lenovo",
            value: "17000"
        }]
    }, {
        /**
         * [Brand vs Order]
         * @type {Object}
         */
        params: {
            dimension: 'Brand',
            measure: 'Order'
        },
        chart: {
            "caption": "Top 5 Brands ordered",
            "subCaption": "Last month",
            "yAxisName": "Order",
            "numberPrefix": "",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        data: [{
            label: "Samsung",
            value: "14000"
        }, {
            label: "Motorola",
            value: "9000"
        }, {

            label: "Asus",
            value: "15000"
        }, {
            label: "Sony",
            value: "17000"
        }, {
            label: "Lenovo",
            value: "11000"
        }]
    }, {
        /**
         * [Category vs Revenue]
         * @type {Object}
         */
        params: {
            dimension: 'Category',
            measure: 'Revenue'
        },
        chart: {
            "caption": "Revenue collected by top 5 categories",
            "subCaption": "Last month",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        data: [{
            label: "Mobile Phone",
            value: "67000"
        }, {
            label: "Laptop",
            value: "88000"
        }, {

            label: "Television",
            value: "72000"
        }, {
            label: "Refrigerator",
            value: "81000"
        }, {
            label: "Head Phone",
            value: "75000"
        }]
    }, {
        /**
         * [Category vs Sales]
         * @type {Object}
         */
        params: {
            dimension: 'Category',
            measure: 'Sales'
        },
        chart: {
            "caption": "Top 5 categories by sale",
            "subCaption": "Last month",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        data: [{
            label: "Mobile Phone",
            value: "67000"
        }, {
            label: "Laptop",
            value: "88000"
        }, {

            label: "Television",
            value: "72000"
        }, {
            label: "Refrigerator",
            value: "81000"
        }, {
            label: "Head Phone",
            value: "75000"
        }]
    }, {
        /**
         * [Category vs Order]
         * @type {Object}
         */
        params: {
            dimension: 'Category',
            measure: 'Order'
        },
        chart: {
            "caption": "Top 5 categories by orders",
            "subCaption": "Last month",
            "yAxisName": "Order",
            "numberPrefix": "",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        data: [{
            label: "Mobile Phone",
            value: "67000"
        }, {
            label: "Laptop",
            value: "88000"
        }, {

            label: "Television",
            value: "72000"
        }, {
            label: "Refrigerator",
            value: "81000"
        }, {
            label: "Head Phone",
            value: "75000"
        }]
    }]

};
