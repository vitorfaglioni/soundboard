/* =========== */
/* = Configs = */
/* =========== */

const folders = { 
  all: 'audios/all/',
  vtc: 'audios/vtc/',
  maBBB: 'audios/ma-bbb/',
  maNFL: 'audios/ma-nfl/',
  maMauFalado: 'audios/ma-mau-falado/',
  maOuvinteFofoqueiro: 'audios/ma-ouvinte-fofoqueiro/',
  maSessaoCineMau: 'audios/ma-cinemau/'
};

const soundList = [
  // All
  { name: 'Gemidane', folder: folders.all, file: 'gemidane.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Gemido Auto Tune', folder: folders.all, file: 'gemido-autotune.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Gemido Cher', folder: folders.all, file: 'gemido-cher.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Gemido do Azaghal', folder: folders.all, file: 'azaghal-gemido.mp3', context: ['ma', 'all'] },
  { name: 'Gemido do Doug Lira', folder: folders.all, file: 'doug-lira-gemido.mp3', context: ['ma', 'all'] },
  { name: 'Gemido do Jovem Nerd', folder: folders.all, file: 'jn-gemido.mp3', context: ['ma', 'all'] },
  { name: 'Gemido do Jovem Nerd 2', folder: folders.all, file: 'jn-gemido-2.mp3', context: ['ma', 'all'] },
  { name: 'Gemido do Jovem Nerd 3', folder: folders.all, file: 'jn-gemido-3.mp3', context: ['ma', 'all'] },
  { name: 'Gemido do Mau', folder: folders.all, file: 'mau-gemido.mp3', context: ['ma', 'all'] },
  { name: 'Gemido Solid Snake', folder: folders.all, file: 'gemido-solid-snake.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Gemidos do Almôndega', folder: folders.all, file: 'almondega-gemidos.mp3', context: ['ma', 'all'] },
  { name: 'Jornal do Nenê', folder: folders.all, file: 'jornal-do-nene.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Momento Titeti', folder: folders.all, file: 'momento-titeti.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Plantãozinho do Nenezinho', folder: folders.all, file: 'plantaozinho-do-nenezinho.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Top Fãs do Vidane', folder: folders.all, file: 'top-fas-do-vidane.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Top Fãs do Mau', folder: folders.all, file: 'top-fas-do-mau.mp3', context: ['vtc', 'ma', 'all'] },
  { name: 'Top Fãs do Maudane', folder: folders.all, file: 'top-fas-do-maudane.mp3', context: ['vtc', 'all'] },
  { name: 'Top Ídolos do Vidane', folder: folders.all, file: 'top-idolos-do-vidane.mp3', context: ['vtc', 'all'] },
  { name: 'Top Fãs da Mary Joe', folder: folders.all, file: 'top-fas-da-mary-joe.mp3', context: ['ma', 'all'] },
  { name: 'Top Fãs do Trio Maudanejoe', folder: folders.all, file: 'top-fas-do-trio-maudanejoe.mp3', context: ['ma', 'all'] },
  { name: 'Top Fãs do Azaghal', folder: folders.all, file: 'top-fas-do-azaghal.mp3', context: ['ma', 'all'] },
  
  // Vai te Catar
  { name: 'Grupo A', folder: folders.vtc, file: 'grupo-a.mp3', context: ['vtc'] },
  { name: 'Grupo B', folder: folders.vtc, file: 'grupo-b.mp3', context: ['vtc'] },
  { name: 'Grupo C', folder: folders.vtc, file: 'grupo-c.mp3', context: ['vtc'] },
  { name: 'Grupo D', folder: folders.vtc, file: 'grupo-d.mp3', context: ['vtc'] },
  { name: 'Grupo E', folder: folders.vtc, file: 'grupo-e.mp3', context: ['vtc'] },
  { name: 'Grupo F', folder: folders.vtc, file: 'grupo-f.mp3', context: ['vtc'] },
  { name: 'Grupo G', folder: folders.vtc, file: 'grupo-g.mp3', context: ['vtc'] },
  { name: 'Grupo H', folder: folders.vtc, file: 'grupo-h.mp3', context: ['vtc'] },
  { name: 'Oitavas de Final', folder: folders.vtc, file: 'oitavas-de-final.mp3', context: ['vtc'] },
  { name: 'Quartas de Final', folder: folders.vtc, file: 'quartas-de-final.mp3', context: ['vtc'] },
  { name: 'Semifinal', folder: folders.vtc, file: 'semifinal.mp3', context: ['vtc'] },
  { name: 'Terceiro e Quarto', folder: folders.vtc, file: 'terceiro-e-quarto.mp3', context: ['vtc'] },
  { name: 'Final', folder: folders.vtc, file: 'final.mp3', context: ['vtc'] },
  { name: 'Aposta Maluca', folder: folders.vtc, file: 'aposta-maluca.mp3', context: ['vtc'] },
  { name: 'Bolada na Cara', folder: folders.vtc, file: 'bolada-na-cara.mp3', context: ['vtc'] },
  { name: 'Momento Daniel Jogadas', folder: folders.vtc, file: 'momento-daniel-jogadas.mp3', context: ['vtc'] },
  { name: 'Momento Surpreendente', folder: folders.vtc, file: 'momento-surpreendente.mp3', context: ['vtc'] },
  { name: 'Momento Teoria da Conspiração', folder: folders.vtc, file: 'momento-teoria-da-conspiração.mp3', context: ['vtc'] },
  { name: 'O Caminho Até Aqui', folder: folders.vtc, file: 'o-caminho-até-aqui.mp3', context: ['vtc'] },
  { name: 'Poderia Estar No Vasco', folder: folders.vtc, file: 'poderia-estar-no-vasco.mp3', context: ['vtc'] },
  { name: 'Risco de Daniel Alves', folder: folders.vtc, file: 'risco-de-daniel-alves.mp3', context: ['vtc'] },

  // Mau Acompanhado - Mau Falado
  { name: 'Aguenta coração', folder: folders.maMauFalado, file: 'aguenta-coracao.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Assunto Sério', folder: folders.maMauFalado, file: 'assunto-serio-v2.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Assunto Sério (descartado)', folder: folders.maMauFalado, file: 'assunto-serio.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Azaghal Pergunta', folder: folders.maMauFalado, file: 'azaghal-pergunta.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Betíssima', folder: folders.maMauFalado, file: 'betissima.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Bom dia', folder: folders.maMauFalado, file: 'bom-dia.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Charajoes', folder: folders.maMauFalado, file: 'charajoes.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Curiosidades curiosas', folder: folders.maMauFalado, file: 'curiosidades-curiosas.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Deve ser legal não ser pobre', folder: folders.maMauFalado, file: 'deve-ser-legal-nao-ser-pobre.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Elefante na sala', folder: folders.maMauFalado, file: 'elefante-na-sala.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Esquentou', folder: folders.maMauFalado, file: 'esquentou.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Manjada Contente', folder: folders.maMauFalado, file: 'manjada-contente.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Mapa Astral - Ascendente em Virgem', folder: folders.maMauFalado, file: 'mapa-astral-ascendente-em-virgem.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Mapa Astral - Lua em Aquário', folder: folders.maMauFalado, file: 'mapa-astral-lua-em-aquario.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Mapa Astral - Sol em Áries', folder: folders.maMauFalado, file: 'mapa-astral-sol-em-aries.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Mary Jokes', folder: folders.maMauFalado, file: 'mary-jokes.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Novelas da vida real', folder: folders.maMauFalado, file: 'novelas-da-vida-real.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Ouvinte fofoqueiro', folder: folders.maMauFalado, file: 'ouvinte-fofoqueiro.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Palavra Maudita', folder: folders.maMauFalado, file: 'palavra-maudita.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Por dentro da Bolha', folder: folders.maMauFalado, file: 'por-dentro-da-bolha.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Quebrou a internet', folder: folders.maMauFalado, file: 'quebrou-a-internet.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Revolta alegre', folder: folders.maMauFalado, file: 'revolta-alegre.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Surpresa legal (é o seu mapa astral)', folder: folders.maMauFalado, file: 'surpresa-legal-e-o-seu-mapa-astral.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Tá na sua TV', folder: folders.maMauFalado, file: 'ta-na-sua-tv.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Tigrinho das índias', folder: folders.maMauFalado, file: 'tigrinho-das-indias.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Troféu Mauricinho de Ouro', folder: folders.maMauFalado, file: 'trofeu-mauricinho-de-ouro.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Vergonha alheia', folder: folders.maMauFalado, file: 'vergonha-alheia.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Vida de luxo', folder: folders.maMauFalado, file: 'vida-de-luxo.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Vidanigmas', folder: folders.maMauFalado, file: 'vidanigmas.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Vidilemas', folder: folders.maMauFalado, file: 'vidilemas.mp3', context: ['ma', 'mau-falado'] },
  { name: 'Visita Responde', folder: folders.maMauFalado, file: 'visita-responde.mp3', context: ['ma', 'mau-falado'] },

  // Mau Acompanhado - Vou te Contar
  { name: 'A gente assiste por você', folder: folders.maBBB, file: 'a-gente-assiste-por-voce.mp3', context: ['ma', 'bbb'] },
  { name: 'Alguém Muda de Assunto', folder: folders.maBBB, file: 'alguem-muda-de-assunto.mp3', context: ['ma', 'bbb'] },
  { name: 'Anjo da Semana', folder: folders.maBBB, file: 'anjo-da-semana.mp3', context: ['ma', 'bbb'] },
  { name: 'Arregou', folder: folders.maBBB, file: 'arregou.mp3', context: ['ma', 'bbb'] },
  { name: 'Bate e Volta', folder: folders.maBBB, file: 'bate-e-volta.mp3', context: ['ma', 'bbb'] },
  { name: 'Big Fone', folder: folders.maBBB, file: 'big-fone.mp3', context: ['ma', 'bbb'] },
  { name: 'Camarote', folder: folders.maBBB, file: 'camarote.mp3', context: ['ma', 'bbb'] },
  { name: 'Casa do Reencontro', folder: folders.maBBB, file: 'casa-do-reencontro.mp3', context: ['ma', 'bbb'] },
  { name: 'Casa de Vidro', folder: folders.maBBB, file: 'casa-de-vidro.mp3', context: ['ma', 'bbb'] },
  { name: 'Correspondente Internacional Mary Joe', folder: folders.maBBB, file: 'correspondente-internacional-mary-joe.mp3', context: ['ma', 'bbb'] },
  { name: 'Detestadinhos da Semana', folder: folders.maBBB, file: 'detestadinhos-da-semana.mp3', context: ['ma', 'bbb'] },
  { name: 'Eliminação', folder: folders.maBBB, file: 'eliminacao.mp3', context: ['ma', 'bbb'] },
  { name: 'Essa Festa Virou Um Enterro', folder: folders.maBBB, file: 'essa-festa-virou-um-enterro.mp3', context: ['ma', 'bbb'] },
  { name: 'Festa', folder: folders.maBBB, file: 'festa.mp3', context: ['ma', 'bbb'] },
  { name: 'Formação de Paredão', folder: folders.maBBB, file: 'formacao-de-paredao.mp3', context: ['ma', 'bbb'] },
  { name: 'Indignado', folder: folders.maBBB, file: 'indignado.mp3', context: ['ma', 'bbb'] },
  { name: 'Jogo da Discórdia', folder: folders.maBBB, file: 'jogo-da-discordia.mp3', context: ['ma', 'bbb'] },
  { name: 'Momento Tiago Abravanel', folder: folders.maBBB, file: 'momento-tiago-abravanel.mp3', context: ['ma', 'bbb'] },
  { name: 'Monstro', folder: folders.maBBB, file: 'monstro.mp3', context: ['ma', 'bbb'] },
  { name: 'Noite de Eliminação', folder: folders.maBBB, file: 'noite-de-eliminação.mp3', context: ['ma', 'bbb'] },
  { name: 'Novo Líder', folder: folders.maBBB, file: 'novo-lider.mp3', context: ['ma', 'bbb'] },
  { name: 'Nunca Será Gil do Vigor', folder: folders.maBBB, file: 'nunca-sera-gil-do-vigor.mp3', context: ['ma', 'bbb'] },
  { name: 'Pipoca', folder: folders.maBBB, file: 'pipoca.mp3', context: ['ma', 'bbb'] },
  { name: 'Placada na Cara', folder: folders.maBBB, file: 'placada-na-cara.mp3', context: ['ma', 'bbb'] },
  { name: 'Poder Coringa', folder: folders.maBBB, file: 'poder-coringa.mp3', context: ['ma', 'bbb'] },
  { name: 'Por que será?', folder: folders.maBBB, file: 'por-que-sera.mp3', context: ['ma', 'bbb'] },
  { name: 'Porra Tadeu', folder: folders.maBBB, file: 'porra-tadeu.mp3', context: ['ma', 'bbb'] },
  { name: 'Puxadinho', folder: folders.maBBB, file: 'puxadinho.mp3', context: ['ma', 'bbb'] },
  { name: 'Quarto Branco', folder: folders.maBBB, file: 'quarto-branco.mp3', context: ['ma', 'bbb'] },
  { name: 'Queima Quengaral! É briga!', folder: folders.maBBB, file: 'queima-quengaral.mp3', context: ['ma', 'bbb'] },
  { name: 'Queridinhos da Semana', folder: folders.maBBB, file: 'queridinhos-da-semana.mp3', context: ['ma', 'bbb'] },
  { name: 'Saudades do Babu', folder: folders.maBBB, file: 'saudades-do-babu.mp3', context: ['ma', 'bbb'] },
  { name: 'Sincerão', folder: folders.maBBB, file: 'sincerao.mp3', context: ['ma', 'bbb'] },
  { name: 'Tadeu: O Melhor Bial Que Tem', folder: folders.maBBB, file: 'tadeu-melhor-bial-que-tem.mp3', context: ['ma', 'bbb'] },
  { name: 'Tá Só Começando', folder: folders.maBBB, file: 'ta-so-comecando.mp3', context: ['ma', 'bbb'] },
  { name: 'Tortada na Cara', folder: folders.maBBB, file: 'tortada-na-cara.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu Deyverson', folder: folders.maBBB, file: 'trofeu-deyverson.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu Mau Acompanhado', folder: folders.maBBB, file: 'trofeu-mau-acompanhado.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Decepção', folder: folders.maBBB, file: 'trofeu-ma-categoria-decepcao.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Emoção', folder: folders.maBBB, file: 'trofeu-ma-categoria-emocao.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Inacreditável', folder: folders.maBBB, file: 'trofeu-ma-categoria-inacreditavel.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Inesquecível', folder: folders.maBBB, file: 'trofeu-ma-categoria-inesquecivel.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Miss Simpatia', folder: folders.maBBB, file: 'trofeu-ma-categoria-miss-simpatia.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Planta', folder: folders.maBBB, file: 'trofeu-ma-categoria-planta.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Treta', folder: folders.maBBB, file: 'trofeu-ma-categoria-treta.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Vergonha Alheia', folder: folders.maBBB, file: 'trofeu-ma-categoria-vergonha-alheia.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Categoria Vocabulário', folder: folders.maBBB, file: 'trofeu-ma-categoria-vocabulario.mp3', context: ['ma', 'bbb'] },
  { name: 'Troféu MA: Prêmio Cezar Black', folder: folders.maBBB, file: 'trofeu-ma-premio-cezar-black.mp3', context: ['ma', 'bbb'] },
  
  // Mau Acompanhado - NFL
  { name: 'As Águias Da Philadelphia', folder: folders.maNFL, file: 'nfl-as-aguias-da-philadelphia.mp3', context: ['ma', 'nfl'] },
  { name: 'Chefes Da Cidade De Kansas', folder: folders.maNFL, file: 'nfl-chefes-da-cidade-de-kansas.mp3', context: ['ma', 'nfl'] },
  { name: 'Previsão Acertada do Super Especialista', folder: folders.maNFL, file: 'nfl-previsao-acertada-do-super-especialista.mp3', context: ['ma', 'nfl'] },
  { name: 'Super Bowl', folder: folders.maNFL, file: 'nfl-super-bowl.mp3', context: ['ma', 'nfl'] },

    // Mau Acompanhado - Ouvinte Fofoqueiro
  { name: 'Delivery no andar de cima', folder: folders.maOuvinteFofoqueiro, file: 'delivery-no-andar-de-cima.mp3', context: ['ma', 'ouvinte-fofoqueiro'] },
  { name: 'Do céu ao inferno', folder: folders.maOuvinteFofoqueiro, file: 'do-ceu-ao-inferno.mp3', context: ['ma', 'ouvinte-fofoqueiro'] },
  { name: 'Festa de tirar o fôlego', folder: folders.maOuvinteFofoqueiro, file: 'festa-de-tirar-o-folego.mp3', context: ['ma', 'ouvinte-fofoqueiro'] },
  { name: 'O condomínio da sacanagem', folder: folders.maOuvinteFofoqueiro, file: 'o-condominio-da-sacanagem.mp3', context: ['ma', 'ouvinte-fofoqueiro'] },
  { name: 'Um inspetor no jardim de infância', folder: folders.maOuvinteFofoqueiro, file: 'um-inspetor-no-jardim-de-infancia.mp3', context: ['ma', 'ouvinte-fofoqueiro'] },

    
    // Mau Acompanhado - Sessão CineMau
  { name: 'Sonic 3 - #1 - Eu te amo Sonic Gordinho', folder: folders.maSessaoCineMau, file: 'sonic3-eu-te-amo-sonic.mp3', context: ['ma', 'sessao-cinemau'] },
  { name: 'Sonic 3 - #2 - Sonic Charlie Brau', folder: folders.maSessaoCineMau, file: 'sonic3-sonic-charlie-brau.mp3', context: ['ma', 'sessao-cinemau'] },
  { name: 'Sonic 3 - #3 - Onde está o Sonic?', folder: folders.maSessaoCineMau, file: 'sonic3-onde-esta-o-sonic.mp3', context: ['ma', 'sessao-cinemau'] },
  { name: 'Sonic 3 - #4 - Filme do Sonic', folder: folders.maSessaoCineMau, file: 'sonic3-filme-do-sonic.mp3', context: ['ma', 'sessao-cinemau'] },
  { name: 'Sonic 3 - #5 - Vem Aí', folder: folders.maSessaoCineMau, file: 'sonic3-sonic-3.mp3', context: ['ma', 'sessao-cinemau'] }
];

