📋 TEST PLAN
BStackDemo – Login & Cart Validation
1. Introdução
Este plano organiza a validação das funcionalidades centrais do site https://bstackdemo.com/
, concentrando-se no fluxo que sustenta qualquer operação de e-commerce: autenticação, escolha de produtos e consistência do carrinho. O interesse aqui não é apenas verificar se a aplicação “funciona”, mas garantir que o percurso do usuário — do login ao checkout — mantenha coerência, previsibilidade e integridade da regra de negócio.

2. Objetivo dos Testes
Os testes buscam verificar se o processo de login autentica corretamente usuários válidos e bloqueia acessos indevidos com mensagens adequadas. Avaliam também se os produtos podem ser adicionados ao carrinho sem inconsistências, se o subtotal reflete com precisão os itens selecionados e se a interface preserva clareza e estabilidade após cada ação do usuário.

3. Escopo
3.1 Dentro do Escopo

Estão contempladas a autenticação com credenciais válidas, a exibição de mensagens para tentativas inválidas, a renderização da lista de produtos, a adição e remoção de itens no carrinho, a atualização do contador, a validação do subtotal, a exibição e habilitação do botão de checkout e o comportamento do drawer (Bag).

3.2 Fora do Escopo

Ficam fora desta etapa testes de performance, segurança, integração com pagamento, validações cross-browser e responsividade mobile. A delimitação é estratégica: o foco está na solidez do fluxo principal.

4. Estratégia de Teste
4.1 Abordagem

Adota-se uma abordagem híbrida. A execução manual permite leitura exploratória da interface e identificação de fragilidades iniciais. Em seguida, a automação com Cypress garante repetibilidade, estabilidade e proteção contra regressões.

4.2 Tipos de Teste

Serão conduzidos testes funcionais, negativos, de regressão e baseados em risco, priorizando cenários com maior impacto no negócio.

5. Análise de Risco

Login, carrinho e subtotal concentram alto impacto. O carrinho apresenta risco crítico, pois qualquer falha compromete diretamente a conversão. Inconsistências no subtotal afetam confiança e transparência. Já aspectos visuais da interface, embora relevantes, possuem impacto moderado.

6. Ambiente de Teste

Os testes serão executados no endereço https://bstackdemo.com/
, utilizando Google Chrome em sua versão estável mais recente, em ambiente Windows 10 ou superior. A automação será implementada com Cypress. Os dados de teste — usuários e produtos — serão controlados por arquivo de configuração.

7. Critérios de Entrada

Os testes iniciam-se quando o ambiente estiver acessível, houver usuário válido disponível e não houver indisponibilidades conhecidas na aplicação.

8. Critérios de Saída

Considera-se a etapa concluída quando todos os testes críticos forem executados, não houver defeitos críticos em aberto e o fluxo principal (Login → Adição ao Carrinho → Checkout disponível) estiver funcional.

9. Casos de Teste Planejados

No login, serão validados: autenticação com credenciais válidas, tentativa com senha incorreta e tentativa sem preenchimento de campos obrigatórios.

No carrinho, serão avaliados: adição de um produto, inclusão de múltiplos itens com atualização correta do contador, validação do subtotal, verificação da visibilidade e habilitação do botão de checkout e remoção adequada de produtos.

10. Dados de Teste

Serão utilizados usuário válido, usuário inválido, produtos configuráveis via arquivo externo e quantidades parametrizáveis.

11. Rastreabilidade

Os casos de teste cobrem integralmente os requisitos de login funcional, adição ao carrinho, cálculo correto do subtotal e disponibilidade de checkout, assegurando correspondência direta entre requisito e validação.

12. Considerações Técnicas

Os seletores devem evitar dependência de índices frágeis. As validações não devem utilizar valores fixos sempre que possível. Os preços devem ser calculados dinamicamente, e a estrutura da suíte precisa permitir expansão futura para cenários orientados a dados.

Este plano concentra-se na espinha dorsal da experiência de compra. Quando login, carrinho e subtotal operam com consistência, o sistema sustenta sua credibilidade; quando falham, comprometem mais do que uma funcionalidade — abalam a confiança do usuário.