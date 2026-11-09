export type Product = { id:number; name:string; brand:string; value:number; category:string; received:string; status:string; observation?:string; published?:string }
export type Plan = { id:number; brand:string; type:string; publish:string; status:string; product:string; recording?:string; observation?:string }
export type BrandInfo = { type:'Remunerada'|'Permuta'; cash:number; stories:number; reels:number; paymentDate:string; commission:number; coupon:string; paymentStatus:'Pendente'|'Pago'|'Não se aplica' }