const filters = [
  { name: 'Variados', context: 'all' },
  { name: 'Vai te Catar', context: 'vtc' },
  { name: 'Mau Acompanhado', context: 'ma' },
  { name: 'Mau Acompanhado - Mau Falado', context: 'mau-falado' },
  { name: 'Mau Acompanhado - Ouvinte Fofoqueiro', context: 'ouvinte-fofoqueiro' },
  { name: 'Mau Acompanhado - Sessão CineMau', context: 'sessao-cinemau' },
  { name: 'Mau Acompanhado - Vou Te Contar', context: 'bbb' },
  { name: 'Mau Acompanhado - Touchdown', context: 'nfl' }
];

const SOUND_BUTTON_CLASSNAME = 'push--flat'

/* ======================= */
/* = Auxiliary Functions = */
/* ======================= */

function addSoundButton(containerElement, sound, count) {
  sound.index = count;
  count++;

  let btn = document.createElement("button");
  btn.innerHTML = sound.name;
  btn.className += SOUND_BUTTON_CLASSNAME;
  btn.dataset.sound = sound.file;
  containerElement.appendChild(btn);

  let audio = document.createElement("audio");
  audio.id = sound.file;
  audio.src = sound.folder + sound.file;
  containerElement.appendChild(audio);
}

function resetCurrentActiveAudioButton(audio, button) {
  currentActiveAudioButton.audio = audio;
  currentActiveAudioButton.button = button;
  inactivateButton(button);
}

