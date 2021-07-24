using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Repository
***REMOVED***
    public interface IRepository
    ***REMOVED***
        Task<List<T>> SelectAll<T>() where T : class;
        Task CreateAsync<T>(T entity) where T : class;
        
***REMOVED***
***REMOVED***
