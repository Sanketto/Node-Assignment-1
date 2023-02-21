const { error } = require('console')
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((res, rej)=>{
		res(fs.writeFile(fileName, fileContent), console.log("File Created!!!"))
		rej((err)=>{
			if(err) return err;
		})
		
	})
}
//console.log(fs);
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((res, rej)=>{
		//fs.readFile(fileName, 'utf-8', (data)=>{console.log(data)})
		res( fs.readFile(fileName, 'utf-8'))
		rej((err)=>{
			if(err) return err;
		})
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((res, rej)=>{
		res(fs.appendFile(fileName, fileContent),console.log("File Updated!!!"))
		rej((err)=>{
			if(err) return err;
		})
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((res, rej)=>{
		res(fs.rm(fileName), console.log("File Deleted!!!"))
		rej((err)=>{
			if(err) return err;
		})
	})
}





module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }