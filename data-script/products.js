export function getProduct(productId){
  let matchingProduct;
  products.forEach((product)=>{
      if(product.id===productId){
          matchingProduct = product;

      }
  });

  product2.forEach((product)=>{
    if (product.id === productId){
      matchingProduct = product
    }
  })
  return matchingProduct;
};

export const products = [{
    id : 'jhqd9812h9dbd0d09wdd02n09d',
    image : 'https://i.postimg.cc/kG0nwT97/shirt-1.jpg',
    brand : 'adidas',
    name :'Carton Astronault Tshirts',
    star :5.0,
    price :7834
  },{
    id:'bwd98hr1i38r32iuf83rbigf',
    image : 'https://i.postimg.cc/g2qYqy7P/shirt-10.webp',
    brand : 'adidas',
    name :'Carton Leave Tshirts',
    star :5.0,
    price :4545
  },{
    id:'kjshd0923b2f239ug293yr29f',
    image : 'https://i.postimg.cc/pLtWFcqZ/shirt-11.webp',
    brand : 'adidas',
    name :'Rose Multicolor Tshirts',
    star :5.0,
    price :6786
  },{
    id:'nd9823rb23983rb039rbf9f3',
    image : 'https://i.postimg.cc/JhpMSrm6/shirt-12.webp',
    brand : 'adidas',
    name :'Pink Flower Tshirts',
    star :5.0,
    price :9445
  },{
    id:'scn24-24h-r40-230f23rh94rh23-3rb9r',
    image : 'https://i.postimg.cc/kg7T5Z28/shirt-16.jpg',
    brand : 'puma',
    name :'Pink Flower Tshirts',
    star :5.0,
    price :23989
  },{
    id:'kjdf9823hr2409240f97fh9ud',
    image : 'https://i.postimg.cc/c4316GMC/shirt-5.jpg',
    brand : 'adidas',
    name :'2 in 1 Double Routed',
    star :5.0,
    price :4523
  },{
    id:'kjshd093bf823kf90c98fbdf0',
    image : 'https://i.postimg.cc/MTrZfWFM/shirt-6.webp',
    brand : 'adidas',
    name :'Ash Short',
    star :5.0,
    price :3245
  },{
    id:'nkadf093k-ki31ur3-3rn2-r3j2jr0rr',
    image : 'https://i.postimg.cc/G38TPNxw/shirt-8.webp',
    brand : 'otto',
    name :'Carton Leave Tshirts',
    star :5.0,
    price :4535
  },{
    id:'hshdc9d8239328yyrbhf0db0',
    image : 'https://i.postimg.cc/PJpXmBg6/shirt-3.jpg',
    brand : 'adidas',
    name :'Purple Flowering Tshirts',
    star :5.0,
    price :7845
  },{
    id:'n-dn204h6-0dn-3-0309r3oirh938r3i92ur398',
    image : 'https://i.postimg.cc/SQzT1c0X/shirt-15.jpg',
    brand : 'adidas',
    name :'Purple Flowering Tshirts',
    star :5.0,
    price :8599
  },{
    id:'nf-3nrwd29034-33939rboh0r2-30u3u93',
    image : 'https://i.postimg.cc/44SKyhn1/518l9oe-Tj-ZL-AC.jpg',
    brand : 'adidas',
    name :'Short Knicker',
    star :5.0,
    price :5299
  },{
    id:'am09-62b8egw87b02-2723g-32-34ut3-9t',
    image : 'https://i.postimg.cc/kG0nwT97/shirt-1.jpg',
    brand : 'adidas',
    name :'2 in 1 Double Routed',
    star :5.0,
    price :9919
  }];


