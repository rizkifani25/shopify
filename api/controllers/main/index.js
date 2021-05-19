const request = require("request");

tokpedSearch = (query, limit) => {
  return new Promise((resolve, reject) => {
    let uriQuery = encodeURIComponent(query);

    var options = {
      method: "POST",
      url: "https://gql.tokopedia.com/",
      headers: {
        "Tkpd-UserId": "-1",
        "content-type": "application/json",
        "X-Source": "tokopedia-lite",
        "x-device": "desktop-0.0",
        "X-Tkpd-Lite-Service": "zeus",
        Accept: "*/*",
        "Accept-Encoding": "gzip",
        Connection: "keep-alive",
        Cookie:
          "_abck=6D571D761E78B340665C5665D1D37F52~-1~YAAQ719idpZyDct3AQAAf5438wV3GEWO1mJpHf0lJaxgzwEtnbotGnQ3mxeNOnzqwYaw9iJXMZn9wBa7ODcrEYtXe7XQNWqFZixg0dzUeZGVFOB9SjNcnYiRKyKB1ie+ar9DBx/YX4SFLKsS7VOi51FrxzlfclBPGfMHMkuirXsjkah1o2B6lKjvoVO0KRl2C8ZOAgXH4XrIgPAgr1jbeGdhICLIWkrq3dx8f0yHw/2fzuPcW/ywVMbx2ChKYweISfx06l2mbKiQnisoNHRJjv5gDI+2bSzWHrHcEzQqsQgeiGm50qhnzZlw9PWuIgo6ygNansxoBUNaPCmg5Yy06ZyGe25gfoVqZMhyV/t5yZqLmc+85a2C9ysG++A=~-1~-1~-1; bm_sz=1B6DAD4EBE0ACA5574642C2B0BE44640~YAAQ719idpVyDct3AQAAf5438wqEGhHwdb3yrAzd+kSH5EbyKHOPjmdvIykimVvmlRuoCwCOrzg4+nlwOdWrl3tXdhKIqKLb4/lxAlYmm3cJ2LtHOwMPDRsw6eRcv+01X87YdqND5LaWO4q7HiXyWaUzvkl997w8upefl4s4nF0lyrQG1CnmTafsHO4EeaBd2AVJ",
      },
      gzip: true,
      body: JSON.stringify([
        {
          operationName: "SearchProductQueryV4",
          variables: {
            params:
              "device=desktop&ob=23&page=1&q=" +
              uriQuery +
              "&related=true&rows=" +
              limit +
              "&safe_search=false&scheme=https&shipping=&source=search&st=product&start=0&unique_id=58f665eca60e128916e29e5ed18ff04d&user_id=&variants=",
          },
          query:
            "query SearchProductQueryV4($params: String!) {\n  ace_search_product_v4(params: $params) {\n    header {\n      totalData\n      totalDataText\n      processTime\n      responseCode\n      errorMessage\n      additionalParams\n      keywordProcess\n      __typename\n    }\n    data {\n      isQuerySafe\n      ticker {\n        text\n        query\n        typeId\n        __typename\n      }\n      redirection {\n        redirectUrl\n        departmentId\n        __typename\n      }\n      related {\n        relatedKeyword\n        otherRelated {\n          keyword\n          url\n          product {\n            id\n            name\n            price\n            imageUrl\n            rating\n            countReview\n            url\n            priceStr\n            wishlist\n            shop {\n              city\n              isOfficial\n              isPowerBadge\n              __typename\n            }\n            ads {\n              id\n              productClickUrl\n              productWishlistUrl\n              shopClickUrl\n              productViewUrl\n              __typename\n            }\n            ratingAverage\n            labelGroups {\n              position\n              type\n              title\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      suggestion {\n        currentKeyword\n        suggestion\n        suggestionCount\n        instead\n        insteadCount\n        query\n        text\n        __typename\n      }\n      products {\n        id\n        name\n        ads {\n          id\n          productClickUrl\n          productWishlistUrl\n          productViewUrl\n          __typename\n        }\n        badges {\n          title\n          imageUrl\n          show\n          __typename\n        }\n        category: departmentId\n        categoryBreadcrumb\n        categoryId\n        categoryName\n        countReview\n        discountPercentage\n        gaKey\n        imageUrl\n        labelGroups {\n          position\n          title\n          type\n          __typename\n        }\n        originalPrice\n        price\n        priceRange\n        rating\n        ratingAverage\n        shop {\n          id\n          name\n          url\n          city\n          isOfficial\n          isPowerBadge\n          __typename\n        }\n        url\n        wishlist\n        sourceEngine: source_engine\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
        },
      ]),
    };

    try {
      request(options, function (error, response) {
        if (error) throw new Error(error);
        let body = JSON.parse(response.body);
        resolve(body[0]["data"]["ace_search_product_v4"]["data"]);
      });
    } catch (error) {
      console.log(error);
      resolve([]);
    }
  });
};

