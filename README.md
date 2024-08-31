Estes são arquivos de exercício do curso MaisPraTi.
Neste guia, vou explicar como receber um arquivo JavaScript (.js) pelo GitHub, salvá-lo no seu computador e abrir o arquivo no Visual Studio Code (VSCode). Também vou abordar o uso do Node.js e do Nodemon para executar seus scripts JavaScript.

Passo a Passo
1. Recebendo o Arquivo pelo GitHub
Acesse o repositório do projeto no GitHub.
Localize o arquivo JavaScript que deseja baixar.
Clique no botão “Download” ou copie o link do arquivo.
2. Salvando o Arquivo no Computador
Escolha uma pasta no seu computador onde deseja salvar o arquivo.
Cole o arquivo JavaScript baixado nessa pasta.
3. Abrindo o Arquivo no VSCode
Se você ainda não tem o VSCode instalado, faça o download e instale-o a partir do site oficial.
Abra o VSCode.
No menu, clique em “File” > “Open Folder” e selecione a pasta onde você salvou o arquivo JavaScript.
4. Configurando o Ambiente
Certifique-se de ter o Node.js instalado no seu computador. Se não tiver, baixe-o em nodejs.org.
Abra o terminal no VSCode (pressione `Ctrl + `` ou vá em “Terminal” > “New Terminal”).
Instale o Nodemon globalmente (caso ainda não tenha feito isso) com o seguinte comando:
npm install -g nodemon

5. Executando o Arquivo
No terminal do VSCode, navegue até a pasta onde está o arquivo JavaScript.
Execute o seguinte comando para rodar o arquivo com o Nodemon:
nodemon +nome-do-arquivo.js
Substitua nome-do-arquivo.js pelo nome real do seu arquivo.
6. Continuando a Digitação
Se você precisar dar continuidade à digitação após a execução, utilize o atalho “rs” no terminal para reiniciar o script.
