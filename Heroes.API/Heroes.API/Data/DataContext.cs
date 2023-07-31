using Microsoft.EntityFrameworkCore;

namespace Heroes.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Heroes> Heroes => Set<Heroes>();
    }
}
