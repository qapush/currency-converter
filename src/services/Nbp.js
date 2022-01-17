export default class Nbp{

    getTable(){
        return fetch('http://api.nbp.pl/api/exchangerates/tables/a?format=json')
                .then(resp => resp.json())
                .then(resp => {
                    const data = {
                        date: resp[0].effectiveDate,
                        rates: resp[0].rates.reduce( (acc, item) => {
                            acc[item.code] = item.mid
                            return acc;
                        }, {PLN: 1})
                    }
                    return data;
                })
    }

    getRate(currency){
        return fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}?format=json`)
                .then(resp => resp.json());
    }
}