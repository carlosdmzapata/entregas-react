
const product = [
    { id: '1', name: 'T-shirt', description: 'Anime Shirt', stock: 15, price: 20, photo: 'https://micco.vtexassets.com/arquivos/ids/182341-1200-auto?v=637764012859800000&width=1200&height=auto&aspect=true', category: "t-shirts"},
    { id: '2', name: 'Cap', description: 'Baseball cap', stock: 12, price: 17, photo: 'https://cdn.shopify.com/s/files/1/0043/8016/4142/products/61CQokEVWbL_900x900.jpg?v=1666219355', category: "caps"},
    { id: '3', name: 'Sneakers', description: 'sneakers for woman', stock: 18, price: 35, photo: 'https://cdn.shopify.com/s/files/1/2495/5044/products/oca-low-green-canvas-sneaker.slideshow1_ad9ff54d-41a4-4f51-abc8-1c1f26c75760.png?v=1655807237', category: "shoes"},
    { id: '4', name: 'Nice Sweater', description: 'Light Blue Cotton Sweater', stock: 7, price: 27, photo: 'https://hmcolombia.vtexassets.com/arquivos/ids/2153042/Saco---Azul-claro---H-M-CO.jpg?v=638016755675400000', category: 'sweaters'},
]

const gFetch = (id)=>{ 
    return new Promise( (resolve, reject)=>{
       const condition = true
       if (condition) {
        setTimeout(()=>{
           resolve(product)
        }, 3000)
       } else {
           reject('canceled')
         }
   }) 
}

export default gFetch
