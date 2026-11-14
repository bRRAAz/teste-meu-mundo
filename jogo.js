'use strict';

const palette = [
  ['#a288ee', 'Lavanda'], ['#f4929d', 'Rosa'], ['#f7b558', 'Laranja'],
  ['#6cc5a6', 'Verde-menta'], ['#77a9ee', 'Azul'], ['#fff0b5', 'Amarelo'],
  ['#675383', 'Roxo escuro']
];
const categories = [
  { label: 'Modelo', icon: '◇', groups: [
    ['model','Modelo do avatar',[['masculine','Masculino'],['feminine','Feminino']]]
  ] },
  { label: 'Pele', icon: '◉', groups: [
    ['skin', 'Tom da pele', [['#f8d8bd','Porcelana'],['#f4ba90','Pêssego'],['#db9b70','Mel'],['#b97450','Caramelo'],['#8b503b','Castanho'],['#61372f','Marrom profundo']]]
  ] },
  { label: 'Cabelo', icon: '〰', groups: [
    ['hairStyle','Corte ou penteado',[
      ['short','Curto'],['fade','Degradê'],['quiff','Topete'],['sidePart','Risco lateral'],
      ['pixie','Pixie'],['shaved','Raspado'],['curls','Cacheado'],['afro','Black power'],
      ['bob','Chanel'],['fringe','Franja reta'],['long','Comprido'],['waves','Ondulado'],
      ['ponytail','Rabo de cavalo'],['braids','Duas tranças'],['puffs','Coques'],['none','Sem cabelo']
    ]],
    ['hair','Cor do cabelo',[['#37283d','Preto'],['#6a412e','Castanho'],['#edbf65','Loiro'],['#b95237','Ruivo'],['#9862cc','Roxo'],['#e78ba4','Rosa']]]
  ] },
  { label: 'Olhos', icon: '◍', groups: [
    ['eyes','Cor dos olhos',[['#41292e','Castanho'],['#252739','Preto'],['#876143','Mel'],['#4a8171','Verde'],['#4e82b2','Azul'],['#775ca6','Violeta']]]
  ] },
  { label: 'Rosto', icon: '☺', groups: [
    ['marks','Pintinhas e sardas',[['none','Sem pintinhas'],['freckles','Sardas'],['mole','Pintinha'],['both','Sardas e pintinha']]],
    ['expression','Expressão',[['smile','Sorriso aberto'],['soft','Sorriso leve'],['wink','Piscadinha']]]
  ] },
  { label: 'Roupa', icon: '♢', groups: [
    ['clothes','Tipo de roupa',[['tee','Camiseta'],['hoodie','Moletom'],['overalls','Jardineira']]],
    ['outfit','Cor da roupa',palette]
  ] },
  { label: 'Calçados', icon: '✿', groups: [
    ['feet','Tipo de calçado',[['sneakers','Tênis'],['boots','Botas'],['slip','Sapatilhas']]],
    ['shoes','Cor dos calçados',palette]
  ] },
  { label: 'Acessórios', icon: '⌂', groups: [
    ['hat','Acessório de cabeça',[['none','Sem acessório'],['cap','Boné'],['beanie','Gorro'],['headphones','Fones']]]
  ] },
  { label: 'Óculos', icon: '∞', groups: [
    ['glasses','Quer usar óculos?',[['none','Sem óculos'],['round','Óculos redondos']]]
  ] }
];

