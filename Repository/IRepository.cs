using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Repository
{
    public interface IRepository
    {
        Task<List<T>> SelectAll<T>() where T : class;
        Task CreateAsync<T>(T entity) where T : class;
        
    }
}
