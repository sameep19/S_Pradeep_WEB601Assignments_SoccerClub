import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  isError: boolean = false;
  contentArray: Content[] = [
    {
      id: 1,
      title: 'Barcelona',
      description: 'Futbol Club Barcelona (Catalan pronunciation: [fubˈbɔl ˈklub bəɾsəˈlonə] ⓘ), commonly referred to as Barcelona and colloquially known as Barça ([ˈbaɾsə]), is a professional football club based in Barcelona, Catalonia, Spain, that competes in La Liga, the top flight of Spanish football.',
      creator: 'Sameep',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
      type: 'Club',
      tags: ['club', 'spain']
    },
    {
      id: 2,
      title: 'Real Madrid',
      description: 'Real Madrid Club de Fútbol (Spanish pronunciation: [reˈal maˈðɾið ˈkluβ ðe ˈfuðβol] ⓘ), commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. The club competes in La Liga, the top tier of Spanish football.',
      creator: 'Sameep',
      imgURL: '',
      type: 'Club',
      tags: ['club', 'spain']
    },
    {
      id: 3,
      title: 'Paris Saint Germain',
      description: 'Paris Saint-Germain Football Club (French pronunciation: [paʁi sɛ̃ ʒɛʁmɛ̃]), commonly referred to as Paris Saint-Germain, Paris, Paris SG or simply PSG, is a professional football club based in Paris, France. They compete in Ligue 1, the top division of French football. As France\'s most successful club, they have won over 40 official honours, including eleven league titles and one major European trophy. Their home ground is the Parc des Princes located in the 16th arrondissement of Paris near the commune Boulogne-Billancourt.',
      creator: 'Sameep',
      imgURL: 'https://phantom-marca.unidadeditorial.es/334d23b54f53ef5c43e677ec00385b52/resize/1200/f/jpg/assets/multimedia/imagenes/2022/09/05/16624114863692.jpg',
      type: 'Club',
      tags: ['club', 'France']
    },
        { id: 4, title: 'Manchester United', description: 'Manchester United Football Club, commonly referred to as Man United (often stylised as Man Utd), or simply United, is a professional football club based in Old Trafford, Greater Manchester, England. The club competes in the Premier League, the top division in the English football league system. Nicknamed the Red Devils, they were founded as Newton Heath LYR Football Club in 1878, but changed their name to Manchester United in 1902. After a spell playing in Clayton, Manchester, the club moved to their current stadium, Old Trafford, in 1910.', creator: 'Sameep', imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/285px-Manchester_United_FC_crest.svg.png', type: 'Club', tags: ['England', 'club'] },
    { id: 5, title: 'Bayern Munich', description: 'Fußball-Club Bayern München e. V. (FCB, pronounced [ˈfuːsbalˌklʊp ˈbaɪɐn ˈmʏnçn̩] ⓘ), also known as FC Bayern (pronounced [ˌɛft͡seː ˈbaɪɐn] ⓘ), Bayern Munich, or simply Bayern, is a German professional sports club based in Munich, Bavaria. It is best known for its professional men\'s association football team, which plays in the Bundesliga, the top tier of the German football league system. Bayern is the most successful club in German football history, having won a record 33 national titles, including eleven consecutively since 2013, and 20 national cups, along with numerous European honours.', creator: 'Sameep', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/285px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png', type: 'Club', tags: ['Germany', 'club'] },
    { id: 6, title: 'Manchester City', description: 'Manchester City Football Club is a professional football club based in Manchester, England, that competes in the Premier League, the top flight of English football. Founded in 1880 as St. Mark\'s (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club Manchester Stadium in east Manchester, to which they moved in 2003, having played at Maine Road since 1923. Manchester City adopted their sky blue home shirts in 1894, the first season with the current name.[4] Over the course of its history, the club has won nine league titles, seven FA Cups, eight League Cups, six FA Community Shields, one UEFA Champions League, one European Cup Winners', creator: 'Sameep', imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/285px-Manchester_City_FC_badge.svg.png', type: '', tags: ['England', 'club'] },
    { id: 7, title: 'Lionel Messi', description: 'Lionel Andrés "Leo" Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] ⓘ; born 24 June 1987) is an Argentine professional footballer who plays as a forward ', creator: 'Sameep', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', type: 'Player', tags: ['argentina', 'player'] },
  ];

  typeList: string[] = [];
  searchTitle: string = '';
  searchMessage: string = '';
  searchMessageColor: string = '';

  constructor() {}

  ngOnInit(): void {
    this.extractTypes();
  }

  extractTypes(): void {
    this.typeList = Array.from(new Set(this.contentArray.map(content => content.type).filter(type => type !== undefined))) as string[];
  }
  

  searchContent(): void {
    
    this.contentArray.forEach(content => content.highlight = false);

    const foundContent = this.contentArray.find(content => content.title === this.searchTitle);

    if (foundContent) {
      this.searchMessage = `Content with title "${this.searchTitle}" found!`;
      this.searchMessageColor = 'green';
      this.highlightContent(foundContent);
    } else {
      this.searchMessage = `No content found with title "${this.searchTitle}"`;
      this.searchMessageColor = 'red';
    }
  }

  highlightContent(content: Content): void {
    const index = this.contentArray.indexOf(content);
    this.contentArray[index].highlight = true;
  }

  handleImageClick(id: number, title: string): void {
    console.log(`Clicked on image with ID: ${id}, Title: ${title}`);
  }
  addContent(content: Promise<Content>){
    content.then((newContent)=>{
      this.contentArray = [...this.contentArray, newContent]
      this.isError = false;

    });
    content.catch(()=>{
      this.isError = true;
    })
  }
}