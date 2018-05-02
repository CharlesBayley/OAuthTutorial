using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OAuthTutorial.Models
{
    public class Contact
    {
        public int ID { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string ContactMethod { get; set; }
    }
}