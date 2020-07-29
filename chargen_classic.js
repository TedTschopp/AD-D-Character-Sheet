bonusStat = 0;
bonusFlag = 0;
multiFlag4 = 0;
multiFlag6 = 0;
multiFlagMethodV = 0;
rollFlag = 0;
pmflag = 0;
race = 0;
StrOld = 0; SStrOld = ""; IntOld = 0; WisOld = 0; DexOld = 0; ConOld = 0; ChrOld = 0;

Fighter = 1;
Ranger = 2;
Paladin = 3;
Cleric = 4;
Druid = 5;
Mage = 6;
Illusionist = 7;
Thief = 8;
Assassin = 9;
Monk = 10;
Bard = 11;


Cavalier = 	12;
Paladin = 	3;
Cleric = 		4;
Druid = 		5;
Bard = 		11;
Fighter = 	1;
Barbarian = 	13;
Ranger = 		2;
Magic-User = 	6;
Illusionist = 	7;
Thief = 		8;
Assassin = 	9;
Monk =		10;

cf  = 14, ClericFighter            = cf;
cr  = 15, ClericRanger             = cr;
cm  = 16, ClericMagicuser          = cm;
ci  = 17, ClericIllusionist        = ci;
ct  = 18, ClericThief              = ct;
ca  = 19, ClericAssassin           = ca;
df  = 20, DruidFighter             = df;
dr  = 21, DruidRanger              = dr;
dm  = 22, DruidMagic-user          = dm;
dt  = 23, DruidThief               = dt;
fm  = 24, FighterMagic-user        = fm;
fi  = 25, FighterIllusionist       = fi;
ft  = 26, FighterThief             = ft;
fa  = 27, FighterAssassin          = fa;
rm  = 28, RangerMagicuser          = rm;
mt  = 29, MagicuserThief           = mt;
ma  = 30, MagicuserAssassin        = ma;
it  = 31, IllusionistThief         = it;
ia  = 32, IllusionistAssassin      = ia;
cfm = 33, ClericFighterMagicuser   = cfm;
cft = 34, ClericFighterThief       = cft;
cmt = 35, ClericMagicuserThief     = cmt;
fmt = 36, FighterMagicuserThief    = fmt;




/*Basic Race */
Human = 1;
Elf = 2;
Dwarf = 3;
Halfling = 4;
Gnome = 5;
HalfElf = 6;
HalfOrc = 7;


/* Advanced Race */
ElfDark = 2.1;
ElfGrey = 2.2;
ElfHigh = 2.3;
ElfValley = 2.4;
ElfWild = 2.5;
ElfWood = 2.6;
DwarfGrey = 3.1;
DwarfHill = 3.2;
DwarfMountain = 3.3;
HalflingStout = 4.1;
HalflingHairfoot = 4.2;
HalflingTallfellow = 4.3;
GnomeDeep = 5.1;
HalfElfDark = 6.1;
HalfElfGrey = 6.2;
HalfElfHigh = 6.3;
HalfElfValley = 6.4;
HalfElfWild = 6.5;
HalfElfWood = 6.6;

Male = 1;
Female = 2;

Strength = 0;
Intelligence = 1;
Wisdom = 2;
Dexterity = 3;
Constitution = 4;
Charisma = 5;
Bonus_Points = 6
Super_Strength = 7
Attribute_Class_and_Race_Info = 8;
Hit_Points = 9;
Armor_Class = 11;
Gold_Pieces = 12;
Paralyze_Poison_Death_Save = 14;
Petrify_Polymorph_Save = 15;
Rods_Staves_Wands_Save = 16;
Breath_Weapons_Saves = 17;
Spells_Saves = 18;
Age = 19;
Height = 20;
Weight = 21;

Comeliness = 30;
Face_Comeliness = 31;
Body_Comeliness = 32;
Vocal_Comeliness = 33;
Perception = 34;

/* TODO: DREAMER 
   TODO: Psionics (PHB and Based on COM/CHR)
   TODO: AGE
   TODO: Characters must have 2 ability scores at 15
   TODO: COMliness Modifiers for Age ((+1 at teen, +1 at mature, -1 at middle age, -2 at old, -4 at venerable)
   TODO: Hieght and Weight Dragon 91
   TODO: All characters begin with thief abilities at ability+race, except for climb walls which is 40% + ability + race. You don't need to write these numbers down unless you are a thief or another class with thief abilities. 
   TODO: Choose 1 or more personality traits. Here, personality encompasses the tables on pages 100-102. 'Personality' on page 101 should be read as 'Sociability'. I recommend a single roll on the General Tendencies table, that's it. Your ERM (Encounter Reaction Modifier) will often be modified by your personality traits. Roll for each trait, then round to the nearest multiple of 5, to get a number between 1 and 20. 
   TODO: Background Dragon 96 Dragon 51
   TODO: 
*/

function random() {
	var now = new Date();
	random.m = 714025;
	random.a = 4096;
	random.c = 150889;
	random.seed = ((now.getTime() % random.m) * random.a + random.c) % random.m;
	return Math.random(random.seed);
}

function randNum(min,max) {
	var rand = Math.round(max * random());
	if (rand < min) rand = randNum(min,max);
	return rand;
}
function reRoll() {
	ds = document.Stats;
	if(ds.RollMethod[4].checked) {
		ds = document.Stats;
		ds.RollButton.value = "Re-Roll";
		ds.CharSex.selectedIndex = 0;
		ds.CharRace.selectedIndex = 0;
		ds.CharClass.selectedIndex = 0;
		ds.CharMultiClass.selectedIndex = 0;
		ds.Align.selectedIndex = 0;
		ds.HitPoints.value="";
		ds.ArmorClass.value="";
		ds.Gold.value="";
		ds.Save1.value="";
		ds.Save2.value="";
		ds.Save3.value="";
		ds.Save4.value="";
		ds.Save5.value="";
		ds.CharAge.value="";
		ds.Height.value="";
		ds.Weight.value="";
		rollFlag = 1;

		multiFlagMethodV = 1;
		bonusFlag = 0;
		bonusStat = 0;
		rollStats();
	}
	else {
		ds.RollButton.value = "Re-Roll";
		ds.CharSex.selectedIndex = 0;
		ds.CharRace.selectedIndex = 0;
		ds.CharClass.selectedIndex = 0;
		ds.CharMultiClass.selectedIndex = 0;
		ds.Align.selectedIndex = 0;
		ds.HitPoints.value="";
		ds.ArmorClass.value="";
		ds.Gold.value="";
		ds.Save1.value="";
		ds.Save2.value="";
		ds.Save3.value="";
		ds.Save4.value="";
		ds.Save5.value="";
		ds.CharAge.value="";
		ds.Height.value="";
		ds.Weight.value="";
		rollFlag = 1;
		if(ds.RollMethod[0].checked) {
			multiFlag = 0;
			bonusStat = 0;
			rollStats();
		}
		if(ds.RollMethod[1].checked) {
			multiFlag4 = 1;
			bonusStat = 0;
			rollStats();
		}
		if(ds.RollMethod[2].checked) {
			multiFlag6 = 1;
			bonusStat = 0;
			rollStats();
		}
		if(ds.RollMethod[3].checked) {
			multiFlag4 = 1;
			bonusStat = 5;
			rollStats();
		}
	}


}
function rollStats() {
	ds = document.Stats;
	statArray = new Array(0,0,0,0,0,0,0,0,0,0,0);
	for(i=0;i<11;i++) {
		if(multiFlagMethodV) {

			switch(Race) {
				case Human:
					// code block
				break;
				case Elf:
					// code block
				break;
				case Dwarf:
					// code block
				break;
				case Halfling:
					// code block
				break;
				case Gnome:
					// code block
				break;
				case HalfElf:
					// code block
				break;
				case HalfOrc:
					// code block
				break;
				default:
					// code block
			  }







			/*			
			Cavalier                  8 6 4 7 9 3 5
			Paladin                   7 5 8 3 6 9 4
			Cleric                    7 4 9 5 8 6 3
			Druid                     7 4 8 5 6 9 3
			Fighter                   9 3 5 7 8 6 4
			Barbarian                 9 3 5 7 8 6 4
			Ranger                    7 6 8 5 9 4 3
			Magic-User                4 9 7 8 6 5 3
			Illusionist               3 8 7 9 5 6 4
			Thief                     6 5 3 9 7 4 8
			Assassin                  6 7 4 9 8 3 5
			Monk                      7 5 9 8 6 4 3
			Bard

			Dwarf, Grey               8 5 5 6 8 3 3
			Dwarf, Hill               7 5 5 6 8 4 3
			Dwarf, Mountain           8 5 5 4 9 4 3
			Elf, dark (male)          5 8 6 7 4 5 4 
			Elf, dark (female)        5 6 8 7 4 8 4
			Elf, grey                 6 7 6 7 5 5 5
			Elf, high                 6 7 6 7 5 5 5
			Elf, Valley               6 7 5 6 6 4 4
			Elf, Wild                 8 6 6 6 5 6 4
			Elf, Wood                 7 5 5 7 5 5 5
			Gnome, deep               6 7 6 6 7 4 4
			Gnome, surface            6 6 5 6 7 4 4
			Half-elf, dark            6 7 7 7 5 6 5
			Half-elf, all others      6 6 6 6 6 6 6
			Halfling                  5 5 5 6 6 6 5
			Half-orc                  7 4 5 6 7 3 3

H			Human = 
ED			ElfDark = 2.1;
EG			ElfGrey = 2.2;
EH			ElfHigh = 2.3;
EV			ElfValley = 2.4;
EWi			ElfWild = 2.5;
EWo			ElfWood = 2.6;
DG			DwarfGrey = 3.1;
DH			DwarfHill = 3.2;
DM			DwarfMountain = 3.3;
HaS			HalflingStout = 4.1;
HaH			HalflingHairfoot = 4.2;
Hat			HalflingTallfellow = 4.3;
Gd			GnomeDeep = 5.1;
Gs			GnomeSurface = 5.2;
HED			HalfElfDark = 6.1;
HEG			HalfElfGrey = 6.2;
HEH			HalfElfHigh = 6.3;
HEV			HalfElfValley = 6.4;
HEWi			HalfElfWild = 6.5;
HEWo			HalfElfWood = 6.6;




									H	DG	DH	DM	ED	EG	EH	EV	EWo	EWi	Gd	Gs	HaS	HaH	HaT	HO	HED	HEG	HEH	HEV	HEWo	HEWi	
cf			Cleric/fighter            	1	1	1	1	1	1	1	1	1	0	1	1	1	1	1	1	1	1	1	1	1	0	
cr			Cleric/ranger             	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
cm			Cleric/magic-user         	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
ci			Cleric/illusionist        	1	0	0	0	0	0	0	0	0	0	1	1	0	0	0	0	0	0	0	0	0	0	
ct			Cleric/thief              	1	1	0	0	1	1	1	1	1	0	1	1	1	1	1	1	1	1	1	1	1	0	
ca			Cleric/assassin           	1	1	0	0	1	1	1	1	1	0	1	0	0	0	0	1	1	1	1	1	1	0	
df			Druid/fighter             	1	0	0	0	0	1	1	1	1	0	0	0	1	1	1	0	0	1	1	1	1	0	
dr			Druid/ranger              	1	0	0	0	0	1	1	1	1	0	0	0	0	0	0	0	0	1	1	1	1	0	
dm			Druid/magic-user          	1	0	0	0	0	1	1	1	1	0	0	0	0	0	0	0	0	1	1	1	1	0	
dt			Druid/thief               	1	0	0	0	0	1	1	1	1	0	0	0	1	1	1	0	0	1	1	1	1	0	
fm			Fighter/magic-user        	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
fi			Fighter/illusionist       	1	0	0	0	0	0	0	0	0	0	1	1	0	0	0	0	0	0	0	0	0	0	
ft			Fighter/thief             	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	
fa			Fighter/assassin          	1	1	0	0	1	1	1	1	1	0	1	0	0	0	0	1	1	1	1	1	1	0	
rm			Ranger/magic-user         	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
mt			Magic-user/thief          	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
ma			Magic-user/assassin       	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
it			Illusionist/thief         	1	0	0	0	0	0	0	0	0	0	1	1	0	0	0	0	0	0	0	0	0	0	
ia			Illusionist/assassin      	1	0	0	0	0	0	0	0	0	0	1	0	0	0	0	0	0	0	0	0	0	0	
cfm			Cleric/fighter/magic-user 	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
cft			Cleric/fighter/thief      	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
cmt			Cleric/magic-user/thief   	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
fmt			Fighter/magic-user/thief  	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	


cf			Cleric/fighter            8 4 9 6 7 5 3
cr			Cleric/ranger             7 6 9 5 8 4 3
cm			Cleric/magic-user         5 9 8 7 6 4 3
ci			Cleric/illusionist        4 8 7 9 6 5 3
ct			Cleric/thief              6 4 8 9 7 5 3
ca			Cleric/assassin           6 5 8 9 7 4 3
df			Druid/fighter             7 4 8 6 5 9 3
dr			Druid/ranger              7 5 8 4 6 9 3
dm			Druid/magic-user          4 8 7 6 5 9 3
dt			Druid/thief               6 4 7 8 5 9 3
fm			Fighter/magic-user        8 9 4 7 6 5 3
fi			Fighter/illusionist       7 8 4 9 6 5 3
ft			Fighter/thief             8 5 3 9 7 6 4
fa			Fighter/assassin          8 6 4 9 7 5 3
rm			Ranger/magic-user         7 9 6 5 8 4 3
mt			Magic-user/thief          6 8 4 9 7 5 3
ma			Magic-user/assassin       6 8 5 9 7 3 4
it			Illusionist/thief         5 8 4 9 7 6 3
ia			Illusionist/assassin
cfm			Cleric/fighter/magic-user 7 9 8 6 5 4 3
cft			Cleric/fighter/thief      7 4 8 9 6 5 3
cmt			Cleric/magic-user/thief   5 8 7 9 6 4 3
fmt			Fighter/magic-user/thief  7 8 4 9 6 5 3


*/


			diceArray = new Array(0,0,0,0);
			diceArray[0] = randNum(1,6);
			diceArray[1] = randNum(1,6);
			diceArray[2] = randNum(1,6);
			diceArray[3] = randNum(1,6);
			diceArray.sort(HighToLow);
			}
		if(multiFlag4) {
			diceArray = new Array(0,0,0,0);
			diceArray[0] = randNum(1,6);
			diceArray[1] = randNum(1,6);
			diceArray[2] = randNum(1,6);
			diceArray[3] = randNum(1,6);
			diceArray.sort(HighToLow);
			}
		if(multiFlag6) {
			diceArray = new Array(0,0,0,0,0,0);
			diceArray[0] = randNum(1,6);
			diceArray[1] = randNum(1,6);
			diceArray[2] = randNum(1,6);
			diceArray[3] = randNum(1,6);
			diceArray[4] = randNum(1,6);
			diceArray[5] = randNum(1,6);
			diceArray.sort(HighToLow);
			}
		if(!multiFlag6 && !multiFlag4) {
			diceArray = new Array(0,0,0);
			diceArray[0] = randNum(1,6);
			diceArray[1] = randNum(1,6);
			diceArray[2] = randNum(1,6);
			diceArray.sort(HighToLow);
			}
		statArray[i] = diceArray[0] + diceArray[1] + diceArray[2];
		}
	ds.SStr.value = "";
	ds.BonusStat.value = bonusStat;
	addText();
	}
