import ReactDOM from 'react-dom';

// Add '.' to resolve relative path
const { getadMooHTemplate } = require(process.env.ADMOOH_TEMPLATE);

const template = getadMooHTemplate(
	{
		"data": [
			{
				"title": "Ataque a escola de Suzano | 3º suspeito de massacre, menor é liberado após se apresentar à Justiça",
				"pubDate": "2019-03-15 17:04:42",
				"link": "https://www1.folha.uol.com.br/cotidiano/2019/03/adolescente-apontado-como-3o-suspeito-de-massacre-em-suzano-se-apresenta-a-policia.shtml",
				"guid": "https://www1.folha.uol.com.br/cotidiano/2019/03/adolescente-apontado-como-3o-suspeito-de-massacre-em-suzano-se-apresenta-a-policia.shtml",
				"author": "",
				"thumbnail": "",
				"description": "3º suspeito de massacre, menor é liberado após se apresentar à Justiça",
				"content": "3º suspeito de massacre, menor é liberado após se apresentar à Justiça",
				"enclosure": {},
				"categories": []
			},
			{
				"title": "Vereadora assassinada  | Coaf aponta depósito de R$ 100 mil  para PM acusado de atirar em Marielle",
				"pubDate": "2019-03-15 16:36:24",
				"link": "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2019/03/15/coaf-aponta-deposito-de-r-100-mil-para-pm-acusado-de-atirar-em-marielle.htm",
				"guid": "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2019/03/15/coaf-aponta-deposito-de-r-100-mil-para-pm-acusado-de-atirar-em-marielle.htm",
				"author": "",
				"thumbnail": "http://conteudo.imguol.com.br/c/home/6d/2019/03/15/o-policial-militar-reformado-ronnie-lessa-48-acusado-de-efetuar-dos-disparos-que-mataram-a-vereadora-marielle-franco-1552660708483_615x300.jpg",
				"description": "Coaf aponta depósito de R$ 100 mil  para PM acusado de atirar em Marielle",
				"content": "\n<p>Coaf aponta depósito de R$ 100 mil  para PM acusado de atirar em Marielle</p>\n      <img src=\"http://conteudo.imguol.com.br/c/home/6d/2019/03/15/o-policial-militar-reformado-ronnie-lessa-48-acusado-de-efetuar-dos-disparos-que-mataram-a-vereadora-marielle-franco-1552660708483_615x300.jpg\" alt=\"Reprodução/SBT\" title=\"Reprodução/SBT\">\n",
				"enclosure": {
					"link": "http://conteudo.imguol.com.br/c/home/6d/2019/03/15/o-policial-militar-reformado-ronnie-lessa-48-acusado-de-efetuar-dos-disparos-que-mataram-a-vereadora-marielle-franco-1552660708483_300x168.jpg",
					"type": "image/jpg"
				},
				"categories": []
			},
			{
				"title": "Estrangeiros levam 2 blocos | 1º leilão de Bolsonaro, concessão de 12 aeroportos arrecada R$ 2,377 bilhões",
				"pubDate": "2019-03-15 16:36:24",
				"link": "https://economia.uol.com.br/noticias/redacao/2019/03/15/1-leilao-de-bolsonaro-concessao-de-12-aeroportos-arrecada-r-2377-bi.htm",
				"guid": "https://economia.uol.com.br/noticias/redacao/2019/03/15/1-leilao-de-bolsonaro-concessao-de-12-aeroportos-arrecada-r-2377-bi.htm",
				"author": "",
				"thumbnail": "http://conteudo.imguol.com.br/c/home/b5/2019/03/15/aeroporto-internacional-dos-guararapes-no-recife-que-foi-leiloado-nesta-sexta-feira-1552663420721_615x300.jpg",
				"description": "1º leilão de Bolsonaro, concessão de 12 aeroportos arrecada R$ 2,377 bilhões",
				"content": "\n<p>1º leilão de Bolsonaro, concessão de 12 aeroportos arrecada R$ 2,377 bilhões</p>\n      <img src=\"http://conteudo.imguol.com.br/c/home/b5/2019/03/15/aeroporto-internacional-dos-guararapes-no-recife-que-foi-leiloado-nesta-sexta-feira-1552663420721_615x300.jpg\" alt=\"Bernardo Dantas/Folhapress\" title=\"Bernardo Dantas/Folhapress\">\n",
				"enclosure": {
					"link": "http://conteudo.imguol.com.br/c/home/b5/2019/03/15/aeroporto-internacional-dos-guararapes-no-recife-que-foi-leiloado-nesta-sexta-feira-1552663420721_300x168.jpg",
					"type": "image/jpg"
				},
				"categories": []
			},
			{
				"title": "49 mortos em mesquitas | 'Não havia nem tempo para mirar, havia tantos alvos', diz atirador da N. Zelândia",
				"pubDate": "2019-03-15 16:36:24",
				"link": "https://noticias.uol.com.br/internacional/ultimas-noticias/2019/03/15/autor-de-ataque-a-mesquitas-queria-vingar-menina-sueca-vitima-de-jihadistas.htm",
				"guid": "https://noticias.uol.com.br/internacional/ultimas-noticias/2019/03/15/autor-de-ataque-a-mesquitas-queria-vingar-menina-sueca-vitima-de-jihadistas.htm",
				"author": "",
				"thumbnail": "",
				"description": "'Não havia nem tempo para mirar, havia tantos alvos', diz atirador da N. Zelândia",
				"content": "'Não havia nem tempo para mirar, havia tantos alvos', diz atirador da N. Zelândia",
				"enclosure": {},
				"categories": []
			},
			{
				"title": "Nenhuma teve indiciados | BNDES financiou países de esquerda? Terceira CPI em quatro anos busca resposta",
				"pubDate": "2019-03-15 16:36:24",
				"link": "https://economia.uol.com.br/noticias/redacao/2019/03/15/cpi-do-bndes-investigar-corrupcao-contratos-financiamento-camara.htm",
				"guid": "https://economia.uol.com.br/noticias/redacao/2019/03/15/cpi-do-bndes-investigar-corrupcao-contratos-financiamento-camara.htm",
				"author": "",
				"thumbnail": "",
				"description": "BNDES financiou países de esquerda? Terceira CPI em quatro anos busca resposta",
				"content": "BNDES financiou países de esquerda? Terceira CPI em quatro anos busca resposta",
				"enclosure": {},
				"categories": []
			},
			{
				"title": "Diplomata evitou resposta | Embaixadora do Brasil na ONU bate-boca com Jean Wyllys; veja",
				"pubDate": "2019-03-15 16:24:14",
				"link": "https://jamilchade.blogosfera.uol.com.br/2019/03/15/embaixadora-do-brasil-na-onu-promove-bate-boca-com-jean-wyllys/",
				"guid": "https://jamilchade.blogosfera.uol.com.br/2019/03/15/embaixadora-do-brasil-na-onu-promove-bate-boca-com-jean-wyllys/",
				"author": "",
				"thumbnail": "http://conteudo.imguol.com.br/c/home/e8/2019/03/15/jean-wyllys-bate-boca-na-onu-1552667017777_615x300.jpg",
				"description": "Embaixadora do Brasil na ONU bate-boca com Jean Wyllys; veja",
				"content": "\n<p>Embaixadora do Brasil na ONU bate-boca com Jean Wyllys; veja</p>\n      <img src=\"http://conteudo.imguol.com.br/c/home/e8/2019/03/15/jean-wyllys-bate-boca-na-onu-1552667017777_615x300.jpg\" alt=\"Reprodução/Jamil Chade/Twitter\" title=\"Reprodução/Jamil Chade/Twitter\">\n",
				"enclosure": {
					"link": "http://conteudo.imguol.com.br/c/home/e8/2019/03/15/jean-wyllys-bate-boca-na-onu-1552667017777_300x168.jpg",
					"type": "image/jpg"
				},
				"categories": []
			},
			{
				"title": "Disputa no Judiciário | STF espera apoio de Bolsonaro na guerra contra a Lava Jato",
				"pubDate": "2019-03-15 16:24:14",
				"link": "https://talesfaria.blogosfera.uol.com.br/2019/03/15/stf-espera-apoio-de-bolsonaro-na-guerra-contra-a-lava-jato/",
				"guid": "https://talesfaria.blogosfera.uol.com.br/2019/03/15/stf-espera-apoio-de-bolsonaro-na-guerra-contra-a-lava-jato/",
				"author": "",
				"thumbnail": "http://conteudo.imguol.com.br/c/home/97/2019/03/12/o-presidente-jair-bolsonaro-durante-videoconferencia---1552407658431_615x300.jpg",
				"description": "STF espera apoio de Bolsonaro na guerra contra a Lava Jato",
				"content": "\n<p>STF espera apoio de Bolsonaro na guerra contra a Lava Jato</p>\n      <img src=\"http://conteudo.imguol.com.br/c/home/97/2019/03/12/o-presidente-jair-bolsonaro-durante-videoconferencia---1552407658431_615x300.jpg\" alt=\"Alan Santos/PR\" title=\"Alan Santos/PR\">\n",
				"enclosure": {
					"link": "http://conteudo.imguol.com.br/c/home/97/2019/03/12/o-presidente-jair-bolsonaro-durante-videoconferencia---1552407658431_300x168.jpg",
					"type": "image/jpg"
				},
				"categories": []
			},
			{
				"title": "Duelos definidos | CR7 contra algoz do Real e mais: o que  vai rolar nas quartas da Champions",
				"pubDate": "2019-03-15 16:27:51",
				"link": "https://esporte.uol.com.br/futebol/listas/cr7-contra-algoz-do-real-o-que-vai-rolar-nas-quartas-da-champions.htm",
				"guid": "https://esporte.uol.com.br/futebol/listas/cr7-contra-algoz-do-real-o-que-vai-rolar-nas-quartas-da-champions.htm",
				"author": "",
				"thumbnail": "",
				"description": "CR7 contra algoz do Real e mais: o que  vai rolar nas quartas da Champions",
				"content": "CR7 contra algoz do Real e mais: o que  vai rolar nas quartas da Champions",
				"enclosure": {},
				"categories": []
			},
			{
				"title": "Previdência | Presidente da CCJ crê em votação da reforma na comissão até o fim de março",
				"pubDate": "2019-03-15 16:27:51",
				"link": "https://talesfaria.blogosfera.uol.com.br/2019/03/15/novo-presidente-da-ccj-defende-mudancas-para-area-de-seguranca-na-reforma/",
				"guid": "https://talesfaria.blogosfera.uol.com.br/2019/03/15/novo-presidente-da-ccj-defende-mudancas-para-area-de-seguranca-na-reforma/",
				"author": "",
				"thumbnail": "",
				"description": "Presidente da CCJ crê em votação da reforma na comissão até o fim de março",
				"content": "Presidente da CCJ crê em votação da reforma na comissão até o fim de março",
				"enclosure": {},
				"categories": []
			},
			{
				"title": "Ministro do STF | PF diz que advogado quis humilhar função de Lewandoswki em voo",
				"pubDate": "2019-03-15 15:47:45",
				"link": "https://www1.folha.uol.com.br/colunas/monicabergamo/2019/03/pf-diz-que-advogado-quis-humilhar-funcao-de-lewandoswki-durante-voo.shtml",
				"guid": "https://www1.folha.uol.com.br/colunas/monicabergamo/2019/03/pf-diz-que-advogado-quis-humilhar-funcao-de-lewandoswki-durante-voo.shtml",
				"author": "",
				"thumbnail": "http://conteudo.imguol.com.br/c/home/a6/2018/12/04/ministro-lewandowski-o-supremo-e-uma-vergonha-fustigou-o-passageiro-a-um-entretido-magistrado---em-voo-passageiro-critica-stf-e-ministro-pergunta-voce-quer-ser-preso-1543953035070_615x300.jpg",
				"description": "PF diz que advogado quis humilhar função de Lewandoswki em voo",
				"content": "\n<p>PF diz que advogado quis humilhar função de Lewandoswki em voo</p>\n      <img src=\"http://conteudo.imguol.com.br/c/home/a6/2018/12/04/ministro-lewandowski-o-supremo-e-uma-vergonha-fustigou-o-passageiro-a-um-entretido-magistrado---em-voo-passageiro-critica-stf-e-ministro-pergunta-voce-quer-ser-preso-1543953035070_615x300.jpg\" alt=\"Reprodução\" title=\"Reprodução\">\n",
				"enclosure": {
					"link": "http://conteudo.imguol.com.br/c/home/a6/2018/12/04/ministro-lewandowski-o-supremo-e-uma-vergonha-fustigou-o-passageiro-a-um-entretido-magistrado---em-voo-passageiro-critica-stf-e-ministro-pergunta-voce-quer-ser-preso-1543953035070_300x168.jpg",
					"type": "image/jpg"
				},
				"categories": []
			}
		]
	}
);

ReactDOM.render(template, document.getElementById("app"));