import { Connection } from "@/lib/types";

export const names: string[] = [
    'Aaron',
    'Abigail',
    'Adam',
    'Adrian',
    'Aiden',
    'Alan',
    'Albert',
    'Alex',
    'Alexander',
    'Alice',
    'Alicia',
    'Allison',
    'Amber',
    'Amelia',
    'Amy',
    'Andrew',
    'Angela',
    'Anna',
    'Anthony',
    'Arthur',
    'Ashley',
    'Austin',
    'Barbara',
    'Benjamin',
    'Betty',
    'Beverly',
    'Blake',
    'Brandon',
    'Brian',
    'Brittany',
    'Caleb',
    'Cameron',
    'Carl',
    'Carlos',
    'Carol',
    'Caroline',
    'Catherine',
    'Charles',
    'Charlotte',
    'Chloe',
    'Chris',
    'Christian',
    'Christine',
    'Christopher',
    'Cindy',
    'Claire',
    'Clara',
    'Cody',
    'Cole',
    'Colin',
    'Connor',
    'Courtney',
    'Craig',
    'Crystal',
    'Daniel',
    'Danielle',
    'David',
    'Deborah',
    'Denise',
    'Derek',
    'Diana',
    'Diane',
    'Dominic',
    'Donald',
    'Donna',
    'Doris',
    'Dorothy',
    'Dylan',
    'Edward',
    'Elijah',
    'Elizabeth',
    'Ella',
    'Emily',
    'Emma',
    'Eric',
    'Erica',
    'Ethan',
    'Evan',
    'Evelyn',
    'Faith',
    'Fiona',
    'Frank',
    'Gabriella',
    'Gabriel',
    'Gary',
    'Gavin',
    'George',
    'Grace',
    'Gregory',
    'Hailey',
    'Hannah',
    'Harold',
    'Heather',
    'Helen',
    'Henry',
    'Isabella',
    'Isaiah',
    'Jack',
    'Jackson',
    'Jacob',
    'Jade',
    'Jake',
    'James',
    'Jamie',
    'Jane',
    'Janet',
    'Jared',
    'Jason',
    'Jean',
    'Jeff',
    'Jennifer',
    'Jeremy',
    'Jerry',
    'Jessica',
    'Joan',
    'Joe',
    'John',
    'Johnny',
    'Jonathan',
    'Jordan',
    'Joseph',
    'Joshua',
    'Joyce',
    'Julia',
    'Julie',
    'Justin',
    'Kaitlyn',
    'Karen',
    'Katherine',
    'Kathleen',
    'Katie',
    'Kayla',
    'Keith',
    'Kelly',
    'Kenneth',
    'Kevin',
    'Kimberly',
    'Kyle',
    'Laura',
    'Lauren',
    'Leah',
    'Leonard',
    'Leslie',
    'Levi',
    'Lily',
    'Linda',
    'Lisa',
    'Logan',
    'Lori',
    'Lucas',
    'Luke',
    'Madison',
    'Margaret',
    'Maria',
    'Marie',
    'Marilyn',
    'Mark',
    'Martha',
    'Martin',
    'Mary',
    'Mason',
    'Matthew',
    'Megan',
    'Melissa',
    'Michael',
    'Michelle',
    'Nancy',
    'Natalie',
    'Nathan',
    'Nicholas',
    'Nicole',
    'Noah',
    'Olivia',
    'Pamela',
    'Patrick',
    'Paul',
    'Peter',
    'Philip',
    'Rachel',
    'Raymond',
    'Rebecca',
    'Richard',
    'Robert',
    'Robin',
    'Roger',
    'Ronald',
    'Rose',
    'Roy',
    'Russell',
    'Ryan',
    'Samantha',
    'Samuel',
    'Sandra',
    'Sara',
    'Sarah',
    'Scott',
    'Sean',
    'Sharon',
    'Shirley',
    'Sophia',
    'Stephanie',
    'Stephen',
    'Steve',
    'Steven',
    'Susan',
    'Sydney',
    'Tammy',
    'Taylor',
    'Teresa',
    'Terry',
    'Thomas',
    'Tiffany',
    'Timothy',
    'Tyler',
    'Valerie',
    'Vanessa',
    'Victoria',
    'Vincent',
    'Virginia',
    'Walter',
    'Wanda',
    'Wayne',
    'Wendy',
    'William',
    'Zachary',
    'Zoe',
    'Abigail',
    'Abram',
    'Adeline',
    'Agnes',
    'Ahmad',
    'Aisha',
    'Alana',
    'Albert',
    'Alejandra',
    'Alessandro',
    'Alexa',
    'Alexis',
    'Aliyah',
    'Alonzo',
    'Amanda',
    'Amir',
    'Andres',
    'Angelina',
    'Angelo',
    'Anita',
    'Annabelle',
    'Anne',
    'Annette',
    'Antoine',
    'April',
    'Arianna',
    'Ariel',
    'Arturo',
    'Ashlyn',
    'Ashton',
    'Audrey',
    'Aurora',
    'Autumn',
    'Axel',
    'Bailey',
    'Beatrice',
    'Becky',
    'Bella',
    'Bernard',
    'Bianca',
    'Bill',
    'Billie',
    'Blair',
    'Bonnie',
    'Bradley',
    'Brandi',
    'Brandy',
    'Brayden',
    'Brenda',
    'Brent',
    'Brett',
    'Brianna',
    'Bridget',
    'Brooks',
    'Bryan',
    'Byron',
    'Cade',
    'Caitlin',
    'Caleb',
    'Calvin',
    'Camila',
    'Candace',
    'Candy',
    'Cara',
    'Carmen',
    'Carol',
    'Carolyn',
    'Carson',
    'Cassandra',
    'Cassidy',
    'Cecil',
    'Cedric',
    'Cesar',
    'Chad',
    'Charlene',
    'Chase',
    'Chelsea',
    'Cheryl',
    'Chester',
    'Christina',
    'Cindy',
    'Clara',
    'Clarence',
    'Claudia',
    'Clayton',
    'Clifford',
    'Clinton',
    'Clyde',
    'Cody',
    'Colby',
    'Colton',
    'Connie',
    'Conrad',
    'Corey',
    'Corinne',
    'Crystal',
    'Curtis',
    'Cynthia',
    'Dallas',
    'Dana',
    'Danna',
    'Danny',
    'Darrell',
    'Darlene',
    'Darryl',
    'Dave',
    'Dawn',
    'Deanna',
    'Debbie',
    'Debra',
    'Dee',
    'Delaney',
    'Denise',
    'Dennis',
    'Destiny',
    'Devin',
    'Diana',
    'Dianne',
    'Dolores',
    'Dominick',
    'Don',
    'Donna',
    'Doris',
    'Doug',
    'Duane',
    'Dustin',
    'Dwight',
    'Dylan',
    'Earl',
    'Eddie',
    'Edith',
    'Edna',
    'Eduardo',
    'Elaine',
    'Eleanor',
    'Elisa',
    'Elise',
    'Ella',
    'Ellen',
    'Elliott',
    'Ellis',
    'Elton',
    'Emanuel',
    'Emilio',
    'Emma',
    'Enrique',
    'Ernest',
    'Esteban',
    'Esther',
    'Eugene',
    'Eunice',
    'Eva',
    'Everett',
    'Fabian',
    'Faith',
    'Felipe',
    'Felix',
    'Floyd',
    'Forrest',
    'Frances',
    'Francisco',
    'Franklin',
    'Fred',
    'Freddy',
    'Gabriel',
    'Gail',
    'Garrett',
    'Gene',
    'Geoffrey',
    'Georgia',
    'Gilbert',
    'Gina',
    'Gladys',
    'Glen',
    'Glenda',
    'Gloria',
    'Gordon',
    'Grace',
    'Grady',
    'Grant',
    'Greg',
    'Gretchen',
    'Guadalupe',
    'Guy',
    'Hailey',
    'Hal',
    'Hannah',
    'Harley',
    'Harold',
    'Harrison',
    'Hazel',
    'Hector',
    'Heidi',
    'Helen',
    'Herbert',
    'Holly',
    'Hope',
    'Howard',
    'Hugh',
    'Hunter',
    'Ian',
    'Ida',
    'Irene',
    'Iris',
    'Isaac',
    'Ivan',
    'Ivy',
    'Jace',
    'Jack',
    'Jackie',
    'Jacob',
    'Jaime',
    'Jake',
    'Jana',
    'Jane',
    'Janet',
    'Janice',
    'Jared',
    'Jasmine',
    'Javier',
    'Jay',
    'Jean',
    'Jeanne',
    'Jed',
    'Jeffery',
    'Jenna',
    'Jenny',
    'Jeremiah',
    'Jerome',
    'Jerry',
    'Jesse',
    'Jill',
    'Jim',
    'Joann',
    'Joanne',
    'Jocelyn',
    'Joe',
    'Joel',
    'Johanna',
    'Johathan',
    'Jonah',
    'Jonathan',
    'Jordan',
    'Jorge',
    'Jose',
    'Josephine',
    'Joshua',
    'Joy',
    'Joyce',
    'Juan',
    'Judith',
    'Judy',
    'Julia',
    'Julio',
    'Justin',
    'Kaitlin',
    'Kara',
    'Karl',
    'Kate',
    'Kaylee',
    'Keegan',
    'Keith',
    'Kelly',
    'Kelvin',
    'Kendrick',
    'Kendra',
    'Kenny',
    'Kerry',
    'Kesha',
    'Kevin',
    'Kiara',
    'Kimberly',
    'Kirk',
    'Kris',
    'Kristin',
    'Kurt',
    'Kyle',
    'Lacey',
    'Lance',
    'Larry',
    'Lauren',
    'Lawrence',
    'Leah',
    'Lee',
    'Leila',
    'Leo',
    'Leonard',
    'Leroy',
    'Leslie',
    'Lester',
    'Levi',
    'Liam',
    'Lillian',
    'Lily',
    'Linda',
    'Lindsay',
    'Lisa',
    'Lloyd',
    'Logan',
    'Lonnie',
    'Lorraine',
    'Louis',
    'Louise',
    'Lucas',
    'Luis',
    'Lydia',
    'Mackenzie',
    'Madeline',
    'Madison',
    'Mae',
    'Maggie',
    'Manuel',
    'Marc',
    'Marcia',
    'Marcus',
    'Margaret',
    'Maria',
    'Marian',
    'Marie',
    'Mario',
    'Marion',
    'Marissa',
    'Marjorie',
    'Mark',
    'Marlene',
    'Marshall',
    'Martha',
    'Martin',
    'Marvin',
    'Maryann',
    'Mateo',
    'Mathew',
    'Max',
    'Maxwell',
    'Melinda',
    'Melody',
    'Meredith',
    'Mia',
    'Micah',
    'Michael',
    'Michele',
    'Miguel',
    'Miranda',
    'Miriam',
    'Misty',
    'Mitchell',
    'Molly',
    'Monique',
    'Morgan',
    'Myra',
    'Nadine',
    'Nancy',
    'Naomi',
    'Natalie',
    'Nathaniel',
    'Neil',
    'Nelson',
    'Nicholas',
    'Nick',
    'Nikki',
    'Nina',
    'Noel',
    'Nora',
    'Norman',
    'Oliver',
    'Omar',
    'Orlando',
    'Oscar',
    'Paige',
    'Pamela',
    'Pat',
    'Patricia',
    'Patrick',
    'Patsy',
    'Paul',
    'Paulette',
    'Pauline',
    'Peggy',
    'Perry',
    'Pete',
    'Peter',
    'Philip',
    'Phyllis',
    'Preston',
    'Priscilla',
    'Quentin',
    'Quinn',
    'Rachel',
    'Ralph',
    'Ramona',
    'Randy',
    'Raquel',
    'Raymond',
    'Rebecca',
    'Regina',
    'Rene',
    'Rex',
    'Rhonda',
    'Ricardo',
    'Richard',
    'Rick',
    'Ricky',
    'Rita',
    'Rob',
    'Robbie',
    'Robert',
    'Robin',
    'Rodney',
    'Roger',
    'Roland',
    'Ronnie',
    'Rosa',
    'Rose',
    'Rosemary',
    'Ross',
    'Roy',
    'Ruby',
    'Russell',
    'Ruth',
    'Ryan',
    'Sabrina',
    'Sally',
    'Salvador',
    'Samuel',
    'Sandra',
    'Sandy',
    'Sara',
    'Scott',
    'Sean',
    'Sergio',
    'Seth',
    'Shannon',
    'Sharon',
    'Shawn',
    'Sheila',
    'Shelley',
    'Sherry',
    'Sheryl',
    'Sidney',
    'Silvia',
    'Simon',
    'Sonia',
    'Sonya',
    'Sophia',
    'Stacey',
    'Stacy',
    'Stanley',
    'Stefan',
    'Stephanie',
    'Stephen',
    'Steve',
    'Stuart',
    'Sue',
    'Summer',
    'Susan',
    'Susie',
    'Sylvia',
    'Tammy',
    'Tanya',
    'Tara',
    'Ted',
    'Teresa',
    'Terrance',
    'Terri',
    'Terry',
    'Thelma',
    'Theodore',
    'Theresa',
    'Thomas',
    'Tiffany',
    'Tim',
    'Timothy',
    'Tina',
    'Todd',
    'Tom',
    'Toni',
    'Tony',
    'Tracey',
    'Tracy',
    'Travis',
    'Trent',
    'Trevor',
    'Troy',
    'Tyler',
    'Tyrone',
    'Valerie',
    'Vanessa',
    'Vernon',
    'Veronica',
    'Vicki',
    'Victor',
    'Victoria',
    'Vincent',
    'Viola',
    'Virginia',
    'Vivian',
    'Wanda',
    'Warren',
    'Wayne',
    'Wesley',
    'Whitney',
    'Wilbur',
    'Willard',
    'William',
    'Willie',
    'Wilson',
    'Yolanda',
    'Yvette',
    'Zachary',
    'Zoe',
    'Abraham',
    'Ada',
    'Addison',
    'Adele',
    'Ahmed',
    'Aileen',
    'Alan',
    'Alberta',
    'Alessandra',
    'Alisha',
    'Allyson',
    'Alvin',
    'Amari',
    'Amaya',
    'Amos',
    'Anastasia',
    'Andre',
    'Angelica',
    'Annalise',
    'Antoinette',
    'Aria',
    'Arielle',
    'Arlene',
    'Arnold',
    'Ashleigh',
    'Augusta',
    'Avery',
    'Beatriz',
    'Ben',
    'Benedict',
    'Benton',
    'Bernice',
    'Bert',
    'Betsy',
    'Blaine',
    'Blanca',
    'Blanche',
    'Boyd',
    'Brandie',
    'Brenna',
    'Brenton',
    'Brianne',
    'Bridgette',
    'Britney',
    'Brooks',
    'Bryce',
    'Brynn',
    'Byron',
    'Caitlyn',
    'Carina',
    'Carlo',
    'Carmella',
    'Cassandra',
    'Cathy',
    'Cecelia',
    'Cesar',
    'Chandra',
    'Charity',
    'Charlene',
    'Chasity',
    'Cherie',
    'Christa',
    'Christie',
    'Clay',
    'Clement',
    'Cleo',
    'Clifton',
    'Clint',
    'Coby',
    'Colette',
    'Collin',
    'Corbin',
    'Cordell',
    'Cornell',
    'Cory',
    'Cristal',
    'Cruz',
    'Dale',
    'Dalton',
    'Dana',
    'Dane',
    'Danette',
    'Daphne',
    'Darla',
    'Darnell',
    'Darrel',
    'Darwin',
    'Davina',
    'Dayna',
    'Deidre',
    'Deirdre',
    'Delia',
    'Demetrius',
    'Denis',
    'Deon',
    'Derrick',
    'Desmond',
    'Devon',
    'Dianne',
    'Dion',
    'Dirk',
    'Dominick',
    'Dominique',
    'Dona',
    'Dorian',
    'Doreen',
    'Dorothea',
    'Doug',
    'Doyle',
    'Drusilla',
    'Dustin',
    'Dwayne',
    'Dwight',
    'Eboni',
    'Ed',
    'Eileen',
    'Elise',
    'Eliza',
    'Elliott',
    'Ellie',
    'Elton',
    'Emanuel',
    'Emilio',
    'Enrique',
    'Ericka',
    'Ernesto',
    'Estelle',
    'Eunice',
    'Fallon',
    'Fatima',
    'Felicia',
    'Ferdinand',
    'Fidel',
    'Flora',
    'Francine',
    'Frankie',
    'Gabriel',
    'Gage',
    'Garrett',
    'Gayle',
    'Genevieve',
    'Geoffrey',
    'Geraldine',
    'Gerardo',
    'Gilberto',
    'Giselle',
    'Graciela',
    'Guillermo',
    'Gustavo',
    'Gwen',
    'Hank',
    'Harmony',
    'Harvey',
    'Hayden',
    'Hilda',
    'Humberto',
    'Ignacio',
    'Ingrid',
    'Irving',
    'Isabelle',
    'Issac',
    'Ivan',
    'Ivory',
    'Izaak',
    'Jacquelyn',
    'Jadyn',
    'Jaelyn',
    'Jamel',
    'Janette',
    'Janine',
    'Janna',
    'Jaquan',
    'Jasper',
    'Javier',
    'Jaylen',
    'Jeanette',
    'Jeannette',
    'Jedidiah',
    'Jermaine',
    'Jillian',
    'Joelle',
    'Johan',
    'Jolene',
    'Jonas',
    'Josiah',
    'Justice',
    'Kaitlynn',
    'Kaliyah',
    'Kasey',
    'Keaton',
    'Kellen',
    'Kendrick',
    'Kenya',
    'Keshawn',
    'Kiana',
    'Kieran',
    'Kiley',
    'Kingston',
    'Knox',
    'Kody',
    'Kolby',
    'Korbin',
    'Krystal',
    'Kyla',
    'Kyler',
    'Laila',
    'Lamar',
    'Landen',
    'Lane',
    'Lara',
    'Larissa',
    'Layla',
    'Lennon',
    'Lennox',
    'Leon',
    'Leona',
    'Leslie',
    'Lila',
    'Lillian',
    'Lincoln',
    'Lionel',
    'Lisette',
    'Lizbeth',
    'Lloyd',
    'Lorelai',
    'Luciano',
    'Lucille',
    'Luis',
    'Lyric',
    'Mabel',
    'Madalyn',
    'Madisyn',
    'Magdalena',
    'Maia',
    'Maleah',
    'Mariam',
    'Maritza',
    'Marquis',
    'Marta',
    'Mateo',
    'Matias',
    'Mauricio',
    'Maximilian',
    'Meagan',
    'Melina',
    'Melody',
    'Melvin',
    'Micah',
    'Milan',
    'Mireya',
    'Moira',
    'Monroe',
    'Moises',
    'Myles',
    'Nash',
    'Neal',
    'Nevaeh',
    'Noe',
    'Nolan',
    'Nova',
    'Oakley',
    'Omar',
    'Orlando',
    'Paisley'
  ];


  export const names2: string[] = [
    'Aaron',
    'Abigail',
    'Adam',
    'Adrian',
    'Aiden',
    'Alan',
    'Albert',
    'Alex',
    'Alexander',
    'Alice',
    'Alicia',
    'Allison',
    'Amber',
    'Amelia',
    'Amy',
    'Andrew',
    'Angela',
    'Anna',
    'Anthony',
    'Arthur',
    'Ashley',
    'Austin',
    'Barbara',
    'Benjamin',
    'Betty',
    'Beverly',
    'Blake',
    'Brandon',
    'Brian',
    'Brittany',
    'Caleb',
    'Cameron',
    'Carl',
    'Carlos',
    'Carol',
    'Caroline',
    'Catherine',
    'Charles',
    'Charlotte',
    'Chloe',
    'Chris',
    'Christian',
    'Christine',
    'Christopher',
    'Cindy',
    'Claire',
    'Clara',
    'Cody',
    'Cole',
    'Colin',
    'Connor',
    'Courtney',
    'Craig',
    'Crystal',
    'Daniel',
    'Danielle',
    'David',
    'Deborah',
    'Denise',
    'Derek',
    'Diana',
    'Diane',
    'Dominic',
    'Donald',
    'Donna',
    'Doris',
    'Dorothy',
    'Dylan',
    'Edward',
    'Elijah',
    'Elizabeth',
    'Ella',
    'Emily',
    'Emma',
    'Eric',
    'Erica',
    'Ethan',
    'Evan',
    'Evelyn',
    'Faith',
    'Fiona',
    'Frank',
    'Gabriella',
    'Gabriel',
    'Gary',
    'Gavin',
    'George',
    'Grace',
    'Gregory',
    'Hailey',
    'Hannah',
    'Harold',
    'Heather',
    'Helen',
    'Henry',
    'Isabella',
    'Isaiah',
    'Jack',
    'Jackson',
    'Jacob',
    'Jade',
    'Jake',
    'James',
    'Jamie',
    'Jane',
    'Janet',
    'Jared',
    'Jason',
    'Jean',
    'Jeff',
    'Jennifer',
    'Jeremy',
    'Jerry',
    'Jessica',
    'Joan',
    'Joe',
    'John',
    'Johnny',
    'Jonathan',
    'Jordan',
    'Joseph',
    'Joshua',
    'Joyce',
    'Julia',
    'Julie',
    'Justin',
    'Kaitlyn',
    'Karen',
    'Katherine',
    'Kathleen',
    'Katie',
    'Kayla',
    'Keith',
    'Kelly',
    'Kenneth',
    'Kevin',
    'Kimberly',
    'Kyle',
    'Laura',
    'Lauren',
    'Leah',
    'Leonard',
    'Leslie',
    'Levi',
    'Lily',
    'Linda',
    'Lisa',
    'Logan',
    'Lori',
    'Lucas',
    'Luke',
    'Madison',
    'Margaret',
    'Maria',
    'Marie',
    'Marilyn',
    'Mark',
    'Martha',
    'Martin',
    'Mary',
    'Mason',
    'Matthew',
    'Megan',
    'Melissa',
    'Michael',
    'Michelle',
    'Nancy',
    'Natalie',
    'Nathan',
    'Nicholas',
    'Nicole',
    'Noah',
    'Olivia',
    'Pamela',
    'Patrick',
    'Paul',
    'Peter',
    'Philip',
    'Rachel',
    'Raymond',
    'Rebecca',
    'Richard',
    'Robert',
    'Robin',
    'Roger',
    'Ronald',
    'Rose',
    'Roy',
    'Russell',
    'Ryan',
    'Samantha',
    'Samuel',
    'Sandra',
    'Sara',
    'Sarah',
    'Scott',
    'Sean',
    'Sharon',
    'Shirley',
    'Sophia',
    'Stephanie',
    'Stephen',
    'Steve',
    'Steven',
    'Susan',
    'Sydney',
    'Tammy',
    'Taylor',
    'Teresa',
    'Terry',
    'Thomas',
    'Tiffany',
    'Timothy',
    'Tyler',
    'Valerie',
    'Vanessa',
    'Victoria',
    'Vincent',
    'Virginia',
    'Walter',
    'Wanda',
    'Wayne',
    'Wendy',
    'William',
    'Zachary',
    'Zoe',
    'Abigail',
    'Abram',
    'Adeline',
    'Agnes',
    'Ahmad',
    'Aisha',
    'Alana',
    'Albert',
    'Alejandra',
    'Alessandro',
    'Alexa',
    'Alexis',
    'Aliyah',
    'Alonzo',
    'Amanda',
    'Amir',
    'Andres',
    'Angelina',
    'Angelo',
    'Anita',
    'Annabelle',
    'Anne',
    'Annette',
    'Antoine',
    'April',
    'Arianna',
    'Ariel',
    'Arturo',
    'Ashlyn',
    'Ashton',
    'Audrey',
    'Aurora',
    'Autumn',
    'Axel',
    'Bailey',
    'Beatrice',
    'Becky',
    'Bella',
    'Bernard',
    'Bianca',
    'Bill',
    'Billie',
    'Blair',
    'Bonnie',
    'Bradley',
    'Brandi',
    'Brandy',
    'Brayden',
    'Brenda',
    'Brent',
    'Brett',
    'Brianna',
    'Bridget',
    'Brooks',
    'Bryan',
    'Byron',
    'Cade',
    'Caitlin',
    'Caleb',
    'Calvin',
    'Camila',
    'Candace',
    'Candy',
    'Cara',
    'Carmen',
    'Carol',
    'Carolyn',
    'Carson',
    'Cassandra',
    'Cassidy',
    'Cecil',
    'Cedric',
    'Cesar',
    'Chad',
    'Charlene',
    'Chase',
    'Chelsea',
    'Cheryl',
    'Chester',
    'Christina',
    'Cindy',
    'Clara',
    'Clarence',
    'Claudia',
    'Clayton',
    'Clifford',
    'Clinton',
    'Clyde',
    'Cody',
    'Colby',
    'Colton',
    'Connie',
    'Conrad',
    'Corey',
    'Corinne',
    'Crystal',
    'Curtis',
    'Cynthia',
    'Dallas',
    'Dana',
    'Danna',
    'Danny',
    'Darrell',
    'Darlene',
    'Darryl',
    'Dave',
    'Dawn',
    'Deanna',
    'Debbie',
    'Debra',
    'Dee',
    'Delaney',
    'Denise',
    'Dennis',
    'Destiny',
    'Devin',
    'Diana',
    'Dianne',
    'Dolores',
    'Dominick',
    'Don',
    'Donna',
    'Doris',
    'Doug',
    'Duane',
    'Dustin',
    'Dwight',
    'Dylan',
    'Earl',
    'Eddie',
    'Edith',
    'Edna',
    'Eduardo',
    'Elaine',
    'Eleanor',
    'Elisa',
    'Elise',
    'Ella',
    'Ellen',
    'Elliott',
    'Ellis',
    'Elton',
    'Emanuel',
    'Emilio',
    'Emma',
    'Enrique',
    'Ernest',
    'Esteban',
    'Esther',
    'Eugene',
    'Eunice',
    'Eva',
    'Everett',
    'Fabian',
    'Faith',
    'Felipe',
    'Felix',
    'Floyd',
    'Forrest',
    'Frances',
    'Francisco',
    'Franklin',
    'Fred',
    'Freddy',
    'Gabriel',
    'Gail',
    'Garrett',
    'Gene',
    'Geoffrey',
    'Georgia',
    'Gilbert',
    'Gina',
    'Gladys',
    'Glen',
    'Glenda',
    'Gloria',
    'Gordon',
    'Grace',
    'Grady',
    'Grant',
    'Greg',
    'Gretchen',
    'Guadalupe',
    'Guy',
    'Hailey',
    'Hal',
    'Hannah',
    'Harley',
    'Harold',
    'Harrison',
    'Hazel',
    'Hector',
    'Heidi',
    'Helen',
    'Herbert',
    'Holly',
    'Hope',
    'Howard',
    'Hugh',
    'Hunter',
    'Ian',
    'Ida',
    'Irene',
    'Iris',
    'Isaac',
    'Ivan',
    'Ivy',
    'Jace',
    'Jack',
    'Jackie',
    'Jacob',
    'Jaime',
    'Jake',
    'Jana',
    'Jane',
    'Janet',
    'Janice',
    'Jared',
    'Jasmine',
    'Javier',
    'Jay',
    'Jean',
    'Jeanne',
    'Jed',
    'Jeffery',
    'Jenna',
    'Jenny',
    'Jeremiah',
    'Jerome',
    'Jerry',
    'Jesse',
    'Jill',
    'Jim',
    'Joann',
    'Joanne',
    'Jocelyn',
    'Joe',
    'Joel',
    'Johanna',
    'Johathan',
    'Jonah',
    'Jonathan',
    'Jordan',
    'Jorge',
    'Jose',
    'Josephine',
    'Joshua',
    'Joy',
    'Joyce',
    'Juan',
    'Judith',
    'Judy',
    'Julia',
    'Julio',
    'Justin',
    'Kaitlin',
    'Kara',
    'Karl',
    'Kate',
    'Kaylee',
    'Keegan',
    'Keith',
    'Kelly',
    'Kelvin',
    'Kendrick',
    'Kendra',
    'Kenny',
    'Kerry',
    'Kesha',
    'Kevin',
    'Kiara',
    'Kimberly',
    'Kirk',
    'Kris',
    'Kristin',
    'Kurt',
    'Kyle',
    'Lacey',
    'Lance',
    'Larry',
    'Lauren',
    'Lawrence',
    'Leah',
    'Lee',
    'Leila',
    'Leo',
    'Leonard',
    'Leroy',
    'Leslie',
    'Lester',
    'Levi',
    'Liam',
    'Lillian',
    'Lily',
    'Linda',
    'Lindsay',
    'Lisa',
    'Lloyd',
    'Logan',
    'Lonnie',
    'Lorraine',
    'Louis',
    'Louise',
    'Lucas',
    'Luis',
    'Lydia',
    'Mackenzie',
    'Madeline',
    'Madison',
    'Mae',
    'Maggie',
    'Manuel',
    'Marc',
    'Marcia',
    'Marcus',
    'Margaret',
    'Maria',
    'Marian',
    'Marie',
    'Mario',
    'Marion',
    'Marissa',
    'Marjorie',
    'Mark',
    'Marlene',
    'Marshall',
    'Martha',
    'Martin',
    'Marvin',
    'Maryann',
    'Mateo',
    'Mathew',
    'Max',
    'Maxwell',
    'Melinda',
    'Melody',
    'Meredith',
    'Mia',
    'Micah',
    'Michael',
    'Michele',
    'Miguel',
    'Miranda',
    'Miriam',
    'Misty',
    'Mitchell',
    'Molly',
    'Monique',
    'Morgan',
    'Myra',
    'Nadine',
    'Nancy',
    'Naomi',
    'Natalie',
    'Nathaniel',
    'Neil',
    'Nelson',
    'Nicholas',
    'Nick',
    'Nikki',
    'Nina',
    'Noel',
    'Nora',
    'Norman',
    'Oliver',
    'Omar',
    'Orlando',
    'Oscar',
    'Paige',
    'Pamela',
    'Pat',
    'Patricia',
    'Patrick',
    'Patsy',
    'Paul',
    'Paulette',
    'Pauline',
    'Peggy',
    'Perry',
    'Pete',
    'Peter',
    'Philip',
    'Phyllis',
    'Preston',
    'Priscilla',
    'Quentin',
    'Quinn',
    'Rachel',
    'Ralph',
    'Ramona',
    'Randy',
    'Raquel',
    'Raymond',
    'Rebecca',
    'Regina',
    'Rene',
    'Rex',
    'Rhonda',
    'Ricardo',
    'Richard',
    'Rick',
    'Ricky',
    'Rita',
    'Rob',
    'Robbie',
    'Robert',
    'Robin',
    'Rodney',
    'Roger',
    'Roland',
    'Ronnie',
    'Rosa',
    'Rose',
    'Rosemary',
    'Ross',
    'Roy',
    'Ruby',
    'Russell',
    'Ruth',
    'Ryan',
    'Sabrina',
    'Sally',
    'Salvador',
    'Samuel',
    'Sandra',
    'Sandy',
    'Sara',
    'Scott',
    'Sean',
    'Sergio',
    'Seth',
    'Shannon',
    'Sharon',
    'Shawn',
    'Sheila',
    'Shelley',
    'Sherry',
    'Sheryl',
    'Sidney',
    'Silvia',
    'Simon',
    'Sonia',
    'Sonya',
    'Sophia',
    'Stacey',
    'Stacy',
    'Stanley',
    'Stefan',
    'Stephanie',
    'Stephen',
    'Steve',
    'Stuart',
    'Sue',
    'Summer',
    'Susan',
    'Susie',
    'Sylvia',
    'Tammy',
    'Tanya',
    'Tara',
    'Ted',
    'Teresa',
    'Terrance',
    'Terri',
    'Terry',
    'Thelma',
    'Theodore',
    'Theresa',
    'Thomas',
    'Tiffany',
    'Tim',
    'Timothy',
    'Tina',
    'Todd',
    'Tom',
    'Toni',
    'Tony',
    'Tracey',
    'Tracy',
    'Travis',
    'Trent',
    'Trevor',
    'Troy',
    'Tyler',
    'Tyrone',
    'Valerie',
    'Vanessa',
    'Vernon',
    'Veronica',
    'Vicki',
    'Victor',
    'Victoria',
    'Vincent',
    'Viola',
    'Virginia',
    'Vivian',
    'Wanda',
    'Warren',
    'Wayne',
    'Wesley',
    'Whitney',
    'Wilbur',
    'Willard',
    'William',
    'Willie',
    'Wilson',
    'Yolanda',
    'Yvette',
    'Zachary',
    'Zoe',
    'Abraham',
    'Ada',
    'Addison',
    'Adele',
    'Ahmed',
    'Aileen',
    'Alan',
    'Alberta',
    'Alessandra',
    'Alisha',
    'Allyson',
    'Alvin',
    'Amari',
    'Amaya',
    'Amos',
    'Anastasia',
    'Andre',
    'Angelica',
    'Annalise',
    'Antoinette',
    'Aria',
    'Arielle',
    'Arlene',
    'Arnold',
    'Ashleigh',
    'Augusta',
    'Avery',
    'Beatriz',
    'Ben',
    'Benedict',
    'Benton',
    'Bernice',
    'Bert',
    'Betsy',
    'Blaine',
    'Blanca',
    'Blanche',
    'Boyd',
    'Brandie',
    'Brenna',
    'Brenton',
    'Brianne',
    'Bridgette',
    'Britney',
    'Brooks',
    'Bryce',
    'Brynn',
    'Byron',
    'Caitlyn',
    'Carina',
    'Carlo',
    'Carmella',
    'Cassandra',
    'Cathy',
    'Cecelia',
    'Cesar',
    'Chandra',
    'Charity',
    'Charlene',
    'Chasity',
    'Cherie',
    'Christa',
    'Christie',
    'Clay',
    'Clement',
    'Cleo',
    'Clifton',
    'Clint',
    'Coby',
    'Colette',
    'Collin',
    'Corbin',
    'Cordell',
    'Cornell',
    'Cory',
    'Cristal',
    'Cruz',
    'Dale',
    'Dalton',
    'Dana',
    'Dane',
    'Danette',
    'Daphne',
    'Darla',
    'Darnell',
    'Darrel',
    'Darwin',
    'Davina',
    'Dayna',
    'Deidre',
    'Deirdre',
    'Delia',
    'Demetrius',
    'Denis',
    'Deon',
    'Derrick',
    'Desmond',
    'Devon',
    'Dianne',
    'Dion',
    'Dirk',
    'Dominick',
    'Dominique',
    'Dona',
    'Dorian',
    'Doreen',
    'Dorothea',
    'Doug',
    'Doyle',
    'Drusilla',
    'Dustin',
    'Dwayne',
    'Dwight',
    'Eboni',
    'Ed',
    'Eileen',
    'Elise',
    'Eliza',
    'Elliott',
    'Ellie',
    'Elton',
    'Emanuel',
    'Emilio',
    'Enrique',
    "Eponym",
    'Ericka',
    'Ernesto',
    'Estelle',
    'Eunice',
    'Fallon',
    'Fatima',
    'Felicia',
    'Ferdinand',
    'Fidel',
    'Flora',
    'Francine',
    'Frankie',
    'Gabriel',
    'Gage',
    'Garrett',
    'Gayle',
    'Genevieve',
    'Geoffrey',
    'Geraldine',
    'Gerardo',
    'Gilberto',
    'Giselle',
    'Graciela',
    'Guillermo',
    'Gustavo',
    'Gwen',
    'Hank',
    'Harmony',
    'Harvey',
    'Hayden',
    'Hilda',
    'Humberto',
    'Ignacio',
    'Ingrid',
    'Irving',
    'Isabelle',
    'Issac',
    'Ivan',
    'Ivory',
    'Izaak',
    'Jacquelyn',
    'Jadyn',
    'Jaelyn',
    'Jamel',
    'Janette',
    'Janine',
    'Janna',
    'Jaquan',
    'Jasper',
    'Javier',
    'Jaylen',
    'Jeanette',
    'Jeannette',
    'Jedidiah',
    'Jermaine',
    'Jillian',
    'Joelle',
    'Johan',
    'Jolene',
    'Jonas',
    'Josiah',
    'Justice',
    'Kaitlynn',
    'Kaliyah',
    'Kasey',
    'Keaton',
    'Kellen',
    'Kendrick',
    'Kenya',
    'Keshawn',
    'Kiana',
    'Kieran',
    'Kiley',
    'Kingston',
    'Knox',
    'Kody',
    'Kolby',
    'Korbin',
    'Krystal',
    'Kyla',
    'Kyler',
    'Laila',
    'Lamar',
    'Landen',
    'Lane',
    'Lara',
    'Larissa',
    'Layla',
    'Lennon',
    'Lennox',
    'Leon',
    'Leona',
    'Leslie',
    'Lila',
    'Lillian',
    'Lincoln',
    'Lionel',
    'Lisette',
    'Lizbeth',
    'Lloyd',
    'Lorelai',
    'Luciano',
    'Lucille',
    'Luis',
    'Lyric',
    'Mabel',
    'Madalyn',
    'Madisyn',
    'Magdalena',
    'Maia',
    'Maleah',
    'Mariam',
    'Maritza',
    'Marquis',
    'Marta',
    'Mateo',
    'Matias',
    'Mauricio',
    'Maximilian',
    'Meagan',
    'Melina',
    'Melody',
    'Melvin',
    'Micah',
    'Milan',
    'Mireya',
    'Moira',
    'Monroe',
    'Moises',
    'Myles',
    'Nash',
    'Neal',
    'Nevaeh',
    'Noe',
    'Nolan',
    'Nova',
    'Oakley',
    'Omar',
    'Orlando',
    'Paisley'
  ];

  
  
  
  
  export default function getNewProfiles(recentProfiles: Connection[], olderProfiles: Connection[]): Connection[] {
    // Create a Set of older profile ids for fast lookup
    const olderProfileIds = new Set(olderProfiles.map(profile => profile));
  
    // Filter recent profiles to find those not in older profiles
    return recentProfiles.filter(profile => !olderProfileIds.has(profile));
  }
  
 
  
  
