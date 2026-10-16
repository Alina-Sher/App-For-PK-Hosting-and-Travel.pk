import {useState} from 'react';import {Link,NavLink,Outlet} from 'react-router-dom';import {Menu,X,ShoppingCart,Server} from 'lucide-react';import {useCart} from '../hooks/useCart.jsx';
const NAV=[['/plans','Hosting'],['/domains','Domains'],['/services/ssl','SSL'],['/services/email','Email'],['/support','Support'],['/dashboard','Dashboard']];
export default function Layout(){const [open,setOpen]=useState(false);const {items}=useCart();const n=items.reduce((s,i)=>s+i.qty,0);
const cls=({isActive})=>`rounded px-3 py-2 text-sm ${isActive?'bg-slate-100 text-brand':'hover:bg-slate-100'}`;
return <div className="flex min-h-screen flex-col"><header className="sticky top-0 z-10 border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-2">
<Link to="/" className="flex items-center gap-2 text-lg font-semibold"><Server size={22}/>PKHosting</Link>
<nav aria-label="Main" className="hidden flex-1 gap-1 md:flex">{NAV.map(([t,l])=><NavLink key={t} to={t} className={cls}>{l}</NavLink>)}</nav><span className="flex-1 md:hidden"/>
<Link to="/login" className="hidden text-sm md:block">Client login</Link><Link to="/cart" className="btn btn-s" aria-label={`Cart, ${n} items`}><ShoppingCart size={18}/>&nbsp;{n}</Link>
<button className="p-2 md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
{open&&<nav className="flex flex-col border-t border-slate-200 p-3 md:hidden" onClick={()=>setOpen(false)}>{[...NAV,['/login','Client login']].map(([t,l])=><NavLink key={t} to={t} className={cls}>{l}</NavLink>)}</nav>}</header>
<main className="flex-1"><Outlet/></main>
<footer className="bg-navy py-8 text-sm text-slate-300"><div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5">{[['/about','About'],['/contact','Contact'],['/knowledge-base','Knowledge base'],['/privacy','Privacy'],['/terms','Terms'],['/domains/transfer','Domain transfer'],['/pricing','Compare plans']].map(([t,l])=><Link key={t} className="text-white underline" to={t}>{l}</Link>)}
<p className="w-full">PKHosting is a demonstration project. Prices, accounts and policies are sample content. Nothing here is a real offer.</p></div></footer></div>}
