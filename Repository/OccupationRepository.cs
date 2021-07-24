using Insurance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Repository
***REMOVED***
    public class OccupationRepository : IOccupationRepository
    ***REMOVED***
        public List<Occupation> occupation = new List<Occupation>()
        ***REMOVED***
            new Occupation ***REMOVED*** Name="Cleaner", Factor=1.50***REMOVED***,
            new Occupation ***REMOVED***Name="Doctor", Factor=1.0***REMOVED***,
            new Occupation ***REMOVED***Name="Author", Factor=1.25***REMOVED***,
            new Occupation ***REMOVED***Name="Farmer", Factor=1.75***REMOVED***,
            new Occupation ***REMOVED***Name="Mechanic", Factor=1.75***REMOVED***,
            new Occupation ***REMOVED***Name="Florist", Factor=1.50***REMOVED***
    ***REMOVED***;
        public List<Occupation> GetAllOccupation()
        ***REMOVED***
            return occupation;
    ***REMOVED***
***REMOVED***
***REMOVED***
