using OAuthTutorial.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OAuthTutorial.Controllers
{
    [RoutePrefix("api/Contacts")]
    public class ContactsController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            var rv = new List<Contact>();

            using (var db = new AuthContext())
            {
                rv = db.Contacts.ToList();
            }

            return Ok(rv);
        }
    }
}
