# 📊 TEST EXECUTION REPORT  
**Projeto:** BStackDemo – Login & Cart Validation  
**Versão do Documento:** 1.0  
**Data da Execução:** 20/02/2026  
**Ambiente:** Ambiente público disponibilizado em https://bstackdemo.com/
**Navegador:** Google Chrome  

---

## 1. Objetivo

Documentar os resultados da execução dos testes automatizados responsáveis por validar o fluxo principal da aplicação BStackDemo.

---

## 2. Escopo Executado

Foram executados os seguintes cenários automatizados:

- CT00 – Validação mínima da página (Smoke)  
- CT01 – Login com credenciais válidas  
- CT02 – Login com credenciais inválidas  
- CT03 – Adição de produto ao carrinho  

Os cenários executados correspondem ao fluxo crítico da aplicação.

---

## 3. Resultado da Execução

| Caso de Teste | Status |
|---------------|--------|
| CT00 – Smoke | ✅ Passed |
| CT01 – Login válido | ✅ Passed |
| CT02 – Login inválido | ✅ Passed |
| CT03 – Adição ao carrinho | ✅ Passed |

Total de testes executados: **4**  
Total de testes aprovados: **4**  
Total de testes reprovados: **0**  
Taxa de sucesso: **100%**

Tempo total de execução: *9:39:51 - 9:40:09 (18s 103ms)*

---

## 4. Evidências

O relatório detalhado foi gerado via Allure após a execução da suíte automatizada.

O relatório contém:

- Distribuição de status  
- Organização por suíte  
- Tempo total de execução  
- Detalhamento por cenário  
- Logs completos da execução  

---

## 5. Defeitos Identificados

Durante a execução, não foram identificados defeitos críticos ou bloqueantes dentro do escopo validado.

---

## 6. Conclusão

O fluxo principal da aplicação foi validado com sucesso:

Página Inicial → Login → Adição ao Carrinho → Checkout visível  

Nenhuma inconsistência funcional foi observada durante a execução, indicando que o fluxo crítico está funcional dentro do escopo definido.