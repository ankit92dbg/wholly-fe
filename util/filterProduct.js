// Filter Products By Filters

export default (productList, filters) => {
    let filteredList = [...productList];
    for (const key in filters) {
        if (key !== "price" && key !== "vendor") {
            if (
                filters[key] === "featured" ||
                filters[key] === "trending" ||
                filters[key] === "lowToHigh" ||
                filters[key] === "highToLow"
            ) {
                if (filters[key] === "lowToHigh") {
                    filteredList = filteredList.sort((el1,el2) => el1.variants[0].variant_sale_price.localeCompare(el2.variants[0].variant_sale_price, undefined, {numeric: true}));
                } else {
                    if (filters[key] === "highToLow") {
                        filteredList = filteredList.sort((el1,el2) => el2.variants[0].variant_sale_price.localeCompare(el1.variants[0].variant_sale_price, undefined, {numeric: true}));
                    } else {
                        console.log("hi1");
                        filteredList = filteredList.filter(
                            (item) => item[filters[key]]
                        );
                    }
                }
            } else {
                filteredList = filterByKey(filteredList, filters[key], key);
            }
        } else if (key == "vendor") {
            filteredList = filterByColor(filteredList, filters[key], key);
        } else {
            filteredList = filterByPrice(filteredList, filters[key], key);
        }
    }
    return filteredList;
};

// Filter Product By Price

function filterByPrice(filteredList, price, key) {
    let list = [];

    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];
        const productPrice = product.variants[0].variant_sale_price;

        if (productPrice >= price.min && productPrice <= price.max) {
            list.push(product);
        }
    }

    return (filteredList = list);
}

// Filter Product By color

function filterByColor(filteredList, color, key) {
    let list = [];
    if (!color || color.length === 0) return filteredList;
    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];
        const productColor = product.variants;
        for (let index2 = 0; index2 < product.variants.length; index2++) {
            if (color.indexOf != undefined) {
                const isOk = color && color.indexOf(productColor[index2]['variant_color']);
                if (isOk !== -1) {
                    list.push(product);
                }
            }
        }    
    }

    return (filteredList = list);
}

// Filter Product by key size/category/brand etc

function filterByKey(filteredList, size, key) {
    console.log('filteredList->',filteredList)
    let list = [];
    if (!size || size.length === 0) return filteredList;
    for (let index = 0; index < filteredList.length; index++) {
        const product = filteredList[index];

        if (size.indexOf != undefined) {
            const isOk = size && size.indexOf(product[key]);
            if (isOk !== -1) {
                list.push(product);
            }
        }
    }
    return (filteredList = list);
}
