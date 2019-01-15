
$(function () {


    $("#btnConvert").click(function () {

        var temperatureVal = $("#txtTemperature").val();
        var convertType = $("#drpConvertType").val();
        var outputType = $("#drpOutputFormat").val();

        $.ajax({
            type: "POST",
            url: convertType == 0 ? "tempconvert.asmx/CelsiusToFahrenheit" : "tempconvert.asmx/FahrenheitToCelsius",
            data: convertType == 0 ? "{ Celsius: '" + temperatureVal + "'}" : "{ Fahrenheit: '" + temperatureVal + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var obj = { output: response.d };

                if (outputType == 0) {    
                    var filecontent = JSON.stringify(obj);
                    var blob = new Blob([filecontent], { type: "application/json; charset=utf-8" });
                    saveAs(blob, "json_output.txt");
                }
                else {
                    var filecontent = json2xml(obj)
                    var blob = new Blob([filecontent], { type: "application/xml; charset=utf-8" });
                    saveAs(blob, "xml_output.txt");
                }

            }
        });
    });

   
});


