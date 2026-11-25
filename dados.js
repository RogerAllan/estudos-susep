// =====================================================================
// CONTEÚDO DO ESTUDO · Prova SUSEP (FGV Conhecimento) · Vida e Previdência
// Edital: 50 questões, 2 h, 05/12/2026 das 16h30 às 18h30, on-line remoto.
// Aprovação: 70% no conjunto e sem zerar nenhuma disciplina.
// =====================================================================

const PROVA = new Date(2026, 11, 5);
const EDITAL = {pagamento:'2026-11-25', testeIni:'2026-11-26', testeFim:'2026-12-04', prova:'2026-12-05'};

const MAT = {
  leg: {n: 'Legislação e Organização Profissional', p: 10},
  prev: {n: 'Previdência Privada', p: 20},
  pessoas: {n: 'Seguro de Pessoas', p: 20}
};

const RESN = {edital:'Edital FGV', leg:'Legislação', prev:'Previdência Privada', pessoas:'Seguro de Pessoas', sumulas:'Súmulas e tribunais', numeros:'Números que caem'};

// acoes: ['q',mat] treino · ['fc',mat] flashcards · ['mix',n] misto · ['sim'] simulado · ['err'] erros · ['res',chave] resumo
const PLANO = [
  {d:'2026-11-25', t:'Recomeço pelo edital da FGV', i:['<b>Hoje é o último dia para pagar a taxa de inscrição.</b> Confira se está pago antes de qualquer coisa.','Leia o resumo "Edital FGV": a prova tem só 3 disciplinas. Legislação (10), Previdência Privada (20) e Seguro de Pessoas (20). Saúde Suplementar não cai.','Faça o misto de 20 sem estudar, só para medir onde você está nas matérias certas.'], a:[['res','edital'],['mix',20]]},
  {d:'2026-11-26', t:'Previdência I · seguridade e sistema', i:['Seguridade social na Constituição: saúde + previdência + assistência, princípios e custeio.','Reforma da Previdência (EC 103/2019) e o efeito na previdência privada.','Aberta × fechada, LC 108 e LC 109, quem normatiza e quem fiscaliza.','<b>O teste do sistema da prova on-line abre hoje</b> (vai até 04/12). Faça logo, no computador que vai usar.'], a:[['res','prev'],['q','prev']]},
  {d:'2026-11-27', t:'Previdência II · planos', i:['PGBL × VGBL, planos tradicionais, CD / BD / CV.','Diferimento, carregamento, resgate, portabilidade, rendas, coberturas de risco.','Institutos da fechada: BPD, portabilidade, resgate, autopatrocínio.'], a:[['q','prev'],['fc','prev']]},
  {d:'2026-11-28', t:'Previdência III · imposto, sucessão e tribunais', i:['Tabela progressiva × regressiva e planejamento tributário.','Superávit, déficit, garantias técnicas, responsabilidade dos gestores, dever de informar, gestão de riscos.','Súmulas de previdência (Resumos → Súmulas e tribunais).'], a:[['res','sumulas'],['q','prev']]},
  {d:'2026-11-29', t:'Seguro de Pessoas I · produtos e coberturas', i:['VI, VG, AP e prestamista: o que é cada um.','Coberturas (morte, MA, IPA, IFPD, DIT, DMHO), acidente pessoal, capital segurado.','Prêmio e regimes financeiros. Estipulante.'], a:[['res','pessoas'],['q','pessoas']]},
  {d:'2026-11-30', t:'Seguro de Pessoas II · lei e tribunais', i:['Lei 15.040/2024 nos seguros de pessoas: beneficiário, suicídio, agravação, dever de informar.','Súmulas do STJ que caem: 610, 609, 616, 620, 402, 101.','Planejamento sucessório e LGPD.'], a:[['q','pessoas'],['fc','pessoas'],['res','sumulas']]},
  {d:'2026-12-01', t:'Legislação e organização profissional', i:['SNSP (DL 73/1966), CNSP e SUSEP, resseguro (LC 126/2007), LC 213/2025, Lei 15.040/2024.','O corretor: habilitação, proibições, responsabilidade, comissão.','Entidades (CNseg, FENACOR, SINCOR) e boas práticas (Res. CNSP 382/2020).'], a:[['res','leg'],['q','leg'],['fc','leg']]},
  {d:'2026-12-02', t:'SIMULADO 1 · no horário da prova', i:['Comece às <b>16h30</b>, como no dia: 50 questões, 2 h, sem consultar.','Meta: 35 acertos (70%) e nenhuma disciplina zerada.','Depois, corrija: cada erro vira uma justificativa escrita na aba Erros.'], a:[['sim'],['err']]},
  {d:'2026-12-03', t:'Ataque aos pontos fracos', i:['Aba Desempenho: veja a disciplina com menor acerto e releia o resumo dela.','Refaça só as erradas até acertar todas.','À noite, se der: Simulado 2 (sai outra combinação de questões).'], a:[['err'],['sim']]},
  {d:'2026-12-04', t:'Véspera leve', i:['Só flashcards, "Números que caem" e Súmulas. Nada de matéria nova.','Último dia do teste do sistema: confirme computador, câmera, microfone e internet.','Separe documento com foto. Durma cedo.'], a:[['fc',''],['res','numeros'],['res','sumulas']]},
  {d:'2026-12-05', t:'PROVA · 16h30 às 18h30', i:['De manhã: 20 min de flashcards e só. Almoce leve.','Entre no sistema com antecedência. (Das 14h às 16h é a prova de Capitalização; a sua é a de Vida e Previdência, às 16h30.)','50 questões em 2 h ≈ 2 min 24 s cada. 1ª passada nas fáceis, 2ª nas que marcou.','Leia o comando: INCORRETA, EXCETO, NÃO. Desconfie de alternativas com "sempre", "nunca", "exclusivamente".'], a:[]}
];

