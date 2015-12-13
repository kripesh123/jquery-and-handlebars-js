function Student(){

	this.id=0;
	this.firstName="";
	this.lastName="";
	this.email="";
	this.contactNo="";
	this.status=false;

	this.getFullName=function(){
		return this.firstName + " " + this.lastName;
	}
}