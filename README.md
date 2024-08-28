# AutoCompleteAI 🤖​

## Visão geral 👁️​
Projeto desenvolvido durante meus testes com modelos ia do site Huggin Face.

Atualmente o projeto gera texto de acordo com o prompt do usuário utilizando da [Serverless Inference API](https://huggingface.co/docs/api-inference/index) + modelo de línguagem [bigcode/starcode](https://huggingface.co/bigcode/starcoder2-3b)

No guia do modelo de línguagem você aprende como fazer prompts de forma eficiente, pois a ia tende a gerar textos sem sentindo dependendo do prompt.
## Para Acessar Localmente 🏠​
Para acessar o frontEnd localmente basta abrir o arquivo index.html no seu navegador.

Para utilizar das capabilidades da API de analise de sentimento é necessário criar uma conta no site da [Hugging Face](https://huggingface.co/) Depois disso nas configurações da conta gerar um token de acesso e substituir no arquivo *main.js* a variavel *apiKey* pelo seu token
````
const apiKey = 'sua api key'
````

## Tecnologias Utilizadas​ 🤖​
Html/Css + JS

Sistema de particulas desenvolvido por https://github.com/VincentGarreau/particles.js?tab=readme-ov-file

Modelo de línguagem [bigcode/starcode](https://huggingface.co/bigcode/starcoder2-3b)


## BackEnd 🔙​
Para a leitura de chat foi utilizada da api [Serverless Inference API](https://huggingface.co/docs/api-inference/index)

## Resultados
![image](https://github.com/user-attachments/assets/8d36c4ed-9ab8-4c06-b105-de24a0ddadf2)


![image](https://github.com/user-attachments/assets/e7341d08-9b0a-4ab3-b476-9d0eecce680f)


## Considerações Finais 📦​
Com o tempo pretendo ir testando mais modelos de ia do site Hugging Face e ir adicionando a este projeto.
