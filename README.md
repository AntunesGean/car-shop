# Boas-vindas ao repositório do Projeto Car Shopping

Para abrir o projeto, atente-se as orientações descritas a seguir, e, caso tenha qualquer dúvida, entre em contato.

<summary><strong>👨‍💻 Projeto Car Shopping</strong></summary><br  />

Para este projeto, foram aplicados os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados `MongoDB` através do framework do `Mongoose`.

<!-- 
<strong>🚵 Habilidades trabalhadas:</strong>

<ul>
<li>Lógica</li>
<li>Capacidade de interpretação de problemas</li>
<li>Capacidade de otimizar a resolução de problemas</li>
<li>Resolver problemas/Otimizar algoritmos sob pressão.</li>
</ul>
-->

</details>


# Orientações

<details>

<summary><strong>⚠ Como iniciar o projeto</strong></summary><br  />


1. Clone o repositório  


- Use o comando: `git clone https://github.com/tryber/sd-021-a-project-car-shop.git`.

- Entre na pasta do repositório que você acabou de clonar:

-  `cd sd-021-a-project-car-shop`


2. Instale as dependências

 
-  `npm install`

3. E está pronto para usar e testar!


</details>
<details>

<summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

  

## 👉 Com Docker


**⚠ Antes de começar, o docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**  

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  

- Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers

- Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.

- A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo na IDE.

 
> :information_source: Use o comando `docker exec -it car_shop bash`.

 
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  

> :information_source: Instale as dependências [**Caso existam**] com `npm install`

-  **⚠ Atenção:** Caso opte por rodar utilizando o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

-  **⚠ Atenção:** O **git** dentro do container não vem configurado com credenciais. Ou faça os commits fora do container, ou configure as credenciais do git dentro do container.

- ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa acessar sua aplicação no container Docker direto no VS Code, assim como é feito com os arquivos locais.

  
<br  />

## 👉 Sem Docker

  

> :information_source: Instale as dependências [**Caso existam**] com `npm install`

**⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


- ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

<br>

</details>
