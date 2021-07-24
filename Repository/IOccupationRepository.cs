using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insurance.Models;
namespace Insurance.Repository
{
    public interface IOccupationRepository
    {
        List<Occupation> GetAllOccupation();
    }
}
