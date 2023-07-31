using Heroes.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Heroes.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private readonly DataContext _context;
        public HeroesController(DataContext context)
        {
            _context = context;
        }
       



        [HttpGet]
        public async Task<ActionResult<List<Heroes>>> GetHeroes()
        {
            return Ok(await _context.Heroes.ToListAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<Heroes>>> CreateHeroes(Heroes hero)
        {
            _context.Heroes.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.Heroes.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Heroes>>> UpdateHeroes(Heroes hero)
        {
            var dbHero = await _context.Heroes.FindAsync(hero.Id);
            if (dbHero == null)
                return BadRequest("Hero does not exist");

            dbHero.Name=hero.Name;
            dbHero.FirstName=hero.FirstName;
            dbHero.LastName=hero.LastName;
            dbHero.Place = hero.Place;

            await _context.SaveChangesAsync();

            return Ok(await _context.Heroes.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Heroes>>> DeleteHeroes(Heroes hero)
        {
            var dbHero = await _context.Heroes.FindAsync(hero.Id);
            if (dbHero == null)
                return BadRequest("Hero does not exist");

            _context.Heroes.Remove(dbHero);
            await _context.SaveChangesAsync();

            return Ok(await _context.Heroes.ToListAsync());

        }

    }
}
