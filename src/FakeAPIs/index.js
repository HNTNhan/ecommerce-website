import products from "../FakeData/products.json";
import categories from "../FakeData/categories.json";
import materialsColors from "../FakeData/colors&material.json";
import { convertToSlug } from "../utilities";

function joinProductsWithMaterialAndColor(products, materialsColors) {
  // console.log(products);
  if (!products.length) return;
  const result = products.map((product) => {
    const newMaterialsColors = product.materials_colors.map((material_color) => {
      return materialsColors.data.find(
        (materialAndColor) => materialAndColor.id === material_color,
      );
    });

    return { ...product, materials_colors: newMaterialsColors };
  });
  return result;
}

const getProductByName = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        JSON.stringify(
          joinProductsWithMaterialAndColor(
            [products.data.find((product) => convertToSlug(product.name) === convertToSlug(name))],
            materialsColors,
          )[0],
        ),
      );
    }, 300);
  });
};

const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify(joinProductsWithMaterialAndColor(products.data, materialsColors)));
    }, 300);
  });
};

const getProductsByFilterAndSorted = (filter, sort, page = 1, numProduct = 15) => {
  // Get data by filter
  let result = products.data.filter((product, index) => {
    if (!filter.room || convertToSlug(product.room) !== convertToSlug(filter.room)) {
      return false;
    } else if (filter.types.length > 0 && !filter.types.includes(product.type)) {
      return false;
    } else if (
      filter.materialsAndColors.length > 0 &&
      product.materials_colors.every(
        (material_color) => !filter.materialsAndColors.includes(material_color),
      )
    ) {
      return false;
    }

    return true;
  });

  // Sort data
  switch (sort) {
    case "sale":
      result.sort((val1, val2) => {
        if (val1.sale === null && val2.sale !== null) return 1;
        else if (val1.sale !== null && val2.sale === null) return -1;
        else if (val1.sale !== null && val2.sale !== null) return val1.sale - val2.sale;
        else return val1.price - val2.price; // value1.sale === null && value2.sale === null
      });
      break;
    case "new":
      result.sort((val1, val2) => {
        return new Date(val1.create_date).getTime() - new Date(val2.create_date).getTime();
      });
      break;
    case "lowPrice":
      result.sort((val1, val2) => {
        const price1 = val1.sale || val1.price;
        const price2 = val2.sale || val2.price;
        return price1 - price2;
      });
      break;
    case "highPrice":
      result.sort((val1, val2) => {
        const price1 = val1.sale || val1.price;
        const price2 = val2.sale || val2.price;
        return price2 - price1;
      });
      break;
    default:
      result.sort((val1, val2) => {
        return val2.sold - val1.sold;
      });
      break;
  }

  // Get data in current page
  const length = result.length;
  result = result.filter((product, index) => {
    if (Math.floor(index / numProduct) + 1 === page) return true;
    return false;
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        JSON.stringify({
          products: joinProductsWithMaterialAndColor(result, materialsColors),
          total: length,
          page: page,
          numProduct: numProduct,
        }),
      );
    }, 300);
  });
};

const getNewProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newProductsArr = JSON.parse(JSON.stringify(products.data));
      newProductsArr.sort((product1, product2) => {
        return new Date(product1.create_date).getTime() - new Date(product2.create_date).getTime();
      });

      resolve(
        JSON.stringify(
          joinProductsWithMaterialAndColor(newProductsArr.slice(0, 10), materialsColors),
        ),
      );
    }, 300);
  });
};

const getTopSellers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const topSellersArr = JSON.parse(JSON.stringify(products.data));
      topSellersArr.sort((product1, product2) => {
        return product2.sold - product1.sold;
      });

      resolve(
        JSON.stringify(
          joinProductsWithMaterialAndColor(topSellersArr.slice(0, 10), materialsColors),
        ),
      );
    }, 300);
  });
};

const getAllCategories = () => {
  const result = categories.data.map((category) => {
    const productsInCategory = products.data.filter((product) => product.room === category.name);
    const materialAndColorArr = productsInCategory.reduce((curr, nextCategory) => {
      nextCategory.materials_colors.forEach((value) => {
        if (!curr.includes(value)) curr.push(value);
      });
      return curr;
    }, []);

    const colorAndMarterialObj = materialsColors.data.filter((value) =>
      materialAndColorArr.includes(value.id),
    );
    return { ...category, colorAndMarterialObj };
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify(result));
    }, 300);
  });
};

export {
  getProductByName,
  getAllProducts,
  getProductsByFilterAndSorted,
  getNewProducts,
  getTopSellers,
  getAllCategories,
};
