# API de Vendas

## Descrição
A API de Vendas é um sistema para gerenciar clientes, funcionários, categorias, produtos, vendas e itens de vendas. Ela fornece endpoints para realizar operações CRUD e outras funcionalidades relacionadas.

## Endpoints

### Cliente
- **GET /clientes**
  - Descrição: Lista todos os clientes.
  - Respostas:
    - 200: Lista de clientes retornada com sucesso.

- **GET /clientes/{id}**
  - Descrição: Retorna os detalhes de um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Respostas:
    - 200: Detalhes do cliente retornados com sucesso.
    - 404: Cliente não encontrado.

- **POST /clientes**
  - Descrição: Cria um novo cliente associando a uma pessoa.
  - Corpo da Requisição:
    ```json
    {
      "codcliente": 1,
      "idpessoa": 2
    }
    ```
  - Respostas:
    - 201: Cliente criado com sucesso.
    - 400: Campos obrigatórios faltando.

- **PUT /clientes/{id}**
  - Descrição: Atualiza os dados de um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Corpo da Requisição:
    ```json
    {
      "codcliente": 1,
      "idpessoa": 2
    }
    ```
  - Respostas:
    - 200: Cliente atualizado com sucesso.
    - 404: Cliente não encontrado.

- **DELETE /clientes/{id}**
  - Descrição: Remove um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Respostas:
    - 200: Cliente deletado com sucesso.
    - 404: Cliente não encontrado.

### Funcionário
- **GET /funcionarios**
  - Descrição: Lista todos os funcionários.
  - Respostas:
    - 200: Lista de funcionários retornada com sucesso.

- **GET /funcionarios/{id}**
  - Descrição: Retorna os detalhes de um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Respostas:
    - 200: Detalhes do funcionário retornados com sucesso.
    - 404: Funcionário não encontrado.

- **POST /funcionarios**
  - Descrição: Cria um novo funcionário associando a uma pessoa.
  - Corpo da Requisição:
    ```json
    {
      "salario": 3000.00,
      "cargo": "Gerente",
      "idpessoa": 1,
      "codfuncionario": 2
    }
    ```
  - Respostas:
    - 201: Funcionário criado com sucesso.
    - 400: Campos obrigatórios faltando.

- **PUT /funcionarios/{id}**
  - Descrição: Atualiza os dados de um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Corpo da Requisição:
    ```json
    {
      "salario": 3500.00,
      "cargo": "Supervisor",
      "idpessoa": 1,
      "codfuncionario": 2
    }
    ```
  - Respostas:
    - 200: Funcionário atualizado com sucesso.
    - 404: Funcionário não encontrado.

- **DELETE /funcionarios/{id}**
  - Descrição: Remove um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Respostas:
    - 200: Funcionário deletado com sucesso.
    - 404: Funcionário não encontrado.

### Categoria
- **GET /categorias**
  - Descrição: Lista todas as categorias.
  - Respostas:
    - 200: Lista de categorias retornada com sucesso.

- **GET /categorias/{id}**
  - Descrição: Retorna os detalhes de uma categoria específica.
  - Parâmetros:
    - `id` (path): ID da categoria.
  - Respostas:
    - 200: Detalhes da categoria retornados com sucesso.
    - 404: Categoria não encontrada.

### Produto
- **GET /produtos**
  - Descrição: Lista todos os produtos.
  - Respostas:
    - 200: Lista de produtos retornada com sucesso.

- **GET /produtos/{id}**
  - Descrição: Retorna os detalhes de um produto específico.
  - Parâmetros:
    - `id` (path): ID do produto.
  - Respostas:
    - 200: Detalhes do produto retornados com sucesso.
    - 404: Produto não encontrado.

- **POST /produtos**
  - Descrição: Cria um novo produto associando a uma categoria.
  - Corpo da Requisição:
    ```json
    {
      "codproduto": 1,
      "nome": "Produto A",
      "preco": 100.00,
      "qntestoque": 50,
      "idcategoria": 2
    }
    ```
  - Respostas:
    - 201: Produto criado com sucesso.
    - 400: Campos obrigatórios faltando.

- **PUT /produtos/{id}**
  - Descrição: Atualiza os dados de um produto específico.
  - Parâmetros:
    - `id` (path): ID do produto.
  - Corpo da Requisição:
    ```json
    {
      "codproduto": 1,
      "nome": "Produto B",
      "preco": 120.00,
      "qntestoque": 40,
      "idcategoria": 2
    }
    ```
  - Respostas:
    - 200: Produto atualizado com sucesso.
    - 404: Produto não encontrado.

- **DELETE /produtos/{id}**
  - Descrição: Remove um produto específico.
  - Parâmetros:
    - `id` (path): ID do produto.
  - Respostas:
    - 200: Produto deletado com sucesso.
    - 404: Produto não encontrado.

- **GET /produtos/categoria/{idcategoria}**
  - Descrição: Lista os produtos de uma categoria específica.
  - Parâmetros:
    - `idcategoria` (path): ID da categoria.
  - Respostas:
    - 200: Lista de produtos retornada com sucesso.

### Venda
- **GET /vendas**
  - Descrição: Lista todas as vendas.
  - Respostas:
    - 200: Lista de vendas retornada com sucesso.

- **GET /vendas/{id}**
  - Descrição: Retorna os detalhes de uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Respostas:
    - 200: Detalhes da venda retornados com sucesso.
    - 404: Venda não encontrada.

- **POST /vendas**
  - Descrição: Cria uma nova venda associando cliente e funcionário.
  - Corpo da Requisição:
    ```json
    {
      "data": "2025-05-08",
      "idfuncionario": 1,
      "valor": 500.00,
      "idcliente": 2
    }
    ```
  - Respostas:
    - 201: Venda criada com sucesso.
    - 400: Campos obrigatórios faltando.

- **DELETE /vendas/{id}**
  - Descrição: Remove uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Respostas:
    - 200: Venda deletada com sucesso.
    - 404: Venda não encontrada.

### Venda Produto (Itens da Venda)
- **GET /vendas/{id}/produtos**
  - Descrição: Lista os produtos de uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Respostas:
    - 200: Lista de produtos retornada com sucesso.

- **POST /vendas/{id}/produtos**
  - Descrição: Adiciona um produto a uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Corpo da Requisição:
    ```json
    {
      "idproduto": 1,
      "quantidade": 2,
      "valor": 200.00
    }
    ```
  - Respostas:
    - 201: Produto adicionado à venda com sucesso.
    - 400: Campos obrigatórios faltando.

- **DELETE /vendas/{id}/produtos/{idproduto}**
  - Descrição: Remove um produto de uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
    - `idproduto` (path): ID do produto.
  - Respostas:
    - 200: Produto removido da venda com sucesso.
    - 404: Produto ou venda não encontrado.

- **PUT /vendas/{id}/produtos/{idproduto}**
  - Descrição: Atualiza os dados de um produto associado a uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
    - `idproduto` (path): ID do produto.
  - Corpo da Requisição:
    ```json
    {
      "quantidade": 3,
      "valor": 300.00
    }
    ```
  - Respostas:
    - 200: Produto atualizado com sucesso.
    - 404: Produto ou venda não encontrado.

### Endpoints Opcionais
- **GET /clientes/{id}/vendas**
  - Descrição: Lista as vendas de um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Respostas:
    - 200: Lista de vendas retornada com sucesso.

- **GET /funcionarios/{id}/vendas**
  - Descrição: Lista as vendas realizadas por um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Respostas:
    - 200: Lista de vendas retornada com sucesso.