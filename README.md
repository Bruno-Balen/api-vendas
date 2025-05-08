# API de Vendas

## Descrição
A API de Vendas é um sistema para gerenciar clientes, funcionários, categorias, produtos, vendas e itens de vendas. Ela fornece endpoints para realizar operações CRUD e outras funcionalidades relacionadas.

## Endpoints

### Cliente
- **GET /clientes**
  - Descrição: Lista todos os clientes.
  - Respostas:
    - 200: Lista de clientes retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "nome": "João Silva",
          "email": "joao.silva@example.com"
        },
        {
          "id": 2,
          "nome": "Maria Oliveira",
          "email": "maria.oliveira@example.com"
        }
      ]
      ```

- **GET /clientes/{id}**
  - Descrição: Retorna os detalhes de um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Respostas:
    - 200: Detalhes do cliente retornados com sucesso.
      ```json
      {
        "id": 1,
        "nome": "João Silva",
        "email": "joao.silva@example.com"
      }
      ```
    - 404: Cliente não encontrado.
      ```json
      {
        "erro": "Cliente não encontrado."
      }
      ```

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
      ```json
      {
        "id": 1,
        "codcliente": 1,
        "idpessoa": 2
      }
      ```
    - 400: Campos obrigatórios faltando.
      ```json
      {
        "erro": "Campos obrigatórios faltando."
      }
      ```

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
      ```json
      {
        "id": 1,
        "codcliente": 1,
        "idpessoa": 2
      }
      ```
    - 404: Cliente não encontrado.
      ```json
      {
        "erro": "Cliente não encontrado."
      }
      ```

- **DELETE /clientes/{id}**
  - Descrição: Remove um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Respostas:
    - 200: Cliente deletado com sucesso.
      ```json
      {
        "mensagem": "Cliente deletado com sucesso."
      }
      ```
    - 404: Cliente não encontrado.
      ```json
      {
        "erro": "Cliente não encontrado."
      }
      ```

### Funcionário
- **GET /funcionarios**
  - Descrição: Lista todos os funcionários.
  - Respostas:
    - 200: Lista de funcionários retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "nome": "Carlos Souza",
          "cargo": "Gerente",
          "salario": 3000.00
        },
        {
          "id": 2,
          "nome": "Ana Lima",
          "cargo": "Supervisor",
          "salario": 2500.00
        }
      ]
      ```

- **GET /funcionarios/{id}**
  - Descrição: Retorna os detalhes de um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Respostas:
    - 200: Detalhes do funcionário retornados com sucesso.
      ```json
      {
        "id": 1,
        "nome": "Carlos Souza",
        "cargo": "Gerente",
        "salario": 3000.00
      }
      ```
    - 404: Funcionário não encontrado.
      ```json
      {
        "erro": "Funcionário não encontrado."
      }
      ```

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
      ```json
      {
        "id": 1,
        "salario": 3000.00,
        "cargo": "Gerente",
        "idpessoa": 1,
        "codfuncionario": 2
      }
      ```
    - 400: Campos obrigatórios faltando.
      ```json
      {
        "erro": "Campos obrigatórios faltando."
      }
      ```

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
      ```json
      {
        "id": 1,
        "salario": 3500.00,
        "cargo": "Supervisor",
        "idpessoa": 1,
        "codfuncionario": 2
      }
      ```
    - 404: Funcionário não encontrado.
      ```json
      {
        "erro": "Funcionário não encontrado."
      }
      ```

- **DELETE /funcionarios/{id}**
  - Descrição: Remove um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Respostas:
    - 200: Funcionário deletado com sucesso.
      ```json
      {
        "mensagem": "Funcionário deletado com sucesso."
      }
      ```
    - 404: Funcionário não encontrado.
      ```json
      {
        "erro": "Funcionário não encontrado."
      }
      ```

### Categoria
- **GET /categorias**
  - Descrição: Lista todas as categorias.
  - Respostas:
    - 200: Lista de categorias retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "nome": "Eletrônicos"
        },
        {
          "id": 2,
          "nome": "Roupas"
        }
      ]
      ```

- **GET /categorias/{id}**
  - Descrição: Retorna os detalhes de uma categoria específica.
  - Parâmetros:
    - `id` (path): ID da categoria.
  - Respostas:
    - 200: Detalhes da categoria retornados com sucesso.
      ```json
      {
        "id": 1,
        "nome": "Eletrônicos"
      }
      ```
    - 404: Categoria não encontrada.
      ```json
      {
        "erro": "Categoria não encontrada."
      }
      ```

### Produto
- **GET /produtos**
  - Descrição: Lista todos os produtos.
  - Respostas:
    - 200: Lista de produtos retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "nome": "Produto A",
          "preco": 100.00,
          "qntestoque": 50,
          "idcategoria": 2
        },
        {
          "id": 2,
          "nome": "Produto B",
          "preco": 120.00,
          "qntestoque": 40,
          "idcategoria": 2
        }
      ]
      ```

- **GET /produtos/{id}**
  - Descrição: Retorna os detalhes de um produto específico.
  - Parâmetros:
    - `id` (path): ID do produto.
  - Respostas:
    - 200: Detalhes do produto retornados com sucesso.
      ```json
      {
        "id": 1,
        "nome": "Produto A",
        "preco": 100.00,
        "qntestoque": 50,
        "idcategoria": 2
      }
      ```
    - 404: Produto não encontrado.
      ```json
      {
        "erro": "Produto não encontrado."
      }
      ```

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
      ```json
      {
        "id": 1,
        "codproduto": 1,
        "nome": "Produto A",
        "preco": 100.00,
        "qntestoque": 50,
        "idcategoria": 2
      }
      ```
    - 400: Campos obrigatórios faltando.
      ```json
      {
        "erro": "Campos obrigatórios faltando."
      }
      ```

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
      ```json
      {
        "id": 1,
        "codproduto": 1,
        "nome": "Produto B",
        "preco": 120.00,
        "qntestoque": 40,
        "idcategoria": 2
      }
      ```
    - 404: Produto não encontrado.
      ```json
      {
        "erro": "Produto não encontrado."
      }
      ```

