using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Address : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DeliveredOrders_Address_DestinationAddressId",
                table: "DeliveredOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_DeliveredOrders_Address_SourceAddressId",
                table: "DeliveredOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Address_DestinationAddressId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Address_SourceAddressId",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Address",
                table: "Address");

            migrationBuilder.RenameTable(
                name: "Address",
                newName: "Addresses");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Addresses",
                table: "Addresses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DeliveredOrders_Addresses_DestinationAddressId",
                table: "DeliveredOrders",
                column: "DestinationAddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DeliveredOrders_Addresses_SourceAddressId",
                table: "DeliveredOrders",
                column: "SourceAddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Addresses_DestinationAddressId",
                table: "Orders",
                column: "DestinationAddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Addresses_SourceAddressId",
                table: "Orders",
                column: "SourceAddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DeliveredOrders_Addresses_DestinationAddressId",
                table: "DeliveredOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_DeliveredOrders_Addresses_SourceAddressId",
                table: "DeliveredOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Addresses_DestinationAddressId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Addresses_SourceAddressId",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Addresses",
                table: "Addresses");

            migrationBuilder.RenameTable(
                name: "Addresses",
                newName: "Address");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Address",
                table: "Address",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DeliveredOrders_Address_DestinationAddressId",
                table: "DeliveredOrders",
                column: "DestinationAddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DeliveredOrders_Address_SourceAddressId",
                table: "DeliveredOrders",
                column: "SourceAddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Address_DestinationAddressId",
                table: "Orders",
                column: "DestinationAddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Address_SourceAddressId",
                table: "Orders",
                column: "SourceAddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
