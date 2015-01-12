using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Globalization;
using System.Text;
using System.Web.Security;

namespace AjaxExample
{
    public class Customer
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CreationTime { get; set; }
    }
    public partial class WebForm1 : System.Web.UI.Page
    {

     
        protected void Page_Load(object sender, EventArgs e)
        {
          

        }
         


        [WebMethod]
        public static Customer handleAjaxRequest(string _FirstName, string _LastName)
        {
            return new Customer
            {
                ID = 59,
                FirstName = _FirstName,
                LastName = _LastName,
                CreationTime = System.DateTime.Now.ToString()
            };



        }



    }
}