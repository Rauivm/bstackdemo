# 🧪 Desafio QA – BStackDemo

Este projeto contém a implementação do desafio técnico de QA para validação do site:

https://bstackdemo.com/

---

# 📌 Estrutura do Projeto

```plaintext
cypress/
├── e2e/
│   ├── 01_smoke.suite.cy.js
│   ├── 02_login.suite.cy.js
│   └── 03_addToCart.suite.cy.js
│
├── pages/
│   ├── Login.page.js
│   ├── Products.page.js
│   └── Cart.page.js
│
├── flows/
│   ├── Login.flow.js
│   └── Purchase.flow.js
│
├── fixtures/
│   └── env.yaml
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
cypress.config.js
package.json
```

---

# ✅ Parte 1 – Planejamento

O documento de planejamento está disponível em:

`Test-Plan-BStackDemo.md`

Ele descreve:

- Objetivo dos testes
- Escopo validado
- Casos implementados
- Estratégia utilizada

---

# 📊 Parte 2 – Execução

Foram executados 4 cenários automatizados:

- CT00 – Smoke
- CT01 – Login válido
- CT02 – Login inválido
- CT03 – Adição ao carrinho

Resultado final: **100% de sucesso**

O relatório pode ser gerado via Allure.

---

# 🤖 Parte 3 – Automação

## Cenário solicitado pelo desafio
```
Quando acesso o site
E adicionar um(ou mais) itens no carrinho
Então deverá exibir uma mensagem de sucesso
```

A validação foi interpretada como:

- Drawer do carrinho visível
- Produto listado
- Quantidade correta
- Subtotal correto
- Botão Checkout disponível

---

# 🏗 Arquitetura Utilizada

- Padrão Page Object
- Camada de Flow
- Dados externos via YAML
- Validação dinâmica de preços (sem hardcode)
- Relatório estruturado com Allure

---

# ⚙️ Pré-requisitos

- Node.js instalado
- npm instalado
- Google Chrome
- Allure CLI instalado (opcional para relatório)

Instalar dependências:
npm install


---

# ▶️ Executar os Testes
npx cypress run


---

# 📈 Gerar Relatório Allure

Após execução:
allure generate allure-results --clean -o allure-report
allure open allure-report


---

# 📌 Observações

O desafio solicitava a automação de um cenário principal.

Foram adicionadas melhorias estruturais adicionais (Page Object, Flow, parametrização externa e relatório) com o objetivo de demonstrar organização e escalabilidade da automação.

---

# 👤 Autor

Raui Viana Macedo