import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', './portfolio.component.responsive.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  aboutPortfolio: string = "O trabalho “Portefólio Reflexivo de Aprendizagens” insere-se na avaliação final do Módulo PRA, no âmbito do Curso de Programador Informática do IEFP. Tem como objectivo reflectir sobre o meu próprio processo de aprendizagem, evidenciando competências ao nível do conhecimento e aprendizado durante este percurso.\nO trabalho contém:\n• Apresentação pessoal/ profissional, onde falarei do meu percurso escolar e profissional até aos dias de hoje.\n• Apresentação de cada módulo por ordem numérica, contempla a integração de trabalhos efetuados e respetivas reflexões.\n• Outros trabalhos de interesse.\n• Balanço de aprendizagens e projetos futuros.\n• Agradecimentos.".replace(/\n/g, '<br>');

  aboutMe: string = "Breno Lucena, um cidadão Ítalo-brasileiro, residente em Benavente, entusiasta do Ribatejo, comprometido com a família, amigos e pedaladas. Sou uma pessoa focada, resiliente e sempre em busca de aprendizado.\n\nDescobri este curso durante uma pesquisa no IEFP, buscando formações em tecnologia e informática para maiores de 35 anos. Decidi inscrever-me devido ao meu interesse em aprofundar os meus conhecimentos e entender melhor o funcionamento e comportamento dos softwares nos computadores e tecnologia em geral, além de reconhecer a importância dessas habilidades tanto atualmente quanto para o futuro.\n\nCom formação em Arquitetura no Brasil, após minha mudança da Itália, comecei a trabalhar na área de telecomunicações, especificamente com fibras ópticas, devido ao meu conhecimento em cartografia e ferramentas como Google Earth e AutoCAD. Posteriormente, ingressei na multinacional Sitel como Suporte Técnico de nível 1, atendendo mercados de língua inglesa, italiana e portuguesa. Essa experiência aumentou consideravelmente meu interesse pela tecnologia, levando-me a iniciar uma licenciatura em Engenharia Informática na Universidade Aberta de Lisboa, além de participar de cursos online para aprimorar minhas habilidades em aplicações web.\n\nAtualmente, estou concluindo o curso de programador informático, ansioso para aplicar meu conhecimento no mercado de trabalho.".replace(/\n/g, '<br>');

  bestWorks: string = "Os trabalhos que mais gostei de realizar foram os trabalhos desenvolvidos em ASP.NET, C#, Banco de Dados com SQL e Python, pois adentraram no campo ao qual tenho grande interesse, que é o de desenvolvimento de aplicações web ou na área do desenvolvedor Backend\n\nOs trabalhos foram:".replace(/\n/g, '<br>');
  
  result: string = "De um modo geral, o curso correu bem, a grande maioria dos formadores foram muito competentes e acessíveis, acredito que o ensino online talvez seja menos dinâmico mas em ganhasse no tempo, e na tranquilidade para melhor aprendizado, então acho que o soldo foi positivo."

  thanksGeneral: string = "Primeiramente o grande obrigado vai para minha esposa, que sempre apoiou-me mas nestes últimos tempos, tem sido um grande pilar para mim e para nossa família.\n\nAgradeço ao IEFP pela oportunidade na formação, e ao esforço e atenção da nossa mediadora Inês Santos em reduzir ao máximo o atraso em nosso curso, e a disponibilidade para resolução de problemas.\n\nAos professores, deixo o meu muito obrigado, pelo vosso esforço, carisma e excelência em nos ensinar o conteúdo programático. Sem falar na paciência, já que trata-se de algumas matérias complexas e supostamente de um conhecimento prévio em alguns momentos, além de um pouco mais de atenção dos alunos.\n\nFinalmente agradaço a mim mesmo, que continua persistindo, resistindo, nunca retrocedendo ou rendendo-se seja o tempo, a pressão ou o destino, se o foi desenhado.".replace(/\n/g, '<br>');

  ngOnInit(): void {
  }

}
