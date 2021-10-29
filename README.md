# AtividadeTesteDeUI
Repositório para a entrega do exercício de S206 sobre teste de UI.

Nome: Antônio Victor Mendes Fonseca

Curso: GES

Matrícula: 109

Link para o site utilizado: https://www.futbin.com/

Link para a página do site utilizada nos testes: https://www.futbin.com/22/players

Utilizei o site FUTBIN para a realização dos testes solicitados. O site trata-se de uma base de dados com os jogadores do jogo de video game Fifa com todos os jogadores e seus atributos. Para a realização dos testes utilizei especificamente da página de pesquisa do site, utilizando de seus diferentes filtros para obter diferentes resultados desejados.

 - Primeiro caso de Teste: Buscar por um jogador de nome inexistente no site - Digitei diferentes letras aleatórias a fim de que o site não encontrasse nenhum jogador com esse nome, e quando isso acontece, o site simplesmente volta para sua página inicial de pesquisa.

 - Segundo caso de teste: Buscar por um jogador de nome existente no site (Neymar) - Realizei a busca de um jogador presente no jogo para que o site mostrasse o jogador pesquisado, no caso, o Neymar.

 - Terceiro caso de teste: Buscar por um goleiro com 3 estrelas de skills - Utilizei dos filtros para pesquisar um goleiro que tivesse 3 estrelas de skills.

 - Quarto caso de teste: Buscar por um goleiro com 5 estrelas de skills (Não existe) - Utilizei dos filtros para buscar um goleiro com 5 estrelas de skill, o que não existe no jogo, logo o site nos dá um retorno de "Não há resultados para essa pesquisa".

 - Quinto caso de teste: Buscar por um jogador chamado Bruno natural de Angola - Utilizie dos filtros do site para buscar um jogador chamado Bruno natural de Angola tendo como resultado único o jogador Bruno Ecuélé Manga. 

 - Sexto caso de teste: Buscar por um zagueiro de natural de Togo que jogue na La Liga (Liga espanhola) - Utilizie dos filtros do site para buscar um jogador natural de Togo que jogasse na liga espanhola, tendo como resultado único o jogador Djené.

Para executar o projeto basta realizar a cópia do repositório para sua máquina, utilizar o comando npm install para instalar as dependencias do projeto, acessá-lo utilizando o GIT BASH ou outra ferramenta similar, e utilizar o comando ./node_modules/.bin/cypress open para abrir o cypress e poder executá-lo. Você pode também utilizar a linha de comando ./node_modules/.bin/cypress run --spec 'cypress/integration/testesUI/**/'.

Já para gerar o relatório HTML basta segui os seguintes comandos:

1. Adicionando as dependências necessárias para gerar o reporte de testes:
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 
	
2. Fazendo merge dos arquivos .json gerados (Após a execução dos testes):
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 

3. Gerando o HTML bonito com os reports:
npx marge mochawesome.json 