shopeeSearch = (query, limit) => {
  return new Promise((resolve, reject) => {
    let uriQuery = encodeURIComponent(query);

    var options = {
      method: "GET",
      url:
        "https://shopee.co.id/api/v2/search_items/?by=relevancy&keyword=" +
        uriQuery +
        "&limit=" +
        limit +
        "&newest=0&order=desc&page_type=search&version=2",
      headers: {
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "X-Shopee-Language": "id",
        "X-Requested-With": "XMLHttpRequest",
        "If-None-Match-": "55b03-1a2138223b4c6de11801b9a99a034170",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        "X-API-SOURCE": "pc",
        Accept: "*/*",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Cookie:
          'REC_T_ID=a8af4ea4-8628-11eb-ba74-ccbbfe2360e8; SPC_CT_0feb652d="1615879474.FdH9WWFycQTt7EtHl1fAATAIJzCT99SUyfHKKQ7AsBo="; SPC_CT_af488c01="1615879612.wsBVpwUqD4XWJ+VulnArhvZ4bxKN26AnRqaF23/myTI="; SPC_EC=-; SPC_F=wk6O3AROcU6NmcBRc6vxruuuIbwteDQJ; SPC_IA=-1; SPC_R_T_ID="wAtfZU/dJHNMl4o/u9MuxIgVe23H09ibtNS+JaA/igox+RHVsjnFuk+m6+zFWWG4ZVXmOwxSLwSNXWPz5zt/9CouBtjhb4LBrKIaEiSlOpg="; SPC_R_T_IV="fpCn9I/+j3syouNDvpvrvA=="; SPC_SI=mall.Lklk6Dmuo45JSmcupekOaY2ZwnzYv25G; SPC_T_ID="wAtfZU/dJHNMl4o/u9MuxIgVe23H09ibtNS+JaA/igox+RHVsjnFuk+m6+zFWWG4ZVXmOwxSLwSNXWPz5zt/9CouBtjhb4LBrKIaEiSlOpg="; SPC_T_IV="fpCn9I/+j3syouNDvpvrvA=="; SPC_U=-',
      },
    };

    try {
      request(options, function (error, response) {
        if (error) throw new Error(error);
        let body = JSON.parse(response.body);
        resolve(body.items);
      });
    } catch (error) {
      console.log(error);
      resolve([]);
    }
  });
};

convertShopeeToTokpedIDR = (price) => {
  let rupiah = "";
  price = price.toString();
  let angka = price.substr(0, price.length - 5);
  let angkarev = angka.toString().split("").reverse().join("");
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp" +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
};

lowestToHighest = (arrayProduct) => {
  // sorting algorithm
  for (let i = 0; i < arrayProduct.length; i++) {
    for (let j = 0; j < arrayProduct.length - i - 1; j++) {
      if (arrayProduct[j].numberPrice > arrayProduct[j + 1].numberPrice) {
        var temp = arrayProduct[j];
        arrayProduct[j] = arrayProduct[j + 1];
        arrayProduct[j + 1] = temp;
      }
    }
  }
  return arrayProduct;
};

highestToLowest = (arrayProduct) => {
  // sorting algorithm
  for (let i = 0; i < arrayProduct.length; i++) {
    for (let j = 0; j < arrayProduct.length - i - 1; j++) {
      if (arrayProduct[j].numberPrice < arrayProduct[j + 1].numberPrice) {
        var temp = arrayProduct[j];
        arrayProduct[j] = arrayProduct[j + 1];
        arrayProduct[j + 1] = temp;
      }
    }
  }
  return arrayProduct;
};

exports.searchProduct = async (req, res) => {
  const { query, limit, fromLow } = req.body;
  console.log(req.body);
  let finalResponse;

  let tokpedResponse = await tokpedSearch(query, limit);
  let shopeeResponse = await shopeeSearch(query, limit);

  if (tokpedResponse == null || shopeeResponse == null) {
    finalResponse = {
      responseCode: 200,
      responseMessage: "success",
      data: [],
    };
  } else {
    let products = tokpedResponse.products;

    for (let i = 0; i < products.length; i++) {
      products[i].originOlShop = "tokopedia";
    }

    for (let i = 0; i < shopeeResponse.length; i++) {
      shopeeResponse[i].price = convertShopeeToTokpedIDR(
        shopeeResponse[i].price
      );
      shopeeResponse[i].originOlShop = "shopee";
      shopeeResponse[i].imageUrl = products[i].imageUrl;
      products.push(shopeeResponse[i]);
    }

    for (let i = 0; i < products.length; i++) {
      products[i].numberPrice = Number(
        products[i].price.replace(/[^0-9]/g, "")
      );
    }

    products = fromLow ? lowestToHighest(products) : highestToLowest(products);

    let response = {
      related: tokpedResponse.related,
      products: products,
    };

    finalResponse = {
      responseCode: 200,
      responseMessage: "success",
      data: response,
    };
  }
  res.status(200).send(finalResponse);
};
