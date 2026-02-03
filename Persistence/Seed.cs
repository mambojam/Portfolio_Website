using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context) {
            if(context.Projects.Any()) return;

            var projects = new List<Project> 
            {
                new Project
                {
                    Title = "Allez",
                    Description = "A social media app for climbers who want to share their achievements with friends and track their progress",
                    Category = "Web Development",
                    TechStack = [
                        "ASP.NET",
                        "TypeScript",
                        "React"
                    ],
                    Url = "https://github.com/mambojam/Allez",
                    DateCreated = DateTime.UtcNow.AddMonths(-9)
                },

                new Project
                {
                    Title = "Card Guesser",
                    Description = "A web based game where players try to guess the identity of an unknown Magic The Gathering card. As players make correct guesses about different features of the card, the image of the card is revealed",
                    Category = "Web Game Development",
                    TechStack = ["React"],
                    Url = "https://github.com/mambojam/PyGame-Project",
                    DateCreated = DateTime.UtcNow.AddMonths(-13)
                },

                // new Project
                // {
                //     Title = "Java To-Do",
                //     Description = "A todo list console application written in Java that uses simple data structures to manage users and their lists",
                //     Category = "Console Application",
                //     TechStack = ["Java"],
                //     Url = "https://github.com/mambojam/java-to-do",
                //     DateCreated = DateTime.UtcNow.AddMonths(-8)
                // }         
            };
            
            await context.Projects.AddRangeAsync(projects);
            await context.SaveChangesAsync();

            
        }
    }
}