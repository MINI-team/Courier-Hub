using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class DeliveredOrdersTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DeliveredOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Width = table.Column<int>(type: "INTEGER", nullable: false),
                    Height = table.Column<int>(type: "INTEGER", nullable: false),
                    Weight = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    SourceAddressId = table.Column<int>(type: "INTEGER", nullable: false),
                    DestinationAddressId = table.Column<int>(type: "INTEGER", nullable: false),
                    CourierID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeliveredOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DeliveredOrders_Address_DestinationAddressId",
                        column: x => x.DestinationAddressId,
                        principalTable: "Address",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DeliveredOrders_Address_SourceAddressId",
                        column: x => x.SourceAddressId,
                        principalTable: "Address",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DeliveredOrders_DestinationAddressId",
                table: "DeliveredOrders",
                column: "DestinationAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_DeliveredOrders_SourceAddressId",
                table: "DeliveredOrders",
                column: "SourceAddressId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeliveredOrders");
        }
    }
}
