using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace Insurance.Models
{
    public class User
    {
        [Key]
        public long Id { get; set; }        
        public string FirstName { get; set; }       
        public string LastName { get; set; } 
        public DateTime DOB { get; set; }
        public string Occupation { get; set; }
        public double DeathInsured { get; set; }
        public int Age { get; set; }
    }
}
