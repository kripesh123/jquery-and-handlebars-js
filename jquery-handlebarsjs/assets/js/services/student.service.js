function StudentService(){
	this.stdList=[];

	this.add=function(student){
		this.stdList.push(student);
	}

	this.getAll=function(){
		return this.stdList;
	}

}