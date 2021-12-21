import React from 'react';

export default class Beer extends React.Component {

    render() {
        return (
                <div className={'beer-card ' + this.props.className}>
                    <div className='info'>
                        <h2><span className='beer-title'>{this.props.beer.name}</span>{this.props.beer.tagline}</h2>
                        <p className='description'>{this.props.beer.description}</p>

                        <div className='tags'>
                            <span className='abv'>ABV {this.props.beer.abv}</span>
                            <span className='ibu'>IBU {this.props.beer.ibu}</span>
                        </div>
                        <div className={this.props.display}>
                            <p className='lactose'>Contains Lactose</p>
                        </div>

                    </div>
                    <div className='image'>
                        <img src={this.props.beer.image_url} alt='Beer' />
                    </div>
                </div>
        );
    }
}

