using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insurance.Models;
using Insurance.Repository;
namespace Insurance.Controllers
***REMOVED***
    [Route("api/[controller]")]
    [ApiController]
    public class OccupationController : Controller
    ***REMOVED***
        private OccupationRepository occupation = new OccupationRepository();
        
        [HttpGet]
        public ActionResult<IEnumerable<Occupation>> GetAllOccupation()
        ***REMOVED***
            return occupation.GetAllOccupation();
    ***REMOVED***
***REMOVED***
***REMOVED***
