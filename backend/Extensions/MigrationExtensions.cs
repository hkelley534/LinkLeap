﻿using Microsoft.EntityFrameworkCore;

namespace ZipLink.Extensions
{
    public static class MigrationExtensions
    {
        public static void ApplyMigrations(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            var dbContext = scope.ServiceProvider.GetRequiredService<LinkDBContext>();

            //dbContext.Database.Migrate();
        }
    }
}