function applyFilter(context, button) {
  // contexto atual é o ativo, vamos esvaziar
  if (currentActiveContext.context === context) {
    currentActiveContext.context = null;
    inactivateButton(button);
  } else {
    // contexto atual não é o ativo, vamos aplicá-lo
    if (currentActiveContext.context != null) {
      inactivateButton(currentActiveContext.button);
    }
    button.classList.add('active');
    currentActiveContext.context = context;
    currentActiveContext.button = button;
  }

  pageLoad();
}

function inactivateButton(button) {
  if (button !== null) {
    button.classList.remove('active');
  }
}

function pauseAudio(audio) {
  if (audio !== null) {
    audio.pause();
    audio.currentTime = 0;
  }
}

/* ================ */
/* = Load Filters = */
/* ================ */

let divFilter = document.getElementById("filters");

filters.forEach((filter) => {
  let btn = document.createElement("button");
  btn.innerHTML = filter.name;
  btn.className += 'filter-btn';
  btn.dataset.context = filter.context;
  divFilter.appendChild(btn);
})

let currentActiveAudioButton = {
  audio: null,
  button: null
}
let currentActiveContext = {
  context: null,
  button: null
};

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const context = button.dataset.context;
    applyFilter(context, button);
  });
});

/* ================ */
/* = Page Load = */
/* ================ */

