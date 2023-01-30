let laptop1 = {
    cpu: 'i7',
    ram: '16GB',
    brand: 'Dell',

    getConfig: function(){
        console.log(this.cpu);
    }
}

let laptop2 = {
    cpu: 'i7',
    ram: '8GB',
    brand: 'Hp',
    getConfig: function(){
        console.log(this.cpu);
    }
}

laptop1.getConfig();

laptop2.getConfig();