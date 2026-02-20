# 📋 TEST PLAN  
**Projeto:** BStackDemo – Login & Cart Validation  
**Versão do Documento:** 1.1  
**Data:** 20/02/2026  

---

## 1. Objetivo

Definir o planejamento de testes para validar o fluxo principal da aplicação BStackDemo (https://bstackdemo.com/), com foco nas funcionalidades de login e adição de produto ao carrinho.

O objetivo é garantir que o usuário consiga:

- Acessar a aplicação corretamente  
- Autenticar-se com credenciais válidas  
- Receber mensagem adequada em caso de erro  
- Adicionar produto ao carrinho  
- Visualizar corretamente o subtotal  
- Visualizar e interagir com o botão de checkout  

---

## 2. Escopo

### 2.1 Dentro do Escopo

Serão validadas as seguintes funcionalidades:

- Carregamento da página inicial (validação mínima – Smoke)  
- Login com credenciais válidas  
- Login com credenciais inválidas  
- Adição de um produto ao carrinho  
- Exibição do drawer (Bag)  
- Atualização do contador de itens  
- Validação dinâmica do subtotal  
- Exibição do botão Checkout  

### 2.2 Fora do Escopo

Não fazem parte deste planejamento:

- Testes de performance  
- Testes de segurança  
- Integração com gateway de pagamento  
- Testes cross-browser  
- Responsividade mobile  
- Remoção de itens do carrinho  
- Testes com múltiplas quantidades  

---

## 3. Premissas e Dependências

- A aplicação estará acessível durante o período de testes.  
- Os usuários de teste permanecerão ativos.  
- Os produtos exibidos na página não sofrerão alterações estruturais relevantes.  
- Não haverá mudança significativa de layout que impacte os seletores automatizados.  

---

## 4. Análise de Risco

| Funcionalidade | Impacto no Negócio | Probabilidade | Nível de Risco |
|----------------|-------------------|---------------|----------------|
| Login | Alto | Médio | Alto |
| Adição ao carrinho | Alto | Alto | Crítico |
| Cálculo de subtotal | Alto | Médio | Alto |
| Interface visual | Médio | Médio | Médio |

Funcionalidades relacionadas ao carrinho e subtotal possuem impacto direto na conversão e, portanto, recebem prioridade máxima na validação.

---

## 5. Estratégia de Teste

A abordagem adotada será:

- Execução exploratória manual inicial para entendimento do comportamento da aplicação  
- Automação dos cenários principais utilizando Cypress  

A automação será estruturada com:

- Padrão Page Object  
- Camada de Flow para organização do fluxo  
- Parametrização de dados via arquivo externo (YAML)  
- Validações dinâmicas para evitar hardcode  
- Estrutura preparada para expansão futura (data-driven)  

---

## 6. Casos de Teste Planejados

### CT00 – Validação mínima da página (Smoke)  
**Prioridade:** Alta  

- Página carregada corretamente  
- Produtos renderizados  
- Botão "Add to cart" visível  
- Ícone do carrinho visível  

---

### CT01 – Login com credenciais válidas  
**Prioridade:** Alta  

- Usuário autenticado com sucesso  
- Login realizado com sucesso e interface atualizada  

---

### CT02 – Login com credenciais inválidas  
**Prioridade:** Alta  

- Exibição da mensagem de erro ("Invalid Password")  

---

### CT03 – Adição de produto ao carrinho  
**Prioridade:** Crítica  

- Produto selecionado dinamicamente  
- Drawer do carrinho exibido  
- Quantidade exibida corretamente  
- Nome do produto listado no carrinho  
- Subtotal validado dinamicamente  
- Botão "Checkout" visível  

---

## 7. Ambiente de Teste

- URL: https://bstackdemo.com/  
- Navegador: Google Chrome  
- Sistema Operacional: Windows 10+  
- Framework de automação: Cypress  
- Relatório: Allure  
- Dados de teste: arquivo YAML externo  

---

## 8. Critério de Entrada

Os testes poderão iniciar quando:

- A aplicação estiver acessível  
- Não houver incidentes críticos conhecidos  
- Usuário de teste estiver disponível  

---

## 9. Critério de Conclusão

O fluxo será considerado validado quando:

- 100% dos testes críticos forem executados  
- Nenhum defeito crítico permanecer aberto  
- O fluxo principal for executado com sucesso:

Página Inicial → Login → Adição ao Carrinho → Checkout visível  

---

## 10. Rastreabilidade

| Requisito | Caso de Teste |
|------------|----------------|
| Login funcional | CT01, CT02 |
| Renderização inicial | CT00 |
| Adição ao carrinho | CT03 |
| Validação de subtotal | CT03 |
| Disponibilidade de checkout | CT03 |

---

## 11. Observações

O desafio solicitava a automação de um cenário principal.

Foram adicionadas melhorias estruturais (Page Object, Flow, Pipeline automatizada via GitHub Actions garantindo execução automática a cada atualização do repositório, parametrização externa e relatório Allure) com o objetivo de demonstrar organização, escalabilidade e preocupação com manutenção futura da suíte.