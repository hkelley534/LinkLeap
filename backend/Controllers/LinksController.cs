using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZipLink.Models;
using ZipLink.Entities;
using static System.Runtime.InteropServices.JavaScript.JSType;
using ZipLink.Services;

namespace ZipLink.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinksController : ControllerBase
    {
        private readonly LinkDBContext _context;

        public LinksController(LinkDBContext context)
        {
            _context = context;
        }

        // GET: api/Links
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Link>>> GetLinks()
        {
            return await _context.Links.ToListAsync();
        }

        // GET: api/Links/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Link>> Getlink(Guid id)
        {
            var link = await _context.Links.FindAsync(id);

            if (link == null)
            {
                return NotFound();
            }

            return link;
        }

        [HttpGet("/{shortUrl}")]
        public async Task<ActionResult<Link>> GetLinkFromShortUrl(string shortUrl)
        {
            var link = await _context.Links.SingleAsync(l => l.ShortUrl == shortUrl);

            if (link == null)
            {
                return NotFound();
            }
            System.Console.WriteLine(link);
            link.Clicks++;
            link.LastAccessed = DateTime.Now;
            _context.Entry(link).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return link;
        }

        // PUT: api/Links/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putlink(Guid id, Link link)
        {
            if (id != link.Id)
            {
                return BadRequest();
            }

            _context.Entry(link).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!linkExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Links
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Link>> Postlink(LinkReq req, ShortenUrlService shortenUrlService)
        {
            if (!Uri.TryCreate(req.Url, UriKind.Absolute, out _))
            {
                return BadRequest("Specified URL is invalid.");
            }

            var shortUrl = await shortenUrlService.GenerateUniqueURL();

            var link = new Link()
            {
                Id = Guid.NewGuid(),
                LongUrl = req.Url,
                ShortUrl = shortUrl,
                Clicks = 0,
                TimeCreated = DateTime.UtcNow,
                LastAccessed = DateTime.UtcNow,
            };

            _context.Links.Add(link);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getlink", new { id = link.Id }, link);
        }

        // DELETE: api/Links/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletelink(Guid id)
        {
            var link = await _context.Links.FindAsync(id);
            if (link == null)
            {
                return NotFound();
            }

            _context.Links.Remove(link);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool linkExists(Guid id)
        {
            return _context.Links.Any(e => e.Id == id);
        }
    }
}