function HighToLow(a,b) {
	if(a>b) return -1; if(a==b) return 0; if(a<b)return 1;
	}
function IncrStat(n) {
	ds = document.Stats;
	if(rollFlag) {
		if(statArray[n] < 18) {
			if(bonusStat > 0) {
				bonusStat--;
				statArray[n]++;
				ds.BonusStat.value = bonusStat;
				addText();
				}
			else alert("You are out of bonus points.");
			}
		else alert("This stat cannot be increased any further.");
		}
	else {alert("Please roll your stats first."); ds.RollButton.focus();}
	}
function DecrStat(n) {
	ds = document.Stats;
	if(rollFlag) {
		if(bonusFlag) {
			if(statArray[n] > 3) {
				bonusStat++;
				statArray[n]--;
				ds.BonusStat.value = bonusStat;
				addText();
				}
			else alert("This stat cannot be decreased any further.");
			}
		else alert("You cannot decrease stats with this roll method");
		}
	else {alert("Please roll your stats first."); ds.RollButton.focus();}
	}
function noEdit(n) { // Keeps uneditable fields uneditable
	ds = document.Stats;
	alert("This data field can not be edited.");
	if(n == Strength                     ) ds.Str.blur();
	if(n == Intelligence                 ) ds.Int.blur();
	if(n == Wisdom                       ) ds.Wis.blur();
	if(n == Dexterity                    ) ds.Dex.blur();
	if(n == Constitution                 ) ds.Con.blur();
	if(n == Charisma                     ) ds.Chr.blur();
	if(n == Bonus_Points                 ) ds.BonusStat.blur();
	if(n == Super_Strength               ) ds.SStr.blur();
	if(n == Attribute_Class_and_Race_Info) ds.info.blur();
	if(n == Hit_Points                   ) ds.HitPoints.blur();

	if(n == Armor_Class                  ) ds.ArmorClass.blur();
	if(n == Gold_Pieces                  ) ds.Gold.blur();
	if(n == 13                           ) ds.Save0.blur();
	if(n == Paralyze_Poison_Death_Save   ) ds.Save1.blur();
	if(n == Petrify_Polymorph_Save       ) ds.Save2.blur();
	if(n == Rods_Staves_Wands_Save       ) ds.Save3.blur();
	if(n == Breath_Weapons_Saves         ) ds.Save4.blur();
	if(n == Spells_Saves                 ) ds.Save5.blur();

	if(n == Comeliness                   ) ds.Com.blur();
	if(n == Face_Comeliness              ) ds.ComF.blur();
	if(n == Body_Comeliness              ) ds.ComB.blur();
	if(n == Vocal_Comeliness             ) ds.ComV.blur();
	if(n == Perception                   ) ds.Per.blur();
}
function addText() {
	ds = document.Stats;
	ds.Str.value = statArray[Strength];
	ds.Int.value = statArray[Intelligence];
	ds.Wis.value = statArray[Wisdom];
	ds.Dex.value = statArray[Dexterity];
	ds.Con.value = statArray[Constitution];
	ds.Chr.value = statArray[Charisma];

	// for every Int or Wis above 14 add an additional point to voice to a max of 18 for voice
	Voice_Bonus = Math.max(statArray[Intelligence] - 14,0) + Math.max(statArray[Wisdom] - 14,0);
	statArray[9] = Math.min(statArray[9] + Voice_Bonus,18)

	// Body beauty is Strength + CON / 2 rounded up
	statArray[7] = Math.ceil((statArray[Constitution] + statArray[Strength])/2);

	// COM = Body + Voice + Face
	statArray[6] = parseInt((statArray[7] + statArray[8] + statArray[9])/3);

	ds.ComB.value = statArray[7];
	ds.ComF.value = statArray[8];
	ds.ComV.value = statArray[9];
	ds.Com.value = statArray[6];
	ds.Per.value = statArray[10];
	ds.info.value = "";
	checkStr();
	checkInt();
	checkWis();
	checkDex();
	checkCon();
	checkChr();
	checkCom();
	checkPer();
	if(ds.CharSex.selectedIndex        != 0) ds.info.value += "Gender set to " + ds.CharSex.value;
	if(ds.CharRace.selectedIndex       != 0) ds.info.value += ", Race set to " + ds.CharRace.value + "\n";
	if(ds.CharClass.selectedIndex      != 0) ds.info.value += "Class set to " + ds.CharClass.value;
	if(ds.CharMultiClass.selectedIndex != 0) ds.info.value += "Class set to " + ds.CharMultiClass.value;
	if(ds.Align.selectedIndex          != 0) ds.info.value += ", Alignment set to " + ds.Align.value + "\n";
	}
function checkStr() {
	strhb = ""; 
	strdb = ""; 
	strwa = ""; 
	strod = ""; 
	strbb = "";
	if(statArray[Strength] == 3) {strhb = "-3"; strdb = "-1"; strwa = "-350"; strod = "1"; strbb = "0%";}
	if(statArray[Strength] == 4 || statArray[Strength] == 5) {strhb = "-2"; strdb = "-1"; strwa = "-250"; strod = "1"; strbb = "0%";}
	if(statArray[Strength] == 6 || statArray[Strength] == 7) {strhb = "-1"; strdb = "None"; strwa = "-150"; strod = "1"; strbb = "0%";}
	if(statArray[Strength] == 8 || statArray[Strength] == 9) {strhb = "Nrm"; strdb = "None"; strwa = "Nrm"; strod = "1-2"; strbb = "1%";}
	if(statArray[Strength] == 10 || statArray[Strength] == 11) {strhb = "Nrm"; strdb = "None"; strwa = "Nrm"; strod = "1-2"; strbb = "2%";}
	if(statArray[Strength] == 12 || statArray[Strength] == 13) {strhb = "Nrm"; strdb = "None"; strwa = "+100"; strod = "1-2"; strbb = "4%";}
	if(statArray[Strength] == 14 || statArray[Strength] == 15) {strhb = "Nrm"; strdb = "None"; strwa = "+200"; strod = "1-2"; strbb = "7%";}
	if(statArray[Strength] == 16) {strhb = "Nrm"; strdb = "+1"; strwa = "+350"; strod = "1-3"; strbb = "10%";}
	if(statArray[Strength] == 17) {strhb = "+1"; strdb = "+1"; strwa = "+500"; strod = "1-3"; strbb = "13%";}
	if(statArray[Strength] == 18) {
		if(ds.SStr.value == "") {strhb = "+1"; strdb = "+2"; strwa = "+750"; strod = "1-3"; strbb = "16%";}
		if(ds.SStr.value > 0 && ds.SStr.value < 51) {strhb = "+1"; strdb = "+3"; strwa = "+1000"; strod = "1-3"; strbb = "20%";}
		if(ds.SStr.value > 50 && ds.SStr.value < 76) {strhb = "+2"; strdb = "+3"; strwa = "+1250"; strod = "1-4"; strbb = "25%";}
		if(ds.SStr.value > 75 && ds.SStr.value < 91) {strhb = "+2"; strdb = "+4"; strwa = "+1500"; strod = "1-4"; strbb = "30%";}
		if(ds.SStr.value > 90 && ds.SStr.value < 100) {strhb = "+2"; strdb = "+5"; strwa = "+1750"; strod = "1-4(1)"; strbb = "35%";}
		if(ds.SStr.value == 100) {strhb = "+3"; strdb = "+6"; strwa = "+3000"; strod = "1-5(1)"; strbb = "40%";}
		}
	strString = "STR Bonus - Hit: " + strhb + ", Dam: " + strdb + ", WA: " + strwa + ", OD: " + strod + ", BBLG: " + strbb + "\n";
	ds.info.value += strString;
	}
function checkInt() {
	intal = ""; 
	intks = ""; 
	intll = ""; 
	inthl = "";
	if(statArray[Intelligence] > 2 && statArray[Intelligence] < 8) {intal = "0"; intks = "na"; intll = "na"; inthl = "na";}
	if(statArray[Intelligence] == 8) {intal = "+1"; intks = "na"; intll = "na"; inthl = "na";}
	if(statArray[Intelligence] == 9) {intal = "+1"; intks = "35%"; intll = "4"; inthl = "6";}
	if(statArray[Intelligence] == 10) {intal = "+2"; intks = "45%"; intll = "5"; inthl = "7";}
	if(statArray[Intelligence] == 11) {intal = "+2"; intks = "45%"; intll = "5"; inthl = "7";}
	if(statArray[Intelligence] == 12) {intal = "+3"; intks = "45%"; intll = "5"; inthl = "7";}
	if(statArray[Intelligence] == 13) {intal = "+3"; intks = "55%"; intll = "6"; inthl = "9";}
	if(statArray[Intelligence] == 14) {intal = "+4"; intks = "55%"; intll = "6"; inthl = "9";}
	if(statArray[Intelligence] == 15) {intal = "+4"; intks = "65%"; intll = "7"; inthl = "11";}
	if(statArray[Intelligence] == 16) {intal = "+5"; intks = "65%"; intll = "7"; inthl = "11";}
	if(statArray[Intelligence] == 17) {intal = "+6"; intks = "75%"; intll = "8"; inthl = "14";}
	if(statArray[Intelligence] == 18) {intal = "+7"; intks = "85%"; intll = "9"; inthl = "18";}
	if(statArray[Intelligence] == 19) {intal = "+7"; intks = "95%"; intll = "10"; inthl = "All";}
	intString = "INT Bonus - AL: " + intal + ", Know %: " + intks + ", Min/Lev: " + intll + ", Max/Lev: " + inthl + "\n";
	ds.info.value += intString;
	}
function checkWis() {
	wisms = ""; 
	wissb = ""; 
	wiscf = ""; 
	saveMA = "&nbsp;"; 
	saveMAAmt = "&nbsp;";
	if(statArray[Wisdom] == 3) {wisms = "-3"; wissb = "na"; wiscf = "na"; saveMA = "Wis score"; saveMAAmt = wisms;}
	if(statArray[Wisdom] == 4) {wisms = "-2"; wissb = "na"; wiscf = "na"; saveMA = "Wis score"; saveMAAmt = wisms;}
	if(statArray[Wisdom] > 4 && statArray[Wisdom] < 8) {wisms = "-1"; wissb = "na"; wiscf = "na"; saveMA = "Wis score"; saveMAAmt = wisms;}
	if(statArray[Wisdom] == 8) {wisms = "None"; wissb = "na"; wiscf = "na";}
	if(statArray[Wisdom] == 9) {wisms = "None"; wissb = "None"; wiscf = "20%";}
	if(statArray[Wisdom] == 10) {wisms = "None"; wissb = "None"; wiscf = "15%";}
	if(statArray[Wisdom] == 11) {wisms = "None"; wissb = "None"; wiscf = "10%";}
	if(statArray[Wisdom] == 12) {wisms = "None"; wissb = "None"; wiscf = "5%";}
	if(statArray[Wisdom] == 13) {wisms = "None"; wissb = "1"; wiscf = "0%";}
	if(statArray[Wisdom] == 14) {wisms = "None"; wissb = "2-1"; wiscf = "0%";}
	if(statArray[Wisdom] == 15) {wisms = "+1"; wissb = "2-1, 1-2"; wiscf = "0%"; saveMA = "Wis score"; saveMAAmt = wisms;}
	if(statArray[Wisdom] == 16) {wisms = "+2"; wissb = "2-1, 2-2"; wiscf = "0%"; saveMA = "Wis score"; saveMAAmt = wisms;}
	if(statArray[Wisdom] == 17) {wisms = "+3"; wissb = "2-1, 2-2, 1-3"; wiscf = "0%"; saveMA = "Wis score"; saveMAAmt = wisms;}
	if(statArray[Wisdom] == 18) {wisms = "+4"; wissb = "2-1, 2-2, 1-3, 1-4"; wiscf = "0%"; saveMA = "Wis score"; saveMAAmt = wisms;}
	wisString = "WIS Bonus - MA Adj: " + wisms + ", Spell Bonus: " + wissb + ", Fail %: " + wiscf + "\n";
	ds.info.value += wisString;
	}
