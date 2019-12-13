$(document).ready(() => {

    let todaysDate = new Date();
    let time = todaysDate.getHours() + ":" + todaysDate.getMinutes();
    let timeContent = document.createTextNode(time);
    let timeDiv = document.getElementById('current_time');
    timeDiv.appendChild(timeContent);

    let timeZoneFormatted = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]
    let timeZoneContent = document.createTextNode(timeZoneFormatted);
    let timeZoneSpan = document.getElementById('time_zone');
    timeZoneSpan.appendChild(timeZoneContent);

    let apiResponse = {
        "data": [
            {
                "city": "New York",
                "state": "NY",
                "population": 8175133,
                "density": 10.4311
            },
            {
                "city": "San Farancisco",
                "state": "CA",
                "population": 805235,
                "density": 6.6589
            },
            {
                "city": "Boston",
                "state": "MA",
                "population": 645149,
                "density": 5.1434
            }
        ]
    }

    apiResponse.data.map((num) => {
        num.density = num.density.toFixed(1)
        return num;
    });

    let table = $('#city_table').DataTable({
        data: apiResponse.data,
        columns: [
            { data: 'city' },
            { data: 'density'}
        ]
    });

    $('#add_to_table').on('click', function(e) {
        e.preventDefault();

        let city_state = $('#city_state').val()
        let city_density = parseFloat($('#city_density').val()).toFixed(1)

        console.log(typeof city_density);
        
        
        table.rows.add(
            [{
                "city": city_state,
                "density": city_density
            }]
        ).draw();
        
    })

})