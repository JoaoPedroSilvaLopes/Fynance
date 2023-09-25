## :pencil2: GLB-Viewer

## :file_folder: Sobre o projeto

<p align="justify">
  Esse projeto se trata de uma aplicação web de gestão e visualização de modelos GLB em que o usuário consiga se cadastrar e se autenticar para poder visualizar, cadastrar e excluir seus modelos com o auxílio da biblioteca Model Viewer.
</p>

## 🖼️ Front-End

<p align="justify">
  Foi utilizado o ambiente NX Workspace para a criação do projeto de forma que ja viesse configurado todas as dependencias de aplicação incluindo o desenvolvimento com o Typescript.
</p>
<p align="justify">
  A organização de pastas do projeto no Front-End é feita dividindo as responsabilidades em módulos para organizar o projeto como um todo e facilitar o desenvolvimento. Os modulos são:
</p>

  - **assets**: Módulo referente à SVGs e arquivos com a extensão .glb;
  - **components**: Módulo que comporta todos os componentes feitos no projeto utilizando o Boostrap;
  - **core**: Módulo que possui arquivos e utilitarios essenciais para o funcionamento da aplicação;
  - **domain-types**: Módulo referente a todos os tipos criados com o auxilio do Typescript;
  - **services**: Módulo que comporta todos os services que fazem comunicação com o Back-End;
  - **styles**: Módulo que comporta todas as estilizações de temas (claro e escuro) através do styled-components;
  - **pages**: Módulo que comporta todos os componentes referentes às páginas, seus modais, hooks, serviços que se comunicam e etc.

## 💡 Rodando o Front-End

### Pre-requisitos

<p>Antes de tudo é necessário instalar: </p>  
- <a href="https://nodejs.org/pt-br/download/package-manager">Node.js</a>

* Instalando o TypeScript
  ```sh
  npm install -g typescript.
  ```

* Instalando o yarn
  ```sh
  npm install --global yarn
  ```
  
* Verificando se o yarn está instalado
  ```sh
  yarn --version
  ```

* Clonando o respositório
  ```sh
  git clone https://github.com/JoaoPedroSilvaLopes/GLB-Viewer.git
  ```

* Installando as dependencias do projeto com yarn
  ```sh
  yarn
  ```

* Rodando o projeto no modo de desenvolvimento
  ```sh
  yarn start
  ```

## :desktop_computer: Principais tecnologias utilizadas no Front-End

- <a href="https://nx.dev/recipes/nx-console">NX Console</a>
- <a href="https://www.typescriptlang.org">TypeScript</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
- <a href="https://react.dev">React</a>
- <a href="https://modelviewer.dev">Model Viewer</a>
- <a href="https://tanstack.com/query/v3/">React Query</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
- <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap</a>
- <a href="https://styled-components.com">Styled Components</a>

## :framed_picture: Design das telas
- <a href="https://www.figma.com/file/uStAGItdkxaMtKHSh9ToWN/GLB-Viewer?type=design&mode=design&t=yT2c8hd7fQryJPIa-0">Figma</a>

## ⌨️ Back-End

<p align="justify">
  Foi utilizado o framework .NET 6 e Entity Framework 6 com o template de Minimal API e conexão com o banco de dados MySQL, mas com a organização de pasta 
  seguindo a modelagem de DDD (Domain Driven Desing) para facilitar a implementação de regras de negócios e outros processos complexos, porém sem arquitetura lógica definida.
</p>
<p align="justify">
  Dito isso, o projeto foi estruturado em 4 "camadas" principais e 1 "camada" auxiliar. As camadas são:
</p>

  - **API**: Comporta configurações da aplicação e controllers;
  - **application**: Cuida da comunicação com o Domain, comportando: classes de serviços, interfaces, DTOs, etc;
  - **infra**: Comporta o suporte geral às demais implementações como repositories, mappers, contextos, etc;
  - **domain**: Comporta todas as entidades, interfaces e classes de serviços;
  - **core**: Comporta classes auxiliares que são compartilhados com os módulos principais como Enums, Settings do projeto e Paths de arquivos.

## 💡 Rodando o Back-End

### Pre-requisitos

<p> ⚠️ Por conta de o Back-End não te sido subido em uma VM ⚠️ para o rodar o projeto é necessário instalar:  </p>

- <a href="https://dotnet.microsoft.com/en-us/download/visual-studio-sdks">.NET SDK</a>
- <a href="https://dev.mysql.com/downloads/installer/">MySQL 8.0.34</a> (Banco de dados)
- <a href="https://dbeaver.io/download/">DBeaver</a> (Criar o banco de dados com o MySQL) 

## :desktop_computer: Principais tecnologias utilizadas no Back-End

- <a href="https://learn.microsoft.com/pt-br/dotnet/csharp/">C#</a>
- <a href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0">.NET 6</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Entity Framework 6</a>
- <a href="https://automapper.org">AutoMapper</a>
- <a href="https://dev.mysql.com/downloads/installer/">MySQL</a>
- <a href="https://dbeaver.io/download/">DBeaver</a>
- <a href="https://fluentvalidation.net">FluentValidation</a>
