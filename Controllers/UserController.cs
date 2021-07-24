using Insurance.Models;
using Insurance.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Controllers
***REMOVED***
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    ***REMOVED***
        private readonly IRepository _repository;

        public UserController(IRepository repository)
        ***REMOVED***
            _repository = repository;
    ***REMOVED***
        // GET: api/<DataController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> UserList()
        ***REMOVED***
            return await _repository.SelectAll<User>();
    ***REMOVED***
        [HttpPost]
        public async Task<ActionResult<User>> InsertMember([FromBody] User model)
        ***REMOVED***
            await _repository.CreateAsync<User>(model);
            return model;
    ***REMOVED***
 
***REMOVED***
***REMOVED***
