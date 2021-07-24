using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Models
***REMOVED***
    public class AppDBContext:DbContext
    ***REMOVED***
        private readonly DbContextOptions _options;
        public AppDBContext(DbContextOptions options) : base(options)
        ***REMOVED***
            _options = options;
    ***REMOVED***

        public DbSet<User> users ***REMOVED*** get; set; ***REMOVED***

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        ***REMOVED***
            base.OnModelCreating(modelBuilder);
    ***REMOVED***
***REMOVED***
***REMOVED***
