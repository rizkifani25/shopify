const request = require("request");

exports.searchProduct = async (req, res) => {
	const { query, limit } = req.body;
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
			res.status(200).send({
				responseCode: 200,
				responseMessage: "success",
				data: body[0]["data"]["ace_search_product_v4"]["data"],
			});
		});
	} catch (error) {
		console.log(error);
	}
};