![](img/logos/core-logo.svg) <!-- .element: style="width:200px" -->
# ASP.NET Core




![](img/logos/csharp6.png) <!-- .element: style="width:200px" -->




![](img/asp_net_core.png)
<small>Quelle: [Hanselman](http://www.hanselman.com/blog/ASPNET5IsDeadIntroducingASPNETCore10AndNETCore10.aspx)</small>




# Vorteile
* C# 6.0
* alles per >CMD
* echtes Cross-Plattform
* Self-Hosting
* Runtimes Side-by-Side
* F5-Compile-to-Memory
* "optimiert für die Cloud"

![](img/cloud.svg) <!-- .element: style="margin-right: -1000px; margin-top: -500px; width: 800px;" -->




# Nachteile
* kein WCF und Web Forms
* viele NS fehlen, u.a. System.Drawing<br><small>(man merkt erst das man es braucht wenn es nicht da ist)</small>
* viele, viele NuGet-Pakete müssen noch migriert werden
* Output: riesige Deployment-Pakete (alles drinn)
* `project.json` &rarr; `.xproj` &rarr; `.csproj` 	




# Hosting

* Kestrel\* (Cross-Plattform, Self-Host )
* [WebListener](https://www.nuget.org/packages/Microsoft.AspNetCore.Server.WebListener/) (Windows, Self-Host)
* IIS + Kestrel
* Nginx + Kestrel

<small>\* Kestrel ist __nicht__ als direkter produktiver Server gedacht</small>
<!-- Kestrel is not certified for direct exposure / https://neelbhatt40.wordpress.com/2016/10/08/weblistener-a-windows-http-server-for-asp-net-core/ -->





### Vor Core
__ASP.NET MVC__  
__ASP.NET Web API__  
__ASP.NET Web Pages__  
__ASP.NET WebForms__  





### Nach Core
__ASP.NET MVC inkl. Web API__  




![](img/concept-middleware.png) <!-- .element: style="width: 800px;" -->




```csharp
public class Program
{
    public static void Main(string[] args)
    {
        // yay! endlich
    }
}
```




```csharp
public class Startup
{
    // configures the HTTP request pipeline
    public void Configure(IApplicationBuilder app)
    {
        app.UseStaticFiles();
        app.UseMvc();
    }
}
```




# <i class="fa fa-exclamation-triangle"></i>
__Stolperfalle__
* Keine Konventionen für HTTP Verben mehr!  
  jetzt also expliziet:<br>
  GetAllBooks() → GET, PostBook() → POST 




# Let's code!




## Extra: Howto EF Core
<small>
ASP.NET 5 is now ASP.NET Core 1.0<br>
[EF7 is now EF Core 1.0](http://thedatafarm.com/data-access/ef7-is-now-ef-core-1-0-package-and-namespaces-change-too/)
</small>


```
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Relational
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

<small>&rarr; [Guide](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/intro#entity-framework-core-nuget-packages)</small>




```csharp|small
// book-rating/Models/BookRatingContext.cs

using Microsoft.EntityFrameworkCore;

namespace WebApplicationBasic.Models
{
    public class BookRatingContext : DbContext
    {
        public BookRatingContext(DbContextOptions<BookRatingContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Book>().HasKey(t => t.Isbn);
        }

        public DbSet<Book> Books { get; set; }
    }
}
```




```csharp|small
// /book-rating/Models/BookRepository.cs

using System.Collections.Generic;
using System.Linq;

namespace WebApplicationBasic.Models
{
    public class BookRepository : IBookRepository
    {
        private BookRatingContext context;
            
        public BookRepository(BookRatingContext context)
        {
            this.context = context;          
            context.Database.EnsureCreated();

            if (!context.Books.Any())
            {
                context.Books.Add(new Book { Isbn = "000", Title = "Angular 4", Rating = 5 });
                context.Books.Add(new Book { Isbn = "111", Title = ".NET Core", Rating = 3 });
                context.SaveChanges();
            }
        }
        public IEnumerable<Book> FindAll() {
            return this.context.Books.OrderBy(f => f.Isbn);
        }
        public Book FindByIsbn(string isbn) {
            return this.context.Books.FirstOrDefault(f => f.Isbn == isbn);
        }
    }
}
```




```csharp|small
// Startup.cs

public void ConfigureServices(IServiceCollection services)
{
    // register EF context - hint: using Microsoft.EntityFrameworkCore;
    services.AddDbContext<BookRatingContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
}
```




![tada](img/code-first.png)
