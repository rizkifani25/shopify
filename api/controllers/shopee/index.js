const request = require("request");

exports.searchProduct = async (req, res) => {
	const { query, limit } = req.body;
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
			"sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
			"X-Shopee-Language": "id",
			"X-Requested-With": "XMLHttpRequest",
			"If-None-Match-": "55b03-1a2138223b4c6de11801b9a99a034170",
			"sec-ch-ua-mobile": "?0",
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
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
			res.status(200).send({
				responseCode: 200,
				responseMessage: "success",
				data: body,
			});
		});
	} catch (error) {
		console.log(error);
	}
};
