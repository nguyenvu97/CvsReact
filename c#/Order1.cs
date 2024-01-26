using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.KtraDMAWS;

public class Order1
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int OrderId { get; set; }
    public int ItemCode { set; get; }
    public string ItemName { get; set; }
    public int ItemQty { set; get; }
    public string OrderAddress { set; get; }
    public DateTime OrderDelivery { set; get; }
    public string PhoneNumber { get; set; }
    public int UserId { get; set; }
    public double payment { set; get; }
}