export const product2 = [{
  id : 'jhqd9812h9dbd0d09wdd02n09d',
  image : 'https://i.postimg.cc/kg9YYbTn/f1.jpg',
  brand : 'adidas',
  name :'Carton Astronault Tshirts',
  star :5.0,
  price :7834
},{
  id:'bwd98hr1i38r32iuf83rbigf',
  image : 'https://i.postimg.cc/2yhT2kvb/f2.jpg',
  brand : 'adidas',
  name :'Carton Leave Tshirts',
  star :5.0,
  price :4545
},{
  id:'nkwdf244-2kbjr02r-rbk202ln',
  image : 'https://i.postimg.cc/28SZ8zcD/addidas.jpg',
  brand : 'adidas',
  name :'gray premium branded t shirt',
  star :5.0,
  price : 9834
},{
  id:'jw932-2gu20g298r0233-2ek2f08',
  image : 'https://i.postimg.cc/HLXJPjxQ/compo-t-shirt.webp',
  brand : 'lucas',
  name :'3 Compo',
  star :5.0,
  price : 3498
},{
  id:'kj3983v-23r824rhbvd923-rbrgr',
  image : 'https://i.postimg.cc/9F0DHL0X/t-shirt-pink.webp',
  brand : 'adidas',
  name :'egle pink ',
  star :5.0,
  price :2000
},{
  id:'3b3oi23-2rb923r1bf023bf09e2f',
  image : 'https://i.postimg.cc/fTPJzYSc/t-shirt-yellow.webp',
  brand : 'nike',
  name :'yellow premium t-shirt',
  star :5.0,
  price : 4390
},{
  id:'dfohiwrofwlrf-2 jr298r24-fb0244b',
  image : 'https://i.postimg.cc/sgZ1v15t/pant-1.jpg',
  brand : 'corgo',
  name :'shade corgo pant',
  star :5.0,
  price : 2378
},{
  id:'jeoefebfobdhi8913e-hf-efhef-e83r3',
  image : 'https://i.postimg.cc/MTYnq41H/pant-2.jpg',
  brand : 'corgo',
  name :'black corgo with 6 packet',
  star :5.0,
  price : 4390
},{
  id:'boefu-0efhi208youg42f-u2ffy02',
  image : 'https://i.postimg.cc/nzxs8ZjN/kid3.webp',
  brand : 'kids',
  name :'sky blue price ',
  star :5.0,
  price : 5000
},{
  id:'aer-sdoe-231340gffepwf04py44rhd-y',
  image : 'https://i.postimg.cc/7ZCJ0Krt/kid.jpg',
  brand : 'kids',
  name :'red color prices ',
  star :5.0,
  price : 5389
},{
  id:'dlwf-rhr24rh4-t4tu0-tb4tbrf45',
  image : 'https://i.postimg.cc/7ZpGVSxH/jerrsey.jpg',
  brand : 'jersey',
  name :'Blue with pink jersey',
  star :5.0,
  price : 1058
},{
  id:'nkwrehif094iht0yfgbroperytpr-i4r8',
  image : 'https://i.postimg.cc/pXcnmg4n/jerrsey-1.jpg',
  brand : 'jersey',
  name :'yellow with blue jersey',
  star :5.0,
  price : 1058
},{
  id:'kjshd0923b2f239ug293yr29f',
  image : 'https://i.postimg.cc/VL9DtNm2/f3.jpg',
  brand : 'adidas',
  name :'Rose Multicolor Tshirts',
  star :5.0,
  price :6786
},{
  id:'nd9823rb23983rb039rbf9f3',
  image : 'https://i.postimg.cc/vZ3hPS1z/f4.jpg',
  brand : 'adidas',
  name :'Pink Flower Tshirts',
  star :5.0,
  price :9445
},{
  id:'mddciuwe-2jrrb98r-eddg29rkg',
  image : 'https://i.postimg.cc/7L7kvD9g/court-shirt.webp',
  brand : 'Suits',
  name :'Court and Shirt for men',
  star :5.0,
  price : 20000
},{
  id:'rkl2r-0233jb485bewfpwyerkgo873w3-247y',
  image : 'https://i.postimg.cc/gkmgY421/shorts-3-Copy.jpg',
  brand : 'Shorts',
  name :'Sky blue modern shorts menn',
  star :5.0,
  price : 2045

},{
  id:'beho2or-24g42824-24y052og204',
  image : 'https://i.postimg.cc/d1rX9kTz/casual.webp',
  brand : 'Party Wear',
  name :'Trending Party Wear',
  star :5.0,
  price : 4509
},{
  id:'jer3r-3rh139ur3rrb,rr-13fowyr',
  image : 'https://i.postimg.cc/dt64Dd73/trending-fancy-shirt.webp',
  brand : 'Trend',
  name :'Party wear',
  star :5.0,
  price : 3478
// },{
//   id:'kjb2er0824r-9u24h298r24oi9023',
//   image : '',
//   brand : '',
//   name :'',
//   star :5.0,
//   price :
},{
  id:'jkbdfjw-ej249823kdskugweir-2griy',
  image : 'https://i.postimg.cc/t4gD6TP5/shorts-4-Copy.webp',
  brand : 'Shorts',
  name :'Premium Black Shorts',
  star :5.0,
  price : 5689
},{
  id:'jbfwrjbwe-033097gefpoef-0lk',
  image : 'https://i.postimg.cc/vTd3xtLg/shorts-1-Copy.jpg',
  brand : 'Shorts',
  name :'Black Premium',
  star :5.0,
  price :8746
}];
