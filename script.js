


$(document).ready(function(){
  $(".porcentagem").each(function(){
    $(this).after("<div class='flutante'>%</div>");
  });
  $(".porcentagem").keyup(function(){
    $(this).val($(this).val().replace("%",""));
  });
  $(".numero").each(function(){
    if($(this).val() == "" || $(this).val() == "") { $(this).val(0); }
  });
  $("#calcular").click(function(){
    $(".numero").each(function(){
      if($(this).val() == "" || $(this).val() == "") { $(this).val(0); }
    });

    itemAAgilidade = parseInt($("#itemAAgilidade").val());
    itemBAgilidade = parseInt($("#itemBAgilidade").val());
    itemCAgilidade = parseInt($("#itemCAgilidade").val());
    itemDAgilidade = parseInt($("#itemDAgilidade").val());
    itemEAgilidade = parseInt($("#itemEAgilidade").val());
    itemFAgilidade = parseInt($("#itemFAgilidade").val());
    itemGAgilidade = parseInt($("#itemGAgilidade").val());
    itemHAgilidade = parseInt($("#itemHAgilidade").val());
    itemIAgilidade = parseInt($("#itemIAgilidade").val());

    itemADestreza = parseInt($("#itemADestreza").val());
    itemBDestreza = parseInt($("#itemBDestreza").val());
    itemCDestreza = parseInt($("#itemCDestreza").val());
    itemDDestreza = parseInt($("#itemDDestreza").val());
    itemEDestreza = parseInt($("#itemEDestreza").val());
    itemFDestreza = parseInt($("#itemFDestreza").val());
    itemGDestreza = parseInt($("#itemGDestreza").val());
    itemHDestreza = parseInt($("#itemHDestreza").val());
    itemIDestreza = parseInt($("#itemIDestreza").val());

    itemAInteligencia = parseInt($("#itemAInteligencia").val());
    itemBInteligencia = parseInt($("#itemBInteligencia").val());
    itemCInteligencia = parseInt($("#itemCInteligencia").val());
    itemDInteligencia = parseInt($("#itemDInteligencia").val());
    itemEInteligencia = parseInt($("#itemEInteligencia").val());
    itemFInteligencia = parseInt($("#itemFInteligencia").val());
    itemGInteligencia = parseInt($("#itemGInteligencia").val());
    itemHInteligencia = parseInt($("#itemHInteligencia").val());
    itemIInteligencia = parseInt($("#itemIInteligencia").val());

    AGI = parseInt($("#agi").val()) + itemAAgilidade + itemBAgilidade + itemCAgilidade + itemDAgilidade + itemEAgilidade + itemFAgilidade + itemGAgilidade + itemHAgilidade + itemIAgilidade;
    DES = parseInt($("#des").val()) + itemADestreza + itemBDestreza + itemCDestreza + itemDDestreza + itemEDestreza + itemFDestreza + itemGDestreza + itemHDestreza + itemIDestreza;
    INT = parseInt($("#int").val()) + itemAInteligencia + itemBInteligencia + itemCInteligencia + itemDInteligencia + itemEInteligencia + itemFInteligencia + itemGInteligencia + itemHInteligencia + itemIInteligencia;
    ASPD = parseInt($("#aspd").val());
    nivelPersonagem = parseInt($("#nivelPersonagem").val());

    if(ASPD > 193) {
      alert("Que aspd é essa? Tá doidão?");
      return false;
    }

    tempoConjuracaoBase = 1;
    tempoPosConjuracaoBase = 0.5;
    ataqueInvestigar = 0;
    porcentagemDisparoTriplo = (300 + (AGI * 5)) * (nivelPersonagem / 120);

    vantagemElemental = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0.7,0.5,0,0,1,1,1,1,1,1,1,1,1.5,1.75,2,2,0.9,0.9,0.7,0.6,0.25,0,0,0,1,1,1,1,1.25,1.25,1,0.75,1,1,1,0.75,1,1,1,0.75,1,0.75,0.5,0.25,1,0.75,0.5,0.25,1,1,1,1,0.9,0.8,0.7,0.6,1.5,1.75,2,2,1,1,1,1,0.25,0,0,0,1.25,1.25,1,0.75,1,1,1,0.75,1,1,1,0.75,1,0.75,0.5,0.25,1,0.75,0.5,0.25,1,1,1,1,1,1,1,1,0.25,0,0,0,1.5,1.75,2,2,0.9,0.8,0.7,0.6,1.25,1.25,1,0.75,1,1,1,0.75,1,1,1,0.75,1,0.75,0.5,0.25,1,0.75,0.5,0.25,1,1,1,1,0.25,0,0,0,1,1,1,1,0.9,0.8,0.7,0.6,1.75,1.75,2,2,1,0.75,0.5,0.25,1,1,1,0.75,1,1,1,0.75,1,0.75,0.5,0.25,1,0.75,0.5,0.25,1,1,1,1,0.75,0.5,0.25,0,0.75,0.5,0.25,0,0.75,0.5,0.25,0,0.75,0.5,0.25,0,0.75,0.5,0.25,0,0,0,0,0,1.25,1.5,1.75,2,0.75,0.5,0.25,0,1,1.25,1.5,1.75,1,1,1,1,1,0.75,0.5,0.25,1,0.75,0.5,0.25,1,0.75,0.5,0.25,1,0.75,0.5,0.25,0.5,0.25,0,0,1.25,1.5,1.75,2,0,0,0,0,0.75,0.5,0.25,0,0,0,0,0,1,1,1,1,1,1,1.25,1.5,1,1,1,0.5,1.25,1.5,1.75,2,1,1,1,1,0,0,0,0,1.5,1.75,2,2,0,0,0,0,1,1.25,1.5,1.75,0,0,0,0,1,1,1,1,1,1,1,0.75,1,1,1,0.75,1,1,1,0.75,1,1,1,0.75,0,0,0,0,1,1,1.25,1.25,0.5,0.25,0,0,1,0.75,0.5,0.25,0.5,0.25,0,0,0.7,0.5,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0.75,0.5,0.25,1,1,1,1,1,1,1,1,1.25,1.5,1.75,2,1,1,1,1];

    propriedadeMonstro = parseInt(parseInt($("#propriedadeMonstro").val()) / 10);
    nivelPropriedadeMonstro = parseInt($("#propriedadeMonstro").val()) % 10;
    propriedadeAtaque = parseInt($("#propriedadeAtaque").val());

    posicaoVantagemElemental = (propriedadeMonstro * 40) + (propriedadeAtaque * 4) + nivelPropriedadeMonstro;

    multiplicadorElemental = vantagemElemental[posicaoVantagemElemental];

    itemAConjuracaoVariavel = parseInt($("#itemAConjuracaoVariavel").val());
    itemBConjuracaoVariavel = parseInt($("#itemBConjuracaoVariavel").val());
    itemCConjuracaoVariavel = parseInt($("#itemCConjuracaoVariavel").val());
    itemDConjuracaoVariavel = parseInt($("#itemDConjuracaoVariavel").val());
    itemEConjuracaoVariavel = parseInt($("#itemEConjuracaoVariavel").val());
    itemFConjuracaoVariavel = parseInt($("#itemFConjuracaoVariavel").val());
    itemGConjuracaoVariavel = parseInt($("#itemGConjuracaoVariavel").val());
    itemHConjuracaoVariavel = parseInt($("#itemHConjuracaoVariavel").val());
    itemIConjuracaoVariavel = parseInt($("#itemIConjuracaoVariavel").val());

    itemAPosConjuracao = parseInt($("#itemAPosConjuracao").val());
    itemBPosConjuracao = parseInt($("#itemBPosConjuracao").val());
    itemCPosConjuracao = parseInt($("#itemCPosConjuracao").val());
    itemDPosConjuracao = parseInt($("#itemDPosConjuracao").val());
    itemEPosConjuracao = parseInt($("#itemEPosConjuracao").val());
    itemFPosConjuracao = parseInt($("#itemFPosConjuracao").val());
    itemGPosConjuracao = parseInt($("#itemGPosConjuracao").val());
    itemHPosConjuracao = parseInt($("#itemHPosConjuracao").val());
    itemIPosConjuracao = parseInt($("#itemIPosConjuracao").val());

    itemAIgnorarDefesa = parseInt($("#itemAIgnorarDefesa").val());
    itemBIgnorarDefesa = parseInt($("#itemBIgnorarDefesa").val());
    itemCIgnorarDefesa = parseInt($("#itemCIgnorarDefesa").val());
    itemDIgnorarDefesa = parseInt($("#itemDIgnorarDefesa").val());
    itemEIgnorarDefesa = parseInt($("#itemEIgnorarDefesa").val());
    itemFIgnorarDefesa = parseInt($("#itemFIgnorarDefesa").val());
    itemGIgnorarDefesa = parseInt($("#itemGIgnorarDefesa").val());
    itemHIgnorarDefesa = parseInt($("#itemHIgnorarDefesa").val());
    itemIIgnorarDefesa = parseInt($("#itemIIgnorarDefesa").val());

    itemAAtaque = parseInt($("#itemAAtaque").val());
    itemBAtaque = parseInt($("#itemBAtaque").val());
    itemCAtaque = parseInt($("#itemCAtaque").val());
    itemDAtaque = parseInt($("#itemDAtaque").val());
    itemEAtaque = parseInt($("#itemEAtaque").val());
    itemEAtaqueEquipamento = parseInt($("#itemEAtaqueEquipamento").val());
    itemFAtaque = parseInt($("#itemFAtaque").val());
    itemGAtaque = parseInt($("#itemGAtaque").val());
    itemHAtaque = parseInt($("#itemHAtaque").val());
    itemIAtaque = parseInt($("#itemIAtaque").val());
    flechaAtaque = parseInt($("#flechaAtaque").val());

    itemAAtaqueArmaPorcentagem = parseInt($("#itemAAtaqueArmaPorcentagem").val());
    itemBAtaqueArmaPorcentagem = parseInt($("#itemBAtaqueArmaPorcentagem").val());
    itemCAtaqueArmaPorcentagem = parseInt($("#itemCAtaqueArmaPorcentagem").val());
    itemDAtaqueArmaPorcentagem = parseInt($("#itemDAtaqueArmaPorcentagem").val());
    itemEAtaqueArmaPorcentagem = parseInt($("#itemEAtaqueArmaPorcentagem").val());
    itemFAtaqueArmaPorcentagem = parseInt($("#itemFAtaqueArmaPorcentagem").val());
    itemGAtaqueArmaPorcentagem = parseInt($("#itemGAtaqueArmaPorcentagem").val());
    itemHAtaqueArmaPorcentagem = parseInt($("#itemHAtaqueArmaPorcentagem").val());
    itemIAtaqueArmaPorcentagem = parseInt($("#itemIAtaqueArmaPorcentagem").val());

    itemADanoFisico = parseInt($("#itemADanoFisico").val());
    itemBDanoFisico = parseInt($("#itemBDanoFisico").val());
    itemCDanoFisico = parseInt($("#itemCDanoFisico").val());
    itemDDanoFisico = parseInt($("#itemDDanoFisico").val());
    itemEDanoFisico = parseInt($("#itemEDanoFisico").val());
    itemFDanoFisico = parseInt($("#itemFDanoFisico").val());
    itemGDanoFisico = parseInt($("#itemGDanoFisico").val());
    itemHDanoFisico = parseInt($("#itemHDanoFisico").val());
    itemIDanoFisico = parseInt($("#itemIDanoFisico").val());

    itemADanoMVP = parseInt($("#itemADanoMVP").val());
    itemBDanoMVP = parseInt($("#itemBDanoMVP").val());
    itemCDanoMVP = parseInt($("#itemCDanoMVP").val());
    itemDDanoMVP = parseInt($("#itemDDanoMVP").val());
    itemEDanoMVP = parseInt($("#itemEDanoMVP").val());
    itemFDanoMVP = parseInt($("#itemFDanoMVP").val());
    itemGDanoMVP = parseInt($("#itemGDanoMVP").val());
    itemHDanoMVP = parseInt($("#itemHDanoMVP").val());
    itemIDanoMVP = parseInt($("#itemIDanoMVP").val());

    itemADanoDistancia = parseInt($("#itemADanoDistancia").val());
    itemBDanoDistancia = parseInt($("#itemBDanoDistancia").val());
    itemCDanoDistancia = parseInt($("#itemCDanoDistancia").val());
    itemDDanoDistancia = parseInt($("#itemDDanoDistancia").val());
    itemEDanoDistancia = parseInt($("#itemEDanoDistancia").val());
    itemFDanoDistancia = parseInt($("#itemFDanoDistancia").val());
    itemGDanoDistancia = parseInt($("#itemGDanoDistancia").val());
    itemHDanoDistancia = parseInt($("#itemHDanoDistancia").val());
    itemIDanoDistancia = parseInt($("#itemIDanoDistancia").val());

    itemADisparoTriploPorcentagem = parseInt($("#itemADisparoTriploPorcentagem").val());
    itemBDisparoTriploPorcentagem = parseInt($("#itemBDisparoTriploPorcentagem").val());
    itemCDisparoTriploPorcentagem = parseInt($("#itemCDisparoTriploPorcentagem").val());
    itemDDisparoTriploPorcentagem = parseInt($("#itemDDisparoTriploPorcentagem").val());
    itemEDisparoTriploPorcentagem = parseInt($("#itemEDisparoTriploPorcentagem").val());
    itemFDisparoTriploPorcentagem = parseInt($("#itemFDisparoTriploPorcentagem").val());
    itemGDisparoTriploPorcentagem = parseInt($("#itemGDisparoTriploPorcentagem").val());
    itemHDisparoTriploPorcentagem = parseInt($("#itemHDisparoTriploPorcentagem").val());
    itemIDisparoTriploPorcentagem = parseInt($("#itemIDisparoTriploPorcentagem").val());

    itemADanoRacial = parseInt($("#itemADanoRacial").val());
    itemBDanoRacial = parseInt($("#itemBDanoRacial").val());
    itemCDanoRacial = parseInt($("#itemCDanoRacial").val());
    itemDDanoRacial = parseInt($("#itemDDanoRacial").val());
    itemEDanoRacial = parseInt($("#itemEDanoRacial").val());
    itemFDanoRacial = parseInt($("#itemFDanoRacial").val());
    itemGDanoRacial = parseInt($("#itemGDanoRacial").val());
    itemHDanoRacial = parseInt($("#itemHDanoRacial").val());
    itemIDanoRacial = parseInt($("#itemIDanoRacial").val());

    itemADanoPropriedade = parseInt($("#itemADanoPropriedade").val());
    itemBDanoPropriedade = parseInt($("#itemBDanoPropriedade").val());
    itemCDanoPropriedade = parseInt($("#itemCDanoPropriedade").val());
    itemDDanoPropriedade = parseInt($("#itemDDanoPropriedade").val());
    itemEDanoPropriedade = parseInt($("#itemEDanoPropriedade").val());
    itemFDanoPropriedade = parseInt($("#itemFDanoPropriedade").val());
    itemGDanoPropriedade = parseInt($("#itemGDanoPropriedade").val());
    itemHDanoPropriedade = parseInt($("#itemHDanoPropriedade").val());
    itemIDanoPropriedade = parseInt($("#itemIDanoPropriedade").val());

    itemADanoTamanho = parseInt($("#itemADanoTamanho").val());
    itemBDanoTamanho = parseInt($("#itemBDanoTamanho").val());
    itemCDanoTamanho = parseInt($("#itemCDanoTamanho").val());
    itemDDanoTamanho = parseInt($("#itemDDanoTamanho").val());
    itemEDanoTamanho = parseInt($("#itemEDanoTamanho").val());
    itemFDanoTamanho = parseInt($("#itemFDanoTamanho").val());
    itemGDanoTamanho = parseInt($("#itemGDanoTamanho").val());
    itemHDanoTamanho = parseInt($("#itemHDanoTamanho").val());
    itemIDanoTamanho = parseInt($("#itemIDanoTamanho").val());

    hardDEF = parseInt($("#hardDEF").val());

    reducaoTamanho = parseFloat($("#tamanho").val());
    if ($("#cartaArco2").val() == "4137" || $("#itemSapatos").val() == "470056") { reducaoTamanho = 1; }

    if($("#itemAcessorio1").val() == "28492b" || $("#itemAcessorio2").val() == "28492b") { porcentagemDisparoTriplo = porcentagemDisparoTriplo + 100; }

    somatoriaItensConjuracaoVariavel = itemAConjuracaoVariavel + itemBConjuracaoVariavel + itemCConjuracaoVariavel + itemDConjuracaoVariavel + itemEConjuracaoVariavel + itemFConjuracaoVariavel + itemGConjuracaoVariavel + itemHConjuracaoVariavel + itemIConjuracaoVariavel;

    if(somatoriaItensConjuracaoVariavel > 100) { somatoriaItensConjuracaoVariavel = 100; }

    reducaoVariavelAtributos = ( (DES * 2) + (INT) ) / 530;

    if(reducaoVariavelAtributos > 1) { reducaoVariavelAtributos = 1; }

    tempoConjuracaoFinal = tempoConjuracaoBase * (1-reducaoVariavelAtributos) * (1 - (somatoriaItensConjuracaoVariavel / 100));

    somatoriaItensPosConjuracao = itemAPosConjuracao + itemBPosConjuracao + itemCPosConjuracao + itemDPosConjuracao + itemEPosConjuracao + itemFPosConjuracao + itemGPosConjuracao + itemHPosConjuracao + itemIPosConjuracao;

    if(somatoriaItensPosConjuracao > 100) { somatoriaItensPosConjuracao = 100; }

    tempoPosConjuracaoFinal = tempoPosConjuracaoBase - (tempoPosConjuracaoBase * (somatoriaItensPosConjuracao / 100));

    velocidadeAnimacao = 1 / ( 50 / (200 - ASPD) ) * 1;

    if(velocidadeAnimacao > tempoPosConjuracaoFinal) { esperaHabilidade = velocidadeAnimacao; }
    else { esperaHabilidade = tempoPosConjuracaoFinal; }

    golpesPorSegundo = 1 / (tempoConjuracaoFinal + esperaHabilidade);

    somatoriaItensIgnorarDefesa = itemAIgnorarDefesa + itemBIgnorarDefesa + itemCIgnorarDefesa + itemDIgnorarDefesa + itemEIgnorarDefesa + itemFIgnorarDefesa + itemGIgnorarDefesa + itemHIgnorarDefesa + itemIIgnorarDefesa;

    if(somatoriaItensIgnorarDefesa > 100) { somatoriaItensIgnorarDefesa = 100; }

    somatoriaItensIgnorarDefesa = 1 - (somatoriaItensIgnorarDefesa / 100);

    defesaMonstroIgnorada = hardDEF * somatoriaItensIgnorarDefesa;

    if ($("#cartaArco1").val() == "4399") { ataqueInvestigar = defesaMonstroIgnorada / 2; defesaMonstroIgnorada = 0; }

    reducaoDanoMostro = (4000 + defesaMonstroIgnorada) / (4000 + (defesaMonstroIgnorada * 10));

    somatoriaItensAtaque = itemAAtaque + itemBAtaque + itemCAtaque + itemDAtaque + flechaAtaque + itemEAtaqueEquipamento + itemFAtaque + itemGAtaque + itemHAtaque + itemIAtaque;

    somatoriaItensAtaquePorcentagem = 1 + ((itemAAtaqueArmaPorcentagem + itemBAtaqueArmaPorcentagem + itemCAtaqueArmaPorcentagem + itemDAtaqueArmaPorcentagem + itemEAtaqueArmaPorcentagem + itemFAtaqueArmaPorcentagem + itemGAtaqueArmaPorcentagem + itemHAtaqueArmaPorcentagem + itemIAtaqueArmaPorcentagem) / 100) + (DES / 200);

    somatoriaItensDanoFisico = 1 + ((itemADanoFisico + itemBDanoFisico + itemCDanoFisico + itemDDanoFisico + itemEDanoFisico + itemFDanoFisico + itemGDanoFisico + itemHDanoFisico + itemIDanoFisico) / 100);

    somatoriaItensDanoMVP = ((itemADanoMVP + itemBDanoMVP + itemCDanoMVP + itemDDanoMVP + itemEDanoMVP + itemFDanoMVP + itemGDanoMVP + itemHDanoMVP + itemIDanoMVP) / 100);

    somatoriaItensDanoFisico += somatoriaItensDanoMVP;

    somatoriaItensDanoDistancia = 1 + ((itemADanoDistancia + itemBDanoDistancia + itemCDanoDistancia + itemDDanoDistancia + itemEDanoDistancia + itemFDanoDistancia + itemGDanoDistancia + itemHDanoDistancia + itemIDanoDistancia) / 100);

    somatoriaItensDisparoTriploPorcentagem = 1 + ((itemADisparoTriploPorcentagem + itemBDisparoTriploPorcentagem + itemCDisparoTriploPorcentagem + itemDDisparoTriploPorcentagem + itemEDisparoTriploPorcentagem + itemFDisparoTriploPorcentagem + itemGDisparoTriploPorcentagem + itemHDisparoTriploPorcentagem + itemIDisparoTriploPorcentagem) / 100);

    somatoriaItensDanoRacial = 1 + ((itemADanoRacial + itemBDanoRacial + itemCDanoRacial + itemDDanoRacial + itemEDanoRacial + itemFDanoRacial + itemGDanoRacial + itemHDanoRacial + itemIDanoRacial) / 100);

    somatoriaItensDanoPropriedade = 1 + ((itemADanoPropriedade + itemBDanoPropriedade + itemCDanoPropriedade + itemDDanoPropriedade + itemEDanoPropriedade + itemFDanoPropriedade + itemGDanoPropriedade + itemHDanoPropriedade + itemIDanoPropriedade) / 100);

    somatoriaItensDanoTamanho = 1 + ((itemADanoTamanho + itemBDanoTamanho + itemCDanoTamanho + itemDDanoTamanho + itemEDanoTamanho + itemFDanoTamanho + itemGDanoTamanho + itemHDanoTamanho + itemIDanoTamanho) / 100);

    danoCausadoFinal = (((itemEAtaque * somatoriaItensAtaquePorcentagem * somatoriaItensDanoFisico * reducaoTamanho * somatoriaItensDanoRacial * somatoriaItensDanoPropriedade * somatoriaItensDanoTamanho) + somatoriaItensAtaque + DES + ataqueInvestigar) * (porcentagemDisparoTriplo / 100) * somatoriaItensDanoDistancia * somatoriaItensDisparoTriploPorcentagem * multiplicadorElemental) * reducaoDanoMostro;

    DPS = danoCausadoFinal * golpesPorSegundo;

    multiplicadorElemental = multiplicadorElemental * 100;

    /////
    //alert("Conjuração variável final: "+tempoConjuracaoFinal+"\nVelocidade da animação: "+velocidadeAnimacao+"\nTempo de conjuração final: "+tempoPosConjuracaoFinal+"\nTempo de espera da habilidade: "+esperaHabilidade+"\nGolpes por segundo: "+golpesPorSegundo);
    alert("Pontuação de DPS: " + DPS.toFixed(0) + "\nPontuação de dano por Disparo Triplo: " + danoCausadoFinal.toFixed(0) + "\n\nQuantidade de Disparos Triplo por segundo: " + golpesPorSegundo.toFixed(2) + "\nTempo de conjuração da habilidade: " + tempoConjuracaoFinal.toFixed(2) + "s\nTempo de espera para utilizar novamente: " + esperaHabilidade.toFixed(2) + "s\nTempo de pós conjuração final: " + tempoPosConjuracaoFinal.toFixed(2) + "s\nTempo de animação da habilidade: " + velocidadeAnimacao.toFixed(2) + "s\n\nRedução de dano do monstro: " + parseFloat((1-reducaoDanoMostro)*100).toFixed(2) + "%\nVantagem elemental: " + multiplicadorElemental + "%");

  });

  function colorirInput() {
    $("input.numero").each(function(){
      if (parseInt($(this).val()) > 0) { $(this).css("background","#d1ffda"); }
      if (parseInt($(this).val()) == 0) { $(this).css("background","#ffffff"); }
      if (parseInt($(this).val()) < 0) { $(this).css("background","#ffd1d3"); }
    });
  }

  colorirInput();

  $("input.numero").change(function(){
    colorirInput();
  });

  function resetarTopo() {
    imagemTopo = "https://i.imgur.com/OWGO9bw.png"; itemAConjuracaoVariavel = 0; itemAIgnorarDefesa = 0; itemAPosConjuracao = 0; itemAAtaque = 0; itemAAtaqueArmaPorcentagem = 0; itemADanoFisico = 0; itemADanoMVP = 0; itemADanoDistancia = 0; itemADisparoTriploPorcentagem = 0; itemADanoFisico = 0; itemADanoRacial = 0; itemADanoPropriedade = 0; itemADanoTamanho = 0; itemAAgilidade = 0; itemADestreza = 0; itemAInteligencia = 0;
  }

  function resetarMeio() {
    imagemMeio = "https://i.imgur.com/OWGO9bw.png"; itemBConjuracaoVariavel = 0; itemBIgnorarDefesa = 0; itemBPosConjuracao = 0; itemBAtaque = 0; itemBAtaqueArmaPorcentagem = 0; itemBDanoFisico = 0; itemBDanoMVP = 0; itemBDanoDistancia = 0; itemBDisparoTriploPorcentagem = 0; itemBDanoFisico = 0; itemBDanoRacial = 0; itemBDanoPropriedade = 0; itemBDanoTamanho = 0; itemBAgilidade = 0; itemBDestreza = 0; itemBInteligencia = 0;
  }

  function resetarBaixo() {
    imagemBaixo = "https://i.imgur.com/OWGO9bw.png"; itemCConjuracaoVariavel = 0; itemCIgnorarDefesa = 0; itemCPosConjuracao = 0; itemCAtaque = 0; itemCAtaqueArmaPorcentagem = 0; itemCDanoFisico = 0; itemCDanoMVP = 0; itemCDanoDistancia = 0; itemCDisparoTriploPorcentagem = 0; itemCDanoFisico = 0; itemCDanoRacial = 0; itemCDanoPropriedade = 0; itemCDanoTamanho = 0; itemCAgilidade = 0; itemCDestreza = 0; itemCInteligencia = 0;
  }

  function resetarArmadura() {
    imagemArmadura = "https://i.imgur.com/OWGO9bw.png"; itemDConjuracaoVariavel = 0; itemDIgnorarDefesa = 0; itemDPosConjuracao = 0; itemDAtaque = 0; itemDAtaqueArmaPorcentagem = 0; itemDDanoFisico = 0; itemDDanoMVP = 0; itemDDanoDistancia = 0; itemDDisparoTriploPorcentagem = 0; itemDDanoFisico = 0; itemDDanoRacial = 0; itemDDanoPropriedade = 0; itemDDanoTamanho = 0; itemDAgilidade = 0; itemDDestreza = 0; itemDInteligencia = 0;
  }

  function resetarArco() {
    imagemArco = "https://i.imgur.com/OWGO9bw.png"; itemEConjuracaoVariavel = 0; itemEIgnorarDefesa = 0; itemEPosConjuracao = 0; itemEAtaque = 0; itemEAtaqueEquipamento = 0; flechaAtaque = 0; itemEAtaqueArmaPorcentagem = 0; itemEDanoFisico = 0; itemEDanoMVP = 0; itemEDanoDistancia = 0; itemEDisparoTriploPorcentagem = 0; itemEDanoFisico = 0; itemEDanoRacial = 0; itemEDanoPropriedade = 0; itemEDanoTamanho = 0; itemEAgilidade = 0; itemEDestreza = 0; itemEInteligencia = 0;
  }

  function resetarCapa() {
    imagemCapa = "https://i.imgur.com/OWGO9bw.png"; itemFConjuracaoVariavel = 0; itemFIgnorarDefesa = 0; itemFPosConjuracao = 0; itemFAtaque = 0; itemFAtaqueArmaPorcentagem = 0; itemFDanoFisico = 0; itemFDanoMVP = 0; itemFDanoDistancia = 0; itemFDisparoTriploPorcentagem = 0; itemFDanoFisico = 0; itemFDanoRacial = 0; itemFDanoPropriedade = 0; itemFDanoTamanho = 0; itemFAgilidade = 0; itemFDestreza = 0; itemFInteligencia = 0;
  }

  function resetarSapatos() {
    imagemSapatos = "https://i.imgur.com/OWGO9bw.png"; itemGConjuracaoVariavel = 0; itemGIgnorarDefesa = 0; itemGPosConjuracao = 0; itemGAtaque = 0; itemGAtaqueArmaPorcentagem = 0; itemGDanoFisico = 0; itemGDanoMVP = 0; itemGDanoDistancia = 0; itemGDisparoTriploPorcentagem = 0; itemGDanoFisico = 0; itemGDanoRacial = 0; itemGDanoPropriedade = 0; itemGDanoTamanho = 0; itemGAgilidade = 0; itemGDestreza = 0; itemGInteligencia = 0;
  }

  function resetarAcessorio1() {
    imagemAcessorio1 = "https://i.imgur.com/OWGO9bw.png"; itemHConjuracaoVariavel = 0; itemHIgnorarDefesa = 0; itemHPosConjuracao = 0; itemHAtaque = 0; itemHAtaqueArmaPorcentagem = 0; itemHDanoFisico = 0; itemHDanoMVP = 0; itemHDanoDistancia = 0; itemHDisparoTriploPorcentagem = 0; itemHDanoFisico = 0; itemHDanoRacial = 0; itemHDanoPropriedade = 0; itemHDanoTamanho = 0; itemHAgilidade = 0; itemHDestreza = 0; itemHInteligencia = 0;
  }

  function resetarAcessorio2() {
    imagemAcessorio2 = "https://i.imgur.com/OWGO9bw.png"; itemIConjuracaoVariavel = 0; itemIIgnorarDefesa = 0; itemIPosConjuracao = 0; itemIAtaque = 0; itemIAtaqueArmaPorcentagem = 0; itemIDanoFisico = 0; itemIDanoMVP = 0; itemIDanoDistancia = 0; itemIDisparoTriploPorcentagem = 0; itemIDanoFisico = 0; itemIDanoRacial = 0; itemIDanoPropriedade = 0; itemIDanoTamanho = 0; itemIAgilidade = 0; itemIDestreza = 0; itemIInteligencia = 0;
  }

  function chique() {
    imagemTopo = "https://i.imgur.com/xEnTLQu.png";
    itemAAtaque = parseInt(parseInt($("#refinoItemTopo").val()) / 2) * 15;
    if (parseInt($("#refinoItemTopo").val()) >= 7) { itemADanoDistancia = itemADanoDistancia + 7; } if (parseInt($("#refinoItemTopo").val()) >= 11) { itemADanoDistancia = itemADanoDistancia + 5; }
    if ($("#itemCapa").val() == "2525") { itemADisparoTriploPorcentagem = itemADisparoTriploPorcentagem + (parseInt(parseInt($("#refinoItemCapa").val()) / 2) * 15); }
    if (parseInt($("#refinoItemTopo").val()) >= 9) { itemAAtaqueArmaPorcentagem = itemAAtaqueArmaPorcentagem + 5; }
  }

  function memoravel() {
    imagemTopo = "https://static.divine-pride.net/images/items/item/18975.png";
    itemADestreza = 1;
    itemAAgilidade = 1;
    itemAInteligencia = 1;
    itemAAtaque = parseInt($("#refinoItemTopo").val()) * 4;
    itemADisparoTriploPorcentagem = parseInt(parseInt($("#refinoItemTopo").val()) / 2) * 25;
    itemADanoDistancia = 20;
  }

  function qgeneral() {
    imagemTopo = "https://static.divine-pride.net/images/items/item/19379.png";
    itemADestreza = 5;
    itemAAgilidade = 5;
    itemAPosConjuracao = parseInt($("#refinoItemTopo").val()) * 2;
    itemADanoDistancia = 5;
    if(parseInt($("#refinoItemTopo").val()) >= 9) { itemADanoDistancia += 10; }
    if(parseInt($("#refinoItemTopo").val()) >= 11) { itemADanoDistancia += 10; }
  }

  function pluma() {
    imagemTopo = "https://static.divine-pride.net/images/items/item/19409.png";
    itemADanoMVP = 50;
    itemAIgnorarDefesa = 100;
  }

  function cecila() {
    imagemTopo = "https://i.imgur.com/CaWKJFZ.png";
    itemADestreza = itemADestreza + 2;
    itemADanoDistancia = itemADanoDistancia + 10;
  }

  function cecilb() {
    imagemTopo = "https://i.imgur.com/CaWKJFZ.png";
    itemADestreza = itemADestreza + 2;
    itemADanoDistancia = itemADanoDistancia + 10;
    itemAPosConjuracao = 100;
  }

  function xogunato() {
    imagemTopo = "https://i.imgur.com/iqqXShv.png";
    itemAAtaque = parseInt(refinoTopo / 2) * 15;
    if (refinoTopo >= 9) { itemAAtaqueArmaPorcentagem = itemAAtaqueArmaPorcentagem + 5; }
  }

  function copas() {
    imagemTopo = "https://i.imgur.com/I1coani.png";
    itemADestreza = itemADestreza + 3;
    itemADanoDistancia = itemADanoDistancia + 4;
    if (parseInt($("#nivelPersonagem").val()) <= 129) { itemADestreza = itemADestreza + parseInt(refinoTopo / 2); } if (parseInt($("#nivelPersonagem").val()) > 129) { itemADestreza = itemADestreza + refinoTopo; }
    if ($("#itemArco").val() == "1730" || $("#itemArco").val() == "1731" || $("#itemArco").val() == "1732" || $("#itemArco").val() == "1733") { itemADanoDistancia = itemADanoDistancia + 45; }
  }

  function serafim() {
    imagemMeio = "https://i.imgur.com/NJZnAj4.png";
    itemBAtaque = parseInt(parseInt($("#int").val()) / 8) * 5;
    itemBConjuracaoVariavel = parseInt(parseInt($("#int").val()) / 8) * (-1);
    if (parseInt($("#int").val()) >= 108) { itemBAtaque = itemBAtaque + 50; itemBConjuracaoVariavel = itemBConjuracaoVariavel - 4; }
    if (parseInt($("#int").val()) >= 120) { itemBAtaque = itemBAtaque + 125; itemBConjuracaoVariavel = itemBConjuracaoVariavel - 6; }
  }

  function heranca() {
    imagemMeio = "https://static.divine-pride.net/images/items/item/410026.png";
    itemBAtaque = parseInt($("#nivelPersonagem").val());
  }

  function tapaolho() {
    imagemMeio = "https://static.divine-pride.net/images/items/item/19444.png";
    if($("#cartaMeio").val() == "4143" || $("#cartaTopo").val() == "4143") {
      itemBAtaque = parseInt(parseInt($("#vit").val()) / 10) * 30;
    }
  }

  function ornamento() {
    imagemMeio = "https://static.divine-pride.net/images/items/item/19452.png";
    itemBPosConjuracao = parseInt(parseInt($("#agi").val()) / 18) * 2;
    itemBAtaque = parseInt(parseInt($("#sor").val()) / 18) * 15;
  }

  function discretas() {
    imagemMeio = "https://static.divine-pride.net/images/items/item/19495.png";
    itemBAgilidade = 10;
    itemBDestreza = 10;
    itemBInteligencia = 10;
    if($("#itemArmadura").val() == "2375") {
      itemBDestreza += 4;
      itemBAtaque += parseInt($("#refinoItemArmadura").val()) * 15;
    }
    if($("#itemSapatos").val() == "2433") {
      itemBAtaque += parseInt($("#refinoItemArmadura").val()) * 20;
    }
  }

  function retro() {
    imagemMeio = "https://i.imgur.com/GXWZMDp.png";
    itemBPosConjuracao = 10;
  }

  function grifo() {
    imagemMeio = "https://i.imgur.com/igqhUJn.png";
  }

  function bionicos() {
    imagemMeio = "https://i.imgur.com/Cq6VblH.png";
    itemBDestreza = 1;
    itemBDanoFisico = 3;
  }

  function familiar() {
    imagemBaixo = "https://i.imgur.com/KnqO2Co.png";
    itemCPosConjuracao = 5;
    itemCDanoRacial = 2;
  }

  function ombreiras() {
    imagemBaixo = "https://static.divine-pride.net/images/items/item/420028.png";
    itemCPosConjuracao = (parseInt((parseInt($("#agi").val()) + parseInt($("#agi").val())) / 50)) * 3;
  }

  function descolado() {
    imagemBaixo = "https://i.imgur.com/pxJEUI0.png";
    itemCPosConjuracao = 5;
  }

  function rosario() {
    imagemBaixo = "https://i.imgur.com/3x6wktn.png";
    if ($("#itemMeio").val() == "18823") {
      itemCAtaque = 10;
      if(parseInt($("#agi").val()) >= 108) {
        itemCAtaque = itemCAtaque + 20;
      }
      if(parseInt($("#agi").val()) >= 120) {
        itemCAtaque = itemCAtaque + 40;
      }
    }
  }

  function pouring() {
    imagemBaixo = "https://i.imgur.com/6fkfBf9.png";
    itemCAgilidade = 2;
    itemCDestreza = 2;
    itemCInteligencia = 2;
  }

  function halito() {
    imagemBaixo = "https://i.imgur.com/M8krEHz.png";
    if ($("#itemCapa").val() == "20718a" || $("#itemCapa").val() == "20718b") {
      itemCConjuracaoVariavel = parseInt($("#int").val() / 20) * 4;
      itemCDanoDistancia = parseInt($("#des").val() / 20);
    }
  }

  function fugitivo() {
    imagemBaixo = "https://i.imgur.com/0gi2oiY.png";
    itemCAtaque = 5;
  }

  function khalitzburg() {
    imagemArmadura = "https://i.imgur.com/sJnds93.png";
    var refinoArmadura = parseInt($("#refinoItemArmadura").val());
    if (refinoArmadura > 15) { refinoArmadura = 15; }
    itemDDanoDistancia = parseInt(refinoArmadura / 3) * 6;
  }

  function abissal() {
    imagemArmadura = "https://i.imgur.com/ZECpolH.png";
    if (parseInt($("#refinoItemArmadura").val()) >= 7) { itemDDanoRacial = 10; itemDDanoPropriedade = 10; }
    if (parseInt($("#refinoItemArmadura").val()) >= 9) { itemDDanoRacial = itemDDanoRacial + 15; itemDDanoPropriedade = itemDDanoPropriedade + 15; }
    if (parseInt($("#refinoItemArmadura").val()) >= 11) { itemDDanoRacial = itemDDanoRacial + 15; itemDDanoPropriedade = itemDDanoPropriedade + 15; }
  }

  function senshi() {
    imagemArmadura = "https://static.divine-pride.net/images/items/item/15283.png";
    itemDAtaque = 10;
    itemDIgnorarDefesa = 10;
    if (parseInt($("#refinoItemArmadura").val()) >= 7) { itemDAtaque += 20; itemDIgnorarDefesa += 20; }
    if (parseInt($("#refinoItemArmadura").val()) >= 8) { itemDAtaque += 20; itemDIgnorarDefesa += 20; }
    if (parseInt($("#refinoItemArmadura").val()) >= 9) { itemDAtaque += 30; itemDIgnorarDefesa += 20; }
  }

  function cbranco() {
    imagemArmadura = "https://static.divine-pride.net/images/items/item/15407.png";
    itemDPosConjuracao = 5 + (parseInt($("#refinoItemArmadura").val()) * 2);
    if (parseInt($("#refinoItemArmadura").val()) >= 7) { itemDDanoRacial = 10; itemDDanoPropriedade = 10; }
    if (parseInt($("#refinoItemArmadura").val()) >= 9) { itemDDanoRacial = itemDDanoRacial + 15; itemDDanoPropriedade = itemDDanoPropriedade + 15; }
    if (parseInt($("#refinoItemArmadura").val()) >= 11) { itemDDanoRacial = itemDDanoRacial + 15; itemDDanoPropriedade = itemDDanoPropriedade + 15; }
  }

  function adiabolus() {
    imagemArmadura = "https://static.divine-pride.net/images/items/item/2375.png";
    itemDDestreza = 1;
  }

  function vermelho() {
    imagemArmadura = "https://i.imgur.com/8pOV2Wf.png";
    itemDAgilidade = 1;
    itemDDestreza = 1;
    itemDInteligencia = 1;
    if (parseInt($("#refinoItemArmadura").val()) >= 6) { itemDDanoMVP = 10; }
    if (parseInt($("#refinoItemArmadura").val()) >= 11) { itemDDanoMVP = itemDDanoMVP + 10; }
  }

  function colete() {
    imagemArmadura = "https://i.imgur.com/5p3HJq7.png";
    itemDAtaque = 60;
    if (parseInt($("#itemCapa").val()) == 20773) { itemDPosConjuracao = 10; }
    if (parseInt($("#itemCapa").val()) == 20773 && parseInt($("#nivelPersonagem").val()) >= 130) { itemDPosConjuracao = 20; }
  }

  function vorags() {
    imagemArmadura = "https://i.imgur.com/IeMptmo.png";
    itemDDanoDistancia = 2;
    if (parseInt($("#refinoItemArmadura").val()) == 8) { itemDDanoDistancia = 4; }
    if (parseInt($("#refinoItemArmadura").val()) >= 9) { itemDDanoDistancia = 7; }
    if ($("#itemArco").val() == "1730" || $("#itemArco").val() == "1731" || $("#itemArco").val() == "1732" || $("#itemArco").val() == "1733") { itemDDanoDistancia = itemDDanoDistancia + 20; }
  }

  function ocultacaoa() {
    imagemArmadura = "https://i.imgur.com/YVg16tF.png";
    itemDDisparoTriploPorcentagem = 10;
  }

  function ocultacaob() {
    imagemArmadura = "https://i.imgur.com/YVg16tF.png";
    itemDDisparoTriploPorcentagem = 10;
    itemDDanoFisico = 10;
  }

  function demoniaco() {
    imagemArco = "https://i.imgur.com/u3OhyOC.png";
    itemEDanoDistancia = 50;
    flechaAtaque = 30;
    itemEAtaque = 130 + (refinoItemArco * 7);
  }

  function rubi() {
    imagemArco = "https://i.imgur.com/1YZ30q6.png";
    refinoLimite = refinoItemArco;
    if(refinoLimite > 15) refinoLimite = 15;
    flechaAtaque = 50;
    itemEAtaqueEquipamento = (refinoLimite * refinoLimite) + (parseInt((parseInt($("#nivelPersonagem").val()) - 70) / 10) * 5);
    itemEAtaque = 120 + (refinoItemArco * 5);
  }

  function aancestral() {
    imagemArco = "https://i.imgur.com/JkWjOiM.png";
    refinoArco = parseInt($("#refinoItemArco").val());
    itemEDanoDistancia = parseInt(refinoArco / 3) * 4;
    flechaAtaque = 30;
    itemEAtaqueEquipamento = (parseInt(refinoArco / 2) * 10);
    itemEAtaque = 180 + (refinoItemArco * 7);
  }

  function bancestral() {
    imagemArco = "https://i.imgur.com/ImJGh9a.png";
    refinoArco = parseInt($("#refinoItemArco").val());
    if(refinoArco >= 11) {
      itemEDanoDistancia = 5;
    }
    flechaAtaque = 30;
    itemEAtaqueEquipamento = (parseInt(refinoArco / 2) * 10);
    itemEAtaque = 180 + (refinoItemArco * 7);
  }

  function orc() {
    imagemArco = "https://i.imgur.com/AQ4RePT.png";
    itemEDanoDistancia = 50;
    flechaAtaque = 40;
    itemEAtaque = 120 + (refinoItemArco * 5);
  }

  function catapulta() {
    imagemArco = "https://i.imgur.com/mKFlzcD.png";
    itemEDisparoTriploPorcentagem = refinoItemArco * 2;
    itemEAtaque = 150 + (refinoItemArco * 7);
  }

  function elementais(elemental) {
    if (elemental == "1730") { imagemArco = "https://i.imgur.com/yCMeRCn.png"; }
    if (elemental == "1731") { imagemArco = "https://i.imgur.com/Rg3odWT.png"; }
    if (elemental == "1732") { imagemArco = "https://i.imgur.com/OozTBB5.png"; }
    if (elemental == "1733") { imagemArco = "https://i.imgur.com/weiirpG.png"; }
    itemEDanoDistancia = 25;
    flechaAtaque = 30;
    itemEAtaque = 95 + (refinoItemArco * 5);
    if ($("#itemTopo").val() == "19019") { resetarTopo(); copas(); cartaTopo(); definirTopo(); }
    if ($("#itemArmadura").val() == "19048") { resetarArmadura(); vorags(); cartaArmadura(); definirArmadura(); }
  }

  function marques() {
    imagemCapa = "https://i.imgur.com/NTNJMii.png";
    itemFAgilidade = 1;
    if ($("#itemTopo").val() == "19296") { resetarTopo(); chique(); cartaTopo(); definirTopo(); }
  }

  function arcanjoa() {
    imagemCapa = "https://i.imgur.com/5CBTBzA.png";
    itemFAgilidade = 1;
    itemFDestreza = 1;
    itemFInteligencia = 1;
    itemFDanoDistancia = parseInt($("#des").val() / 20) + 14;
    if ($("#itemAcessorio1").val() == "28438" || $("#itemAcessorio2").val() == "28438") { itemFPosConjuracao = 10; itemFDanoDistancia = itemFDanoDistancia + 10; }
  }

  function arcanjob() {
    imagemCapa = "https://i.imgur.com/5CBTBzA.png";
    itemFAgilidade = 1;
    itemFDestreza = 1;
    itemFInteligencia = 1;
    itemFDanoDistancia = parseInt($("#des").val() / 20);
    itemFAtaque = 57;
  }

  function motor() {
    imagemCapa = "https://i.imgur.com/dshD7zb.png";
    itemFAtaque = 60;
    if ($("#itemArmadura").val() == "15128") { resetarArmadura(); colete(); cartaArmadura(); definirArmadura(); }
  }

  function mochila() {
    imagemCapa = "https://i.imgur.com/DEzQcvV.png";
    if (parseInt($("#refinoItemCapa").val()) >= 7 && parseInt($("#des").val()) >= 90) { itemFDanoDistancia = 5; }
    if (parseInt($("#refinoItemCapa").val()) >= 9 && parseInt($("#des").val()) >= 90) { itemFDanoDistancia = 10; }
  }

  function mbarao() {
    imagemCapa = "https://static.divine-pride.net/images/items/item/480025.png";
    itemFAtaque = parseInt($("#refinoItemCapa").val()) * 6;
  }

  function mespiritos() {
    imagemCapa = "https://static.divine-pride.net/images/items/item/20973.png";
    itemFPosConjuracao = 5;
    if (parseInt($("#refinoItemCapa").val()) >= 5) { itemFPosConjuracao += 5; }
    if (parseInt($("#refinoItemCapa").val()) >= 7) { itemFPosConjuracao += 5; }
  }

  function mantofor() {
    imagemCapa = "https://static.divine-pride.net/images/items/item/20967.png";
    itemFAtaque = parseInt(($("#refinoItemCapa").val()) / 2) * 10;
    itemFAtaqueArmaPorcentagem = parseInt(($("#refinoItemCapa").val()) / 2);
    itemFAtaque = parseInt(parseInt($("#refinoItemCapa").val()) / 4) * 5;
    if(parseInt($("#refinoItemCapa").val()) >= 7) { itemFAtaqueArmaPorcentagem += 7; }
  }

  function flamingo() {
    imagemCapa = "https://static.divine-pride.net/images/items/item/480081.png";
    if(parseInt($("#refinoItemCapa").val()) >= 7) { itemFAgilidade += 10; itemFDestreza += 10; }
    if(parseInt($("#refinoItemCapa").val()) >= 9) { itemFAgilidade += 10; itemFDestreza += 10; }
    itemFDanoTamanho += 10;
    itemFDisparoTriploPorcentagem += 150;
  }

  function mantodes() {
    imagemCapa = "https://static.divine-pride.net/images/items/item/20967.png";
    itemFAtaque = parseInt(($("#refinoItemCapa").val()) / 2) * 10;
    itemFDanoDistancia = parseInt(($("#refinoItemCapa").val()) / 2);
    if(parseInt($("#refinoItemCapa").val()) >= 7) { itemFAtaqueArmaPorcentagem += 7; }
  }

  function mochileiro() {
    imagemCapa = "https://i.imgur.com/OO6u84L.png";
    itemFDanoDistancia = 2;
    if (parseInt($("#refinoItemCapa").val()) == 8) { itemFDanoDistancia = 4; }
    if (parseInt($("#refinoItemCapa").val()) >= 9) { itemFDanoDistancia = 7; }
  }

  function vermea() {
    imagemCapa = "https://i.imgur.com/6q7PtMK.png";
    itemFDestreza = 9;
    if (parseInt($("#refinoItemCapa").val()) >= 8) { itemFDestreza = 12; }
    if ($("#itemBaixo").val() == "19268") { resetarBaixo(); halito(); definirBaixo(); }
  }

  function vermeb() {
    imagemCapa = "https://i.imgur.com/6q7PtMK.png";
    itemFAgilidade = 9;
    if (parseInt($("#refinoItemCapa").val()) >= 8) { itemFAgilidade = 12; }
    if ($("#itemBaixo").val() == "19268") { resetarBaixo(); halito(); definirBaixo(); }
  }

  function salto() {
    imagemSapatos = "https://static.divine-pride.net/images/items/item/22071.png";
    itemGPosConjuracao = parseInt($("#refinoItemSapatos").val()) * 2;
    itemGConjuracaoVariavel = 10;
    itemGAgilidade = 1 + (parseInt($("#refinoItemSapatos").val()) * 3);
    itemGDestreza = 1 + (parseInt($("#refinoItemSapatos").val()) * 3);
    itemGInteligencia = 1 + (parseInt($("#refinoItemSapatos").val()) * 3);
  }

  function sandalias() {
    imagemSapatos = "https://static.divine-pride.net/images/items/item/470075.png";
    itemGAtaque = parseInt($("#nivelPersonagem").val());
  }

  function perseguidor() {
    imagemSapatos = "https://static.divine-pride.net/images/items/item/470056.png";
    itemGIgnorarDefesa = 100;
    itemGDanoFisico = 20;
  }

  function bdiabolus() {
    imagemSapatos = "https://static.divine-pride.net/images/items/item/WWWWW.png";
  }

  function temporaisa() {
    imagemSapatos = "https://i.imgur.com/7ERarH1.png";
    itemGDestreza = parseInt(parseInt($("#refinoItemSapatos").val()) / 3) * 3;
    itemGDanoDistancia = 8;
    if (parseInt($("#des").val()) >= 120) { itemGDanoDistancia = itemGDanoDistancia + 5; }
  }

  function temporaisb() {
    imagemSapatos = "https://i.imgur.com/7ERarH1.png";
    itemGDestreza = 200 + parseInt(parseInt($("#refinoItemSapatos").val()) / 3) * 3;
    itemGDanoDistancia = 8;
    if (parseInt($("#des").val()) >= 120) { itemGDanoDistancia = itemGDanoDistancia + 5; }
  }

  function temporaisc() {
    imagemSapatos = "https://i.imgur.com/7ERarH1.png";
    itemGDestreza = parseInt(parseInt($("#refinoItemSapatos").val()) / 3) * 3;
    itemGAtaque = 24;
    if (parseInt($("#des").val()) >= 120) { itemGDanoDistancia = 5; }
  }

  function temporaisd() {
    imagemSapatos = "https://i.imgur.com/7ERarH1.png";
    itemGDestreza = 200 + parseInt(parseInt($("#refinoItemSapatos").val()) / 3) * 3;
    itemGAtaque = 24;
    if (parseInt($("#des").val()) >= 120) { itemGDanoDistancia = 5; }
  }

  function archangelinga() {
    imagemSapatos = "https://i.imgur.com/TelXkBM.png";
    itemGAgilidade = 1;
    itemGDestreza = 2;
    itemGInteligencia = 1;
    if (parseInt($("#refinoItemSapatos").val()) >= 7) { itemGDanoDistancia = 2; }
    if (parseInt($("#refinoItemSapatos").val()) >= 9) { itemGDanoDistancia = 5; }
    if (parseInt($("#refinoItemSapatos").val()) >= 12) { itemGPosConjuracao = 5; }
  }

  function archangelinga() {
    imagemSapatos = "https://i.imgur.com/TelXkBM.png";
    itemGAgilidade = 1;
    itemGDestreza = 1;
    itemGInteligencia = 1;
    if (parseInt($("#refinoItemSapatos").val()) >= 7) { itemGAtaqueArmaPorcentagem = 2; }
    if (parseInt($("#refinoItemSapatos").val()) >= 9) { itemGAtaqueArmaPorcentagem = 5; }
    if (parseInt($("#refinoItemSapatos").val()) >= 12) { itemGPosConjuracao = 5; }
  }

  function aladas() {
    imagemSapatos = "https://i.imgur.com/LgjGW9J.png";
    itemGDanoDistancia = 2;
    if (parseInt($("#refinoItemSapatos").val()) >= 5) { itemGDanoDistancia = 5; }
    if (parseInt($("#refinoItemSapatos").val()) >= 7) { itemGDanoDistancia = 10; }
  }

  function sombrio() {
    imagemAcessorio1 = "https://i.imgur.com/3dBgHsD.png";
    itemHDisparoTriploPorcentagem = parseInt(parseInt($("#nivelPersonagem").val()) / 3);
  }

  function aesmeralda(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://i.imgur.com/wgmJ00i.png";
      itemHAtaque = 50;
      itemHAgilidade = 5;
      itemHDestreza = 5;
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://i.imgur.com/wgmJ00i.png";
      itemIAtaque = 50;
      itemIAgilidade = 5;
      itemIDestreza = 5;
    }
  }

  function jupiter(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://static.divine-pride.net/images/items/item/32258.png";
      itemHAtaque += parseInt(parseInt($("#sor").val()) / 10) * 15;
      if(parseInt($("#sor").val()) >= 125) {
        itemHDanoMVP += 15;
      }
    }
  }

  function venus(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://static.divine-pride.net/images/items/item/490068.png";
      itemHDanoFisico += parseInt(parseInt($("#agi").val()) / 10);
      if(parseInt($("#agi").val()) >= 125) {
        itemHPosConjuracao += 25;
      }
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://static.divine-pride.net/images/items/item/490068.png";
      itemIDanoDistancia += parseInt(parseInt($("#des").val()) / 10);
    }
  }

  function joiar(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://static.divine-pride.net/images/items/item/490096.png";
      itemHDanoFisico += 10;
      if($("#itemSapatos").val() == "22004e" || $("#itemSapatos").val() == "22004f") {
        itemHAgilidade += 40;
        itemHDanoTamanho += 10;
      }
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://static.divine-pride.net/images/items/item/490096.png";
      itemIDanoFisico += 10;
      if(($("#itemSapatos").val() == "22004e" || $("#itemSapatos").val() == "22004f") && $("#itemAcessorio1").val() != "490096") {
        itemIAgilidade += 40;
        itemIDanoTamanho += 10;
      }
    }
  }

  function fada(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://i.imgur.com/w2xDodr.png";
      itemHDestreza = 2;
      itemHDanoDistancia = 2;
      itemHPosConjuracao = 5;
      if (parseInt($("#des").val()) >= 100) { itemHDanoDistancia = 7; }
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://i.imgur.com/w2xDodr.png";
      itemIDestreza = 2;
      itemIDanoDistancia = 2;
      itemIPosConjuracao = 5;
      if (parseInt($("#des").val()) >= 100) { itemIDanoDistancia = 7; }
    }
    if ($("#itemCapa").val() == "2589a") { resetarCapa(); arcanjoa(); definirCapa(); }
  }

  function esmeralda(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://i.imgur.com/7GUM7xO.png";
      itemHAgilidade = 5;
      itemHDestreza = 5;
      itemHInteligencia = 5;
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://i.imgur.com/7GUM7xO.png";
      itemIAgilidade = 5;
      itemIDestreza = 5;
      itemIInteligencia = 5;
    }
  }

  function diario(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://i.imgur.com/HexWakw.png";
      itemHAgilidade = 5;
      itemHInteligencia = 5;
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://i.imgur.com/HexWakw.png";
      itemIAgilidade = 5;
      itemIInteligencia = 5;
    }
  }

  function oni() {
    imagemAcessorio2 = "https://static.divine-pride.net/images/items/item/28565.png";
    itemIInteligencia = parseInt(parseInt($("#for").val()) / 18) * 3;
    itemIDestreza = parseInt(parseInt($("#vit").val()) / 18) * 3;
    itemIConjuracaoVariavel = parseInt(parseInt($("#vit").val()) / 18);
    itemIPosConjuracao = parseInt(parseInt($("#int").val()) / 18);
    itemIAgilidade = parseInt(parseInt($("#sor").val()) / 18) * 3;
    itemIIgnorarDefesa = parseInt(parseInt($("#sor").val()) / 18) * 15;
  }

  function serped() {
    imagemAcessorio1 = "https://static.divine-pride.net/images/items/item/28552.png";
    itemHPosConjuracao = 15;
  }

  function atemporal(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://static.divine-pride.net/images/items/item/28594.png";
      itemHAtaque = 50;
      if($("#itemSapatos").val() == "22004b" || $("#itemSapatos").val() == "22004d") {
        itemHDestreza = 50;
      }
      if($("#itemSapatos").val() == "22004e" || $("#itemSapatos").val() == "22004f") {
        itemHPosConjuracao = 30;
      }
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://static.divine-pride.net/images/items/item/28594.png";
      itemIAtaque = 50;
      if($("#itemAcessorio1").val() != "28594") {
        if($("#itemSapatos").val() == "22004b" || $("#itemSapatos").val() == "22004d") {
          itemIDestreza = 50;
        }
        if($("#itemSapatos").val() == "22004e" || $("#itemSapatos").val() == "22004f") {
          itemIPosConjuracao = 30;
        }
      }
    }
  }

  function bugiganga(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://static.divine-pride.net/images/items/item/28575.png";
      itemHDanoPropriedade = 5;
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://static.divine-pride.net/images/items/item/28575.png";
      itemIDanoPropriedade = 5;
    }
  }

  function lvigor(acessorio) {
    if (acessorio == "acessorio1") {
      imagemAcessorio1 = "https://i.imgur.com/6bk46dI.png";
      itemHPosConjuracao = 10;
      itemHDanoMVP = 5;
      itemHIgnorarDefesa = 20;
    }
    if (acessorio == "acessorio2") {
      imagemAcessorio2 = "https://i.imgur.com/6bk46dI.png";
      itemIPosConjuracao = 10;
      itemIDanoMVP = 5;
      itemIIgnorarDefesa = 20;
    }
  }

  function cartaTopo() {
    if ($("#cartaTopo").val() == "4403") { itemAPosConjuracao = itemAPosConjuracao + 30; }
    if ($("#cartaTopo").val() == "4529") { itemADanoFisico = itemADanoFisico + 2 + parseInt(refinoTopo / 2); }
    if ($("#cartaTopo").val() == "27396") { itemAPosConjuracao += 5; }
    if ($("#cartaTopo").val() == "4506") { itemADestreza = itemADestreza + 2; }
    if ($("#cartaTopo").val() == "4458" || $("#cartaTopo").val() == "4468") { itemAAtaque = itemAAtaque + 10; }
    if ($("#cartaTopo").val() == "4922") { itemADestreza = itemADestreza + 4; }
    if ($("#cartaTopo").val() == "4916") { itemAAgilidade = itemAAgilidade + 4; }
  }

  function cartaMeio() {
    if ($("#cartaMeio").val() == "4403") { itemBPosConjuracao = itemBPosConjuracao + 30; }
    if ($("#cartaMeio").val() == "4529") { itemBDanoFisico = itemBDanoFisico + 2; }
    if ($("#cartaMeio").val() == "27396") { itemBPosConjuracao += 5; }
    if ($("#cartaMeio").val() == "4506") { itemBDestreza = itemBDestreza + 2; }
    if ($("#cartaMeio").val() == "4458" || $("#cartaMeio").val() == "4468") { itemBAtaque = itemBAtaque + 10; }
    if ($("#cartaMeio").val() == "4922") { itemBDestreza = itemBDestreza + 4; }
    if ($("#cartaMeio").val() == "4916") { itemBAgilidade = itemBAgilidade + 4; }
  }

  function cartaArmadura() {
    if ($("#cartaArmadura").val() == "4426") { itemDDanoFisico = itemDDanoFisico + 10; }
    if ($("#cartaArmadura").val() == "4337") { itemDAtaque = itemDAtaque + 25; }
  }

  function cartaArco1() {
    if ($("#cartaArco1").val() == "4094") { itemEDanoDistancia = itemEDanoDistancia + 10; }
    if ($("#cartaArco1").val() == "4608") { itemEDanoTamanho += 20; itemEAtaque += 15; }
    if ($("#cartaArco1").val() == "4140") { itemEDanoMVP = itemEDanoMVP + 25; }
    if ($("#cartaArco1").val() == "4407") { itemEDanoFisico = itemEDanoFisico + 10; }
    if ($("#cartaArco1").val() == "4305") { itemEDanoFisico = itemEDanoFisico + 20; }
  }

  function cartaArco2() {
    if ($("#cartaArco2").val() == "4094") { itemEDanoDistancia = itemEDanoDistancia + 10; }
    if ($("#cartaArco2").val() == "4608") { itemEDanoTamanho += 20; itemEAtaque += 15; }
    if ($("#cartaArco2").val() == "4140") { itemEDanoMVP = itemEDanoMVP + 25; }
    if ($("#cartaArco2").val() == "4407") { itemEDanoFisico = itemEDanoFisico + 10; }
    if ($("#cartaArco2").val() == "4305") { itemEDanoFisico = itemEDanoFisico + 20; }
  }

  function cartaCapa() {
    if ($("#cartaCapa").val() == "4593") { itemFDanoDistancia = itemFDanoDistancia + parseInt(parseInt($("#des").val()) / 10) ; }
  }

  function cartaAcessorio1() {
    if ($("#cartaAcessorio1").val() == "4508") { itemHAtaque = itemHAtaque + 20; }
    if ($("#cartaAcessorio1").val() == "4922") { itemHDestreza = itemHDestreza + 4; }
    if ($("#cartaAcessorio1").val() == "4064") { itemHDestreza = itemHDestreza + 3; }
    if ($("#cartaAcessorio1").val() == "4916") { itemHAgilidade = itemHAgilidade + 4; }
    if ($("#cartaAcessorio1").val() == "4145") { itemHConjuracaoVariavel = itemHConjuracaoVariavel + 30; }
    if ($("#cartaAcessorio1").val() == "4486") { itemHConjuracaoVariavel = itemHConjuracaoVariavel + 15; }
    if ($("#cartaAcessorio1").val() == "27165") { itemHPosConjuracao += 3; itemHInteligencia--; if ($("#cartaAcessorio2").val() == "27163") { itemHInteligencia += 2; itemHPosConjuracao += 3; } }
    if ($("#cartaAcessorio1").val() == "27163") { itemHAgilidade--; itemHDestreza--; if ($("#cartaAcessorio2").val() == "27165") { itemHAgilidade += 2; itemHDestreza += 2; } }
  }

  function cartaAcessorio2() {
    if ($("#cartaAcessorio2").val() == "4508") { itemIAtaque = itemIAtaque + 20; }
    if ($("#cartaAcessorio2").val() == "4922") { itemIDestreza = itemIDestreza + 4; }
    if ($("#cartaAcessorio2").val() == "4064") { itemIDestreza = itemIDestreza + 3; }
    if ($("#cartaAcessorio2").val() == "4916") { itemIAgilidade = itemIAgilidade + 4; }
    if ($("#cartaAcessorio2").val() == "4145") { itemIConjuracaoVariavel = itemIConjuracaoVariavel + 30; }
    if ($("#cartaAcessorio2").val() == "4486") { itemIConjuracaoVariavel = itemIConjuracaoVariavel + 15; }
    if ($("#cartaAcessorio2").val() == "27165") { itemIPosConjuracao += 3; itemIInteligencia--; if ($("#cartaAcessorio1").val() == "27163") { itemIInteligencia += 2; itemIPosConjuracao += 3; } }
    if ($("#cartaAcessorio2").val() == "27163") { itemIAgilidade--; itemIDestreza--; if ($("#cartaAcessorio1").val() == "27165") { itemIAgilidade += 2; itemIDestreza += 2; } }
  }

  function definirTopo() {
    $("#imagemTopo").attr("src",imagemTopo); $("#itemAConjuracaoVariavel").val(itemAConjuracaoVariavel); $("#itemAIgnorarDefesa").val(itemAIgnorarDefesa); $("#itemAPosConjuracao").val(itemAPosConjuracao); $("#itemAAtaque").val(itemAAtaque); $("#itemAAtaqueArmaPorcentagem").val(itemAAtaqueArmaPorcentagem); $("#itemADanoFisico").val(itemADanoFisico); $("#itemADanoMVP").val(itemADanoMVP); $("#itemADanoDistancia").val(itemADanoDistancia); $("#itemADisparoTriploPorcentagem").val(itemADisparoTriploPorcentagem); $("#itemADanoRacial").val(itemADanoRacial); $("#itemADanoPropriedade").val(itemADanoPropriedade); $("#itemADanoTamanho").val(itemADanoTamanho); $("#itemADestreza").val(itemADestreza); $("#itemAAgilidade").val(itemAAgilidade); $("#itemAInteligencia").val(itemAInteligencia);
  }

  function definirMeio() {
    $("#imagemMeio").attr("src",imagemMeio); $("#itemBConjuracaoVariavel").val(itemBConjuracaoVariavel); $("#itemBIgnorarDefesa").val(itemBIgnorarDefesa); $("#itemBPosConjuracao").val(itemBPosConjuracao); $("#itemBAtaque").val(itemBAtaque); $("#itemBAtaqueArmaPorcentagem").val(itemBAtaqueArmaPorcentagem); $("#itemBDanoFisico").val(itemBDanoFisico); $("#itemBDanoMVP").val(itemBDanoMVP); $("#itemBDanoDistancia").val(itemBDanoDistancia); $("#itemBDisparoTriploPorcentagem").val(itemBDisparoTriploPorcentagem); $("#itemBDanoRacial").val(itemBDanoRacial); $("#itemBDanoPropriedade").val(itemBDanoPropriedade); $("#itemBDanoTamanho").val(itemBDanoTamanho); $("#itemBDestreza").val(itemBDestreza); $("#itemBAgilidade").val(itemBAgilidade); $("#itemBInteligencia").val(itemBInteligencia);
  }

  function definirBaixo() {
    $("#imagemBaixo").attr("src",imagemBaixo); $("#itemCConjuracaoVariavel").val(itemCConjuracaoVariavel); $("#itemCIgnorarDefesa").val(itemCIgnorarDefesa); $("#itemCPosConjuracao").val(itemCPosConjuracao); $("#itemCAtaque").val(itemCAtaque); $("#itemCAtaqueArmaPorcentagem").val(itemCAtaqueArmaPorcentagem); $("#itemCDanoFisico").val(itemCDanoFisico); $("#itemCDanoMVP").val(itemCDanoMVP); $("#itemCDanoDistancia").val(itemCDanoDistancia); $("#itemCDisparoTriploPorcentagem").val(itemCDisparoTriploPorcentagem); $("#itemCDanoRacial").val(itemCDanoRacial); $("#itemCDanoPropriedade").val(itemCDanoPropriedade); $("#itemCDanoTamanho").val(itemCDanoTamanho); $("#itemCDestreza").val(itemCDestreza); $("#itemCAgilidade").val(itemCAgilidade); $("#itemCInteligencia").val(itemCInteligencia);
  }

  function definirArmadura() {
    $("#imagemArmadura").attr("src",imagemArmadura); $("#itemDConjuracaoVariavel").val(itemDConjuracaoVariavel); $("#itemDIgnorarDefesa").val(itemDIgnorarDefesa); $("#itemDPosConjuracao").val(itemDPosConjuracao); $("#itemDAtaque").val(itemDAtaque); $("#itemDAtaqueArmaPorcentagem").val(itemDAtaqueArmaPorcentagem); $("#itemDDanoFisico").val(itemDDanoFisico); $("#itemDDanoMVP").val(itemDDanoMVP); $("#itemDDanoDistancia").val(itemDDanoDistancia); $("#itemDDisparoTriploPorcentagem").val(itemDDisparoTriploPorcentagem); $("#itemDDanoRacial").val(itemDDanoRacial); $("#itemDDanoPropriedade").val(itemDDanoPropriedade); $("#itemDDanoTamanho").val(itemDDanoTamanho); $("#itemDDestreza").val(itemDDestreza); $("#itemDAgilidade").val(itemDAgilidade); $("#itemDInteligencia").val(itemDInteligencia);
  }

  function definirArco() {
    $("#imagemArco").attr("src",imagemArco); $("#itemEConjuracaoVariavel").val(itemEConjuracaoVariavel); $("#itemEIgnorarDefesa").val(itemEIgnorarDefesa); $("#itemEPosConjuracao").val(itemEPosConjuracao); $("#itemEAtaque").val(itemEAtaque); $("#itemEAtaqueEquipamento").val(itemEAtaqueEquipamento); $("#flechaAtaque").val(flechaAtaque); $("#itemEAtaqueArmaPorcentagem").val(itemEAtaqueArmaPorcentagem); $("#itemEDanoFisico").val(itemEDanoFisico); $("#itemEDanoMVP").val(itemEDanoMVP); $("#itemEDanoDistancia").val(itemEDanoDistancia); $("#itemEDisparoTriploPorcentagem").val(itemEDisparoTriploPorcentagem); $("#itemEDanoRacial").val(itemEDanoRacial); $("#itemEDanoPropriedade").val(itemEDanoPropriedade); $("#itemEDanoTamanho").val(itemEDanoTamanho); $("#itemEDestreza").val(itemEDestreza); $("#itemEAgilidade").val(itemEAgilidade); $("#itemEInteligencia").val(itemEInteligencia);
  }

  function definirCapa() {
    $("#imagemCapa").attr("src",imagemCapa); $("#itemFConjuracaoVariavel").val(itemFConjuracaoVariavel); $("#itemFIgnorarDefesa").val(itemFIgnorarDefesa); $("#itemFPosConjuracao").val(itemFPosConjuracao); $("#itemFAtaque").val(itemFAtaque); $("#itemFAtaqueArmaPorcentagem").val(itemFAtaqueArmaPorcentagem); $("#itemFDanoFisico").val(itemFDanoFisico); $("#itemFDanoMVP").val(itemFDanoMVP); $("#itemFDanoDistancia").val(itemFDanoDistancia); $("#itemFDisparoTriploPorcentagem").val(itemFDisparoTriploPorcentagem); $("#itemFDanoRacial").val(itemFDanoRacial); $("#itemFDanoPropriedade").val(itemFDanoPropriedade); $("#itemFDanoTamanho").val(itemFDanoTamanho); $("#itemFDestreza").val(itemFDestreza); $("#itemFAgilidade").val(itemFAgilidade); $("#itemFInteligencia").val(itemFInteligencia);
  }

  function definirSapatos() {
    $("#imagemSapatos").attr("src",imagemSapatos); $("#itemGConjuracaoVariavel").val(itemGConjuracaoVariavel); $("#itemGIgnorarDefesa").val(itemGIgnorarDefesa); $("#itemGPosConjuracao").val(itemGPosConjuracao); $("#itemGAtaque").val(itemGAtaque); $("#itemGAtaqueArmaPorcentagem").val(itemGAtaqueArmaPorcentagem); $("#itemGDanoFisico").val(itemGDanoFisico); $("#itemGDanoMVP").val(itemGDanoMVP); $("#itemGDanoDistancia").val(itemGDanoDistancia); $("#itemGDisparoTriploPorcentagem").val(itemGDisparoTriploPorcentagem); $("#itemGDanoRacial").val(itemGDanoRacial); $("#itemGDanoPropriedade").val(itemGDanoPropriedade); $("#itemGDanoTamanho").val(itemGDanoTamanho); $("#itemGDestreza").val(itemGDestreza); $("#itemGAgilidade").val(itemGAgilidade); $("#itemGInteligencia").val(itemGInteligencia);
  }

  function definirAcessorio1() {
    $("#imagemAcessorio1").attr("src",imagemAcessorio1); $("#itemHConjuracaoVariavel").val(itemHConjuracaoVariavel); $("#itemHIgnorarDefesa").val(itemHIgnorarDefesa); $("#itemHPosConjuracao").val(itemHPosConjuracao); $("#itemHAtaque").val(itemHAtaque); $("#itemHAtaqueArmaPorcentagem").val(itemHAtaqueArmaPorcentagem); $("#itemHDanoFisico").val(itemHDanoFisico); $("#itemHDanoMVP").val(itemHDanoMVP); $("#itemHDanoDistancia").val(itemHDanoDistancia); $("#itemHDisparoTriploPorcentagem").val(itemHDisparoTriploPorcentagem); $("#itemHDanoRacial").val(itemHDanoRacial); $("#itemHDanoPropriedade").val(itemHDanoPropriedade); $("#itemHDanoTamanho").val(itemHDanoTamanho); $("#itemHDestreza").val(itemHDestreza); $("#itemHAgilidade").val(itemHAgilidade); $("#itemHInteligencia").val(itemHInteligencia);
  }

  function definirAcessorio2() {
    $("#imagemAcessorio2").attr("src",imagemAcessorio2); $("#itemIConjuracaoVariavel").val(itemIConjuracaoVariavel); $("#itemIIgnorarDefesa").val(itemIIgnorarDefesa); $("#itemIPosConjuracao").val(itemIPosConjuracao); $("#itemIAtaque").val(itemIAtaque); $("#itemIAtaqueArmaPorcentagem").val(itemIAtaqueArmaPorcentagem); $("#itemIDanoFisico").val(itemIDanoFisico); $("#itemIDanoMVP").val(itemIDanoMVP); $("#itemIDanoDistancia").val(itemIDanoDistancia); $("#itemIDisparoTriploPorcentagem").val(itemIDisparoTriploPorcentagem); $("#itemIDanoRacial").val(itemIDanoRacial); $("#itemIDanoPropriedade").val(itemIDanoPropriedade); $("#itemIDanoTamanho").val(itemIDanoTamanho); $("#itemIDestreza").val(itemIDestreza); $("#itemIAgilidade").val(itemIAgilidade); $("#itemIInteligencia").val(itemIInteligencia);
  }

  $("#itemTopo, #refinoItemTopo, #itemMeio, #cartaMeio, #itemBaixo, #refinoItemArmadura, #itemArmadura, #cartaArmadura, #refinoItemArco, #itemArco, #cartaArco1, #cartaArco2, #refinoItemCapa, #itemCapa, #cartaCapa, #refinoItemSapatos, #itemSapatos, #itemAcessorio1, #cartaAcessorio1, #itemAcessorio2, #cartaAcessorio2, #cartaTopo, #agi, #des, #int, #for, #vit, #sor, #nivelPersonagem").on("change", function(){
    itemTopo = $("#itemTopo").val();
    refinoTopo = parseInt($("#refinoItemTopo").val());
    resetarTopo();
    if (itemTopo != "") {
      switch (itemTopo) {
        case "19296":
          chique();
          break;
        case "19379":
          qgeneral();
          break;
        case "19409":
          pluma();
          break;
        case "18975":
          memoravel();
          break;
        case "19111a":
          cecila();
          break;
        case "19111b":
          cecilb();
          break;
        case "19263":
          xogunato();
          break;
        case "19019":
          copas();
          break;
        default:
          resetarTopo();
      }
      cartaTopo();
    }
    definirTopo();
    colorirInput();

    //

    itemMeio = $("#itemMeio").val();
    resetarMeio();
    if (itemMeio != "") {
      switch (itemMeio) {
        case "18912":
          resetarMeio();
          imagemMeio = "https://i.imgur.com/n7aMkmY.png";
          break;
        case "19138":
          serafim();
          break;
        case "19452":
          ornamento();
          break;
        case "410026":
          heranca();
          break;
        case "19444":
          tapaolho();
          break;
        case "19495":
          discretas();
          break;
        case "18813":
          retro();
          break;
        case "18823":
          grifo();
          break;
        case "5325":
          bionicos();
          break;
        default:
          resetarMeio();
      }
      cartaMeio();
    }
    definirMeio();
    if (itemMeio == "18823" && $("#itemBaixo").val() == "19318") { resetarBaixo(); rosario(); definirBaixo(); }
    colorirInput();

    //

    itemBaixo = $("#itemBaixo").val();
    resetarBaixo();
    if (itemBaixo != "") {
      switch (itemBaixo) {
        case "19101":
          familiar();
          break;
        case "420028":
          ombreiras();
          break;
        case "19274":
          descolado();
          break;
        case "19318":
          rosario();
          break;
        case "18844":
          pouring();
          break;
        case "19268":
          halito();
          break;
        case "5361":
          fugitivo();
          break;
        default:
          resetarBaixo();
      }
    }
    definirBaixo();
    colorirInput();

    //

    itemArmadura = $("#itemArmadura").val();
    refinoArmadura = parseInt($("#refinoArmadura").val());
    resetarArmadura();
    if (itemArmadura != "") {
      switch (itemArmadura) {
        case "15272":
          khalitzburg();
          break;
        case "15254":
          abissal();
          break;
        case "15283":
          senshi();
          break;
        case "15407":
          cbranco();
          break;
        case "2375":
          adiabolus();
          break;
        case "15240":
          vermelho();
          break;
        case "15128":
          colete();
          break;
        case "19048":
          vorags();
          break;
        case "15097a":
          ocultacaoa();
          break;
        case "15097b":
          ocultacaob();
          break;
        default:
          resetarArmadura();
      }
      cartaArmadura();
    }
    definirArmadura();
    colorirInput();

    //

    itemArco = $("#itemArco").val();
    refinoItemArco = parseInt($("#refinoItemArco").val());
    resetarArco();
    if (itemArco != "") {
      switch (itemArco) {
        case "18125":
          demoniaco();
          break;
        case "18130":
          rubi();
          break;
        case "18170":
          aancestral();
          break;
        case "18164":
          bancestral();
          break;
        case "18115":
          orc();
          break;
        case "18109":
          catapulta();
          break;
        case "1730":
          elementais("1730");
          break;
        case "1731":
          elementais("1731");
          break;
        case "1732":
          elementais("1732");
          break;
        case "1733":
          elementais("1733");
          break;
        default:
          resetarArco();
      }
      cartaArco1();
      cartaArco2();
    }
    definirArco();
    if (itemArco != "1730" && itemArco != "1731" && itemArco != "1732" && itemArco != "1733" && $("#itemTopo").val() == "19019") { resetarTopo(); copas(); cartaTopo(); definirTopo(); }
    if (itemArco != "1730" && itemArco != "1731" && itemArco != "1732" && itemArco != "1733" && $("#itemArmadura").val() == "19048") { resetarArmadura(); vorags(); cartaArmadura(); definirArmadura(); }
    colorirInput();

    //

    itemCapa = $("#itemCapa").val();
    refinoItemCapa = parseInt($("#refinoItemCapa").val());
    resetarCapa();
    if (itemCapa != "") {
      switch (itemCapa) {
        case "2525":
          marques();
          break;
        case "2589a":
          arcanjoa();
          break;
        case "2589b":
          arcanjob();
          break;
        case "20773":
          motor();
          break;
        case "2576":
          mochila();
          break;
        case "480025":
          mbarao();
          break;
        case "20973":
          mespiritos();
          break;
        case "20963":
          mantofor();
          break;
        case "480081":
          flamingo();
          break;
        case "20967":
          mantodes();
          break;
        case "20799":
          mochileiro();
          break;
        case "20718a":
          vermea();
          break;
        case "20718b":
          vermeb();
          break;
        default:
          resetarCapa();
      }
      cartaCapa();
    }
    definirCapa();
    if (itemCapa != "2525" && $("#itemTopo").val() == "19296") { resetarTopo(); chique(); cartaTopo(); definirTopo(); }
    if (itemCapa != "20718a" && itemCapa != "20718b" && $("#itemBaixo").val() == "19268") { resetarBaixo(); halito(); definirBaixo(); }
    if (itemCapa != "20773" && $("#itemArmadura").val() == "15128") { resetarArmadura(); colete(); cartaArmadura(); definirArmadura(); }
    colorirInput();

    //

    itemSapatos = $("#itemSapatos").val();
    resetarSapatos();
    if (itemSapatos != "") {
      switch (itemSapatos) {
        case "470056":
          perseguidor();
          break;
        case "2433":
          bdiabolus();
          break;
        case "22004a":
        case "22004e":
        case "22004f":
          temporaisa();
          break;
        case "22004b":
          temporaisb();
          break;
        case "22004c":
          temporaisc();
          break;
        case "22004d":
          temporaisd();
          break;
        case "22101a":
          archangelinga();
          break;
        case "22101b":
          archangelingb();
          break;
        case "22172":
          aladas();
          break;
        case "22071":
          salto();
          break;
        case "470075":
          sandalias();
          break;
        default:
          resetarSapatos();
      }
    }
    definirSapatos();
    colorirInput();

    //

    itemAcessorio1 = $("#itemAcessorio1").val();
    resetarAcessorio1();
    if (itemAcessorio1 != "") {
      switch (itemAcessorio1) {
        case "28379":
          sombrio("acessorio1");
          break;
        case "28594":
          atemporal("acessorio1");
          break;
        case "32205":
          aesmeralda("acessorio1");
          break;
        case "32258":
          jupiter("acessorio1");
          break;
        case "490068":
          venus("acessorio1");
          break;
        case "490096":
          joiar("acessorio1");
          break;
        case "28438":
          fada("acessorio1");
          break;
        case "28411":
          esmeralda("acessorio1");
          break;
        case "28492a":
        case "28492b":
          diario("acessorio1");
          break;
        case "28531":
          lvigor("acessorio1");
          break;
        case "28552":
          serped();
          break;
        case "28575":
          bugiganga("acessorio1");
          break;
        default:
          resetarAcessorio1();
      }
      cartaAcessorio1();
    }
    definirAcessorio1();
    if (itemAcessorio1 != "28438" && $("#itemCapa").val() == "2589a") { resetarCapa(); arcanjoa(); definirCapa(); }
    colorirInput();

    //

    itemAcessorio2 = $("#itemAcessorio2").val();
    resetarAcessorio2();
    if (itemAcessorio2 != "") {
      switch (itemAcessorio2) {
        case "28379":
          sombrio();
          break;
        case "28594":
          atemporal("acessorio2");
          break;
        case "32205":
          aesmeralda("acessorio2");
          break;
        case "490068":
          venus("acessorio2");
          break;
        case "490096":
          joiar("acessorio2");
          break;
        case "28438":
          fada("acessorio2");
          break;
        case "28411":
          esmeralda("acessorio2");
          break;
        case "28492a":
        case "28492b":
          diario("acessorio2");
          break;
        case "28531":
          lvigor("acessorio2");
          break;
        case "28565":
          oni();
          break;
        case "28575":
          bugiganga("acessorio2");
          break;
        default:
          resetarAcessorio2();
      }
      cartaAcessorio2();
    }
    definirAcessorio2();
    if (itemAcessorio2 != "28438" && $("#itemCapa").val() == "2589a") { resetarCapa(); arcanjoa(); definirCapa(); }
    colorirInput();
  });

  $(".columns.toHide table").each(function() {
    var numeroTrAparecendo = $(this).find("tr.alwaysShow").length;
    $(this).find("tr").not(".alwaysShow").css("display","none");
    $(this).find("tr:nth-child("+numeroTrAparecendo+")").after("<tr class='alwaysShow'><th colspan='3' style='padding-bottom:15px'><input type='button' value='+ mostrar bônus' class='showhide escondendo'></td></tr>");
  });

  $(".showhide").click(function() {
    var element = $(this);
    if (element.hasClass("escondendo")) {
      element.closest("table").find("tr").not(".alwaysShow").css("display","table-row");
      element.addClass("mostrando").removeClass("escondendo");
      element.val(element.val().replace("+ mostrar","- esconder"))
    } else {
      element.closest("table").find("tr").not(".alwaysShow").css("display","none");
      element.addClass("escondendo").removeClass("mostrando");
      element.val(element.val().replace("- esconder","+ mostrar"))
    }
  });


});