const topics = [
  { title:'Interesses', prompt:'O que você curte fazer no tempo livre?', choices:['Ouvir música','Jogar','Praticar esporte','Desenhar ou criar','Ler ou escrever','Ver séries ou filmes','Dançar','Sair com amigos','Ter um tempo só meu'] },
  { title:'Gostos e preferências', prompt:'Que coisas deixam seu dia melhor?', choices:['Uma playlist no fone','Um dia em casa','Estar ao ar livre','Montar um look','Conversas que rendem','Descobrir algo novo','Um tempo sem notificações'] },
  { title:'Comidas favoritas', prompt:'O que você pediria ou prepararia se pudesse escolher?', choices:['Pizza','Açaí','Comida caseira','Chocolate','Hambúrguer','Macarrão','Pão de queijo','Comida japonesa','Frutas'] },
  { title:'Meu jeito de ser', prompt:'Que jeitos ou atitudes você reconhece em si?', choices:['Observo antes de falar','Faço piada quando estou à vontade','Sou leal a quem confio','Gosto de inventar coisas','Prefiro decidir no meu ritmo','Me importo com justiça','Curto aprender por conta própria','Meu jeito muda dependendo de com quem estou'] },
  { title:'Amizades e pertencimento', prompt:'O que faz você se sentir à vontade com alguém?', choices:['Poder ser eu mesmo','Ser ouvido sem julgamento','Ter interesses em comum','Dividir um silêncio','Poder discordar','Saber que posso contar com a pessoa','Ter espaço quando preciso'] },
  { title:'Sentimentos', prompt:'Quais sentimentos têm aparecido nos seus dias?', choices:['Alegria','Tristeza','Raiva','Ansiedade','Vergonha','Solidão','Alívio','Empolgação','Às vezes nem sei o que estou sentindo'] },
  { title:'Pressões e medos', prompt:'O que costuma pesar ou dar frio na barriga?', choices:['Provas ou notas','Comparações nas redes','Medo de decepcionar alguém','Não me sentir parte do grupo','Falar em público','Conflitos em casa','Mudanças inesperadas','Pensar no futuro'] },
  { title:'Pensamentos', prompt:'Quais frases já passaram pela sua cabeça?', choices:['E se eu errar?','Queria que me entendessem','Preciso de um tempo','Posso mudar de ideia','Não preciso decidir tudo agora','Queria pedir ajuda','Tem coisa que ainda estou descobrindo'] },
  { title:'Limites pessoais', prompt:'Que limites você gostaria que respeitassem?', choices:['Pedir antes de postar algo meu','Aceitar quando eu digo não','Me dar tempo para responder','Respeitar minha privacidade','Não fazer piada com algo que me incomoda','Perguntar antes de dar conselho'] },
  { title:'O que me ajuda', prompt:'O que costuma ajudar quando o dia fica pesado?', choices:['Conversar com alguém de confiança','Colocar música','Escrever ou desenhar','Dar uma caminhada','Fazer uma pausa do celular','Ficar em um lugar mais tranquilo','Ter companhia em silêncio','Dizer de que ajuda preciso'] },
  { title:'Planos e curiosidades', prompt:'O que você gostaria de explorar no seu tempo?', choices:['Aprender algo novo','Criar um projeto meu','Conhecer lugares diferentes','Cuidar melhor do meu tempo','Encontrar gente com gostos parecidos','Testar um hobby','Ainda estou descobrindo'] }
];

const initialLook = {
  model:'masculine',
  skin:'#b97450', hair:'#37283d', eyes:'#41292e', outfit:'#a288ee', shoes:'#fff0b5',
  hat:'headphones', marks:'freckles', hairStyle:'curls', clothes:'hoodie', feet:'sneakers',
  glasses:'none', expression:'soft'
};
const sections = ['editor','world','summary'].map(id => document.getElementById(id));
const get = id => document.getElementById(id);
const heading = get('heading');
const tabs = document.querySelector('.appearance-tabs');
const options = get('appearance-options');
const topicTitle = get('topic-title');
const topicChoices = get('topic-choices');
const note = get('topic-note');
const nameInput = get('character-name');
const resetDialog = get('reset-dialog');
const navigation = [...document.querySelectorAll('.steps button')];
let look, answers, category, topic, step, unlocked;

function button(label, className) {
  const element = document.createElement('button');
  element.type = 'button';
  element.className = className;
  element.textContent = label;
  return element;
}

function updateAvatar() {
  drawCharacter(get('avatar'), look);
  const description = categories.flatMap(({groups}) => groups.map(([key, label, values]) => {
    const selected = values.find(([value]) => value === look[key]);
    return label + ' ' + selected[1];
  }));
  get('avatar').setAttribute('aria-label', 'Avatar. ' + description.join('. ') + '.');
}

function renderTabs() {
  categories.forEach(({label, icon}, index) => {
    const tab = button(label, '');
    const marker = document.createElement('span');
    marker.textContent = icon;
    marker.setAttribute('aria-hidden', 'true');
    tab.prepend(marker);
    tab.id = 'look-tab-' + index;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', options.id);
    tab.addEventListener('click', () => showCategory(index));
    tab.addEventListener('keydown', event => {
      const target = {
        ArrowLeft: (index + categories.length - 1) % categories.length,
        ArrowRight: (index + 1) % categories.length,
        Home: 0,
        End: categories.length - 1
      }[event.key];
      if (target === undefined) return;
      event.preventDefault();
      showCategory(target);
      tabs.children[target].focus();
    });
    tabs.append(tab);
  });
}

function showCategory(index) {
  category = index;
  [...tabs.children].forEach((tab, position) => {
    tab.setAttribute('aria-selected', position === category);
    tab.tabIndex = position === category ? 0 : -1;
  });
  options.setAttribute('aria-labelledby', tabs.children[category].id);
  options.replaceChildren();
  for (const [key, label, values] of categories[category].groups) {
    const group = document.createElement('div');
    group.className = 'option-group';
    const title = document.createElement('h3');
    title.textContent = label;
    title.id = 'group-' + key;
    const row = document.createElement('div');
    row.className = 'option-row';
    row.setAttribute('role', 'group');
    row.setAttribute('aria-labelledby', title.id);
    const controls = values.map(([value, label]) => {
      const color = value.startsWith('#');
      const control = button(color ? '' : label, color ? 'swatch' : 'style-option');
      let swatch;
      if (color) {
        control.setAttribute('aria-label', label);
        control.title = label;
        swatch = document.createElement('span');
        swatch.style.backgroundColor = value;
        swatch.setAttribute('aria-hidden', 'true');
        control.append(swatch);
      }
      const refresh = () => {
        const selected = look[key] === value;
        control.setAttribute('aria-pressed', selected);
        if (swatch) swatch.textContent = selected ? '✓' : '';
      };
      control.addEventListener('click', () => {
        look[key] = value;
        controls.forEach(update => update());
        updateAvatar();
      });
      row.append(control);
      refresh();
      return refresh;
    });
    group.append(title, row);
    options.append(group);
  }
}

