using System.ComponentModel.DataAnnotations;

namespace ZipLink.Entities
{
    public class Link
    {
        [Key]
        public Guid Id { get; set; }
        public string ShortUrl { get; set; } = string.Empty;

        public string LongUrl { get; set; } = string.Empty;

        public int Clicks { get; set; }

        public DateTime TimeCreated { get; set; }

        public DateTime LastAccessed { get; set; }

    }
}