function checkDex() {
	dexra = ""; 
	dexda = "";
	if(statArray[Dexterity] == 3) {dexra = "-3"; dexda = "+4"; ds.ArmorClass.value = 10;}
	if(statArray[Dexterity] == 4) {dexra = "-2"; dexda = "+3"; ds.ArmorClass.value = 10;}
	if(statArray[Dexterity] == 5) {dexra = "-1"; dexda = "+2"; ds.ArmorClass.value = 10;}
	if(statArray[Dexterity] == 6) {dexra = "0"; dexda = "+1"; ds.ArmorClass.value = 10;}
	if(statArray[Dexterity] > 6 && statArray[Dexterity] < 15) {dexra = "0"; dexda = "0"; ds.ArmorClass.value = 10;}
	if(statArray[Dexterity] == 15) {dexra = "0"; dexda = "-1"; ds.ArmorClass.value = 9;}
	if(statArray[Dexterity] == 16) {dexra = "+1"; dexda = "-2"; ds.ArmorClass.value = 8;}
	if(statArray[Dexterity] == 17) {dexra = "+2"; dexda = "-3"; ds.ArmorClass.value = 7;}
	if(statArray[Dexterity] >= 18) {dexra = "+3"; dexda = "-4"; ds.ArmorClass.value = 6;}
	dexString = "DEX Bonus - React Adj: " + dexra + ", Surp. Adj: " + dexra + ", Def. Adj: " + dexda + "\n";
	ds.info.value += dexString;
	}
function checkCon() {
	conhp = ""; 
	conss = ""; 
	conrs = ""; 
	nhpb = 0; 
	fhpb = 0;
	if(statArray[Constitution] == 3) {conhp = "-2"; cobss = "35%"; conrs = "40%"; nhpb = -2; fhpb = -2;}
	if(statArray[Constitution] == 4) {conhp = "-1"; conss = "40%"; conrs = "45%"; nhpb = -1; fhpb = -1;}
	if(statArray[Constitution] == 5) {conhp = "-1"; conss = "45%"; conrs = "50%"; nhpb = -1; fhpb = -1;}
	if(statArray[Constitution] == 6) {conhp = "-1"; conss = "50%"; conrs = "55%"; nhpb = -1; fhpb = -1;}
	if(statArray[Constitution] == 7) {conhp = "0"; conss = "55%"; conrs = "60%";}
	if(statArray[Constitution] == 8) {conhp = "0"; conss = "60%"; conrs = "65%";}
	if(statArray[Constitution] == 9) {conhp = "0"; conss = "65%"; conrs = "70%";}
	if(statArray[Constitution] == 10) {conhp = "0"; conss = "70%"; conrs = "75%";}
	if(statArray[Constitution] == 11) {conhp = "0"; conss = "75%"; conrs = "80%";}
	if(statArray[Constitution] == 12) {conhp = "0"; conss = "80%"; conrs = "85%";}
	if(statArray[Constitution] == 13) {conhp = "0"; conss = "85%"; conrs = "90%";}
	if(statArray[Constitution] == 14) {conhp = "0"; conss = "88%"; conrs = "92%";}
	if(statArray[Constitution] == 15) {conhp = "+1"; conss = "91%"; conrs = "94%"; nhpb = 1; fhpb = 1;}
	if(statArray[Constitution] == 16) {conhp = "+2"; conss = "95%"; conrs = "96%"; nhpb = 2; fhpb = 2;}
	if(statArray[Constitution] == 17) {conhp = "+2(+3)"; conss = "97%"; conrs = "98%"; nhpb = 2; fhpb = 3;}
	if(statArray[Constitution] >= 18) {conhp = "+2(+4)"; conss = "99%"; conrs = "100%"; nhpb = 2; fhpb = 4;}
	conString = "CON Bonus - HP Adj: " + conhp + "hp/Lev, SSS: " + conss + ", RS: " + conrs + "\n";
	ds.info.value += conString;
	}
function checkChr() {
	chrmh = ""; 
	chrlb = ""; 
	chrra = "";
	if(statArray[Charisma] == 3) {chrmh = "1"; chrlb = "-30%"; chrra = "-25%";}
	if(statArray[Charisma] == 4) {chrmh = "1"; chrlb = "-25%"; chrra = "-20%";}
	if(statArray[Charisma] == 5) {chrmh = "2"; chrlb = "-20%"; chrra = "-15%";}
	if(statArray[Charisma] == 6) {chrmh = "2"; chrlb = "-15%"; chrra = "-10%";}
	if(statArray[Charisma] == 7) {chrmh = "3"; chrlb = "-10%"; chrra = "-5%";}
	if(statArray[Charisma] == 8) {chrmh = "3"; chrlb = "-5%"; chrra = "Nrm";}
	if(statArray[Charisma] > 8 && statArray[Charisma] < 12) {chrmh = "4"; chrlb = "Nrm"; chrra = "Nrm";}
	if(statArray[Charisma] == 12) {chrmh = "5"; chrlb = "Nrm"; chrra = "Nrm";}
	if(statArray[Charisma] == 13) {chrmh = "5"; chrlb = "Nrm"; chrra = "+5%";}
	if(statArray[Charisma] == 14) {chrmh = "6"; chrlb = "+5%"; chrra = "+10%";}
	if(statArray[Charisma] == 15) {chrmh = "7"; chrlb = "+15%"; chrra = "+15%";}
	if(statArray[Charisma] == 16) {chrmh = "8"; chrlb = "+20%"; chrra = "+25%";}
	if(statArray[Charisma] == 17) {chrmh = "10"; chrlb = "+30%"; chrra = "+30%";}
	if(statArray[Charisma] == 18) {chrmh = "15"; chrlb = "+40%"; chrra = "+35%";}
	chrString = "CHR Bonus - Max Hire: " + chrmh + ", Loyalty: " + chrlb + ", RA: " + chrra + "\n";
	ds.info.value += chrString;
	}
function checkCom() {
	/* TODO: Adjust Race */
	/*
	ds.ComB.value = statArray[7];
	ds.ComF.value = statArray[8];
	ds.ComV.value = statArray[9];
	ds.Com.value = statArray[6];
	*/

	

		comF = ""; 
		comV = ""; 
		chrra = "";

		/* Face */
		if(statArray[8] == 3) {comF = "grotesque, scarred, unbalanced, large birthmarks, growths on face";}
		if(statArray[8] == 4) {comF = "ugly, warts, moles, small scars, skin discoloration, small birthmarks";}
		if(statArray[8] == 5) {comF = "awful, blemishes on face, poor shape of one or more features";}
		if(statArray[8] == 6) {comF = "unappealing, poor blend of features, one feature especially unattractive";}
		if(statArray[8] == 7) {comF = "mediocre, some facial characteristic too big or small";}
		if(statArray[8] > 7 && statArray[8] < 13) {comF = "plain, average, some single feature might be above average";}
		if(statArray[8] == 13) {comF = "pretty or masculine, one strong feature is likely or a good overall blend";}
		if(statArray[8] == 14) {comF = "good-looking, good skin quality, good blend of features";}
		if(statArray[8] == 15) {comF = "attractive, very masculine or feminine, strong single feature";}
		if(statArray[8] == 16) {comF = "beautiful, handsome, multiple strong features";}
		if(statArray[8] == 17) {comF = "gorgeous, hallmark, fantastic appearance";}
		if(statArray[8] == 18) {comF = "Adonis or Aphrodite would be envious";}


		/* Voice */
		if(statArray[9] == 3) {comV = "raspy, squeaky, unintelligible, flat, cacophonous";}
		if(statArray[9] == 4) {comV = "difficult to understand, horrible sounding";}
		if(statArray[9] == 5) {comV = "unpleasant, can be misunderstood, unclear, some poor quality or qualities";}
		if(statArray[9] == 6) {comV = "unharmonious, irritating (required minimum for magic-users, but should be better)";}
		if(statArray[9] == 7) {comV = "droning, unmelodious (minimum for cleric or druid, but should be better)";}
		if(statArray[9] == 8) {comV = "uninspiring, insipid";}
		if(statArray[9] > 8 && statArray[9] < 13) {comV = "average quality (usual for illusionists, or above)";}
		if(statArray[9] == 13) {comV = "attention-getting, pleasant";}
		if(statArray[9] == 14) {comV = "harmonic (desirable for any- one who sings semi-professionally)";}
		if(statArray[9] == 15) {comV = "dominant, persuasive (most actors will score here or above)";}
		if(statArray[9] == 16) {comV = "vibrant (virtually a requirement for a bard)";}
		if(statArray[9] == 17) {comV = "melodic";}
		if(statArray[9] == 18) {comV = "bardic";}





		chrString = "COM Bonus - Face: " + comF + ", Voice: " + comV + ", RA: " + chrra + "\n";
		ds.info.value += chrString;
	}



function checkPer() {
		pernotes = "No perceptual impairment"; 
		persur = "None"; 
		perskills = "None";

		if(statArray[10] == 3) {pernotes = "Serious perceptual impairment exists"; persur = "-1"; perskills = "-10%";}
		if(statArray[10] == 4) {pernotes = "Perceptual impairment exists"; persur = "-1"; perskills = "-5%";}
		if(statArray[10] == 17) {pernotes = ""; persur = "+1"; perskills = "+5%";}
		if(statArray[10] == 18) {pernotes = ""; persur = "+1"; perskills = "+10%";}
		perString = "PER Bonus - Notes: " + pernotes + ", Adjust Surprise: " + persur + ", Skill Bonus: " + perskills + "\n";
		ds.info.value += perString;
}
function checkStat(stat, min, max) {
	if(statArray[stat] < min || statArray[stat] > max) return true;
	else return false;
	}
function genNum(low, high) {
	testVal = randNum(1,100);
	if(testVal < low) return 1;
	if(testVal > (low-1) && testVal < (high+1)) return 2;
	if(testVal > high) return 3;
	}
function getHeight(range, base, under, avg, over) {
	if(range == 1) ht = base - randNum(1,under);
	if(range == 2) {
		test2 = randNum(1,100);
		if(test2 < 31) ht = base - (randNum(1,avg)*0.5) + 0.5;
		if(test2 > 30 & test2 < 71) ht = base;
		if(test2 > 70) ht = base + (randNum(1,avg)*0.5) + 0.5;
		}
	if(range == 3) ht = base + randNum(1,over);
	feet = Math.round((ht/12)-0.5);
	height = feet + "ft. " + (ht%12) + "in.";
	return height;
	}
function getWeight(range, base, umin, umax, avg, omin, omax) {
	if(range == 1) wt = base - randNum(umin,umax);
	if(range == 2) {
		test2 = randNum(1,100);
		if(test2 < 31) wt = base - randNum(1,avg);
		if(test2 > 30 & test2 < 71) wt = base;
		if(test2 > 70) wt = base + randNum(1,avg);
		}
	if(range == 3) wt = base + randNum(omin,omax);
	weight = wt + " lbs.";
	return weight;
	}
