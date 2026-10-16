import {CURRENCY,ANNUAL_DISCOUNT} from '../data';
export const money=n=>`${CURRENCY} ${Math.round(Number(n)||0).toLocaleString('en-US')}`;
export const planPrice=(p,cycle)=>cycle==='annual'?{total:p.monthly*12*(1-ANNUAL_DISCOUNT),perMonth:p.monthly*(1-ANNUAL_DISCOUNT)}:{total:p.monthly,perMonth:p.monthly};
export const cartTotal=items=>items.reduce((s,i)=>s+i.price*i.qty,0);
export const load=(k,fb)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??fb}catch{return fb}};
export const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
export const isEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v||'');
export const isDomain=v=>/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z]{2,})?$/i.test(v||'');
export const simulateAvailable=name=>{let h=0;for(const c of name)h=(h*31+c.charCodeAt(0))%97;return h%3!==0};
