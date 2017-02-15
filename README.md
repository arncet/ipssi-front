# IPSSI-site-front

##Installation :

  Clone the project
  `git clone git@github.com:arncet/ipssi-front.git`

  Open the folder
  `cd ipssi-front`

  Install node modules:
  `npm install`

  Run project:
  `npm start`

  Open the following link in your browser:
  `http://localhost:3000`

##Usage :

### Avaliable links : 

<u>Home</u><br/>
http://localhost:3000/ => Home

<u>Profile</u><br/>
http://localhost:3000/profil => Current suer profile<br/>
http://localhost:3000/profil/:id => User profile (according to the id param)

<u>Jobs</u><br/>
http://localhost:3000/offres-de-poste => All avaliable jobs<br/>
http://localhost:3000/offres-de-poste/id => A job (according to the id param)

<u>News</u><br/>
http://localhost:3000/actualites/id => A news (according to the id param)

<u>Intranet - Message</u><br/>
http://localhost:3000/intranet/messages => The Gmail API implementation

<u>Intranet - Calendar</u><br/>
http://localhost:3000/intranet/calendrier => The Google Calendar API implementation

<u>Intranet - News</u><br/>
http://localhost:3000/intranet/actualites => The news list<br/>
http://localhost:3000/intranet/actualites/creer => Create a new news<br/>
http://localhost:3000/intranet/actualites/:id => Display a news (according to the id param)<br/>
http://localhost:3000/intranet/actualites/:id/editer => Edit a news (according to the id param)<br/>

<u>Intranet - Activity reports</u><br/>
http://localhost:3000/intranet/comptes-rendus-d-activites => The activity reports list<br/>
http://localhost:3000/intranet/comptes-rendus-d-activites/creer => Create a new activity report<br/>
http://localhost:3000/intranet/comptes-rendus-d-activites/:id => Display a activity report (according to the id param)<br/>
http://localhost:3000/intranet/comptes-rendus-d-activites/:id/editer => Edit a activity report (according to the id param)<br/>

<u>Intranet - Holiday request</u><br/>
http://localhost:3000/intranet/demandes-de-conges => The holiday requests list<br/>
http://localhost:3000/intranet/demandes-de-conges/creer => Create a new holiday request<br/>
http://localhost:3000/intranet/demandes-de-conges/:id => Display a holiday request (according to the id param)<br/>
http://localhost:3000/intranet/demandes-de-conges/:id/editer => Edit a holiday request (according to the id param)<br/>

<u>Intranet - News</u><br/>
http://localhost:3000/intranet/cvtheque => The CV list<br/>
http://localhost:3000/intranet/cvtheque/creer => Create a new CV<br/>
http://localhost:3000/intranet/cvtheque/:id => Display a CV (according to the id param)<br/>
http://localhost:3000/intranet/cvtheque/:id/editer => Edit a CV (according to the id param)<br/>

<u>Intranet - Jobs</u><br/>
http://localhost:3000/intranet/offres-de-poste => The job list<br/>
http://localhost:3000/intranet/offres-de-poste/creer => Create a new job<br/>
http://localhost:3000/intranet/offres-de-poste/:id => Display a job (according to the id param)<br/>
http://localhost:3000/intranet/offres-de-poste/:id/editer => Edit a job (according to the id param)<br/>

<u>Intranet - Job applications</u><br/>
http://localhost:3000/intranet/candidatures => The job applications list<br/>

<u>Intranet - Users</u><br/>
http://localhost:3000/intranet/utilisateurs => The user list<br/>
http://localhost:3000/intranet/utilisateurs/creer => Create a new user<br/>
http://localhost:3000/intranet/utilisateurs/:id => Display a user (according to the id param)<br/>
http://localhost:3000/intranet/utilisateurs/:id/editer => Edit a user (according to the id param)<br/>

<u>Intranet - Collaborators</u><br/>
http://localhost:3000/intranet/collaborateurs => The collaborator list<br/>
http://localhost:3000/intranet/collaborateurs/creer => Create a new collaborator<br/>
http://localhost:3000/intranet/collaborateurs/:id => Display a collaborator (according to the id param)<br/>
http://localhost:3000/intranet/collaborateurs/:id/editer => Edit a collaborator (according to the id param)<br/>

<u>Intranet - Expense reports</u><br/>
http://localhost:3000/intranet/notes-de-frais => The expense report list<br/>
http://localhost:3000/intranet/notes-de-frais/creer => Create a new expense report<br/>
http://localhost:3000/intranet/notes-de-frais/:id => Display a expense report (according to the id param)<br/>
http://localhost:3000/intranet/notes-de-frais/:id/editer => Edit a expense report (according to the id param)<br/>


### Intranet usage : 

<u>Create a activty report :</u>

