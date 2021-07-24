using Insurance.Models;
using Insurance.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Repository
***REMOVED***
    public class Repository<TDbContext> : IRepository where TDbContext : DbContext
    ***REMOVED***
        protected TDbContext dbContext;

        public Repository(TDbContext context)
        ***REMOVED***
            dbContext = context;
    ***REMOVED***
        public async Task CreateAsync<T>(T entity) where T : class
        ***REMOVED***
            this.dbContext.Set<T>().Add(entity);

            _ = await this.dbContext.SaveChangesAsync();
    ***REMOVED***
        public async Task<List<T>> SelectAll<T>() where T : class
        ***REMOVED***
            return await this.dbContext.Set<T>().ToListAsync();
    ***REMOVED***

***REMOVED***
***REMOVED***
