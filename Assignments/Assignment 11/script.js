const products = [
    { name: "Laptop", desc: "13th Generation Intel® Core™ i5 processor Windows 11 Home 35.6 cm (14) diagonal, FHD display with Intel® Iris® Xᵉ Graphics 16 GB DDR4 RAM 512 GB SSD Hard Drive Backlit keyboard, Fingerprint reader", price: 79000 },
    { name: "Tablet", desc: "Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi+5G Tablet, Dark Blue", price: 22000 },
    { name: "Phone", desc: "Samsung Galaxy M56 5G (Light Green, 8 GB RAM, 128 GB Storage) | Slimmest Phone in the Segment | Gorilla Glass Victus+ | 10 Bit HDR Video | Enhanced Nightography | 4nm Processor | Vapor Cooling Chamber", price: 30000 }
];

let str = "";
for (let i = 0; i < products.length; i++) {
    let p = products[i];
    str += `
        <div class="box">7
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">₹${p.price}</div>
            <button class="btn">Add to Cart</button>
        </div>
    `;
}
document.getElementById("productsBox").innerHTML = str;