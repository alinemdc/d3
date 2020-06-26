#d3
1.	Através do navegador (get), e frameworks como Postman, SoapUI, Katalon Studio, Apigee e etc. 
2.	Tem como vantagem ter objetos específicos para requisições (Request) e repostas (Response).  O fetch() retorna uma Promise, que retorna um objeto Response, com informações da resposta do servidor. Como a resposta deve ser em formato JSON, basta executar a função json().
3.	
•	Por id: seleciona a parte do documento HTML referente ao id.
Ex.:  document.getElementById("id");
•	Por classe: selecionar elementos a partir da classe
Ex.:  document.getElementsByClassName('classe');
•	Por name: seleciona a partir do atributo name.
Ex.:  document.getElementsByName('enviar');
•	Pela tag: o javascript retorna um objeto contendo todos os elementos “input” da página, assim é possível selecionar qual elemento especifico deseja-se pegar pelo numero dele.
Ex.: document.getElementsByTagName('input')[1];
•	Selecionar todos: seleciona todos os elementos.
Ex.: document.querySelectorAll('.class');
4.	.
5.	.
a.	As rotas da API seriam a definição dos “caminhos” possíveis para as requisições (get, set, etc). O servidor recebe o parâmetro da requisição e assim executa a ação dentro do arquivo.
b.	PHP, javascrip, Python,  Java, C#.
c.	Para criar uma API deve ser levado em consideração o modelo de negócio primeiramente, ou seja, a modelagem existente no banco de dados. A partir desse modelo cria-se as rotas necessárias para manipulação dos dados.  
d.	GET: obtém os dados do banco de dados do servidor.
POST: envia dados para o servidor.
PUT : Atualiza os dados que já existem no servidor. 
DELETE: Exclui dado do servidor.
6.	São palavras reservadas, constantes predefinidas que podem ser utilizadas em qualquer lugar da aplicação. Elas são chamadas de constantes mágicas porque o seu valor muda dependendo de onde elas são utilizadas.
__LINE__ 
__FILE__ 
__DIR__ 
__FUNCTION__  
__CLASS__	
__TRAIT__ 
__METHOD__	
__NAMESPACE__