function renderTopic(focus = false) {
  const data = topics[topic];
  const answer = answers[topic];
  topicTitle.textContent = data.title;
  get('topic-count').textContent = (topic + 1) + ' de ' + topics.length + ' · Marque quantas opções quiser';
  const progress = get('topic-progress');
  progress.max = topics.length;
  progress.value = topic + 1;
  get('topic-prompt').textContent = data.prompt;
  topicChoices.replaceChildren();
  for (const choice of data.choices) {
    const control = button(choice, 'choice');
    control.setAttribute('aria-pressed', answer.choices.has(choice));
    control.addEventListener('click', () => {
      if (answer.choices.has(choice)) answer.choices.delete(choice);
      else answer.choices.add(choice);
      control.setAttribute('aria-pressed', answer.choices.has(choice));
    });
    topicChoices.append(control);
  }
  note.value = answer.note;
  get('next').textContent = topic === topics.length - 1 ? 'Ver minha ficha →' : 'Continuar →';
  if (focus) topicTitle.focus();
}

function renderSummary() {
  const profile = get('profile');
  const name = nameInput.value.trim() || 'Meu avatar';
  get('display-name').textContent = name;
  get('profile-name').textContent = name;
  profile.replaceChildren();
  topics.forEach(({title, choices}, index) => {
    const answer = answers[index];
    const entries = choices.filter(choice => answer.choices.has(choice));
    if (answer.note.trim()) entries.push(answer.note.trim());
    if (!entries.length) return;
    const row = document.createElement('section');
    row.className = 'profile-row';
    const label = document.createElement('h3');
    label.textContent = title;
    const details = document.createElement('p');
    details.textContent = entries.join(' · ');
    row.append(label, details);
    profile.append(row);
  });
  if (!profile.children.length) {
    const message = document.createElement('p');
    message.textContent = 'Seu avatar está pronto. Se quiser acrescentar algo, volte para editar sua ficha.';
    profile.append(message);
  }
}

function showStep(next, focus = true) {
  step = next;
  get('layout').dataset.stage = String(step);
  unlocked = Math.max(unlocked, step);
  navigation.forEach((control, index) => {
    control.disabled = index > unlocked;
    if (step === index) control.setAttribute('aria-current', 'step');
    else control.removeAttribute('aria-current');
  });
  sections.forEach((section, index) => { section.hidden = index !== step; });
  get('shuffle').hidden = step !== 0;
  get('name-card').hidden = step === 2;
  get('name-display').hidden = step !== 2;
  const headlines = [
    ['Monte seu avatar', 'Escolha um visual que combine com você ou experimente algo diferente.'],
    ['Sobre mim', 'Responda como você ou como seu avatar. Pule o que preferir deixar em aberto.'],
    ['Minha ficha', 'Veja o que você escolheu contar e edite quando quiser.']
  ];
  const dot = document.createElement('span');
  dot.className = 'title-dot';
  dot.textContent = '.';
  heading.replaceChildren(headlines[step][0], dot);
  get('subtitle').textContent = headlines[step][1];
  if (step === 1) renderTopic();
  if (step === 2) renderSummary();
  if (focus) heading.focus();
}

function advanceTopic() {
  if (topic === topics.length - 1) showStep(2);
  else {
    topic++;
    renderTopic(true);
  }
}

function resetGame(focus = false) {
  look = { ...initialLook };
  answers = topics.map(() => ({ choices: new Set(), note: '' }));
  unlocked = 0;
  topic = 0;
  nameInput.value = '';
  showCategory(0);
  updateAvatar();
  showStep(0, focus);
}

renderTabs();
resetGame();
document.querySelectorAll('[data-step]').forEach(control => {
  control.addEventListener('click', () => showStep(Number(control.dataset.step)));
});
note.addEventListener('input', () => { answers[topic].note = note.value; });
get('previous').addEventListener('click', () => {
  if (!topic) showStep(0);
  else {
    topic--;
    renderTopic(true);
  }
});
get('next').addEventListener('click', advanceTopic);
get('skip').addEventListener('click', () => {
  answers[topic] = { choices: new Set(), note: '' };
  advanceTopic();
});
get('shuffle').addEventListener('click', () => {
  for (const {groups} of categories) {
    for (const [key, , values] of groups) {
      look[key] = values[Math.floor(Math.random() * values.length)][0];
    }
  }
  showCategory(category);
  updateAvatar();
});
get('restart').addEventListener('click', () => {
  resetDialog.returnValue = '';
  resetDialog.showModal();
});
resetDialog.addEventListener('close', () => {
  if (resetDialog.returnValue === 'reset') resetGame(true);
});
get('print').addEventListener('click', () => window.print());
