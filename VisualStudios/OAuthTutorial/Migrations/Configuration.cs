namespace OAuthTutorial.Migrations
{
    using OAuthTutorial.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<OAuthTutorial.AuthContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(OAuthTutorial.AuthContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var contacts = new List<Contact>
            {
                new Contact
                {
                    Name = "Charles", Email = "cbay@hotmail.com", PhoneNumber = "5555555555", ContactMethod="Email"
                },
                new Contact
                {
                    Name = "Britney", Email = "catmom@hotmail.com", PhoneNumber = "5555555551", ContactMethod="Phone"
                },
                new Contact
                {
                    Name = "Kate", Email = "vegiieeeeee@hotmail.com", PhoneNumber = "5555552555", ContactMethod="Email"
                },
                new Contact
                {
                    Name = "Chris", Email = "cdog@hotmail.com", PhoneNumber = "5555585555", ContactMethod="Email"
                },
                new Contact
                {
                    Name = "Aaron", Email = "aa-ron@hotmail.com", PhoneNumber = "5556555555", ContactMethod="Phone"
                }
            };

            contacts.ForEach(contact => context.Contacts.AddOrUpdate(x => x.Name, contact));
            context.SaveChanges();
        }
    }
}
