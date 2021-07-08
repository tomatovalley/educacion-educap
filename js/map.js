var map = L.map('mapa').setView([18.724959, -98.795671], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([18.726311, -98.799619]).addTo(map)
    .bindPopup('Educaper: Juan Perez.')
    
L.marker([18.724076, -98.793770]).addTo(map)
    .bindPopup('Educaper: Alfonso Glez.')
    
L.marker([18.723096, -98.803173]).addTo(map)
    .bindPopup('Educaper: Salma Lopez.')
    
L.marker([18.723957, -98.800572]).addTo(map)
    .bindPopup('Educaper: Clara Vazquez.')
    
L.marker([18.721478, -98.796717    ]).addTo(map)
    .bindPopup('Educaper: Julio Ivan.')

L.marker([18.730072, -98.805085    ]).addTo(map)
    .bindPopup('Educaper: Saul Avila.')

L.marker([18.728870, -98.800431    ]).addTo(map)
    .bindPopup('Educaper: Juan Carlos.')

L.marker([18.725678, -98.800478    ]).addTo(map)
    .bindPopup('Educaper: Luz Selena.')

L.marker([ 18.723536, -98.796224  ]).addTo(map)
    .bindPopup('Educaper: Andrea Hernandez.')