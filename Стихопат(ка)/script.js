var ECG = {
	pq: 12,
	qrs: 12,
	PQ: function() {
		if (this.pq <= 20 && this.pq >=12) {alert('You are still alive');} 
		else {alert('Somting going to hell');}	
	},
	QRS: function() {
		if (this.qrs <= 12 && this.qrs >= 8) {alert('Your heart is beating');} 
		else {alert('Are You Okey?');}
	},
}
ECG.PQ();
ECG.QRS();
var Petrov = {
	pq: 12,
	qrs: 12,
	PQ: function() {
		if (this.pq <= 20 && this.pq >=12) {alert('You are still alive');} 
		else {alert('Somting going to hell');}	
	},
	QRS: function() {
		if (this.qrs <= 12 && this.qrs >= 8) {alert('Your heart is beating');} 
		else {alert('Are You Okey?');}
	},
}
Petrov.PQ = prompt('pq')
Petrov.QRS = prompt('qrs')

Petrov.PQ();
Petrov.QRS();