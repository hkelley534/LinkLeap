using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ZipLink.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Links",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ShortUrl = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: false),
                    LongUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Clicks = table.Column<int>(type: "int", nullable: false),
                    TimeCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastAccessed = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Links", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Links_ShortUrl",
                table: "Links",
                column: "ShortUrl",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Links");
        }
    }
}
