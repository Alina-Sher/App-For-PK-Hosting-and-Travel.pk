import {useState} from 'react';import {Link} from 'react-router-dom';import {ChevronDown,Eye,EyeOff} from 'lucide-react';
export const Page=({title,children,intro})=><section className="mx-auto max-w-6xl px-5 py-10"><h1 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>{intro&&<p className="mb-6 max-w-2xl text-slate-600">{intro}</p>}{children}</section>;
export const Note=({children})=><div className="note">{children}</div>;
export const Empty=({title,text,to,cta})=><div className="card text-center"><h2 className="text-lg font-semibold">{title}</h2><p className="my-2 text-slate-600">{text}</p>{to&&<Link className="btn" to={to}>{cta}</Link>}</div>;
export const Status=({s})=>{const c={Active:'text-green-700',Paid:'text-green-700',Resolved:'text-green-700',Open:'text-amber-700',Maintenance:'text-amber-700',Expiring:'text-amber-700',Unpaid:'text-red-700',Suspended:'text-red-700'}[s]||'text-slate-600';return <span className={`rounded-full border border-current px-2 py-0.5 text-xs ${c}`}>{s}</span>};
export function Field({label,id,error,type='text',area,...p}){const [show,setShow]=useState(false);const pw=type==='password';
return <div className="mt-3"><label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label><div className="relative">
{area?<textarea id={id} rows={5} className="input py-2" aria-invalid={!!error} {...p}/>:<input id={id} type={pw&&show?'text':type} className="input" aria-invalid={!!error} {...p}/>}
{pw&&<button type="button" aria-label={show?'Hide password':'Show password'} onClick={()=>setShow(!show)} className="absolute right-2 top-2.5 p-1">{show?<EyeOff size={18}/>:<Eye size={18}/>}</button>}</div>
{error&&<p role="alert" className="mt-1 text-sm text-red-700">{error}</p>}</div>}
export const Accordion=({items})=>items.map(i=><details key={i.q} className="border-b border-slate-200 py-3"><summary className="flex cursor-pointer items-center justify-between font-medium">{i.q}<ChevronDown size={18}/></summary><p className="mt-2 text-slate-600">{i.a}</p></details>);
