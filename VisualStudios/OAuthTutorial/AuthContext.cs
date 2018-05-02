using Microsoft.AspNet.Identity.EntityFramework;
using OAuthTutorial.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OAuthTutorial
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext()
            : base("AuthContext")
        { }

        public DbSet<Contact> Contacts { get; set; }
    }
}