import React, { Component } from 'react'
import classes from './TreatYourDog.module.css'


class TreatYourDog extends Component {

    render() {
        return (
            <div className={classes.TreatYourDog}>
                <h3>We'll treat your dog like family</h3>
                <h5>Connect with a 5-star sitter who'll welcome your dog into their home when you're out of town—whether
                         it’s <a href='#'>just for the weekend</a> or <a href='#'>over a <br /> few weeks</a>. Dog boarding is great for:</h5>
                <ul>
                    <li>Dogs of all ages and abilities, including <a href='#'>puppies</a></li>
                    <li>Pet parents looking for a <a href='#'>safe, loving alternative to a kennel</a></li>
                    <li>Dogs who'd love to socialize with their sitter's pets</li>
                </ul>
            </div>
        );
    }
}


export default TreatYourDog