function checkDesiredRace() {

/*
	H			Human = 1
	ED			ElfDark = 2.1;
	EG			ElfGrey = 2.2;
	EH			ElfHigh = 2.3;
	EV			ElfValley = 2.4;
	EWi			ElfWild = 2.5;
	EWo			ElfWood = 2.6;
	DG			DwarfGrey = 3.1;
	DH			DwarfHill = 3.2;
	DM			DwarfMountain = 3.3;
	HaS			HalflingStout = 4.1;
	HaH			HalflingHairfoot = 4.2;
	Hat			HalflingTallfellow = 4.3;
	Gd			GnomeDeep = 5.1;
	Gs			GnomeSurface = 5.2;
	HED			HalfElfDark = 6.1;
	HEG			HalfElfGrey = 6.2;
	HEH			HalfElfHigh = 6.3;
	HEV			HalfElfValley = 6.4;
	HEWi			HalfElfWild = 6.5;
	HEWo			HalfElfWood = 6.6;
	
Fighter = 1;
Ranger = 2;
Paladin = 3;
Cleric = 4;
Druid = 5;
Mage = 6;
Illusionist = 7;
Thief = 8;
Assassin = 9;
Monk = 10;
Bard = 11;


Cavalier = 	12
Paladin = 	3
Cleric = 		4
Druid = 		5
Bard = 		11
Fighter = 	1
Barbarian = 	13
Ranger = 		2
Magic-User = 	6
Illusionist = 	7
Thief = 		8
Assassin = 	9
Monk 		10

cf  = 14, ClericFighter            = cf;
cr  = 15, ClericRanger             = cr;
cm  = 16, ClericMagicuser          = cm;
ci  = 17, ClericIllusionist        = ci;
ct  = 18, ClericThief              = ct;
ca  = 19, ClericAssassin           = ca;
df  = 20, DruidFighter             = df;
dr  = 21, DruidRanger              = dr;
dm  = 22, DruidMagic-user          = dm;
dt  = 23, DruidThief               = dt;
fm  = 24, FighterMagic-user        = fm;
fi  = 25, FighterIllusionist       = fi;
ft  = 26, FighterThief             = ft;
fa  = 27, FighterAssassin          = fa;
rm  = 28, RangerMagicuser          = rm;
mt  = 29, MagicuserThief           = mt;
ma  = 30, MagicuserAssassin        = ma;
it  = 31, IllusionistThief         = it;
ia  = 32, IllusionistAssassin      = ia;
cfm = 33, ClericFighterMagicuser   = cfm;
cft = 34, ClericFighterThief       = cft;
cmt = 35, ClericMagicuserThief     = cmt;
fmt = 36, FighterMagicuserThief    = fmt;



										H	DG	DH	DM	ED	EG	EH	EV	EWo	EWi	Gd	Gs	HaS	HaH	HaT	HO	HED	HEG	HEH	HEV	HEWo	HEWi	
	cf			Cleric/fighter            	1	1	1	1	1	1	1	1	1	0	1	1	1	1	1	1	1	1	1	1	1	0	
	cr			Cleric/ranger             	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	cm			Cleric/magic-user         	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	ci			Cleric/illusionist        	1	0	0	0	0	0	0	0	0	0	1	1	0	0	0	0	0	0	0	0	0	0	
	ct			Cleric/thief              	1	1	0	0	1	1	1	1	1	0	1	1	1	1	1	1	1	1	1	1	1	0	
	ca			Cleric/assassin           	1	1	0	0	1	1	1	1	1	0	1	0	0	0	0	1	1	1	1	1	1	0	
	df			Druid/fighter             	1	0	0	0	0	1	1	1	1	0	0	0	1	1	1	0	0	1	1	1	1	0	
	dr			Druid/ranger              	1	0	0	0	0	1	1	1	1	0	0	0	0	0	0	0	0	1	1	1	1	0	
	dm			Druid/magic-user          	1	0	0	0	0	1	1	1	1	0	0	0	0	0	0	0	0	1	1	1	1	0	
	dt			Druid/thief               	1	0	0	0	0	1	1	1	1	0	0	0	1	1	1	0	0	1	1	1	1	0	
	fm			Fighter/magic-user        	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	fi			Fighter/illusionist       	1	0	0	0	0	0	0	0	0	0	1	1	0	0	0	0	0	0	0	0	0	0	
	ft			Fighter/thief             	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	1	
	fa			Fighter/assassin          	1	1	0	0	1	1	1	1	1	0	1	0	0	0	0	1	1	1	1	1	1	0	
	rm			Ranger/magic-user         	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	mt			Magic-user/thief          	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	ma			Magic-user/assassin       	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	it			Illusionist/thief         	1	0	0	0	0	0	0	0	0	0	1	1	0	0	0	0	0	0	0	0	0	0	
	ia			Illusionist/assassin      	1	0	0	0	0	0	0	0	0	0	1	0	0	0	0	0	0	0	0	0	0	0	
	cfm			Cleric/fighter/magic-user 	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	cft			Cleric/fighter/thief      	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	cmt			Cleric/magic-user/thief   	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	
	fmt			Fighter/magic-user/thief  	1	0	0	0	1	1	1	1	1	0	0	0	0	0	0	0	1	1	1	1	1	0	

<option value = "12">Cavalier</option>
<option value = "3">&nbsp;&nbsp;Paladin</option>
<option value = "4">Cleric</option>
<option value = "5">&nbsp;&nbsp;Druid</option>
<option value = "10">&nbsp;&nbsp;Bard</option>
<option value = "11">Fighter</option>
<option value = "1">&nbsp;&nbsp;Barbarian</option>
<option value = "13">&nbsp;&nbsp;Ranger</option>
<option value = "2">Magic-User</option>
<option value = "6">&nbsp;&nbsp;Illusionist</option>
<option value = "7">Thief</option>
<option value = "8">&nbsp;&nbsp;Assassin</option>
<option value = "9">&nbsp;&nbsp;Monk</option>
<option value = "15">Cleric/ranger</option>
<option value = "16">Cleric/magic-user</option>
<option value = "17">Cleric/illusionist</option>
<option value = "18">Cleric/thief</option>
<option value = "19">Cleric/assassin</option>
<option value = "20">Druid/fighter</option>
<option value = "21">Druid/ranger</option>
<option value = "22">Druid/magic-user</option>
<option value = "23">Druid/thief</option>
<option value = "24">Fighter/magic-user</option>
<option value = "25">Fighter/illusionist</option>
<option value = "26">Fighter/thief</option>
<option value = "27">Fighter/assassin</option>
<option value = "28">Ranger/magic-user</option>
<option value = "29">Magic-user/thief</option>
<option value = "30">Magic-user/assassin</option>
<option value = "31">Illusionist/thief</option>
<option value = "32">Illusionist/assassin</option>
<option value = "33">Cleric/fighter/magic-user</option>
<option value = "34">Cleric/fighter/thief</option>
<option value = "35">Cleric/magic-user/thief</option>
<option value = "36">Fighter/magic-user/thief</option>





	*/
ds = document.Stats;
desiredCharRace = ds.DesiredCharRace;


switch(desiredCharRace) {
	case Human:
		// code block
	break;
	case Elf:
		// code block
	break;
	case Dwarf:
		// code block
	break;
	case Halfling:
		// code block
	break;
	case Gnome:
		// code block
	break;
	case HalfElf:
		// code block
	break;
	case HalfOrc:
		// code block
	break;
	case ElfDark:
		// code block
	break;
	case ElfGrey:
		// code block
	break;
	case ElfHigh:
		// code block
	break;
	case ElfValley:
		// code block
	break;
	case ElfWild:
		// code block
	break;
	case ElfWood:
		// code block
	break;
	case DwarfGrey:
		// code block
	break;
	case DwarfHill:
		// code block
	break;
	case DwarfMountain:
		// code block
	break;
	case HalflingStout:
		// code block
	break;
	case HalflingHairfoot:
		// code block
	break;
	case HalflingTallfellow:
		// code block
	break;
	case GnomeDeep:
		// code block
	break;
	case GnomeSurface:
		// code block
	break;
	case HalfElfDark:
		// code block
	break;
	case HalfElfGrey:
		// code block
	break;
	case HalfElfHigh:
		// code block
	break;
	case HalfElfValley:
		// code block
	break;
	case HalfElfWild:
		// code block
	break;
	case HalfElfWood:
		// code block
	break;
	default:
		// code block
  }

         




























}


function checkRace() {
	ds = document.Stats;
	ds.CharClass.selectedIndex = 0;
	ds.CharMultiClass.selectedIndex = 0;
	ds.Align.selectedIndex = 0;
	ds.HitPoints.value="";
	ds.Gold.value="";
	ds.Save1.value="";
	ds.Save2.value="";
	ds.Save3.value="";
	ds.Save4.value="";
	ds.Save5.value="";
	ds.CharAge.value="";
	ds.Height.value="";
	ds.Weight.value="";
	raceOld = race;
	race = ds.CharRace.selectedIndex;
	sex = ds.CharSex.selectedIndex;
	ds.CharClass.selectedIndex = 0;
	strChk = 0; 
	intChk = 0; 
	wisChk  = 0; 
	dexChk = 0; 
	conChk = 0; 
	chrChk = 0;
	checkFlag = 0;
	if(rollFlag) {
		if(bonusStat == 0) {
			if(sex != 0) {
				if(race == Elf) { // Elf
					if(sex == Male) {if(checkStat(0,3,18)) {checkFlag = 1; strChk = true; strmin = 3; strmax = 18;}}
					if(sex == Female) {if(checkStat(0,3,16)) {checkFlag = 1; strChk = true; strmin = 3; strmax = 16;}}
					if(checkStat(1,8,18)) {checkFlag = 1; intChk = true; intmin = 8; intmax = 18;}
					if(checkStat(2,3,18)) {checkFlag = 1; wisChk = true; wismin = 3; wismax = 18;}
					if(checkStat(3,7,19)) {checkFlag = 1; dexChk = true; dexmin = 7; dexmax = 19;}
					if(checkStat(4,6,18)) {checkFlag = 1; conChk = true; conmin = 6; conmax = 18;}
					if(checkStat(5,8,18)) {checkFlag = 1; chrChk = true; chrmin = 8; chrmax = 18;}
					}
				if(race == Dwarf) { // Dwarf
					if(sex == Male) {if(checkStat(0,8,18)) {checkFlag = 1; strChk = true; strmin = 8; strmax = 18;}}
					if(sex == Female) {if(checkStat(0,8,17)) {checkFlag = 1; strChk = true; strmin = 8; strmax = 17;}}
					if(checkStat(1,3,18))  {checkFlag = 1; intChk = true; intmin = 3; intmax = 18;}
					if(checkStat(2,3,18))  {checkFlag = 1; wisChk = true; wismin = 3; wismax = 18;}
					if(checkStat(3,3,17))  {checkFlag = 1; dexChk = true; dexmin = 3; dexmax = 17;}
					if(checkStat(4,12,19)) {checkFlag = 1; conChk = true; conmin = 12; conmax = 19;}
					if(checkStat(5,3,17))  {checkFlag = 1; chrChk = true; chrmin = 3; chrmax = 16;}
					}
				if(race == Halfling) { // Halfling
					if(sex == Male) {if(checkStat(0,6,17)) {checkFlag = 1; strChk = true; strmin = 6; strmax = 17;}}
					if(sex == Female) {if(checkStat(0,6,14)) {checkFlag = 1; strChk = true; strmin = 6; strmax = 14;}}
					if(checkStat(1,6,18))  {checkFlag = 1; intChk = true; intmin = 6; intmax = 18;}
					if(checkStat(2,3,17))  {checkFlag = 1; wisChk = true; wismin = 3; wismax = 17;}
					if(checkStat(3,8,18))  {checkFlag = 1; dexChk = true; dexmin = 8; dexmax = 18;}
					if(checkStat(4,10,19)) {checkFlag = 1; conChk = true; conmin = 10; conmax = 19;}
					if(checkStat(5,3,18))  {checkFlag = 1; chrChk = true; chrmin = 3; chrmax = 18;}
					}
				if(race == Gnome) { // Gnome
					if(sex == Male) {if(checkStat(0,6,18)) {checkFlag = 1; strChk = true; strmin = 6; strmax = 18;}}
					if(sex == Female) {if(checkStat(0,6,15)) {checkFlag = 1; strChk = true; strmin = 6; strmax = 15;}}
					if(checkStat(1,7,18))  {checkFlag = 1; intChk = true; intmin = 7; intmax = 18;}
					if(checkStat(2,3,18))  {checkFlag = 1; wisChk = true; wismin = 3; wismax = 18;}
					if(checkStat(3,3,18))  {checkFlag = 1; dexChk = true; dexmin = 3; dexmax = 18;}
					if(checkStat(4,8,18))  {checkFlag = 1; conChk = true; conmin = 8; conmax = 18;}
					if(checkStat(5,3,18))  {checkFlag = 1; chrChk = true; chrmin = 3; chrmax = 18;}
					}
				if(race == HalfElf) { // Half-Elf
					if(sex == Male) {if(checkStat(0,3,18)) {checkFlag = 1; strChk = true; strmin = 3; strmax = 18;}}
					if(sex == Female) {if(checkStat(0,3,17)) {checkFlag = 1; strChk = true; strmin = 3; strmax = 17;}}
					if(checkStat(1,4,18))  {checkFlag = 1; intChk = true; intmin = 4; intmax = 18;}
					if(checkStat(2,3,18))  {checkFlag = 1; wisChk = true; wismin = 3; wismax = 18;}
					if(checkStat(3,6,18))  {checkFlag = 1; dexChk = true; dexmin = 6; dexmax = 18;}
					if(checkStat(4,6,18))  {checkFlag = 1; conChk = true; conmin = 6; conmax = 18;}
					if(checkStat(5,3,18))  {checkFlag = 1; chrChk = true; chrmin = 3; chrmax = 18;}
					}
				if(race == HalfOrc) { // Half-Orc
					if(sex == Male) {if(checkStat(0,6,18)) {checkFlag = 1; strChk = true; strmin = 6; strmax = 18;}}
					if(sex == Female) {if(checkStat(0,6,18)) {checkFlag = 1; strChk = true; strmin = 6; strmax = 18;}}
					if(checkStat(1,3,17))  {checkFlag = 1; intChk = true; intmin = 3;  intmax = 17;}
					if(checkStat(2,3,14))  {checkFlag = 1; wisChk = true; wismin = 3;  wismax = 14;}
					if(checkStat(3,3,17))  {checkFlag = 1; dexChk = true; dexmin = 3;  dexmax = 17;}
					if(checkStat(4,13,19)) {checkFlag = 1; conChk = true; conmin = 13; conmax = 19;}
					if(checkStat(5,3,14))  {checkFlag = 1; chrChk = true; chrmin = 3;  chrmax = 12;}
					}
				if(checkFlag) {
					rstring = "These stats do not meet the requirements to be a ";
					rstring += ds.CharSex.value + " " + ds.CharRace.value + ":\n";
					if(strChk) rstring += "STR(Min " + strmin + " Max " + strmax + ")\n";
					if(intChk) rstring += "INT(Min " + intmin + " Max " + intmax + ")\n";
					if(wisChk) rstring += "WIS(Min " + wismin + " Max " + wismax + ")\n";
					if(dexChk) rstring += "DEX(Min " + dexmin + " Max " + dexmax + ")\n";
					if(conChk) rstring += "CON(Min " + conmin + " Max " + conmax + ")\n";
					if(chrChk) rstring += "CHR(Min " + chrmin + " Max " + chrmax + ")\n";
					alert(rstring);
					if(raceOld == Elf) {statArray[Dexterity] -= 1; statArray[Constitution] += 1;}
					if(raceOld == Dwarf) {statArray[Constitution] -= 1; statArray[Charisma] += 1;}
					if(raceOld == Halfling) {statArray[Strength] += 1; statArray[Dexterity] -= 1;}
					if(raceOld == HalfOrc) {statArray[Strength] -= 1; statArray[Constitution] -= 1; statArray[Charisma] += 2;}
					ds.CharRace.selectedIndex = 0; race = 0;
					addText();
					}
				else {
					savePoison = "&nbsp;"; saveRSW = "&nbsp;"; saveSpell = "&nbsp;"; savePoisonAmt = "&nbsp;"; saveRSWAmt = "&nbsp;"; saveSpellAmt = "&nbsp;";
					if(race == Human) {
						charVis = "Normal";
						raceSA = "Unlimited level progression.";
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(21,80),72,12,8,12);
							ds.Weight.value = getWeight(genNum(26,75),175,3,36,8,5,60);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(21,80),60,6,8,8);
							ds.Weight.value = getWeight(genNum(26,75),130,3,30,8,4,48);
							}
						}
					if(race == Elf) {
						charVis = "60' Infravision";
						raceSA = "Notice secret door 1 in 6, find secret door 2 in 6, find concealed door 3 in 6. +1 to hit with bows, and short or long swords. 90% resist sleep & charm spells.";
						statArray[Dexterity] += 1; statArray[Constitution] -= 1;
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(11,80),60,4,8,6);
							ds.Weight.value = getWeight(genNum(16,90),100,1,10,8,1,20);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(11,80),54,4,8,6);
							ds.Weight.value = getWeight(genNum(16,90),80,1,10,6,2,12);
							}
						}
					if(race == Dwarf) {
						STB = Math.round(statArray[Constitution]/3.5);
						savePoison = "Race/Con (poison only)"; savePoisonAmt = "+" + STB;
						saveRSW = "Race/Con"; saveRSWAmt = "+" + STB;
						saveSpell = "Race/Con"; saveSpellAmt = "+" + STB;
						charVis = "60' Infravision";
						raceSA = "Determine depth 50%, detect grade or slope 75%, detect new const. passage or tunnel 75%, detect sliding/shifting walls/rooms 66.6%, detect traps involving pits or stonework 50%";
						statArray[Constitution] += 1; statArray[Charisma] -= 1;
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(16,80),48,4,6,6);
							ds.Weight.value = getWeight(genNum(21,65),150,2,16,8,2,24);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(16,80),46,4,6,4);
							ds.Weight.value = getWeight(genNum(21,65),120,2,16,8,2,20);
							}
						}
					if(race == Halfling) {
						STB = Math.round(statArray[Constitution]/3.5);
						savePoison = "Race/Con (poison only)"; savePoisonAmt = "+" + STB;
						saveRSW = "Race/Con"; saveRSWAmt = "+" + STB;
						saveSpell = "Race/Con"; saveSpellAmt = "+" + STB;
						charVis = "60' Infravision";
						raceSA = "Detect grade or slope 75%, determine direction 50%";
						statArray[Strength] -= 1; statArray[Dexterity] += 1;
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(11,90),36,3,6,6);
							ds.Weight.value = getWeight(genNum(11,50),60,2,8,6,2,12);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(11,90),33,3,6,3);
							ds.Weight.value = getWeight(genNum(11,50),50,2,8,6,2,8);
							}
						}
					if(race == Gnome) {
						STB = Math.round(statArray[Constitution]/3.5);
						saveRSW = "Race/Con"; saveRSWAmt = "+" + STB;
						saveSpell = "Race/Con"; saveSpellAmt = "+" + STB;
						charVis = "60' Infravision";
						raceSA = "Determine depth 60%, detect grade or slope 80%, detect unsafe walls/ceilings/floors 70%, determine direction of travel underground 50%";
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(21,85),42,3,6,3);
							ds.Weight.value = getWeight(genNum(21,75),80,2,8,6,2,12);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(21,85),39,3,6,3);
							ds.Weight.value = getWeight(genNum(21,75),75,1,8,6,1,8);
							}
						}
					if(race == HalfElf) {
						charVis = "60' Infravision";
						raceSA = "Notice secret door 1 in 6, find secret door 2 in 6, find concealed door 3 in 6. 30% resist sleep & charm spells.";
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(36,90),66,6,8,6);
							ds.Weight.value = getWeight(genNum(21,85),130,1,20,8,1,20);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(36,90),62,6,8,6);
							ds.Weight.value = getWeight(genNum(21,85),100,1,12,8,2,16);
							}
						}
					if(race == HalfOrc) {
						charVis = "60' Infravision";
						raceSA = "";
						if(sex == Male) {
							ds.Height.value = getHeight(genNum(46,75),66,4,8,4);
							ds.Weight.value = getWeight(genNum(31,55),150,2,16,8,4,40);
							}
						if(sex == Female) {
							ds.Height.value = getHeight(genNum(46,75),62,3,8,3);
							ds.Weight.value = getWeight(genNum(32,55),120,3,18,8,4,32);
							}
						if(statArray[Strength] == 18) {SStrPump = 10; statArray[Constitution] += 1; statArray[Charisma] -= 2;}
						else {statArray[Strength] += 1; statArray[Constitution] += 1; statArray[Charisma] -= 2;}
						}
					if(raceOld == Elf) {statArray[Dexterity] -= 1; statArray[Constitution] += 1;}
					if(raceOld == Dwarf) {statArray[Constitution] -= 1; statArray[Charisma] += 1;}
					if(raceOld == Halfling) {statArray[Strength] += 1; statArray[Dexterity] -= 1;}
					if(raceOld == HalfOrc) {
						if(statArray[Strength] == 18) {ds.SStr.value -= 10; statArray[Constitution] -= 1; statArray[Charisma] += 2;}
						else {statArray[Strength] -= 1; statArray[Constitution] -= 1; statArray[Charisma] += 2;}
						}
					addText();
					}
				}
			else {
				alert("Please select your character's gender");
				ds.CharRace.selectedIndex = 0;
				}
			}
		else {
			alert("Allocate your bonus points before choosing a race");
			ds.CharRace.selectedIndex = 0;
			}
		}
	else {
		alert("Please roll your stats first");
		ds.CharRace.selectedIndex = 0;
		ds.RollButton.focus();
		}
	}