let container = null;

function pageLoad() {
  if (container !== null) {
    container.replaceChildren();
  }

  container = document.getElementById('samples');
  
  let i = 0;
  soundList.forEach((sound) => {
    if (currentActiveContext.context === null || sound.context.includes(currentActiveContext.context)) {
      addSoundButton(container, sound, i);
    }
  })
  
  const buttons = document.querySelectorAll(`.${SOUND_BUTTON_CLASSNAME}`);
  const audios = document.querySelectorAll('audio');
  
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const sound = button.dataset.sound;
      const audio = document.getElementById(sound);
  
      if (audio.paused) {
        if (currentActiveAudioButton.audio !== audio) {
          pauseAudio(currentActiveAudioButton.audio, currentActiveAudioButton.button);
          resetCurrentActiveAudioButton(currentActiveAudioButton.audio, currentActiveAudioButton.button);
        }
        audio.play();
        button.classList.add('active');
        currentActiveAudioButton.audio = audio;
        currentActiveAudioButton.button = button;
      } else {
        pauseAudio(audio);
        inactivateButton(button);
      }
    });
  });
  
  audios.forEach((audio) => {
    audio.addEventListener('ended', () => {
      const button = document.querySelector(`[data-sound="${audio.id}"]`);
      button.classList.remove('active');
    });
  });
}

pageLoad();

const toggleColorMode = e => {
  // Switch to Light Mode
  if (e.currentTarget.classList.contains("light--hidden")) {
    document.documentElement.setAttribute("color-mode", "light");

    localStorage.setItem("color-mode", "light");

    return;
  };
  
  /* Switch to Dark Mode
  Sets the custom HTML attribute */
  document.documentElement.setAttribute("color-mode", "dark");

  // Sets the user's preference in local storage
  localStorage.setItem("color-mode", "dark");
};