const RES = {
edital: `
<h3>A prova de verdade</h3>
<table>
<tr><td>Banca</td><td>FGV Conhecimento</td></tr>
<tr><td>Data e hora</td><td><b>Sábado, 05/12/2026, das 16h30 às 18h30</b>. No mesmo dia, das 14h às 16h, é a prova de Capitalização, que não é a sua.</td></tr>
<tr><td>Formato</td><td>Exame on-line remoto · 50 questões · 4 alternativas (A a D), só uma certa</td></tr>
<tr><td>Aprovação</td><td><b>70% de acerto no conjunto (35 de 50) e sem zerar nenhuma disciplina</b></td></tr>
</table>
<h3>As 3 disciplinas</h3>
<table><tr><th>Disciplina</th><th>Questões</th><th>Peso</th></tr>
<tr><td>Legislação e Organização Profissional</td><td>10</td><td>20%</td></tr>
<tr><td>Previdência Privada</td><td>20</td><td>40%</td></tr>
<tr><td>Seguro de Pessoas (VI, VG, VP, AP)</td><td>20</td><td>40%</td></tr></table>
<p class="small">VI = vida individual · VG = vida em grupo · AP = acidentes pessoais · VP: o edital não explica a sigla (o mais provável é vida prestamista).</p>
<div class="fix"><b>O que mudou no seu estudo:</b> a divisão antiga (Riscos, Saúde, Operações, Precificação) veio do material da TopInvest e não é a deste edital. <b>Saúde Suplementar não cai.</b> Gerenciamento de riscos aparece só dentro de Previdência ("Gestão de Riscos"). Prêmio e regimes financeiros, dentro de Seguro de Pessoas. SUSEP, CNSP, resseguro e corretor, em Legislação.</div>
<h3>Datas</h3><table>
<tr><td>25/11</td><td>Último dia para pagar a taxa de inscrição</td></tr>
<tr><td>26/11 a 04/12</td><td>Teste do sistema do exame on-line remoto</td></tr>
<tr><td>05/12</td><td>Prova (16h30 às 18h30)</td></tr>
<tr><td>08/12</td><td>Resultado preliminar</td></tr>
<tr><td>09 e 10/12</td><td>Recurso contra questões</td></tr>
<tr><td>10/01/2027</td><td>Resultado final</td></tr></table>
<h3>Conta de chegada</h3><ul>
<li>Você precisa de <b>35 acertos</b>. Previdência + Pessoas são 40 das 50: é aí que a prova se decide.</li>
<li>Legislação tem 10: estude para fazer 6 ou 7 e, principalmente, para <b>não zerar</b>.</li>
<li>Exemplo de aprovação: Legislação 6 + Previdência 14 + Pessoas 15 = 35.</li></ul>
<h3>Conteúdo oficial (resumido)</h3>
<p><b>Legislação:</b> legislação e ramos de seguros; Sistema Nacional de Seguros Privados e o sistema de regulação e fiscalização (seguros, previdência aberta, proteção patrimonial mutualista, capitalização, corretagem); Lei 15.040/2024; LC 213/2025; corretagem e DL 73/1966; contratação direta e por intermediário; habilitação do corretor PF e PJ e suas responsabilidades; seguro e resseguro no Brasil e no exterior; LC 126/2007; CNseg, FENACOR, SINCOR; boas práticas (Res. CNSP 382/2020).</p>
<p><b>Previdência Privada:</b> seguridade social (princípios, custeio, beneficiários, benefícios); Reforma da Previdência; previdência complementar; abertas e fechadas; LC 108 e 109/2001; planos (diferimento, admissão, contribuições, carregamento, coberturas, valores garantidos, garantias técnicas, resultados); PGBL e VGBL; resgate; portabilidade; sobrevivência × risco; CD, BD, CV; aspectos contratuais e jurisprudenciais; prescrição; responsabilidade dos gestores; dever de informar; gestão de riscos; boa-fé, ética e transparência; tributação; planejamento previdenciário e tributário.</p>
<p><b>Seguro de Pessoas:</b> fundamentos na Lei 15.040/2024; vida individual, vida em grupo, acidentes pessoais; prêmio e regimes financeiros; coberturas; riscos excluídos, agravação e perda de direito; dever de informação do segurado; suicídio e tribunais; estipulante; beneficiário (indicação, substituição, controvérsias); capital segurado; planejamento sucessório; LGPD.</p>`,

leg: `
<h3>Mapa do sistema (quem manda em quê)</h3>
<table><tr><th>Normatiza</th><th>Fiscaliza</th><th>Sobre o quê</th></tr>
<tr><td>CNSP</td><td><b>SUSEP</b></td><td>Seguros, resseguro, previdência <b>aberta</b>, capitalização, corretagem e, desde a LC 213/2025, cooperativas de seguros e proteção patrimonial mutualista</td></tr>
<tr><td>CNPC</td><td><b>PREVIC</b></td><td>Previdência <b>fechada</b> (fundos de pensão)</td></tr>
<tr><td colspan="2">ANS</td><td>Planos e seguros saúde (fora da sua prova)</td></tr></table>
<h3>Sistema Nacional de Seguros Privados (DL 73/1966)</h3>
<p>Formado por: <b>CNSP</b>, <b>SUSEP</b>, <b>resseguradores</b>, <b>sociedades autorizadas a operar em seguros privados</b> e <b>corretores habilitados</b>.</p>
<ul><li><b>CNSP</b>: órgão <b>normativo</b>. Fixa diretrizes e normas da política de seguros, regula constituição e funcionamento das empresas, as características gerais dos contratos, a corretagem e o corretor. Presidido pelo <b>Ministro da Fazenda</b>; tem também representantes dos Ministérios da Justiça e da Previdência, o Superintendente da SUSEP e representantes do Banco Central e da CVM.</li>
<li><b>SUSEP</b>: <b>autarquia</b> federal vinculada ao Ministério da Fazenda. <b>Executa</b> a política do CNSP e <b>fiscaliza</b> seguradoras, EAPC, capitalização, resseguradores e corretores (multa, suspende, cancela registro).</li>
<li><b>Seguradoras</b>: só S.A. ou cooperativas (nos ramos permitidos). Não estão sujeitas à falência: em regra passam por <b>liquidação extrajudicial</b> conduzida pela SUSEP.</li></ul>
<h3>Ramos</h3><p><b>Ramos elementares</b> (danos: bens e responsabilidades) × <b>ramo vida</b> (pessoas). A Lei 15.040/2024 fala em <b>seguros de danos</b> e <b>seguros sobre a vida e a integridade física</b>.</p>
<h3>Lei 15.040/2024 (marco legal do contrato de seguro)</h3>
<ul><li>Publicada em dez/2024, <b>em vigor desde dez/2025</b>. Revogou o capítulo de seguro do Código Civil (arts. 757 a 802) e virou a regra geral do contrato.</li>
<li>A seguradora tem <b>25 dias</b> para recusar a proposta; o silêncio vale como aceitação (antes eram 15).</li>
<li>Reforça a <b>boa-fé</b> e o <b>dever de informar</b> dos dois lados: a seguradora pergunta (questionário), o proponente responde com a verdade; cláusula ambígua se interpreta a favor do segurado.</li>
<li>Material antigo cita artigos do Código Civil: o conteúdo quase todo foi mantido na lei nova, só o número do artigo mudou.</li></ul>
<h3>LC 213/2025</h3>
<p>Trouxe para a regulação do CNSP e a supervisão da SUSEP as <b>cooperativas de seguros</b> e a <b>proteção patrimonial mutualista</b> (as antigas "associações de proteção veicular"), que passam a funcionar por meio de administradoras autorizadas pela SUSEP.</p>
<h3>Resseguro (LC 126/2007)</h3>
<table><tr><td>Local</td><td>Sede no Brasil, sociedade anônima</td></tr>
<tr><td>Admitido</td><td>Sede no exterior + <b>escritório de representação no Brasil</b>, cadastrado na SUSEP</td></tr>
<tr><td>Eventual</td><td>Sede no exterior, <b>sem escritório</b> no Brasil, cadastrado na SUSEP</td></tr></table>
<ul><li><b>Cosseguro</b>: risco dividido entre seguradoras, uma é a líder (horizontal). <b>Resseguro</b>: seguradora → ressegurador ("seguro da seguradora"). <b>Retrocessão</b>: ressegurador → outro ressegurador ou seguradora.</li>
<li><b>Seguro no exterior</b>: só nas hipóteses da lei. Ex.: risco sem oferta de cobertura no país, ou cobertura restrita ao período em que a pessoa física residente no Brasil estiver fora.</li></ul>
<h3>O corretor (Lei 4.594/1964 e DL 73/1966)</h3>
<ul><li>Intermediário legalmente autorizado a <b>angariar e promover</b> contratos de seguro. Pode ser <b>pessoa física ou jurídica</b>.</li>
<li>Habilitação: <b>exame técnico-profissional</b> (esta prova) + <b>registro na SUSEP</b>.</li>
<li><b>Proibido</b> (DL 73, art. 125): ser sócio, administrador, procurador ou empregado de seguradora; ter emprego em pessoa jurídica de direito público.</li>
<li><b>Responde civilmente</b> (art. 126) perante segurados e seguradoras pelos prejuízos que causar por omissão, imperícia ou negligência. Penalidades da SUSEP: multa, suspensão, cancelamento do registro.</li>
<li><b>Comissão</b>: paga pela seguradora, só a corretor habilitado. A contratação <b>direta</b> (sem corretor) é permitida; nesse caso a comissão vai para o Fundo de Desenvolvimento Educacional do Seguro (ENS).</li>
<li>Quem aceita ou recusa o risco é a seguradora, não o corretor.</li></ul>
<h3>Ciclo do contrato</h3>
<ul><li><b>Subscrição</b> = análise do risco e decisão de aceitar, e em que condições.</li>
<li><b>Proposta</b> → <b>apólice</b> · <b>bilhete</b> (dispensa proposta) · <b>certificado</b> (seguro em grupo) · <b>endosso</b> (altera a apólice).</li>
<li><b>Sinistro</b> = o evento coberto acontecer → aviso → regulação → liquidação.</li></ul>
<h3>Entidades do setor</h3>
<table><tr><td>CNseg</td><td>Confederação das <b>seguradoras</b>. Federações: FenSeg (seguros gerais), <b>FenaPrevi</b> (previdência e vida), FenaSaúde, FenaCap (capitalização)</td></tr>
<tr><td>FENACOR</td><td>Federação nacional dos <b>corretores</b>, reúne os sindicatos estaduais</td></tr>
<tr><td>SINCOR</td><td>Sindicato <b>estadual</b> dos corretores</td></tr>
<tr><td>ENS</td><td>Escola de Negócios e Seguros (antiga Funenseg)</td></tr></table>
<h3>Boas práticas (Res. CNSP 382/2020)</h3>
<p>Princípios de conduta para seguradoras, EAPC, sociedades de capitalização <b>e intermediários</b> no relacionamento com o cliente: tratamento ético e justo; informação clara antes, durante e depois da venda; produto adequado ao perfil e às necessidades do cliente; tratamento de reclamações; cuidado com conflito de interesses; transparência, inclusive sobre a remuneração do intermediário.</p>`,

prev: `
<h3>Seguridade social (Constituição, arts. 194 a 204)</h3>
<table><tr><td>Saúde</td><td>Direito de todos, dever do Estado (SUS)</td></tr>
<tr><td>Previdência social</td><td><b>Contributiva</b> e de <b>filiação obrigatória</b> (INSS e regimes próprios dos servidores)</td></tr>
<tr><td>Assistência social</td><td>A <b>quem dela necessitar</b>, sem contribuição (ex.: BPC, um salário mínimo ao idoso de 65+ ou à pessoa com deficiência de baixa renda)</td></tr></table>
<p><b>Princípios</b>: universalidade da cobertura e do atendimento · uniformidade e equivalência entre populações urbanas e rurais · seletividade e distributividade · irredutibilidade do valor dos benefícios · equidade no custeio · diversidade da base de financiamento · gestão democrática <b>quadripartite</b> (trabalhadores, empregadores, aposentados e Governo).</p>
<p><b>Custeio</b> (art. 195): toda a sociedade, direta e indiretamente: orçamentos públicos + contribuições do empregador (folha, faturamento, lucro), do trabalhador, das loterias e do importador.</p>
<p><b>Beneficiários do RGPS</b>: segurados (obrigatórios e facultativos) e dependentes. <b>Benefícios</b>: aposentadorias, auxílio por incapacidade, pensão por morte, salário-maternidade, salário-família, auxílio-reclusão, auxílio-acidente.</p>
<h3>As camadas da previdência</h3><ol><li><b>RGPS</b> (INSS), com teto.</li><li><b>RPPS</b> (servidores públicos).</li><li><b>Previdência complementar</b>: privada, <b>facultativa</b>, <b>autônoma</b> em relação ao RGPS e baseada na <b>constituição de reservas</b> (CF art. 202; LC 109/2001).</li></ol>
<h3>Reforma da Previdência (EC 103/2019)</h3><ul>
<li>Idade mínima no RGPS urbano: <b>65 (homem) / 62 (mulher)</b>.</li>
<li>Servidores: previdência complementar obrigatória para o ente oferecer, só na modalidade <b>contribuição definida</b>, por entidade <b>fechada ou aberta</b> (antes, só fechada).</li>
<li>Efeito: benefício público menor e mais tardio → mais necessidade de previdência privada, que também é <b>poupança interna</b> de longo prazo para o país.</li></ul>
<h3>Aberta × fechada</h3>
<table><tr><th></th><th>Aberta</th><th>Fechada</th></tr>
<tr><td>Quem pode entrar</td><td>Qualquer pessoa (planos individuais ou coletivos)</td><td>Empregados/servidores de <b>patrocinador</b> ou associados de <b>instituidor</b> (entidade profissional, classista ou setorial)</td></tr>
<tr><td>Normatiza</td><td><b>CNSP</b></td><td><b>CNPC</b></td></tr>
<tr><td>Fiscaliza</td><td><b>SUSEP</b></td><td><b>PREVIC</b></td></tr>
<tr><td>Forma</td><td><b>EAPC</b>: só <b>S.A.</b>, com fins lucrativos (seguradora que opera só no ramo vida também pode)</td><td><b>EFPC</b>: fundação ou sociedade civil <b>sem fins lucrativos</b></td></tr>
<tr><td>CDC</td><td>Aplica-se (Súmula 563 do STJ)</td><td>Não se aplica</td></tr>
<tr><td>Quebra</td><td colspan="2">Não há falência: intervenção e liquidação extrajudicial</td></tr></table>
<p><b>LC 109/2001</b>: lei geral (abertas e fechadas). <b>LC 108/2001</b>: quando o patrocinador é União, estado, município ou estatal; a contribuição normal do patrocinador <b>não pode exceder</b> a do participante (paridade); conselhos com representação paritária.</p>
<p>Contribuições do empregador e benefícios do plano <b>não integram o contrato de trabalho</b> (LC 109, art. 68).</p>
<h3>A vida do plano</h3><ul>
<li><b>Admissão</b> (proposta de inscrição) → <b>diferimento</b> (acumulação) → <b>concessão</b> → <b>pagamento do benefício</b> (renda ou pagamento único).</li>
<li><b>Carregamento</b>: % sobre as <b>contribuições</b> (despesas e corretagem). <b>Taxa de administração</b>: sobre o <b>patrimônio</b> do fundo.</li>
<li><b>Resgate</b>: sacar o saldo, total ou parcial, no diferimento. Na aberta há carência definida no plano (a regra clássica dos materiais: de 60 dias a 24 meses).</li>
<li><b>Portabilidade</b>: levar o saldo para outro plano <b>sem passar pela mão do participante</b> e sem IR; só entre planos de mesma natureza (PGBL→PGBL, VGBL→VGBL).</li>
<li><b>Valores garantidos</b>: o que o plano garante (rentabilidade mínima nos tradicionais; nada no PGBL/VGBL).</li></ul>
<h3>Institutos da fechada (LC 109, art. 14)</h3>
<table><tr><td>BPD</td><td>Benefício proporcional diferido: saiu da empresa antes de se aposentar, para de contribuir e recebe no futuro o proporcional</td></tr>
<tr><td>Portabilidade</td><td>Leva a reserva para outro plano</td></tr>
<tr><td>Resgate</td><td>Saca as contribuições, conforme o regulamento</td></tr>
<tr><td>Autopatrocínio</td><td>Perdeu a remuneração (total ou parcial) e quer continuar: paga a sua parte e a do patrocinador</td></tr></table>
<h3>Modalidades</h3>
<table><tr><td>CD (contribuição definida)</td><td>Sei quanto pago; o benefício depende do saldo acumulado</td></tr>
<tr><td>BD (benefício definido)</td><td>Sei quanto vou receber; o custeio é calculado para garantir</td></tr>
<tr><td>CV (contribuição variável)</td><td>Mistura: em geral CD na acumulação e BD na renda</td></tr></table>
<h3>Sobrevivência × risco</h3><ul><li><b>Sobrevivência</b>: renda ou pagamento único se estiver vivo ao fim do diferimento (PGBL, VGBL, tradicionais).</li><li><b>Risco</b>: <b>pecúlio</b> (pagamento único por morte ou invalidez), <b>pensão</b> aos beneficiários, renda por invalidez.</li></ul>
<h3>PGBL × VGBL</h3>
<table><tr><th></th><th>PGBL</th><th>VGBL</th></tr>
<tr><td>Natureza</td><td>Plano de previdência</td><td>Seguro de pessoas com cobertura por sobrevivência</td></tr>
<tr><td>Dedução no IR</td><td>Até <b>12% da renda bruta tributável</b>, só na declaração <b>completa</b> e se contribuir para o INSS ou regime próprio</td><td>Não deduz</td></tr>
<tr><td>IR no resgate</td><td>Sobre o <b>valor total</b></td><td>Só sobre os <b>rendimentos</b></td></tr>
<tr><td>Indicado para</td><td>Declaração completa</td><td>Simplificada, isento ou quem já usa os 12%</td></tr>
<tr><td>Onde aplica</td><td colspan="2">FIE (fundo de investimento especialmente constituído), sem garantia mínima: rendimento e risco são do participante</td></tr></table>
<h3>Planos tradicionais (P = previdência, V = vida)</h3>
<table>
<tr><td>PRGP / VRGP</td><td>Garante <b>juros + índice de atualização</b>, com reversão de resultados financeiros (performance)</td></tr>
<tr><td>PAGP / VAGP</td><td>Garante a <b>atualização por índice</b> de preços, com performance</td></tr>
<tr><td>PRSA / VRSA</td><td>Garante <b>juros, sem atualização</b> monetária</td></tr>
<tr><td>PDR / VDR</td><td><b>Desempenho referenciado</b>: mínimo atrelado a % de um índice de renda fixa</td></tr>
<tr><td>PRI / VRI</td><td><b>Pagamento único</b>, <b>renda imediata</b></td></tr></table>
<h3>Rendas</h3><ul>
<li><b>Vitalícia</b>: até a morte do participante.</li><li><b>Temporária</b>: até o fim do prazo ou a morte, o que vier primeiro.</li>
<li><b>Vitalícia com prazo mínimo garantido</b>: se morrer antes do prazo, o beneficiário recebe até completá-lo.</li>
<li><b>Vitalícia reversível</b> ao beneficiário indicado ou ao cônjuge (em alguns planos, com continuidade aos menores).</li>
<li><b>Prazo certo</b> e <b>pagamento único</b>.</li></ul>
<h3>Garantias técnicas e resultados</h3><ul>
<li>Garantias: <b>provisões técnicas</b> cobertas por <b>ativos garantidores</b>, mais <b>capital mínimo</b>. PMBaC = benefícios a conceder (acumulação). PMBC = benefícios concedidos (em pagamento).</li>
<li>Tradicionais: o <b>excedente financeiro</b> (o que render acima da garantia) pode ser revertido ao participante.</li>
<li>Fechada (LC 109): <b>superávit</b> → reserva de contingência até <b>25%</b> das reservas matemáticas, o resto vai à reserva especial; 3 exercícios seguidos sem uso → revisão obrigatória do plano. <b>Déficit</b> → pago por patrocinadores, participantes e assistidos, na proporção das contribuições.</li></ul>
<h3>Gestão, deveres e responsabilidades</h3><ul>
<li><b>Dever de informar</b>: regulamento, certificado, material explicativo e extratos claros; acesso às informações da gestão.</li>
<li>Princípios: <b>boa-fé, ética e transparência</b>.</li>
<li><b>Gestão de riscos</b>: mercado (preços, juros), crédito (quem deve não pagar), liquidez (faltar caixa para pagar benefícios), operacional (falhas de pessoas, processos, sistemas), atuarial (premissas erradas, ex.: as pessoas viverem mais que a tábua).</li>
<li><b>Gestores e prestadores</b> respondem civilmente pelos danos que causarem por ação ou omissão (LC 109, art. 63). Penalidades: advertência, suspensão, inabilitação e multa.</li></ul>
<h3>Imposto e planejamento</h3><ul>
<li><b>Progressiva</b>: 15% retidos no resgate e ajuste na declaração anual. O benefício mensal segue a tabela do IR.</li>
<li><b>Regressiva</b>: definitiva, pelo tempo de cada aporte: até 2 anos <b>35%</b> · 2–4: 30% · 4–6: 25% · 6–8: 20% · 8–10: 15% · acima de 10: <b>10%</b>.</li>
<li>Escolha da tabela: até o 1º resgate ou recebimento do benefício (Lei 14.803/2024).</li>
<li>Planejamento: completa + INSS → PGBL até 12% e o resto em VGBL. Simplificada ou isento → VGBL. Prazo longo → regressiva.</li>
<li><b>Sucessão</b>: PGBL e VGBL são pagos direto aos beneficiários, sem inventário. O STF decidiu em 2024 (Tema 1.214) que não incide ITCMD na morte do titular; a reforma tributária pode ter mexido nisso, então confira no seu material se aparecer.</li></ul>
<h3>Prescrição (STJ)</h3><ul>
<li>Cobrar parcelas de complementação de aposentadoria: <b>5 anos</b> (Súmula 291). Diferenças: 5 anos contados de cada pagamento (Súmula 427).</li>
<li>Restituição de contribuições: correção monetária plena (Súmula 289).</li></ul>`,

pessoas: `
<h3>Classificação</h3>
<table><tr><td>Vida individual (VI)</td><td>Um segurado. Pode formar reserva (capitalização) e dar opções como resgate, saldamento e benefício prolongado</td></tr>
<tr><td>Vida em grupo (VG)</td><td>Apólice coletiva contratada por um <b>estipulante</b>; cada segurado recebe um <b>certificado</b>. Em geral repartição simples e renovação anual</td></tr>
<tr><td>Acidentes pessoais (AP)</td><td>Só eventos de <b>acidente</b> (morte acidental, IPA, DMHO, DIT)</td></tr>
<tr><td>Prestamista</td><td>Quita a dívida se o devedor morrer ou ficar inválido. O <b>credor</b> é o 1º beneficiário, até o saldo devedor; o que sobrar vai ao 2º beneficiário</td></tr></table>
<p>Fundamentos técnicos: <b>mutualismo</b> (muitos pagam as perdas de poucos), <b>lei dos grandes números</b>, <b>tábuas biométricas</b>, cálculo atuarial. Seguro de pessoas <b>não é indenitário</b>: o capital é livre e pode haver vários seguros, em várias seguradoras.</p>
<h3>Coberturas</h3>
<table>
<tr><td>Morte</td><td>Natural ou acidental. Capital ao beneficiário</td></tr>
<tr><td>MA</td><td>Morte acidental</td></tr>
<tr><td>IPA</td><td>Invalidez permanente total ou parcial por <b>acidente</b>; paga % do capital conforme tabela</td></tr>
<tr><td>IFPD</td><td>Invalidez funcional permanente total por <b>doença</b> (perda da existência independente)</td></tr>
<tr><td>DIT</td><td>Diárias por incapacidade temporária; tem <b>franquia</b> (comum: 15 dias) e limite de diárias</td></tr>
<tr><td>DMHO</td><td><b>Reembolso</b> de despesas médicas, hospitalares e odontológicas por <b>acidente</b></td></tr>
<tr><td>Outras</td><td>Diária de internação hospitalar, doenças graves, assistência funeral</td></tr></table>
<h3>Acidente pessoal</h3>
<p>Evento com data caracterizada, <b>externo, súbito, involuntário e violento</b>, que causa lesão física e, por si só, leva à morte, invalidez ou necessidade de tratamento.</p>
<ul><li><b>Entra</b>: suicídio ou tentativa (equiparado a acidente, respeitados os 2 anos), afogamento, escapamento acidental de gases, sequestro, lesões de coluna com fratura comprovada.</li>
<li><b>Não entra</b>: doenças (inclusive profissionais), LER/DORT, complicações de tratamento clínico ou cirúrgico que não venham de acidente coberto.</li></ul>
<h3>Prêmio e regimes financeiros</h3><ul>
<li>Prêmio <b>puro</b> (custo esperado dos sinistros) → + carregamento = <b>comercial</b> → + IOF = <b>total</b>. Taxa = prêmio ÷ capital.</li>
<li><b>Repartição simples</b>: prêmios do período pagam os sinistros do período, sem reserva individual (vida em grupo).</li>
<li><b>Repartição de capitais de cobertura</b>: o período forma o capital das rendas que começam nele.</li>
<li><b>Capitalização</b>: reserva individual (vida individual com prêmio nivelado, previdência, VGBL).</li>
<li><b>Saldamento</b>: para de pagar e fica com capital menor pelo mesmo prazo. <b>Benefício prolongado</b>: para de pagar e mantém o capital por prazo menor.</li>
<li><b>Antisseleção</b>: quem tem mais risco procura mais seguro → declaração de saúde, exames, carência.</li></ul>
<h3>Estipulante</h3><ul>
<li>Pessoa física ou jurídica que contrata a apólice coletiva e <b>representa os segurados</b> perante a seguradora. Não é corretor e <b>não representa a seguradora</b> perante o grupo.</li>
<li>Deveres: fornecer as informações do grupo, recolher e repassar os prêmios no prazo, comunicar sinistros, manter os segurados informados.</li>
<li><b>Contributário</b>: o segurado paga parte ou todo. <b>Não contributário</b>: o estipulante paga tudo.</li>
<li>Mudar a apólice em vigor criando ônus ou reduzindo direitos: anuência de <b>3/4 do grupo</b> (regra clássica).</li></ul>
<h3>Beneficiário</h3><ul>
<li>Livre <b>indicação e substituição</b> pelo segurado (em vida ou por testamento), salvo se renunciou a isso ou se o seguro garante uma obrigação.</li>
<li>Trocou e não avisou a seguradora: se ela pagar ao antigo, de boa-fé, fica desobrigada.</li>
<li><b>Sem indicação</b> (ou indicação que não prevalece): metade ao <b>cônjuge</b> não separado (a jurisprudência estende ao companheiro) e metade aos <b>herdeiros</b>; na falta deles, a quem provar que dependia do segurado.</li>
<li>Companheiro pode ser beneficiário se o segurado estava separado de fato ou judicialmente; <b>concubino</b> de pessoa casada não pode (STJ).</li>
<li>Seguro sobre a vida de outra pessoa: precisa de interesse na vida dela; presumido para cônjuge, ascendente e descendente.</li>
<li>O capital <b>não é herança</b>, não responde pelas dívidas do segurado e é <b>impenhorável</b>.</li></ul>
<h3>Riscos excluídos, agravação e dever de informar</h3><ul>
<li><b>Riscos excluídos</b>: o que a apólice não cobre, escrito de forma clara e destacada (ex.: atos dolosos, guerra, doença preexistente não declarada quando a seguradora perguntou).</li>
<li><b>Não pode excluir</b> a morte por uso de transporte mais arriscado, serviço militar, prática de esporte ou atos de humanidade em auxílio de outrem.</li>
<li><b>Agravação intencional</b> do risco → perde a garantia.</li>
<li><b>Dever de informação</b>: responder com verdade ao questionário. Com má-fé → perde a garantia e ainda deve o prêmio. Sem má-fé → a seguradora pode resolver o contrato ou cobrar a diferença de prêmio.</li>
<li>Não há <b>sub-rogação</b> nos seguros de pessoas. É nula a transação para pagar capital reduzido.</li></ul>
<h3>Suicídio e tribunais</h3><ul>
<li>Sem cobertura se o suicídio ocorrer nos <b>2 primeiros anos</b> de vigência (ou da recondução depois de suspenso o contrato). Depois disso, cobre. A Lei 15.040/2024 manteve os 2 anos.</li>
<li><b>Súmula 610 STJ</b>: nos 2 primeiros anos não há cobertura, mas o beneficiário recebe a <b>reserva técnica</b> formada. Premeditação deixou de importar (a Súmula 61 foi cancelada).</li>
<li>Embriaguez não afasta o seguro de vida (620). Doença preexistente sem exame prévio nem má-fé não afasta (609). Atraso no prêmio exige notificação prévia (616).</li></ul>
<h3>Carência</h3><p>Prazo sem cobertura no início (ex.: morte natural). <b>Não vale para acidente.</b> Se a morte acontece na carência, devolve-se a reserva técnica ao beneficiário.</p>
<h3>Planejamento sucessório e LGPD</h3><ul>
<li>Seguro de vida (e PGBL/VGBL) paga direto ao beneficiário, fora do inventário: dá liquidez rápida à família, inclusive para pagar os custos do inventário.</li>
<li><b>LGPD</b> (Lei 13.709/2018): dados de saúde são <b>dados pessoais sensíveis</b>. Exigem base legal (ex.: consentimento específico, exercício de direitos em contrato, prevenção à fraude), finalidade clara, só o necessário, segurança e transparência. O titular tem direito de acesso, correção, eliminação etc. Fiscaliza: <b>ANPD</b>.</li></ul>`,

sumulas: `
<table>
<tr><th>Súmula</th><th>O que diz</th></tr>
<tr><td>STJ 610</td><td>Suicídio nos 2 primeiros anos de vigência não é coberto, mas o beneficiário recebe a <b>reserva técnica</b> formada</td></tr>
<tr><td>STJ 61</td><td><b>Cancelada</b> (falava em suicídio não premeditado). Hoje vale só o critério dos 2 anos</td></tr>
<tr><td>STJ 620</td><td>A <b>embriaguez</b> do segurado não exime a seguradora no seguro de <b>vida</b></td></tr>
<tr><td>STJ 609</td><td>Recusa por <b>doença preexistente</b> é ilícita se não houve exame prévio nem prova de má-fé</td></tr>
<tr><td>STJ 616</td><td>Atraso no prêmio: para suspender ou resolver o contrato, precisa de <b>notificação prévia</b> ao segurado</td></tr>
<tr><td>STJ 402</td><td>Seguro de danos pessoais inclui <b>danos morais</b>, salvo cláusula expressa de exclusão</td></tr>
<tr><td>STJ 101</td><td>Ação do segurado <b>em grupo</b> contra a seguradora prescreve em <b>1 ano</b></td></tr>
<tr><td>STJ 278</td><td>Na indenização por invalidez, o prazo conta da <b>ciência inequívoca</b> da incapacidade</td></tr>
<tr><td>STJ 229</td><td>O pedido de indenização à seguradora <b>suspende</b> a prescrição até o segurado saber da decisão</td></tr>
<tr><td>STJ 563</td><td><b>CDC</b> vale para entidades <b>abertas</b> de previdência; não vale para as <b>fechadas</b></td></tr>
<tr><td>STJ 291</td><td>Cobrança de parcelas de complementação de aposentadoria prescreve em <b>5 anos</b></td></tr>
<tr><td>STJ 427</td><td>Diferenças de complementação de aposentadoria: <b>5 anos</b>, contados de cada pagamento</td></tr>
<tr><td>STJ 289</td><td>Restituição de contribuições de previdência privada: <b>correção monetária plena</b></td></tr>
<tr><td>STF Tema 1.214</td><td>(2024) Não incide ITCMD sobre PGBL/VGBL pagos aos beneficiários na morte do titular</td></tr>
</table>
<h3>Outros entendimentos que caem</h3><ul>
<li>Concubino de pessoa casada (não separada) não pode ser beneficiário de seguro de vida.</li>
<li>Na falta de indicação, o companheiro concorre como o cônjuge.</li>
<li>Prazos: segurado contra seguradora, em regra <b>1 ano</b>; beneficiário ou terceiro prejudicado, <b>3 anos</b>.</li></ul>`,

numeros: `
<table>
<tr><td>50 questões / 2 h</td><td>≈ 2 min 24 s por questão</td></tr>
<tr><td>35 de 50</td><td>Mínimo para passar (70%), sem zerar nenhuma disciplina</td></tr>
<tr><td>10 · 20 · 20</td><td>Legislação · Previdência · Pessoas</td></tr>
<tr><td>2 anos</td><td>Suicídio sem cobertura (com devolução da reserva técnica)</td></tr>
<tr><td>25 dias</td><td>Seguradora recusar a proposta; silêncio = aceita (antes: 15)</td></tr>
<tr><td>12%</td><td>Dedução máxima do PGBL (completa + contribuir para INSS/regime próprio)</td></tr>
<tr><td>35% → 10%</td><td>Regressiva: até 2 anos 35%, cai 5 pontos a cada 2 anos, acima de 10 anos 10%</td></tr>
<tr><td>15%</td><td>Retenção na fonte da progressiva no resgate</td></tr>
<tr><td>15 dias</td><td>Franquia comum da DIT</td></tr>
<tr><td>3/4 do grupo</td><td>Anuência para mudar apólice de vida em grupo em vigor contra os segurados</td></tr>
<tr><td>65 / 62 anos</td><td>Idade mínima no RGPS urbano após a EC 103/2019</td></tr>
<tr><td>25%</td><td>Teto da reserva de contingência (superávit na fechada)</td></tr>
<tr><td>3 exercícios</td><td>Reserva especial sem uso → revisão obrigatória do plano</td></tr>
<tr><td>1 ano / 3 anos</td><td>Prescrição: segurado (em grupo: Súmula 101) / beneficiário</td></tr>
<tr><td>5 anos</td><td>Complementação de aposentadoria (Súmulas 291 e 427)</td></tr>
<tr><td>60 dias a 24 meses</td><td>Carência de resgate na previdência aberta (regra clássica dos materiais)</td></tr>
</table>
<h3>Leis</h3>
<table>
<tr><td>Lei 4.594/1964</td><td>Profissão de corretor de seguros</td></tr>
<tr><td>DL 73/1966</td><td>Sistema Nacional de Seguros Privados (CNSP, SUSEP)</td></tr>
<tr><td>LC 108 e LC 109/2001</td><td>Previdência complementar (109 geral; 108 patrocinador público)</td></tr>
<tr><td>LC 126/2007</td><td>Resseguro, retrocessão, seguro no exterior</td></tr>
<tr><td>Lei 13.709/2018</td><td>LGPD</td></tr>
<tr><td>EC 103/2019</td><td>Reforma da Previdência</td></tr>
<tr><td>Res. CNSP 382/2020</td><td>Boas práticas de conduta com o cliente</td></tr>
<tr><td>Lei 14.803/2024</td><td>Escolha da tabela de IR até o 1º resgate/benefício</td></tr>
<tr><td>Lei 15.040/2024</td><td>Marco legal do contrato de seguro (em vigor desde dez/2025)</td></tr>
<tr><td>LC 213/2025</td><td>Cooperativas de seguros e proteção patrimonial mutualista</td></tr>
</table>
<h3>Órgãos (decore em pares)</h3>
<table><tr><td>CNSP → SUSEP</td><td>Seguros, previdência aberta, capitalização, resseguro, corretores</td></tr><tr><td>CNPC → PREVIC</td><td>Previdência fechada (fundos de pensão)</td></tr><tr><td>ANS</td><td>Saúde (não cai na sua prova)</td></tr></table>`
};

