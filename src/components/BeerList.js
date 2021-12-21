import React from 'react';
import axios from 'axios';
import Beer from './Beer';

export default class BeerList extends React.Component {
  state = {
    beers: [],
  }

  

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers?per_page=80`)
      .then(res => {
        const beers = res.data;
        beers.sort(function(a,b){
            return b.abv - a.abv;
        });
        this.setState({ beers });
      })
  }

  render() {
    return (
      <div>
        {
          this.state.beers
            .map(beer => {
                let isDryHopped = false;
                let hasLactose = false;
                beer.ingredients.hops.forEach(element => {
                    if (element.add === 'dry hop') {
                        isDryHopped = true;
                    }
                    if (element.name === 'Lactose') {
                        hasLactose = true;
                    }
                });
                if (hasLactose && isDryHopped) {
                    return <Beer className='dry-hopped' key={beer.id} beer={beer} />
                } else if (hasLactose) {
                    return <Beer key={beer.id} beer={beer} />
                } else if (isDryHopped) {
                    return <Beer key={beer.id} beer={beer} display='none' className='dry-hopped' />
                } else {
                    return <Beer key={beer.id} beer={beer} display='none' />
                }
            }
            )
        }
      </div>
    )
  }
}
