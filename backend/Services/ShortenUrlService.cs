using Microsoft.EntityFrameworkCore;

namespace ZipLink.Services
{
    public class ShortenUrlService
    {
        public const int numChar = 7;
        private const string alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456790";

        private readonly Random _random = new();
        private readonly LinkDBContext _context;

        public ShortenUrlService(LinkDBContext context)
        {
            _context = context;
        }

        public async Task<string> GenerateUniqueURL()
        {
            var linkChars = new char[numChar];

            while (true)
            {
                for (int i = 0; i < numChar; i++)
                {
                    var randomIndex = _random.Next(alphabet.Length);

                    linkChars[i] = alphabet[randomIndex];
                }

                var shortUrl = new string(linkChars);

                if (!await _context.Links.AnyAsync(l => l.ShortUrl == shortUrl))
                {
                    return shortUrl;
                }
            }
        }

        //public async Task<string>[] GenerateTenUniqueUrl()
        //{
        //    var urlList = 0;
        //}

    }
}
