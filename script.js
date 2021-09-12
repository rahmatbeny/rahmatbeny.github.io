var names=new Array();
names[0]="Rahmat";
names[1]="Beny";
names[2]="Susanto";
names[3]="Rafika";
names[4]="Hasni";
names[5]="Perdana";
names[6]="Hello";
names[7]="Word";
names[8]="Apa";
names[9]="Kabar";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
