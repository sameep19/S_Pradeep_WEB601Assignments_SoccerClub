import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Barcelona',
      description: 'Futbol Club Barcelona (Catalan pronunciation: [fubˈbɔl ˈklub bəɾsəˈlonə] ⓘ), commonly referred to as Barcelona and colloquially known as Barça ([ˈbaɾsə]), is a professional football club based in Barcelona, Catalonia, Spain, that competes in La Liga, the top flight of Spanish football.',
      creator: 'Sameep',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
      type: 'Club',
      tags: ['club', 'spain']
    });

    this.contentList.add({
      id: 2,
      title: 'Real Madrid',
      description: 'Real Madrid Club de Fútbol (Spanish pronunciation: [reˈal maˈðɾið ˈkluβ ðe ˈfuðβol] ⓘ), commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. The club competes in La Liga, the top tier of Spanish football.',
      creator: 'Sameep',
      imgURL: 'https://phantom-marca.unidadeditorial.es/334d23b54f53ef5c43e677ec00385b52/resize/1200/f/jpg/assets/multimedia/imagenes/2022/09/05/16624114863692.jpg',
      type: 'club',
      tags: ['club', 'spain']
    });

    this.contentList.add({
      id: 3,
      title: 'Paris Saint Germain',
      description: 'Paris Saint-Germain Football Club (French pronunciation: [paʁi sɛ̃ ʒɛʁmɛ̃]), commonly referred to as Paris Saint-Germain, Paris, Paris SG or simply PSG, is a professional football club based in Paris, France. They compete in Ligue 1, the top division of French football. As France\'s most successful club, they have won over 40 official honours, including eleven league titles and one major European trophy. Their home ground is the Parc des Princes located in the 16th arrondissement of Paris near the commune Boulogne-Billancourt.',
      creator: 'Sameep',
      imgURL: 'https://media.cntraveler.com/photos/5b2c0684a98055277ea83e26/1:1/w_2667,h_2667,c_limit/CN-Tower_GettyImages-615764386.jpg',
      type: 'club',
      tags: ['club', 'France']
    });
  }

  
}