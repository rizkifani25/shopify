const { fetchRequest } = require("../../fetch/api");
const cookie = require("../../assets/cookie");
const request = require("request");
const axios = require("axios");
const unirest = require("unirest");
const { response } = require("express");

exports.searchProduct = async (req, res) => {
  var options = {
    method: "POST",
    url: "https://gql.tokopedia.com/",
    headers: {
      "content-type": "application/json",
      "X-Source": "tokopedia-lite",
      "x-device": "desktop-0.0",
      "X-Tkpd-Lite-Service": "zeus",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      Cookie:
        "_UUID_NONLOGIN_=32cc4eea8596a0dfa519186fc5e9618b; _UUID_NONLOGIN_.sig=YjIPQrLcu1WqSVXVBguKn6sOh94; _abck=B577D9D4EA61319423329C2E6A3F34AF~-1~YAAQbuUcuBnQp4V3AQAAAK4jiwWikbw9X/+qsc9K3XhbD1zzO0GtIW9prNnWMVLYcFPyuLozsrw4r5sPTfLhn45t4VL+MTDNbw9hfZSWz5kl7thSsikYstnDXiDv9HwYf4YMFIBg1GFL4g12dGR4D5Z3/EPOt/1DNZ9Xh9V9PMbo/2+ekK8vpEJNcsypm7AV0u7QDeihba0OPBX3haU6rco1zgb4xLqlNUKks8i3Rz97nB0U37DTLif/p0dQ9LZ72jRxtCgNO1MC3fXxTcGb0dhrmfbqlJWXhSliAHrmc3ELhEwXNUnvIU7sJbIu~-1~-1~-1; bm_sz=51AB9315B3CC6AB4841A61DBAFEBE8D6~YAAQlCE1F/sbOlp3AQAAaOOHjgpr1JNkvl3msRvZKV7s4gU3UUw0bbMUj5yg6+OW09wqNCHiOQprKJvE/eMck9DUKUrRFeTQpmZdOAI9MzbxTtQLPbgHN1Ks+S0HLvi8RDuj6qvUPY+2jUHgfgMbzx/ifX0kzgXeafZuuIvRls+DPUIInB3tK4JiIyYV6AKV+Ohk",
    },
    body: JSON.stringify([
      {
        operationName: "SearchProductQueryV4",
        variables: {
          params:
            "device=desktop&ob=23&page=1&q=laptop%20lenovo%20s340&related=true&rows=60&safe_search=false&scheme=https&shipping=&source=search&st=product&start=0&unique_id=58f665eca60e128916e29e5ed18ff04d&user_id=&variants=",
        },
        query:
          "query SearchProductQueryV4($params: String!) {\n  ace_search_product_v4(params: $params) {\n    header {\n      totalData\n      totalDataText\n      processTime\n      responseCode\n      errorMessage\n      additionalParams\n      keywordProcess\n      __typename\n    }\n    data {\n      isQuerySafe\n      ticker {\n        text\n        query\n        typeId\n        __typename\n      }\n      redirection {\n        redirectUrl\n        departmentId\n        __typename\n      }\n      related {\n        relatedKeyword\n        otherRelated {\n          keyword\n          url\n          product {\n            id\n            name\n            price\n            imageUrl\n            rating\n            countReview\n            url\n            priceStr\n            wishlist\n            shop {\n              city\n              isOfficial\n              isPowerBadge\n              __typename\n            }\n            ads {\n              id\n              productClickUrl\n              productWishlistUrl\n              shopClickUrl\n              productViewUrl\n              __typename\n            }\n            ratingAverage\n            labelGroups {\n              position\n              type\n              title\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      suggestion {\n        currentKeyword\n        suggestion\n        suggestionCount\n        instead\n        insteadCount\n        query\n        text\n        __typename\n      }\n      products {\n        id\n        name\n        ads {\n          id\n          productClickUrl\n          productWishlistUrl\n          productViewUrl\n          __typename\n        }\n        badges {\n          title\n          imageUrl\n          show\n          __typename\n        }\n        category: departmentId\n        categoryBreadcrumb\n        categoryId\n        categoryName\n        countReview\n        discountPercentage\n        gaKey\n        imageUrl\n        labelGroups {\n          position\n          title\n          type\n          __typename\n        }\n        originalPrice\n        price\n        priceRange\n        rating\n        ratingAverage\n        shop {\n          id\n          name\n          url\n          city\n          isOfficial\n          isPowerBadge\n          __typename\n        }\n        url\n        wishlist\n        sourceEngine: source_engine\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
      },
    ]),
  };

  await fetchRequest(options)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(200).send({
    responseCode: 200,
    responseMessage: "success",
    data: [],
  });
};
