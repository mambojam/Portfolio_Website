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
                    Title = "Early Portfolio",
                    Description = "First web project creating a personal portfolio",
                    Category = "Web Development",
                    TechStack = [
                        "Python",
                        "JavaScript",
                        "Sqlite",
                        "HTML",
                        "CSS"
                    ],
                    Url = "https://github.com/mambojam/Personal-Digtial-Portfolio-2",
                    DateCreated = DateTime.UtcNow.AddMonths(-9)
                },

                new Project
                {
                    Title = "PyGame Space Invader",
                    Description = "First game development project created a simple Pong game using PyGame",
                    Category = "Game Development",
                    TechStack = ["Python"],
                    Url = "https://github.com/mambojam/PyGame-Project",
                    DateCreated = DateTime.UtcNow.AddMonths(-13)
                },

                new Project
                {
                    Title = "Java To-Do",
                    Description = "A todo list console application written in Java that uses simple data structures to manage users and their lists",
                    Category = "Console Application",
                    TechStack = ["Java"],
                    Url = "https://github.com/mambojam/java-to-do",
                    DateCreated = DateTime.UtcNow.AddMonths(-8)
                }         
            };
            
            await context.Projects.AddRangeAsync(projects);
            await context.SaveChangesAsync();

            
        }
    }
}