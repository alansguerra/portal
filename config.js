/* =====================================================================
   PORTAL GRUPO MEGAZELO — CONFIGURAÇÃO
   Este é o ÚNICO arquivo que muda no dia a dia:
   - trocar nome/marca do portal
   - trocar o PIN
   - acrescentar, tirar ou mudar o link de um item do menu
   ===================================================================== */

window.PORTAL_CONFIG = {

  // Nome que aparece no topo. Provisório: trocar aqui quando a marca mudar.
  nome: 'Grupo Megazelo',
  sigla: 'GM',
  subtitulo: 'PORTAL · OPERAÇÃO',

  // PIN de entrada (SHA-256 do PIN). Para trocar, peça o hash novo ao Claude
  // ou gere em qualquer gerador SHA-256 e cole aqui.
  pinHash: '016908412530c969eed53d0904ae7b34f8be9ee81001fc3a92a9cf922cfdf5f9',

  // Lojas do seletor. 'cor' = destaque no tema escuro; 'corClara' = no tema claro.
  lojas: [
    { id: 'turpial', nome: 'Turpial', cor: '#38A3F1', corClara: '#1A6FA3' },
    { id: 'emporio', nome: 'Empório', cor: '#F0525A', corClara: '#B3261E' },
    { id: 'grupo',   nome: 'Grupo',   cor: '#A7B4C2', corClara: '#4A5560' }
  ],

  // Atalhos do Início (ids dos itens abaixo)
  maisUsados: ['app-expedicao', 'calculadora', 'vendas-ml', 'dfc'],

  /* Itens do menu.
     tipo:
       'app'      -> abre dentro do portal (apps próprios)
       'planilha' -> abre em nova aba (Google bloqueia planilha dentro de outra página)
       'externo'  -> site de fora, nova aba
     links: um link por loja. Use 'todas' quando é o mesmo para todas.
     Se a loja selecionada não tiver link, o portal avisa e oferece a que existe. */
  grupos: [
    {
      id: 'expedicao', nome: 'Expedição', itens: [
        { id: 'app-expedicao', nome: 'App de expedição', tipo: 'app',
          descricao: 'Bipagem e fechamento do dia.',
          links: { todas: 'https://alansguerra.github.io/expedicao/' } },
        { id: 'separacao', nome: 'Separação', tipo: 'externo',
          descricao: 'Lista de separação (picking) das duas lojas, com relatório no Slack.',
          nota: 'Abre em nova aba: o Google não deixa abrir dentro do portal quando há duas contas logadas.',
          links: { todas: 'https://script.google.com/macros/s/AKfycbzV8byAYkeVVZcFR5EV_YiAULGQ642gcPSGvp12_kPmFrfPwU9gfx5sYhumIbas7ly-/exec' } },
        { id: 'gestao-expedicao', nome: 'Gestão da expedição', tipo: 'app',
          descricao: 'Pedidos por dia, picos e financeiro do Full.',
          links: { todas: 'https://alansguerra.github.io/expedicao/gestao.html' } },
        { id: 'envios-full', nome: 'Envios Full', tipo: 'planilha',
          arquivo: 'Gestão de Envios Full',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1rVsuSWBwa7ze-NPjrDor2bFCkbHFRFOsgMhRhvk8OCE/edit' } },
        { id: 'expedicao-base', nome: 'Expedição - Base', tipo: 'planilha',
          arquivo: 'Expedição - Base',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1yvnY84-TO20AoUg9DwOysTvv3nq64O1jTEyAXEsgmFw/edit' } },
        { id: 'devolucoes', nome: 'Devoluções e intercorrências', tipo: 'planilha',
          arquivo: 'Registro de Devoluções e Intercorrências (Expedição)',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1fQRrGu7bcZ1_YiqtcUDaFoi8raX9bUjLui3YkMGSy80/edit' } },
        { id: 'custo-frete', nome: 'Custo médio de frete', tipo: 'planilha',
          arquivo: 'Média Custo frete Serviços Logístico',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1j0TcvrjxpyZxhRoWH7GiuG9IIi4uCmmpgKHhCNXntLE/edit' } }
      ]
    },
    {
      id: 'vendas', nome: 'Vendas', itens: [
        { id: 'vendas-ml', nome: 'Mercado Livre', tipo: 'planilha',
          arquivo: 'VENDAS MERCADO LIVRE 2026',
          links: {
            turpial: 'https://docs.google.com/spreadsheets/d/1o25nAYoV4VVo3g03jsiLaOf73S2aAYV1u7Te5i37vOo/edit',
            emporio: 'https://docs.google.com/spreadsheets/d/1Ek-YvlmzY8_9wz6LZbbHOhdL1LUfu8qpchqatG0gL0w/edit' } },
        { id: 'vendas-shopee', nome: 'Shopee', tipo: 'planilha',
          arquivo: 'VENDAS SHOPEE 2026',
          links: {
            turpial: 'https://docs.google.com/spreadsheets/d/1Zn-LErZJwofSqO1sFbdcPmP8QhgJ4K3CI1aJT8zqoqA/edit',
            emporio: 'https://docs.google.com/spreadsheets/d/1xKaje81G0_EibTl3mrbMKj__d1KBP-zoTkdf5CMW8eQ/edit' } },
        { id: 'vendas-balcao', nome: 'Balcão', tipo: 'planilha',
          arquivo: 'VENDAS BALCÃO 2026',
          links: { turpial: 'https://docs.google.com/spreadsheets/d/181J3vjBMQk0d0RYn20v1iBG4qOKh5aGa-5usCkGIKRE/edit' } }
      ]
    },
    {
      id: 'produtos', nome: 'Produtos e Preço', itens: [
        { id: 'calculadora', nome: 'Calculadora de precificação', tipo: 'app',
          descricao: 'Preço e margem no Mercado Livre e na Shopee, com custo e medidas do Bling.',
          links: { todas: 'https://script.google.com/macros/s/AKfycbxA1XdMDE_aTGnqoxZXIFh5wOKp2oK8vCA4MIDSFOFZSdEw3w0ZTTyh6dUYRPdl_6lL/exec' } },
        { id: 'custo-produtos', nome: 'Custo de produtos', tipo: 'planilha',
          arquivo: 'CUSTO DE PRODUTOS 2026',
          links: { turpial: 'https://docs.google.com/spreadsheets/d/1PCHNKeyIK80zh_kmFINibLU8xaN8OzVC9nD_ANXgj3Q/edit' } },
        { id: 'bling-planilha', nome: 'BLING 2026 (custos e kits)', tipo: 'planilha',
          arquivo: 'BLING 2026', nota: 'Sai do menu quando o Custo de Produtos substituir.',
          links: {
            turpial: 'https://docs.google.com/spreadsheets/d/1krroSKBipd8bPFkJOC_08Hc-Wpr2Y9IARcJVvUH3NIU/edit',
            emporio: 'https://docs.google.com/spreadsheets/d/1UyANqS8JZ0-G07IKLxOens5EorJHUaMyHfVMinRMsKY/edit' } },
        { id: 'alteracao-custo', nome: 'Alteração do custo', tipo: 'planilha',
          arquivo: 'Alteração do Custo de Produtos', nota: 'Sai do menu quando o Custo de Produtos substituir.',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1eWVhpR7Lj7WQcu0sarGXuDQk0ye1SaeFhStwPL8xU7g/edit' } }
      ]
    },
    {
      id: 'compras', nome: 'Compras e Estoque', itens: [
        { id: 'difal', nome: 'Controle DIFAL / ST', tipo: 'planilha',
          arquivo: 'Controle DIFAL / ST',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1CZQ36ggThrR8CWrMK-n81JsBhup8y2rIdjXOxtvaQgU/edit' } },
        { id: 'valor-estoque', nome: 'Valor de estoque', tipo: 'planilha',
          arquivo: 'Valor de Estoque',
          links: { turpial: 'https://docs.google.com/spreadsheets/d/1c62vALA-qlsH7v11m4trgjYpBDvqdvQkzDJsP7ZVDcs/edit' } }
      ]
    },
    {
      id: 'financeiro', nome: 'Financeiro', itens: [
        { id: 'dfc', nome: 'DFC', tipo: 'planilha', arquivo: 'DFC 2026',
          links: {
            turpial: 'https://docs.google.com/spreadsheets/d/13hfljpk5Nr8q0ypxdhVBdokgstLvr9zcDefx4llfIVA/edit',
            emporio: 'https://docs.google.com/spreadsheets/d/1ERZMRaS60n3nJztKlPEfn4zRNaNYwn7cGc5hpo7aauM/edit',
            grupo:   'https://docs.google.com/spreadsheets/d/1aI5Z90LFxV4u256Rh9kLynjiAd9ZqycNEgHkig6rH14/edit' } },
        { id: 'dre', nome: 'DRE', tipo: 'planilha', arquivo: 'DRE 2026',
          links: {
            turpial: 'https://docs.google.com/spreadsheets/d/1k40BAILY9qqfaEm4JZqdNzKafskedCZHij3hrhzAaKo/edit',
            emporio: 'https://docs.google.com/spreadsheets/d/1U-pkwCahg8j5LPt8JMPPBKiEF0UTVDDRN7NUDGwk2sw/edit',
            grupo:   'https://docs.google.com/spreadsheets/d/1m3zMc60WtOqNyqPG6fIIf9GZatWKCXggV6MzbtelQc4/edit' } },
        { id: 'balanco', nome: 'Balanço patrimonial', tipo: 'planilha',
          arquivo: 'Balanço Patrimonial 2026',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1WpQJu7zajK0ljjKqAptoablKSzj2WTFY3csGNEKjArY/edit' } },
        { id: 'aplicacoes', nome: 'Aplicações (Inter CDI)', tipo: 'planilha',
          arquivo: 'Saldo Banco Inter CDI',
          links: { todas: 'https://docs.google.com/spreadsheets/d/1pUi3qpPVlD7iRFCXZqHwNfkaGyI-n6df4DeDt8zXcqY/edit' } },
        { id: 'contabilidade', nome: 'Relatórios da contabilidade', tipo: 'planilha',
          arquivo: 'Pasta Relatórios Contabilidade (DRE, Balanço...)',
          links: { todas: 'https://drive.google.com/drive/folders/1L_e6GddrBJQlElL0mtGvORMxKX8cbbi5' } }
      ]
    },
    {
      id: 'atalhos', nome: 'Atalhos externos', itens: [
        { id: 'bling', nome: 'Bling', tipo: 'externo', links: { todas: 'https://www.bling.com.br/' } },
        { id: 'ml', nome: 'Mercado Livre', tipo: 'externo', links: { todas: 'https://www.mercadolivre.com.br/vendas/omni/lista' } },
        { id: 'shopee', nome: 'Shopee', tipo: 'externo', links: { todas: 'https://seller.shopee.com.br/' } },
        { id: 'clickup', nome: 'ClickUp', tipo: 'externo', links: { todas: 'https://app.clickup.com/' } },
        { id: 'slack', nome: 'Slack', tipo: 'externo', links: { todas: 'https://app.slack.com/client' } }
      ]
    }
  ]
};
