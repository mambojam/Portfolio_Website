namespace Domain
{
    public class Project
    {
        public Guid Id { get; set; }
        public string Title { get; set; }  
        public string Description { get; set; }
        public string Category { get; set; }
        public string[] TechStack { get; set; }
        public string Url { get; set; }
        public DateTime DateCreated { get; set;}
    }
}