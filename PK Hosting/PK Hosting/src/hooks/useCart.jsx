import {createContext,useContext,useEffect,useState} from 'react';import {load,save} from '../utils';
const Ctx=createContext(null);
const clean=a=>Array.isArray(a)?a.filter(i=>i&&typeof i.id==='string'&&Number.isFinite(i.price)&&Number.isInteger(i.qty)&&i.qty>0):[];
export function CartProvider({children}){
const [items,setItems]=useState(()=>clean(load('pkh_cart',[])));
useEffect(()=>save('pkh_cart',items),[items]);
const add=it=>setItems(p=>p.some(x=>x.id===it.id)?(it.single?p:p.map(x=>x.id===it.id?{...x,qty:x.qty+1}:x)):[...p,{qty:1,...it}]);
const remove=id=>setItems(p=>p.filter(x=>x.id!==id));
const setQty=(id,q)=>setItems(p=>q<1?p.filter(x=>x.id!==id):p.map(x=>x.id===id?{...x,qty:q}:x));
return <Ctx.Provider value={{items,add,remove,setQty,clear:()=>setItems([])}}>{children}</Ctx.Provider>}
export const useCart=()=>useContext(Ctx);