// q: enunciado · o: 4 alternativas · c: índice da certa · j: justificativa
const Q = [
// ======================= LEGISLAÇÃO =======================
{id:'o8',m:'leg',q:'O Sistema Nacional de Seguros Privados foi criado pelo:',o:['Decreto-Lei 73/1966','Lei 9.656/1998','LC 109/2001','Lei 15.040/2024'],c:0,j:'DL 73/66: CNSP, SUSEP, resseguradores, seguradoras e corretores.'},
{id:'l1',m:'leg',q:'Integram o Sistema Nacional de Seguros Privados, conforme o Decreto-Lei 73/1966:',o:['CNSP, SUSEP, resseguradores, sociedades autorizadas a operar em seguros privados e corretores habilitados','CMN, Banco Central, CVM e bancos comerciais','CNPC, PREVIC e entidades fechadas de previdência','ANS, operadoras de saúde e o SUS'],c:0,j:'CNPC/PREVIC são da previdência fechada; ANS é saúde; CMN/BC/CVM são do sistema financeiro.'},
{id:'l2',m:'leg',q:'O Conselho Nacional de Seguros Privados (CNSP) é presidido pelo:',o:['Ministro da Fazenda','Superintendente da SUSEP','Presidente do Banco Central','Presidente da FENACOR'],c:0,j:'O Superintendente da SUSEP é membro do CNSP, não o presidente. Também há representantes da Justiça, da Previdência, do Banco Central e da CVM.'},
{id:'l3',m:'leg',q:'Sobre o CNSP e a SUSEP, assinale a afirmativa correta.',o:['O CNSP fixa as diretrizes e normas da política de seguros privados; a SUSEP, autarquia, executa essa política e fiscaliza o mercado','A SUSEP fixa as normas e o CNSP fiscaliza as seguradoras','Ambos são entidades privadas mantidas pelas seguradoras','O CNSP fiscaliza os fundos de pensão'],c:0,j:'CNSP = normativo. SUSEP = executora e fiscalizadora. Fundos de pensão são CNPC/PREVIC.'},
{id:'l24',m:'leg',q:'NÃO é atribuição do CNSP:',o:['Fiscalizar diretamente, no dia a dia, as operações das seguradoras','Fixar diretrizes e normas da política de seguros privados','Disciplinar a corretagem de seguros e a profissão de corretor','Fixar as características gerais dos contratos de seguro'],c:0,j:'Fiscalizar é papel da SUSEP. O CNSP faz as regras.'},
{id:'l21',m:'leg',q:'Considere as afirmativas:\nI. A SUSEP fiscaliza as entidades abertas de previdência complementar.\nII. A PREVIC fiscaliza as sociedades de capitalização.\nIII. O CNSP disciplina a corretagem de seguros.\nEstá correto o que se afirma em:',o:['I e III, apenas','I, apenas','II e III, apenas','I, II e III'],c:0,j:'II está errada: capitalização é com a SUSEP. A PREVIC cuida só das entidades fechadas (fundos de pensão).'},
{id:'l4',m:'leg',q:'Segundo a Lei 4.594/1964, o corretor de seguros é:',o:['O intermediário legalmente autorizado a angariar e promover contratos de seguro entre seguradoras e pessoas físicas ou jurídicas','O representante legal da seguradora, com poder para aceitar riscos em nome dela','O servidor da SUSEP que fiscaliza os contratos','Exclusivamente uma pessoa física'],c:0,j:'Pode ser pessoa física ou jurídica. Ele intermedeia; quem aceita o risco é a seguradora.'},
{id:'o7',m:'leg',q:'O corretor de seguros é:',o:['O intermediário habilitado que angaria e promove contratos entre seguradora e segurado, remunerado por corretagem','Empregado da seguradora','Fiscal da SUSEP','O estipulante do grupo'],c:0,j:'O corretor é independente e ganha comissão de corretagem.'},
{id:'l5',m:'leg',q:'Para exercer a profissão, o corretor de seguros precisa:',o:['Obter a habilitação técnico-profissional e o registro na SUSEP','Apenas ter curso superior em qualquer área','Ser contratado por uma seguradora','Apenas filiar-se ao SINCOR do seu estado'],c:0,j:'Habilitação (exame como este) + registro na SUSEP. Filiar-se ao sindicato não é requisito.'},
{id:'l6',m:'leg',q:'É vedado ao corretor de seguros:',o:['Ser sócio, administrador ou empregado de sociedade seguradora','Receber comissão de corretagem','Atuar como pessoa jurídica','Atender clientes de várias seguradoras'],c:0,j:'DL 73, art. 125: corretor e prepostos não podem ser sócios, administradores, procuradores ou empregados de seguradora, nem ter emprego em pessoa jurídica de direito público. A ideia é garantir a independência.'},
{id:'l7',m:'leg',q:'O corretor que causar prejuízo ao segurado por omissão, imperícia ou negligência:',o:['Responde civilmente pelo prejuízo, sem prejuízo das penalidades administrativas','Não responde, pois quem responde é sempre a seguradora','Só responde se for pessoa jurídica','Só responde na esfera criminal'],c:0,j:'DL 73, art. 126. Além disso, a SUSEP pode aplicar multa, suspensão ou cancelamento do registro.'},
{id:'l8',m:'leg',q:'Quando o seguro é contratado diretamente com a seguradora, sem corretor, o valor que seria pago como comissão:',o:['É recolhido ao Fundo de Desenvolvimento Educacional do Seguro','Fica com a seguradora como lucro','É devolvido integralmente ao segurado','É pago à SUSEP como taxa de fiscalização'],c:0,j:'Lei 4.594, art. 19. O fundo é administrado pela ENS (antiga Funenseg). A contratação direta é permitida.'},
{id:'l22',m:'leg',q:'A comissão de corretagem:',o:['Só pode ser paga a corretor de seguros devidamente habilitado','Pode ser paga a qualquer pessoa que indicar o cliente','É paga pela SUSEP','É proibida no seguro de vida'],c:0,j:'Quem paga é a seguradora, e só a corretor habilitado e registrado.'},
{id:'l23',m:'leg',q:'A contratação de um seguro:',o:['Pode ser feita diretamente com a seguradora ou por intermédio de corretor','Só pode ser feita por corretor','Só pode ser feita diretamente com a seguradora','Depende de autorização prévia da SUSEP para cada apólice'],c:0,j:'O edital fala exatamente nisso: contratação direta e mediante intermediação.'},
{id:'l9',m:'leg',q:'Pela LC 126/2007, o ressegurador LOCAL é:',o:['O ressegurador com sede no Brasil, constituído como sociedade anônima','O ressegurador com sede no exterior e escritório de representação no Brasil','O ressegurador com sede no exterior, sem escritório no Brasil','Qualquer seguradora que participe de cosseguro'],c:0,j:'Local = sede no Brasil. Admitido = sede no exterior + escritório de representação no Brasil. Eventual = sede no exterior, sem escritório.'},
{id:'l10',m:'leg',q:'Ressegurador com sede no exterior que mantém escritório de representação no Brasil e é cadastrado na SUSEP é o ressegurador:',o:['Admitido','Local','Eventual','Líder'],c:0,j:'Admitido tem escritório aqui; eventual não tem.'},
{id:'l11',m:'leg',q:'Pela LC 126/2007, a contratação de seguro no exterior por quem reside no Brasil:',o:['Só é permitida nas hipóteses da lei, como risco sem oferta de cobertura no país ou cobertura restrita ao período em que a pessoa estiver no exterior','É livre para qualquer risco','É proibida em qualquer situação','Depende apenas da concordância do corretor'],c:0,j:'Regra: contrata-se no Brasil. O exterior é exceção prevista em lei.'},
{id:'o3',m:'leg',q:'Cosseguro é:',o:['A divisão de um mesmo risco entre duas ou mais seguradoras, cada uma com sua cota','O seguro da seguradora','O repasse feito pela resseguradora','O seguro em grupo'],c:0,j:'Cosseguro = horizontal, entre seguradoras, com uma líder.'},
{id:'o4',m:'leg',q:'Resseguro é:',o:['A seguradora transferir parte do risco a uma resseguradora','Dividir o risco entre seguradoras','O segurado contratar dois seguros','O corretor assumir o risco'],c:0,j:'"Seguro da seguradora".'},
{id:'o5',m:'leg',q:'Retrocessão é:',o:['A resseguradora repassar parte do risco a outra resseguradora ou seguradora','A devolução do prêmio','O cancelamento da apólice','A renovação do seguro'],c:0,j:'Seguradora → resseguradora (resseguro) → outra (retrocessão).'},
{id:'l12',m:'leg',q:'A Lei Complementar 213/2025 trata principalmente de:',o:['Cooperativas de seguros e operações de proteção patrimonial mutualista, sob regulação do CNSP e supervisão da SUSEP','Planos de saúde e da ANS','Previdência complementar dos servidores públicos','Imposto de renda sobre PGBL e VGBL'],c:0,j:'É a lei que trouxe para dentro do sistema as antigas "associações de proteção veicular", agora proteção patrimonial mutualista, com administradoras autorizadas pela SUSEP.'},
{id:'l13',m:'leg',q:'A Lei 15.040/2024:',o:['É o novo marco legal do contrato de seguro, em vigor desde dezembro de 2025, e substituiu as regras de seguro do Código Civil','Criou a SUSEP e o CNSP','Trata apenas do seguro de automóvel','Regula a profissão de corretor de seguros'],c:0,j:'Revogou os arts. 757 a 802 do Código Civil. A profissão do corretor continua na Lei 4.594/1964 e no DL 73/1966.'},
{id:'o2',m:'leg',q:'Pela Lei 15.040/2024, a seguradora tem quanto tempo para recusar a proposta, sob pena de aceitação tácita?',o:['15 dias','25 dias','30 dias','60 dias'],c:1,j:'25 dias; o silêncio vale como aceitação. Antes da lei eram 15 dias. Se o enunciado citar a regra antiga, a resposta é 15.'},
{id:'l25',m:'leg',q:'Pelo princípio da boa-fé no contrato de seguro:',o:['Segurado e seguradora devem agir com lealdade e veracidade antes, durante e depois do contrato','Só o segurado precisa dizer a verdade','A seguradora pode omitir as exclusões se elas estiverem no site','A boa-fé só é exigida depois do sinistro'],c:0,j:'Vale para os dois lados e em todas as fases.'},
{id:'l14',m:'leg',q:'A entidade que representa nacionalmente os corretores de seguros, reunindo os sindicatos estaduais, é a:',o:['FENACOR','CNseg','FenaPrevi','SUSEP'],c:0,j:'FENACOR = federação dos corretores. SINCOR = sindicato estadual. CNseg = confederação das seguradoras. FenaPrevi = federação de previdência e vida, dentro da CNseg.'},
{id:'l15',m:'leg',q:'A federação ligada à CNseg que representa as empresas de previdência aberta e seguro de vida é a:',o:['FenaPrevi','FenSeg','FenaCap','FENACOR'],c:0,j:'CNseg reúne FenSeg (seguros gerais), FenaPrevi (previdência e vida), FenaSaúde e FenaCap (capitalização).'},
{id:'l26',m:'leg',q:'O SINCOR é:',o:['O sindicato estadual dos corretores de seguros','A confederação das seguradoras','O órgão que fiscaliza os corretores','A escola que aplica o exame de habilitação'],c:0,j:'Quem fiscaliza o corretor é a SUSEP. SINCOR é o sindicato do estado; FENACOR, a federação nacional.'},
{id:'l16',m:'leg',q:'A Resolução CNSP 382/2020 trata de:',o:['Princípios de conduta que seguradoras, EAPC, sociedades de capitalização e intermediários devem seguir no relacionamento com o cliente','Limites de aplicação dos fundos de pensão','Carências dos planos de saúde','Tábuas de mortalidade'],c:0,j:'Boas práticas: tratamento ético e justo, informação clara, produto adequado ao perfil, tratamento de reclamações, transparência (inclusive sobre a remuneração do intermediário).'},
{id:'l17',m:'leg',q:'Segundo a Res. CNSP 382/2020, é prática esperada do corretor no relacionamento com o cliente:',o:['Oferecer produto adequado às necessidades e ao perfil do cliente, com informações claras','Omitir as exclusões da apólice para facilitar a venda','Priorizar o produto que pagar a maior comissão, sem informar o cliente','Deixar de registrar as reclamações do cliente'],c:0,j:'As outras três são exatamente o que a norma quer evitar.'},
{id:'l18',m:'leg',q:'As sociedades seguradoras devem ser constituídas como:',o:['Sociedades anônimas ou cooperativas, nos casos permitidos em lei','Sociedades limitadas','Fundações sem fins lucrativos','Empresas individuais'],c:0,j:'Fundação/sociedade civil sem fins lucrativos é a forma da EFPC (fundo de pensão), não da seguradora.'},
{id:'l19',m:'leg',q:'Segundo o DL 73/1966, as seguradoras em crise:',o:['Em regra não estão sujeitas à falência, e sim à liquidação extrajudicial conduzida pela SUSEP','Podem pedir recuperação judicial como qualquer empresa','São liquidadas pelo Banco Central','Não podem ser liquidadas'],c:0,j:'A falência só vem em casos excepcionais (ativo insuficiente para metade dos credores quirografários ou indícios de crime falimentar).'},
{id:'l20',m:'leg',q:'Tradicionalmente, os seguros se dividem em:',o:['Ramos elementares (danos) e ramo vida (pessoas)','Públicos e privados','Obrigatórios e proibidos','Individuais e familiares'],c:0,j:'Elementares = bens e responsabilidades. Vida = pessoas. A Lei 15.040 fala em seguros de danos e seguros sobre a vida e a integridade física.'},
{id:'o1',m:'leg',q:'Subscrição de riscos é:',o:['A análise do risco e a decisão de aceitá-lo ou não, e em que condições','O pagamento do sinistro','A venda feita pelo corretor','O repasse ao ressegurador'],c:0,j:'Subscrição = análise do risco. Define se aceita, a taxa e as condições.'},
{id:'o6',m:'leg',q:'O documento que altera a apólice durante a vigência é o:',o:['Endosso','Aviso de sinistro','Bilhete','Certificado'],c:0,j:'Bilhete dispensa proposta; certificado é do seguro em grupo; endosso altera.'},
{id:'o9',m:'leg',q:'Sinistro é:',o:['A ocorrência do evento coberto pelo seguro','O pagamento do prêmio','A proposta de seguro','A alteração da apólice'],c:0,j:'Sinistro = o risco virou realidade.'},

// ======================= PREVIDÊNCIA PRIVADA =======================
{id:'pr1',m:'prev',q:'A seguridade social, segundo a Constituição, compreende:',o:['Saúde, previdência social e assistência social','Previdência social, previdência complementar e seguros privados','Saúde, educação e previdência social','Apenas a previdência social'],c:0,j:'Tripé: saúde + previdência + assistência (CF, art. 194).'},
{id:'pr2',m:'prev',q:'A assistência social é prestada:',o:['A quem dela necessitar, independentemente de contribuição','Somente a quem contribui para o INSS','Somente aos aposentados','Mediante pagamento de prêmio'],c:0,j:'Saúde: direito de todos. Previdência: contributiva e obrigatória. Assistência: a quem precisar, sem contribuição (ex.: BPC).'},
{id:'pr3',m:'prev',q:'A previdência social do regime geral (INSS) caracteriza-se por:',o:['Caráter contributivo e filiação obrigatória','Caráter facultativo e constituição de reservas individuais','Gratuidade para todos','Administração por entidades abertas'],c:0,j:'Facultativa e com reservas é a previdência complementar.'},
{id:'pr4',m:'prev',q:'NÃO é princípio da seguridade social previsto na Constituição:',o:['Obrigatoriedade de adesão à previdência complementar','Universalidade da cobertura e do atendimento','Irredutibilidade do valor dos benefícios','Diversidade da base de financiamento'],c:0,j:'A previdência complementar é facultativa.'},
{id:'pr5',m:'prev',q:'A gestão da seguridade social é democrática e descentralizada, com participação:',o:['De trabalhadores, empregadores, aposentados e Governo','Apenas do Governo','Apenas das seguradoras','Apenas dos sindicatos'],c:0,j:'Gestão quadripartite.'},
{id:'pr6',m:'prev',q:'A seguridade social é financiada:',o:['Por toda a sociedade, de forma direta e indireta, com recursos dos orçamentos públicos e contribuições sociais','Apenas pelos trabalhadores','Apenas pelas empresas','Apenas pelos prêmios de seguros'],c:0,j:'CF, art. 195: orçamentos da União, estados, DF e municípios + contribuições do empregador, do trabalhador, das loterias e do importador.'},
{id:'pr48',m:'prev',q:'O BPC (benefício de prestação continuada), pago ao idoso ou à pessoa com deficiência de baixa renda, pertence à:',o:['Assistência social','Previdência complementar aberta','Previdência complementar fechada','Saúde'],c:0,j:'Não exige contribuição: é assistência, não previdência.'},
{id:'pr7',m:'prev',q:'Com a Reforma da Previdência (EC 103/2019), a idade mínima geral de aposentadoria no RGPS para trabalhadores urbanos passou a ser:',o:['65 anos para homens e 62 para mulheres','60 anos para ambos','70 anos para homens e 65 para mulheres','Não há idade mínima'],c:0,j:'65/62.'},
{id:'pr8',m:'prev',q:'Um impacto da Reforma da Previdência (EC 103/2019) no setor de previdência privada foi:',o:['Permitir que a previdência complementar dos servidores públicos seja oferecida também por entidades abertas, na modalidade contribuição definida','Extinguir os planos PGBL','Tornar a previdência complementar obrigatória para todos os trabalhadores','Proibir as entidades fechadas'],c:0,j:'Antes, só entidades fechadas. Além disso, regras mais duras no INSS aumentam a procura por previdência privada.'},
{id:'pr9',m:'prev',q:'A previdência complementar, segundo a Constituição e a LC 109/2001, é:',o:['Facultativa, autônoma em relação ao regime geral e baseada na constituição de reservas que garantam o benefício','Obrigatória e vinculada ao INSS','Pública e administrada pelo INSS','Financiada por repartição simples, sem reservas'],c:0,j:'Três palavras-chave: facultativa, autônoma, reservas.'},
{id:'pr10',m:'prev',q:'A Lei Complementar 108/2001 trata:',o:['Da relação entre União, estados, municípios, suas autarquias, fundações e estatais, como patrocinadores, e suas entidades fechadas','Das entidades abertas de previdência','Dos planos de saúde','Da profissão de corretor'],c:0,j:'LC 109 = lei geral. LC 108 = regras extras quando o patrocinador é o poder público ou estatal.'},
{id:'pr11',m:'prev',q:'Pela LC 108/2001, nos planos patrocinados por entes públicos e estatais, a contribuição normal do patrocinador:',o:['Não pode exceder a do participante','Deve ser o dobro da do participante','É livre','É proibida'],c:0,j:'Paridade contributiva.'},
{id:'p1',m:'prev',q:'O órgão que NORMATIZA a previdência complementar ABERTA é:',o:['SUSEP','CNSP','PREVIC','CNPC'],c:1,j:'CNSP faz as normas, SUSEP fiscaliza. Na fechada: CNPC normatiza, PREVIC fiscaliza.'},
{id:'p2',m:'prev',q:'Quem FISCALIZA as entidades fechadas (fundos de pensão)?',o:['SUSEP','CNSP','PREVIC','ANS'],c:2,j:'Fechada: CNPC → PREVIC → EFPC.'},
{id:'p3',m:'prev',q:'Os planos de previdência ABERTA são operados por:',o:['EFPC','EAPC e seguradoras autorizadas','INSS','Banco Central'],c:1,j:'EAPC = entidade aberta. EFPC = fechada (fundo de pensão).'},
{id:'p4',m:'prev',q:'Os planos de entidade FECHADA são acessíveis a:',o:['Qualquer pessoa','Empregados de patrocinador ou associados de instituidor','Somente servidores públicos','Somente aposentados do INSS'],c:1,j:'Fechada = grupo ligado a uma empresa (patrocinador) ou entidade de classe (instituidor).'},
{id:'pr12',m:'prev',q:'As entidades ABERTAS de previdência complementar são constituídas:',o:['Unicamente sob a forma de sociedades anônimas, com fins lucrativos','Como fundações sem fins lucrativos','Como autarquias federais','Como cooperativas de crédito'],c:0,j:'LC 109, art. 36. Seguradoras que operam só no ramo vida também podem ser autorizadas.'},
{id:'pr13',m:'prev',q:'Sobre as entidades fechadas (EFPC), assinale a correta:',o:['São organizadas como fundação ou sociedade civil sem fins lucrativos','Podem vender planos a qualquer pessoa','São fiscalizadas pela SUSEP','Têm fins lucrativos'],c:0,j:'Fundo de pensão não visa lucro e é fiscalizado pela PREVIC.'},
{id:'pr14',m:'prev',q:'Instituidor, na previdência fechada, é:',o:['A pessoa jurídica de caráter profissional, classista ou setorial que oferece plano a seus associados','A empresa empregadora que patrocina o plano','O participante que já recebe benefício','O órgão que fiscaliza o plano'],c:0,j:'Patrocinador = empregador. Instituidor = associação, sindicato, conselho profissional.'},
{id:'pr42',m:'prev',q:'Considere as afirmativas:\nI. Nas entidades fechadas, as contribuições do empregador não integram o contrato de trabalho.\nII. As entidades abertas podem ser fundações sem fins lucrativos.\nIII. A PREVIC fiscaliza as entidades fechadas.\nEstá correto o que se afirma em:',o:['I e III, apenas','I, apenas','II e III, apenas','I, II e III'],c:0,j:'II está errada: entidade aberta é S.A. A afirmativa I é o art. 68 da LC 109.'},
{id:'pr24',m:'prev',q:'As entidades fechadas de previdência complementar:',o:['Não estão sujeitas à falência; sujeitam-se à intervenção e à liquidação extrajudicial','Podem pedir falência como qualquer empresa','São liquidadas pelo INSS','Não podem sofrer intervenção'],c:0,j:'LC 109, art. 47.'},
{id:'pr15',m:'prev',q:'São institutos obrigatórios nos planos das entidades fechadas, segundo a LC 109/2001:',o:['Benefício proporcional diferido, portabilidade, resgate e autopatrocínio','Pecúlio, pensão, carência e franquia','Saldamento, prolongamento, cosseguro e resseguro','Carregamento, excedente, IBNR e PPNG'],c:0,j:'Os quatro institutos: BPD, portabilidade, resgate, autopatrocínio.'},
{id:'pr16',m:'prev',q:'O autopatrocínio permite ao participante de plano fechado:',o:['Manter o plano pagando também a parte que cabia ao patrocinador, em caso de perda total ou parcial da remuneração','Sacar todo o saldo sem imposto','Trocar de patrocinador sem aviso','Receber o benefício antes da idade prevista'],c:0,j:'"Auto" patrocínio: ele mesmo vira o patrocinador.'},
{id:'pr17',m:'prev',q:'O benefício proporcional diferido (BPD) ocorre quando o participante:',o:['Deixa a empresa antes de ter direito ao benefício pleno, para de contribuir e recebe no futuro um benefício proporcional','Morre antes da aposentadoria','Faz a portabilidade para um plano aberto','Antecipa a aposentadoria pelo INSS'],c:0,j:'Proporcional ao que acumulou; diferido = recebe depois.'},
{id:'pr18',m:'prev',q:'Na portabilidade entre planos de previdência complementar:',o:['Os recursos são transferidos diretamente entre as entidades, sem passar pelas mãos do participante','O participante saca o dinheiro e deposita no novo plano','Incide IR sobre todo o valor transferido','Só é possível para quem tem mais de 60 anos'],c:0,j:'Por não passar pela mão do participante, não há IR.'},
{id:'p10',m:'prev',q:'Portabilidade na previdência complementar aberta é:',o:['Transferir o saldo para outro plano sem pagar IR, entre planos de mesma natureza','Sacar os recursos pagando IR','Trocar livremente PGBL por VGBL','Mudar o beneficiário'],c:0,j:'PGBL → PGBL e VGBL → VGBL.'},
{id:'pr47',m:'prev',q:'A portabilidade de recursos de um PGBL para um VGBL:',o:['Não é permitida, pois os planos têm natureza e tributação diferentes','É permitida, sem IR','É permitida, com IR de 15%','É obrigatória após 10 anos'],c:0,j:'No PGBL o IR é sobre o total; no VGBL, só sobre o rendimento. Misturar quebraria a lógica do imposto.'},
{id:'pr19',m:'prev',q:'Plano de CONTRIBUIÇÃO DEFINIDA (CD) é aquele em que:',o:['A contribuição é definida e o benefício depende do saldo acumulado','O benefício é definido no início e a contribuição se ajusta para garanti-lo','Não há contribuição','O benefício é sempre igual ao último salário'],c:0,j:'CD: sei quanto pago, não sei quanto vou receber.'},
{id:'pr20',m:'prev',q:'Plano de BENEFÍCIO DEFINIDO (BD):',o:['Tem o valor do benefício previamente estabelecido, e o custeio é calculado para garanti-lo','Tem o benefício dependente apenas do saldo da conta','Não tem cálculo atuarial','É o único tipo permitido para servidores após a EC 103/2019'],c:0,j:'Para servidores, depois da EC 103, é o contrário: só CD.'},
{id:'pr21',m:'prev',q:'Plano de CONTRIBUIÇÃO VARIÁVEL (CV) é aquele que:',o:['Combina características de CD e BD, por exemplo acumulação como CD e renda vitalícia calculada como BD','Não tem contribuições nem benefícios definidos','É exclusivo de entidades abertas','Só paga pecúlio'],c:0,j:'Mistura dos dois.'},
{id:'p15',m:'prev',q:'O período em que o participante acumula recursos, antes de receber o benefício, chama-se:',o:['Período de diferimento','Carência','Vigência','Período de pagamento'],c:0,j:'Diferimento = acumulação. Depois vêm a concessão e o pagamento do benefício.'},
{id:'pr30',m:'prev',q:'Em plano de previdência, a taxa de carregamento:',o:['Incide sobre as contribuições, para cobrir despesas de administração e comercialização','Incide sobre o patrimônio do fundo, diariamente','É o imposto de renda do plano','É a garantia de rentabilidade'],c:0,j:'A que incide sobre o patrimônio é a taxa de administração.'},
{id:'pr31',m:'prev',q:'Os recursos de PGBL e VGBL, durante o diferimento, são aplicados em:',o:['Fundo de investimento especialmente constituído (FIE), sem garantia mínima de rentabilidade','Caderneta de poupança, com rendimento garantido','Ações da própria seguradora','Conta vinculada ao INSS'],c:0,j:'Toda a rentabilidade do FIE (menos a taxa de administração) vai para o participante, e o risco também.'},
{id:'p5',m:'prev',q:'No PGBL, as contribuições:',o:['Podem ser deduzidas até 12% da renda bruta tributável, na declaração completa','Nunca são dedutíveis','São dedutíveis sem limite','São dedutíveis só na declaração simplificada'],c:0,j:'Vantagem do PGBL. Em troca, paga IR sobre o valor total no resgate.'},
{id:'pr27',m:'prev',q:'Para deduzir as contribuições ao PGBL no imposto de renda, o participante precisa:',o:['Declarar no modelo completo e contribuir para o regime oficial (INSS ou regime próprio), respeitando 12% da renda bruta tributável','Declarar no modelo simplificado','Ter mais de 60 anos','Ter o plano há mais de 10 anos'],c:0,j:'Dois requisitos que a banca adora: declaração completa e contribuição ao regime oficial.'},
{id:'p6',m:'prev',q:'No VGBL, o imposto de renda no resgate incide sobre:',o:['O valor total','Apenas os rendimentos','Apenas as contribuições','Não há imposto'],c:1,j:'Como não deduziu nada na entrada, no VGBL o IR é só sobre o que rendeu.'},
{id:'p7',m:'prev',q:'Para quem faz a declaração SIMPLIFICADA, normalmente é mais indicado:',o:['PGBL','VGBL','Tanto faz','Nenhum dos dois'],c:1,j:'Na simplificada não há como aproveitar a dedução do PGBL, e ainda pagaria IR sobre tudo.'},
{id:'pr37',m:'prev',q:'Sobre o VGBL, é correto afirmar:',o:['É um seguro de pessoas com cobertura por sobrevivência, fiscalizado pela SUSEP','É plano de entidade fechada fiscalizado pela PREVIC','Permite dedução de 12% no IR','Tributa o valor total no resgate'],c:0,j:'O "V" é de Vida: juridicamente é seguro.'},
{id:'pr43',m:'prev',q:'Um cliente faz declaração simplificada e quer acumular para a aposentadoria, resgatando só daqui a 15 anos. A recomendação mais adequada é:',o:['VGBL com tabela regressiva','PGBL com tabela progressiva','PGBL com tabela regressiva','Não há diferença entre os planos'],c:0,j:'Simplificada → não aproveita a dedução → VGBL. Prazo longo → regressiva (10%).'},
{id:'pr44',m:'prev',q:'Um cliente faz declaração completa, contribui para o INSS e ainda não usou o limite de dedução. Para aproveitar o benefício fiscal, o mais adequado é:',o:['PGBL, até 12% da renda bruta tributável','VGBL, pois deduz 100%','Nenhum plano de previdência','VGBL com tabela progressiva para poder deduzir'],c:0,j:'Planejamento tributário clássico: PGBL até os 12%, o que passar disso em VGBL.'},
{id:'p8',m:'prev',q:'Na tabela REGRESSIVA, recursos acumulados há mais de 10 anos pagam:',o:['35%','22,5%','15%','10%'],c:3,j:'35% (até 2 anos), cai 5 pontos a cada 2 anos, chega a 10% acima de 10 anos.'},
{id:'p9',m:'prev',q:'Na tabela REGRESSIVA, recursos com até 2 anos pagam:',o:['35%','27,5%','15%','10%'],c:0,j:'27,5% é a maior alíquota da tabela progressiva mensal do IR, não da regressiva.'},
{id:'pr28',m:'prev',q:'Na tabela PROGRESSIVA, no resgate de plano de previdência:',o:['Há retenção de 15% na fonte, com ajuste na declaração anual','A alíquota é definitiva de 10%','Não há retenção','A alíquota cai com o tempo de cada aporte'],c:0,j:'Quem cai com o tempo é a regressiva.'},
{id:'pr29',m:'prev',q:'A tabela regressiva é mais indicada para quem:',o:['Pretende deixar o dinheiro investido por muitos anos','Vai resgatar em poucos meses','Será isento de IR na aposentadoria','Quer a dedução de 12%'],c:0,j:'Ela premia o prazo longo. Para resgate curto (35%) ou para quem terá renda baixa/isenta, a progressiva tende a ser melhor.'},
{id:'pr32',m:'prev',q:'Plano com cobertura por SOBREVIVÊNCIA é aquele que:',o:['Paga renda ou pagamento único se o participante estiver vivo ao fim do diferimento','Paga pecúlio em caso de morte','Paga apenas em caso de invalidez','Reembolsa despesas médicas'],c:0,j:'Sobrevivência: PGBL, VGBL, tradicionais. Risco: pecúlio, pensão, renda por invalidez.'},
{id:'pr33',m:'prev',q:'São coberturas de RISCO oferecidas em planos de previdência:',o:['Pecúlio por morte ou invalidez e pensão aos beneficiários','Renda por sobrevivência e resgate','Portabilidade e carregamento','PGBL e VGBL'],c:0,j:'Cobertura de risco paga se acontecer o evento (morte/invalidez).'},
{id:'pr34',m:'prev',q:'Pecúlio é:',o:['Pagamento único aos beneficiários (ou ao participante) em caso de morte ou invalidez','Renda mensal vitalícia','A taxa de administração','Um resgate parcial'],c:0,j:'Pecúlio = de uma vez só.'},
{id:'p11',m:'prev',q:'O plano do tipo VRI / PRI caracteriza-se por:',o:['Pagamento único com renda imediata','Garantia de juros + índice','Nenhuma garantia de rentabilidade','Rentabilidade atrelada a índice'],c:0,j:'RI = Renda Imediata: paga uma vez e já começa a receber.'},
{id:'p12',m:'prev',q:'O plano VRGP / PRGP garante:',o:['Taxa de juros + índice de atualização, com reversão de resultados financeiros','Nada: a rentabilidade é toda do fundo','Pagamento único com renda imediata','Somente a atualização por índice'],c:0,j:'RGP = Remuneração Garantida e Performance.'},
{id:'p13',m:'prev',q:'O plano VDR / PDR (desempenho referenciado):',o:['Tem garantia mínima de desempenho atrelada a % de um índice de renda fixa','É de renda imediata','Não tem rentabilidade','Garante juros sem atualização'],c:0,j:'Acompanha um índice de renda fixa, com mínimo garantido.'},
{id:'p14',m:'prev',q:'O plano VRSA / PRSA garante:',o:['Juros, sem atualização monetária','Atualização + juros','Renda imediata','Nenhuma garantia'],c:0,j:'SA = Sem Atualização.'},
{id:'p16',m:'prev',q:'Na renda vitalícia com prazo mínimo garantido, se o participante falecer antes do prazo:',o:['Os beneficiários recebem a renda até completar o prazo mínimo','A renda acaba na hora','A reserva fica com a entidade','A renda dobra'],c:0,j:'O prazo mínimo é a garantia para os beneficiários.'},
{id:'pr35',m:'prev',q:'O participante escolhe renda mensal vitalícia reversível ao beneficiário indicado. Isso significa que:',o:['Após sua morte, a renda (ou um percentual dela) continua a ser paga ao beneficiário indicado, enquanto este viver','A renda termina com a sua morte','A renda é paga por prazo fixo de 10 anos','O beneficiário recebe tudo de uma vez'],c:0,j:'Reversível = "reverte" para o beneficiário.'},
{id:'pr36',m:'prev',q:'A renda temporária é paga:',o:['Até o fim do prazo contratado ou até a morte do participante, o que ocorrer primeiro','Até a morte do participante, sem prazo','Somente ao beneficiário, depois da morte','Uma única vez'],c:0,j:'Temporária = tem prazo máximo.'},
{id:'pr45',m:'prev',q:'A reserva acumulada durante o período de diferimento, em plano aberto, é registrada na provisão:',o:['PMBaC (benefícios a conceder)','PMBC (benefícios concedidos)','IBNR','PPNG'],c:0,j:'A conceder = ainda acumulando. Concedidos = já em pagamento.'},
{id:'c6',m:'prev',q:'A provisão IBNR refere-se a:',o:['Sinistros ocorridos e ainda não avisados','Prêmios não ganhos','Benefícios concedidos','Despesas administrativas'],c:0,j:'Incurred But Not Reported. PPNG = prêmios não ganhos; PMBC = benefícios concedidos.'},
{id:'pr46',m:'prev',q:'As garantias técnicas exigidas das entidades abertas de previdência incluem:',o:['Provisões técnicas, cobertas por ativos garantidores, e capital mínimo','Apenas o registro do corretor','Apenas um depósito no Banco Central','Um seguro garantia contratado pelo participante'],c:0,j:'É o que garante que o dinheiro estará lá para pagar os benefícios.'},
{id:'pr22',m:'prev',q:'Pela LC 109/2001, o resultado SUPERAVITÁRIO de um plano fechado é destinado:',o:['À reserva de contingência, até 25% das reservas matemáticas, e o excedente à reserva especial para revisão do plano','Integralmente ao patrocinador','Integralmente à PREVIC','À distribuição imediata aos participantes'],c:0,j:'Se a reserva especial não for usada por 3 exercícios seguidos, a revisão do plano é obrigatória.'},
{id:'pr23',m:'prev',q:'O resultado DEFICITÁRIO de um plano fechado deve ser equacionado:',o:['Por patrocinadores, participantes e assistidos, na proporção de suas contribuições','Apenas pelo patrocinador','Apenas pela União','Apenas pelos aposentados'],c:0,j:'LC 109, art. 21: todos pagam, na proporção.'},
{id:'pr39',m:'prev',q:'O dever de informar das entidades de previdência complementar inclui:',o:['Entregar regulamento, certificado e material explicativo claros, e dar acesso às informações sobre a gestão do plano','Informar apenas quando o participante entrar na Justiça','Informar o saldo uma única vez','Não há dever de informar na previdência privada'],c:0,j:'Transparência é princípio do setor.'},
{id:'pr40',m:'prev',q:'Os administradores de entidade de previdência complementar que causarem prejuízo à entidade por ação ou omissão:',o:['Respondem civilmente pelos danos, além de poderem sofrer penalidades como multa e inabilitação','Não respondem, pois a responsabilidade é só da entidade','Só respondem se forem participantes do plano','Respondem apenas perante o INSS'],c:0,j:'LC 109, art. 63 (responsabilidade civil) e art. 65 (penalidades).'},
{id:'pr41',m:'prev',q:'Na gestão de riscos de uma entidade de previdência, o risco de não ter recursos disponíveis para pagar os benefícios no momento devido é o risco:',o:['De liquidez','De crédito','Operacional','Legal'],c:0,j:'Liquidez = caixa. Crédito = alguém não pagar. Operacional = falhas internas.'},
{id:'r13',m:'prev',q:'Perdas causadas por falhas de pessoas, processos, sistemas ou eventos externos são risco:',o:['Operacional','De mercado','De crédito','De liquidez'],c:0,j:'Mercado = preços/juros. Crédito = alguém não pagar. Liquidez = falta de caixa.'},
{id:'pr49',m:'prev',q:'Uma entidade de previdência usa uma tábua que subestima quanto as pessoas vão viver. Os benefícios vitalícios vão durar mais que o previsto. Esse é um risco:',o:['Atuarial (de longevidade)','De crédito','De liquidez imediata','Cambial'],c:0,j:'Premissa atuarial errada: as pessoas vivem mais que a tábua.'},
{id:'pr25',m:'prev',q:'Segundo a Súmula 563 do STJ, o Código de Defesa do Consumidor:',o:['Aplica-se às entidades abertas de previdência complementar, mas não aos contratos com entidades fechadas','Aplica-se igualmente a abertas e fechadas','Não se aplica a nenhuma delas','Aplica-se apenas às fechadas'],c:0,j:'Aberta vende ao público com lucro (relação de consumo). Fechada não.'},
{id:'pr26',m:'prev',q:'A ação de cobrança de parcelas de complementação de aposentadoria pela previdência privada prescreve em:',o:['5 anos','1 ano','3 anos','10 anos'],c:0,j:'Súmula 291 do STJ. A 427 completa: diferenças também em 5 anos, contados de cada pagamento.'},
{id:'pr38',m:'prev',q:'Em caso de morte do titular de PGBL ou VGBL, os recursos:',o:['São pagos diretamente aos beneficiários indicados, sem necessidade de inventário','Entram obrigatoriamente no inventário','Ficam com a seguradora','São perdidos'],c:0,j:'Por isso esses planos servem ao planejamento sucessório.'},

// ======================= SEGURO DE PESSOAS =======================
{id:'ps1',m:'pessoas',q:'Os seguros de pessoas classificam-se em:',o:['Vida individual, vida em grupo e acidentes pessoais','Danos, responsabilidade civil e garantia','Aberto e fechado','PGBL e VGBL'],c:0,j:'VI, VG, AP (e o prestamista, que é um seguro de pessoas ligado a uma dívida).'},
{id:'ps2',m:'pessoas',q:'A diferença entre o seguro de vida e o seguro de acidentes pessoais é que:',o:['O de vida pode cobrir morte por qualquer causa, natural ou acidental; o de acidentes pessoais cobre só eventos decorrentes de acidente','São idênticos','O de acidentes pessoais cobre doenças','O de vida só cobre acidentes'],c:0,j:'AP não cobre doença.'},
{id:'r12',m:'pessoas',q:'O mutualismo, base do seguro, significa que:',o:['As contribuições de muitos pagam as perdas de poucos','Cada segurado paga exatamente o próprio sinistro','O governo garante os sinistros','A seguradora paga tudo com capital próprio'],c:0,j:'Todos pagam prêmio para um fundo comum que indeniza os poucos que sofrem o sinistro.'},
{id:'r11',m:'pessoas',q:'A lei dos grandes números diz que:',o:['Quanto maior o número de riscos semelhantes, mais previsível é a perda média','Quanto maior o capital, menor o prêmio','Quanto mais sinistros, maior o lucro','Riscos grandes não podem ser segurados'],c:0,j:'Com muitos riscos parecidos, o resultado real se aproxima do esperado. É o que permite calcular o prêmio.'},
{id:'c5',m:'pessoas',q:'A base para precificar coberturas de morte e de sobrevivência são:',o:['As tábuas biométricas (mortalidade e sobrevivência)','A tabela do IR','O índice Bovespa','O rol da ANS'],c:0,j:'Tábua de mortalidade para morte, de sobrevivência para renda.'},
{id:'c1',m:'pessoas',q:'O prêmio puro (ou de risco) é:',o:['O valor que cobre apenas o custo esperado dos sinistros','O prêmio já com IOF','A comissão do corretor','O lucro da seguradora'],c:0,j:'Prêmio puro = frequência × custo médio. Sem despesas, lucro ou imposto.'},
{id:'c2',m:'pessoas',q:'O prêmio comercial é formado por:',o:['Prêmio puro + carregamento','Prêmio puro − IOF','Somente o IOF','Somente os sinistros'],c:0,j:'Carregamento = despesas administrativas, corretagem e lucro.'},
{id:'c3',m:'pessoas',q:'O prêmio total pago pelo segurado é:',o:['Prêmio comercial + IOF','Prêmio puro','Somente o carregamento','O valor do sinistro'],c:0,j:'Puro → + carregamento = comercial → + IOF = total.'},
{id:'c9',m:'pessoas',q:'A taxa do seguro é obtida por:',o:['Prêmio ÷ importância segurada (capital)','Capital ÷ prêmio','Sinistro ÷ prêmio','Prêmio × IOF'],c:0,j:'Ex.: prêmio de R$ 500 para capital de R$ 100.000 = taxa de 0,5%.'},
{id:'c4',m:'pessoas',q:'Antisseleção (seleção adversa) é:',o:['A tendência de quem tem risco maior procurar mais o seguro','A seleção de riscos feita pela seguradora','A escolha do corretor pelo cliente','O resseguro'],c:0,j:'Por isso existem declaração de saúde, exames e carência.'},
{id:'c7',m:'pessoas',q:'O regime financeiro em que cada um forma a própria reserva, típico da previdência e do vida individual com prêmio nivelado, é:',o:['Capitalização','Repartição simples','Repartição de capitais de cobertura','Nenhum'],c:0,j:'Repartição simples é típica da vida em grupo.'},
{id:'ps25',m:'pessoas',q:'No regime de repartição simples, típico do seguro de vida em grupo:',o:['Os prêmios do período pagam os sinistros do mesmo período, sem formar reserva individual de resgate','Cada segurado acumula reserva própria com direito a resgate','Não há prêmio','O prêmio é pago uma única vez'],c:0,j:'Por isso o vida em grupo, em regra, não tem valor de resgate.'},
{id:'ps26',m:'pessoas',q:'No seguro de vida individual em regime de capitalização, com prêmio nivelado:',o:['Forma-se reserva matemática, o que permite opções como resgate, saldamento e benefício prolongado','Não há reserva','O prêmio aumenta todo ano conforme a idade','Só há cobertura de acidente'],c:0,j:'Prêmio nivelado: paga mais que o risco no início e menos depois; a diferença vira reserva.'},
{id:'ps27',m:'pessoas',q:'Saldamento, no seguro de vida individual, é:',o:['Parar de pagar os prêmios e manter o seguro com capital reduzido, pelo mesmo prazo','Manter o capital integral por prazo menor','Resgatar toda a reserva','Aumentar o capital'],c:0,j:'Benefício prolongado é o contrário: mantém o capital integral, por prazo menor.'},
{id:'v8',m:'pessoas',q:'NÃO é característica do acidente pessoal:',o:['Súbito','Externo','Involuntário','Causado por doença'],c:3,j:'Acidente = súbito, externo, involuntário, violento, com data caracterizada. Doença não é acidente.'},
{id:'ps3',m:'pessoas',q:'Pela regulamentação dos seguros de pessoas, é equiparado a acidente pessoal, para fins de indenização:',o:['O suicídio ou sua tentativa, observada a legislação','O infarto do miocárdio','A lesão por esforço repetitivo','A doença profissional'],c:0,j:'Suicídio é equiparado a acidente (respeitando os 2 anos). Doenças, inclusive profissionais, e LER/DORT não são acidente.'},
{id:'ps4',m:'pessoas',q:'NÃO se enquadra no conceito de acidente pessoal:',o:['Lesão por esforço repetitivo (LER/DORT)','Fratura em queda de escada','Afogamento acidental','Escapamento acidental de gás'],c:0,j:'LER/DORT vem de microtraumas repetidos, não de um evento súbito.'},
{id:'v11',m:'pessoas',q:'A cobertura de IPA paga:',o:['Um percentual do capital conforme o grau da invalidez permanente causada por acidente','Diárias','Reembolso de despesas','Renda vitalícia'],c:0,j:'Invalidez Permanente por Acidente, total ou parcial, com tabela de percentuais.'},
{id:'ps5',m:'pessoas',q:'A cobertura de IFPD (invalidez funcional permanente total por doença) paga o capital quando:',o:['A doença causa a perda da existência independente do segurado','O segurado fica afastado do trabalho por 15 dias','Há qualquer diagnóstico de doença grave','A invalidez decorre de acidente'],c:0,j:'Funcional = perda da autonomia para a vida diária. Invalidez por acidente é IPA.'},
{id:'v3',m:'pessoas',q:'Na cobertura de DIT, o período inicial em que o segurado não recebe diárias chama-se:',o:['Carência','Franquia','Diferimento','Vigência'],c:1,j:'Franquia na DIT costuma ser 15 dias. Carência é outra coisa: prazo após a contratação sem cobertura.'},
{id:'ps32',m:'pessoas',q:'A cobertura DIT (diária por incapacidade temporária) paga:',o:['Diárias enquanto o segurado estiver temporariamente impedido de trabalhar, após a franquia e até o limite de diárias','Capital por morte','Reembolso de despesas médicas','Renda vitalícia'],c:0,j:'Temporária: quando ele se recupera, as diárias param.'},
{id:'v4',m:'pessoas',q:'A cobertura de DMHO garante:',o:['Reembolso de despesas médicas, hospitalares e odontológicas decorrentes de acidente','Diárias por doença','Capital por morte natural','Plano de saúde regulado pela ANS'],c:0,j:'DMHO é cobertura de acidentes pessoais, por reembolso. Não é plano de saúde.'},
{id:'v2',m:'pessoas',q:'O seguro prestamista:',o:['Quita o saldo devedor junto ao credor em caso de morte ou invalidez do devedor','Protege o cliente contra a falência do banco','É um seguro de automóvel','É um plano de previdência'],c:0,j:'O credor é o primeiro beneficiário, até o valor do saldo devedor.'},
{id:'ps28',m:'pessoas',q:'No seguro prestamista, se o capital segurado for maior que o saldo devedor na data do sinistro:',o:['A diferença é paga ao segundo beneficiário indicado (ou aos herdeiros)','A diferença fica com o credor','A diferença fica com a seguradora','Não pode haver diferença'],c:0,j:'O credor recebe só até o saldo devedor.'},
{id:'v5',m:'pessoas',q:'No seguro de vida em grupo, o estipulante é:',o:['A pessoa física ou jurídica que contrata o seguro para o grupo e representa os segurados perante a seguradora','O corretor de seguros','O beneficiário','O ressegurador'],c:0,j:'Ex.: a empresa que contrata vida em grupo para os funcionários. Não é corretor.'},
{id:'ps8',m:'pessoas',q:'São deveres do estipulante, entre outros:',o:['Fornecer à seguradora as informações do grupo, repassar os prêmios recolhidos no prazo e informar os segurados sobre o seguro','Aceitar ou recusar os riscos em nome da seguradora','Pagar os sinistros com recursos próprios','Fixar a taxa do seguro'],c:0,j:'Quem aceita risco, fixa taxa e paga sinistro é a seguradora.'},
{id:'v12',m:'pessoas',q:'No seguro em grupo CONTRIBUTÁRIO:',o:['Os segurados pagam parte ou todo o prêmio','O estipulante paga 100%','Não há prêmio','O governo paga'],c:0,j:'Contributário = segurado contribui. Não contributário = estipulante paga tudo.'},
{id:'ps6',m:'pessoas',q:'No seguro de vida em grupo, o documento que o segurado recebe comprovando sua inclusão na apólice coletiva é o:',o:['Certificado individual','Endosso','Bilhete','Contrato de resseguro'],c:0,j:'A apólice fica com o estipulante; cada segurado recebe certificado.'},
{id:'ps7',m:'pessoas',q:'No seguro de vida em grupo, a modificação da apólice em vigor que crie novos ônus aos segurados ou restrinja seus direitos depende da anuência expressa de:',o:['Segurados que representem 3/4 do grupo','Apenas do estipulante','Metade dos segurados','Apenas da SUSEP'],c:0,j:'Regra clássica de proteção do grupo (vinha do art. 801 do Código Civil).'},
{id:'ps35',m:'pessoas',q:'Considere as afirmativas:\nI. No seguro de vida, o capital segurado não responde pelas dívidas do segurado.\nII. O estipulante representa a seguradora perante o grupo segurado.\nIII. Doença profissional não se enquadra como acidente pessoal.\nEstá correto o que se afirma em:',o:['I e III, apenas','I, apenas','II e III, apenas','I, II e III'],c:0,j:'II está errada: o estipulante representa os SEGURADOS perante a seguradora, e não a seguradora perante o grupo.'},
{id:'v10',m:'pessoas',q:'Uma pessoa pode ter mais de um seguro de vida?',o:['Sim, em várias seguradoras e sem limite, pois o seguro de vida não segue o princípio indenitário','Não, é proibido','Só um por CPF','Sim, mas o capital é dividido entre as apólices'],c:0,j:'A vida não tem valor de mercado para "repor". Cada seguro paga seu capital.'},
{id:'ps34',m:'pessoas',q:'O capital segurado, nos seguros de pessoas:',o:['É livremente estipulado pelo proponente','É limitado ao patrimônio do segurado','É limitado a 100 salários mínimos','É fixado pela SUSEP para cada pessoa'],c:0,j:'Liberdade de capital é traço do seguro de pessoas.'},
{id:'ps10',m:'pessoas',q:'No seguro sobre a vida de OUTRA pessoa, o proponente deve declarar seu interesse na preservação da vida do segurado. Esse interesse é presumido quando o segurado for:',o:['Cônjuge, ascendente ou descendente do proponente','Qualquer amigo do proponente','Sócio do proponente','Empregado do proponente'],c:0,j:'Nos demais casos, o interesse precisa ser declarado (e pode ser questionado).'},
{id:'ps11',m:'pessoas',q:'O segurado pode substituir o beneficiário do seguro de vida?',o:['Sim, em regra, por ato entre vivos ou por testamento, salvo se renunciou a essa faculdade ou se o seguro garante uma obrigação','Não, o beneficiário é definitivo','Só com autorização judicial','Só com a concordância do beneficiário atual'],c:0,j:'Ex. da exceção: no prestamista, o credor não pode ser retirado enquanto houver dívida.'},
{id:'ps12',m:'pessoas',q:'O segurado troca o beneficiário mas NÃO comunica a seguradora. No sinistro, a seguradora paga, de boa-fé, ao antigo beneficiário. Nesse caso:',o:['A seguradora fica desobrigada','A seguradora terá de pagar de novo ao novo beneficiário','O pagamento é nulo','O corretor paga ao novo beneficiário'],c:0,j:'Pagou de boa-fé a quem constava: está quitada. O novo beneficiário discute com quem recebeu.'},
{id:'v6',m:'pessoas',q:'Se não houver beneficiário indicado, o capital do seguro de vida vai:',o:['Metade ao cônjuge não separado (ou companheiro) e metade aos herdeiros','Todo para a seguradora','Todo para o Estado','Todo para o estipulante'],c:0,j:'Metade cônjuge, metade herdeiros, na ordem da sucessão. A jurisprudência põe o companheiro no lugar do cônjuge.'},
{id:'ps13',m:'pessoas',q:'Segundo a jurisprudência do STJ, a indicação de beneficiário no seguro de vida:',o:['É válida em favor do companheiro se o segurado já estava separado ao tempo do contrato, mas não em favor de concubino de pessoa casada não separada','É sempre válida, para qualquer pessoa','Só pode recair em parentes','Nunca pode recair em companheiro'],c:0,j:'Controvérsia clássica do edital ("principais controvérsias jurídicas sobre o beneficiário").'},
{id:'v7',m:'pessoas',q:'O capital segurado pago por morte:',o:['Não é herança e não responde pelas dívidas do segurado','Entra no inventário','Pode ser penhorado pelos credores do segurado','É dividido com a seguradora'],c:0,j:'Vai direto ao beneficiário, fora da herança, e é impenhorável.'},
{id:'ps29',m:'pessoas',q:'O seguro de vida é útil no planejamento sucessório porque:',o:['O capital é pago diretamente ao beneficiário, não entra em inventário e dá liquidez rápida à família','Substitui o testamento em tudo','Garante rentabilidade acima da poupança','Paga as dívidas do falecido antes dos herdeiros'],c:0,j:'Liquidez imediata, inclusive para pagar os custos do próprio inventário.'},
{id:'ps14',m:'pessoas',q:'Nos seguros de pessoas, a seguradora que pagou o capital:',o:['Não pode se sub-rogar nos direitos do segurado ou beneficiário contra o causador do sinistro','Pode cobrar o valor do causador da morte','Pode cobrar do beneficiário','Pode cobrar do estipulante'],c:0,j:'Sem sub-rogação: a família ainda pode processar o causador, e a seguradora não.'},
{id:'ps15',m:'pessoas',q:'No seguro de pessoas, é nula a transação para:',o:['Pagamento reduzido do capital segurado','Pagamento do capital à vista','Indicação de beneficiário','Inclusão de nova cobertura'],c:0,j:'Protege o beneficiário de aceitar menos do que tem direito.'},
{id:'ps16',m:'pessoas',q:'No seguro de vida, a seguradora NÃO pode se recusar a pagar quando a morte decorrer de:',o:['Uso de meio de transporte mais arriscado, serviço militar, prática de esporte ou atos de humanidade em auxílio de outrem','Fraude comprovada do beneficiário','Suicídio no primeiro ano de vigência','Agravamento intencional do risco pelo segurado'],c:0,j:'Essas situações não podem ser excluídas. As outras três afastam o pagamento.'},
{id:'ps23',m:'pessoas',q:'Se o segurado agravar intencionalmente o risco objeto do contrato:',o:['Perde o direito à garantia','Recebe o capital em dobro','Nada muda','A seguradora deve aumentar o capital'],c:0,j:'Agravação intencional = perda de direito (tema do edital).'},
{id:'ps24',m:'pessoas',q:'Quando o segurado, de MÁ-FÉ, faz declarações inexatas ou omite circunstâncias que influenciariam a aceitação da proposta ou o prêmio:',o:['Perde o direito à garantia e ainda fica obrigado ao prêmio','Recebe o capital normalmente','Recebe metade do capital','A seguradora devolve o prêmio em dobro'],c:0,j:'Sem má-fé a regra é mais branda: a seguradora pode resolver o contrato ou cobrar a diferença de prêmio.'},
{id:'v1',m:'pessoas',q:'Sobre suicídio no seguro de vida, é correto afirmar:',o:['O beneficiário não recebe o capital se o suicídio ocorrer nos 2 primeiros anos de vigência','O suicídio nunca é coberto','O suicídio é coberto desde o primeiro dia','A carência para suicídio é de 1 ano'],c:0,j:'Regra dos 2 anos, mantida pela Lei 15.040/2024. Depois disso, é coberto. Nos 2 anos, o beneficiário recebe a reserva técnica (Súmula 610).'},
{id:'ps17',m:'pessoas',q:'Segundo a Súmula 610 do STJ, o suicídio nos dois primeiros anos de vigência do seguro de vida:',o:['Não é coberto, mas o beneficiário tem direito à devolução do montante da reserva técnica formada','É coberto se não houve premeditação','É sempre coberto','Gera devolução em dobro dos prêmios'],c:0,j:'O critério é só o tempo. A discussão sobre premeditação acabou (Súmula 61 cancelada).'},
{id:'ps18',m:'pessoas',q:'Segundo a Súmula 620 do STJ, a embriaguez do segurado:',o:['Não exime a seguradora do pagamento da indenização no seguro de vida','Sempre exclui a cobertura','Reduz o capital pela metade','Só é coberta se houver testemunha'],c:0,j:'No seguro de automóvel a análise é outra. No de VIDA, paga.'},
{id:'ps19',m:'pessoas',q:'A seguradora recusa o pagamento alegando doença preexistente, mas não exigiu exames na contratação e não provou má-fé do segurado. Segundo a Súmula 609 do STJ, a recusa é:',o:['Ilícita','Lícita','Lícita se a doença for grave','Lícita após 2 anos de vigência'],c:0,j:'Quem não examinou nem provou má-fé assume o risco.'},
{id:'ps20',m:'pessoas',q:'Segundo a Súmula 616 do STJ, para suspender ou resolver o contrato por atraso no pagamento do prêmio, a seguradora precisa:',o:['Notificar previamente o segurado sobre o atraso','Apenas aguardar 1 dia','Avisar somente o corretor','Nada: o atraso cancela automaticamente'],c:0,j:'Sem notificação prévia, a indenização é devida.'},
{id:'ps21',m:'pessoas',q:'O contrato de seguro por danos pessoais compreende os danos morais?',o:['Sim, salvo cláusula expressa de exclusão','Nunca','Só em seguro de automóvel','Só se houver morte'],c:0,j:'Súmula 402 do STJ.'},
{id:'ps22',m:'pessoas',q:'A ação do segurado em grupo contra a seguradora prescreve, segundo a Súmula 101 do STJ, em:',o:['1 ano','3 anos','5 anos','10 anos'],c:0,j:'Na invalidez, o prazo conta da ciência inequívoca da incapacidade (Súmula 278). Para o beneficiário, o prazo é de 3 anos.'},
{id:'v9',m:'pessoas',q:'A carência no seguro de vida:',o:['Não se aplica a eventos decorrentes de acidente pessoal','Vale para todos os eventos','Tem mínimo de 5 anos','Só existe para acidentes'],c:0,j:'Pode haver carência para morte natural, mas acidente é coberto desde o início.'},
{id:'ps33',m:'pessoas',q:'A morte natural do segurado ocorre durante o prazo de carência. Nesse caso:',o:['Não há pagamento do capital, mas o beneficiário recebe a reserva técnica formada','O capital é pago integralmente','O capital é pago pela metade','Nada é devolvido'],c:0,j:'Mesma lógica do suicídio nos 2 anos: devolve-se a reserva.'},
{id:'ps30',m:'pessoas',q:'Sob a LGPD, as informações de saúde da declaração pessoal de saúde do proponente são:',o:['Dados pessoais sensíveis, que exigem base legal específica e cuidado reforçado','Dados públicos','Dados anonimizados por natureza','Dados que a seguradora pode compartilhar livremente'],c:0,j:'Dado de saúde = sensível (LGPD, art. 5º, II).'},
{id:'ps31',m:'pessoas',q:'Uma seguradora quer usar os dados de saúde dos segurados em campanha de marketing de terceiros. Segundo a LGPD:',o:['Não pode sem base legal adequada; o tratamento deve respeitar finalidade, necessidade e transparência','Pode, pois o segurado já informou os dados','Pode, desde que avise o corretor','A LGPD não se aplica a seguradoras'],c:0,j:'Dado coletado para avaliar o risco não pode ser desviado para outra finalidade. Fiscaliza: ANPD.'}
];