function checkClass() {
	ds = document.Stats;
	ds.SStr.value = "";
	ds.CharMultiClass.selectedIndex = 0;
	ds.Align.selectedIndex = 0;
	ds.HitPoints.value="";ds.Gold.value="";ds.CharAge.value="";
	ClassCheck = 0; RaceCheck = 0;
	strChk = 0; intChk = 0; wisChk = 0; dexChk = 0; conChk = 0; chrChk = 0;
	if(rollFlag) {
		ClassCode = ds.CharClass.selectedIndex;
		race = ds.CharRace.selectedIndex;
		if(race == 0) {
			alert("Please select your race first");
			ds.CharClass.selectedIndex = 0;
			ds.CharRace.focus();
			}
		else {
			if(ClassCode == Fighter) { // Fighter
				if(checkStat(0,9,30)) {ClassCheck = true; strChk = true; strmin = 9;}
				if(checkStat(4,7,30)) {ClassCheck = true; conChk = true; conmin = 7;}
				}
			if(ClassCode == Ranger) { // Ranger
				if(checkStat(0,13,30)) {ClassCheck = true; strChk = true; strmin = 13;}
				if(checkStat(1,13,30)) {ClassCheck = true; intChk = true; intmin = 13;}
				if(checkStat(2,14,30)) {ClassCheck = true; wisChk = true; wismin = 14;}
				if(checkStat(4,14,30)) {ClassCheck = true; conChk = true; conmin = 14;}
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(ClassCode == Paladin) { // Paladin
				if(checkStat(0,12,30)) {ClassCheck = true; strChk = true; strmin = 12;}
				if(checkStat(1,9,30)) {ClassCheck = true; intChk = true; intmin = 9;}
				if(checkStat(2,13,30)) {ClassCheck = true; wisChk = true; wismin = 13;}
				if(checkStat(4,9,30)) {ClassCheck = true; conChk = true; conmin = 9;}
				if(checkStat(5,17,30)) {ClassCheck = true; chrChk = true; chrmin = 17;}
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(ClassCode == Cleric) { // Cleric
				if(checkStat(2,9,30)) {ClassCheck = true; wisChk = true; wismin = 9;}
				if(race == Gnome) RaceCheck = true;
				}
			if(ClassCode == Druid) { // Druid
				if(checkStat(2,12,30)) {ClassCheck = true; wisChk = true; wismin = 12;}
				if(checkStat(5,15,30)) {ClassCheck = true; chrChk = true; chrmin = 15;}
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(ClassCode == Mage) { // Magic-User
				if(checkStat(1,9,30)) {ClassCheck = true; intChk = true; intmin = 9;}
				if(checkStat(3,6,30)) {ClassCheck = true; dexChk = true; dexmin = 6;}
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(ClassCode == Illusionist) { // Illusionist
				if(checkStat(1,15,30)) {ClassCheck = true; intChk = true; intmin = 15;}
				if(checkStat(3,16,30)) {ClassCheck = true; dexChk = true; dexmin = 16;}
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(ClassCode == Thief) { // Thief
				if(checkStat(3,9,30)) {ClassCheck = true; dexChk = true; dexmin = 9;}
				}
			if(ClassCode == Assassin) { // Assassin
				if(checkStat(0,12,30)) {ClassCheck = true; strChk = true; strmin = 12;}
				if(checkStat(1,11,30)) {ClassCheck = true; intChk = true; intmin = 11;}
				if(checkStat(3,12,30)) {ClassCheck = true; dexChk = true; dexmin = 12;}
				if(race == Gnome) RaceCheck = true;
				}
			if(ClassCode == Monk) { // Monk
				if(checkStat(0,15,30)) {ClassCheck = true; strChk = true; strmin = 15;}
				if(checkStat(2,15,30)) {ClassCheck = true; wisChk = true; wismin = 15;}
				if(checkStat(3,15,30)) {ClassCheck = true; dexChk = true; dexmin = 15;}
				if(checkStat(4,11,30)) {ClassCheck = true; conChk = true; conmin = 11;}
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(ClassCode == Bard) { // Bard
				if(checkStat(0,9,30)) {ClassCheck = true; strChk = true; strmin = 9;}
				if(checkStat(1,15,30)) {ClassCheck = true; intChk = true; intmin = 15;}
				if(checkStat(2,12,30)) {ClassCheck = true; wisChk = true; wismin = 12;}
				if(checkStat(3,16,30)) {ClassCheck = true; dexChk = true; dexmin = 16;}
				if(checkStat(4,6,30)) {ClassCheck = true; conChk = true; conmin = 6;}
				if(checkStat(5,15,30)) {ClassCheck = true; chrChk = true; chrmin = 15;}
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
				if(RaceCheck) {
				if(race == Elf) astring = "An "; else astring = "A ";
				astring += ds.CharRace.value;
				astring += " character can not be ";
				if(ClassCode == Illusionist || ClassCode == Assassin) astring += "an "; else astring += "a ";
				astring += ds.CharClass.value;
				astring += ".";
				alert(astring);
				ClassCode = ds.CharClass.selectedIndex = 0;
				}
			if(ClassCheck) {
				astring = "These stats do not meet the minimum requirements to be ";
				if(ClassCode == Illusionist || ClassCode == Assassin) astring += "an "; else astring += "a ";
				astring += ds.CharClass.value;
				astring += ": ";
				if(strChk) astring += "STR(Min " + strmin + ") ";
				if(intChk) astring += "INT(Min " + intmin + ") ";
				if(wisChk) astring += "WIS(Min " + wismin + ") ";
				if(dexChk) astring += "DEX(Min " + dexmin + ") ";
				if(conChk) astring += "CON(Min " + conmin + ") ";
				if(chrChk) astring += "CHR(Min " + chrmin + ") ";
				alert(astring);
				ClassCode = ds.CharClass.selectedIndex = 0;
				}
			if(ClassCode != 0) {
				if(ClassCode == Fighter || ClassCode == Ranger || ClassCode == Paladin) {
					if(ds.Str.value == 18) {
						SStr = randNum(1,100); ds.SStr.value = SStr;
						if(race == HalfOrc) ds.SStr.value = SStr + SStrPump;
						}
					}
				classSA = ""; xpBonus = "";
				if(ClassCode == Fighter) {
					ds.HitPoints.value = randNum(1,10) + fhpb;
					ds.Gold.value = (randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4))*10;
					ds.Save1.value=16;ds.Save2.value=17;ds.Save3.value=18;ds.Save4.value=20;ds.Save5.value=19;
					classSA = "May use any armor and weapon type.";
					if(statArray[Strength] > 15) xpBonus = "+10% earned experience."
					if(race == Human) ds.CharAge.value = 15 + randNum(1,4);
					if(race == Elf) ds.CharAge.value = 130 + randNum(5,30);
					if(race == Dwarf) ds.CharAge.value = 40 + randNum(5,20);
					if(race == Halfling) ds.CharAge.value = 20 + randNum(3,12);
					if(race == Gnome) ds.CharAge.value = 60 + randNum(5,20);
					if(race == HalfElf) ds.CharAge.value = 22 + randNum(3,12);
					if(race == HalfOrc) ds.CharAge.value = 13 + randNum(1,4);
					}
				if(ClassCode == Ranger) {
					ds.HitPoints.value = randNum(1,8)+ randNum(1,8) + fhpb;
					ds.Gold.value = (randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4))*10;
					ds.Save1.value=16;ds.Save2.value=17;ds.Save3.value=18;ds.Save4.value=20;ds.Save5.value=19;
					classSA = "+1 to hit per Ranger level vs. giant class humanoids. Surprise 50%. Tracking ability (detailed in the PH on pg. 24).";
					if(statArray[Strength] > 15 && statArray[Intelligence] > 15 && statArray[Wisdom] > 15) xpBonus = "+10% earned experience.";
					if(race == Human) ds.CharAge.value = 20 + randNum(1,4);
					if(race == HalfElf) ds.CharAge.value = 22 + randNum(3,12);
					}
				if(ClassCode == Paladin) {
					ds.HitPoints.value = randNum(1,10) + fhpb;
					ds.Gold.value = (randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4))*10;
					ds.Save1.value=16;ds.Save2.value=17;ds.Save3.value=18;ds.Save4.value=20;ds.Save5.value=19;
					classSA = "Detect Evil 60'. +2 on all saves. Immunity to all disease. Cure Disease. Lay on Hands (cure 2hp per Paladin level). Protection from Evil 10'.";
					if(statArray[Strength] > 15 && statArray[Wisdom] > 15) xpBonus = "+10% earned experience."
					if(race == Human) ds.CharAge.value = 17 + randNum(1,4);
					}
				if(ClassCode == Cleric) {
					ds.HitPoints.value = randNum(1,8) + nhpb;
					ds.Gold.value = (randNum(1,6)+randNum(1,6)+randNum(1,6))*10;
					ds.Save1.value=10;ds.Save2.value=13;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
					classSA = "Spell use. Turn away or command undead. May use any armor, restricted to blunt weapons.";
					if(statArray[Wisdom] > 15) xpBonus = "+10% earned experience.";
					if(race == Human) ds.CharAge.value = 18 + randNum(1,4);
					if(race == HalfElf) ds.CharAge.value = 40 + randNum(2,8);
					if(race == HalfOrc) ds.CharAge.value = 20 + randNum(1,4);
					}
				if(ClassCode == Druid) {
					ds.HitPoints.value = randNum(1,8) + nhpb;
					ds.Gold.value = (randNum(1,6)+randNum(1,6)+randNum(1,6))*10;
					ds.Save1.value=10;ds.Save2.value=13;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
					classSA = "Spell use. May use any weapon, restricted to leather armor and wooden shield.";
					if(statArray[Wisdom] > 15 && statArray[Charisma] > 15) xpBonus = "+10% earned experience.";
					if(race == Human) ds.CharAge.value = 18 + randNum(1,4);
					if(race == HalfElf) ds.CharAge.value = 40 + randNum(2,8);
					}
				if(ClassCode == Mage) {
					ds.HitPoints.value = randNum(1,4) + nhpb;
					ds.Gold.value = (randNum(1,4)+randNum(1,4))*10;
					ds.Save1.value=14;ds.Save2.value=13;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
					classSA = "Spell use. Cannot wear armor, weapons restricted to daggers, darts and staff.";
					if(statArray[Intelligence] > 15) xpBonus = "+10% earned experience.";
					if(race == Human) ds.CharAge.value = 24 + randNum(2,16);
					if(race == Elf) ds.CharAge.value = 150 + randNum(5,30);
					if(race == HalfElf) ds.CharAge.value = 30 + randNum(2,16);
					}
				if(ClassCode == Illusionist) {
					ds.HitPoints.value = randNum(1,4) + nhpb;
					ds.Gold.value = (randNum(1,4)+randNum(1,4))*10;
					ds.Save1.value=14;ds.Save2.value=13;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
					classSA = "Spell use. Cannot wear armor, weapons restricted to daggers, darts and staff.";
					if(race == Human) ds.CharAge.value = 30 + randNum(1,6);
					if(race == Gnome) ds.CharAge.value = 100 + randNum(2,12);
					}
				if(ClassCode == Thief) {
					ds.HitPoints.value = randNum(1,6) + nhpb;
					ds.Gold.value = (randNum(1,6)+randNum(1,6))*10;
					ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
					classSA = "Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage. Restricted to leather armor, most small weapons.";
					if(statArray[Dexterity] > 15) xpBonus = "+10% earned experience.";
					if(race == Human) ds.CharAge.value = 18 + randNum(1,4);
					if(race == Elf) ds.CharAge.value = 50 + randNum(5,30);
					if(race == Dwarf) ds.CharAge.value = 75 + randNum(3,18);
					if(race == Halfling) ds.CharAge.value = 40 + randNum(2,8);
					if(race == Gnome) ds.CharAge.value = 80 + randNum(5,20);
					if(race == HalfElf) ds.CharAge.value = 22 + randNum(3,18);
					if(race == HalfOrc) ds.CharAge.value = 20 + randNum(2,8);
					}
				if(ClassCode == Assassin) {  // Assassin
					ds.HitPoints.value = randNum(1,6) + nhpb;
					ds.Gold.value = (randNum(1,6)+randNum(1,6))*10;
					ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
					classSA = "Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage. Restricted to leather armor, all weapons.";
					if(race == Human) ds.CharAge.value = 20 + randNum(1,4);
					if(race == Elf) ds.CharAge.value = 50 + randNum(5,30);
					if(race == Dwarf) ds.CharAge.value = 75 + randNum(3,18);
					if(race == Gnome) ds.CharAge.value = 80 + randNum(5,20);
					if(race == HalfElf) ds.CharAge.value = 22 + randNum(3,18);
					if(race == HalfOrc) ds.CharAge.value = 20 + randNum(2,8);
					}
				if(ClassCode == Monk) {  // Monk
					ds.ArmorClass.value = 10;
					ds.HitPoints.value = randNum(1,4) + randNum(1,4) + nhpb;
					ds.Gold.value = randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4);
					ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
					classSA = "Thief: OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%. No armor or shield, limited weapons.";
					if(race == Human) ds.CharAge.value = 21 + randNum(1,4);
					}
				if(ClassCode == Bard) {  // Bard
					ds.ArmorClass.value = 10;
					ds.HitPoints.value = randNum(1,6) + fhpb;
					ds.Gold.value = (randNum(1,6)+randNum(1,6))*10;
					ds.Save1.value=14;ds.Save2.value=13;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
					classSA = "Bard: Druid/Illusionist Spell Use () Charm: 10% Lore: 0% RL: 0%. Restricted to leather armor and wooden shield.  Axe(Hand/Throwing), Club, Dagger, Darts, Flaming Oil, Hammer, Javelin, Mace(Horseman), Scimitar, Sling, Broadsword, Longsword, and Shortsword.";
					if(statArray[Dexterity] > 15) xpBonus = "Does not get '+10% earned experience'.";
					if(race == Human) ds.CharAge.value = 18 + randNum(1,4);
					if(race == Elf) ds.CharAge.value = 50 + randNum(5,30);
					if(race == Dwarf) ds.CharAge.value = 75 + randNum(3,18);
					if(race == Halfling) ds.CharAge.value = 40 + randNum(2,8);
					if(race == Gnome) ds.CharAge.value = 80 + randNum(5,20);
					if(race == HalfElf) ds.CharAge.value = 22 + randNum(3,18);
					if(race == HalfOrc) ds.CharAge.value = 20 + randNum(2,8);	
					}
					
				addText();
				}
			}
		}
	else {
		alert("Please roll your stats first");
		ds.CharClass.selectedIndex = 0;
		ds.RollButton.focus();
		}
	}
function checkMultiClass() {
	ds = document.Stats;
	MCCCheck = 0;
	raceCheck = 0;
	ds.CharClass.selectedIndex = 0;
	ds.Align.selectedIndex = 0;
	strChk = 0; 
	intChk = 0; 
	wisChk = 0; 
	dexChk = 0; 
	conChk = 0; 
	chrChk = 0;
	if(rollFlag) {
		MCC = ds.CharMultiClass.selectedIndex;
		race = ds.CharRace.selectedIndex;
		if(race == 0) {
			alert("Please select your race first");
			ds.CharMultiClass.selectedIndex = 0;
			ds.CharRace.focus();
			}
		else {
			if(MCC == 1) { // Cleric/Fighter
				if(checkStat(0,9,30)) {MCCCheck = 1; strChk = true; strmin = 9;}
				if(checkStat(2,9,30)) {MCCCheck = 1; wisChk = true; wismin = 9;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				}
			if(MCC == 2) { // Cleric/Fighter/Mage
				if(checkStat(0,9,30)) {MCCCheck = 1; strChk = true; strmin = 9;}
				if(checkStat(1,9,30)) {MCCCheck = 1; intChk = true; intmin = 9;}
				if(checkStat(2,13,30)) {MCCCheck = 1; wisChk = true; wismin = 13;}
				if(checkStat(3,6,30)) {MCCCheck = 1; dexChk = true; dexmin = 6;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 3) { // Cleric/Ranger
				if(checkStat(0,13,30)) {MCCCheck = 1; strChk = true; strmin = 13;}
				if(checkStat(1,13,30)) {MCCCheck = 1; intChk = true; intmin = 13;}
				if(checkStat(2,14,30)) {MCCCheck = 1; wisChk = true; wismin = 14;}
				if(checkStat(4,14,30)) {MCCCheck = 1; conChk = true; conmin = 14;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 4) { // Cleric/Mage
				if(checkStat(1,9,30)) {MCCCheck = 1; intChk = true; intmin = 9;}
				if(checkStat(2,13,30)) {MCCCheck = 1; wisChk = true; wismin = 13;}
				if(checkStat(3,6,30)) {MCCCheck = 1; dexChk = true; dexmin = 6;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 5) { // Cleric/Thief
				if(checkStat(2,9,30)) {MCCCheck = 1; wisChk = true; wismin = 9;}
				if(checkStat(3,9,30)) {MCCCheck = 1; dexChk = true; dexmin = 9;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				}
			if(MCC == 6) { // Cleric/Assassin
				if(checkStat(0,12,30)) {MCCCheck = 1; strChk = true; strmin = 12;}
				if(checkStat(1,11,30)) {MCCCheck = 1; intChk = true; intmin = 11;}
				if(checkStat(2,9,30)) {MCCCheck = 1; wisChk = true; wismin = 9;}
				if(checkStat(3,12,30)) {MCCCheck = 1; dexChk = true; dexmin = 12;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				}
			if(MCC == 7) { // Fighter/Mage
				if(checkStat(0,9,30)) {MCCCheck = 1; strChk = true; strmin = 9;}
				if(checkStat(1,9,30)) {MCCCheck = 1; intChk = true; intmin = 9;}
				if(checkStat(3,6,30)) {MCCCheck = 1; dexChk = true; dexmin = 6;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 8) { // Fighter/Illusionist
				if(checkStat(0,9,30)) {MCCCheck = 1; strChk = true; strmin = 9;}
				if(checkStat(1,15,30)) {MCCCheck = 1; intChk = true; intmin = 15;}
				if(checkStat(3,12,30)) {MCCCheck = 1; dexChk = true; dexmin = 12;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 9) { // Fighter/Thief
				if(checkStat(0,9,30)) {MCCCheck = 1; strChk = true; strmin = 9;}
				if(checkStat(3,9,30)) {MCCCheck = 1; dexChk = true; dexmin = 9;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				}
			if(MCC == 10) { // Fighter/Assassin
				if(checkStat(0,12,30)) {MCCCheck = 1; strChk = true; strmin = 12;}
				if(checkStat(1,11,30)) {MCCCheck = 1; intChk = true; intmin = 11;}
				if(checkStat(3,12,30)) {MCCCheck = 1; dexChk = true; dexmin = 12;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				}
			if(MCC == 11) { // Fighter/Mage/Thief
				if(checkStat(0,9,30)) {MCCCheck = 1; strChk = true; strmin = 9;}
				if(checkStat(1,9,30)) {MCCCheck = 1; intChk = true; intmin = 9;}
				if(checkStat(3,9,30)) {MCCCheck = 1; dexChk = true; dexmin = 9;}
				if(checkStat(4,7,30)) {MCCCheck = 1; conChk = true; conmin = 7;}
				if(race == Human) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 12) { // Mage/Thief
				if(checkStat(1,9,30)) {MCCCheck = 1; intChk = true; intmin = 9;}
				if(checkStat(3,9,30)) {MCCCheck = 1; dexChk = true; dexmin = 9;}
				if(race == Human) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 13) { // Illusionist/Thief
				if(checkStat(1,15,30)) {MCCCheck = 1; intChk = true; intmin = 15;}
				if(checkStat(3,16,30)) {MCCCheck = 1; dexChk = true; dexmin = 16;}
				if(race == Human) RaceCheck = true;
				if(race == Elf) RaceCheck = true;
				if(race == Dwarf) RaceCheck = true;
				if(race == Halfling) RaceCheck = true;
				if(race == HalfElf) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			if(MCC == 14) { // Fighter/Bard
				if(checkStat(0,9,30)) {ClassCheck = true; strChk = true; strmin = 9;}
				if(checkStat(1,15,30)) {ClassCheck = true; intChk = true; intmin = 15;}
				if(checkStat(2,12,30)) {ClassCheck = true; wisChk = true; wismin = 12;}
				if(checkStat(3,16,30)) {ClassCheck = true; dexChk = true; dexmin = 16;}
				if(checkStat(4,6,30)) {ClassCheck = true; conChk = true; conmin = 6;}
				if(checkStat(5,15,30)) {ClassCheck = true; chrChk = true; chrmin = 15;}
				if(race == Gnome) RaceCheck = true;
				if(race == HalfOrc) RaceCheck = true;
				}
			}
		if(raceCheck) {
			if(race == Elf) astring = "An "; else astring = "A ";
			astring += ds.CharRace.value;
			astring += " character can not be ";
			if(MCC == 13) astring += "an "; else astring += "a ";
			astring += ds.CharMultiClass.value;
			astring += ".";
			alert(astring);
			MCC = ds.CharMultiClass.selectedIndex = 0;
			}
		if(MCCCheck) {
			astring = "These stats do not meet the minimum requirements to be ";
			if(MCC == 13) astring += "an "; else astring += "a ";
			astring += ds.CharMultiClass.value;
			astring += ": ";
			if(strChk) astring += "STR(Min " + strmin + ") ";
			if(intChk) astring += "INT(Min " + intmin + ") ";
			if(wisChk) astring += "WIS(Min " + wismin + ") ";
			if(dexChk) astring += "DEX(Min " + dexmin + ") ";
			if(conChk) astring += "CON(Min " + conmin + ") ";
			if(chrChk) astring += "CHR(Min " + chrmin + ") ";
			alert(astring);
			MCC = ds.CharMultiClass.selectedIndex = 0;
			}
		if(MCC != 0) {
			if(MCC==1 || MCC==2 || MCC==3 || MCC==7 || MCC==8 || MCC==9 || MCC==10 || MCC==11) {
				if(ds.Str.value == 18) {SStr = randNum(1,100); ds.SStr.value = SStr;}
				}
			else ds.SStr.value = "";
			cg = (randNum(1,6)+randNum(1,6)+randNum(1,6))*10;
			fg = (randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4)+randNum(1,4))*10;
			mg = (randNum(1,4)+randNum(1,4))*10;
			tg = (randNum(1,6)+randNum(1,6))*10;
			classSA = ""; xpBonus = "";
			if(MCC == 1) { // Cleric/Fighter
				ds.HitPoints.value = Math.round((randNum(1,10)+randNum(1,8)+fhpb)/2);
				ds.Gold.value = (cg+fg)/2;
				ds.Save1.value=10;ds.Save2.value=13;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "May use any armor and weapon type. Spell use. Turn away or command undead.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter) ";
				if(statArray[Wisdom] > 15) xpBonus += "+10% earned exp. (cleric)";
				if(race == HalfElf) ds.CharAge.value = 48;
				if(race == HalfOrc) ds.CharAge.value = 24;
				}
			if(MCC == 2) { // CFM
				ds.HitPoints.value = Math.round((randNum(1,8)+randNum(1,10)+randNum(1,4)+fhpb)/3);
				ds.Gold.value = (cg+fg+mg)/3;
				ds.Save1.value=10;ds.Save2.value=13;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "May use any armor and weapon type. Spell use. Turn away or command undead.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter) ";
				if(statArray[Intelligence] > 15) xpBonus += "+10% earned exp. (mage) ";
				if(statArray[Wisdom] > 15) xpBonus += "+10% earned exp. (cleric)";
				if(race == HalfElf) ds.CharAge.value = 48;
				}
			if(MCC == 3) { // CR
				ds.HitPoints.value = Math.round((randNum(1,8)+randNum(1,8)+randNum(1,8)+fhpb)/2);
				ds.Gold.value = (cg+fg)/2;
				ds.Save1.value=10;ds.Save2.value=13;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "+1 to hit per Ranger level vs. giant class humanoids. Surprise 50%. Tracking ability (detailed in the PH on pg. 24). Spell use. Turn away or command undead.";
				if(statArray[Strength] > 15 && statArray[Intelligence] > 15 && statArray[Wisdom] > 15) xpBonus = "+10% earned exp. (ranger)";
				if(statArray[Wisdom] > 15) xpBonus += "+10% earned exp. (cleric)";
				if(race == HalfElf) ds.CharAge.value = 48;
				}
			if(MCC == 4) { // CM
				ds.HitPoints.value = Math.round((randNum(1,8)+randNum(1,4)+nhpb)/2);
				ds.Gold.value = (cg+mg)/2;
				ds.Save1.value=10;ds.Save2.value=13;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "Spell use. Turn away or command undead. May use any armor, restricted to blunt weapons.";
				if(statArray[Intelligence] > 15) xpBonus += "+10% earned exp. (mage) ";
				if(statArray[Wisdom] > 15) xpBonus += "+10% earned exp. (cleric) ";
				if(race == HalfElf) ds.CharAge.value = 48;
				}
			if(MCC == 5) { // CT
				ds.HitPoints.value = Math.round((randNum(1,8)+randNum(1,6)+nhpb)/2);
				ds.Gold.value = (cg+tg)/2;
				ds.Save1.value=10;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "Spell use. Turn away or command undead. May use any armor, restricted to blunt weapons. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage.";
				if(statArray[Dexterity] > 15) xpBonus += "+10% earned exp. (thief) ";
				if(statArray[Wisdom] > 15) xpBonus += "+10% earned exp. (cleric) ";
				if(race == HalfOrc) ds.CharAge.value = 28;
				}
			if(MCC == 6) { // CA
				ds.HitPoints.value = Math.round((randNum(1,8)+randNum(1,6)+nhpb)/2);
				ds.Gold.value = (cg+tg)/2;
				ds.Save1.value=10;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "Spell use. Turn away or command undead. May use any armor, restricted to blunt weapons. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage.";
				if(statArray[Wisdom] > 15) xpBonus = "+10% earned exp. (cleric)";
				if(race == HalfOrc) ds.CharAge.value = 28;
				}
			if(MCC == 7) { // FM
				ds.HitPoints.value = Math.round((randNum(1,10)+randNum(1,4)+fhpb)/2);
				ds.Gold.value = (mg+fg)/2;
				ds.Save1.value=14;ds.Save2.value=13;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "May use any armor and weapon type. Spell use.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter) ";
				if(statArray[Intelligence] > 15) xpBonus += "+10% earned exp. (mage) ";
				if(race == Elf) ds.CharAge.value = 180;
				if(race == HalfElf) ds.CharAge.value = 46;
				}
			if(MCC == 8) { // FI
				ds.HitPoints.value = Math.round((randNum(1,10)+randNum(1,4)+fhpb)/2);
				ds.Gold.value = (mg+fg)/2;
				ds.Save1.value=14;ds.Save2.value=13;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "May use any armor and weapon type. Spell use.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter)";
				if(race == Gnome) ds.CharAge.value = 124;
				}
			if(MCC == 9) { // FT
				ds.HitPoints.value = Math.round((randNum(1,10)+randNum(1,6)+fhpb)/2);
				ds.Gold.value = (tg+fg)/2;
				ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "May use any armor and weapon type. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter) ";
				if(statArray[Dexterity] > 15) xpBonus += "+10% earned exp. (thief)";
				if(race == Elf) ds.CharAge.value = 160;
				if(race == Dwarf) ds.CharAge.value = 93;
				if(race == Halfling) ds.CharAge.value = 48;
				if(race == Gnome) ds.CharAge.value = 100;
				if(race == HalfElf) ds.CharAge.value = 46;
				if(race == HalfOrc) ds.CharAge.value = 28;
				}
			if(MCC == 10) { // FA
				ds.HitPoints.value = Math.round((randNum(1,10)+randNum(1,6)+fhpb)/2);
				ds.Gold.value = (tg+fg)/2;
				ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "May use any armor and weapon type. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter)";
				if(race == HalfOrc) ds.CharAge.value = 28;
				}
			if(MCC == 11) { // FMT
				ds.HitPoints.value = Math.round((randNum(1,10)+randNum(1,6)+randNum(1,4)+fhpb)/2);
				ds.Gold.value = (tg+fg+mg)/3;
				ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "May use any armor and weapon type. Spell use. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage.";
				if(statArray[Strength] > 15) xpBonus = "+10% earned exp. (fighter) ";
				if(statArray[Intelligence] > 15) xpBonus += "+10% earned exp. (mage) ";
				if(statArray[Dexterity] > 15) xpBonus += "+10% earned exp. (thief)";
				if(race == Elf) ds.CharAge.value = 180;
				if(race == HalfElf) ds.CharAge.value = 46;
				}
			if(MCC == 12) { // MT
				ds.HitPoints.value = Math.round((randNum(1,4)+randNum(1,6)+nhpb)/2);
				ds.Gold.value = (tg+mg)/2;
				ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "Spell use. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage. Restricted to leather armor, most small weapons.";
				if(statArray[Intelligence] > 15) xpBonus = "+10% earned exp. (mage) ";
				if(statArray[Dexterity] > 15) xpBonus += "+10% earned exp. (thief)";
				if(race == Elf) ds.CharAge.value = 160;
				if(race == HalfElf) ds.CharAge.value = 46;
				}
			if(MCC == 13) { // IT
				ds.HitPoints.value = Math.round((randNum(1,4)+randNum(1,6)+nhpb)/2);
				ds.Gold.value = (tg+mg)/2;
				ds.Save1.value=13;ds.Save2.value=12;ds.Save3.value=11;ds.Save4.value=15;ds.Save5.value=12;
				classSA = "Spell use. Thief: PP 30%, OL 25%, F/RT 20%, MS 15%, HIS 10%, HN 10%, CW 85%, RL -. Backstab at +4 to hit, x2 damage. Restricted to leather armor, most small weapons.";
				if(statArray[Dexterity] > 15) xpBonus = "+10% earned exp. (thief)";
				if(race == Gnome) ds.CharAge.value = 124;
				}
			if(MCC == 14) { // Warrior/Bard
				ds.ArmorClass.value = 10;
				ds.HitPoints.value = randNum(1,6) + fhpb;
				ds.Gold.value = (tg+fg)/2;
				ds.Save1.value=14;ds.Save2.value=13;ds.Save3.value=14;ds.Save4.value=16;ds.Save5.value=15;
				classSA = "May use any armor and weapon type. Druid/Illusionist Spell Use.  Charm: 10% Lore: 0% RL: 0%. ";
				if(statArray[Dexterity] > 15) xpBonus = "Does not get '+10% earned experience'.";
				if(race == Human)    ds.CharAge.value = 18 + randNum(1,4);
				if(race == Elf)      ds.CharAge.value = 50 + randNum(5,30);
				if(race == Dwarf)    ds.CharAge.value = 75 + randNum(3,18);
				if(race == Halfling) ds.CharAge.value = 40 + randNum(2,8);
				if(race == Gnome)    ds.CharAge.value = 80 + randNum(5,20);
				if(race == HalfElf)  ds.CharAge.value = 22 + randNum(3,18);
				if(race == HalfOrc)  ds.CharAge.value = 20 + randNum(2,8);	
			}
				addText();
			}
		}
	else {
		alert("Please roll your stats first");
		ds.CharMultiClass.selectedIndex = 0;
		ds.RollButton.focus();
		}
	}
function checkAlign() {
	ds = document.Stats;
	align = ds.Align.selectedIndex;
	rcc = ds.CharClass.selectedIndex;
	mcc = ds.CharMultiClass.selectedIndex;
	acheck = 0;
	if(rollFlag) {
		if(rcc != 0 || mcc != 0) {
			if(align == 1) {
				if(rcc == 5 || rcc == 8 || rcc == 9) acheck = 1;
				if(mcc == 5 || mcc == 6 || mcc == 9 || mcc == 10 || mcc == 11 || mcc == 12 || mcc == 13) acheck = 1;
				}
			if(align == 2) {
				if(rcc == 2 || rcc == 3 || rcc == 5 || rcc == 9) acheck = 1;
				if(mcc == 3 || mcc == 6 || mcc == 10) acheck = 1;
				}
			if(align == 3) {
				if(rcc == 2 || rcc == 3 || rcc == 5) acheck = 1;
				if(mcc == 3) acheck = 1;
				}
			if(align == 4) {
				if(rcc == 3 || rcc == 5 || rcc == 9 || rcc == 10) acheck = 1;
				if(mcc == 6 || mcc == 9 || mcc == 10 || mcc == 11 || mcc == 12 || mcc == 13) acheck = 1;
				}
			if(align == 5) {
				if(rcc == 2 || rcc == 3 || rcc == 9 || rcc == 10) acheck = 1;
				if(mcc == 3 || mcc == 6 || mcc == 10) acheck = 1;
				}
			if(align == 6) {
				if(rcc == 2 || rcc == 3 || rcc == 5 || rcc == 10) acheck = 1;
				if(mcc == 3) acheck = 1;
				}
			if(align == 7) {
				if(rcc == 3 || rcc == 5 || rcc == 9 || rcc == 10) acheck = 1;
				if(mcc == 6 || mcc == 9 || mcc == 10 || mcc == 11 || mcc == 12 || mcc == 13) acheck = 1;
				}
			if(align == 8) {
				if(rcc == 2 || rcc == 3 || rcc == 5 || rcc == 9 || rcc == 10) acheck = 1;
				if(mcc == 3 || mcc == 6 || mcc == 10) acheck = 1;
				}
			if(align == 9) {
				if(rcc == 2 || rcc == 3 || rcc == 5 || rcc == 10) acheck = 1;
				if(mcc == 3) acheck = 1;
				}
			if(acheck) {
				astring = "A ";
				if(rcc != 0) astring += ds.CharClass.value;
				if(mcc != 0) astring += ds.CharMultiClass.value;
				astring += " character may not be of " + ds.Align.value + " alignment.";
				alert(astring);
				ds.Align.selectedIndex = 0;
				}
			else addText();
			}
		else {
			alert("Please select your class first.");
			ds.Align.selectedIndex = 0;
			ds.RollButton.focus();
			}
		}
	else {
		alert("Please roll your stats first");
		ds.Align.selectedIndex = 0;
		ds.RollButton.focus();
		}
	}
function openTable1() {
	window.open("crt1.html","CRT1","toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500,height=248");
	}
function openTable3() {
	window.open("crt3.html","CRT3","toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=460,height=296");
	}
function processThief() {
	ds = document.Stats;
	}
function cleanPrint() {
	ds = document.Stats;
	if(ds.Align.selectedIndex != 0) {
		if(ds.CharName.valu != "") {
			if(ds.CharClass.selectedIndex != 0) printClass = ds.CharClass.value;
			if(ds.CharMultiClass.selectedIndex != 0) printClass = ds.CharMultiClass.value;
			if(ds.SStr.value != "") printStr = ds.Str.value + "/" + ds.SStr.value;
			else printStr = ds.Str.value;
			printWindow = open("","Print","toolbar=yes,location=no,status=no,menubar=yes,scrollbars=yes,resizable=no,width=640,height=500");

printWindow.document.write("<HTML><HEAD><TITLE>CharGen98 - Player Character Record Sheet</TITLE></HEAD>");
printWindow.document.write("<BODY bgcolor='#FFFFFF' topmargin='0' leftmargin='0' marginwidth='0' marginheight='0'>");
printWindow.document.write("<center><table width='600' border='0' cellspacing='0' bgcolor='#FFFFFF'>");
printWindow.document.write("<tr><td valign='top'><table border='0' cellspacing='0'><tr>");
printWindow.document.write("<td><table border='1' cellspacing='0' bgcolor='#c0c0c0' width='340'><tr>");
printWindow.document.write("<td><table border='0' cellspacing='0' cellspacing='4' width='340'><tr>");
printWindow.document.write("<td bgcolor='#c0c0c0' width='115'>");
printWindow.document.write("<font face='Arial' size='2'><b><i>&nbsp;Character Name:</i></b></font></td>");
printWindow.document.write("<td bgcolor='#e8e8e8'>");
printWindow.document.write("<font face='Arial' size='3'><b>&nbsp;" + ds.CharName.value + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr></table></td><td>");
printWindow.document.write("<table cellspacing='0' width='260' border='0'><tr><td align='center'>");
printWindow.document.write("<font face='times new roman' size='3'><b>Advanced Dungeons & Dragons</b></font><br>");
printWindow.document.write("<font face='Arial' size='1'>Player Character Record Sheet</font></td>");
printWindow.document.write("</tr></table></td></tr></table></td></tr><tr><td><table cellspacing='0'>");
printWindow.document.write("<tr><td align='center'><table border='0' cellspacing='0' cellspacing='4' width='100'>");
printWindow.document.write("<tr><td bgcolor='#e0e0e0' align='center'>");
printWindow.document.write("<font face='Arial' size='2'><b><u>" + ds.CharRace.value + "</u></b></font><br>");
printWindow.document.write("<font face='Arial' size='1'><i>Race</i></font></td></tr></table></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' cellspacing='4' width='160'><tr>");
printWindow.document.write("<td bgcolor='#e0e0e0' align='center'>");
printWindow.document.write("<font face='Arial' size='2'><b><u>" + printClass + "</u></b></font><br>");
printWindow.document.write("<font face='Arial' size='1'><i>Class</i></font></td></tr></table></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' cellspacing='4' width='125'><tr>");
printWindow.document.write("<td bgcolor='#e0e0e0' align='center'>");
printWindow.document.write("<font face='Arial' size='2'><b><u>" + ds.Align.value + "</u></b></font><br>");
printWindow.document.write("<font face='Arial' size='1'><i>Alignment</i></font></td></tr></table></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' cellspacing='4' width='50'><tr>");
printWindow.document.write("<td bgcolor='#e0e0e0' align='center'>");
printWindow.document.write("<font face='Arial' size='2'><b><u>" + ds.CharAge.value + "</u></b></font><br>");
printWindow.document.write("<font face='Arial' size='1'><i>Age</i></font></td></tr></table></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' cellspacing='4' width='80'><tr>");
printWindow.document.write("<td bgcolor='#e0e0e0' align='center'>");
printWindow.document.write("<font face='Arial' size='2'><b><u>" + ds.Height.value + "</u></b></font><br>");
printWindow.document.write("<font face='Arial' size='1'><i>Height</i></font></td></tr></table></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' cellspacing='4' width='80'><tr>");
printWindow.document.write("<td bgcolor='#e0e0e0' align='center'>");
printWindow.document.write("<font face='Arial' size='2'><b><u>" + ds.Weight.value + "</u></b></font><br>");
printWindow.document.write("<font face='Arial' size='1'><i>Weight</i></font></td></tr></table></td>");
printWindow.document.write("</tr></table></td></tr><tr>");
printWindow.document.write("<td align='center'><hr size='1' color='#000000' noshade></td>");
printWindow.document.write("</tr><tr><td><table cellspacing='0' border='0' width='100%'><tr>");
printWindow.document.write("<td valign='top'><table border='1' cellspacing='0' bordercolor='#000000' width='350'>");
printWindow.document.write("<tr><td align='center' width='35'><font size='2' face='Courier'>STR:</font></td>");
printWindow.document.write("<td align='center' width='50' bgcolor='#FFF0F0'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + printStr + "</b></font></td>");
printWindow.document.write("<td width='265'><table border='0' cellspacing='0' width='100%'><tr>");
printWindow.document.write("<td align='center'><font size='1'>Hit<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + strhb + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Dmg<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + strdb + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Wt<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + strwa + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Open<br>Doors</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + strod + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Bend<br>Bars</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + strbb + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr><tr>");
printWindow.document.write("<td align='center'><font size='2' face='Courier'>INT:</font></td>");
printWindow.document.write("<td align='center' bgcolor='#FFF0F0'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Int.value + "</b></font></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' width='100%'><tr>");
printWindow.document.write("<td align='center'><font size='1'>Add.<br>Lang.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + intal + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Know<br>Spell</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + intks + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Min<br>Spells</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + intll + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Max<br>Spells</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + inthl + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr><tr>");
printWindow.document.write("<td align='center'><font size='2' face='Courier'>WIS:</font></td>");
printWindow.document.write("<td align='center' bgcolor='#FFF0F0'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Wis.value + "</b></font></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' width='100%'><tr>");
printWindow.document.write("<td align='center'><font size='1'>Mind<br>Save</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + wisms + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Spell<br>Fail</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + wiscf + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Bonus<br>Spells</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + wissb + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr><tr>");
printWindow.document.write("<td align='center'><font size='2' face='Courier'>DEX:</font></td>");
printWindow.document.write("<td align='center' bgcolor='#FFF0F0'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Dex.value + "</b></font></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' width='100%'><tr>");
printWindow.document.write("<td align='center'><font size='1'>Surprise<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + dexra + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Missile<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + dexra + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Defense<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + dexda + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr><tr>");
printWindow.document.write("<td align='center'><font size='2' face='Courier'>CON:</font></td>");
printWindow.document.write("<td align='center' bgcolor='#FFF0F0'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Con.value + "</b></font></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' width='100%'><tr>");
printWindow.document.write("<td align='center'><font size='1'>H.P.<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + conhp + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>System<br>Shock</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + conss + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Ressurect<br>Survival</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + conrs + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr><tr>");
printWindow.document.write("<td align='center'><font size='2' face='Courier'>CHR:</font></td>");
printWindow.document.write("<td align='center' bgcolor='#FFF0F0'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Chr.value + "</b></font></td>");
printWindow.document.write("<td><table border='0' cellspacing='0' width='100%'><tr>");
printWindow.document.write("<td align='center'><font size='1'>Max #<br>Hench</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + chrmh + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Loyalty<br>Base</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + chrlb + "</b></font></td>");
printWindow.document.write("<td align='center'><font size='1'>Reaction<br>Adj.</font></td>");
printWindow.document.write("<td><font size='2' face='Arial'><b>" + chrra + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr></table></td><td valign='top' align='right'>");
printWindow.document.write("<table border='1' cellspacing='0' bordercolor='#000000' width='240'>");
printWindow.document.write("<tr><td colspan='4' align='center' bgcolor='#000000'>");
printWindow.document.write("<font size='3' color='#FFFFFF'><b>SAVING THROWS</b></font></td>");
printWindow.document.write("</tr><tr>");
printWindow.document.write("<td width='120' bgcolor='#e0e0e0'><font size='1' face='Arial'>Cause</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#e0e0e0'><font size='1' face='Arial'>Mod</font></td>");
printWindow.document.write("<td align='center' width='60' bgcolor='#e0e0e0'><font size='1' face='Arial'>Vs.</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#e0e0e0'><font size='1' face='Arial'>Base</font></td>");
printWindow.document.write("</tr><tr><td width='110'><font size='1' face='Arial'>" + savePoison + "</font></td>");
printWindow.document.write("<td align='center' width='30'><font size='1' face='Arial'>" + savePoisonAmt + "</td>");
printWindow.document.write("<td align='center' width='60'><font size='1'>Paralyze/<br>Poison</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#F0F0FF'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Save1.value + "</b></font></td>");
printWindow.document.write("</tr><tr><td width='110'><font size='1' face='Arial'>&nbsp;</font></td>");
printWindow.document.write("<td align='center' width='30'><font size='1' face='Arial'>&nbsp;</td>");
printWindow.document.write("<td align='center' width='60'><font size='1'>Petrify<br>Poly</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#F0F0FF'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Save2.value + "</b></font></td>");
printWindow.document.write("</tr><tr><td width='110'><font size='1' face='Arial'>" + saveRSW + "</font></td>");
printWindow.document.write("<td align='center' width='30'><font size='1' face='Arial'>" + saveRSWAmt + "</td>");
printWindow.document.write("<td align='center' width='60'><font size='1'>Rod, Staff<br>or Wand</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#F0F0FF'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Save3.value + "</b></font></td>");
printWindow.document.write("</tr><tr><td width='110'><font size='1' face='Arial'>&nbsp;</font></td>");
printWindow.document.write("<td align='center' width='30'><font size='1' face='Arial'>&nbsp;</td>");
printWindow.document.write("<td align='center' width='60'><font size='1'>Breath<br>Weapon</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#F0F0FF'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Save4.value + "</b></font></td>");
printWindow.document.write("</tr><tr><td width='110'><font size='1' face='Arial'>" + saveMA + " " + saveSpell + "</font></td>");
printWindow.document.write("<td align='center' width='30'><font size='1' face='Arial'>" + saveMAAmt + " " + saveSpellAmt + "</td>");
printWindow.document.write("<td align='center' width='60'><font size='1'>Spells<br>&nbsp;</font></td>");
printWindow.document.write("<td align='center' width='30' bgcolor='#F0F0FF'>");
printWindow.document.write("<font size='3' face='Arial'><b>" + ds.Save5.value + "</b></font></td>");
printWindow.document.write("</tr></table></td></tr></table></td></tr>");
printWindow.document.write("<tr><td align='center'><hr size='1' color='#000000' noshade></td></tr>");
printWindow.document.write("<tr><td align='center'><table border='0' cellspacing='0' width='600'>");
printWindow.document.write("<tr><td width='50' align='center' valign='top'>");
printWindow.document.write("<table border='1' cellspacing='0' width='50' bordercolor='#808080'>");
printWindow.document.write("<tr><td align='center' bgcolor='#D0D0D0'>");
printWindow.document.write("<font size='1' face='Arial'><b>Hit Points</b></font></td></tr><tr>");
printWindow.document.write("<td align='center'><font face='Arial' size='5'><b>" + ds.HitPoints.value + "</b></font></td>");
printWindow.document.write("</tr></table></td><td width='130' align='center' valign='top'>");
printWindow.document.write("<table border='1' cellspacing='0' width='130' bordercolor='#000000'>");
printWindow.document.write("<tr><td align='center' bgcolor='#D0D0D0' width='40'>");
printWindow.document.write("<font size='1' face='Arial'><b>Armor<br>Class</b></font></td>");
printWindow.document.write("<td rowspan='2' width='90' valign='top'><font size='1' face='Arial'>");
printWindow.document.write("Surprised AC:&nbsp;<br>Shieldless AC:&nbsp;<br>Rear AC:&nbsp;</font></td>");
printWindow.document.write("</tr><tr><td align='center'>");
printWindow.document.write("<font face='Arial' size='5'><b>" + ds.ArmorClass.value + "</b></font></td>");
printWindow.document.write("</tr></table></td><td width='420' align='center' valign='top'>");
printWindow.document.write("<table border='1' cellspacing='0' width='420' bordercolor='#000000'>");
printWindow.document.write("<tr><td width='60' align='center' rowspan='3'>");
printWindow.document.write("<table border='0' cellspacing='0' width='60'><tr>");
printWindow.document.write("<td bgcolor='#D0D0D0' align='center'><font size='1' face='Arial'>Movement</font></td>");
printWindow.document.write("</tr><tr><td bgcolor='#E8E8E8' align='center'>");
printWindow.document.write("<font size='2' face='Arial'><b>120'</b></font></td></tr><tr>");
printWindow.document.write("<td bgcolor='#D0D0D0' align='center'><font size='1' face='Arial'>Base Rate</font></td>");
printWindow.document.write("</tr></table></td>");
printWindow.document.write("<td width='80'><font size='1'>Hvy(x3/4): <b>90'</b></font></td>");
printWindow.document.write("<td width='80'><font size='1'>Run(x10): <b>1200'</b></font></td>");
printWindow.document.write("<td width='80'><font size='1'>Day <b>20mi.</b></font></td>");
printWindow.document.write("<td width='120' rowspan='3' valign='top'><font size='1' face='Arial'>Special</font></td>");
printWindow.document.write("</tr><tr><td width='80'><font size='1'>Load(x1/2): <b>60'</b></font></td>");
printWindow.document.write("<td width='80'><font size='1'>Nrm(x5): <b>600'</b></font></td>");
printWindow.document.write("<td width='80'><font size='1'>HiHz(x2/3): <b>80'</b></font></td>");
printWindow.document.write("</tr><tr><td width='80'><font size='1'>Max(x1/4): <b>30'</b></font></td>");
printWindow.document.write("<td width='80'><font size='1'>Crl(x1/2): <b>60'</b></font></td>");
printWindow.document.write("<td width='80'><font size='1'>Swim: <b>60'</b></font></td>");
printWindow.document.write("</tr></table></td></tr></table></td></tr>");
printWindow.document.write("<tr><td align='center'><hr size='1' color='#000000' noshade></td></tr>");
printWindow.document.write("<tr><td align='center'><table border='0' cellspacing='0' width='600'>");
printWindow.document.write("<tr><td align='center' width='300' valign='top'>");
printWindow.document.write("<table border='0' cellspacing='0' width='297'><tr bgcolor='#D8D8D8'>");
printWindow.document.write("<td><font size='1' face='Arial'>Special Abilities - Race</font></td>");
printWindow.document.write("</tr><tr><td><font size='1'>Vision: <b>" + charVis + "</b></font></td>");
printWindow.document.write("</tr><tr><td><font size='1'>" + raceSA + "</font></td>");
printWindow.document.write("</tr></table></td><td align='center' width='300' valign='top'>");
printWindow.document.write("<table border='0' cellspacing='0' width='297'><tr bgcolor='#D8D8D8'>");
printWindow.document.write("<td><font size='1' face='Arial'>Special Abilities - Class</font></td>");
printWindow.document.write("</tr><tr><td><font size='1'>" + xpBonus + " " + classSA + "</font></td></tr></table></td></tr>");
printWindow.document.write("</table></td></tr>");
printWindow.document.write("<tr><td align='center'><hr size='1' color='#000000' noshade></td></tr>");
printWindow.document.write("</table></center></BODY></HTML>");
			}
		else {alert("Please give your character a name."); ds.CharName.focus();}
		}
	else {alert("Please select your alignment before printing."); ds.Align.focus();}
	}
