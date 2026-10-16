export const CURRENCY='PKR';export const ANNUAL_DISCOUNT=0.2;
export const PLANS=[
{id:'starter',name:'Starter',monthly:600,sites:'1',disk:'10 GB SSD',bw:'100 GB',mail:'5 mailboxes',ssl:'Free SSL',backup:'Weekly'},
{id:'business',name:'Business',monthly:1400,sites:'10',disk:'50 GB SSD',bw:'500 GB',mail:'50 mailboxes',ssl:'Free SSL',backup:'Daily',rec:true},
{id:'wp-pro',name:'WordPress Pro',monthly:2200,sites:'25',disk:'100 GB NVMe',bw:'1 TB',mail:'Unlimited',ssl:'Free SSL',backup:'Daily + staging'},
{id:'vps-core',name:'VPS Core',monthly:6500,sites:'Unlimited',disk:'200 GB NVMe',bw:'4 TB',mail:'Self-managed',ssl:'Free SSL',backup:'Snapshots'}];
export const SERVICES=[
{slug:'shared',title:'Shared hosting',blurb:'Affordable hosting for personal and small business sites.',features:['Control panel (demo)','Free SSL','Scheduled backups'],uses:['Portfolios','Brochure sites'],plan:'starter'},
{slug:'wordpress',title:'WordPress hosting',blurb:'Hosting tuned for WordPress, with staging.',features:['One-click install (demo)','Staging site','Automatic updates'],uses:['Blogs','Agency sites'],plan:'wp-pro'},
{slug:'vps',title:'VPS hosting',blurb:'Isolated resources and root access.',features:['Root access','NVMe storage','Snapshot backups'],uses:['Custom apps','APIs'],plan:'vps-core'},
{slug:'dedicated',title:'Dedicated servers',blurb:'A whole server for demanding workloads. Quote-based in this demo.',features:['Single-tenant hardware','Custom configuration','Private networking'],uses:['Databases','High-traffic sites']},
{slug:'ssl',title:'SSL certificates',blurb:'Encrypt traffic between your site and visitors.',features:['Domain validation','Renewal reminders (demo)','Wildcard option'],uses:['Any website'],product:{id:'ssl-dv',name:'SSL certificate (1 year)',price:1800}},
{slug:'email',title:'Business email hosting',blurb:'Mailboxes on your own domain.',features:['Custom-domain addresses','Spam filtering','Webmail'],uses:['Teams','Client communication'],product:{id:'mail-5',name:'Business email, 5 mailboxes (1 year)',price:4800}}];
export const TLDS={'.com':3200,'.net':3800,'.org':3500,'.pk':2400};
export const KB=[{id:1,t:'Point a domain to your hosting',b:'Change the nameservers at your registrar to the ones in your welcome email (sample steps).'},{id:2,t:'Install an SSL certificate',b:'Open Dashboard > Services and choose Enable SSL (sample steps).'},{id:3,t:'Create a business email address',b:'Add a mailbox, then add MX records in DNS (sample steps).'},{id:4,t:'Restore a backup',b:'Pick a backup date and confirm the restore (sample steps).'}];
export const FAQ=[{q:'Is PKHosting a real provider?',a:'No. This is a frontend demonstration. Nothing can be purchased.'},{q:'Are the prices real?',a:'They are demo prices in '+CURRENCY+', defined once in src/data/index.js.'},{q:'Is domain availability live?',a:'No. Results are simulated and no registrar is connected.'}];
export const SERVICES_SAMPLE=[{id:1,name:'Business plan: demo-shop.pk',status:'Active',renews:'2027-01-02'},{id:2,name:'VPS Core: app-server',status:'Maintenance',renews:'2026-12-20'},{id:3,name:'Starter: old-blog.pk',status:'Suspended',renews:'2026-11-01'}];
export const DOMAINS_SAMPLE=[{id:1,name:'demo-shop.pk',status:'Active',renews:'2027-03-14'},{id:2,name:'old-blog.pk',status:'Expiring',renews:'2026-11-01'}];
export const INVOICES=[{id:'INV-1001',date:'2026-01-02',amount:16800,status:'Paid'},{id:'INV-1002',date:'2026-06-20',amount:39000,status:'Paid'},{id:'INV-1003',date:'2026-10-01',amount:2400,status:'Unpaid'}];
export const TICKETS_SAMPLE=[{id:'T-204',subject:'Email delivery delay',status:'Open'},{id:'T-198',subject:'Add SSL to subdomain',status:'Resolved'}];
