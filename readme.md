
------------------------- SNACK 1 -------------------------

PRBOLEMA: Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto. Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

SOLUZIONE: 

1 Creo un array con tutti gli invitati 
2 Inserisco tutti gli invitati dentero una array di oggetti e asegno un posto e il nome del tavolo
3 Stampo tutto in conslelog


------------------------- SNACK 2 -------------------------

PROBLEMA: Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:

Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84


SOLUZIONE:

1 Un array di ogetti con tutti gli studenti all'intenro
2 Converto tutti in maiuscolo
3 Seleziono tutti quelli studenti che hanno voto superiore a 70
4 Seleziono tutti quelli studenti che hanno voto superiore a 70 e id superiore a 120  


------------------------- SNACK 3 -------------------------

PROBLEMA : Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

SOLUZIONE: Certamente! Ecco come puoi scomporre il problema in punti senza includere il codice:

1. Definire la struttura degli oggetti per le bici da corsa: Ogni oggetto rappresenterà una bici da corsa e dovrà avere due proprietà: `nome` e `peso`.
2. Creare un array di oggetti
3. Trovare la bici con il peso minore, confrontare il peso di due biciclette e restituire quella con il peso minore.
4. Utilizzare il destructuring per assegnare la bici con il peso minore
5. Utilizzare un template literal per creare una stringa di output che includa il nome e il peso della bici con il peso minore. Stampare questa stringa di output nella console.


------------------------- SNACK 4 -------------------------

PROBLEMA: Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

SOLUZIONE : 

1. Definisci un array vuoto per le squadre di calcio.
2. Definisci un elenco di nomi delle squadre di calcio.
3. Itera attraverso l'elenco dei nomi delle squadre e crea un oggetto per ciascuna squadra.
4. Ogni oggetto dovrebbe avere le seguenti proprietà: nome, punti fatti e falli subiti. Inizializza punti fatti e falli subiti a 0.
5. Genera un numero casuale per punti fatti e falli subiti per ogni oggetto di squadra, sostituendo il valore iniziale di 0.
6. Definisci un nuovo array vuoto per contenere solo nomi e falli subiti.
7. Utilizza la destrutturazione per estrarre solo nome e falli subiti da ciascun oggetto di squadra e aggiungili al nuovo array.
8. Stampa il nuovo array contenente solo nomi e falli subiti nella console.