Go to [activity reports page](http://localhost:3000/#/intranet/comptes-rendus-d-activites) and click on the "Créer" button : <br/>
Enter the activity reports informations : 

* Client : [String] The customer name.
* Project: [Stirng] The project name.
* Date de début de période : [Date] The mission start date.
* Date de début de période : [Date] The mission end date.
* Responsable client : [String] The customer's reponsable name.
* Fonction (first line) : [String] The customer's reponsable function.
* Contact (n° et/ou e-mail) (first line) : [String] The customer's reponsable email of phone number.
* Responsable entreprise : [String] The company's reponsable name.
* Fonction (second line) : [String] The company's reponsable function.
* Contact (n° et/ou e-mail) (second line) : [String] The company's reponsable email of phone number.
* Rapport d'activité de la periode : [Text] The report content.
* Nombre d'accidents avec arrets hors accidents de trajet : [Number] Number of accidents with stoppages excluding commuting accidents.
* Nombre d'accidents sans arrêt : [Number] Number of accidents without stopping.
* Nombre d'accidents de trajet : [Number] Number of commuting accidents.
* Nombre de jours d'arrêt maladie : [Number] Number of sick days.
* Préciser les dates de congés ou d'absence de la période : [Text] Sick days details.
* Sois un nombre de jour de présence de : [Number] Total presence day.
* Satisfaction du consultant (avancement, qualité, respect des délais) : [Select] Consultant's satisfaction.
* Satisfaction du client (avancement, qualité, respect des délais) : [Select] Customer's sa	tisfaction.
* Point d'amélioration : [Text] Ameliorations.
* Activités restantes à effectuer : [Text] Remaining activities.
* Commentaire : [Text] Comment.


<u>Display a activty report :</u>

Go to [activity reports page](http://localhost:3000/#/intranet/comptes-rendus-d-activites) and click on the "Eye" button on the wanted activity report line.

<u>Edit a activty report :</u>

Go to [activity reports page](http://localhost:3000/#/intranet/comptes-rendus-d-activites) and click on the "Pencil" button on the wanted activity report line.

<u>Delete a activty report :</u>

Go to [activity reports page](http://localhost:3000/#/intranet/comptes-rendus-d-activites) and click on the "Trash" button on the wanted activity report line.

-

<u>Create a expense report :</u>

Go to [expense report page](http://localhost:3000/#/intranet/notes-de-frais) and click on the "Créer" button : <br/>
Enter the expense report informations : 

* Description : [String] The expense report description.
* Localité : [String] The expense report location.
* Montant TTC : [String] The expense report price.

<u>Display a expense report :</u>

Go to [expense report page](http://localhost:3000/#/intranet/notes-de-frais) and click on the "Eye" button on the wanted expense report line.

<u>Edit a expense report :</u>

Go to [expense report page](http://localhost:3000/#/intranet/notes-de-frais) and click on the "Pencil" button on the wanted expense report line.

<u>Delete a expense report :</u>

Go to [expense report page](http://localhost:3000/#/intranet/notes-de-frais) and click on the "Trash" button on the wanted expense report line.

-

<u>Create a holiday request :</u>

Go to [holiday request page](http://localhost:3000/#/intranet/demandes-de-conges) and click on the "Créer" button : <br/>
Enter the holiday request informations : 

* Function : [String] Ypour function.
* Lieu d'intervention : [String] The location.
* Responsable hiérarchique : [String] Your responsable.
* Date de début de congés : [Date] The start date.
* Date de fin de congés : [Date] The end date.
* Type de congés [String] : Holiday resquest type.
* Fait à : [String] Where the resquest were made. 

<u>Display a holiday request :</u>

Go to [expense report page](http://localhost:3000/#/intranet/demandes-de-conges) and click on the "Eye" button on the wanted holiday request line.

<u>Edit a holiday request :</u>

Go to [expense report page](http://localhost:3000/#/intranet/demandes-de-conges) and click on the "Pencil" button on the wanted holiday request line.

<u>Delete a holiday request :</u>

Go to [expense report page](http://localhost:3000/#/intranet/demandes-de-conges) and click on the "Trash" button on the wanted holiday request line.

-

<u>Create a CV :</u>

Go to [your profile](http://localhost:3000/#/profil) and click on the "Créer mon CV" button : <br/>
Enter the CV informations : 

* Titre du CV : [String] The CV's title.
* Experiences professionnelles : [Experiences] Your experiences.
* Formations : [Formations] Your formations.
* Compétences : [Skills] Your skills.
* Information complémentaires : [Text] Additions informations.

<u>Display a CV :</u>

Go to [CV page](http://localhost:3000/#/intranet/cvtheque) and click on the "Eye" button on the wanted CV line.

<u>Edit a CV :</u>

Go to [CV page](http://localhost:3000/#/intranet/cvtheque) and click on the "Pencil" button on the wanted CV line.

<u>Delete a CV :</u>

Go to [CV page](http://localhost:3000/#/intranet/cvtheque) and click on the "Trash" button on the wanted CV line.

-

<u>Create a Job :</u>

Go to [the job list page](http://localhost:3000/#/intranet/offres-de-poste) and click on the "Créer" button : <br/>
Enter the CV informations : 

* Titre : [String] The job's title.
* Description: [Text] The job's description.

<u>Display a job :</u>

Go to [job page](http://localhost:3000/#/intranet/offres-de-poste) and click on the "Eye" button on the wanted job line.

<u>Edit a job :</u>

Go to [job page](http://localhost:3000/#/intranet/offres-de-poste) and click on the "Pencil" button on the wanted job line.

<u>Delete a job :</u>

Go to [job page](http://localhost:3000/#/intranet/offres-de-poste) and click on the "Trash" button on the wanted job line.

-

<u>Delete a job application :</u>

Go to [applicaitons job page](http://localhost:3000/#/intranet/candidatures) and click on the "Trash" button on the wanted application job line.

