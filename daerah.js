
const inputProv = document.getElementById('provinsi');
const inputKab = document.getElementById('kabupaten');
const inputKec = document.getElementById('kecamatan');
const inputDes = document.getElementById('desa');

if(inputProv){
    fetch('https://apidaerah.danpro.my.id/daerah/provinsi.json').then(res => res.json()).then(data => {
        const option = document.createElement('option');
        option.value = ''; 
        option.text = 'Pilih Provinsi';
        inputProv.appendChild(option);
        for (const prov of data){
            const option = document.createElement('option');
            option.setAttribute('kode', prov.kode);
            option.value = prov.nama;
            option.text = prov.nama;
            inputProv.appendChild(option);
        }
    });

    inputProv.addEventListener('change', function(){
        const kode = this.options[this.selectedIndex].getAttribute('kode');
        fetch('https://apidaerah.danpro.my.id/daerah/kabupaten/'+kode+'.json').then(res => res.json()).then(data => {
            inputKab.innerHTML = '';
            const option = document.createElement('option');
            option.value = '';
            option.text = 'Pilih Kabupaten';
            inputKab.appendChild(option);
            for (const kab of data){
                const option = document.createElement('option');
                option.setAttribute('kode', kab.kode);
                option.value = kab.nama;
                option.text = kab.nama;
                inputKab.appendChild(option);
            }
        });
    });

    inputKab.addEventListener('change', function(){
        const kode = this.options[this.selectedIndex].getAttribute('kode');
        fetch('https://apidaerah.danpro.my.id/daerah/kecamatan/'+kode+'.json').then(res => res.json()).then(data => {
            inputKec.innerHTML = '';
            const option = document.createElement('option');
            option.value = '';
            option.text = 'Pilih kecamatan';
            inputKec.appendChild(option);
            for (const kab of data){
                const option = document.createElement('option');
                option.setAttribute('kode', kab.kode);
                option.value = kab.nama;
                option.text = kab.nama;
                inputKec.appendChild(option);
            }
        });
    });

    inputKec.addEventListener('change', function(){
        const kode = this.options[this.selectedIndex].getAttribute('kode');
        fetch('https://apidaerah.danpro.my.id/daerah/desa/'+kode+'.json').then(res => res.json()).then(data => {
            inputDes.innerHTML = '';
            const option = document.createElement('option');
            option.value = '';
            option.text = 'Pilih desa';
            inputDes.appendChild(option);
            for (const kab of data){
                const option = document.createElement('option');
                option.setAttribute('kode', kab.kode);
                option.value = kab.nama;
                option.text = kab.nama;
                inputDes.appendChild(option);
            }
        });
    });
}
