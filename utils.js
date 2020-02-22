
const url = 'http://octopi.local/api/printer';
function getPrinterStatus(callback){
    return $.ajax({
        url: url,
        success: data => {
            callback(data);
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'X-Api-Key': 'BAC15E6C04F74B898293CB3B2081840E'
        }
    });
}

function start(callback){
    setInterval(() => {
        getPrinterStatus(callback)
    }, 1000);
}