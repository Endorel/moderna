import React, { Component } from 'react';

import placeholderImage from '../assets/fritidshusforsakring_teaser.jpg';

class InsuranceCard extends Component {

    render() {

        const card = this.props.data;
        let image;

        if (card.image.href) {
            image = card.image.href;
        } else {
            image = placeholderImage;
        }

        const styles = {
            wrapper: {
                width: '20%',
                height: '220px',
                border: '1px solid #bcbfc4',
                display: 'flex',
                flexFlow: 'wrap',
                justifyContent: 'center',
                margin: '0 4px',
                marginBottom: '10px',
            },
            img: {
                width: '100%',
                height: 'auto',
            },
            title: {
                textAlign: 'center',
                marginTop: '20px'
            }
        }

        return (
            <div style={styles.wrapper}>
                <img src={placeholderImage} alt='' style={styles.img} />
                <span style={styles.title}><a href={card.url}>{card.name}</a></span>
            </div>
        )
    }
}

export default InsuranceCard