- **DELETE /produtos/{id}**
  - Descrição: Remove um produto específico.
  - Parâmetros:
    - `id` (path): ID do produto.
  - Respostas:
    - 200: Produto deletado com sucesso.
      ```json
      {
        "mensagem": "Produto deletado com sucesso."
      }
      ```
    - 404: Produto não encontrado.
      ```json
      {
        "erro": "Produto não encontrado."
      }
      ```

- **GET /produtos/categoria/{idcategoria}**
  - Descrição: Lista os produtos de uma categoria específica.
  - Parâmetros:
    - `idcategoria` (path): ID da categoria.
  - Respostas:
    - 200: Lista de produtos retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "nome": "Produto A",
          "preco": 100.00,
          "qntestoque": 50,
          "idcategoria": 2
        },
        {
          "id": 2,
          "nome": "Produto B",
          "preco": 120.00,
          "qntestoque": 40,
          "idcategoria": 2
        }
      ]
      ```

### Venda
- **GET /vendas**
  - Descrição: Lista todas as vendas.
  - Respostas:
    - 200: Lista de vendas retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "data": "2025-05-08",
          "valor": 500.00,
          "idcliente": 2,
          "idfuncionario": 1
        },
        {
          "id": 2,
          "data": "2025-05-09",
          "valor": 300.00,
          "idcliente": 3,
          "idfuncionario": 2
        }
      ]
      ```

- **GET /vendas/{id}**
  - Descrição: Retorna os detalhes de uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Respostas:
    - 200: Detalhes da venda retornados com sucesso.
      ```json
      {
        "id": 1,
        "data": "2025-05-08",
        "valor": 500.00,
        "idcliente": 2,
        "idfuncionario": 1
      }
      ```
    - 404: Venda não encontrada.
      ```json
      {
        "erro": "Venda não encontrada."
      }
      ```

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
      ```json
      {
        "id": 1,
        "data": "2025-05-08",
        "valor": 500.00,
        "idcliente": 2,
        "idfuncionario": 1
      }
      ```
    - 400: Campos obrigatórios faltando.
      ```json
      {
        "erro": "Campos obrigatórios faltando."
      }
      ```

- **DELETE /vendas/{id}**
  - Descrição: Remove uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Respostas:
    - 200: Venda deletada com sucesso.
      ```json
      {
        "mensagem": "Venda deletada com sucesso."
      }
      ```
    - 404: Venda não encontrada.
      ```json
      {
        "erro": "Venda não encontrada."
      }
      ```

### Venda Produto (Itens da Venda)
- **GET /vendas/{id}/produtos**
  - Descrição: Lista os produtos de uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
  - Respostas:
    - 200: Lista de produtos retornada com sucesso.
      ```json
      [
        {
          "idproduto": 1,
          "quantidade": 2,
          "valor": 200.00
        },
        {
          "idproduto": 2,
          "quantidade": 1,
          "valor": 100.00
        }
      ]
      ```

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
      ```json
      {
        "idproduto": 1,
        "quantidade": 2,
        "valor": 200.00
      }
      ```
    - 400: Campos obrigatórios faltando.
      ```json
      {
        "erro": "Campos obrigatórios faltando."
      }
      ```

- **DELETE /vendas/{id}/produtos/{idproduto}**
  - Descrição: Remove um produto de uma venda específica.
  - Parâmetros:
    - `id` (path): ID da venda.
    - `idproduto` (path): ID do produto.
  - Respostas:
    - 200: Produto removido da venda com sucesso.
      ```json
      {
        "mensagem": "Produto removido da venda com sucesso."
      }
      ```
    - 404: Produto ou venda não encontrado.
      ```json
      {
        "erro": "Produto ou venda não encontrado."
      }
      ```

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
      ```json
      {
        "idproduto": 1,
        "quantidade": 3,
        "valor": 300.00
      }
      ```
    - 404: Produto ou venda não encontrado.
      ```json
      {
        "erro": "Produto ou venda não encontrado."
      }
      ```

### Endpoints Opcionais
- **GET /clientes/{id}/vendas**
  - Descrição: Lista as vendas de um cliente específico.
  - Parâmetros:
    - `id` (path): ID do cliente.
  - Respostas:
    - 200: Lista de vendas retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "data": "2025-05-08",
          "valor": 500.00,
          "idfuncionario": 1
        },
        {
          "id": 2,
          "data": "2025-05-09",
          "valor": 300.00,
          "idfuncionario": 2
        }
      ]
      ```

- **GET /funcionarios/{id}/vendas**
  - Descrição: Lista as vendas realizadas por um funcionário específico.
  - Parâmetros:
    - `id` (path): ID do funcionário.
  - Respostas:
    - 200: Lista de vendas retornada com sucesso.
      ```json
      [
        {
          "id": 1,
          "data": "2025-05-08",
          "valor": 500.00,
          "idcliente": 2
        },
        {
          "id": 2,
          "data": "2025-05-09",
          "valor": 300.00,
          "idcliente": 3
        }
      ]
      ```