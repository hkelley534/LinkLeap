using Microsoft.EntityFrameworkCore;
using ZipLink.Entities;
using ZipLink.Services;

namespace ZipLink
{
    public class LinkDBContext : DbContext
    {
        public LinkDBContext(DbContextOptions<LinkDBContext> options)
            : base(options)
        {
        }

        public DbSet<Link> Links { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Link>(builder =>
            {
                builder.Property(l => l.ShortUrl).HasMaxLength(ShortenUrlService.numChar);

                builder.HasIndex(l => l.ShortUrl).IsUnique();
            });
        }
    }
}