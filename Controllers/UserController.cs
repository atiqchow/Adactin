using Insurance.Models;
using Insurance.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRepository _repository;

        public UserController(IRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<DataController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> UserList()
        {
            return await _repository.SelectAll<User>();
        }
        [HttpPost]
        public async Task<ActionResult<User>> InsertMember([FromBody] User model)
        {
            await _repository.CreateAsync<User>(model);
            return model;
        }
 
    }
}
