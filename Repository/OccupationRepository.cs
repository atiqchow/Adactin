using Insurance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Repository
{
    public class OccupationRepository : IOccupationRepository
    {
        public List<Occupation> occupation = new List<Occupation>()
        {
            new Occupation { Name="Cleaner", Factor=1.50},
            new Occupation {Name="Doctor", Factor=1.0},
            new Occupation {Name="Author", Factor=1.25},
            new Occupation {Name="Farmer", Factor=1.75},
            new Occupation {Name="Mechanic", Factor=1.75},
            new Occupation {Name="Florist", Factor=1.50}
        };
        public List<Occupation> GetAllOccupation()
        {
            return occupation;
        }
    }
}
