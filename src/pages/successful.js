import React, { Component } from 'react';
import SEO from '../components/seo'
import { Link } from 'gatsby'

export default class successful extends Component {
    render() {
        return (
            <div>
                <SEO title="Compra exitosa"/>
                <div className="succesful">
                    <h2>Compra exitosa</h2>
                    <p>Que disfrutes tus compras.😊</p>
                    <span rol="img" aria-label="emoji">❤</span>
                    <Link to="/">Volver al catálogo</Link>
                </div>
            </div>
        )
    }
}
