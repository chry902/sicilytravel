import { createContext, useContext, useReducer } from "react";
// import axios from "axios";
export const myContext = createContext("");
import locationReducer from "./locationReducer";

const initialState = {
  // loading: false,
  // console: null,
  location: [
    {
      id: 1,
      city: "Palermo",
      longitudine: 38.13205,
      latitudine: 13.33561,
      categorie: ["mare", "montagna"],
      cucina: [
        {
          nome: "Pasta al forno",
          descrizione:
            "Piatto unico riservato ad occasioni importanti e composto da anelletti (formato di pasta tipicamente siciliano) conditi con ragù di carne, piselli, caciocavallo, prosciutto e melanzane.",
        },
        {
          nome: "Cannoli e cassata",
          descrizione:
            "I cannoli sono cialde di pasta fritta arrotolata, mentre la cassata è una torta di pan di Spagna, marzapane e frutta candita, entrambi sono ripieni con crema di ricotta.",
        },
        {
          nome: "Street Food",
          descrizione:
            "Numerose sono le specialità: pane ca’ meusa (milza e caciocavallo grattugiato), sfincione (pizza con pomodoro, cipolla e acciughe), arancine (palle di riso impanato e fritto, con ragù di carne o besciamella e prosciutto), pane con panelle e cazzilli (frittelle di farina di ceci e crocchette di patate).",
        },
        {
          nome: "Caponata",
          descrizione:
            "Antipasto o contorno composto da melanzane fritte condite con sugo di pomodoro, sedano, cipolla, olive e capperi in salsa agrodolce.",
        },
        {
          nome: "Involtini di carne",
          descrizione:
            "Secondo a base di sottili fette di carne avvolte, ripiene di pangrattato, aromi e dadini di salumi e formaggi, infilzate in uno spiedino alternate a fette di cipolla e foglie di alloro.",
        },
        {
          nome: "Sarde a beccafico",
          descrizione:
            "Secondo composto da filetti di sarde arrotolati, imbottiti di pangrattato e pinoli. Si tratta di una rielaborazione popolare di un piatto aristocratico a base di beccafichi.",
        },
        {
          nome: "Pasta con le sarde",
          descrizione:
            "Primo di pasta, sarde e finocchietto selvatico arricchiti con uva passa e pinoli. Secondo la tradizione fu invenzione di un cuoco dell’esercito arabo durante la campagna di conquista della Sicilia.",
        },
        {
          nome: "Brioche con gelato",
          descrizione:
            "Si tratta di una brioche farcita con gustoso gelato. Le gelaterie palermitane offrono numerose possibilità di scelta tra i tantissimi gusti disponibili.",
        },
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Palermo-Stemma.svg/1200px-Palermo-Stemma.svg.png",
      image: [
        "https://c0.wallpaperflare.com/preview/88/384/982/italy-island-of-favignana-summer-sun.jpg",
        "https://c4.wallpaperflare.com/wallpaper/953/637/199/the-city-street-italy-old-town-record-hd-wallpaper-preview.jpg",
        "https://c0.wallpaperflare.com/preview/230/545/69/cathedral-dom-monreale-palermo.jpg",
        "https://c4.wallpaperflare.com/wallpaper/135/459/805/italy-chapel-sicily-palermo-wallpaper-preview.jpg",
        "https://c0.wallpaperflare.com/preview/845/978/545/italy-province-of-palermo-sicily-market.jpg",
        "https://c1.wallpaperflare.com/preview/298/941/230/sea-sicily-palermo.jpg",
      ],
      description:
        "La città di Palermo fu fondata dai Fenici nel VII secolo a.C. e utilizzata come punto di trasbordo commerciale. Una pietra miliare importante fu la costruzione di un porto chiamato Panormos, costruito dai greci. Successivamente la città fu conquistata dai Romani, poi occupata dai Vandali e seguita dagli Ostrogoti. Nel corso della storia, il governo della città passò di mano in mano, fino a quando questa conquista fu completata da Garibaldi, che nel 1861 entrò a far parte del Regno d'Italia e poi dell'Italia. Dal 2015 la città è iscritta nella Lista del Patrimonio Mondiale dell'UNESCO.Palermo è una città molto vivace che ha sicuramente qualcosa da offrire. Le palme, il clima, la vegetazione tropicale e l'aspetto esotico della città insieme all'aria di mare vi incanteranno sicuramente. Il fascino straniero della città e dei monumenti più belli sono i motivi principali dell'elevata popolarità di questa destinazione.Tutti i luoghi più importanti di Palermo si trovano nel centro della città, nei quattro quartieri di Albergheria, Capo, Vucciria e La Kalsa, che sono collegati dallo svincolo dei Quattro Canti. Questo può essere considerato allo stesso tempo un punto di riferimento per tutta la città.",
      detti: [
        {
          detto: "Cònzala comu vuoi ca sempri cucuzza è",
          description:
            "Condiscila come vuoi ma sempre zucca rimane. L’espressione indica che qualunque accorgimento si trovi quando la materia di base è insufficiente non si possono ottenere buoni risultati",
        },
        {
          detto: "Jiri ri cassaru e cassaru",
          desc: "Premessa: il cassaro è l’attuale Corso Vittorio Emanuele, strada dritta senza alcuna curva o piegatura. Il detto significa quindi andare dritto per le proprie idee e la propria strada senza sotterfugi, dubbi o incertezze !",
        },
        {
          detto: "Nun mi cuntari li tri jorna du fistinu",
          desc: "Ovvero: non mi raccontare frottole o cose che già conosco !",
        },
        {
          detto: "Ti manciasti lu sceccu e ti cunfunni pi la cura",
          desc: "Si usa generalmente in riferimento alla parte finale di un lavoro spesso difficile da concludere.",
        },
        {
          detto: "Aprili lu duci durmiri, nè livari nè mìttiri",
          desc: "Ovvero ad Aprile, nel constatare che il tepore della primavera porta a “sonnecchiare” dolcemente, si consiglia agli incauti di non togliere né mettere indumenti in quanto la temperatura è estremamente variabile.",
        },
        {
          detto: "Miati l’occhi chi vìttiru Pasqua",
          desc: "si diceva un tempo beati coloro che sono arrivati vivi e felicemente alla nuova Pasqua.",
        },
        {
          detto: "L’ultima vara i Sannuminicu",
          desc: "il detto si riferisce al fatto che durante la processione del festino, nel XVIII sec., l’ultima vara , in ordine gerarchico o storico tra i fercoli era quella con la statua di San Domenico. La cosa era tanto risaputa che si tradusse in proverbio, riferita ad una persona che non giunge mai ed al suo apparire si esce in esclamazione",
        },
        {
          detto: "Nabotta a la utti e na botta a lu timpagnu",
          desc: "un colpo alla botte e uno al coperchio, il detto indica quella persona che nell’esercizio delle proprie attività non avendo il coraggio di scegliere una linea, si comporta in maniera ambigua in modo da lasciare contenti tutti",
        },
        {
          detto: "Sunnu “u lazzu e a strummula”",
          desc: "Sono come il laccio e la trottola. Si dice di persone che stanno sempre insieme in riferimento alla trottola che per girare e stare in equilibrio ha bisogno della corda per fare ciò",
        },
      ],
      attrazioni: [
        {
          spiagge: [
            {
              nome: "Cefalù",
              image:
                "https://www.costacrociere.it/content/dam/costa/costa-magazine/article-images/palermo-beaches/9-spiaggia-cefalu.jpg.image.648.487.high.jpg",
              description:
                "Benvenuto a Cefalù, una delle destinazioni più magiche di Sicilia e dei dintorni di Palermo per poter godere appieno delle coste di questa splendida isola. Non solo è la location preferita di centinaia di migliaia di vacanzieri ogni anno, ma Cefalù è anche una delle piccole città storiche da vedere almeno una volta nella vita. Comoda da raggiungere dalla città di Palermo, Cefalù è una famosa cittadina impreziosita da un inestimabile centro storico che si circonda di acque cristalline e deliziose spiagge di sabbia. Se ancora non ti abbiamo convinto, sappi che Cefalù fa parte del Parco delle Madonie, riserva naturale che copre parte del suo territorio e include altre piccole cittadine come Petralia, Polizzi Generosa, Soprana, Sottana e Gangi.",
            },
            {
              nome: "Mondello",
              image:
                "https://www.costacrociere.it/content/dam/costa/costa-magazine/article-images/palermo-beaches/9-spiaggia-mondello.jpg.image.648.487.high.jpg",
              description:
                "Sarebbe un vero peccato passare per Palermo e non fare un salto alla celebre spiaggia di Mondello. Sebbene si tratti ancora di una città a sé stante, Mondello è un paradiso a poca distanza dal capoluogo che merita una capatina per via della sua spiaggia senza rivali. Questo tratto di costa dalla sabbia bianca e dall’acqua cristallina offre infatti uno dei migliori punti di accesso al mare che la Sicilia abbia da offrire. Immergiti nell’acqua godendoti il lontano spettacolo dei promontori rocciosi macchiati di vegetazione, oppure siedi su uno scoglio e scatta fotografie indimenticabili della tua vacanza in questo posto.",
            },
            {
              nome: "Balestrale",
              image:
                "https://static.fanpage.it/wp-content/uploads/sites/12/2015/07/Balestrate_spiaggia_ovest__lato_paese_.jpg",
              description:
                "Balestrate è una splendida cittadina nei pressi di Palermo che sorge sul Golfo di Castellammare. Non solo è un piccolo gioiello dal valore storico inestimabile, ma è anche la dimora per eccellenza di due splendide spiagge che ogni anno attraggono centinaia e centinaia di turisti. Queste linee di costa, che si estendono fino a Castellammare del Golfo, offrono importanti strutture balneari di lusso e un porto di modeste dimensioni. Sebbene nel periodo estivo gran parte delle spiagge di Balestrate siano organizzate in lidi dove si possono noleggiare ombrelloni e lettini, buona parte della costa è libera, e chiunque può lasciare il suo asciugamano tra le dune di sabbia per gettarsi in un’acqua azzurra e invitante.",
            },
            {
              nome: "Spiaggia di Altavilla",
              image:
                "https://www.costacrociere.it/content/dam/costa/costa-magazine/article-images/palermo-beaches/9-spiaggia-altavilla.jpg.image.648.487.high.jpg",
              description:
                "Benvenuto alla spiaggia di Altavilla Milicia, una spettacolare lingua di costa che sorge a ridosso dell’omonimo paesino. La sabbia dorata e morbida è baciata dal sole e ospita una serie di strutture balneari che rendono il soggiorno qui irresistibile. L’area litoranea è circondata da promontori decorati da vegetazione lussureggiante che fanno dell’esperienza qui un momento magico. Altavilla era anticamente la destinazione prediletta dei nobili, e alcune testimonianze di questa epoca possono ancora essere ammirate in giro per la cittadina. Pensiamo per esempio alla torre normanna che guarda verso Cefalù e Capo Zafferano. Come molti paesi della costa, anche Altavilla tende ad affollarsi di gente nel periodo di alta stagione estivo: vieni qui per noleggiare un ombrellone e trascorrere una giornata indimenticabile, anche insieme ai tuoi bambini. L’acqua è azzurra e pulita, e il fondale digrada con dolcezza a mano a mano che si prende il largo. A sud della spiaggia, inoltre, un paio di calette rocciose offrono riparo e silenzio a chi preferisce scostarsi un po’ dal grande traffico turistico.",
            },
            {
              nome: "Santa Flavia",
              image:
                "https://www.costacrociere.it/content/dam/costa/costa-magazine/article-images/palermo-beaches/9-spiaggia-santa-flavia.jpg.image.648.487.high.jpg",
              description:
                "Santa Flavia offre una spettacolare spiaggia rocciosa a tutti gli effetti che si tuffa in un mare cristallino dalla bellezza impareggiabile. La spiaggia di Santa Flavia è considerata uno dei tesori di Sicilia, e non è un caso: molte navi attraccano qui per permettere ai turisti di godere appieno di un piccolo paradiso sulla terra. Oltre alle acque trasparenti dove tuffarsi è un piacere, vieni per trascorrere una giornata di relax sotto l’ombrellone. E quando hai fame, non devi fare altro che recarti in uno dei moltissimi ristoranti del luogo, dove potrai assaporare la vera cucina siciliana in tutto il suo splendore. Da Santa Flavia puoi fare varie escursioni, come quella alla Secca delle Formiche. L’area è una meta di pellegrinaggio per gli appassionati di immersioni che vogliono assaporare le meraviglie del fondale mediterraneo. Santa Flavia si trova inoltre a un tiro di schioppo dal sito archeologico di Solunto, ed è perfetta per rilassarsi dopo una giornata di esplorazione storica e culturale della zona. Un tempo, Santa Flavia era un punto di riferimento per la pesca locale. Adesso l’area vive perlopiù di turismo, ma il pescato fresco che arriva ogni giorno al porto rifornisce i ristoranti di tutta la zona con prodotti di prima qualità.",
            },
            {
              nome: "Terrasini",
              image:
                "https://www.costacrociere.it/content/dam/costa/costa-magazine/article-images/palermo-beaches/9-spiaggia-terrasini.jpg.image.648.487.high.jpg",
              description:
                "Benvenuto a Terrasini, a pochi chilometri da Cinisi. Questo tratto di costa offre acque cristalline e paesaggi rocciosi semplicemente irresistibili. Rimarrai estasiato davanti alla bellezza delle pietre rossicce che dominano l’area, silenziose e imponenti. Porta la macchina fotografica, ne vale la pena. Vieni a visitare Cala Rossa, raggiungibile solo dopo una breve scalata non troppo adatta ai bambini. Quando passi da qui, ricordati di portare con te un pranzo al sacco e tanta acqua. Le immersioni qui sono molto belle, ma consigliate solo ai veri esperti. Il fondale è insidioso e richiede, infatti, molta attenzione. Evita anche di tuffarti!",
            },
          ],
        },
        {
          monumenti: [
            {
              nome: "Palazzo dei Normanni",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/chapelle-Palatine-Palerme-840x559.jpg",
              description:
                "Il palazzo dei Normanni, che potete trovare in Piazza Indipendenza, è la perfetta rappresentazione del mix culturale di Palermo. Costruito per ospitare gli emiri Arabi, fu in seguito occupato dai Normanni che lo espansero, e successivamente dagli spagnoli. Al giorno d’oggi, è la sede dell’Assemblea Regionale Siciliana. Il suo stile architettonico è cosmopolita e conserva le tracce delle diverse culture che lo hanno abitato. Degli interni del palazzo, ciò che mi ha colpito di più, sono stati i suoi cortili, i giardini e la Sala di Re Ruggero. I mosaici che riportano le scene di caccia sono davvero incredibili! Ma il gioiello del palazzo dei Normanni è la cappella Palatina, un capolavoro in stile Arabo-Normanno-Bizantino. La cappella fu commissionata da Re Ruggero II per ospitare le messe della famiglia reale. La cosa più incredibile presente all’interno della cappella Palatina sono gli incredibili mosaici d’oro, che decorano sia le pareti che il soffitto. In alcuni di essi vi sono rappresentate anche delle figure umane, cosa non molto comune per l’epoca. È la più bella cappella bizantina di Palermo ed è considerata da molti la chiesa più bella di tutta la Sicilia.",
            },
            {
              nome: "San Giovanni degli Eremiti",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/%C3%A9glise-Saint-Jean-des-Ermites-840x630.jpg",
              description:
                "La chiesa di San Giovanni degli Eremiti è una chiesa medievale Normanna. Famosa e facilmente riconoscibile dall’esterno grazie alle sue cupole dal colore rosso intenso, anche il suo interno merita una visita. Il chiostro ed i suoi giardini sono davvero splendidi, e rappresenta il luogo perfetto nel quale riposarsi dal trambusto della vita cittadina. La chiesa, di per sé, è molto semplice, grazie al suo sapiente mix tra stile Musulmano e Normanno.",
            },
            {
              nome: "La Cattedrale di Palermo",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/visiter-Palerme-Cath%C3%A9drale-840x600.jpg",
              description:
                "Per me è il miglior posto da visitare nel capoluogo Siciliano!. Dall’esterno, la cattedrale è semplicemente spettacolare. Sono rimasto particolarmente colpito da quest’enorme architettura unica nel suo genere, un vero melting pot di stili, con un aspetto esteriore decisamente più bello rispetto a quello di Palazzo dei Normanni!. È possibile visitare la cripta e vedere le tombe di re e regine, tra cui anche la tomba di Re Ruggero II. Qui è presente anche il tesoro della cattedrale, una collezione di gioielli reali provenienti dal 12° secolo. Mentre siete qui, dovreste seriamente prendere in considerazione l’idea di salire sui tetti della cattedrale per ammirare un bellissimo panorama che si estende su tutta la città.",
            },
            {
              nome: "Il Mercato di Ballarò",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/march%C3%A9-de-Ballaro-Palerme-840x560.jpg",
              description:
                "A Palermo, vi consiglio di visitare il Mercato di Ballarò, uno dei più grandi e tipici della città. In questo coloratissimo mercato, potrete trovare i migliori prodotti di tutta la Sicilia, compresi frutta, verdura, formaggio e naturalmente pesce. E tutto questo viene offerto a dei prezzi imbattibili! Oltre alle bancarelle di cibo, è possibile trovare anche piatti, prodotti elettronici e molte altre cose economiche.",
            },
            {
              nome: "Le Catacombe dei Cappuccini di Palermo",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/catacombes-des-Capucins-840x517.jpg",
              description:
                "Se siete alla ricerca di una visita alquanto insolita durante il vostro viaggio a Palermo, dovreste assolutamente visitare le Catacombe dei Cappuccini di Palermo. Già, queste catacombe sono uno dei luoghi di interesse da visitare a Palermo, e sicuramente rappresentano il posto più memorabile che ho visitato durante il mio soggiorno. Originariamente, solamente i monaci potevano essere sepolti all’interno delle Catacombe del Monastero dei Cappuccini. Ma col passare del tempo, molti siciliani, per lo più provenienti da famiglie nobili, chiesero di poter essere sepolti lì. Grazie ad un processo di disidratazione ed imbalsamazione, i corpi sono rimasti molto ben conservati. Nelle loro volontà, i defunti sceglievano anche i vestiti con i quali desideravano essere imbalsamati. Le famiglie potevano visitarli e fare donazioni al monastero, permettendo ai monaci di mantenere i corpi. Grazie a queste donazioni, le catacombe sono sopravvissute fino ai giorni nostri. Oggi le catacombe contano quasi 8.000 mummie divise in diverse sezioni: monaci, donne, uomini, bambini, ecc… La visita è particolarmente suggestiva perché la maggior parte di queste sono esposte su delle pareti e sono tuttora estremamente ben conservate. La mummia più famosa e tra quelle meglio conservate al mondo è Rosalia, una bambina di 2 anni morta di polmonite. I suoi capelli ed il suo viso sono così ben conservati, che sembra davvero stia dormendo. Decisamente inquietante! Ovviamente, non vi consiglierei di andarci con dei bambini piccoli. Per favore, ricordate che è vietato scattare fotografie all’interno delle catacombe.",
            },
            {
              nome: "Concattedrale di Santa Maria dell’Ammiraglio (La Martorana)",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/eglise-Sainte-Marie-de-l%E2%80%99Amiral-Palerme-840x556.jpg",
              description:
                "La chiesa di Santa Maria dell'Ammiraglio, sede della parrocchia di San Nicolò dei Greci e nota come Martorana, ed è ubicata nel centro storico di Palermo. Adiacente alla chiesa di San Cataldo, si affaccia sulla piazza Bellini ove affianca il Teatro omonimo e fronteggia la chiesa di Santa Caterina d'Alessandria ed il prospetto posteriore del Palazzo Pretorio. La chiesa appartiene all'eparchia di Piana degli Albanesi, circoscrizione della Chiesa italo-albanese, e officia la liturgia per gli italo-albanesi residenti in città secondo il rito bizantino[3][4][5]. La comunità è parte della Chiesa cattolica, ma segue il rito e le tradizioni spirituali che l'accomunano in gran parte alla Chiesa ortodossa. Edificio bizantino e normanno del Medioevo con torre di facciata, si contraddistingue per la molteplicità di stili che s'incontrano, in quanto, con il susseguirsi dei secoli, fu arricchita da vari altri gusti artistici, architettonici e culturali. Oggi si presenta difatti come chiesa-monumento storico, frutto delle molteplici trasformazioni e sottoposta inoltre a tutela nazionale. Dal 3 luglio 2015 fa parte del patrimonio dell'umanità (UNESCO) nell'ambito dell'Itinerario Arabo-Normanno di Palermo, Cefalù e Monreale.",
            },
            {
              nome: "La Cattedrale di Monreale",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/Cath%C3%A9drale-de-Monreale-Sicile-840x581.jpg",
              description:
                "Se avete qualche giorno in più da trascorrere durante le vostre vacanze a Palermo, vi consiglio vivamente di visitare la Cattedrale di Monreale. Questa attrazione da non perdere si trova a 40 minuti in auto dal centro di Palermo e sarebbe un vero peccato perdersela. Classificata come patrimonio mondiale dell’UNESCO, rappresenta un capolavoro di architettura, specialmente il suo interno. Questa chiesa in stile Normanno-Bizantino possedeva 2 torri. Dopo essere stata colpita da un fulmine, adesso ne rimane solamente 1 e mezza. Appena metterete piede al suo interno, ne rimarrete estasiati! È ricoperta da oltre 6.500 metri quadrati di mosaici d’oro, raffiguranti scene del Nuovo e dell’Antico Testamento. Davvero incredibile! Accanto alla cattedrale, potrete anche ammirare il chiostro. È davvero bello e ogni colonna ha una sua decorazione unica. Dopo la vostra visita alla cattedrale, dovreste fare un giro nella città di Monreale, per godervi alcuni dei suoi bei punti panoramici.",
            },
          ],
        },
      ],
      musei: [
        {
          nome: "",
          image: "",
          description: "",
        },
      ],
      eventi: [
        {
          nome: "Venditti e De Gregori",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/venditti-degregori-biglietti.jpg",
          description: "",
          luogo: "PALERMO, Velodromo Borsellino",
          data: "giovedì, 25/08/2022, 21:30",
        },
        {
          nome: "Mannarino",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/mannarino-biglietti.jpg",
          description: "",
          luogo: "Palermo, Teatro di Verdura",
          data: "dom., 04/09/2022, 21:30",
        },
        {
          nome: "Francesco Gabbani",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/gabbani-biglietti-2.jpg",
          description: "",
          luogo: "PALERMO, Teatro di Verdura",
          data: "venerdì, 16/09/2022, 21:00",
        },
        {
          nome: "Umberto Tozzi",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/tozzi-biglietti-2.jpg",
          description: "",
          luogo: "PALERMO, Teatro di Verdura",
          data: "sabato, 24/09/2022, 21:00",
        },
        {
          nome: "Daniele Silvestri",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2021/daniele-silvestri-teatri-biglietti.jpg",
          description: "",
          luogo: "PALERMO, Teatro al Massimo",
          data: "giovedì, 03/11/2022, 21:00",
        },
      ],
    },
    {
      city: "Agrigento",
      longitudine: 13.576548,
      latitudine: 37.31109,
      categorie: ["mare", "montagna"],
      cucina: [
        {
          nome: "Cavatelli all’agrigentina",
          descrizione:
            "Piatto unico riservato ad occasioni importanti e composto da anelletti (formato di pasta tipicamente siciliano) conditi con ragù di carne, piselli, caciocavallo, prosciutto e melanzane.",
        },
        {
          nome: "Maccu di fave",
          descrizione:
            "Uno dei piatti più poveri della cucina siciliana. Nella sua versione più semplice è una purea che si ricava facendo cuocere le fave secche, unite a uno spicchio d’aglio, finche si disfano. Si può consumare da sola, con un filo di olio extravergine di oliva, o come condimento per una pasta. Sublime.",
        },
        {
          nome: "Minestra di San Giuseppe",
          descrizione:
            "È una zuppa a base di fave e legumi vari, chiamata anche Macco di San Giuseppe per un’antica tradizione secondo la quale di San Giuseppe si preparasse e si offrisse del cibo ai più poveri.",
        },
        {
          nome: "Taganu di Aragona",
          descrizione:
            "Il Taganu (o Tianu) d’Aragona è un piatto barocco. Ricorda, per ricchezza di ingredienti e complessità, la sontuosa pasta al forno descritta da Tomasi di Lampedusa nel Gattopardo. È un piatto unico tipico di Aragona, cittadina a pochi chilometri da Agrigento. Si consuma solitamente il sabato di Pasqua ed è una sorta di torta di pasta composta da strati di pasta, ragù di carne, uova e tuma, che la cottura al forno fonde e uniforma. Una gioia per tutti i palati. La parola Taganu indica il tegame di terracotta un tempo utilizzato per la cottura. Questo, a cottura ultimata, veniva rotto per liberare e gustare il contenuto. Questo piatto è talmente apprezzato da diventare oggetto di unasagra ad esso dedicata, che si tiene ogni anno in concomitanza con la Pasqua.",
        },
        {
          nome: "Lu Cuddiruni di Siculiana",
          descrizione:
            "Piatto povero ma gustosissimo, il Cuddiruni è una focaccia farcita, realizzata da un impasto il cui ingrediente più prezioso è il lavoro delle massaie. Queste infatti, “caddiavanu” per lungo tempo l’impasto, cioè lo lavoravano con le mani, aggiungendo olio di oliva, per renderlo più morbido. Il Cuddiruni è farcito di solito con patate, pomodoro e cipolla, ma ne esistono molte varianti, tutte ugualmnte appetitose.",
        },
        {
          nome: "Minestra i Sicci",
          descrizione:
            "Da aprile a luglio, nelle località marinare vicino ad Agrigento (come Siculiana) i pescatori pescano una gran quantità di seppie. Nel corso dei secoli, le loro migli hanno perfezionato questo semplice ma molto saporito piatto, che è una minestra il gusto tipico delle seppie alla delicata dolcezza dei piselli.",
        },
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Stemmacitt%C3%A0diAgrigento.svg/464px-Stemmacitt%C3%A0diAgrigento.svg.png",
      image: [
        "https://media.istockphoto.com/photos/the-temple-of-concordia-in-the-valley-of-the-temples-at-agrigento-picture-id1130530094?k=20&m=1130530094&s=612x612&w=0&h=4ww47HCIkG0qi0uaNjkpbEt6r8WUhsY9S1_cw2B8Z-Q=",
        "https://media.istockphoto.com/photos/the-greek-temple-of-juno-in-the-valley-of-the-temples-agrigento-italy-picture-id1325055769?k=20&m=1325055769&s=612x612&w=0&h=77dRmrue5Ixq3gzoZzgk7C2ZUgH2z_cMqcu01hx_AzQ=",
        "https://media.istockphoto.com/photos/temple-of-concordia-with-statue-of-icarus-on-sicily-picture-id1315604760?k=20&m=1315604760&s=612x612&w=0&h=zFoUlbjOk0eWgAttz23gnas3fPEJDKOw9jVYh4Vruic=",
        "https://media.istockphoto.com/photos/punta-bianca-agrigento-in-sicily-italy-white-beach-with-old-ruins-of-picture-id1289288081?k=20&m=1289288081&s=612x612&w=0&h=g-9U2iv5HXh5ggbsHRRVbKkJ3dGc3gtpb88kLlz5nJw=",
        "https://media.istockphoto.com/photos/sciacca-picture-id525422761?k=20&m=525422761&s=612x612&w=0&h=9tLOvD2RFXV32f-g1cIDEPTDOLfiP1KDQeeeueTfh0I=",
        "https://media.istockphoto.com/photos/stairway-to-get-to-the-cathedral-palma-di-montechiaro-picture-id626640740?k=20&m=626640740&s=612x612&w=0&h=5HUiW2WnlrXCCHLNA8Uqa39IgEhQuv-tuoVxC6gWB5E=",
      ],
      description:
        "Fondata nel 581 a.C. dai coloni Rodii e Cretesi della vicina Gela, Akragas divenne in breve tempo una delle più importanti città della Magna Grecia, in Sicilia seconda solo a Siracusa. L’area urbana aveva un’ampiezza di 456 ettari ed era circondata da mura di fortificazione con nove porte d’ingresso. La popolazione era di circa 300.000 abitanti ed era considerata “la più bella città dei mortali”. Nel 210 a.C. venne saccheggiata dai Romani e assoggettata all’Impero ma conobbe nei secoli successivi, l’invasione e la riedificazione da parte degli Arabi che la ricostruirono sulla cima della collina in cui oggi si ammira il centro storico caratterizzato appunto dalla tipica conformazione araba, con le sue piccole viuzze e cortili che convergono verso la Via Atenea, che è da considerare anche oggi la più importante arteria della città. La via Atenea  da Porta di Ponte, attraversa interamente il centro storico e su di essa si affacciano bellissimi palazzi  e numerose chiese frutto di stili di costruzione a volte totalmente diversi tra loro che contengono all’interno dei veri e propri tesori di arte sacra molto spesso sconosciuti al grande pubblico. Tra questi, all’interno delle chiese, si possono visionare numerose opere del Serpotta e del Gagini. Caratteristiche e pregevoli le chiese dell’Addolorata e di San Francesco di Paola, ubicate nel popolare quartiere Rabato, di San Giuseppe, San Domenico, dell’Itria o Sant’Alfonso, dell’Immacolata e di S.Maria dei Greci costruita sui resti di un tempio greco. Nel cuore vecchio della città esistono ancora piccole osterie dove si mesce il vino e si servono sarde salate ed olive schiacciate.",
      detti: [
        {
          detto: "Cu mancia fa muddichi",
          description:
            "Chi mangia fa briciole. E' la frase che si utilizza per specificare che inevitabilmente se si fa e si lavora si devono lasciare le tracce.",
        },
        {
          detto: "Cu' nesci, arrinesci",
          desc: "Chi va fuori, riesce. E' il proverbio che tutti i nonni e gli anziani utilizzano per i giovani e per spiegare in 3 parole la famosa fuga di cervelli",
        },
        {
          detto: "E ci batti cu lu pupu! E’ San Calò e nun’è pupu!",
          desc: "Ancora insisti con questo dannato pupazzo! E’ San Calogero e non è un pupazzo. Certo, nei proverbi dialettali non può mancare anche un riferimento al nostro Santo nero, tanto amato dagli agrigentini e il rispetto verso questa figura, quindi per la traduzione e traslazione proverbiale è semplice capire che non si insiste nelle cose, perchè San Calò non è un 'pupo' ma il Santo!",
        },
        {
          detto: "Chiù scuru di mezzanotti ‘un pò fari",
          desc: "Più buio di mezzanotte non può fare. La classica espressione che sancisce che peggio di così...non può andare!",
        },
        {
          detto: "Ci dissi lu surci a la nuci, dammi tempu ca ti perciu…",
          desc: "Disse il topo alla noce “dammi tempo che riusciro a bucarti”. La sacrosanta verità, persistere e non mollare porta sempre ad un risultato finale",
        },
      ],
      attrazioni: [
        {
          spiagge: [
            {
              nome: "ERACLEA MINOA",
              image:
                "https://travel.thewom.it/pictures/2022/06/17/eraclea-minoa.jpeg",
              description:
                "Eraclea Minoa è senza dubbio una delle più belle spiagge della costa di Agrigento inserita all'interno di un'oasi naturalistica mozzafiato. Si trova tra il fiume Platani e il promontorio di Capo Bianco dove troverete interessanti resti archeologici di Eraclea Minoa. Qui troverete spiaggia bianca e mare trasparente circondata da pineta. ",
            },
            {
              nome: "SCALA DEI TURCHI",
              image:
                "https://travel.thewom.it/pictures/2022/04/19/scala-dei-turchi_4.jpeg",
              description:
                "È una delle spiagge più conosciute di tutta Sicilia, caratterizzata da una scogliera bianca e mare azzurro. Si trova nel comune di Realmonte. Le pareti bianche sono state modellate dal vento e dalle correnti marine. A formare la bianca scogliera è una roccia molto particolare chiamata marna composta da argilla e carbonati che gli conferiscono il tipico colore candido.",
            },
            {
              nome: "CAPO ROSSELLO ",
              image:
                "https://travel.thewom.it/pictures/2022/06/17/capo-rossello.jpeg",
              description:
                "Sempre nel comune di Realmonte, Capo Rossello è uno sperone di roccia rossa da cui si può ammirare la Scala dei Turchi e il mare blu del mediterraneo. Protette dalla roccia di Capo Rossello e chiusa dall'arco di Costabianca, troverete due spiaggette di sabbia dorata: una cittadina e un’altra selvaggia. ",
            },
            {
              nome: "BOVA MARINA",
              image:
                "https://travel.thewom.it/pictures/2022/06/17/bova-marina.jpeg",
              description:
                "Una distesa di sabbia dorata contrastata dall'azzurro del mare e dal colore latteo di Capo Bianco. Bova marina è un paradiso da visitare assolutamente. A fianco alla spiaggia attrezzata, c'è un paradiso caraibico che vi aspetta.",
            },
          ],
        },
        {
          monumenti: [
            {
              nome: "La Valle dei Templi",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/10/vallee-des-temples-Agrigente-840x467.jpg",
              description:
                "La Valle dei Templi è l’attrazione da non perdere per ECCELLENZA se vi trovate ad Agrigento. È uno dei siti storici più famosi della Sicilia. Elencato come Patrimonio Mondiale dell’UNESCO, questo sito archeologico si trova a sud della città di Agrigento. Nel parco si possono trovare 8 templi, tutti costruiti tra il 510 ed il 430 a.C. I 2 più famosi sono il tempio della Concordia ed il tempio di Hera, noto anche come tempio di Giunone. Dato che sono i due che si sono preservati nella maniera migliore in tutta la valle, potrete davvero comprendere quanto siano imponenti!",
            },
            {
              nome: "Il Mercato di Agrigento",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/12/%C3%A9glise-Saint-Jean-des-Ermites-840x630.jpg",
              description:
                "Quando vi dirigete ad Agrigento dalla Valle dei Templi, potete fermarvi al mercato di Agrigento, che si tiene ogni venerdì. Non aspettatevi di vedere il tipico mercato Siciliano pieno di bancarelle di frutta e verdura, sono presenti principalmente bancarelle di vestiti ed accessori per la cucina. Se avete ancora un po’ di spazio in valigia perché non fermarsi per qualche acquisto? Ad ogni modo prestate molta attenzione alle merci contraffatte, in particolare per quanto riguarda scarpe e borse. È ancora presente qualche bancarella che vende salumi e formaggi a prezzi davvero economici. Può essere il posto perfetto per fare un po’ di spesa. Il mercato è piuttosto grande e tutto viene venduto a prezzi molto economici.",
            },
            {
              nome: "Fate una passeggiata nel centro storico di Agrigento",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/10/vieille-ville-Agrigente-840x560.jpg",
              description:
                "Il centro storico di Agrigento è un bellissimo posto per fare una passeggiata, con le sue splendide chiese e le belle strade di sanpietrini. A meno che non siate avversi alle scale! Il percorso inizia dalla via Atenea, la strada principale del centro storico. Lungo la strada, troverete dei cartelli che vi indicheranno i monumenti da vedere o le attrazioni da visitare ad Agrigento, soprattutto chiese e palazzi. Il Monastero dello Spirito Santo, con le sue torte di mandorle fatte dalle suore e la Cattedrale di San Gerlando sono le più famose. Durante la visita, potrete anche andare a vedere la Chiesa di Santa Maria dei Greci ed il Palazzo Episcopale. Il percorso più rapido dura circa 1 ora a piedi.",
            },
            {
              nome: "Sciacca",
              image:
                "https://www.voyagetips.com/wp-content/uploads/2017/10/Sciacca-Sicile-840x455.jpg",
              description:
                "Nei dintorni di Agrigento ed Eraclea Minoa, non esitate a scoprire la città balneare di Sciacca. Sciacca ha molti monumenti e chiese da visitare. Quelli da non perdere sono: La Cattedrale, Il Castello Luna, Il Castello Incantato, Il Palazzo Steripinto, La Chiesa di Santa Margherita,Porta San Salvatore. La fama di Sciacca è dovuta principalmente alle sue terme, che sono tra le più famose di tutta la Sicilia. Tra queste c’è anche un bagno di fango di 56 gradi o un bagno turco situato presso le grotte naturali di San Calogero. Questi bagni sono ben noti per essere altamente terapeutici per le malattie respiratorie ed i reumatismi.",
            },
          ],
        },
      ],
      musei: [
        {
          nome: "",
          image: "",
          description: "",
        },
      ],
      eventi: [
        {
          nome: "Irama",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/irama-estate-biglietti.jpg",
          description: "",
          luogo: "Viale G. La Loggia, 92100 AGRIGENTO AG",
          data: "sabato, 03/09/2022, 21:00",
        },
        {
          nome: "Eros Ramazzotti",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/eros-biglietti-2.jpg",
          description: "",
          luogo: "Viale G. La Loggia, 92100 AGRIGENTO AG",
          data: "sabato 17, domenica 18/09/2022, 21:00",
        },
        {
          nome: "Il Volo",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/il-volo-biglietti.jpg",
          description: "",
          luogo: "Viale G. La Loggia, 92100 AGRIGENTO AG",
          data: "giovedì, 28/07/2022, 21:30",
        },
        {
          nome: "Capo Plaza",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/capo-plaza-biglietti.jpg",
          description: "",
          luogo: "Viale G. La Loggia, 92100 AGRIGENTO AG",
          data: "giovedì, 25/08/2022, 21:30",
        },
        {
          nome: "Pink Floyd Legend - Atom Heart Mother",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/pink-floyd-atom-biglietti-2.jpg",
          description: "",
          luogo: "Viale G. La Loggia, 92100 AGRIGENTO AG",
          data: "domenica, 21/08/2022, 21:00",
        },
      ],
      id: 2,
    },
    {
      city: "Siracusa",
      longitudine: 37.075474,
      latitudine: 15.286586,
      categorie: ["mare"],
      cucina: [
        {
          nome: "Scacciate",
          descrizione:
            "Sono anche conosciute come schiacciate di Siracusa, sono un piatto tipico dello street food della città e sono piccole focacce al forno ripiene, dalle melanzane, al pomodoro, fino alla salsiccia o altro. Le scacce si distinguono in due tipi: le scacce ripiene, che hanno la forma di calzone e quelle arrotolate che sono al pomodoro, il cui impasto, in questo caso, deve prevedere una sfoglia sottilissima.",
        },
        {
          nome: "Cucche",
          descrizione:
            "Sono una forma di rustici molto conosciuta a Siracusa e nei sui dintorni. Le chiamano anche 'cucche daancucchiare', ovvero da 'mettere insieme', poiché sono minute e gustose, una tira l'altra. Difatti, sono piccole strisce di pasta farcite solitamente con formaggio e salsiccia, anche se talvolta il condimento può variare. Hanno origini molto antiche, poiché si usava prepararle anche anni addietro, quando avanzavano delle strisce dalla pasta del pane, che veniva fatto in casa.",
        },
        {
          nome: "Pastizzetti",
          descrizione:
            "Chiamati anche pastizzetta o pastieri, sono un piatto siracusano delle tradizioni pasquali della città anche se, oggigiorno, è possibile ritrovarli anche nei menù dello street food locale. Si tratta di piccoli fagottini di pasta con all'interno un ripieno di carne di agnello e di riso. Siccome sono ottimi da mangiare sia caldi, appena cotti, che freddi, i pastizzetti costituiscono anche il piatto ideale per le gite fuoriporta, soprattutto quella del Lunedì dell'Angelo!",
        },
        {
          nome: "Pasta fritta alla siracusana",
          descrizione:
            "La pasta fritta è indubbiamente uno dei piatti che più rappresenta la tradizione culinaria della città di Siracusa, poiché ha origini molto antiche e ancora oggi viene riproposta nei locali di cucina tipica. Si tratta di un piatto di spaghetti, solitamente molto sottili, come possono essere i capelli d'angelo, mantecati con le acciughe, olio di olive e, infine una spolverata di pangrattato tostato, che dona croccantezza al piatto",
        },
        {
          nome: "Lolli con fave",
          descrizione:
            "Sono un piatto tipico della Sicilia sud-orientale e, in particolare, devono la loro origine alla fava cottoia, un tipo di legume molto utilizzato nella città di Modica. I lolli sono un tipo di pasta, fatta a mano, dalla forma allungata. Sia oggi, che nell'antichità, era considerato un piatto povero, ma molto apprezzato per le sue proprietà nutrizionali.",
        },
        {
          nome: "Matalotta",
          descrizione:
            "Altro non è che una zuppa di pesce, che deve il suo nome al termine francese 'matelote', che significa pesce stufato nel vino. Il pesce che viene utilizzato per la zuppa, infatti, viene cotto del vino bianco e deve essere rigorosamente pesce da brodo, come per esempio il pesce fagiano o le triglie, ovvero pieno di lische, per poter conferire un sapore più intenso. L'altro ingrediente immancabile per questa zuppa di pesce sono i capperi.",
        },
        {
          nome: "Puppetti i muccu",
          descrizione:
            "Sempre a base di pesce, queste polpettine impastate con uova e pangrattato e poi fritte in padella. La particolarità di queste polpette è che vengono realizzate con pesce neonato, ovvero delle specialità la cui pesca è tendenzialmente vietata, se non dietro ad apposita autorizzazione. Per questo motivo, è possibile trovare l'ingrediente base soltanto in pescherie certificate e nei relativi ristoranti che si servono da esse.",
        },
        {
          nome: "Stimpirata",
          descrizione:
            "E' una preparazione utilizzata per la carne o per il pesce ed è fondamentalmente un condimento a base di carote, patate e olive, che poi vengono saltate tutte insieme in padella con olio, aglio, menta e aceto. L'utilizzo più diffuso di tale preparazione è per il coniglio alla stimpirata, una ricetta tipica della cucina siracusana e siciliana in generale, che viene denominata anche coniglio in agrodolce, per il contrasto dei sapori.",
        },
        {
          nome: "Gghiotta",
          descrizione:
            "Esistono diverse variante della gghiotta siracusana, che prevedono che possano essere utilizzati capperi, pomodori e che possa essere cotta al forno o in tegame; in realtà, questa ricetta non è altro che un insieme di verdure, utilizzato sia come contorno che come condimento per ricette soprattutto di pesce. Le più comuni sono melenzane, peperoni, patate ed è per questo che la gghiotta assomiglia molto alla caponata, ma è possibile trovarla anche con altri tipi di verdure: proprio per questo motivo, è anche denominata ricetta di riciclo.",
        },
        {
          nome: "Vavaluci",
          descrizione:
            "Non solo in Francia, ma anche a Siracusa è possibile trovare nei menù dei ristoranti e sulle tavole dei piatti a base di lumache, qui meglio conosciute come 'li vavaluci' o babbaluci. Da sempre considerate un piatto pregiato, la ricetta tradizionale le vuole stufate in padella con il pomodoro, le cipolle, i peperoni e l'aceto. Talvolta, è possibile anche gustarle 'all'insalata', soffritte con aglio, olio e sale. Per mangiarle, se non si è pratici nella tecnica della 'sucata', è d'obbligo munirsi di stuzzicadenti!",
        },
        {
          nome: "I Totò",
          descrizione:
            "I totò sono biscotti morbidi dalla forma ovale o tondeggiante, ricoperti di glassa di cacao, Questi biscotti sono anzi più veri a propri dolcetti che biscotti. I totò sono dolci che che fanno parte dell’enorme tradizione culinaria della Sicilia. L’origine dei totò e attribuita alla città di Siracusa. I più buoni in assoluto vi invito a mangiarli al panificio storico Aglianò in via misterbianco",
        },
      ],
      logo: "https://upload.wikimedia.org/wikipedia/it/e/e0/Siracusa-Stemma.png",
      image: [
        "https://media.istockphoto.com/photos/syracuse-sicily-aerial-view-of-maniace-fortress-in-ortigia-picture-id1168641186?k=20&m=1168641186&s=612x612&w=0&h=AE9ebFtY22s7mS5FCTHjAfCFTq75kIYPXpr1PcxsMCY=",
        "https://media.istockphoto.com/photos/castello-maniace-ortygia-siragusa-sicily-italy-picture-id175389195?k=20&m=175389195&s=612x612&w=0&h=CJFni34c4vuUF7_jQCay1LsmZybc1K0_2C-l3C_JeTM=",
        "https://media.istockphoto.com/photos/aerial-view-of-ortigia-island-and-siracusa-city-at-sunset-picture-id1364745338?k=20&m=1364745338&s=612x612&w=0&h=i94O_qtT_p9SubeZy_sV4PJp9idaRTyvlm-GpFq2YhY=",
        "https://media.istockphoto.com/photos/aerial-view-of-noto-including-basilica-minore-di-san-nicol-and-picture-id1138980875?k=20&m=1138980875&s=612x612&w=0&h=J4cltjid0yHoETi4NuPr6zPzR58l5qXrrQzJDb4U81c=",
        "https://media.istockphoto.com/photos/cityscape-of-ortygia-the-historical-center-of-syracuse-sicily-italy-picture-id1153191469?k=20&m=1153191469&s=612x612&w=0&h=OYuc8LuyQb4lp2cCwFWB6lAmWnoWutLLc-ewzJfNvY0=",
        "https://media.istockphoto.com/photos/ortygia-waterfront-promenade-and-castello-maniace-siracusa-sicily-picture-id170024032?k=20&m=170024032&s=612x612&w=0&h=l4hGebfl6v1x0FsDWkTWAvYjsX1rs8J0nY53BReVMts=",
        "https://media.istockphoto.com/photos/isola-delle-correnti-cape-passero-sicily-picture-id529840077?k=20&m=529840077&s=612x612&w=0&h=kz5K5skw0_6dAAMs8UWJH93cljLJCb1C6Zfk9Wt7J4w=",
        "https://media.istockphoto.com/photos/sicily-summer-sea-coast-italy-picture-id1159466234?k=20&m=1159466234&s=612x612&w=0&h=rR9UBedxTP3guUxVBERTpqIp8vNqaeLmSnnnU8JW1Fw=",
        "http://www.idiaridellacaponata.it/wp-content/uploads/2020/08/banco_spezie.jpg",
        "http://4.bp.blogspot.com/_YGf5OUOmbY0/RuhbE95id5I/AAAAAAAABX0/uoTodhWl37A/w1200-h630-p-k-no-nu/Rutta_e_ciauli12.jpg",
      ],
      description:
        "Città dai mille volti e con una storia millenaria, Siracusa fu definita da Cicerone “la più bella città della Magna Grecia”. Come dargli torto? Siracusa è una delle perle della Sicilia, capace di affascinare turisti e visitatori in ogni periodo dell’anno col suo clima mediterraneo, un mare cristallino, specialità enogastronomiche uniche e colori che rendono ogni scatto una cartolina da appendere. Crocevia di civiltà fin dall’antica Grecia e patria di Archimede, Siracusa mostra con orgoglio le impronte lasciate dai secoli che ne testimoniano la grandezza e l’importanza nella storia. La città è stata inserita nella World Heritage List dell'UNESCO nel 2005, con due diversi siti: la necropoli rupestre di Pantalica e il centro storico, entrambe testimonianze dello sviluppo di antiche civiltà e della loro progressiva civilizzazione. La storia di Siracusa inizia nel Neolitico, ma il suo vero splendore si deve ai Corinzi che la fondarono nel 734 a.C. e in pochi anni, da un primo nucleo sulla piccola isola di Ortigia, la trasformarono in una Pèntapoli aggiungendo quattro quartieri. Come colonia greca Siracusa ebbe una lunga schiera di tiranni, incluso il temibile tiranno Dionisio, che riuscirono a trasformarla in una sede mecenatica in cui transitarono Eschilo, Pindaro, Ibico, Senofonte e Platone.Un punto di svolta nella cultura del Mediterraneo avvenne con l'arrivo dei Romani, che depredarono la città e la trasformarono nella capitale della Sicilia romana. A questo periodo si devono molti dei monumenti romani simbolo della città, dall'anfiteatro al Ginnasio Romano immerso in un giardino di oleandri. Nonostante le grandi catastrofi naturali che colpirono la città nel 500, Siracusa è riuscita anche nei secoli a mantenere ed accrescere il suo splendore arrivando ad essere il gioiello che milioni di visitatori possono apprezzare ogni giorno.",
      detti: [
        {
          detto: "Lu lupu di mala cuscenza comu opira penza.",
          description:
            "I monti non s’incontrano mai con altri monti Invece le persone prima o poi s’incontrano",
        },
        {
          detto: "Attacca lu sceccu dunni voli lu patruni.",
          desc: "Lega l’asino dove vuole il padrone. Attieniti alle disposizioni di chi sta al di sopra di te",
        },
        {
          detto: "Chiddu chi fa p`i me denti nun fa p`i me parenti.",
          desc: "Ciò che è utile per me non lo è per gli altri.",
        },
        {
          detto:
            "U passareddu na gaggia `nun canta p`amuri, ma canta pi raggia.",
          desc: "Più buio di mezzanotte non può fare. La classica espressione che sancisce che peggio di così...non può andare!",
        },
        {
          detto:
            "Ama a cu t`ama si vo` aviri spassu, chi amari a cu nun t`ama e` tempu persu.",
          desc: "Ama chi ti ama se vuoi trarne piacere, perche` amare chi non ti ama e` tempo perso.",
        },
        {
          detto:
            "Spenni picca e arricchirai, parla picca e `nzirtirai, mancia picca e campirai.",
          desc: "Spendi poco e diventerai ricco, parla poco e sarà la scelta migliore,mangia poco e vivrai a lungo.",
        },
      ],
      attrazioni: [
        {
          spiagge: [
            {
              nome: "FONTANE BIANCHE",
              image:
                "https://travel.thewom.it/pictures/2019/07/01/fontane-bianche.jpeg",
              description:
                "Fontane Bianche è una zona molto turistica a circa 30 km da Siracusa. Ci sono diverse spiagge, private e non, accessibili e con parcheggio libero e a pagamento.",
            },
            {
              nome: "SPIAGGIA DELLE FORMICHE",
              image:
                "https://www.esplorasicilia.com/wordpress/wp-content/uploads/cache/images/2022/06/shutterstock_1016174476/shutterstock_1016174476-4263404809.jpg",
              description:
                "Non ci sono lidi né servizi in questo angolo poco turistico della costa. La spiaggia delle Formiche si raggiunge con un sentiero facile ma impegnativo nelle ore più calde della giornata, e impraticabile senza scarpe da trekking ai piedi ed acqua in abbondanza.",
            },
            {
              nome: "ISOLA DELLE CORRENTI",
              image:
                "https://travel.thewom.it/pictures/2019/07/15/isola-delle-correnti_1.jpeg",
              description:
                "L'isola delle Correnti si trova a 8 km da Portopalo, nella punta più a sud della Sicilia. Una barchetta fa la spola con i turisti a bordo verso l'isoletta. Volendo si può raggiungere anche a piedi percorrendo circa un km a piedi passeggiando su un braccio di sabbia chiara durante la bassa marea.",
            },
            {
              nome: "CALA MOSCA",
              image:
                "https://www.ilturista.info/myTurista/files/1/la_cittadella_dei_maccari_e_la_spiaggia_di_san_lorenzo_presso_la_riserva_di__vendicari_in_sicilia.jpg",
              description:
                "Cala Mosche è una delle più belle spiagge della Sicilia. Si trova all’interno della Riserva Vendicari ed ha sabbia chiarissima circondata da scogli è immersa in una cornice mediterranea selvaggia ed indimenticabile.",
            },
            {
              nome: "FARO MASSOLIVIERI",
              image:
                "https://aff.bstatic.com/images/hotel/840x460/155/155488066.jpg",
              description:
                "Questa riserva naturale di incomparabile bellezza protegge laghi e diverse spiagge incontaminate, tra cui la spiaggia dorata di Vendicari.",
            },
            {
              nome: "ARENELLA",
              image:
                "https://www.voihotels.com/sites/default/files/styles/struttura_video/public/mare%203.jpg?itok=oYzlrJnG",
              description:
                "Questo ampio tratto di sabbia dorata si estende lungo una baia che termina con un promontorio roccioso, a circa 10 km da Siracusa, nella costa orientale della Sicilia. La spiaggia di Arenella è adatta sia a chi ama la tranquillità della spiaggia libera sia a chi non vuole rinunciare alle comodità dei servizi offerti dai diversi stabilimenti balneari e bar che si trovano lungo la costa.",
            },
            {
              nome: "FONTANE BIANCHE",
              image:
                "https://bbvillamatari.it/wp-content/uploads/mare-fontanebianche-bbvillamatari.jpg",
              description:
                "Fontane Bianche si trova a 15 km da Siracusa e rappresenta uno dei luoghi più scelti dai turisti della Sicilia Orientale, perché è caratterizzata da un mare cristallino unico. È proprio il riconoscimento ottenuto dalle belle spiagge che fa sì che questa zona costituisce una forte attrattiva turistica e un punto di riferimento per lo svago estivo. Infatti, questa località offre una di movida notturna molto apprezzata dai giovani siciliani e turisti.",
            },
            {
              nome: "SPIAGGIA DELLA PILLIRINA",
              image:
                "https://www.baccosrl.com/wp-content/uploads/2017/07/plemmirio.jpg",
              description:
                "La spiaggia della Pillirina, è uno degli sbocchi dell’area marina protetta del Plemmirio più famoso perché offre due spiagge dalla bellezza selvaggia ed incontaminata. Oltre le due spiagge bagnate da un mare cristallino, si trovano ruderi di edifici bellici della seconda guerra mondiale, cave e tombe di epoche greche, e un paesaggio ancora poco civilizzato e quasi del tutto rimasto inalterato nel corso degli anni.",
            },
          ],
        },
        {
          monumenti: [
            {
              nome: "Isola di Ortigia",
              image:
                "https://content.skyscnr.com/m/52cfe61e527983d5/original/GettyImages-528744935_doc.jpg?resize=1800px:1800px&quality=100",
              description:
                "La parte più antica di Siracusa, il centro storico più “storico” della città, è in realtà… un’isola! Ortigia è collegata alla terra ferma da due ponti, il Ponte Umbertino e il Ponte Santa Lucia. Qui, in un dedalo di viuzze, sorgono moltissimi dei monumenti e dei musei più importanti, oltre a tanti ristorantini e locali. Il quartiere da dove partire per scoprire la città, e quello dove tornare a fine giornata.",
            },
            {
              nome: "Fonte Aretusa",
              image:
                "https://www.siciliafan.it/wp-content/uploads/sites/3/2019/07/Siracusa-Ortigia-fontana-aretusa-Foto-di-Gino-Di-Leo.jpg",
              description:
                "Aretusa era una ninfa (ovviamente) bellissima. Di lei si innamorò – scorgendola nuda mentre faceva il bagno – il dio Alfeo, figlio di Oceano. Aretusa non doveva essere particolarmente entusiasta delle avances del dio: fuggita sull’isola di Ortigia, a Siracusa, fu tramutata da Artemide in una fonte. La spiegazione “ufficiale” (ma meno affascinante) del perché possa esserci una fonte di acqua dolce a pochi metri dal mare riguarda particolarità della falda freatica locale… ma non importa. La fonte circolare è uno dei simboli di Siracusa, e vi crescono delle verdeggianti piante di papiro. (Ad Alfeo non andò poi così male: trasformato in un fiume in Grecia, percorre tutto il Mar Ionio per ricongiungersi ogni giorno all’amata ninfa-fonte).",
            },
            {
              nome: "Latomia del Paradiso e Orecchio di Dionisio",
              image:
                "https://content.skyscnr.com/m/1cc447a450fb1067/original/GettyImages-179630773.jpg?resize=1800px:1800px&quality=100",
              description:
                "Le latomie erano cave di pietra utilizzate, nell’antichità, come prigioni: se ne trovano molte a Siracusa e dintorni, ma la più famosa è certamente quella detta del “Paradiso”, che ospita il famoso Orecchio di Dionisio, proprio sotto il Teatro Greco. Secondo la leggenda, fu scavata da Dionisio di Siracusa: grazie alla particolare forma della grotta, il crudele tiranno era in grado di ascoltare di nascosto i discorsi dei suoi nemici imprigionati… altro che cimici e microfoni! In effetti, la grotta vanta un’acustica eccezionale, e ogni suono ne risulta amplificato fino a 16 volte. Dunque, attenti a quel che dite!",
            },
            {
              nome: "Teatro Greco",
              image:
                "https://www.fsnews.it/content/dam/fs_news/eventi-2021/luglio/spettacolo/01_07_2021_teatro_greco_siracusa_inda_3.jpg",
              description:
                "Dove vedere una tragedia classica in un teatro antico? Ma al Teatro Greco di Siracusa, naturalmente. Costruito nel V secolo avanti Cristo, passato attraverso molte ristrutturazioni nei secoli successivi, il teatro è oggi il centro del Parco Archeologico della Neapolis di Siracusa, e una delle attrazioni più visitate della Sicilia. A lungo abbandonato in passato, nel corso dell’Ottocento affascinò i primi viaggiatori inglesi sbarcati in Italia per il loro “Grand Tour”, e fa rimanere a bocca aperta ancora oggi i loro nipoti.",
            },
            {
              nome: "Anfiteatro Romano",
              image:
                "https://www.hermes-sicily.com/blog/images/stories/Hermes/monumenti/HER-anfiteatro.jpg",
              description:
                "Risalente all’età imperiale (III – IV secolo d.C.) l’anfiteatro romano è uno dei massimi edifici del genere esistente. Di forma ellittica, i diametri esterni misurano m. 140 x 119; fu parzialmente scavato nella roccia del Temenite. Le spoliazioni spagnole del XVI secolo hanno completamente distrutto la parte in alzato. Due ingressi immettevano nell’arena (m.70×40); il principale, di Nord, era collegato con un ampio piazzale destinato ad accogliere i cocchi degli spettatori, mentre quello secondario, di Sud, è attualmente in uso per la visita al monumento. Nel giardino che precede sono stati sistemati degli imponenti sarcofagi provenienti dalle necropoli di Siracusa e di Megara Hyblaea. L’arena era cinta da un alto podio all’interno del quale vi era un corridoio per l’uscita dei gladiatori e delle belve. Altri due ambulacri correvano a livelli più alti e delle scale servivano agli spettatori per raggiungere l’ordine del posto. Chiudeva la costruzione un portico. Sopra il prospetto del corridoio che cingeva l’arena vi sono ancora i blocchi in marmo dei proprietari dei posti. Al centro dell’arena vi è un ampio ambiente rettangolare, collegato da un canale scavato lungo l’asse Sud, entrambi coperti, funzionali alle opere necessarie per l’allestimento e lo svolgimento degli spettacoli.",
            },
            {
              nome: "Duomo di Siracusa",
              image:
                "https://content.skyscnr.com/m/062560c21142d174/original/GettyImages-178444936.jpg?resize=1800px:1800px&quality=100",
              description:
                "La storia greca di Siracusa viene sempre a galla: così, persino la più importante architettura religiosa della città, il Duomo, è stata in passato un tempio greco, dedicato alla dea Minerva. Collocato nella parte più elevata dell’isola di Ortigia, la Cattedrale metropolitana della Natività di Maria Santissima di Siracusa vanta una delle più belle facciate della Sicilia, progettata e completata nella prima metà del settecento in un misto di elementi barocchi e rococò. L’interno, più antico, ospita anche un bel crocifisso di epoca bizantina e un ricco tesoro.",
            },
            {
              nome: "CHIESA DI SANTA LUCIA ALLA BADIA 'Caravaggio'",
              image:
                "https://www.ilturista.info/myTurista/files/1/la_chiesa_di_santa_lucia_alla_badia_siracusa.jpg",
              description:
                "Uno scrigno in stile barocco, dedicato alla santa patrona della città, e voluto dalla badessa delle suore cistercensi che lo fece costruire tra il 1695 e il 1703. La chiesa di Santa Lucia alla Badia era sede di un monastero del XV secolo. Una ringhiera in ferro battuto corre lungo la facciata dell'edificio a due ordini sovrapposti. L'ordine inferiore racchiude il portale barocco, stretto tra colonne tortili che ne sorreggono il frontone decorato con scene del martirio della santa e stemmi reali spagnoli ai lati. La parte superiore è caratterizzata da lesene ispirate allo stile rococò. L'interno della struttura è a navata unica arricchita da quattro altari barocchi. Sulla volta, affreschi del 1783 celebrano Il Trionfo di Santa Lucia. Dietro l'altare maggiore, la grande tela del Seppellimento di Santa Lucia dipinta nel 1608 da Caravaggio durante il suo soggiorno siracusano, rapisce lo spettatore.",
            },
            {
              nome: "Tempio di Apollo",
              image:
                "https://www.theworldofsicily.com/wp-content/uploads/2019/02/Tempio-di-Apollo-a-Siracusa-930x620.jpg",
              description:
                "Il tempio dorico più antico di tutta la Sicilia è stato trasformato, nel corso dei secoli, in una chiesa bizantina e una moschea araba, una chiesa normanna e – persino – una caserma spagnola. Così, passandoci davanti (si trova nel pieno centro di Ortigia) ci vuole forse un po’ di fantasia per immaginarsi la maestosa struttura originale: provateci, e poi continuate la vostra passeggiata verso il centro!",
            },
            {
              nome: "Ipogeo di piazza Duomo",
              image:
                "https://www.citymapsicilia.it/wp-content/uploads/2016/01/ipogeo01_valdinotomagazine.it_01-870x410.jpg",
              description:
                "L’ipogeo di Piazza Duomo è un percorso sotterraneo a cui si accede da una piccola apertura posta lungo il muro del giardino del Palazzo Arcivescovile. Il percorso è stato riscoperto nel 1869 durante i lavori che hanno interessato l’area della piazza compresa tra l’Arcivescovado e la Chiesa di Santa Lucia alla Badia. Questo è composto da una lunga galleria principale, che congiunge la Piazza Duomo con il Foro Italico, e da una trama di gallerie, cunicoli e altri passaggi sotterranei. Risalente all’età greca, l’ipogeo è stato ampliato durante la seconda guerra mondiale per poter essere utilizzato come rifugio antiaereo. Oltre ai rifugi per i cittadini, fu inoltre scavata una stanza “sacra” per salvaguardare il simulacro e il tesoro della Patrona Santa Lucia. Il percorso ipogeico è dedicato alle vittime civili del bombardamento su Siracusa del 19 luglio 1943; al suo interno pannelli esplicativi corredati da foto e immagini d’epoca mostrano le trasformazioni subite dall’ipogeo nel corso dei secoli.",
            },
          ],
        },
      ],
      musei: [
        {
          nome: "",
          image: "",
          description: "",
        },
      ],
      eventi: [
        {
          nome: "L'infiorata",
          image:
            "https://www.sicilyrentbus.com/biglietteria/wp-content/uploads/2017/05/infiorata-noto.jpg",
          description:
            "Ogni anno la terza domenica di maggio è dedicata all' infiorata evento della città di Noto. La manifestazione è nata nei primi anni 80 dall’incontro di artisti infioratori Genzanesi e Netini, ed è proprio nella città di Genzano, in provincia di Roma, che si sviluppa questa nuova tecnica pittorica. Via Corrado Nicolaci è la via dove nasce l'infiorata, l'impatto è forte, in alto la Chiesa di Montevergini che si contrappone al palazzo del Principe Nicolaci 'Villa dorata', con i balconi che sono stati definiti da molti i più belli del mondo. Oggi l'infiorata di Noto è considerata tra le più belle manifestazioni dell’intera Isola.",
          luogo: "Via Corrado Nicolaci , 96100 NOTO SR",
          data: "dal 13 al 17 Maggio",
        },
        {
          nome: "Rappresentazioni classiche ",
          image:
            "https://www.cosafareinsicilia.it/wp-content/uploads/2019/05/teatro-classico.jpg",
          description:
            "Le rappresentazioni classiche a Siracusa entrano nel vivo in questi giorni di maggio, un evento tra tradizione e modernità è un modo sorprendente di conoscere, vedere, e sopratutto apprezzare i testi classici dei grandi scrittori della Magna Grecia. Per maggiori info guardare il sito www..indafondazione.org",
          luogo: "Viale Paradiso 14, 96100 SIRACUSA SR",
          data: "dal 17 Maggio al 9 Luglio",
        },
        {
          nome: "Claudio Baglioni",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/baglioni-estate-biglietti.jpg",
          description: "",
          luogo: "Viale Paradiso 14, 96100 SIRACUSA SR",
          data: "venerdì, 15/07/2022, 21:00",
        },
        {
          nome: "Gianna Nannini",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/nannini-estate-biglietti.jpg",
          description: "",
          luogo: "Viale Paradiso 14, 96100 SIRACUSA SR",
          data: "giovedì, 11/08/2022, 21:00",
        },
        {
          nome: "Fiorella Mannoia",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/fiorella-mannoia-estate-biglietti.jpg",
          description: "",
          luogo: "Viale Paradiso 14, 96100 SIRACUSA SR",
          data: "venerdì, 19/08/2022, 21:00",
        },
        {
          nome: "Elisa",
          image:
            "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2022/elisa-estate-biglietti.jpg",
          description: "",
          luogo: "Viale Paradiso 14, 96100 SIRACUSA SR",
          data: "sabato, 03/09/2022, 21:00",
        },
      ],
      id: 3,
    },
  ],
};
console.log(initialState.location);
const locationContext = createContext(initialState);

export const UserLocationContext = () => useContext(locationContext);

export default ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  //   const fetchAll = async (par) => {
  //     dispatch({ type: FETCH_ALL_LOCATION_REQUEST });
  //     try {
  //       const { data: vacation } = await axios.get(
  //         `https://sandbox.musement.com/api/v3${par}`
  //       );
  //       dispatch({ type: FETCH_ALL_LOCATION_SUCCESS, payload: location });
  //     } catch (e) {
  //       dispatch({ type: FETCH_ALL_LOCATION_ERROR, payload: e });
  //     }
  //   };

  return (
    <locationContext.Provider value={state}>
      {children}
    </locationContext.Provider>
  );
};