// [frente, verso, matéria]
const FC = [
['SNSP (DL 73/1966)','CNSP, SUSEP, resseguradores, seguradoras e corretores habilitados','leg'],
['CNSP','Normativo. Presidido pelo Ministro da Fazenda','leg'],
['SUSEP','Autarquia: executa a política do CNSP e fiscaliza (seguros, previdência aberta, capitalização, resseguro, corretores)','leg'],
['CNPC → PREVIC','Previdência fechada (fundos de pensão)','leg'],
['Ressegurador local','Sede no Brasil, S.A.','leg'],
['Ressegurador admitido','Sede no exterior + escritório de representação no Brasil','leg'],
['Ressegurador eventual','Sede no exterior, sem escritório no Brasil','leg'],
['Cosseguro','Risco dividido entre seguradoras (uma é a líder)','leg'],
['Resseguro','Seguro da seguradora','leg'],
['Retrocessão','Ressegurador repassa a outro','leg'],
['Corretor (Lei 4.594/1964)','Intermediário autorizado a angariar e promover contratos; PF ou PJ','leg'],
['Habilitação do corretor','Exame técnico-profissional + registro na SUSEP','leg'],
['Proibido ao corretor (art. 125)','Ser sócio, administrador ou empregado de seguradora; emprego público','leg'],
['Responsabilidade do corretor (art. 126)','Responde civilmente por omissão, imperícia ou negligência','leg'],
['Seguro contratado sem corretor','Comissão vai ao Fundo de Desenvolvimento Educacional do Seguro (ENS)','leg'],
['Seguradora em crise','Liquidação extrajudicial pela SUSEP (em regra não há falência)','leg'],
['Lei 15.040/2024','Marco legal do contrato de seguro; em vigor desde dez/2025; revogou o capítulo do Código Civil','leg'],
['Prazo para recusar proposta','25 dias; silêncio = aceita (antes: 15)','leg'],
['LC 213/2025','Cooperativas de seguros e proteção patrimonial mutualista sob CNSP/SUSEP','leg'],
['LC 126/2007','Resseguro, retrocessão e seguro no exterior','leg'],
['CNseg','Confederação das seguradoras (FenSeg, FenaPrevi, FenaSaúde, FenaCap)','leg'],
['FenaPrevi','Federação de previdência e vida (dentro da CNseg)','leg'],
['FENACOR','Federação nacional dos corretores','leg'],
['SINCOR','Sindicato estadual dos corretores','leg'],
['Res. CNSP 382/2020','Boas práticas de conduta com o cliente (inclui intermediários)','leg'],
['Seguridade social','Saúde + previdência + assistência','prev'],
['Assistência social','A quem precisar, sem contribuição (ex.: BPC)','prev'],
['Previdência social (RGPS)','Contributiva e de filiação obrigatória','prev'],
['Previdência complementar','Facultativa, autônoma em relação ao RGPS, baseada em reservas','prev'],
['Gestão da seguridade','Quadripartite: trabalhadores, empregadores, aposentados e Governo','prev'],
['EC 103/2019 (RGPS urbano)','Idade mínima 65 (H) / 62 (M)','prev'],
['EC 103/2019 (servidores)','Previdência complementar só CD, por entidade fechada ou aberta','prev'],
['LC 109/2001','Lei geral da previdência complementar','prev'],
['LC 108/2001','Patrocinador público/estatal; contribuição dele não excede a do participante','prev'],
['Previdência aberta','CNSP → SUSEP → EAPC (S.A., com lucro)','prev'],
['Previdência fechada','CNPC → PREVIC → EFPC (fundação/sociedade civil sem lucro)','prev'],
['Instituidor','Entidade profissional, classista ou setorial que oferece plano aos associados','prev'],
['Institutos da fechada','BPD, portabilidade, resgate, autopatrocínio','prev'],
['BPD','Saiu antes de se aposentar: para de contribuir e recebe benefício proporcional no futuro','prev'],
['Autopatrocínio','Perdeu a renda: paga a sua parte e a do patrocinador para manter o plano','prev'],
['CD × BD × CV','CD: benefício depende do saldo · BD: benefício definido · CV: mistura','prev'],
['Superávit (fechada)','Reserva de contingência até 25%; resto na reserva especial; 3 anos sem uso → revisão','prev'],
['Déficit (fechada)','Patrocinadores, participantes e assistidos, na proporção das contribuições','prev'],
['Súmula 563 STJ','CDC vale para aberta, não para fechada','prev'],
['Súmula 291 STJ','Complementação de aposentadoria prescreve em 5 anos','prev'],
['PGBL','Deduz até 12% (completa + INSS). IR sobre o total','prev'],
['VGBL','Seguro de pessoas. Não deduz. IR só sobre os rendimentos','prev'],
['Tabela regressiva','35% (até 2 anos) … 10% (acima de 10 anos)','prev'],
['Tabela progressiva','15% retido no resgate, ajuste na declaração','prev'],
['Escolha da tabela','Até o 1º resgate ou benefício (Lei 14.803/2024)','prev'],
['Portabilidade','Entre planos de mesma natureza, sem IR, sem passar pela mão do participante','prev'],
['Carregamento × administração','Carregamento: sobre contribuições · Administração: sobre o patrimônio','prev'],
['Pecúlio','Pagamento único por morte ou invalidez','prev'],
['PMBaC × PMBC','A conceder (acumulando) × concedidos (em pagamento)','prev'],
['Período de diferimento','Fase de acumulação','prev'],
['VRGP','Juros + índice garantidos, com performance','prev'],
['VAGP','Atualização por índice garantida, com performance','prev'],
['VRSA','Juros garantidos, sem atualização','prev'],
['VDR','Desempenho referenciado: mínimo atrelado a índice de renda fixa','prev'],
['VRI','Pagamento único, renda imediata','prev'],
['Renda com prazo mínimo garantido','Se morrer antes do prazo, o beneficiário recebe até completá-lo','prev'],
['Classificação de pessoas','Vida individual, vida em grupo, acidentes pessoais','pessoas'],
['Acidente pessoal','Externo, súbito, involuntário, violento, com data caracterizada','pessoas'],
['Equiparado a acidente','Suicídio ou tentativa (respeitados os 2 anos)','pessoas'],
['Não é acidente','Doença (inclusive profissional), LER/DORT, complicação de tratamento','pessoas'],
['IPA','Invalidez permanente por acidente, % por tabela','pessoas'],
['IFPD','Invalidez funcional por doença: perda da existência independente','pessoas'],
['DIT','Diárias por incapacidade temporária; franquia comum de 15 dias','pessoas'],
['DMHO','Reembolso de despesas médicas, hospitalares e odonto por acidente','pessoas'],
['Prestamista','Quita a dívida; credor é o 1º beneficiário até o saldo devedor','pessoas'],
['Estipulante','Contrata a apólice coletiva e representa os segurados (não a seguradora)','pessoas'],
['Contributário','Segurado paga parte ou todo o prêmio','pessoas'],
['Mudar apólice de grupo em vigor','Anuência de 3/4 do grupo','pessoas'],
['Repartição simples','Prêmios do período pagam sinistros do período (vida em grupo)','pessoas'],
['Saldamento','Para de pagar, capital menor, mesmo prazo','pessoas'],
['Benefício prolongado','Para de pagar, mesmo capital, prazo menor','pessoas'],
['Prêmio puro → comercial → total','+ carregamento → + IOF','pessoas'],
['Antisseleção','Quem tem mais risco procura mais o seguro','pessoas'],
['Sem beneficiário indicado','Metade cônjuge (ou companheiro), metade herdeiros','pessoas'],
['Trocou beneficiário e não avisou','Seguradora que paga ao antigo, de boa-fé, fica quitada','pessoas'],
['Concubino de casado','Não pode ser beneficiário (STJ)','pessoas'],
['Interesse presumido (vida de outro)','Cônjuge, ascendente, descendente','pessoas'],
['Capital segurado','Livre; vários seguros; não é herança; impenhorável','pessoas'],
['Sub-rogação em pessoas','Não existe','pessoas'],
['Não pode excluir','Transporte arriscado, serviço militar, esporte, atos de humanidade','pessoas'],
['Má-fé na declaração','Perde a garantia e deve o prêmio','pessoas'],
['Suicídio','2 anos sem cobertura; devolve a reserva técnica (Súmula 610)','pessoas'],
['Súmula 620','Embriaguez não afasta o seguro de vida','pessoas'],
['Súmula 609','Preexistente sem exame nem má-fé: recusa ilícita','pessoas'],
['Súmula 616','Atraso no prêmio exige notificação prévia','pessoas'],
['Súmula 402','Danos pessoais incluem dano moral, salvo exclusão expressa','pessoas'],
['Súmula 101','Segurado em grupo: prescrição de 1 ano','pessoas'],
['Carência','Não vale para acidente; na carência devolve a reserva','pessoas'],
['LGPD e saúde','Dado de saúde é sensível; precisa de base legal; fiscaliza ANPD','pessoas']
];
