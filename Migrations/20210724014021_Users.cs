using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Insurance.Migrations
***REMOVED***
    public partial class Users : Migration
    ***REMOVED***
        protected override void Up(MigrationBuilder migrationBuilder)
        ***REMOVED***
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                ***REMOVED***
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Occupation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DeathInsured = table.Column<double>(type: "float", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false)
            ***REMOVED***,
                constraints: table =>
                ***REMOVED***
                    table.PrimaryKey("PK_users", x => x.Id);
            ***REMOVED***);
    ***REMOVED***

        protected override void Down(MigrationBuilder migrationBuilder)
        ***REMOVED***
            migrationBuilder.DropTable(
                name: "users");
    ***REMOVED***
***REMOVED***
***REMOVED***
