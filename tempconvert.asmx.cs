using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace ConvertTemp
{
    /// <summary>
    /// Summary description for tempconvert
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class tempconvert : System.Web.Services.WebService
    {

        [WebMethod]
        public string FahrenheitToCelsius(string Fahrenheit)
        {
            return ((Convert.ToDouble(Fahrenheit) - 32) / 1.8).ToString();
        }

        [WebMethod]
        public string CelsiusToFahrenheit(string Celsius)
        {
            return ((Convert.ToDouble(Celsius) * 1.8) + 32).ToString();
        }
    }
}
