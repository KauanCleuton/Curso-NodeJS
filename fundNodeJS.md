O Node.js é uma plataforma de código aberto que permite a execução de JavaScript no lado do servidor. Ele utiliza o interpretador JavaScript V8, desenvolvido pelo Google para o navegador Chrome, o que resulta em uma execução mais rápida do JavaScript.

O Node.js é baseado na arquitetura de Event Loop, na qual as funções são colocadas na pilha de chamadas (Call Stack). O Event Loop fica monitorando essas funções e as envia para threads disponíveis para processamento. Por padrão, existem quatro threads disponíveis para processamento.

Uma das características distintivas do Node.js é ser single-threaded, o que significa que opera em uma única thread de execução. No entanto, ele usa I/O não bloqueante (Non-blocking I/O), permitindo que o processamento continue enquanto aguarda operações de entrada e saída assíncronas.

O Node.js possui seus próprios módulos, como http, dns, fs, buffer, entre outros, que fornecem funcionalidades para lidar com redes, sistemas de arquivos, manipulação de dados e outros recursos.

Além disso, o Node.js utiliza gerenciadores de pacotes como o NPM (Node Package Manager) e o Yarn para instalar bibliotecas externas, disponibilizar bibliotecas e gerenciar dependências de projetos. O Yarn é conhecido por ser mais rápido que o NPM.

Existem também frameworks populares construídos em cima do Node.js, como Express, Egg.js, Nest.js e Adonis.js, que fornecem uma estrutura e um conjunto de ferramentas para o desenvolvimento web mais avançado.

Conceitos de API REST:

Uma API (Interface de Programação de Aplicativos) é um conjunto de especificações que define possíveis interações entre diferentes aplicações. Ela permite que aplicações se comuniquem e troquem informações de forma padronizada.

REST (Transferência Representacional de Estado) é um modelo de arquitetura para o desenvolvimento de APIs. Ele define um conjunto de regras e princípios que devem ser seguidos para criar APIs RESTful.

As regras do REST incluem:

1. Arquitetura Cliente-Servidor: Separar as preocupações entre o cliente e o servidor, permitindo que evoluam independentemente um do outro.

2. Stateless: Cada requisição do cliente para o servidor contém todas as informações necessárias para que o servidor entenda e processe a requisição. O servidor não mantém o estado das requisições anteriores.

3. Cache: As respostas do servidor podem ser armazenadas em cache pelo cliente para evitar requisições desnecessárias no futuro.

4. Interface Uniforme: Define a identificação dos recursos, a representação desses recursos (como JSON, XML ou HTML) e mensagens auto-descritivas, além de incluir o conceito de HATEOAS (Hypertext As The Engine Of Application State), que consiste em retornar links dentro das respostas da API para permitir a descoberta e navegação entre os recursos.

5. Camadas: A arquitetura pode ser composta por várias camadas, onde cada camada possui suas responsabilidades e funções específicas.

6. Código Sob Demanda: O servidor pode enviar código executável para o cliente, expandindo a funcionalidade da aplicação no lado do cliente.

Métodos de Requisições - HTTP Verbs

:
- GET: Leitura
- POST: Criação
- PUT: Atualização
- DELETE: Deleção
- PATCH: Atualização parcial

HTTP Codes:
- 1xx: Informativo - a solicitação foi aceita ou o processo continua em andamento.
- 2xx: Confirmação
  - 200: Requisição bem sucedida.
  - 201: Criado - geralmente usado para o POST após uma inserção.
- 3xx: Redirecionamento
  - 301: Movido Permanentemente.
  - 302: Movido.
- 4xx: Erro do Cliente
  - 400: Solicitação inválida.
  - 401: Não autorizado.
  - 403: Proibido.
  - 404: Não encontrado.
  - 422: Entidade não processável.
- 5xx: Erro no Servidor - o servidor falhou ao concluir a solicitação.
  - 500: Erro interno do servidor.
  - 502: Gateway Ruim.

Parâmetros de Requisições:
- Header Params
- Query Params
  - Chave
  - Valor
  - Separação
- Route Params
- Body Params

Boas Práticas de API REST:
- Utilização correta dos métodos HTTP.
- Utilização adequada dos status de retorno das respostas.
- Padrão de nomenclatura consistente, por exemplo:
  - Busca de usuários: GET
    - http://enderecoservidor.com.br/v1/users
  - Busca de usuário por ID: GET
    - http://enderecoservidor.com.br/v1/users/1
  - Busca de endereço do usuário: GET
    - http://enderecoservidor.com.br/v1/users/1/address
  - Deleção de um usuário: DELETE
    - http://enderecoservidor.com.br/v1/users/1
  - Atualização do status do usuário: PATCH
    - http://enderecoservidor.com.br/v1/users/1/status